"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[4057],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(h,s(s({ref:t},c),{},{components:r})):a.createElement(h,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var p=2;p<o;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4449:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={},s="Sysbench OLTP",l={unversionedId:"workloads/sysbench-oltp/sysbench-oltp",id:"workloads/sysbench-oltp/sysbench-oltp",title:"Sysbench OLTP",description:"Sysbench is an open-source multi-threaded database benchmark tool. As a suite, it offers benchmarks that test many different aspects of the system, but this workload supports only the OLTP .lua script tests on MySQL, PostgreSQL, and MariaDB systems -- VC implements support for testing on a MySQL database.",source:"@site/docs/workloads/sysbench-oltp/sysbench-oltp.md",sourceDirName:"workloads/sysbench-oltp",slug:"/workloads/sysbench-oltp/",permalink:"/VirtualClient/docs/workloads/sysbench-oltp/",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/sysbench-oltp/sysbench-oltp.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SuperBenchmark Workload Profiles",permalink:"/VirtualClient/docs/workloads/superbenchmark/superbenchmark-profiles"},next:{title:"Sysbench Workload Metrics",permalink:"/VirtualClient/docs/workloads/sysbench-oltp/sysbench-oltp-metrics"}},i={},p=[{value:"What is Being Tested?",id:"what-is-being-tested",level:3},{value:"Client-Server Workflow",id:"client-server-workflow",level:3},{value:"Workload Configuration",id:"workload-configuration",level:3},{value:"Package Dependencies",id:"package-dependencies",level:3}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"sysbench-oltp"},"Sysbench OLTP"),(0,n.kt)("p",null,"Sysbench is an open-source multi-threaded database benchmark tool. As a suite, it offers benchmarks that test many different aspects of the system, but this workload supports only the OLTP .lua script tests on MySQL, PostgreSQL, and MariaDB systems -- VC implements support for testing on a MySQL database."),(0,n.kt)("p",null,"This suite was pulled from the original GitHub repository."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/akopytov/sysbench"},"Sysbench GitHub"),"  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.flamingbytes.com/posts/sysbench/"},"Example Sysbench Uses"))),(0,n.kt)("h3",{id:"what-is-being-tested"},"What is Being Tested?"),(0,n.kt)("p",null,"The Sysbench test suite executes varied transactions on the database system including reads, writes, and other queries. The list of OLTP benchmarks supported by Sysbench are as follows:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Benchmark Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"oltp_read_write"),(0,n.kt)("td",{parentName:"tr",align:null},"Measures performance of read and write queries on MySQL database")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"oltp_read_only"),(0,n.kt)("td",{parentName:"tr",align:null},"Measures performance of only read queries on MySQL database")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"oltp_write_only"),(0,n.kt)("td",{parentName:"tr",align:null},"Measures performance of only write queries on MySQL database")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"oltp_delete"),(0,n.kt)("td",{parentName:"tr",align:null},"Measures performance of only delete queries on the MySQL database")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"oltp_insert"),(0,n.kt)("td",{parentName:"tr",align:null},"Measures performance of only insert queries on MySQL database")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"oltp_update_index"),(0,n.kt)("td",{parentName:"tr",align:null},"Measures performance of index updates on the MySQL database")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"oltp_update_non_index"),(0,n.kt)("td",{parentName:"tr",align:null},"Measures performance of non-index updates on the MySQL database")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"select_random_points"),(0,n.kt)("td",{parentName:"tr",align:null},"Measures performance of random point select on the MySQL database")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"select_random_ranges"),(0,n.kt)("td",{parentName:"tr",align:null},"Measures performance of random range select on the MySQL database")))),(0,n.kt)("p",null,"Sysbench also provides a .lua script named oltp_common that is used to set up the database with tables and records to prepare it for testing."),(0,n.kt)("h3",{id:"client-server-workflow"},"Client-Server Workflow"),(0,n.kt)("p",null,"In this workload, the client(s) run(s) sysbench; sysbench helps prepare various queries to perform on the server based on the number of tables, records per table, and threads. The server, which hosts the MySQL database, remains idle as long as mysql processes are running. The client only is in charge of downloading the sysbench package, running the appropriate sysbench commands, and logging the output. "),(0,n.kt)("h3",{id:"workload-configuration"},"Workload Configuration"),(0,n.kt)("p",null,"The workload provides a host of scenarios to choose between for coverage of a 1- to 16-core system under test, varying the thread count, record count per table, and benchmark used (as listed above).\nThe desired scenario can be configured based on the number of logical cores of the VM and desired stress on the system. These parameters were collected as a part of testing and observation on VMs of different sizes. Each runs for 30 minutes."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"2-core VM: {benchmarkName}_T8_TB16_REC500, {benchmarkName}_T16_TB16_REC1000"),(0,n.kt)("li",{parentName:"ul"},"4-core VM: {benchmarkName}_T16_TB16_REC5000, {benchmarkName}_T32_TB16_REC10000"),(0,n.kt)("li",{parentName:"ul"},"8-core VM: {benchmarkName}_T8_TB32_REC50000, {benchmarkName}_T16_TB32_REC500000"),(0,n.kt)("li",{parentName:"ul"},"16-core VM: {benchmarkName}_T92_TB4_REC50000, {benchmarkName}_T152_TB4_REC100000")),(0,n.kt)("p",null,"The supported benchmark names are as follows: oltp_read_write, oltp_write_only, and oltp_read_only."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Supported Platform/Architectures"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"linux-x64"),(0,n.kt)("li",{parentName:"ul"},"linux-arm64")))),(0,n.kt)("h3",{id:"package-dependencies"},"Package Dependencies"),(0,n.kt)("p",null,"The following package dependencies are required to be installed on the Unix/Linux system in order to support the requirements of the Sysbench OLTP workload. Note that the Virtual Client will handle the installation of any required dependencies."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Client: make, automake, libtool, pkg-config, libaio-dev, libmysqlclient-dev, libssl-dev, sysbench"),(0,n.kt)("li",{parentName:"ul"},"Server: mysql-server")))}d.isMDXComponent=!0}}]);