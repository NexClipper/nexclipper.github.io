(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{104:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return l})),t.d(a,"toc",(function(){return c})),t.d(a,"default",(function(){return p}));var n=t(3),r=t(8),o=(t(0),t(225)),i={id:"logging",title:"Logging",hide_title:!0,description:null,keywords:["logging","loki","k8s","kubernetes","fluentbit"]},l={unversionedId:"logging",id:"logging",isDocsHomePage:!1,title:"Logging",description:"Logging with NexClipper",source:"@site/docs/logging.md",slug:"/logging",permalink:"/docs/logging",editUrl:"https://github.com/NexClipper/docs/edit/master/docs/logging.md",version:"current",sidebar:"someSidebar",previous:{title:"Global View",permalink:"/docs/globalview"},next:{title:"Clean up",permalink:"/docs/clean"}},c=[{value:"Logging with NexClipper",id:"logging-with-nexclipper",children:[{value:"Loki on Grafana Dashboard",id:"loki-on-grafana-dashboard",children:[]},{value:"LogQL",id:"logql",children:[]},{value:"Log Stream Selector",id:"log-stream-selector",children:[]},{value:"Filter Expression",id:"filter-expression",children:[]}]}],s={toc:c};function p(e){var a=e.components,i=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},s,i,{components:a,mdxType:"MDXLayout"}),Object(o.a)("h2",{id:"logging-with-nexclipper"},"Logging with NexClipper"),Object(o.a)("h3",{id:"loki-on-grafana-dashboard"},"Loki on Grafana Dashboard"),Object(o.a)("p",null,"Connect to NexClipper Console and go to 'Management'."),Object(o.a)("p",null,"Click Grafana on Stacks and select the service type you want to expose. If you are on the same network or Local, select NodePort. Or if you need an external environment, select LoadBalancer."),Object(o.a)("div",{className:"admonition admonition-info alert alert--info"},Object(o.a)("div",{parentName:"div",className:"admonition-heading"},Object(o.a)("h5",{parentName:"div"},Object(o.a)("span",{parentName:"h5",className:"admonition-icon"},Object(o.a)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.a)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.a)("div",{parentName:"div",className:"admonition-content"},Object(o.a)("p",{parentName:"div"},"LoadBalancer feature is only available for cloud providers or environments in which support external load balancers.",Object(o.a)("br",{parentName:"p"}),"\n",Object(o.a)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/access-application-cluster/create-external-load-balancer/"},"Kubernetes Load Balancer")))),Object(o.a)("p",null,Object(o.a)("img",{alt:"grafana_expose",src:t(341).default})),Object(o.a)("p",null,"By default, ID and password is set as ",Object(o.a)("inlineCode",{parentName:"p"},"admin"),":",Object(o.a)("inlineCode",{parentName:"p"},"admin")," if there is no password input during initial setup."),Object(o.a)("p",null,"After signing in Grafana, select ",Object(o.a)("inlineCode",{parentName:"p"},"Explorer")," tab of Left Menu or connect to ",Object(o.a)("inlineCode",{parentName:"p"},"http://<grafana-endpoint>:<port>/explorer")," to view the following page:"),Object(o.a)("p",null,Object(o.a)("img",{alt:"grafana_explorer",src:t(342).default})),Object(o.a)("h3",{id:"logql"},"LogQL"),Object(o.a)("p",null,"LogQL is a Log Query Language and has a separate query scheme.",Object(o.a)("br",{parentName:"p"}),"\n","By default, you can filter logs as you make 'grep' command in Linux."),Object(o.a)("p",null,"LogQL consists of Log Stream Selector and Filter Expression."),Object(o.a)("h3",{id:"log-stream-selector"},"Log Stream Selector"),Object(o.a)("p",null,"Log Stream Selector selects the log stream that should be included in the query as shown below. It consists of one or more key-values, such as the following query expression."),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-json"},'{container="kube-apiserver"}\n')),Object(o.a)("p",null,"You can set key and value query expression yourself as above or select menu 'Log Labels' > 'container' > 'kube-apiserver'."),Object(o.a)("p",null,"A operator is also available for labels. It's same as the Prometheus label query method."),Object(o.a)("blockquote",null,Object(o.a)("p",{parentName:"blockquote"},Object(o.a)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/querying/basics/#instant-vector-selectors"},"https://prometheus.io/docs/prometheus/latest/querying/basics/#instant-vector-selectors"))),Object(o.a)("p",null,"The following queries can also be queried:"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("p",{parentName:"li"},"When querying logs that except 'kube-apiserver'"),Object(o.a)("pre",{parentName:"li"},Object(o.a)("code",{parentName:"pre",className:"language-json"},'{container!="kube-apiserver"}\n'))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("p",{parentName:"li"},"When querying logs that include 'kube'"),Object(o.a)("pre",{parentName:"li"},Object(o.a)("code",{parentName:"pre",className:"language-json"},'{container=~"kube.*"}\n'))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("p",{parentName:"li"},"When querying logs that do not include 'kube'"),Object(o.a)("pre",{parentName:"li"},Object(o.a)("code",{parentName:"pre",className:"language-json"},'{container!~"kube.*"}\n')))),Object(o.a)("h3",{id:"filter-expression"},"Filter Expression"),Object(o.a)("p",null,"After querying log stream selector, the result of logs can be filtered with a search expression. The search expression can be just text or regex:"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("p",{parentName:"li"},"Container 'kube-apiserver' shows results that contain 'error' but not 'timeout'."),Object(o.a)("pre",{parentName:"li"},Object(o.a)("code",{parentName:"pre",className:"language-json"},'{container="kube-apiserver"} |= "error" != "timeout"\n'))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("p",{parentName:"li"},"To determine the rate of a log at 1-minute intervals:"),Object(o.a)("pre",{parentName:"li"},Object(o.a)("code",{parentName:"pre",className:"language-json"},'rate({container="kube-apiserver"}[1m] |= "error" != "timeout")\n'))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("p",{parentName:"li"},"To identify logs starting with 'kube' at 1-minute intervals, group them with 'container' and show the top 10 in order.")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("pre",{parentName:"li"},Object(o.a)("code",{parentName:"pre",className:"language-json"},'topk(10,sum(rate({container=~"kube.*"}[1m] |= "error" != "timeout")) by (container))\n')))),Object(o.a)("p",null,"This was a simple example of setting up and working with Loki and Grafana. If you want to learn more, head over to the ",Object(o.a)("a",{parentName:"p",href:"https://grafana.com/docs/loki/latest/"},"Loki documentation"),"."))}p.isMDXComponent=!0},225:function(e,a,t){"use strict";t.d(a,"a",(function(){return g}));var n=t(0),r=t.n(n);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var a=r.a.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},b=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(t),g=n,m=b["".concat(i,".").concat(g)]||b[g]||u[g]||o;return t?r.a.createElement(m,l(l({ref:a},s),{},{components:t})):r.a.createElement(m,l({ref:a},s))}));function g(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=b;var l={};for(var c in a)hasOwnProperty.call(a,c)&&(l[c]=a[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},341:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/nc-grafana-expose-a834bbffc29ea3ca21065a3eac25bc7f.png"},342:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/nc-grafana-explorer-44ed5c87fad27d9a2701f86a8e806a89.png"}}]);