"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[3277],{6746:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var i=r(5893),s=r(3905);const t={},o="OpenSSL Workload Profiles",l={id:"workloads/openssl/openssl-profiles",title:"OpenSSL Workload Profiles",description:"The following profiles run customer-representative or benchmarking scenarios using the OpenSSL speed workload.",source:"@site/docs/workloads/openssl/openssl-profiles.md",sourceDirName:"workloads/openssl",slug:"/workloads/openssl/openssl-profiles",permalink:"/VirtualClient/docs/workloads/openssl/openssl-profiles",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/openssl/openssl-profiles.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OpenSSL",permalink:"/VirtualClient/docs/workloads/openssl/"},next:{title:"PostgreSQL",permalink:"/VirtualClient/docs/workloads/postgresql/"}},c={},a=[{value:"PERF-CPU-OPENSSL.json",id:"perf-cpu-openssljson",level:2}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.ah)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"openssl-workload-profiles",children:"OpenSSL Workload Profiles"}),"\n",(0,i.jsx)(n.p,{children:"The following profiles run customer-representative or benchmarking scenarios using the OpenSSL speed workload."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/VirtualClient/docs/workloads/openssl/",children:"Workload Details"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"perf-cpu-openssljson",children:"PERF-CPU-OPENSSL.json"}),"\n",(0,i.jsx)(n.p,{children:"Runs a CPU-intensive workload using the OpenSSL speed toolset to test the performance of the CPU in processing cryptography/encryption algorithms.\nThis profile is designed to identify general/broad regressions when compared against a baseline. OpenSSL is an open source industry standard\ntransport layer security (TLS/SSL) toolset."}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["*Note on Multi-Threaded Execution:",(0,i.jsx)(n.br,{}),"\n","Although the toolset can be used on Windows, the OpenSSL speed workload was designed with Unix as a foundation. Multi-threaded/parallel testing\nis not supported for Windows builds of OpenSSL 3.0.  This means that the OpenSSL speed command will not heavily exercise the CPU resources on the\nsystem. It will use a single core/vCPU to run each test. On Linux, VC starts Speed with ",(0,i.jsx)(n.code,{children:"-multi {num-logical-cpus}"}),' ,unless it is provided explicitly in the\n"CommandArguments" Action property.This means that on Linux, VC uses ALL cores/vCPUs available on the system in-parallel.']})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Main/profiles/PERF-CPU-OPENSSL.json",children:"Workload Profile"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Supported Platform/Architectures"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"linux-x64"}),"\n",(0,i.jsx)(n.li,{children:"linux-arm64"}),"\n",(0,i.jsx)(n.li,{children:"win-x64"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Supports Disconnected Scenarios"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Yes. When the OpenSSL package is included in 'packages' directory of the Virtual Client.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/VirtualClient/docs/dependencies/0001-install-vc-packages",children:"Installing VC Packages"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Dependencies"}),(0,i.jsx)(n.br,{}),"\n","The dependencies defined in the 'Dependencies' section of the profile itself are required in order to run the workload operations effectively."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Internet connection."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Additional information on components that exist within the 'Dependencies' section of the profile can be found in the following locations:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://microsoft.github.io/VirtualClient/docs/category/dependencies/",children:"Installing Dependencies"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Scenarios"}),(0,i.jsx)(n.br,{}),"\n","The following algorithms are covered by this workload profile."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"MD5"}),"\n",(0,i.jsx)(n.li,{children:"SHA1"}),"\n",(0,i.jsx)(n.li,{children:"SHA256"}),"\n",(0,i.jsx)(n.li,{children:"SHA512"}),"\n",(0,i.jsx)(n.li,{children:"DES-EDE3"}),"\n",(0,i.jsx)(n.li,{children:"AES-128-CBC"}),"\n",(0,i.jsx)(n.li,{children:"AES-192-CBC"}),"\n",(0,i.jsx)(n.li,{children:"AES-256-CBC"}),"\n",(0,i.jsx)(n.li,{children:"CAMELLIA-128-CBC"}),"\n",(0,i.jsx)(n.li,{children:"CAMELLIA-192-CBC"}),"\n",(0,i.jsx)(n.li,{children:"CAMELLIA-256-CBC"}),"\n",(0,i.jsx)(n.li,{children:"RSA2048"}),"\n",(0,i.jsx)(n.li,{children:"RSA4096"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Profile Runtimes"}),(0,i.jsx)(n.br,{}),"\n","See the 'Metadata' section of the profile for estimated runtimes. These timings represent the length of time required to run a single round of profile\nactions. These timings can be used to determine minimum required runtimes for the Virtual Client in order to get results. These are often estimates based on the\nnumber of system cores."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Usage Examples"}),(0,i.jsx)(n.br,{}),"\n","The following section provides a few basic examples of how to use the workload profile."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'# Execute the workload profile\n./VirtualClient --profile=PERF-CPU-OPENSSL.json --system=Demo --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}"\n\n# Run specific scenarios/actions in the profile.\n./VirtualClient --profile=PERF-CPU-OPENSSL.json --system=Demo --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}" --scenarios=SHA1,SHA192,SHA256\n'})}),"\n"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.ah)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},3905:(e,n,r)=>{r.d(n,{ah:()=>a});var i=r(7294);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function t(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,i,s=function(e,n){if(null==e)return{};var r,i,s={},t=Object.keys(e);for(i=0;i<t.length;i++)r=t[i],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(i=0;i<t.length;i++)r=t[i],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=i.createContext({}),a=function(e){var n=i.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var r=e.components,s=e.mdxType,t=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=a(r),u=s,f=h["".concat(c,".").concat(u)]||h[u]||d[u]||t;return r?i.createElement(f,o(o({ref:n},p),{},{components:r})):i.createElement(f,o({ref:n},p))}));p.displayName="MDXCreateElement"}}]);