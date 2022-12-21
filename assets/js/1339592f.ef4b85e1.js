"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[8415],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(h,a(a({ref:t},c),{},{components:r})):n.createElement(h,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},907:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const i={},a="Coding Standards",l={unversionedId:"developing/0080-coding-standards",id:"developing/0080-coding-standards",title:"Coding Standards",description:"Style Guidelines",source:"@site/docs/developing/0080-coding-standards.md",sourceDirName:"developing",slug:"/developing/0080-coding-standards",permalink:"/VirtualClient/docs/developing/0080-coding-standards",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/developing/0080-coding-standards.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Error Handling Recommendations",permalink:"/VirtualClient/docs/developing/0070-error-handling"},next:{title:"Testing Practices",permalink:"/VirtualClient/docs/developing/0090-testing"}},s={},u=[{value:"Style Guidelines",id:"style-guidelines",level:3},{value:"Test Guidelines",id:"test-guidelines",level:3},{value:"Pull Request(PR) Process",id:"pull-requestpr-process",level:3},{value:"Creating/Submitting Changes",id:"creatingsubmitting-changes",level:5},{value:"Getting Approvals",id:"getting-approvals",level:5}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"coding-standards"},"Coding Standards"),(0,o.kt)("h3",{id:"style-guidelines"},"Style Guidelines"),(0,o.kt)("p",null,"Most of the coding style is enforced using static code/style analysis toolsets that are integrated into the project when built.\nThis makes it easier for developers to follow the patterns. The important thing to remember here is that new projects must import\nthe build environment settings. You can see examples of the import at the bottom of any project (e.g. csproj) file in the\nrepo."),(0,o.kt)("p",null,"As a general rule, if it builds, the majority of your style requirements are already completed! :)"),(0,o.kt)("h3",{id:"test-guidelines"},"Test Guidelines"),(0,o.kt)("p",null,"Any changes or additions to source code in this repo carry the requirement at a minimum that unit tests be written to verify\nimportant behaviors. The team does not typically accept changes to source code in this repo without having proper unit tests.\nTake the time to look at existing unit tests within the project. A lot of effort was made to create unit tests that are clear,\nclean and effective. Additionally, there are a lot of good patterns in place to help other developers quickly write a set of\nrobust unit tests for code in this repo."),(0,o.kt)("p",null,"Review our documentation on testing if you would like to learn more on our practices and philosophies around testing."),(0,o.kt)("h3",{id:"pull-requestpr-process"},"Pull Request(PR) Process"),(0,o.kt)("p",null,"The following steps will help you get your changes in for review by the team. Review the repo README if you need a reminder\nor examples on how to build and test code within the repo."),(0,o.kt)("h5",{id:"creatingsubmitting-changes"},"Creating/Submitting Changes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a topic branch for your changes (e.g. users/alias/ChangeDescription). We do not allow users to push changes directly to the main branch."),(0,o.kt)("li",{parentName:"ul"},"Ensure all solutions/projects within the repo build successfully before submitting your PR."),(0,o.kt)("li",{parentName:"ul"},"Ensure all tests within the repo pass before submitting your PR. Passing unit and functional tests is a gate to complete the PR."),(0,o.kt)("li",{parentName:"ul"},"Update any documentation, user and contributor, that is impacted by your changes.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Check for markdown (e.g. README.md) files within the solution or project directory."),(0,o.kt)("li",{parentName:"ul"},"Team members will typically help you with pointers to documentation needing update as part of the pull request process."))),(0,o.kt)("li",{parentName:"ul"},"Increase the version numbers for any assemblies (.exe or .dll) for which you have changed.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"We use ",(0,o.kt)("a",{parentName:"li",href:"http://semver.org/"},"semantic versioning"),"."))),(0,o.kt)("li",{parentName:"ul"},"Push your changes to the remote."),(0,o.kt)("li",{parentName:"ul"},"Browse to the Azure DevOps location for the repo and create a pull request for your branch/changes. You do not need to\nadd reviewers to the pull request. The team will be automatically added.  Feel free to add any other reviewers that you'd like\nto the pull request though."),(0,o.kt)("li",{parentName:"ul"},"Add a referenced work item to the pull request you created.")),(0,o.kt)("h5",{id:"getting-approvals"},"Getting Approvals"),(0,o.kt)("p",null,"After you've created the pull request, the following requirements must be met before you will be able to complete the pull request:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An automated PR build must complete successfully."),(0,o.kt)("li",{parentName:"ul"},"Team reviewers must review the code and provide at least 1 approval.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Any feedback/comments provided by reviewers must be resolved and changes committed + pushed to the remote.")))))}p.isMDXComponent=!0}}]);