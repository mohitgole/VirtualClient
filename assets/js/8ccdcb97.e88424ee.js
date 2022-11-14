"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[9063],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>d});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var m=a.createContext({}),p=function(t){var e=a.useContext(m),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},c=function(t){var e=p(t.components);return a.createElement(m.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,m=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),u=p(r),d=n,s=u["".concat(m,".").concat(d)]||u[d]||k[d]||l;return r?a.createElement(s,o(o({ref:e},c),{},{components:r})):a.createElement(s,o({ref:e},c))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8779:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const l={},o="CoreMark Workload Metrics",i={unversionedId:"workloads/coremark/coremark-metrics",id:"workloads/coremark/coremark-metrics",title:"CoreMark Workload Metrics",description:"The following document illustrates the type of results that are emitted by the CoreMark workload and captured by the",source:"@site/docs/workloads/coremark/coremark-metrics.md",sourceDirName:"workloads/coremark",slug:"/workloads/coremark/coremark-metrics",permalink:"/VirtualClient/docs/workloads/coremark/coremark-metrics",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/coremark/coremark-metrics.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CoreMark Workload",permalink:"/VirtualClient/docs/workloads/coremark/"},next:{title:"CoreMark Workload Profiles",permalink:"/VirtualClient/docs/workloads/coremark/coremark-profiles"}},m={},p=[{value:"Workload-Specific Metrics",id:"workload-specific-metrics",level:3}],c={toc:p};function k(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"coremark-workload-metrics"},"CoreMark Workload Metrics"),(0,n.kt)("p",null,"The following document illustrates the type of results that are emitted by the CoreMark workload and captured by the\nVirtual Client for net impact analysis."),(0,n.kt)("h3",{id:"workload-specific-metrics"},"Workload-Specific Metrics"),(0,n.kt)("p",null,"The following metrics are emitted by the CoreMark workload itself."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Execution Profile"),(0,n.kt)("th",{parentName:"tr",align:null},"Test Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Example Value (min)"),(0,n.kt)("th",{parentName:"tr",align:null},"Example Value (max)"),(0,n.kt)("th",{parentName:"tr",align:null},"Example Value (avg)"),(0,n.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PERF-CPU-COREMARK.json"),(0,n.kt)("td",{parentName:"tr",align:null},"CoreMark"),(0,n.kt)("td",{parentName:"tr",align:null},"CoreMark Size"),(0,n.kt)("td",{parentName:"tr",align:null},"666.0"),(0,n.kt)("td",{parentName:"tr",align:null},"666.0"),(0,n.kt)("td",{parentName:"tr",align:null},"666.0"),(0,n.kt)("td",{parentName:"tr",align:null},"bytes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PERF-CPU-COREMARK.json"),(0,n.kt)("td",{parentName:"tr",align:null},"CoreMark"),(0,n.kt)("td",{parentName:"tr",align:null},"Iterations"),(0,n.kt)("td",{parentName:"tr",align:null},"400000.0"),(0,n.kt)("td",{parentName:"tr",align:null},"800000.0"),(0,n.kt)("td",{parentName:"tr",align:null},"773160.1731601731"),(0,n.kt)("td",{parentName:"tr",align:null},"iterations")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PERF-CPU-COREMARK.json"),(0,n.kt)("td",{parentName:"tr",align:null},"CoreMark"),(0,n.kt)("td",{parentName:"tr",align:null},"Iterations/Sec"),(0,n.kt)("td",{parentName:"tr",align:null},"19968.051118"),(0,n.kt)("td",{parentName:"tr",align:null},"33889.689062"),(0,n.kt)("td",{parentName:"tr",align:null},"33081.75554433839"),(0,n.kt)("td",{parentName:"tr",align:null},"iterations/sec")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PERF-CPU-COREMARK.json"),(0,n.kt)("td",{parentName:"tr",align:null},"CoreMark"),(0,n.kt)("td",{parentName:"tr",align:null},"Parallel PThreads"),(0,n.kt)("td",{parentName:"tr",align:null},"2.0"),(0,n.kt)("td",{parentName:"tr",align:null},"2.0"),(0,n.kt)("td",{parentName:"tr",align:null},"2.0"),(0,n.kt)("td",{parentName:"tr",align:null},"threads")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PERF-CPU-COREMARK.json"),(0,n.kt)("td",{parentName:"tr",align:null},"CoreMark"),(0,n.kt)("td",{parentName:"tr",align:null},"Total ticks"),(0,n.kt)("td",{parentName:"tr",align:null},"12022.0"),(0,n.kt)("td",{parentName:"tr",align:null},"36126.0"),(0,n.kt)("td",{parentName:"tr",align:null},"23365.67617325762"),(0,n.kt)("td",{parentName:"tr",align:null},"ticks")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PERF-CPU-COREMARK.json"),(0,n.kt)("td",{parentName:"tr",align:null},"CoreMark"),(0,n.kt)("td",{parentName:"tr",align:null},"Total time (secs)"),(0,n.kt)("td",{parentName:"tr",align:null},"12.022"),(0,n.kt)("td",{parentName:"tr",align:null},"36.126"),(0,n.kt)("td",{parentName:"tr",align:null},"23.365676173257606"),(0,n.kt)("td",{parentName:"tr",align:null},"secs")))))}k.isMDXComponent=!0}}]);