"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[4781],{3109:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var t=n(5893),i=n(3905);const s={},l="Install AMD GPU Drivers",o={id:"dependencies/0080-install-amd-drivers",title:"Install AMD GPU Drivers",description:"Virtual Client has a dependency component that can be added to a workload or monitor profile to install AMD drivers in Linux and Windows systems. The following section illustrates the",source:"@site/docs/dependencies/0080-install-amd-drivers.md",sourceDirName:"dependencies",slug:"/dependencies/0080-install-amd-drivers",permalink:"/VirtualClient/docs/dependencies/0080-install-amd-drivers",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/dependencies/0080-install-amd-drivers.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mount Disks",permalink:"/VirtualClient/docs/dependencies/0071-mount-disks"},next:{title:"Developing",permalink:"/VirtualClient/docs/category/developing"}},d={},a=[{value:"Supported Platform/Architectures",id:"supported-platformarchitectures",level:2},{value:"Profile Parameters for Windows",id:"profile-parameters-for-windows",level:2},{value:"Profile Parameters for Linux",id:"profile-parameters-for-linux",level:2},{value:"Supported Windows GPUs",id:"supported-windows-gpus",level:2},{value:"Supported Linux GPUs",id:"supported-linux-gpus",level:2},{value:"Supported Linux Distros",id:"supported-linux-distros",level:2}];function c(e){const r={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"install-amd-gpu-drivers",children:"Install AMD GPU Drivers"}),"\n",(0,t.jsx)(r.p,{children:"Virtual Client has a dependency component that can be added to a workload or monitor profile to install AMD drivers in Linux and Windows systems. The following section illustrates the\ndetails for integrating this into the profile."}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://www.amd.com/en/support",children:"AMD Official Drivers Page"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Main/profiles/SETUP-GPU-AMDDRIVERS.json",children:"AMD GPU Drivers SETUP Profile"})}),"\n",(0,t.jsxs)(r.li,{children:["[Windows Drivers] (",(0,t.jsx)(r.a,{href:"https://learn.microsoft.com/en-us/azure/virtual-machines/windows/n-series-amd-driver-setup",children:"https://learn.microsoft.com/en-us/azure/virtual-machines/windows/n-series-amd-driver-setup"}),")"]}),"\n",(0,t.jsxs)(r.li,{children:["[Linux Drivers] (",(0,t.jsx)(r.a,{href:"https://repo.radeon.com/amdgpu-install",children:"https://repo.radeon.com/amdgpu-install"}),")"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"supported-platformarchitectures",children:"Supported Platform/Architectures"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"linux-x64 (Ubuntu)"}),"\n",(0,t.jsx)(r.li,{children:"win-x64"}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"profile-parameters-for-windows",children:"Profile Parameters for Windows"}),"\n",(0,t.jsx)(r.p,{children:"This dependency component can be used to download the drivers on Windows from a blob storage using the DependencyPackageInstallation.\nThe following section describes the parameters used by the individual component in the profile in Windows:"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:(0,t.jsx)(r.strong,{children:"Parameter"})}),(0,t.jsx)(r.th,{children:(0,t.jsx)(r.strong,{children:"Required"})}),(0,t.jsx)(r.th,{children:(0,t.jsx)(r.strong,{children:"Description"})}),(0,t.jsx)(r.th,{children:(0,t.jsx)(r.strong,{children:"Default"})})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"PackageName"}),(0,t.jsx)(r.td,{children:"Yes"}),(0,t.jsx)(r.td,{children:"The logical name of the package that will be registered with the Virtual Client runtime. This name can be used by other profile components to reference the installation parent directory location for Drivers."}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Scenario"}),(0,t.jsx)(r.td,{children:"No"}),(0,t.jsx)(r.td,{children:"A name/identifier for the specific component in the profile. This is used for telemetry purposes only with components in dependency sections of the profile (i.e. cannot be used with --scenarios option on the command line)."}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"RebootRequired"}),(0,t.jsx)(r.td,{children:"No"}),(0,t.jsx)(r.td,{children:"Whether or not reboot is required after installing the drivers."}),(0,t.jsx)(r.td,{children:"false"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"GpuModel"}),(0,t.jsx)(r.td,{children:"Yes"}),(0,t.jsx)(r.td,{children:"model of GPU"}),(0,t.jsx)(r.td,{children:"mi25"})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"profile-parameters-for-linux",children:"Profile Parameters for Linux"}),"\n",(0,t.jsx)(r.p,{children:"The following section describes the parameters used by the individual component in the profile in Windows:"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:(0,t.jsx)(r.strong,{children:"Parameter"})}),(0,t.jsx)(r.th,{children:(0,t.jsx)(r.strong,{children:"Required"})}),(0,t.jsx)(r.th,{children:(0,t.jsx)(r.strong,{children:"Description"})}),(0,t.jsx)(r.th,{children:(0,t.jsx)(r.strong,{children:"Default"})})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"PackageName"}),(0,t.jsx)(r.td,{children:"Yes"}),(0,t.jsx)(r.td,{children:"The logical name of the package that will be registered with the Virtual Client runtime. This name can be used by other profile components to reference the installation parent directory location for Drivers."}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Scenario"}),(0,t.jsx)(r.td,{children:"No"}),(0,t.jsx)(r.td,{children:"A name/identifier for the specific component in the profile. This is used for telemetry purposes only with components in dependency sections of the profile (i.e. cannot be used with --scenarios option on the command line)."}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"LinuxInstallationFile"}),(0,t.jsx)(r.td,{children:"Yes"}),(0,t.jsx)(r.td,{children:"The link to installation file to install AMD GPU driver in Linux Systems"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Username"}),(0,t.jsx)(r.td,{children:"No"}),(0,t.jsx)(r.td,{children:"The user who has the ssh identity registered for."}),(0,t.jsx)(r.td,{children:"The current logged in user."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"RebootRequired"}),(0,t.jsx)(r.td,{children:"No"}),(0,t.jsx)(r.td,{children:"Whether or not reboot is required after installing the drivers."}),(0,t.jsx)(r.td,{children:"true"})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"supported-windows-gpus",children:"Supported Windows GPUs"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"mi25"}),"\n",(0,t.jsx)(r.li,{children:"v620"}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"supported-linux-gpus",children:"Supported Linux GPUs"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"all"}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Note: Virtual Client is only tested with MI200x systems using installation file - ",(0,t.jsx)(r.a,{href:"https://repo.radeon.com/amdgpu-install/5.5/ubuntu/focal/amdgpu-install_5.5.50500-1_all.deb",children:"https://repo.radeon.com/amdgpu-install/5.5/ubuntu/focal/amdgpu-install_5.5.50500-1_all.deb"}),"."]}),"\n",(0,t.jsx)(r.h2,{id:"supported-linux-distros",children:"Supported Linux Distros"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Ubunutu"}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,i.ah)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},3905:(e,r,n)=>{n.d(r,{ah:()=>a});var t=n(7294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=t.createContext({}),a=function(e){var r=t.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},h=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,s=e.originalType,d=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),u=a(n),p=i,x=u["".concat(d,".").concat(p)]||u[p]||c[p]||s;return n?t.createElement(x,l(l({ref:r},h),{},{components:n})):t.createElement(x,l({ref:r},h))}));h.displayName="MDXCreateElement"}}]);