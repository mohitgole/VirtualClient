"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[3277],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7136:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={},i="OpenSSL Workload Profiles",l={unversionedId:"workloads/openssl/openssl-profiles",id:"workloads/openssl/openssl-profiles",title:"OpenSSL Workload Profiles",description:"The following profiles run customer-representative or benchmarking scenarios using the OpenSSL speed workload.",source:"@site/docs/workloads/openssl/openssl-profiles.md",sourceDirName:"workloads/openssl",slug:"/workloads/openssl/openssl-profiles",permalink:"/VirtualClient/docs/workloads/openssl/openssl-profiles",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/openssl/openssl-profiles.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OpenSSL",permalink:"/VirtualClient/docs/workloads/openssl/"},next:{title:"PostgreSQL",permalink:"/VirtualClient/docs/workloads/postgresql/"}},s={},p=[{value:"PERF-CPU-OPENSSL.json",id:"perf-cpu-openssljson",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"openssl-workload-profiles"},"OpenSSL Workload Profiles"),(0,o.kt)("p",null,"The following profiles run customer-representative or benchmarking scenarios using the OpenSSL speed workload.  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/VirtualClient/docs/workloads/openssl/"},"Workload Details"),"  ")),(0,o.kt)("h2",{id:"perf-cpu-openssljson"},"PERF-CPU-OPENSSL.json"),(0,o.kt)("p",null,"Runs a CPU-intensive workload using the OpenSSL speed toolset to test the performance of the CPU in processing cryptography/encryption algorithms.\nThis profile is designed to identify general/broad regressions when compared against a baseline. OpenSSL is an open source industry standard\ntransport layer security (TLS/SSL) toolset."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("em",{parentName:"p"},"Note on Multi-Threaded Execution:",(0,o.kt)("br",{parentName:"em"}),"Although the toolset can be used on Windows, the OpenSSL speed workload was designed with Unix as a foundation. Multi-threaded/parallel testing\nis not supported for Windows builds of OpenSSL 3.0.  This means that the OpenSSL speed command will not heavily exercise the CPU resources on the\nsystem. It will use a single core/vCPU to run each test. With Linux builds, the toolset can be configured to use ALL cores/vCPUs available on the\nsystem in-parallel."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Main/profiles/PERF-CPU-OPENSSL.json"},"Workload Profile")," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Supported Platform/Architectures")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"linux-x64"),(0,o.kt)("li",{parentName:"ul"},"linux-arm64"),(0,o.kt)("li",{parentName:"ul"},"win-x64"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Supports Disconnected Scenarios"),"  "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Yes. When the OpenSSL package is included in 'packages' directory of the Virtual Client.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/VirtualClient/docs/dependencies/0001-install-vc-packages"},"Installing VC Packages"),"."))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Dependencies"),(0,o.kt)("br",{parentName:"p"}),"\n","The dependencies defined in the 'Dependencies' section of the profile itself are required in order to run the workload operations effectively."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Internet connection.")),(0,o.kt)("p",{parentName:"li"},"Additional information on components that exist within the 'Dependencies' section of the profile can be found in the following locations:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://microsoft.github.io/VirtualClient/docs/category/dependencies/"},"Installing Dependencies")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Scenarios"),(0,o.kt)("br",{parentName:"p"}),"\n","The following algorithms are covered by this workload profile."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"MD5"),(0,o.kt)("li",{parentName:"ul"},"SHA1"),(0,o.kt)("li",{parentName:"ul"},"SHA256"),(0,o.kt)("li",{parentName:"ul"},"SHA512"),(0,o.kt)("li",{parentName:"ul"},"DES-EDE3"),(0,o.kt)("li",{parentName:"ul"},"AES-128-CBC"),(0,o.kt)("li",{parentName:"ul"},"AES-192-CBC"),(0,o.kt)("li",{parentName:"ul"},"AES-256-CBC"),(0,o.kt)("li",{parentName:"ul"},"CAMELLIA-128-CBC"),(0,o.kt)("li",{parentName:"ul"},"CAMELLIA-192-CBC"),(0,o.kt)("li",{parentName:"ul"},"CAMELLIA-256-CBC"),(0,o.kt)("li",{parentName:"ul"},"RSA2048"),(0,o.kt)("li",{parentName:"ul"},"RSA4096"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Profile Runtimes"),(0,o.kt)("br",{parentName:"p"}),"\n","See the 'Metadata' section of the profile for estimated runtimes. These timings represent the length of time required to run a single round of profile\nactions. These timings can be used to determine minimum required runtimes for the Virtual Client in order to get results. These are often estimates based on the\nnumber of system cores. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Usage Examples"),(0,o.kt)("br",{parentName:"p"}),"\n","The following section provides a few basic examples of how to use the workload profile."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Execute the workload profile\n./VirtualClient --profile=PERF-CPU-OPENSSL.json --system=Demo --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}"\n\n# Run specific scenarios/actions in the profile.\n./VirtualClient --profile=PERF-CPU-OPENSSL.json --system=Demo --timeout=1440 --packageStore="{BlobConnectionString|SAS Uri}" --scenarios=SHA1,SHA192,SHA256\n')))))}c.isMDXComponent=!0}}]);