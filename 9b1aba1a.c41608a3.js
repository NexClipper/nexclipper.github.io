(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),i=(n(0),n(177)),a={title:"Concerns with Running Containers",author:"NexClipper",author_title:"NexClipper",author_url:"https://github.com/NexClipper",author_image_url:"https://avatars2.githubusercontent.com/u/39365220?v=4",tags:["NexClipper","Containers Monitoring","Prometheus"]},c={permalink:"/blog/2019/02/22/concerns-with-running-containers",editUrl:"https://github.com/NexClipper/docs/edit/master/website/blog/blog/2019-02-22-concerns-with-running-containers.md",source:"@site/blog/2019-02-22-concerns-with-running-containers.md",description:"What are the concerns in using containers and how NexClipper deals with them.",date:"2019-02-22T00:00:00.000Z",tags:[{label:"NexClipper",permalink:"/blog/tags/nex-clipper"},{label:"Containers Monitoring",permalink:"/blog/tags/containers-monitoring"},{label:"Prometheus",permalink:"/blog/tags/prometheus"}],title:"Concerns with Running Containers",readingTime:1.15,truncated:!0,prevItem:{title:"The Positive Impacts on Open Source in the Enterprise",permalink:"/blog/2019/03/20/the-positive-impacts-on-open-source-in-the-enterprise"},nextItem:{title:"How Useful is AIOps?",permalink:"/blog/2018/10/15/how-useful-is-aiops"}},l=[],s={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"What are the concerns in using containers and how NexClipper deals with them.")),Object(i.b)("p",null,"According to recent survey by CNCF (Cloud Native Computing Foundation), 58% of respondents are using Kubernetes in production for container management tools, while 42% are considering it for future use. Also, concerns they have when it comes to using containers are as followings:"),Object(i.b)("p",null,"In order for organizations to effectively run containers on Kubernetes, monitoring is required to see if container is healthy. It will help you understand insights regarding containers."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Complexity: 40% up from 35%"),Object(i.b)("li",{parentName:"ol"},"Lack of training: 40%"),Object(i.b)("li",{parentName:"ol"},"Monitoring: 34%"),Object(i.b)("li",{parentName:"ol"},"Storage: 30%")),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.cncf.io/blog/2018/08/29/cncf-survey-use-of-cloud-native-technologies-in-production-has-grown-over-200-percent/"}),"Source: https://www.cncf.io/")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"How these concerns could be relieved with NexClipper")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Complexity"),": NexClipper provides you with a more simplified setup process than ever before; NexClipper uses NexAgent, an agent that replaces node exporter, Kube-state-metrics, cAdvisor."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Lack of training"),": Full stack monitoring allows you to easily understand container status even for non-skilled employees and even reduce learning curves."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Monitoring"),": With NexClipper, you can monitor each layer that should be monitored. To be specific, you are able to monitor containers, agents, and hosts which allows you to get full-stack insights."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Storage"),": In terms of storage, Prometheus is commonly used to monitor Kubernetes. \xa0NexClipper uses InfluxDB as default for long-term storage and gives you an option to integrate Prometheus depending on your preference.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"more information about NexClipper is")," ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/NexClipper/NexClipper"}),Object(i.b)("strong",{parentName:"a"},"here"))))}p.isMDXComponent=!0},177:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(a,".").concat(m)]||u[m]||b[m]||i;return n?o.a.createElement(g,c(c({ref:t},s),{},{components:n})):o.a.createElement(g,c({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);