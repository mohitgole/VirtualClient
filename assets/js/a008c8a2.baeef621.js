"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[9714],{2381:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var r=i(5893),s=i(3905);const t={},l="SPEC CPU Workload Profiles",o={id:"workloads/speccpu/speccpu-profiles",title:"SPEC CPU Workload Profiles",description:"The following profiles run customer-representative or benchmarking scenarios using the SPEC CPU workload.",source:"@site/docs/workloads/speccpu/speccpu-profiles.md",sourceDirName:"workloads/speccpu",slug:"/workloads/speccpu/speccpu-profiles",permalink:"/VirtualClient/docs/workloads/speccpu/speccpu-profiles",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/speccpu/speccpu-profiles.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SPECcpu",permalink:"/VirtualClient/docs/workloads/speccpu/"},next:{title:"SPECjbb",permalink:"/VirtualClient/docs/workloads/specjbb/"}},c={},d=[{value:"PERF-SPECCPU-FPRATE.json",id:"perf-speccpu-fpratejson",level:2},{value:"PERF-SPECCPU-FPSPEED.json",id:"perf-speccpu-fpspeedjson",level:2},{value:"PERF-SPECCPU-INTRATE.json",id:"perf-speccpu-intratejson",level:2},{value:"PERF-SPECCPU-INTSPEED.json",id:"perf-speccpu-intspeedjson",level:2}];function a(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"spec-cpu-workload-profiles",children:"SPEC CPU Workload Profiles"}),"\n",(0,r.jsx)(n.p,{children:"The following profiles run customer-representative or benchmarking scenarios using the SPEC CPU workload."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/VirtualClient/docs/workloads/speccpu/",children:"Workload Details"})}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"SPEC CPU 2017 workloads are long running workloads. When running in Peak performance scenarios, some take more than 2 days to complete. Check the 'Profile Runtimes' section below for more details on what\nto expect."})})}),"\n",(0,r.jsx)(n.h2,{id:"perf-speccpu-fpratejson",children:"PERF-SPECCPU-FPRATE.json"}),"\n",(0,r.jsx)(n.p,{children:"Runs the SPEC CPU Floating Point Rate (fprate) benchmark workload on the system focusing on baseline + peak measurements. This workload is an industry standard\nfor evaluating the performance of the CPU for processing calculations."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Main/profiles/PERF-SPECCPU-FPRATE.json",children:"Workload Profile"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Supported Platform/Architectures"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"linux-x64"}),"\n",(0,r.jsx)(n.li,{children:"linux-arm64"}),"\n",(0,r.jsx)(n.li,{children:"win-x64"}),"\n",(0,r.jsx)(n.li,{children:"win-arm64"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Supports Disconnected Scenarios"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"No. Internet connection required."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Supported Compilers"}),(0,r.jsx)(n.br,{}),"\n","The following compilers are supported with the workload for this profile. See profile parameters and usage examples below."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"GCC Compiler Versions = 8, 9, 10"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Dependencies"}),(0,r.jsx)(n.br,{}),"\n","The dependencies defined in the 'Dependencies' section of the profile itself are required in order to run the workload operations effectively."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Internet connection."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Additional information on components that exist within the 'Dependencies' section of the profile can be found in the following locations:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://microsoft.github.io/VirtualClient/docs/category/dependencies/",children:"Installing Dependencies"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Profile Parameters"}),(0,r.jsx)(n.br,{}),"\n","The following parameters can be optionally supplied on the command line to modify the behaviors of the workload."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Purpose"}),(0,r.jsx)(n.th,{children:"Default value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CompilerName"}),(0,r.jsx)(n.td,{children:"Optional. The name of the compiler to use for compiling CoreMark on the system."}),(0,r.jsx)(n.td,{children:"gcc"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CompilerVersion"}),(0,r.jsx)(n.td,{children:"Optional. The version of the compiler to use."}),(0,r.jsx)(n.td,{children:"10"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RunPeak"}),(0,r.jsx)(n.td,{children:"Optional. True to run the workload 'Peak' scenario, False to run the workload 'Base' scenario."}),(0,r.jsx)(n.td,{children:"false (Base)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"BaseOptimizationFlags"}),(0,r.jsx)(n.td,{children:"Optional. Optimization flags to pass to the GCC compiler when running the 'Base' scenario"}),(0,r.jsx)(n.td,{children:"-g -O3 -march=native"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PeakOptimizationFlags"}),(0,r.jsx)(n.td,{children:"Optional. Optimization flags to pass to the GCC compiler when running the 'Peak' scenario"}),(0,r.jsx)(n.td,{children:"-g -Ofast -march=native -flto"})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Profile Runtimes"}),(0,r.jsx)(n.br,{}),"\n","The following timings represent the length of time required to run a single round of profile actions. These timings can be used to determine\nminimum required runtimes for the Virtual Client in order to get results. These are estimates based on the number of system cores."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Base Scenario (8-cores/vCPUs) =~ 14 hours"}),"\n",(0,r.jsx)(n.li,{children:"Base scenario (48-cores/vCPUs) =~ 10 hours"}),"\n",(0,r.jsx)(n.li,{children:"Peak scenario (8-cores/vCPUs) =~ 28 hours"}),"\n",(0,r.jsx)(n.li,{children:"Peak scenario (48-cores/vCPUs) =~ 18 hours"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Usage Examples"}),(0,r.jsx)(n.br,{}),"\n","The following section provides a few basic examples of how to use the workload profile. Additional usage examples can be found in the\n'Usage Scenarios/Examples' link at the top."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-csharp",children:'# Execute the workload profile\n./VirtualClient --profile=PERF-SPECCPU-FPRATE.json --system=Azure --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}"\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"perf-speccpu-fpspeedjson",children:"PERF-SPECCPU-FPSPEED.json"}),"\n",(0,r.jsx)(n.p,{children:"Runs the SPEC CPU Floating Point Speed (fpspeed) benchmark workload on the system focusing on baseline + peak measurements. This workload is an industry standard\nfor evaluating the performance of the CPU for processing calculations."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Main/profiles/PERF-SPECCPU-FPSPEED.json",children:"Workload Profile"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"OS/Architecture Platforms"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"linux-x64"}),"\n",(0,r.jsx)(n.li,{children:"linux-arm64"}),"\n",(0,r.jsx)(n.li,{children:"win-x64"}),"\n",(0,r.jsx)(n.li,{children:"win-arm64"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Supports Disconnected Scenarios"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"No. Internet connection required."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Supported Compilers"}),(0,r.jsx)(n.br,{}),"\n","The following compilers are supported with the workload for this profile. See profile parameters and usage examples below."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"GCC Compiler Versions = 8, 9, 10"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Dependencies"}),(0,r.jsx)(n.br,{}),"\n","The dependencies defined in the 'Dependencies' section of the profile itself are required in order to run the workload operations effectively."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Internet connection."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Additional information on components that exist within the 'Dependencies' section of the profile can be found in the following locations:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://microsoft.github.io/VirtualClient/docs/category/dependencies/",children:"Installing Dependencies"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Profile Parameters"}),(0,r.jsx)(n.br,{}),"\n","The following parameters can be optionally supplied on the command line to modify the behaviors of the workload."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Purpose"}),(0,r.jsx)(n.th,{children:"Default value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CompilerName"}),(0,r.jsx)(n.td,{children:"Optional. The name of the compiler to use for compiling CoreMark on the system."}),(0,r.jsx)(n.td,{children:"gcc"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CompilerVersion"}),(0,r.jsx)(n.td,{children:"Optional. The version of the compiler to use."}),(0,r.jsx)(n.td,{children:"10"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RunPeak"}),(0,r.jsx)(n.td,{children:"Optional. True to run the workload 'Peak' scenario, False to run the workload 'Base' scenario."}),(0,r.jsx)(n.td,{children:"false (Base)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"BaseOptimizationFlags"}),(0,r.jsx)(n.td,{children:"Optional. Optimization flags to pass to the GCC compiler when running the 'Base' scenario"}),(0,r.jsx)(n.td,{children:"-g -O3 -march=native"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PeakOptimizationFlags"}),(0,r.jsx)(n.td,{children:"Optional. Optimization flags to pass to the GCC compiler when running the 'Peak' scenario"}),(0,r.jsx)(n.td,{children:"-g -Ofast -march=native -flto"})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Profile Runtimes"}),(0,r.jsx)(n.br,{}),"\n","See the 'Metadata' section of the profile for estimated runtimes. These timings represent the length of time required to run a single round of profile\nactions. These timings can be used to determine minimum required runtimes for the Virtual Client in order to get results. These are often estimates based on the\nnumber of system cores."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Usage Examples"}),(0,r.jsx)(n.br,{}),"\n","The following section provides a few basic examples of how to use the workload profile."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# Execute the workload profile\n./VirtualClient --profile=PERF-SPECCPU-FPSPEED.json --system=Azure --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}"\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"perf-speccpu-intratejson",children:"PERF-SPECCPU-INTRATE.json"}),"\n",(0,r.jsx)(n.p,{children:"Runs the SPEC CPU Integer Rate (intrate) benchmark workload on the system focusing on baseline + peak measurements. This workload is an industry standard\nfor evaluating the performance of the CPU for processing calculations."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Main/profiles/PERF-SPECCPU-INTRATE.json",children:"Workload Profile"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"OS/Architecture Platforms"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"linux-x64"}),"\n",(0,r.jsx)(n.li,{children:"linux-arm64"}),"\n",(0,r.jsx)(n.li,{children:"win-x64"}),"\n",(0,r.jsx)(n.li,{children:"win-arm64"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Supports Disconnected Scenarios"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"No. Internet connection required."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Supported Compilers"}),(0,r.jsx)(n.br,{}),"\n","The following compilers are supported with the workload for this profile. See profile parameters and usage examples below."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"GCC Compiler Versions = 8, 9, 10"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Dependencies"}),(0,r.jsx)(n.br,{}),"\n","The dependencies defined in the 'Dependencies' section of the profile itself are required in order to run the workload operations effectively."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Internet connection."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Additional information on components that exist within the 'Dependencies' section of the profile can be found in the following locations:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://microsoft.github.io/VirtualClient/docs/category/dependencies/",children:"Installing Dependencies"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Profile Parameters"}),(0,r.jsx)(n.br,{}),"\n","The following parameters can be optionally supplied on the command line to modify the behaviors of the workload."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Purpose"}),(0,r.jsx)(n.th,{children:"Default value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CompilerName"}),(0,r.jsx)(n.td,{children:"Optional. The name of the compiler to use for compiling CoreMark on the system."}),(0,r.jsx)(n.td,{children:"gcc"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CompilerVersion"}),(0,r.jsx)(n.td,{children:"Optional. The version of the compiler to use."}),(0,r.jsx)(n.td,{children:"10"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RunPeak"}),(0,r.jsx)(n.td,{children:"Optional. True to run the workload 'Peak' scenario, False to run the workload 'Base' scenario."}),(0,r.jsx)(n.td,{children:"false (Base)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"BaseOptimizationFlags"}),(0,r.jsx)(n.td,{children:"Optional. Optimization flags to pass to the GCC compiler when running the 'Base' scenario"}),(0,r.jsx)(n.td,{children:"-g -O3 -march=native"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PeakOptimizationFlags"}),(0,r.jsx)(n.td,{children:"Optional. Optimization flags to pass to the GCC compiler when running the 'Peak' scenario"}),(0,r.jsx)(n.td,{children:"-g -Ofast -march=native -flto"})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Profile Runtimes"}),(0,r.jsx)(n.br,{}),"\n","See the 'Metadata' section of the profile for estimated runtimes. These timings represent the length of time required to run a single round of profile\nactions. These timings can be used to determine minimum required runtimes for the Virtual Client in order to get results. These are often estimates based on the\nnumber of system cores."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Usage Examples"}),(0,r.jsx)(n.br,{}),"\n","The following section provides a few basic examples of how to use the workload profile."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# Execute the workload profile\n./VirtualClient --profile=PERF-SPECCPU-INTRATE.json --system=Azure --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}"\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"perf-speccpu-intspeedjson",children:"PERF-SPECCPU-INTSPEED.json"}),"\n",(0,r.jsx)(n.p,{children:"Runs the SPEC CPU Integer Speed (intspeed) benchmark workload on the system focusing on baseline + peak measurements. This workload is an industry standard\nfor evaluating the performance of the CPU for processing calculations."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Main/profiles/PERF-SPECCPU-INTSPEED.json",children:"Workload Profile"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"OS/Architecture Platforms"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"linux-x64"}),"\n",(0,r.jsx)(n.li,{children:"linux-arm64"}),"\n",(0,r.jsx)(n.li,{children:"win-x64"}),"\n",(0,r.jsx)(n.li,{children:"win-arm64"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Supports Disconnected Scenarios"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"No. Internet connection required."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Supported Compilers"}),(0,r.jsx)(n.br,{}),"\n","The following compilers are supported with the workload for this profile. See profile parameters and usage examples below."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"GCC Compiler Versions = 8, 9, 10"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Dependencies"}),(0,r.jsx)(n.br,{}),"\n","The dependencies defined in the 'Dependencies' section of the profile itself are required in order to run the workload operations effectively."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Internet connection."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Additional information on components that exist within the 'Dependencies' section of the profile can be found in the following locations:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://microsoft.github.io/VirtualClient/docs/category/dependencies/",children:"Installing Dependencies"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Profile Parameters"}),(0,r.jsx)(n.br,{}),"\n","The following parameters can be optionally supplied on the command line to modify the behaviors of the workload."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Purpose"}),(0,r.jsx)(n.th,{children:"Default value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CompilerName"}),(0,r.jsx)(n.td,{children:"Optional. The name of the compiler to use for compiling CoreMark on the system."}),(0,r.jsx)(n.td,{children:"gcc"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CompilerVersion"}),(0,r.jsx)(n.td,{children:"Optional. The version of the compiler to use."}),(0,r.jsx)(n.td,{children:"10"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RunPeak"}),(0,r.jsx)(n.td,{children:"Optional. True to run the workload 'Peak' scenario, False to run the workload 'Base' scenario."}),(0,r.jsx)(n.td,{children:"false (Base)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"BaseOptimizationFlags"}),(0,r.jsx)(n.td,{children:"Optional. Optimization flags to pass to the GCC compiler when running the 'Base' scenario"}),(0,r.jsx)(n.td,{children:"-g -O3 -march=native"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PeakOptimizationFlags"}),(0,r.jsx)(n.td,{children:"Optional. Optimization flags to pass to the GCC compiler when running the 'Peak' scenario"}),(0,r.jsx)(n.td,{children:"-g -Ofast -march=native -flto"})]})]})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Profile Runtimes"}),(0,r.jsx)(n.br,{}),"\n","See the 'Metadata' section of the profile for estimated runtimes. These timings represent the length of time required to run a single round of profile\nactions. These timings can be used to determine minimum required runtimes for the Virtual Client in order to get results. These are often estimates based on the\nnumber of system cores."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Usage Examples"}),(0,r.jsx)(n.br,{}),"\n","The following section provides a few basic examples of how to use the workload profile."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# Execute the workload profile\n./VirtualClient --profile=PERF-SPECCPU-INTSPEED.json --system=Azure --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}"\n'})}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.ah)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},3905:(e,n,i)=>{i.d(n,{ah:()=>d});var r=i(7294);function s(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function t(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?t(Object(i),!0).forEach((function(n){s(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,r,s=function(e,n){if(null==e)return{};var i,r,s={},t=Object.keys(e);for(r=0;r<t.length;r++)i=t[r],n.indexOf(i)>=0||(s[i]=e[i]);return s}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)i=t[r],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}var c=r.createContext({}),d=function(e){var n=r.useContext(c),i=n;return e&&(i="function"==typeof e?e(n):l(l({},n),e)),i},a={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var i=e.components,s=e.mdxType,t=e.originalType,c=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),p=d(i),x=s,j=p["".concat(c,".").concat(x)]||p[x]||a[x]||t;return i?r.createElement(j,l(l({ref:n},h),{},{components:i})):r.createElement(j,l({ref:n},h))}));h.displayName="MDXCreateElement"}}]);