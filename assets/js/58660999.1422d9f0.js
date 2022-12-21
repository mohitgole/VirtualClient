"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[1169],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,b=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(b,l(l({ref:t},c),{},{components:r})):n.createElement(b,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2879:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},l="AspNetBenchmark",s={unversionedId:"workloads/aspnetbench/aspnetbench",id:"workloads/aspnetbench/aspnetbench",title:"AspNetBenchmark",description:"AspNetBenchmark is a benchmark developed by MSFT ASPNET team, based on open source benchmark TechEmpower.",source:"@site/docs/workloads/aspnetbench/aspnetbench.md",sourceDirName:"workloads/aspnetbench",slug:"/workloads/aspnetbench/",permalink:"/VirtualClient/docs/workloads/aspnetbench/",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/aspnetbench/aspnetbench.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Workloads",permalink:"/VirtualClient/docs/category/workloads"},next:{title:"AspNetBench Workload Metrics",permalink:"/VirtualClient/docs/workloads/aspnetbench/aspnetbench-metrics"}},i={},p=[{value:"Setup",id:"setup",level:2},{value:"Supported Platforms",id:"supported-platforms",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aspnetbenchmark"},"AspNetBenchmark"),(0,a.kt)("p",null,"AspNetBenchmark is a benchmark developed by MSFT ASPNET team, based on open source benchmark TechEmpower.",(0,a.kt)("br",{parentName:"p"}),"\n","This workload has server and client part, on the same test machine. The server part is started as a ASPNET service. The client calls server using open source bombardier binaries.",(0,a.kt)("br",{parentName:"p"}),"\n",'Bombardier binaries could be downloaded from Github release, or directly compile from source using "go build ."'),(0,a.kt)("p",null,"Even though both AspNetBenchmarks and Bombardier are open source, this workload is relatively "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/aspnet/benchmarks"},"AspNetBenchmarks Github")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/codesenberg/bombardier"},"Bombardier Github")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/codesenberg/bombardier/releases/tag/v1.2.5"},"Bombardier Release"))),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"VC installs dotnet SDK"),(0,a.kt)("li",{parentName:"ol"},"VC clones AspNetBenchmarks github repo"),(0,a.kt)("li",{parentName:"ol"},"dotnet build src/benchmarks project in AspNetBenchmarks repo"),(0,a.kt)("li",{parentName:"ol"},"Use dotnet to start server")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'dotnet <path_to_binary>\\Benchmarks.dll --nonInteractive true --scenarios json --urls http://localhost:5000 --server Kestrel --kestrelTransport Sockets --protocol http --header "Accept: application/json,text/html;q=0.9,application/xhtml+xml;q=0.9,application/xml;q=0.8,*/*;q=0.7" --header "Connection: keep-alive" \n')),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Use bombardier to start client")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"bombardier-windows-amd64.exe -d 15s -c 256 -t 2s --fasthttp --insecure -l http://localhost:5000/json --print r --format json\n")),(0,a.kt)("h3",{id:"supported-platforms"},"Supported Platforms"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"linux-x64"),(0,a.kt)("li",{parentName:"ul"},"linux-arm64"),(0,a.kt)("li",{parentName:"ul"},"win-x64"),(0,a.kt)("li",{parentName:"ul"},"win-arm64")))}u.isMDXComponent=!0}}]);