"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[2493],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9124:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const l={},i="Install Dependency Packages",o={unversionedId:"dependencies/0001-install-dependency-packages",id:"dependencies/0001-install-dependency-packages",title:"Install Dependency Packages",description:"Virtual Client has a dependency component that can be added to a workload or monitor profile to install dependency packages from a package store. The following section illustrates the",source:"@site/docs/dependencies/0001-install-dependency-packages.md",sourceDirName:"dependencies",slug:"/dependencies/0001-install-dependency-packages",permalink:"/VirtualClient/docs/dependencies/0001-install-dependency-packages",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/dependencies/0001-install-dependency-packages.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dependencies",permalink:"/VirtualClient/docs/category/dependencies"},next:{title:"Install Linux Packages",permalink:"/VirtualClient/docs/dependencies/0010-install-linux-packages"}},p={},c=[{value:"Preliminaries",id:"preliminaries",level:3},{value:"Supported Platform/Architectures",id:"supported-platformarchitectures",level:3},{value:"Component Parameters",id:"component-parameters",level:3},{value:"Example",id:"example",level:3}],s={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"install-dependency-packages"},"Install Dependency Packages"),(0,r.kt)("p",null,"Virtual Client has a dependency component that can be added to a workload or monitor profile to install dependency packages from a package store. The following section illustrates the\ndetails for integrating this into the profile."),(0,r.kt)("h3",{id:"preliminaries"},"Preliminaries"),(0,r.kt)("p",null,"Reference the following documentation on Virtual Client dependency packages for additional information on dependency packages."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/VirtualClient/docs/developing/0040-dependency-packages"},"Dependency Packages"))),(0,r.kt)("h3",{id:"supported-platformarchitectures"},"Supported Platform/Architectures"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"linux-x64"),(0,r.kt)("li",{parentName:"ul"},"linux-arm64"),(0,r.kt)("li",{parentName:"ul"},"win-x64"),(0,r.kt)("li",{parentName:"ul"},"win-arm64")),(0,r.kt)("h3",{id:"component-parameters"},"Component Parameters"),(0,r.kt)("p",null,"The following section describes the parameters used by the individual component in the profile."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Parameter")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Required")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BlobContainer"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the Azure storage account blob container where the package exists (e.g. packages).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BlobName"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the file/blob to download within the Azure storage account to download (e.g. openssl.3.0.0.zip).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PackageName"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"The logical name of the package that will be registered with the Virtual Client runtime. This logical name typically matches the name defined within the *.vcpkg file for the package and is the name that other profile components can use to reference/discover the package and its location.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Scenario"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"A name/identifier for the specific component in the profile. This is used for telemetry purposes only with components in dependency sections of the profile (i.e. cannot be used with --scenarios option on the command line).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Extract"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Default = true. True to instruct the Virtual Client that the package is an archive (e.g. .zip, .tgz) and to extract it. False if the file is a standalone file and should be left exactly as-is after download.")))),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,"The following sections provides examples for how to integrate the component into a profile."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Main/profiles/PERF-CPU-OPENSSL.json"},"Profile Example"))),(0,r.kt)("div",{class:"code-section"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Type": "DependencyPackageInstallation",\n    "Parameters": {\n        "Scenario": "InstallOpenSSLWorkloadPackage",\n        "BlobContainer": "packages",\n        "BlobName": "openssl.3.0.0.zip",\n        "PackageName": "openssl",\n        "Extract": true\n    }\n}\n'))))}d.isMDXComponent=!0}}]);