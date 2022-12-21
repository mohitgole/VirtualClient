"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[7990],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(r),c=a,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||i;return r?n.createElement(k,l(l({ref:t},m),{},{components:r})):n.createElement(k,l({ref:t},m))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8546:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={},l="Compression",o={unversionedId:"workloads/compression/compression",id:"workloads/compression/compression",title:"Compression",description:"Virtual Client host different types of compression and decompression workloads which are:",source:"@site/docs/workloads/compression/compression.md",sourceDirName:"workloads/compression",slug:"/workloads/compression/",permalink:"/VirtualClient/docs/workloads/compression/",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/compression/compression.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AspNetBench Workload Profiles",permalink:"/VirtualClient/docs/workloads/aspnetbench/aspnetbench-profiles"},next:{title:"7zip",permalink:"/VirtualClient/docs/workloads/compression/7zip"}},p={},s=[{value:"Documentation",id:"documentation",level:3},{value:"Supported Platforms and Architectures",id:"supported-platforms-and-architectures",level:3},{value:"Package Dependencies",id:"package-dependencies",level:3},{value:"What is Being Tested?",id:"what-is-being-tested",level:3}],m={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"compression"},"Compression"),(0,a.kt)("p",null,"Virtual Client host different types of compression and decompression workloads which are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"7zip"),(0,a.kt)("li",{parentName:"ul"},"Gzip"),(0,a.kt)("li",{parentName:"ul"},"Lzbench"),(0,a.kt)("li",{parentName:"ul"},"Pbzip2")),(0,a.kt)("h3",{id:"documentation"},"Documentation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/VirtualClient/docs/workloads/compression/lzbench"},"Lzbench")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/VirtualClient/docs/workloads/compression/7zip"},"7zip")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/VirtualClient/docs/workloads/compression/gzip"},"Gzip")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/VirtualClient/docs/workloads/compression/pbzip2"},"Pbzip2"))),(0,a.kt)("h3",{id:"supported-platforms-and-architectures"},"Supported Platforms and Architectures"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"linux-x64"),(0,a.kt)("li",{parentName:"ul"},"linux-arm64"),(0,a.kt)("li",{parentName:"ul"},"win-x64"),(0,a.kt)("li",{parentName:"ul"},"win-arm64")),(0,a.kt)("h3",{id:"package-dependencies"},"Package Dependencies"),(0,a.kt)("p",null,"The following package dependencies are required to be installed on the Unix/Linux system in order to support the requirements\nof the Lzbench workload. Note that the Virtual Client will handle the installation of any required dependencies."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"gcc"),(0,a.kt)("li",{parentName:"ul"},"make"),(0,a.kt)("li",{parentName:"ul"},"g++"),(0,a.kt)("li",{parentName:"ul"},"unzip"),(0,a.kt)("li",{parentName:"ul"},"pbzip2"),(0,a.kt)("li",{parentName:"ul"},"gzip")),(0,a.kt)("h3",{id:"what-is-being-tested"},"What is Being Tested?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Lzbench")),(0,a.kt)("p",null,"Lzbench is used to measure performance in terms of compression speed, decompression speed and ratio of compressed size and original size. Below are the metrics measured by Lzbench Workload."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Compression Speed"),(0,a.kt)("td",{parentName:"tr",align:null},"MB/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Decompression Speed"),(0,a.kt)("td",{parentName:"tr",align:null},"MB/s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Compressed size and original size ratio"),(0,a.kt)("td",{parentName:"tr",align:null},"-")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Gzip"),(0,a.kt)("p",{parentName:"li"},"Gzip is used to measure performance in terms of ReductionRatio. Below are the metrics measured by Gzip Workload."))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ReductionRatio"),(0,a.kt)("td",{parentName:"tr",align:null},"-")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"7zip ")),(0,a.kt)("p",null,"7zip is used to measure performance in terms of compressionTime, and ratio of compressed size and original size. Below are the metrics measured by 7zip Workload."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Compressed size and Original size ratio"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CompressionTime"),(0,a.kt)("td",{parentName:"tr",align:null},"seconds")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pbzip2 ")),(0,a.kt)("p",null,"Pbzip2 is used to measure performance in terms of compressionTime, and ratio of compressed size and original size in case of compression and ratio of decompressed size and original size in case of compression. Below are the metrics measured by Pbzip2 Workload."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CompressionTime"),(0,a.kt)("td",{parentName:"tr",align:null},"seconds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Compressed size and Original size ratio"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Decompressed size and Original size ratio"),(0,a.kt)("td",{parentName:"tr",align:null},"-")))),(0,a.kt)("h1",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/inikep/lzbench"},"Lzbench github")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://compression.ca/pbzip2/"},"Pbzip2 github")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.gzip.org/"},"Gzip github")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.7-zip.org/"},"7zip"))))}u.isMDXComponent=!0}}]);