﻿// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

namespace VirtualClient
{
    using System;
    using System.Collections.Generic;
    using System.Diagnostics.CodeAnalysis;
    using System.IO.Abstractions;
    using System.Linq;
    using System.Net;
    using System.Runtime.InteropServices;
    using System.Text.RegularExpressions;
    using System.Threading;
    using System.Threading.Tasks;
    using VirtualClient.Common;
    using VirtualClient.Contracts;

    /// <summary>
    /// Provides components and services necessary for interacting with the local
    /// system and environment.
    /// </summary>
    public class SystemManagement : ISystemManagement
    {
        internal SystemManagement()
        {
        }

        /// <summary>
        /// The ID of the Virtual Client/agent for the context of the larger
        /// experiment in operation.
        /// </summary>
        public string AgentId { get; internal set; }

        /// <summary>
        /// The ID of the larger experiment in operation.
        /// </summary>
        public string ExperimentId { get; internal set; }

        /// <summary>
        /// The CPU/processor architecture.
        /// </summary>
        public Architecture CpuArchitecture
        {
            get
            {
                return this.PlatformSpecifics.CpuArchitecture;
            }
        }

        /// <summary>
        /// A set of one or more cleanup tasks registered to execute on application
        /// shutdown/exit.
        /// </summary>
        public static List<Action> CleanupTasks { get; } = new List<Action>();

        /// <summary>
        /// Set to true to request a system reboot during profile execution steps.
        /// </summary>
        public static bool IsRebootRequested { get; set; }

        /// <inheritdoc />
        public IDiskManager DiskManager { get; internal set; }

        /// <inheritdoc />
        public IFileSystem FileSystem { get; internal set; }

        /// <inheritdoc />
        public IFirewallManager FirewallManager { get; internal set; }

        /// <inheritdoc />
        public IPackageManager PackageManager { get; internal set; }

        /// <summary>
        /// The system OS/platform.
        /// </summary>
        public PlatformID Platform
        {
            get
            {
                return this.PlatformSpecifics.Platform;
            }
        }

        /// <summary>
        /// The name of the platform/architecture for the system on which the application is
        /// running (e.g. linux-x64, linux-arm64, win-x64, win-arm64).
        /// </summary>
        public string PlatformArchitectureName
        {
            get
            {
                return VirtualClient.Contracts.PlatformSpecifics.GetPlatformArchitectureName(this.Platform, this.CpuArchitecture);
            }
        }

        /// <summary>
        /// The system OS/platform specific information.
        /// </summary>
        public PlatformSpecifics PlatformSpecifics { get; internal set; }

        /// <inheritdoc />
        public ProcessManager ProcessManager { get; internal set; }

        /// <summary>
        /// Whether VC is running in container.
        /// </summary>
        public bool RunningInContainer { get; } = PlatformSpecifics.IsRunningInContainer();

        /// <summary>
        /// Provides features for managing/preserving state on the system.
        /// </summary>
        public IStateManager StateManager { get; internal set; }

        /// <summary>
        /// Cleans up any tracked resources.
        /// </summary>
        public static void Cleanup()
        {
            if (SystemManagement.CleanupTasks.Any())
            {
                SystemManagement.CleanupTasks.ForEach(cleanup =>
                {
                    try
                    {
                        cleanup.Invoke();
                    }
                    catch
                    {
                        // Best effort here.
                    }
                });
            }
        }

        /// <summary>
        /// Returns information about the CPU on the system.
        /// </summary>
        public async Task<CpuInfo> GetCpuInfoAsync(CancellationToken cancellationToken)
        {
            CpuInfo info = null;

            if (this.Platform == PlatformID.Win32NT)
            {
                string command = "CoreInfo64.exe";
                if (this.CpuArchitecture == Architecture.Arm64)
                {
                    command = "CoreInfo64a.exe";
                }

                DependencyPath package = await this.PackageManager.GetPlatformSpecificPackageAsync(
                    VirtualClient.PackageManager.BuiltInCoreInfoPackageName,
                    this.Platform,
                    this.CpuArchitecture,
                    CancellationToken.None);

                string coreInfoExe = this.PlatformSpecifics.Combine(package.Path, command);
                using (IProcessProxy process = this.ProcessManager.CreateProcess(coreInfoExe, "-nobanner /accepteula"))
                {
                    await process.StartAndWaitAsync(CancellationToken.None);
                    process.ThrowIfWorkloadFailed();

                    CoreInfoParser parser = new CoreInfoParser(process.StandardOutput.ToString());
                    info = parser.Parse();
                }
            }
            else if (this.Platform == PlatformID.Unix)
            {
                using (IProcessProxy process = this.ProcessManager.CreateProcess("lscpu"))
                {
                    await process.StartAndWaitAsync(CancellationToken.None);
                    process.ThrowIfWorkloadFailed();

                    LscpuParser parser = new LscpuParser(process.StandardOutput.ToString());
                    info = parser.Parse();
                }
            }

            return info;
        }

        /// <summary>
        /// Returns information about the specific Linux distribution (e.g. Ubuntu, CentOS).
        /// </summary>
        public async Task<LinuxDistributionInfo> GetLinuxDistributionAsync(CancellationToken cancellationToken)
        {
            using (IProcessProxy process = this.ProcessManager.CreateElevatedProcess(PlatformID.Unix, "hostnamectl", string.Empty, Environment.CurrentDirectory))
            {
                await process.StartAndWaitAsync(cancellationToken);
                process.ThrowIfErrored<ProcessException>(ProcessProxy.DefaultSuccessCodes, "hostnamectl failed.", errorReason: ErrorReason.LinuxDistributionNotSupported);
                HostnamectlParser parser = new HostnamectlParser(process.StandardOutput.ToString());

                return parser.Parse();
            }
        }

        /// <summary>
        /// Returns information about memory on the system.
        /// </summary>
        public Task<MemoryInfo> GetMemoryInfoAsync(CancellationToken cancellationToken)
        {
            return Task.FromResult(new MemoryInfo(this.GetTotalSystemMemoryKiloBytes()));
        }

        /// <summary>
        /// Checks if the local IP Address is defined on current system.
        /// </summary>
        /// <param name="ipAddress">IP address present in the environment layout for the agent</param>
        /// <returns>True/False is an IP is defined on current system.</returns>
        public bool IsLocalIPAddress(string ipAddress)
        {
            IPAddress address = IPAddress.Parse(ipAddress);
            IPHostEntry hostEntry = Dns.GetHostEntry(Dns.GetHostName());

            bool isLocal = false;
            if (IPAddress.IsLoopback(address))
            {
                isLocal = true;
            }
            else
            {
                isLocal = hostEntry.AddressList.Contains<IPAddress>(address);
            }

            return isLocal;
        }

        /// <summary>
        /// Causes the process to idle until the operations are cancelled.
        /// </summary>
        /// <param name="cancellationToken">A token that can be used to cancel the wait operation.</param>
        public async Task WaitAsync(CancellationToken cancellationToken)
        {
            while (!cancellationToken.IsCancellationRequested)
            {
                await Task.Delay(100, cancellationToken).ConfigureAwait(false);
            }
        }

        /// <summary>
        /// Causes the process to idle until the time defined by the timeout or until the operations
        /// are cancelled.
        /// </summary>
        /// <param name="timeout">The date/time at which the wait ends and execution should continue.</param>
        /// <param name="cancellationToken">A token that can be used to cancel the wait operation.</param>
        public async Task WaitAsync(DateTime timeout, CancellationToken cancellationToken)
        {
            DateTime effectiveTimeout = timeout;
            if (timeout.Kind != DateTimeKind.Utc)
            {
                effectiveTimeout = timeout.ToUniversalTime();
            }

            while (!cancellationToken.IsCancellationRequested)
            {
                if (DateTime.UtcNow >= effectiveTimeout)
                {
                    break;
                }

                await Task.Delay(100, cancellationToken).ConfigureAwait(false);
            }
        }

        /// <summary>
        /// Causes the process to idle for the period of time defined by the timeout or until the operations
        /// are cancelled.
        /// </summary>
        /// <param name="timeout">The maximum time to wait before continuing.</param>
        /// <param name="cancellationToken">A token that can be used to cancel the wait operation.</param>
        public Task WaitAsync(TimeSpan timeout, CancellationToken cancellationToken)
        {
            return Task.Delay(timeout, cancellationToken);
        }

        private long GetTotalSystemMemoryKiloBytes()
        {
            PlatformSpecifics.ThrowIfNotSupported(this.Platform);
            long systemMemoryInKb = 0;

            switch (this.Platform)
            {
                case PlatformID.Win32NT:

                    // Note on choice of interop:
                    // We found cases where the interop GetPhysicallyInstalledSystemMemory(out totalKilobytes) experiences
                    // an error on systems given certain memory usage situations. This causes the application to throw an
                    // exception and to fail. The interop GlobalMemoryStatusEx(memoryStatus) API call seems to be more stable
                    // as well as it provides more information should we need it at some point in the future.
                    // (see https://docs.microsoft.com/en-us/windows/win32/api/sysinfoapi/nf-sysinfoapi-getphysicallyinstalledsystemmemory)
                    // (see https://docs.microsoft.com/en-us/windows/win32/api/sysinfoapi/nf-sysinfoapi-globalmemorystatusex).
                    WindowsInterop.MEMORYSTATUSEX memoryStatus = new WindowsInterop.MEMORYSTATUSEX();
                    WindowsInterop.GlobalMemoryStatusEx(memoryStatus);

                    if (memoryStatus == null)
                    {
                        throw new DependencyException(
                            $"Windows interop call failed. The application could not retrieve the total system memory installed.",
                            ErrorReason.SystemMemoryReadFailed);
                    }

                    systemMemoryInKb = (long)memoryStatus.ullTotalPhys / 1024;
                    break;

                case PlatformID.Unix:
                    using (IProcessProxy free = this.ProcessManager.CreateProcess("free"))
                    {
                        free.StartAndWaitAsync(CancellationToken.None).GetAwaiter().GetResult();
                        free.ThrowIfErrored<DependencyException>(
                            ProcessProxy.DefaultSuccessCodes,
                            $"Linux 'free' command call failed. The application could not retrieve the total system memory installed.",
                            ErrorReason.SystemMemoryReadFailed);

                        Match memoryOutput = Regex.Match(free.StandardOutput.ToString(), @"Mem:\s*([0-9]+)", RegexOptions.IgnoreCase);
                        if (!memoryOutput.Success)
                        {
                            throw new DependencyException(
                            $"Linux 'free' call returned invalid results. The application could not retrieve the total system memory installed.",
                            ErrorReason.SystemMemoryReadFailed);
                        }

                        systemMemoryInKb = long.Parse(memoryOutput.Groups[1].Value.Trim());
                    }

                    break;
            }

            return systemMemoryInKb;
        }

        [SuppressMessage("StyleCop.CSharp.NamingRules", "SA1310:Field names should not contain underscore", Justification = "Interop code.")]
        internal static class WindowsInterop
        {
            internal static readonly IntPtr INVALID_HANDLE_VALUE = new IntPtr(-1);

            [DllImport("kernel32.dll")]
            [return: MarshalAs(UnmanagedType.Bool)]
            [SuppressMessage("StyleCop.CSharp.NamingRules", "SA1313:Parameter names should begin with lower-case letter", Justification = "Windows Interop")]
            public static extern bool GetPhysicallyInstalledSystemMemory(out ulong TotalMemoryInKilobytes);

            [return: MarshalAs(UnmanagedType.Bool)]
            [DllImport("kernel32.dll", CharSet = CharSet.Auto, SetLastError = true)]
            public static extern bool GlobalMemoryStatusEx([In, Out] MEMORYSTATUSEX lpBuffer);

            [DllImport("kernel32.dll")]
            [return: MarshalAs(UnmanagedType.SysUInt)]
            public static extern uint GetLastError();

            [StructLayout(LayoutKind.Sequential, CharSet = CharSet.Ansi)]
            public struct IP_ADDR_STRING
            {
                public IntPtr Next;
                public IP_ADDRESS_STRING IpAddress;
                public IP_ADDRESS_STRING IpMask;
                public int Context;
            }

            [StructLayout(LayoutKind.Sequential, CharSet = CharSet.Ansi)]
            public struct IP_ADDRESS_STRING
            {
                [MarshalAs(UnmanagedType.ByValTStr, SizeConst = 16)]
                public string Address;
            }

            /// <summary>
            /// contains information about the current state of both physical and virtual memory, including extended memory
            /// </summary>
            [StructLayout(LayoutKind.Sequential, CharSet = CharSet.Auto)]
            [SuppressMessage("StyleCop.CSharp.MaintainabilityRules", "SA1401:Fields should be private", Justification = "Interop struct")]
            [SuppressMessage("StyleCop.CSharp.NamingRules", "SA1307:Accessible fields should begin with upper-case letter", Justification = "Interop struct")]
            public class MEMORYSTATUSEX
            {
                /// <summary>
                /// Size of the structure, in bytes. You must set this member before calling GlobalMemoryStatusEx.
                /// </summary>
                public uint dwLength;

                /// <summary>
                /// Number between 0 and 100 that specifies the approximate percentage of physical memory that is in use (0 indicates no memory use and 100 indicates full memory use).
                /// </summary>
                public uint dwMemoryLoad;

                /// <summary>
                /// Total size of physical memory, in bytes.
                /// </summary>
                public ulong ullTotalPhys;

                /// <summary>
                /// Size of physical memory available, in bytes.
                /// </summary>
                public ulong ullAvailPhys;

                /// <summary>
                /// Size of the committed memory limit, in bytes. This is physical memory plus the size of the page file, minus a small overhead.
                /// </summary>
                public ulong ullTotalPageFile;

                /// <summary>
                /// Size of available memory to commit, in bytes. The limit is ullTotalPageFile.
                /// </summary>
                public ulong ullAvailPageFile;

                /// <summary>
                /// Total size of the user mode portion of the virtual address space of the calling process, in bytes.
                /// </summary>
                public ulong ullTotalVirtual;

                /// <summary>
                /// Size of unreserved and uncommitted memory in the user mode portion of the virtual address space of the calling process, in bytes.
                /// </summary>
                public ulong ullAvailVirtual;

                /// <summary>
                /// Size of unreserved and uncommitted memory in the extended portion of the virtual address space of the calling process, in bytes.
                /// </summary>
                public ulong ullAvailExtendedVirtual;

                /// <summary>
                /// Initializes a new instance of the <see cref="T:MEMORYSTATUSEX"/> class.
                /// </summary>
                public MEMORYSTATUSEX()
                {
                    this.dwLength = (uint)Marshal.SizeOf(typeof(WindowsInterop.MEMORYSTATUSEX));
                }
            }
        }
    }
}