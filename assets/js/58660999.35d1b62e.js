"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[1169],{737:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>o});var n=r(5893),s=r(3905);const c={},d="AspNetBenchmark",i={id:"workloads/aspnetbench/aspnetbench",title:"AspNetBenchmark",description:"AspNetBenchmark is a benchmark developed by MSFT ASPNET team, based on open source benchmark TechEmpower.",source:"@site/docs/workloads/aspnetbench/aspnetbench.md",sourceDirName:"workloads/aspnetbench",slug:"/workloads/aspnetbench/",permalink:"/VirtualClient/docs/workloads/aspnetbench/",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/aspnetbench/aspnetbench.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ApacheBench Workload Profiles",permalink:"/VirtualClient/docs/workloads/apachebench/apachebench-profiles"},next:{title:"AspNetBench Workload Profiles",permalink:"/VirtualClient/docs/workloads/aspnetbench/aspnetbench-profiles"}},l={},o=[{value:"Workload Metrics",id:"workload-metrics",level:2},{value:"Packaging and Setup",id:"packaging-and-setup",level:2}];function a(e){const t={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.ah)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"aspnetbenchmark",children:"AspNetBenchmark"}),"\n",(0,n.jsxs)(t.p,{children:["AspNetBenchmark is a benchmark developed by MSFT ASPNET team, based on open source benchmark TechEmpower.",(0,n.jsx)(t.br,{}),"\n","This workload has server and client part, on the same test machine. The server part is started as a ASPNET service. The client calls server using open source bombardier binaries.",(0,n.jsx)(t.br,{}),"\n",'Bombardier binaries could be downloaded from Github release, or directly compile from source using "go build ."']}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/aspnet/benchmarks",children:"AspNetBenchmarks Github"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/codesenberg/bombardier",children:"Bombardier Github"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/codesenberg/bombardier/releases/tag/v1.2.5",children:"Bombardier Release"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"workload-metrics",children:"Workload Metrics"}),"\n",(0,n.jsx)(t.p,{children:"The following metrics are examples of those captured by the Virtual Client when running the AspNetBenchmark workload."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/codesenberg/bombardier#examples",children:"Bombardier output example"})}),"\n",(0,n.jsx)(t.p,{children:"The following metrics are examples of those captured during the operations of the AspNetBench workload."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Example"}),(0,n.jsx)(t.th,{children:"Unit"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Latency Max"}),(0,n.jsx)(t.td,{children:"178703"}),(0,n.jsx)(t.td,{children:"microsecond"}),(0,n.jsx)(t.td,{children:"ASP.NET Web Request latency (max)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Latency Average"}),(0,n.jsx)(t.td,{children:"8270.807963429836"}),(0,n.jsx)(t.td,{children:"microsecond"}),(0,n.jsx)(t.td,{children:"ASP.NET Web Request latency (avg)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Latency Stddev"}),(0,n.jsx)(t.td,{children:"6124.356473307014"}),(0,n.jsx)(t.td,{children:"microsecond"}),(0,n.jsx)(t.td,{children:"ASP.NET Web Request latency (standard deviation)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Latency P50"}),(0,n.jsx)(t.td,{children:"6058"}),(0,n.jsx)(t.td,{children:"microsecond"}),(0,n.jsx)(t.td,{children:"ASP.NET Web Request latency (P50)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Latency P75"}),(0,n.jsx)(t.td,{children:"10913"}),(0,n.jsx)(t.td,{children:"microsecond"}),(0,n.jsx)(t.td,{children:"ASP.NET Web Request latency (P75)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Latency P90"}),(0,n.jsx)(t.td,{children:"17949"}),(0,n.jsx)(t.td,{children:"microsecond"}),(0,n.jsx)(t.td,{children:"ASP.NET Web Request latency (P90)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Latency P95"}),(0,n.jsx)(t.td,{children:"23318"}),(0,n.jsx)(t.td,{children:"microsecond"}),(0,n.jsx)(t.td,{children:"ASP.NET Web Request latency (P95)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Latency P99"}),(0,n.jsx)(t.td,{children:"35856"}),(0,n.jsx)(t.td,{children:"microsecond"}),(0,n.jsx)(t.td,{children:"ASP.NET Web Request latency (P99)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"RequestPerSecond Max"}),(0,n.jsx)(t.td,{children:"61221.282458945345"}),(0,n.jsx)(t.td,{children:"Reqs/sec"}),(0,n.jsx)(t.td,{children:"ASP.NET Web Request per second (max)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"RequestPerSecond Average"}),(0,n.jsx)(t.td,{children:"31211.609987720527"}),(0,n.jsx)(t.td,{children:"Reqs/sec"}),(0,n.jsx)(t.td,{children:"ASP.NET Web Request per second (avg)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"RequestPerSecond Stddev"}),(0,n.jsx)(t.td,{children:"6446.822354105378"}),(0,n.jsx)(t.td,{children:"Reqs/sec"}),(0,n.jsx)(t.td,{children:"ASP.NET Web Request per second (standard deviation)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"RequestPerSecond P50"}),(0,n.jsx)(t.td,{children:"31049.462844"}),(0,n.jsx)(t.td,{children:"Reqs/sec"}),(0,n.jsx)(t.td,{children:"ASP.NET Web Request per second (P50)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"RequestPerSecond P75"}),(0,n.jsx)(t.td,{children:"35597.436614"}),(0,n.jsx)(t.td,{children:"Reqs/sec"}),(0,n.jsx)(t.td,{children:"ASP.NET Web Request per second (P75)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"RequestPerSecond P90"}),(0,n.jsx)(t.td,{children:"39826.205746"}),(0,n.jsx)(t.td,{children:"Reqs/sec"}),(0,n.jsx)(t.td,{children:"ASP.NET Web Request per second (P90)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"RequestPerSecond P95"}),(0,n.jsx)(t.td,{children:"41662.542962"}),(0,n.jsx)(t.td,{children:"Reqs/sec"}),(0,n.jsx)(t.td,{children:"ASP.NET Web Request per second (P95)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"RequestPerSecond P99"}),(0,n.jsx)(t.td,{children:"48600.556224"}),(0,n.jsx)(t.td,{children:"Reqs/sec"}),(0,n.jsx)(t.td,{children:"ASP.NET Web Request per second (P99)"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"packaging-and-setup",children:"Packaging and Setup"}),"\n",(0,n.jsxs)(t.p,{children:["The following section covers how to create the custom Virtual Client dependency packages required to execute the workload and toolset(s). This section\nis meant to provide guidance for users that would like to create their own packages with the software for use with the Virtual Client. For example, users\nmay want to bring in new versions of the software. See the documentation on '",(0,n.jsx)(t.a,{href:"https://microsoft.github.io/VirtualClient/docs/developing/0040-vc-packages/",children:"Dependency Packages"}),"'\nfor more information on the concepts."]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"VC installs dotnet SDK"}),"\n",(0,n.jsx)(t.li,{children:"VC clones AspNetBenchmarks github repo"}),"\n",(0,n.jsx)(t.li,{children:"dotnet build src/benchmarks project in AspNetBenchmarks repo"}),"\n",(0,n.jsx)(t.li,{children:"Use dotnet to start server"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:'dotnet <path_to_binary>\\Benchmarks.dll --nonInteractive true --scenarios json --urls http://localhost:5000 --server Kestrel --kestrelTransport Sockets --protocol http --header "Accept: application/json,text/html;q=0.9,application/xhtml+xml;q=0.9,application/xml;q=0.8,*/*;q=0.7" --header "Connection: keep-alive" \n'})}),"\n",(0,n.jsxs)(t.ol,{start:"5",children:["\n",(0,n.jsx)(t.li,{children:"Use bombardier to start client"}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"bombardier-windows-amd64.exe -d 15s -c 256 -t 2s --fasthttp --insecure -l http://localhost:5000/json --print r --format json\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.ah)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},3905:(e,t,r)=>{r.d(t,{ah:()=>o});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),o=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},a={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,c=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),p=o(r),x=s,j=p["".concat(l,".").concat(x)]||p[x]||a[x]||c;return r?n.createElement(j,d(d({ref:t},h),{},{components:r})):n.createElement(j,d({ref:t},h))}));h.displayName="MDXCreateElement"}}]);