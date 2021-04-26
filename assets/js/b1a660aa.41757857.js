(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(8),i=(n(0),n(225)),l={id:"globalview",title:"Global View",hide_title:!0,description:null},o={unversionedId:"globalview",id:"globalview",isDocsHomePage:!1,title:"Global View",description:"Global View",source:"@site/docs/globalview.md",slug:"/globalview",permalink:"/docs/globalview",editUrl:"https://github.com/NexClipper/docs/edit/master/docs/globalview.md",version:"current",sidebar:"someSidebar",previous:{title:"Alertmanager Configuration",permalink:"/docs/alert"},next:{title:"Clean up",permalink:"/docs/clean"}},c=[{value:"Global View",id:"global-view",children:[]},{value:"Minimum Requirements (Kubernetes)",id:"minimum-requirements-kubernetes",children:[]},{value:"Minimum Requirements (Instance)",id:"minimum-requirements-instance",children:[]},{value:"Installation",id:"installation",children:[]}],s={toc:c};function u(e){var t=e.components,l=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},s,l,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h2",{id:"global-view"},"Global View"),Object(i.a)("p",null,"Requires a new instance or preconfigured kubernetes cluster for installing dedicated long-term storage cluster with global-view. It has to be\ninstalled in the same network with the other clusters for monitoring."),Object(i.a)("h2",{id:"minimum-requirements-kubernetes"},"Minimum Requirements (Kubernetes)"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Target Kubernetes Cluster : 1.15.12 or higher"),Object(i.a)("li",{parentName:"ul"},"Cluster Hardware",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},"RAM: 4GB Minimum (Recommended 6GB)"),Object(i.a)("li",{parentName:"ul"},"CPU: 2Core Minimum"),Object(i.a)("li",{parentName:"ul"},"Volume: 40Gi"))),Object(i.a)("li",{parentName:"ul"},"Bastion Host : Linux(WSL included), MacOS 10.14+"),Object(i.a)("li",{parentName:"ul"},"Bastion Software",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},"bash or zsh"),Object(i.a)("li",{parentName:"ul"},"curl"),Object(i.a)("li",{parentName:"ul"},"ssh-keygen"))),Object(i.a)("li",{parentName:"ul"},"Firewall",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},"Client(WebService) -> Outbound (Destination : console.nexclipper.io, Port: 80,443,8080)"),Object(i.a)("li",{parentName:"ul"},"NexClipper Agent(DaemonSet) -> Outbount (Destination : console.nexclipper.io, Port: 8090)")))),Object(i.a)("h2",{id:"minimum-requirements-instance"},"Minimum Requirements (Instance)"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Operating Systems : Modern Linux systems(WSL, Alpine, Raspbian Buster included)"),Object(i.a)("li",{parentName:"ul"},"Software",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},"bash or zsh"),Object(i.a)("li",{parentName:"ul"},"curl"),Object(i.a)("li",{parentName:"ul"},"ssh-keygen"))),Object(i.a)("li",{parentName:"ul"},"Hardware",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},"RAM: 4GB Minimum (Recommended 6GB)"),Object(i.a)("li",{parentName:"ul"},"CPU: 2Core Minimum"),Object(i.a)("li",{parentName:"ul"},"Disk: 40Gi"))),Object(i.a)("li",{parentName:"ul"},"Firewall",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},"Client(WebService) -> Outbound (Destination : console.nexclipper.io, Port: 80,443,8080)"),Object(i.a)("li",{parentName:"ul"},"NexClipper Agent(DaemonSet) -> Outbount (Destination : console.nexclipper.io, Port: 8090)")))),Object(i.a)("hr",null),Object(i.a)("h2",{id:"installation"},"Installation"),Object(i.a)("p",null,"If you want to setup global-view cluster, toggle the button on Global view. It allows you to edit resources of global view cluster. And you can also customize volume size of global view cluster.  "),Object(i.a)("p",null,Object(i.a)("img",{alt:"globalview",src:n(398).default})),Object(i.a)("p",null,"Next, select a checkbox whether kubernetes environment or not. And click ",Object(i.a)("inlineCode",{parentName:"p"},"Continue")," button will be created bootstrap script to install global cluster."),Object(i.a)("p",null,Object(i.a)("img",{alt:"globalview-init",src:n(399).default})),Object(i.a)("p",null,"Run the generated script from zsh, bash-enabled Bastion, or Local. And you are expected to get results similar to the following."),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-sh"},'$ curl -sL gg.gg/provbee | K3S_SET=N K_API_KEY="<API_KEY_GENERATED>" K_PLATFORM="kubernetes" K_MANAGER_URL="https://console.nexclipper.io:8090" K_ZONE_ID="413" K_CLUSTER_NAME="GLOBAL_VIEW" bash\nNexClipper serivce first checking\n[INFO]   Welcome to NexClipper!\nnamespace/nex-system created\nserviceaccount/nexc created\nsecret/nexc-ssh-key created\nsecret/nex-secrets created\nconfigmap/nex-system-agent-config created\nrole.rbac.authorization.k8s.io/nexclipper-role created\nclusterrolebinding.rbac.authorization.k8s.io/nexc-rbac created\nrolebinding.rbac.authorization.k8s.io/nexclipper-rb created\nCluster "kind-kind" set.\nUser "nexc-nex-system-kind-kind" set.\nContext "nexc-nex-system-kind-kind" modified.\nSwitched to context "nexc-nex-system-kind-kind".\nsecret/nexc-kubeconfig created\nservice/provbee-service created\ndeployment.apps/provbee created\ndaemonset.apps/klevr-agent created\n:+:+:+:+:+:+:+:+:+:+:+:+:+:+:+:+:+:+:+:+:+:\n## Namespace "nex-system" check   OK.\n')),Object(i.a)("p",null,"After NexClipper components are installed, you will be able to communicate with NexClipper Manager server. As you can see it on the following page, you are expected to get results similar to the following."),Object(i.a)("p",null,Object(i.a)("img",{alt:"globalview-dashboard",src:n(400).default})))}u.isMDXComponent=!0},225:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(n),m=a,d=b["".concat(l,".").concat(m)]||b[m]||p[m]||i;return n?r.a.createElement(d,o(o({ref:t},s),{},{components:n})):r.a.createElement(d,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},398:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/nc-start-global-8f69c90799a842d95292801573c40b67.png"},399:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/nc-global-view-init-20113bf761293f301139779bca62fa83.png"},400:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/nc-global-view-dashboard-1fe11711b4b1c1a5862b352c7c0ad443.png"}}]);