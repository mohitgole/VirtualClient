"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[7485],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=c;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1298:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const l={},i="PostgreSQL Workload Profiles",a={unversionedId:"workloads/postgresql/postgresql-profiles",id:"workloads/postgresql/postgresql-profiles",title:"PostgreSQL Workload Profiles",description:"The following profiles run customer-representative or benchmarking scenarios using the postgresql workload.",source:"@site/docs/workloads/postgresql/postgresql-profiles.md",sourceDirName:"workloads/postgresql",slug:"/workloads/postgresql/postgresql-profiles",permalink:"/VirtualClient/docs/workloads/postgresql/postgresql-profiles",draft:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/postgresql/postgresql-profiles.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PostgreSQL",permalink:"/VirtualClient/docs/workloads/postgresql/"},next:{title:"Prime95",permalink:"/VirtualClient/docs/workloads/prime95/"}},s={},p=[{value:"Client/Server Topology Support",id:"clientserver-topology-support",level:2},{value:"PERF-SQL-POSTGRESQL.json",id:"perf-sql-postgresqljson",level:2}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"postgresql-workload-profiles"},"PostgreSQL Workload Profiles"),(0,o.kt)("p",null,"The following profiles run customer-representative or benchmarking scenarios using the postgresql workload."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/VirtualClient/docs/workloads/postgresql/"},"Workload Details")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/VirtualClient/docs/guides/0020-client-server"},"Client/Server Workloads"))),(0,o.kt)("h2",{id:"clientserver-topology-support"},"Client/Server Topology Support"),(0,o.kt)("p",null,"PostgreSQL workload profiles support running the workload on both a single system as well as in a client/server topology. This means that the workload supports operation on a single system or on 2 distinct systems. The client/server topology is typically used when it is desirable to include a network component in the\noverall performance evaluation. In a client/server topology, one system operates in the 'Client' role making calls to the system operating in the 'Server' role.\nThe Virtual Client instances running on the client and server systems will synchronize with each other before running the workload. In order to support a client/server topology,\nan environment layout file MUST be supplied to each instance of the Virtual Client on the command line to describe the IP address/location of other Virtual Client instances. An environment layout file is not required for the single system topology."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/VirtualClient/docs/guides/0020-client-server"},"Environment Layouts"))),(0,o.kt)("p",null,'In the environment layout file provided to the Virtual Client, define the role of the client system/VM as "Client" and the role of the server system(s)/VM(s) as "Server".\nThe spelling of the roles must be exact. The IP addresses of the systems/VMs must be correct as well. The following example illustrates the\nidea. The name of the client must match the name of the system or the value of the agent ID passed in on the command line.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Single System (environment layout not required)\n./VirtualClient --profile=PERF-SQL-POSTGRESQL.json --system=Juno --timeout=1440\n\n# Multi-System\n# On Client Role System...\n./VirtualClient --profile=PERF-SQL-POSTGRESQL.json --system=Juno --timeout=1440 --clientId=Client01 --layoutPath=/any/path/to/layout.json\n\n# On Server Role System...\n./VirtualClient --profile=PERF-SQL-POSTGRESQL.json --system=Juno --timeout=1440 --clientId=Server01 --layoutPath=/any/path/to/layout.json\n\n# Example contents of the \'layout.json\' file:\n{\n    "clients": [\n        {\n            "name": "Client01",\n            "role": "Client",\n            "ipAddress": "10.1.0.1"\n        },\n        {\n            "name": "Server01",\n            "role": "Server",\n            "ipAddress": "10.1.0.2"\n        }\n    ]\n}\n')),(0,o.kt)("h2",{id:"perf-sql-postgresqljson"},"PERF-SQL-POSTGRESQL.json"),(0,o.kt)("p",null,"Runs the Postgresql workload against to HammerDB tool which generate various network traffic patterns against a Postgresql server. Although this is the default client workload."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/VirtualClient/blob/main/src/VirtualClient/VirtualClient.Main/profiles/PERF-SQL-POSTGRESQL.json"},"Workload Profile")," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Supported Platform/Architectures")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"linux-x64"),(0,o.kt)("li",{parentName:"ul"},"linux-arm64"),(0,o.kt)("li",{parentName:"ul"},"win-x64"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Supports Disconnected Scenarios"),"  "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"No. Internet connection required."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Dependencies"),(0,o.kt)("br",{parentName:"p"}),"\n","The dependencies defined in the 'Dependencies' section of the profile itself are required in order to run the workload operations effectively."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Internet connection."),(0,o.kt)("li",{parentName:"ul"},"The IP addresses defined in the environment layout (see above) for the Client and Server systems must be correct."),(0,o.kt)("li",{parentName:"ul"},"The name of the Client and Server instances defined in the environment layout must match the agent/client IDs supplied on the command line (e.g. --agentId)\nor must match the name of the system as defined by the operating system itself.")),(0,o.kt)("p",{parentName:"li"},"Additional information on components that exist within the 'Dependencies' section of the profile can be found in the following locations:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://microsoft.github.io/VirtualClient/docs/category/dependencies/"},"Installing Dependencies")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Profile Runtimes"),(0,o.kt)("br",{parentName:"p"}),"\n","See the 'Metadata' section of the profile for estimated runtimes. These timings represent the length of time required to run a single round of profile\nactions. These timings can be used to determine minimum required runtimes for the Virtual Client in order to get results. These are often estimates based on the\nnumber of system cores. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Usage Examples"),(0,o.kt)("br",{parentName:"p"}),"\n","The following section provides a few basic examples of how to use the workload profile. Additional usage examples can be found in the\n'Usage Scenarios/Examples' link at the top."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# When running on a single system (environment layout not required)\n./VirtualClient --profile=PERF-SQL-POSTGRESQL.json --system=Demo --timeout=250 --packageStore="{BlobConnectionString|SAS Uri}"\n\n# When running in a client/server environment\n./VirtualClient --profile=PERF-SQL-POSTGRESQL.json --system=Demo --timeout=1440 --clientId=Client01 --layoutPath="/any/path/to/layout.json" --packageStore="{BlobConnectionString|SAS Uri}"\n./VirtualClient --profile=PERF-SQL-POSTGRESQL.json --system=Demo --timeout=1440 --clientId=Server01 --layoutPath="/any/path/to/layout.json" --packageStore="{BlobConnectionString|SAS Uri}"\n')))))}m.isMDXComponent=!0}}]);