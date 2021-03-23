(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{186:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(3),i=a(7),r=(a(0),a(219)),o={title:"Values of NexClipper (Eng)",author:"Jinwoong Kim",author_title:"NexClipper",author_url:"https://github.com/ddiiwoong",author_image_url:"https://avatars1.githubusercontent.com/u/37430952?v=4",description:"NexClipper's Service Identity and Value to Delivery",tags:["Observability","NexClipper","Value"]},l={permalink:"/blog/2021/03/22/values-of-nexcilpper-eng",editUrl:"https://github.com/NexClipper/docs/edit/master/blog/blog/2021-03-22-values-of-nexcilpper-eng.md",source:"@site/blog/2021-03-22-values-of-nexcilpper-eng.md",description:"NexClipper's Service Identity and Value to Delivery",date:"2021-03-22T00:00:00.000Z",tags:[{label:"Observability",permalink:"/blog/tags/observability"},{label:"NexClipper",permalink:"/blog/tags/nex-clipper"},{label:"Value",permalink:"/blog/tags/value"}],title:"Values of NexClipper (Eng)",readingTime:5.195,truncated:!0,nextItem:{title:"NexClipper\uc758 \uac00\uce58",permalink:"/blog/2021/03/22/values-of-nexcilpper"}},s=[{value:"What is Observability?",id:"what-is-observability",children:[]},{value:"Cloud Native Observabilty and Limitation",id:"cloud-native-observabilty-and-limitation",children:[]},{value:"Mission of NexClipper",id:"mission-of-nexclipper",children:[{value:"We want to solve the problems.",id:"we-want-to-solve-the-problems",children:[]},{value:"Managed Observability Platform At Anywhere.",id:"managed-observability-platform-at-anywhere",children:[]}]},{value:"Value of Nexclipper",id:"value-of-nexclipper",children:[{value:"Make Observability Simple &amp; Easy",id:"make-observability-simple--easy",children:[]},{value:"Managed Prometheus (Eliminates Cloud Vendor Lock-in Problems)",id:"managed-prometheus-eliminates-cloud-vendor-lock-in-problems",children:[]},{value:"Cost effective (Reduce human efforts and learning curve)",id:"cost-effective-reduce-human-efforts-and-learning-curve",children:[]},{value:"Observe all of your data in single endpoint. (Global-View)",id:"observe-all-of-your-data-in-single-endpoint-global-view",children:[]}]},{value:"Components of NexClipper",id:"components-of-nexclipper",children:[]},{value:"Conclusion",id:"conclusion",children:[]},{value:"Introduction of NexClipper",id:"introduction-of-nexclipper",children:[]}],c={toc:s};function u(e){var t=e.components,o=Object(i.a)(e,["components"]);return Object(r.a)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(r.a)("p",null,"I had joined the NexClipper development team in April last year and have been developing NexClipper service since September. I'd like to talk about NexClipper, which is currently in progress to release version 0.5.  "),Object(r.a)("h2",{id:"what-is-observability"},"What is Observability?"),Object(r.a)("p",null,'The term "Observability" comes from a control theory study first introduced in 1960 in the paper "On the General Theory of Control Systems" written by Rudolf E. K\xe1lm\xe1n. Generally, observability refers to measuring whether the internal state of the system can be inferred from external signals and characteristics. To make it a little easier, it\'s a state where we can monitor the output of the system to make sure that the system we run operates reliably and to determine when it went wrong or why it went wrong when the problem occurred. When you apply it to IT, it means that you record and observe all the logs, events, and metrics that your cloud infrastructure and applications generate. '),Object(r.a)("h2",{id:"cloud-native-observabilty-and-limitation"},"Cloud Native Observabilty and Limitation"),Object(r.a)("p",null,"Business in a cloud-native environment is built as a quick prototype with no delay in decision-making as new capabilities are added, and delivered to users through a variety of monitoring and metering capabilities. A/B testing, etc. will give you a very quick assessment of whether it is better or worse than the previous function. If the new version has better performance, you should keep the new deployment version intact, and if it gets worse, you should either remove the feature or restore it in a short time."),Object(r.a)("p",null,"The move to a Kubernetes based cloud native application is evolving around a number of managed Kubernetes solutions, but needs to be ready for operations. Whether a commercial monitoring solution exists or not, the adoption of Prometheus open-source is essential for operations, but requires separate experts for deployment and operation (global views, authentication, long-term data storage, multi-tenancy, and so on) that are not supported in open source."),Object(r.a)("h2",{id:"mission-of-nexclipper"},"Mission of NexClipper"),Object(r.a)("h3",{id:"we-want-to-solve-the-problems"},"We want to solve the problems."),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"Deploying and operating an open-source stack requires a lot of space and effort.",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"Prometheus, PromQL, Grafana dashboard, Configuration, Alert-Rule, etc."))),Object(r.a)("li",{parentName:"ul"},"Long-term archiving of metric data is not easy.",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"By default, if each 3 Byte metric are stored 100,000 per second, you'll use about 500GB of storage every 30 days. Long-term archiving is not easy when operating Prometheus in the form of a local instance or a general pdd, and the more monitored you have, the more data you store."))),Object(r.a)("li",{parentName:"ul"},"Data source duplication may occur.",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"Prometheus is difficult to manage in terms of data sources when it is installed and operated in multiple clusters, and when you configure dashboards such as Grafana, it is difficult to distinguish between multiple clusters for the same metric. This makes it difficult to consolidate and view data when Prometheus is installed for each cluster."))),Object(r.a)("li",{parentName:"ul"},"Complex configurations for scaling and high availability."),Object(r.a)("li",{parentName:"ul"},"There are some shortcomings in terms of group management and user authentication management (security)."),Object(r.a)("li",{parentName:"ul"},"Prometheus cannot collect raw logs and events."),Object(r.a)("li",{parentName:"ul"},"Application-based request tracing is not supported itself."),Object(r.a)("li",{parentName:"ul"},"Anomaly Detection requires a separate data analysis capability.")),Object(r.a)("h3",{id:"managed-observability-platform-at-anywhere"},"Managed Observability Platform At Anywhere."),Object(r.a)("p",null,"Ensuring observability in any environment is a top priority, and making it easy to set up and use the Observability platform in your own cloud environment is a fundamental goal of NexClipper."),Object(r.a)("p",null,Object(r.a)("img",{alt:"nexclipper",src:a(268).default})),Object(r.a)("h2",{id:"value-of-nexclipper"},"Value of Nexclipper"),Object(r.a)("h3",{id:"make-observability-simple--easy"},"Make Observability Simple & Easy"),Object(r.a)("p",null,"NexClipper makes it easy and simple to deploy a complex and difficult Observability open-source stack within your private cluster. In the Kubernetes open-source ecosystem, all open sources requiring records, including logs and events, including Prometheus, the most widely used metric-based monitoring solution in the environment, are easy to provision and operate with expert-like experience.  "),Object(r.a)("h3",{id:"managed-prometheus-eliminates-cloud-vendor-lock-in-problems"},"Managed Prometheus (Eliminates Cloud Vendor Lock-in Problems)"),Object(r.a)("p",null,"Nexclipper are available on an open-source basis, making them highly scalable, and allowing users to eliminate the limitation of vendor lock-in. Support most existing public cloud environments, including AWS, based on the removal of dependencies. Not only is it Self-build Kubernetes, but it also supports managed Kubernetes from a variety of CSPs."),Object(r.a)("h3",{id:"cost-effective-reduce-human-efforts-and-learning-curve"},"Cost effective (Reduce human efforts and learning curve)"),Object(r.a)("p",null,"NexClipper automates repetitive tasks to avoid human error and reduces costs through reduced running curves. You can work with UI-based dashboards with everything you need, including repetitive dashboard configurations, AlertRule, and Managed Service Discovery settings, and use test features to reduce human error during the operation."),Object(r.a)("h3",{id:"observe-all-of-your-data-in-single-endpoint-global-view"},"Observe all of your data in single endpoint. (Global-View)"),Object(r.a)("p",null,"Manage on a per-cluster basis and store in a Global-View cluster at the same time, enabling data management for analysis. You can also monitor your existing deployed monitoring systems. If the individual cluster monitoring stack itself is in a failure situation, it can be monitored safely even if the notification is not delivered."),Object(r.a)("h2",{id:"components-of-nexclipper"},"Components of NexClipper"),Object(r.a)("p",null,"NexClipper is developing on the following open-source base to add new convenience features while maintaining existing open-source solutions while leveraging the cloud native-based observability ecosystem, including Prometheus. Please refer to the homepage for detailed functions and descriptions."),Object(r.a)("h4",{id:"nexclipper"},Object(r.a)("a",{parentName:"h4",href:"https://github.com/NexClipper/nexclipper"},"NexClipper")),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"Metrics Pipeline for interoperability and Enterprise Prometheus")),Object(r.a)("h4",{id:"exporterhub"},Object(r.a)("a",{parentName:"h4",href:"https://github.com/NexClipper/exporterhub.io"},"ExporterHub")),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"A Curated List of Prometheus Exporters for the Best practice")),Object(r.a)("h4",{id:"webstork"},Object(r.a)("a",{parentName:"h4",href:"https://github.com/NexClipper/webstork"},"Webstork")),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"Web tunnel for Cloud-native application remote monitoring")),Object(r.a)("h4",{id:"klevr"},Object(r.a)("a",{parentName:"h4",href:"https://github.com/klevry/klevr"},"Klevr")),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"Hyper-connected Cloud-native delivery solution for SaaS")),Object(r.a)("h4",{id:"provbe"},Object(r.a)("a",{parentName:"h4",href:"https://github.com/nexclipper/provbee"},"ProvBe")),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"Provisioning All the platforms for Cloud-native")),Object(r.a)("h4",{id:"metricark"},Object(r.a)("a",{parentName:"h4",href:"https://github.com/nexclipper/metricark"},"MetricArk")),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"Prometheus based status(State/Event/Metric) Composite API")),Object(r.a)("h2",{id:"conclusion"},"Conclusion"),Object(r.a)("p",null,'NexClipper is "Managed Prometheus service for enterprise customers" that composed of open-sources and cloud native solution. NexClipper enables easy deployment of the Observability stack, including Prometheus that supports the many capabilities needed in enterprise environments. In the next posting, we will describe the features and benefits of NexClipper.'),Object(r.a)("h2",{id:"introduction-of-nexclipper"},"Introduction of NexClipper"),Object(r.a)("p",null,"Nexcloud is a container-based cloud technology company. For full-scale global business, we are currently establishing a U.S. corporation, and we are bringing in competent people. For more information on the Job Description, please see the link below."),Object(r.a)("h4",{id:"were-hiring"},Object(r.a)("a",{parentName:"h4",href:"https://www.notion.so/nexclipper/We-re-Hiring-c356a7b503d5403289bc3cf8ac20c6ea"},"We're Hiring")),Object(r.a)("p",null,"Please give us various feedback on all of our technologies and products, including blog contents, and if you have any questions or need any technical meetings, please contact us at ",Object(r.a)("a",{parentName:"p",href:"mailto:support@nexclipper.io"},"support@nexclipper.io")," and we will reply to you as soon as soon as possible."))}u.isMDXComponent=!0},219:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),b=n,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||r;return a?i.a.createElement(m,l(l({ref:t},c),{},{components:a})):i.a.createElement(m,l({ref:t},c))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},268:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/nexclipper_intro-cca57563564f4fa0a150c05a2a62d79f.png"}}]);