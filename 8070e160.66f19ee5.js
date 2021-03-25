(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{133:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),i=(a(0),a(219)),o={id:"quickstart",title:"NexClipper Quick Start",hide_title:!0,description:"Automated Enterprise Prometheus eco-system in your own cluster.",keywords:["guide","installation","setup","quickstart","nexclipper"]},l={unversionedId:"quickstart",id:"quickstart",isDocsHomePage:!1,title:"NexClipper Quick Start",description:"Automated Enterprise Prometheus eco-system in your own cluster.",source:"@site/docs/quickstart.md",slug:"/quickstart",permalink:"/docs/quickstart",editUrl:"https://github.com/NexClipper/docs/edit/master/docs/quickstart.md",version:"current",sidebar:"someSidebar",previous:{title:"Introduction to NexClipper",permalink:"/docs/"},next:{title:"Components",permalink:"/docs/components"}},c=[{value:"Check Environment",id:"check-environment",children:[]},{value:"Install NexClipper",id:"install-nexclipper",children:[]},{value:"Simple Health Dashboard",id:"simple-health-dashboard",children:[]},{value:"Getting Started",id:"getting-started",children:[]}],s={toc:c};function u(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h1",{id:"nexclipper-quick-start"},"NexClipper Quick Start"),Object(i.a)("p",null,"NexClipper runs in the type of DaemonSet, StatefulSet, and Deployment within your own Kubernetes cluster.",Object(i.a)("br",{parentName:"p"}),"\n","All resources run in the nex-system, nexclipper Namespace by default, and contain ecosystem related to Prometheus."),Object(i.a)("p",null,"If you want to see the quick start run through video, check out below link:"),Object(i.a)("p",null,Object(i.a)("a",{parentName:"p",href:"https://youtu.be/oywX6d3a5JM"},Object(i.a)("img",{parentName:"a",src:"http://img.youtube.com/vi/oywX6d3a5JM/0.jpg",alt:"quick"}))," "),Object(i.a)("hr",null),Object(i.a)("h2",{id:"check-environment"},"Check Environment"),Object(i.a)("p",null,"NexClipper runs in a Linux environment."),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Operating Systems : Linux(WSL included), MacOS 10.14+"),Object(i.a)("li",{parentName:"ul"},"Software",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},"bash or zsh"),Object(i.a)("li",{parentName:"ul"},"curl"),Object(i.a)("li",{parentName:"ul"},"ssh-keygen"))),Object(i.a)("li",{parentName:"ul"},"Target Kubernetes Cluster : 1.15.12 or higher"),Object(i.a)("li",{parentName:"ul"},"Firewall",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},"Client(WebService) -> Outbound (Destination : console.nexclipper.io, Port: 80,443,8080)"),Object(i.a)("li",{parentName:"ul"},"NexClipper Agent(DaemonSet) -> Outbount (Destination : console.nexclipper.io, Port: 8090)")))),Object(i.a)("div",{className:"admonition admonition-info alert alert--info"},Object(i.a)("div",{parentName:"div",className:"admonition-heading"},Object(i.a)("h5",{parentName:"div"},Object(i.a)("span",{parentName:"h5",className:"admonition-icon"},Object(i.a)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.a)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.a)("div",{parentName:"div",className:"admonition-content"},Object(i.a)("p",{parentName:"div"},"NexClipper Agent has been tested for Kubernetes version 1.15.12 or higher. Problems may occur in lower versions."))),Object(i.a)("p",null,"Run the following command to check the currently connected cluster in an environment that can run bash or zsh. If you have configured your Kubernetes environment with docker-desktop, you are expected to get results similar to the following:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-bash"},"$ kubectl cluster-info\nKubernetes master is running at https://kubernetes.docker.internal:6443\nKubeDNS is running at https://kubernetes.docker.internal:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy\n")),Object(i.a)("hr",null),Object(i.a)("h2",{id:"install-nexclipper"},"Install NexClipper"),Object(i.a)("p",null,"There are two options for installation.  "),Object(i.a)("ol",null,Object(i.a)("li",{parentName:"ol"},"Remote Kubernetes",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},"An environment that can communicate remotely to kube-apiserve (kubeconfig environment)"))),Object(i.a)("li",{parentName:"ol"},"Local Kubernetes",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},"When running locally, such as Docker Desktop, Minikube, K3s, MicroK8s, etc.")))),Object(i.a)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.a)("div",{parentName:"div",className:"admonition-heading"},Object(i.a)("h5",{parentName:"div"},Object(i.a)("span",{parentName:"h5",className:"admonition-icon"},Object(i.a)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.a)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.a)("div",{parentName:"div",className:"admonition-content"},Object(i.a)("p",{parentName:"div"},"You might encounter problems if you install duplicates with an existing operating Prometheus Operator. NexClipper distributes and manages Prometheus-related ecosystem based on Helm."))),Object(i.a)("p",null,"Go to ",Object(i.a)("a",{parentName:"p",href:"https://console.nexclipper.io/login"},"https://console.nexclipper.io/login")," Page. And login with your Account."),Object(i.a)("p",null,Object(i.a)("img",{alt:"img",src:a(237).default})),Object(i.a)("div",{className:"admonition admonition-info alert alert--info"},Object(i.a)("div",{parentName:"div",className:"admonition-heading"},Object(i.a)("h5",{parentName:"div"},Object(i.a)("span",{parentName:"h5",className:"admonition-icon"},Object(i.a)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.a)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.a)("div",{parentName:"div",className:"admonition-content"},Object(i.a)("p",{parentName:"div"},"Currently, we only support e-mail and Google Authentication (including GSuite). If you need to use NexClipper, please contact ",Object(i.a)("a",{parentName:"p",href:"mailto:support@nexclipper.io"},"support@nexclipper.io"),"."))),Object(i.a)("p",null,"Now, Create Cluster and select Kubernetes platform to provision. At QuickStart, you should enter Cluster Name you want. If you want to customize the cluster settings, turn on Advanced Mode toggle to set the details.  "),Object(i.a)("p",null,"And bootstrap script will be created to install on the selected platform."),Object(i.a)("p",null,Object(i.a)("img",{alt:"img",src:a(238).default})),Object(i.a)("p",null,"Run the generated script from zsh, bash-enabled Bastion, or Local. And you are expected to get results similar to the following.  "),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-sh"},"$ curl -sL gg.gg/provbee | K3S_SET=N K_API_KEY=\"<API_KEY_GENERATED>\" K_PLATFORM=\"kubernetes\" K_MANAGER_URL=\"https://console.nexclipper.io:8090\" K_ZONE_ID=\"415\" K_CLUSTER_NAME=\"nexclipper_demo\" bash\nNexClipper serivce first checking\n[INFO]   Welcome to NexClipper!\nnamespace/nex-system created\nserviceaccount/nexc created\nsecret/nexc-ssh-key created\nsecret/nex-secrets created\nconfigmap/nex-system-agent-config created\nrole.rbac.authorization.k8s.io/nexclipper-role created\nclusterrolebinding.rbac.authorization.k8s.io/nexc-rbac created\nrolebinding.rbac.authorization.k8s.io/nexclipper-rb created\nCluster \"nexclipper.ap-northeast-2.eksctl.io\" set.\nUser \"nexc-nex-system-nexclipper.ap-northeast-2.eksctl.io\" set.\nContext \"nexc-nex-system-nexclipper.ap-northeast-2.eksctl.io\" modified.\nSwitched to context \"nexc-nex-system-nexclipper.ap-northeast-2.eksctl.io\".\nsecret/nexc-kubeconfig created\nservice/provbee-service created\ndeployment.apps/provbee created\ndaemonset.apps/klevr-agent created\n:+:+:+:+:+:+:+:+:+:+:+:+:+:+:+:+:+:+:+:+:+:\n## Namespace \"nex-system\" check   OK.\n## NexClipper system check    OK. \ud83c\udf6f\u2764\ufe0f\ud83d\udc1d\n \u26f5 Enjoy NexClipper! :)\n:+:+:+:+:+:+:+:+:+:+:+:+:+:+:+:+:+:+:+:+:+:\n88888888ba                                         88888888ba\n88      '8b                                        88      '8b\n88      ,8P                                        88      ,8P\n88aaaaaa8P'  \ud83d\udc1d,dPPYba,   ,adPPYba,   8b       d8  88aaaaaa8P'   ,adPPYba,   ,adPPYba,\n88'''''''    88P'   'Y8  a8'     '8a  '8b     d8'  88''''''8b,  a8P_____88  a8P_____88\n88           88          8b       d8   '8b   d8'   88      '8b  8PP'''''''  8PP'''''''\n88           88          '8a,   ,a8'    '8b,d8'    88      a8P  '8b,   ,aa  '8b,   ,aa\n88           88           ''YbbdP''       '8'      88888888P'    ''Ybbd8''   ''Ybbd8''\n")),Object(i.a)("hr",null),Object(i.a)("p",null,"After NexClipper components are installed, you will be able to communicate with NexClipper Manager server. As you can see it on the following page, you are expected to get results similar to the following.  "),Object(i.a)("p",null,Object(i.a)("img",{alt:"img",src:a(353).default})),Object(i.a)("p",null,"Now, you can return to the console to view the list of provisioned clusters."),Object(i.a)("p",null,Object(i.a)("img",{alt:"img",src:a(227).default})),Object(i.a)("h2",{id:"simple-health-dashboard"},"Simple Health Dashboard"),Object(i.a)("p",null,"Clicking the link or Health menu will take you to the Prometheus & Kubernetes Health dashboard."),Object(i.a)("p",null,Object(i.a)("img",{alt:"img",src:a(228).default})),Object(i.a)("p",null,"You can view the information in the cluster.  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Age(Cluster Age): Time elapsed since cluster creation"),Object(i.a)("li",{parentName:"ul"},"Cluster Status: Status of cluster nodes",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},"All nodes are healthy - All Ready"),Object(i.a)("li",{parentName:"ul"},"Some nodes are healthy - Partially Ready"),Object(i.a)("li",{parentName:"ul"},"All nodes unhealthy - Not Ready"))),Object(i.a)("li",{parentName:"ul"},"Nodes: Number of Nodes"),Object(i.a)("li",{parentName:"ul"},"Unavaliable Node: Unhealthy Node Count"),Object(i.a)("li",{parentName:"ul"},"Namespaces: Number of Namespaces"),Object(i.a)("li",{parentName:"ul"},"Cluster Pod Usage: Pod Utilization in Cluster"),Object(i.a)("li",{parentName:"ul"},"Cluster CPU Usage: CPU Utilization in Cluster"),Object(i.a)("li",{parentName:"ul"},"Cluster Memory Usage: Memory Utilization in Cluster"),Object(i.a)("li",{parentName:"ul"},"Cluster Disk Usage: Disk Utilization in Cluster"),Object(i.a)("li",{parentName:"ul"},"Pods: Number of active Pods"),Object(i.a)("li",{parentName:"ul"},"Restarted Pods(30m): Number of Pods restarted in 30 minutes"),Object(i.a)("li",{parentName:"ul"},"Failed Pods: Number of Pods in Failed state"),Object(i.a)("li",{parentName:"ul"},"Pending Pods: Number of Pods in the Pending state"),Object(i.a)("li",{parentName:"ul"},"PVCs: Number of PersistentVolumeClaims"),Object(i.a)("li",{parentName:"ul"},"Prometheus Status: Prometheus Instance Status"),Object(i.a)("li",{parentName:"ul"},"Alertmanager Status: Alertmanager Instance Status"),Object(i.a)("li",{parentName:"ul"},"API Server Status: Cluster API Server Status"),Object(i.a)("li",{parentName:"ul"},"API server total requests code: 5 minute average by Kubenetes API response code")),Object(i.a)("h2",{id:"getting-started"},"Getting Started"),Object(i.a)("p",null,"Get Started quickly and easily with NexClipper"),Object(i.a)("p",null,Object(i.a)("a",{parentName:"p",href:"https://console.nexclipper.io/join"},Object(i.a)("img",{alt:"freetrial &gt;&lt;",src:a(240).default}))))}u.isMDXComponent=!0},219:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(a),b=n,d=m["".concat(o,".").concat(b)]||m[b]||p[b]||i;return a?r.a.createElement(d,l(l({ref:t},s),{},{components:a})):r.a.createElement(d,l({ref:t},s))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},227:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/nc-cluster-dashboard-e5ba29e44d60dfc270dda8bb2629926d.png"},228:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/nc-prom-dashboard-e85c159e6a124e7bf8df551733e27afd.png"},237:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/nc-login-461593f6f79934c580d05fa15d0d9058.png"},238:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/nc-bootstrap-846615139462996e219b5377275f5b71.png"},240:function(e,t,a){"use strict";a.r(t),t.default="data:image/png;base64,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"},353:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/nc-completed-bootstrap-f569c4ca52dd0e44ea0c804595ad0af9.png"}}]);