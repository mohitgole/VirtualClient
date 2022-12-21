"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[9615],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=d(r),p=a,f=m["".concat(s,".").concat(p)]||m[p]||c[p]||i;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7101:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const i={},l="MLPerf",o={unversionedId:"workloads/mlperf/mlperf",id:"workloads/mlperf/mlperf",title:"MLPerf",description:"MLPerf is a consortium of AI leaders from academia, research labs, and industry whose mission is to \u201cbuild fair and useful benchmarks\u201d that provide unbiased evaluations of training and inference performance for hardware, software, and services\u2014all conducted under prescribed conditions. To stay on the cutting edge of industry trends, MLPerf continues to evolve, holding new tests at regular intervals and adding new workloads that represent the state of the art in AI.",source:"@site/docs/workloads/mlperf/mlperf.md",sourceDirName:"workloads/mlperf",slug:"/workloads/mlperf/",permalink:"/VirtualClient/docs/workloads/mlperf/",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/mlperf/mlperf.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Memcached Workload Profiles",permalink:"/VirtualClient/docs/workloads/memcached/memcached-profiles"},next:{title:"MLPerf Workload Metrics",permalink:"/VirtualClient/docs/workloads/mlperf/mlperf-metrics"}},s={},d=[{value:"What is Being Tested?",id:"what-is-being-tested",level:3},{value:"System Requirements",id:"system-requirements",level:3},{value:"Datacenter systems:",id:"datacenter-systems",level:3},{value:"Edge Systems:",id:"edge-systems",level:4},{value:"Supported Platforms",id:"supported-platforms",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"For Nvidia GPUs:",id:"for-nvidia-gpus",level:4}],u={toc:d};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mlperf"},"MLPerf"),(0,a.kt)("p",null,"MLPerf is a consortium of AI leaders from academia, research labs, and industry whose mission is to \u201cbuild fair and useful benchmarks\u201d that provide unbiased evaluations of training and inference performance for hardware, software, and services\u2014all conducted under prescribed conditions. To stay on the cutting edge of industry trends, MLPerf continues to evolve, holding new tests at regular intervals and adding new workloads that represent the state of the art in AI."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/mlcommons/training_results_v2.0/blob/main/MLPerf%E2%84%A2%20Training%20v2.0%20Results%20Discussion.pdf"},"MLPerf Training Documentation"),"  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/mlcommons/inference_results_v2.0"},"MLPerf Inference Documentation"),"  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/mlcommons/training_results_v2.0/tree/main/NVIDIA/benchmarks"},"MLPerf Training Benchmarks")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/mlcommons/inference_results_v2.0/tree/master/closed/NVIDIA"},"MLPerf Inference Benchmarks"))),(0,a.kt)("h3",{id:"what-is-being-tested"},"What is Being Tested?"),(0,a.kt)("p",null,"GPU performance"),(0,a.kt)("h3",{id:"system-requirements"},"System Requirements"),(0,a.kt)("p",null,"This is a GPU specific workload and requires high-performance graphic cards to run. "),(0,a.kt)("p",null,"MLPerf2.0 formally support and fully test the configuration files for the following systems:"),(0,a.kt)("h3",{id:"datacenter-systems"},"Datacenter systems:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A100-SXM-80GBx8 (NVIDIA DGX A100, 80GB variant)"),(0,a.kt)("li",{parentName:"ul"},'A100-SXM-80GBx4 (NVIDIA DGX Station A100, "Red October", 80GB variant)'),(0,a.kt)("li",{parentName:"ul"},"A100-PCIex8 (80GB variant)"),(0,a.kt)("li",{parentName:"ul"},"A2x2"),(0,a.kt)("li",{parentName:"ul"},"A30x8")),(0,a.kt)("h4",{id:"edge-systems"},"Edge Systems:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A100-SXM-80GBx1"),(0,a.kt)("li",{parentName:"ul"},"A100-PCIex1 (80 GB variant)"),(0,a.kt)("li",{parentName:"ul"},"A30x1"),(0,a.kt)("li",{parentName:"ul"},"A2x1"),(0,a.kt)("li",{parentName:"ul"},"Orin"),(0,a.kt)("li",{parentName:"ul"},"Xavier NX")),(0,a.kt)("p",null,"The details related to whether system is supported or not can be found here: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mlcommons/inference_results_v2.0/tree/master/closed/NVIDIA"},"MLPerf")),(0,a.kt)("h3",{id:"supported-platforms"},"Supported Platforms"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Linux x64 - Nvidia GPU")),(0,a.kt)("h3",{id:"dependencies"},"Dependencies"),(0,a.kt)("h4",{id:"for-nvidia-gpus"},"For Nvidia GPUs:"),(0,a.kt)("p",null,"The following dependencies are required to be installed on the Unix/Linux system in order to support the requirements\nof the MLPerf workload. Note that the Virtual Client will handle the installation of any required dependencies."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"CUDA and Nvidia GPU driver (Nvidia: nvidia-smi)"),(0,a.kt)("li",{parentName:"ol"},"Docker CE"),(0,a.kt)("li",{parentName:"ol"},"CUDA and Nvidia container toolkit"),(0,a.kt)("li",{parentName:"ol"},"Actual GPU and turned on")))}c.isMDXComponent=!0}}]);