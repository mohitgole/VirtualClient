"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[3941],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(k,o(o({ref:t},u),{},{components:r})):n.createElement(k,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},900:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={id:"lapack"},o="LAPACK Workload",l={unversionedId:"workloads/lapack/lapack",id:"workloads/lapack/lapack",title:"LAPACK Workload",description:"LAPACK 3.10.0 is an open-source set of libraries written in Fortran 90 and provides routines for solving systems of simultaneous linear equations,",source:"@site/docs/workloads/lapack/lapack.md",sourceDirName:"workloads/lapack",slug:"/workloads/lapack/",permalink:"/VirtualClient/docs/workloads/lapack/",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/lapack/lapack.md",tags:[],version:"current",frontMatter:{id:"lapack"},sidebar:"tutorialSidebar",previous:{title:"HPCG Workload Profiles",permalink:"/VirtualClient/docs/workloads/hpcg/hpcg-profiles"},next:{title:"LAPACK Workload Metrics",permalink:"/VirtualClient/docs/workloads/lapack/lapack-metrics"}},s={},p=[{value:"What is Being Tested?",id:"what-is-being-tested",level:3},{value:"Supported Platforms",id:"supported-platforms",level:3}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lapack-workload"},"LAPACK Workload"),(0,a.kt)("p",null,"LAPACK 3.10.0 is an open-source set of libraries written in Fortran 90 and provides routines for solving systems of simultaneous linear equations,\nleast-squares solutions of linear systems of equations, eigenvalue problems, and singular value problems.\nIt has been designed to be efficient on a wide range of modern high-performance computers."),(0,a.kt)("p",null,"This toolset was compiled from the official website and modified so that it is easier to integrate into VirtualClient."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.netlib.org/lapack/"},"LAPACK Offical Website")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Reference-LAPACK/lapack"},"LAPACK Github")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.netlib.org/lapack/lawnspdf/lawn41.pdf"},"LAPACK Installation Guide"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"what-is-being-tested"},"What is Being Tested?"),(0,a.kt)("p",null,"LAPACK is designed to be a very simple benchmarking tool. It produces the amount of time it takes to test a set of LAPACK driver routines\nunder different precisions such as single precision, double, complex, complex double. "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Metric Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"compute_time_LIN_Single_Precision"),(0,a.kt)("td",{parentName:"tr",align:null},"Time for testing Linear equation test routines under single precision")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"compute_time_LIN_Double_Precision"),(0,a.kt)("td",{parentName:"tr",align:null},"Time for testing Linear equation test routines under double precision")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"compute_time_LIN_Complex"),(0,a.kt)("td",{parentName:"tr",align:null},"Time for testing Linear equation test routines under complex precision")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"compute_time_LIN_Complex_Double"),(0,a.kt)("td",{parentName:"tr",align:null},"Time for testing Linear equation test routines under complex double precision")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"compute_time_EIG_Single_Precision"),(0,a.kt)("td",{parentName:"tr",align:null},"Time for testing Eigensystem test routines under single precision")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"compute_time_EIG_Double_Precision"),(0,a.kt)("td",{parentName:"tr",align:null},"Time for testing Eigensystem test routines under double precision")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"compute_time_EIG_Complex"),(0,a.kt)("td",{parentName:"tr",align:null},"Time for testing Eigensystem test routines under complex precision")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"compute_time_EIG_Complex_Double"),(0,a.kt)("td",{parentName:"tr",align:null},"Time for testing Eigensystem test routines under complex double precision")))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"supported-platforms"},"Supported Platforms"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Linux x64"),(0,a.kt)("li",{parentName:"ul"},"Linux arm64"),(0,a.kt)("li",{parentName:"ul"},"Windows x64"),(0,a.kt)("li",{parentName:"ul"},"Windows arm64")))}c.isMDXComponent=!0}}]);