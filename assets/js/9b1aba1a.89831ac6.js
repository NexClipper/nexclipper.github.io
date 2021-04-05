(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(8),a=(n(0),n(224)),i={title:"Concerns with Running Containers",author:"NexClipper",author_title:"NexClipper",author_url:"https://github.com/NexClipper",author_image_url:"https://avatars2.githubusercontent.com/u/39365220?v=4",tags:["NexClipper","Containers Monitoring","Prometheus"]},c={permalink:"/blog/2019/02/22/concerns-with-running-containers",editUrl:"https://github.com/NexClipper/docs/edit/master/blog/blog/2019-02-22-concerns-with-running-containers.md",source:"@site/blog/2019-02-22-concerns-with-running-containers.md",description:"What are the concerns in using containers and how NexClipper deals with them.",date:"2019-02-22T00:00:00.000Z",formattedDate:"February 22, 2019",tags:[{label:"NexClipper",permalink:"/blog/tags/nex-clipper"},{label:"Containers Monitoring",permalink:"/blog/tags/containers-monitoring"},{label:"Prometheus",permalink:"/blog/tags/prometheus"}],title:"Concerns with Running Containers",readingTime:1.15,truncated:!0,prevItem:{title:"The Positive Impacts on Open Source in the Enterprise",permalink:"/blog/2019/03/20/the-positive-impacts-on-open-source-in-the-enterprise"},nextItem:{title:"How Useful is AIOps?",permalink:"/blog/2018/10/15/how-useful-is-aiops"}},l=[],s={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.a)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.a)("p",null,Object(a.a)("strong",{parentName:"p"},"What are the concerns in using containers and how NexClipper deals with them.")),Object(a.a)("p",null,"According to recent survey by CNCF (Cloud Native Computing Foundation), 58% of respondents are using Kubernetes in production for container management tools, while 42% are considering it for future use. Also, concerns they have when it comes to using containers are as followings:"),Object(a.a)("p",null,"In order for organizations to effectively run containers on Kubernetes, monitoring is required to see if container is healthy. It will help you understand insights regarding containers."),Object(a.a)("ol",null,Object(a.a)("li",{parentName:"ol"},"Complexity: 40% up from 35%"),Object(a.a)("li",{parentName:"ol"},"Lack of training: 40%"),Object(a.a)("li",{parentName:"ol"},"Monitoring: 34%"),Object(a.a)("li",{parentName:"ol"},"Storage: 30%")),Object(a.a)("p",null,Object(a.a)("a",{parentName:"p",href:"https://www.cncf.io/blog/2018/08/29/cncf-survey-use-of-cloud-native-technologies-in-production-has-grown-over-200-percent/"},"Source: https://www.cncf.io/")),Object(a.a)("p",null,Object(a.a)("strong",{parentName:"p"},"How these concerns could be relieved with NexClipper")),Object(a.a)("ul",null,Object(a.a)("li",{parentName:"ul"},Object(a.a)("strong",{parentName:"li"},"Complexity"),": NexClipper provides you with a more simplified setup process than ever before; NexClipper uses NexAgent, an agent that replaces node exporter, Kube-state-metrics, cAdvisor."),Object(a.a)("li",{parentName:"ul"},Object(a.a)("strong",{parentName:"li"},"Lack of training"),": Full stack monitoring allows you to easily understand container status even for non-skilled employees and even reduce learning curves."),Object(a.a)("li",{parentName:"ul"},Object(a.a)("strong",{parentName:"li"},"Monitoring"),": With NexClipper, you can monitor each layer that should be monitored. To be specific, you are able to monitor containers, agents, and hosts which allows you to get full-stack insights."),Object(a.a)("li",{parentName:"ul"},Object(a.a)("strong",{parentName:"li"},"Storage"),": In terms of storage, Prometheus is commonly used to monitor Kubernetes. \xa0NexClipper uses InfluxDB as default for long-term storage and gives you an option to integrate Prometheus depending on your preference.")),Object(a.a)("p",null,Object(a.a)("strong",{parentName:"p"},"more information about NexClipper is")," ",Object(a.a)("a",{parentName:"p",href:"https://github.com/NexClipper/NexClipper"},Object(a.a)("strong",{parentName:"a"},"here"))))}p.isMDXComponent=!0},224:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),g=r,b=m["".concat(i,".").concat(g)]||m[g]||u[g]||a;return n?o.a.createElement(b,c(c({ref:t},s),{},{components:n})):o.a.createElement(b,c({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);