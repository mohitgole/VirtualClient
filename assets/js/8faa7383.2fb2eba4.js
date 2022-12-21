"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[5613],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>p});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=s(r),p=n,h=u["".concat(l,".").concat(p)]||u[p]||d[p]||o;return r?a.createElement(h,i(i({ref:t},m),{},{components:r})):a.createElement(h,i({ref:t},m))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7389:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={},i="Memcached",c={unversionedId:"workloads/memcached/memcached",id:"workloads/memcached/memcached",title:"Memcached",description:"Memcached is an open source (BSD licensed), high-performance, distributed memory object caching system. Memcached is an in-memory key-value store for small arbitrary data (strings, objects) from results of database calls, API calls, or page rendering. Memcached works with an in-memory dataset. It is a client-server model workload in which Memcached acts as server. There are different tools that acts are clients.",source:"@site/docs/workloads/memcached/memcached.md",sourceDirName:"workloads/memcached",slug:"/workloads/memcached/",permalink:"/VirtualClient/docs/workloads/memcached/",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/memcached/memcached.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LMbench Workload Profiles",permalink:"/VirtualClient/docs/workloads/lmbench/lmbench-profiles"},next:{title:"Memcached Workload Metrics",permalink:"/VirtualClient/docs/workloads/memcached/memcached-metrics"}},l={},s=[{value:"What is Being Tested?",id:"what-is-being-tested",level:3},{value:"Memtier Benchmarking Tool :",id:"memtier-benchmarking-tool-",level:4},{value:"Supported Platforms",id:"supported-platforms",level:3},{value:"Supported Distros",id:"supported-distros",level:3}],m={toc:s};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"memcached"},"Memcached"),(0,n.kt)("p",null,"Memcached is an open source (BSD licensed), high-performance, distributed memory object caching system. Memcached is an in-memory key-value store for small arbitrary data (strings, objects) from results of database calls, API calls, or page rendering. Memcached works with an in-memory dataset. It is a client-server model workload in which Memcached acts as server. There are different tools that acts are clients.\nOne of the widely used tool is onboarded into Virtual Client. It is"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://redis.com/blog/memtier_benchmark-a-high-throughput-benchmarking-tool-for-redis-memcached/"},"Memtier Benchmarking Tool"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://memcached.org/about"},"Official Memcached Documentation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/memcached/memcached"},"Memcached Github Repo"))),(0,n.kt)("h3",{id:"what-is-being-tested"},"What is Being Tested?"),(0,n.kt)("h4",{id:"memtier-benchmarking-tool-"},"Memtier Benchmarking Tool :"),(0,n.kt)("p",null,"This tool can be used to generate various traffic patterns against Memcached instances.\nIt provides a robust set of customization and reporting capabilities all wrapped into a convenient\nand easy-to-use command-line interface. It performs GET and SET operations on to the Memcached Server Instances and gives percentile latency distribution and throughput."),(0,n.kt)("h3",{id:"supported-platforms"},"Supported Platforms"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Linux x64"),(0,n.kt)("li",{parentName:"ul"},"Linux arm64")),(0,n.kt)("h3",{id:"supported-distros"},"Supported Distros"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ubuntu"),(0,n.kt)("li",{parentName:"ul"},"Debian"),(0,n.kt)("li",{parentName:"ul"},"CentOS8"),(0,n.kt)("li",{parentName:"ul"},"RHEL8"),(0,n.kt)("li",{parentName:"ul"},"Mariner")))}d.isMDXComponent=!0}}]);