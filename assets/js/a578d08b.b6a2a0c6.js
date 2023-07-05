"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[4444],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1947:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const i={},a="Usage: Command Line Examples",l={unversionedId:"guides/0200-usage-examples",id:"guides/0200-usage-examples",title:"Usage: Command Line Examples",description:"The following documentation covers a range of usage scenarios that apply to the Virtual Client. The sections that follow are meant",source:"@site/docs/guides/0200-usage-examples.md",sourceDirName:"guides",slug:"/guides/0200-usage-examples",permalink:"/VirtualClient/docs/guides/0200-usage-examples",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/guides/0200-usage-examples.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Data/Telemetry Support",permalink:"/VirtualClient/docs/guides/0040-telemetry"},next:{title:"Usage: Testing Disks",permalink:"/VirtualClient/docs/guides/0220-usage-testing-disks"}},s={},u=[{value:"Scenario: Running a Simple Workload",id:"scenario-running-a-simple-workload",level:2},{value:"Scenario: Running a Simple Monitor",id:"scenario-running-a-simple-monitor",level:2},{value:"Scenario: Running a Client Server Workload",id:"scenario-running-a-client-server-workload",level:2},{value:"Scenario: Pass in Metadata for Correlation",id:"scenario-pass-in-metadata-for-correlation",level:2},{value:"Scenario: Log Process Output to the File System",id:"scenario-log-process-output-to-the-file-system",level:2},{value:"Scenario: Upload Metrics and Logs to an Event Hub",id:"scenario-upload-metrics-and-logs-to-an-event-hub",level:2},{value:"Scenario: Uploading Monitoring Information to a Content Store",id:"scenario-uploading-monitoring-information-to-a-content-store",level:2},{value:"Scenario: Running the Azure Profiler in the Background and Uploading .bin Files to a Content Store",id:"scenario-running-the-azure-profiler-in-the-background-and-uploading-bin-files-to-a-content-store",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"usage-command-line-examples"},"Usage: Command Line Examples"),(0,r.kt)("p",null,"The following documentation covers a range of usage scenarios that apply to the Virtual Client. The sections that follow are meant\nto illustrate how to use Virtual Client within these various scenarios as well as what to expect."),(0,r.kt)("h2",{id:"scenario-running-a-simple-workload"},"Scenario: Running a Simple Workload"),(0,r.kt)("p",null,"One of the first things that users of the Virtual Client want to do is to run the application to see how it works. This is a very\nbasic example where we are supplying the minimum number of parameters to the Virtual Client. The '--debug' option instructs the\nVirtual Client to output verbose tracing information to the console."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# Run a COREMARK workload profile. The workload package itself containing the COREMARK executables will\n# be downloaded from the VC workload package store.\n#\n# On Windows\nVirtualClient.exe --profile=PERF-CPU-COREMARK.json --timeout=180 --packages="{BlobStoreConnectionString|SAS URI}"\n\n# On Linux\n./VirtualClient --profile=PERF-CPU-COREMARK.json --timeout=03:00:00 --packages="{BlobStoreConnectionString|SAS URI}"\n')),(0,r.kt)("h2",{id:"scenario-running-a-simple-monitor"},"Scenario: Running a Simple Monitor"),(0,r.kt)("p",null,"Virtual Client offers certain profiles which are designed to run monitors in the background. Monitors often run in the background to capture\ninformation and measurements from the system on which the Virtual Client is running. This is useful when running a workload on the system at the\nsame time. However, monitors can be run alone and without any workloads if desirable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# Run a default monitor profile. The default monitor profile captures performance counters\n# from the system.\n#\n# On Windows\nVirtualClient.exe --profile=MONITORS-DEFAULT.json --timeout=180 --packages="{BlobStoreConnectionString|SAS URI}"\n\n# On Linux\n./VirtualClient --profile=MONITORS-DEFAULT.json --timeout=180 --packages="{BlobStoreConnectionString|SAS URI}"\n')),(0,r.kt)("h2",{id:"scenario-running-a-client-server-workload"},"Scenario: Running a Client Server Workload"),(0,r.kt)("p",null,"Some workload profiles require multiple systems to operate. For example the CPS, NTttcp and SockPerf workloads requires a client system and a server\nsystem to be valid. Multi-system workload profiles require and environment layout to be supplied to the Virtual Client. An environment\nlayout describes the topology...where the other Virtual Client instances are and what roles they will play. To get familiar\nwith defining an environment layouts, see the documentation below. Note that each of the workload profiles has documentation that\nprovides examples of a valid environment layout for that particular workload profile/workload."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/VirtualClient/docs/guides/0020-client-server"},"Environment Layouts"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# Run the workload using the default port for hosting the REST API\nVirtualClient.exe --profile=PERF-NETWORK.json --timeout=180 --packages="{BlobStoreConnectionString|SAS URI}" --layoutPath=C:\\any\\path\\to\\layout.json\n\n# Run the workload using a specific port for hosting the REST API\nVirtualClient.exe --profile=PERF-NETWORK.json --timeout=180 --api-port=4501 --packages="{BlobStoreConnectionString|SAS URI}" --layoutPath=C:\\any\\path\\to\\layout.json\n\n# Run the workload using a specific port for hosting the REST API different for the Client and Server roles\nVirtualClient.exe --profile=PERF-NETWORK.json --timeout=180 --api-port=4501/Client,4502/Server --packages="{BlobStoreConnectionString|SAS URI}" --layoutPath=C:\\any\\path\\to\\layout.json\n')),(0,r.kt)("h2",{id:"scenario-pass-in-metadata-for-correlation"},"Scenario: Pass in Metadata for Correlation"),(0,r.kt)("p",null,"The Virtual Client is designed to be generally agnostic to the nomenclature of the automation/execution system that runs it. However, to ensure that the data emitted by\nthe application can be correlated with the data captured by the automation system executing it, metadata can be supplied on the command line. Every metadata property emitted\nwill be included in ALL metrics, counters, logs etc... telemetry that is emitted by the application."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'VirtualClient.exe --profile=PERF-CPU-COREMARK.json --timeout=03:00:00 --packages="{BlobStoreConnectionString|SAS URI}" --metadata="experimentGroup=Group A,,,nodeId=eB3fc2d9-157b-4efc-b39c-a454a0779a5b,,,tipSessionId=73e8ae54-e0a0-48b6-9bda-4a269672b9b1,,,cluster=cluster01,,,region=East US 2"\n')),(0,r.kt)("h2",{id:"scenario-log-process-output-to-the-file-system"},"Scenario: Log Process Output to the File System"),(0,r.kt)("p",null,"Virtual Client runs a wide range of workloads, monitors and dependency handlers when executing a given profile. The following examples show\nhow to instruct the application to log the output of processes to files in the logs directory on the file system."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# Log the workload process output to the file system.\n#\n# On Windows\nVirtualClient.exe --profile=PERF-IO-FIO.json --timeout=180 --packages="{BlobStoreConnectionString|SAS URI}" --log-to-file\n\n# On Linux\n./VirtualClient --profile=PERF-IO-FIO.json --timeout=180 --packages="{BlobStoreConnectionString|SAS URI}" --log-to-file\n')),(0,r.kt)("h2",{id:"scenario-upload-metrics-and-logs-to-an-event-hub"},"Scenario: Upload Metrics and Logs to an Event Hub"),(0,r.kt)("p",null,"The Virtual Client supports the ability to upload metrics, counters, logs etc... to an ",(0,r.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/services/event-hubs/?OCID=AID2200277_SEM_092bba0f3fec11eb8ce6dbef46f6464a:G:s&ef_id=092bba0f3fec11eb8ce6dbef46f6464a:G:s&msclkid=092bba0f3fec11eb8ce6dbef46f6464a"},"Azure Event Hub"),".\nEvent Hubs are a highly-scalable messaging platform in the Azure Cloud that can be integrated out-of-the-box with other big-data platforms such as Azure Data Explorer (ADX/Kusto).\nNote that the Virtual Client does have a set of explicit expectations for how the Event Hubs are setup. The following documentation covers what is required:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/VirtualClient/docs/guides/0610-integration-event-hub"},"Event Hub Integration")," ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# To send data to an Event Hub, supply a connection string to the Event Hub namespace on the command line.\nVirtualClient.exe --profile=PERF-CPU-OPENSSL.json --timeout=180 --packages="{BlobStoreConnectionString|SAS URI}" --eventHub="{EventHubConnectionString}"\n')),(0,r.kt)("h2",{id:"scenario-uploading-monitoring-information-to-a-content-store"},"Scenario: Uploading Monitoring Information to a Content Store"),(0,r.kt)("p",null,"Certain monitors that exist in the Virtual Client allow the user to upload information or files produced by the monitor (e.g. Azure Profiler .bin files) to\na cloud Blob store. In order to enable this, the connection string or SAS URI to the Blob store should be supplied on the command line. See the documentation\non monitor profiles below for additional details on which profiles support this."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/VirtualClient/docs/guides/0600-integration-blob-storage"},"Blob Store Support")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/VirtualClient/docs/monitors/0200-monitor-profiles"},"Monitor Profiles"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'VirtualClient.exe --profile=PERF-NETWORK.json --timeout=180 --packages="{BlobStoreConnectionString|SAS URI}" --content="{BlobStoreConnectionString|SAS URI}" --parameters=ProfilingEnabled=true,,,ProfilingMode=Interval\n')),(0,r.kt)("h2",{id:"scenario-running-the-azure-profiler-in-the-background-and-uploading-bin-files-to-a-content-store"},"Scenario: Running the Azure Profiler in the Background and Uploading .bin Files to a Content Store"),(0,r.kt)("p",null,"The Virtual Client supports the use of the Azure Profiler for capturing profiles on the system. The profiler can be ran in 2 modes: interval-based and on-demand.\nThe Azure Profiler monitor is a part of the default monitoring profile and can be easily enabled by supplying a few parameters on the command line.\nIn order to enable file uploads, the connection string or SAS URI to the Blob store should be supplied on the command line. See the documentation\non monitor profiles below for additional details on which profiles support this."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/VirtualClient/docs/guides/0600-integration-blob-storage"},"Blob Store Support")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/VirtualClient/docs/monitors/0200-monitor-profiles"},"Monitor Profiles"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'# Profiling on an interval in the background.\nVirtualClient.exe --profile=PERF-NETWORK.json --timeout=180 --packages="{BlobStoreConnectionString|SAS URI}" --content="{BlobStoreConnectionString|SAS URI}" --parameters=ProfilingEnabled=true,,,ProfilingMode=Interval\n\n# Profiling on-demand when signalled by the workload. Note that NOT all profiles support on-demand profiling. \n# Look for a ProfilingMode global parameter in the profile to determine if it is supported.\nVirtualClient.exe --profile=PERF-NETWORK.json --timeout=180 --packages="{BlobStoreConnectionString|SAS URI}" --content="{BlobStoreConnectionString|SAS URI}" --parameters=ProfilingEnabled=true,,,ProfilingMode=OnDemand\n')))}c.isMDXComponent=!0}}]);