"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[135],{4099:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var r=t(5893),i=t(3905);const l={},o="Docker Installation",a={id:"dependencies/0052-install-docker",title:"Docker Installation",description:"Docker is a platform to help develop and ship applications. Should a workload require the download of a containerized application, this dependency can assist in docker installation and setup in preparation.",source:"@site/docs/dependencies/0052-install-docker.md",sourceDirName:"dependencies",slug:"/dependencies/0052-install-docker",permalink:"/VirtualClient/docs/dependencies/0052-install-docker",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/dependencies/0052-install-docker.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Install .NET SDK",permalink:"/VirtualClient/docs/dependencies/0051-install-dotnet-sdk"},next:{title:"MsMPI Installation",permalink:"/VirtualClient/docs/dependencies/0053-install-msmpi"}},s={},c=[{value:"Supported Platform/Architectures",id:"supported-platformarchitectures",level:2},{value:"Profile Component Parameters",id:"profile-component-parameters",level:2},{value:"Example",id:"example",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"docker-installation",children:"Docker Installation"}),"\n",(0,r.jsx)(n.p,{children:"Docker is a platform to help develop and ship applications. Should a workload require the download of a containerized application, this dependency can assist in docker installation and setup in preparation."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.docker.com/",children:"Docker Documentation"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"supported-platformarchitectures",children:"Supported Platform/Architectures"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"linux-x64"}),"\n",(0,r.jsx)(n.li,{children:"linux-arm64"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"profile-component-parameters",children:"Profile Component Parameters"}),"\n",(0,r.jsx)(n.p,{children:"The following section describes the parameters used by the individual component in the profile."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Parameter"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Required"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Description"})})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Version"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"The version of Docker to download and install."})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"The following section describes the parameters used by the individual component in the profile."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Main/profiles/PERF-GPU-SUPERBENCH.json",children:"Profile Example"})}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "Type": "DockerInstallation",\n    "Parameters": {\n        "Scenario": "InstallDocker"\n    }\n},\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.ah)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3905:(e,n,t)=>{t.d(n,{ah:()=>c});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),h=c(t),u=i,m=h["".concat(s,".").concat(u)]||h[u]||d[u]||l;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));p.displayName="MDXCreateElement"}}]);