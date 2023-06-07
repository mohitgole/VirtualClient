"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[2558],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},o="Wait Executor Dependency",l={unversionedId:"dependencies/0002-wait-executor",id:"dependencies/0002-wait-executor",title:"Wait Executor Dependency",description:"Virtual Client has a dependency component that can be added to a workload or monitor profile to wait for given amount of time between actions/dependencies steps in VC. The following section illustrates the",source:"@site/docs/dependencies/0002-wait-executor.md",sourceDirName:"dependencies",slug:"/dependencies/0002-wait-executor",permalink:"/VirtualClient/docs/dependencies/0002-wait-executor",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/dependencies/0002-wait-executor.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Install VC Packages",permalink:"/VirtualClient/docs/dependencies/0001-install-vc-packages"},next:{title:"Install Linux Packages",permalink:"/VirtualClient/docs/dependencies/0010-install-linux-packages"}},c={},p=[{value:"Supported Platform/Architectures",id:"supported-platformarchitectures",level:2},{value:"Profile Component Parameters",id:"profile-component-parameters",level:2},{value:"Example",id:"example",level:3}],s={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"wait-executor-dependency"},"Wait Executor Dependency"),(0,a.kt)("p",null,"Virtual Client has a dependency component that can be added to a workload or monitor profile to wait for given amount of time between actions/dependencies steps in VC. The following section illustrates the\ndetails for integrating this into the profile."),(0,a.kt)("h2",{id:"supported-platformarchitectures"},"Supported Platform/Architectures"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"linux-x64"),(0,a.kt)("li",{parentName:"ul"},"linux-arm64"),(0,a.kt)("li",{parentName:"ul"},"win-x64"),(0,a.kt)("li",{parentName:"ul"},"win-arm64")),(0,a.kt)("h2",{id:"profile-component-parameters"},"Profile Component Parameters"),(0,a.kt)("p",null,"The following section describes the parameters used by the individual component in the profile."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Parameter")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Required")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Duration"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},'Default= "00:05:00". The amount of time required to wait.')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Scenario"),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"A name/identifier for the specific component in the profile. This is used for telemetry purposes only with components in dependency sections of the profile (i.e. cannot be used with --scenarios option on the command line).")))),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"The following sections provides examples for how to integrate the component into a profile."),(0,a.kt)("div",{class:"code-section"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Description": "SPEC CPU 2017 Integer and Floating Point (SPECrate) Benchmark Workload",\n  "MinimumExecutionInterval": "00:05:00",\n  "MinimumRequiredExecutionTime": "02:00:00",\n  "Metadata": {\n    "RecommendedMinimumExecutionTime": "(4-cores)=02:00:00,(16-cores)=05:00:00,(64-cores)=10:00:00",\n    "SupportedPlatforms": "linux-x64,linux-arm64,win-x64,win-arm64",\n    "SupportedOperatingSystems": "CBL-Mariner,CentOS,Debian,RedHat,Suse,Ubuntu,Windows"\n  },\n  "Parameters": {\n    "CompilerName": "gcc",\n    "CompilerVersion": "10",\n    "RunPeak": false,\n    "BaseOptimizingFlags": "-g -O3 -march=native",\n    "PeakOptimizingFlags": "-g -Ofast -march=native -flto",\n    "Duration": "00:05:00"\n  },\n  "Actions": [\n    {\n      "Type": "SpecCpuExecutor",\n      "Parameters": {\n        "Scenario": "ExecuteSPECIntRateBenchmark",\n        "CompilerVersion": "$.Parameters.CompilerVersion",\n        "SpecProfile": "intrate",\n        "PackageName": "speccpu2017",\n        "RunPeak": "$.Parameters.RunPeak",\n        "BaseOptimizingFlags": "$.Parameters.BaseOptimizingFlags",\n        "PeakOptimizingFlags": "$.Parameters.PeakOptimizingFlags"\n      }\n    },\n    {\n      "Type": "WaitExecutor",\n      "Parameters": {\n        "Scenario": "WaitForTimeProvided",\n        "Duration": "$.Parameters.Duration"\n      }\n    },\n    {\n      "Type": "SpecCpuExecutor",\n      "Parameters": {\n        "Scenario": "ExecuteSPECFPRateBenchmark",\n        "CompilerVersion": "$.Parameters.CompilerVersion",\n        "SpecProfile": "fprate",\n        "PackageName": "speccpu2017",\n        "RunPeak": "$.Parameters.RunPeak",\n        "BaseOptimizingFlags": "$.Parameters.BaseOptimizingFlags",\n        "PeakOptimizingFlags": "$.Parameters.PeakOptimizingFlags"\n      }\n    }\n  ],\n  "Dependencies": [\n  {\n      "Type": "WaitExecutor",\n      "Parameters": {\n        "Scenario": "WaitForTimeProvided",\n        "Duration": "$.Parameters.Duration"\n      }\n    },\n    {\n      "Type": "ChocolateyInstallation",\n      "Parameters": {\n        "Scenario": "InstallChocolatey",\n        "PackageName": "chocolatey"\n      }\n    }\n  ]\n}\n'))))}m.isMDXComponent=!0}}]);