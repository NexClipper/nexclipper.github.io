(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{186:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return p}));var i=a(3),n=a(7),r=(a(0),a(219)),o={title:"Simple way to manage your observability stack with NexClipper",author:"Jinwoong Kim",author_title:"NexClipper",author_url:"https://github.com/ddiiwoong",author_image_url:"https://raw.githubusercontent.com/NexClipper/nexclipper.github.io/master/blog/images/nexclipper_intro.png",description:"NexClipper's Service Identity and Value to Delivery",tags:["Observability","NexClipper","Value"]},l={permalink:"/blog/2021/03/22/values-of-nexcilpper-eng",editUrl:"https://github.com/NexClipper/docs/edit/master/blog/blog/2021-03-22-values-of-nexcilpper-eng.md",source:"@site/blog/2021-03-22-values-of-nexcilpper-eng.md",description:"NexClipper's Service Identity and Value to Delivery",date:"2021-03-22T00:00:00.000Z",tags:[{label:"Observability",permalink:"/blog/tags/observability"},{label:"NexClipper",permalink:"/blog/tags/nex-clipper"},{label:"Value",permalink:"/blog/tags/value"}],title:"Simple way to manage your observability stack with NexClipper",readingTime:5.275,truncated:!0,nextItem:{title:"NexClipper\uc758 \uac00\uce58",permalink:"/blog/2021/03/22/values-of-nexcilpper"}},s=[{value:"What is Observability?",id:"what-is-observability",children:[]},{value:"Cloud Native Observabilty and Limitation",id:"cloud-native-observabilty-and-limitation",children:[]},{value:"Mission of NexClipper",id:"mission-of-nexclipper",children:[{value:"We want to solve these problems.",id:"we-want-to-solve-these-problems",children:[]},{value:"Managed Observability Platform At Anywhere.",id:"managed-observability-platform-at-anywhere",children:[]}]},{value:"Value of Nexclipper",id:"value-of-nexclipper",children:[{value:"Make Observability Simple &amp; Easy",id:"make-observability-simple--easy",children:[]},{value:"Managed Prometheus",id:"managed-prometheus",children:[]},{value:"Cost effective",id:"cost-effective",children:[]},{value:"Observe all of your data in single endpoint",id:"observe-all-of-your-data-in-single-endpoint",children:[]}]},{value:"Components of NexClipper",id:"components-of-nexclipper",children:[]},{value:"Conclusion",id:"conclusion",children:[]},{value:"Getting Started",id:"getting-started",children:[]},{value:"Introduction of NexClipper",id:"introduction-of-nexclipper",children:[]}],c={toc:s};function p(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(r.a)("wrapper",Object(i.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(r.a)("p",null,"I had joined NexClipper development team in April last year and have been developing NexClipper service since September. I'd like to talk about NexClipper,which has been going through the 0.5 release version."),Object(r.a)("h2",{id:"what-is-observability"},"What is Observability?"),Object(r.a)("p",null,'The term "Observability" derives from a study of control theory, first introduced in 1960 in the paper "On the General Theory of Control Systems" written by Rudolf E. K\xe1lm\xe1n. Generally, observability refers to measuring whether the internal state of a system can be inferred from external signals and characteristics. To put it a little easier, it\'s a state where we can monitor the output of the system to make sure that the system we operate is learning stably and when a problem occurs, to determine when something went wrong or for what reason. When you apply it to IT, it means that you record and observe everything such as logs, events, and metrics generated by your cloud infrastructure and applications.'),Object(r.a)("h2",{id:"cloud-native-observabilty-and-limitation"},"Cloud Native Observabilty and Limitation"),Object(r.a)("p",null,"Business in a cloud-native environment is built as a quick prototype with no delay in decision-making when adding new features, and delivered to users through various monitoring and metering features. With A/B testing, you will get a very quick assessment of whether it is better or worse than the previous feature. If the new version is better, you should keep the new deployment version intact, and if it gets worse, you need to remove the feature or restore the original in a short time."),Object(r.a)("p",null,"It also requires a lot of managed Kubernetes solutions to move to a Kubernetes based cloud native application. It's evolving with the solutions, but still needs preparation for operations. Whether a commercial monitoring solution exists or not, the introduction of Prometheus open source is indispensable for Kubernetes-based operations. And you need an expert for deployment and operation (global views, authentication, long-term data storage, multi-tenancy, and so on) that are not supported in open source."),Object(r.a)("h2",{id:"mission-of-nexclipper"},"Mission of NexClipper"),Object(r.a)("h3",{id:"we-want-to-solve-these-problems"},"We want to solve these problems."),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"It takes a lot of time and effort to deploy and operate an open-source stack.",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"Prometheus, PromQL, Grafana dashboard, Configuration, Alert-Rule, etc."))),Object(r.a)("li",{parentName:"ul"},"Long-term archiving of metric data is not easy.",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"By default, if each 3 Byte metric are stored 100,000 per second, about 500 GB of storage will be used within 30 days. Long-term archiving is not easy when operating Prometheus in the form of a local instance or a general pod, and the more monitored you have, the more data you store."))),Object(r.a)("li",{parentName:"ul"},"Data source duplication may occur.",Object(r.a)("ul",{parentName:"li"},Object(r.a)("li",{parentName:"ul"},"Prometheus is difficult to manage in terms of data sources when it is installed and operated in multiple clusters. And when you configure a dashboard such as Grafana, it is not easy to distinguish when querying multiple clusters for the same metric. This makes it hard to consolidate and view data when Prometheus is installed for each cluster."))),Object(r.a)("li",{parentName:"ul"},"The configuration for scaling and high availability is complex."),Object(r.a)("li",{parentName:"ul"},"There are some shortcomings in terms of group management and user authentication management (security)."),Object(r.a)("li",{parentName:"ul"},"Prometheus cannot collect raw logs and events."),Object(r.a)("li",{parentName:"ul"},"Application-based request tracing is not supported itself."),Object(r.a)("li",{parentName:"ul"},"Anomaly Detection requires a separate data analysis capability.")),Object(r.a)("h3",{id:"managed-observability-platform-at-anywhere"},"Managed Observability Platform At Anywhere."),Object(r.a)("p",null,"The primary goal of NexClipper is to make it easy to set up and use the Observability platform in your own cloud environment, putting the highest priority on ensuring observability in any environment."),Object(r.a)("p",null,Object(r.a)("img",{alt:"nexclipper",src:a(269).default})),Object(r.a)("h2",{id:"value-of-nexclipper"},"Value of Nexclipper"),Object(r.a)("h3",{id:"make-observability-simple--easy"},"Make Observability Simple & Easy"),Object(r.a)("p",null,"NexClipper allows you to easily build a complex Observability open-source stack within your private cluster. In the Kubernetes open-source ecosystem, all open sources that need to be recorded, such as logs and events, including Prometheus, the most widely used metric-based monitoring solution in the environment, are easy to provision and operate with expert-like experience."),Object(r.a)("h3",{id:"managed-prometheus"},"Managed Prometheus"),Object(r.a)("p",null,"Nexclipper is based on an open source ecosystem, making them highly scalable, and allowing users to remove the limitation of vendor lock-in. It supports most existing public cloud environments, including AWS, based on dependency removal. Not only is it Self-build Kubernetes, but it also supports managed Kubernetes from a variety of CSPs."),Object(r.a)("h3",{id:"cost-effective"},"Cost effective"),Object(r.a)("p",null,"NexClipper automates repetitive tasks to avoid human errors and reduces costs through reduced learning curves. You can work with UI-based dashboards with everything you need, including repetitive dashboard configurations, AlertRule, and Managed Service Discovery settings, and human errors can be reduced by utilizing the test feature."),Object(r.a)("h3",{id:"observe-all-of-your-data-in-single-endpoint"},"Observe all of your data in single endpoint"),Object(r.a)("p",null,"By managing individual clusters and storing them in the Global-View cluster at the same time, it is possible to manage data for analysis. You can also monitor your existing deployed monitoring systems. In the event of a failure of the individual cluster monitoring stack itself, it can be monitored safely even if the notification is not delivered."),Object(r.a)("h2",{id:"components-of-nexclipper"},"Components of NexClipper"),Object(r.a)("p",null,"NexClipper is developing on the following open-source base to add new convenience features while maintaining existing open-source solutions while leveraging the cloud native-based observability ecosystem, including Prometheus. For more information, please refer to the homepage."),Object(r.a)("h4",{id:"nexclipper"},Object(r.a)("a",{parentName:"h4",href:"https://github.com/NexClipper/nexclipper"},"NexClipper")),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"Metrics Pipeline for interoperability and Enterprise Prometheus")),Object(r.a)("h4",{id:"exporterhub"},Object(r.a)("a",{parentName:"h4",href:"https://github.com/NexClipper/exporterhub.io"},"ExporterHub")),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"A Curated List of Prometheus Exporters for the Best practice")),Object(r.a)("h4",{id:"webstork"},Object(r.a)("a",{parentName:"h4",href:"https://github.com/NexClipper/webstork"},"Webstork")),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"Web tunnel for Cloud-native application remote monitoring")),Object(r.a)("h4",{id:"klevr"},Object(r.a)("a",{parentName:"h4",href:"https://github.com/klevry/klevr"},"Klevr")),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"Hyper-connected Cloud-native delivery solution for SaaS")),Object(r.a)("h4",{id:"provbe"},Object(r.a)("a",{parentName:"h4",href:"https://github.com/nexclipper/provbee"},"ProvBe")),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"Provisioning All the platforms for Cloud-native")),Object(r.a)("h4",{id:"metricark"},Object(r.a)("a",{parentName:"h4",href:"https://github.com/nexclipper/metricark"},"MetricArk")),Object(r.a)("ul",null,Object(r.a)("li",{parentName:"ul"},"Prometheus based status(State/Event/Metric) Composite API")),Object(r.a)("h2",{id:"conclusion"},"Conclusion"),Object(r.a)("p",null,'NexClipper is "Managed Prometheus service for enterprise customers" that composed of open-sources and cloud native solution. NexClipper enables easy deployment of the Observability stack, including Prometheus that supports the many capabilities needed in enterprise environments. In the next posting, we will describe the features and benefits of NexClipper.'),Object(r.a)("h2",{id:"getting-started"},"Getting Started"),Object(r.a)("p",null,"Get Started quickly and easily with NexClipper"),Object(r.a)("p",null,Object(r.a)("a",{parentName:"p",href:"https://console.nexclipper.io"},Object(r.a)("img",{alt:"freetrial &gt;&lt;",src:a(240).default}))),Object(r.a)("h2",{id:"introduction-of-nexclipper"},"Introduction of NexClipper"),Object(r.a)("p",null,"Nexcloud is a container-based cloud technology company. For full-scale global business, we are currently establishing a U.S. corporation, and we are bringing in competent people. For more information on the Job Description, please see the link below."),Object(r.a)("h4",{id:"were-hiring"},Object(r.a)("a",{parentName:"h4",href:"https://www.notion.so/nexclipper/We-re-Hiring-c356a7b503d5403289bc3cf8ac20c6ea"},"We're Hiring")),Object(r.a)("p",null,"Please give us various feedback on all of our technologies and products, including blog contents, and if you have any questions or need any technical meetings, please contact us at ",Object(r.a)("a",{parentName:"p",href:"mailto:support@nexclipper.io"},"support@nexclipper.io")," and we will reply to you as soon as soon as possible."))}p.isMDXComponent=!0},219:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var i=a(0),n=a.n(i);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),p=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),b=i,m=d["".concat(o,".").concat(b)]||d[b]||u[b]||r;return a?n.a.createElement(m,l(l({ref:t},c),{},{components:a})):n.a.createElement(m,l({ref:t},c))}));function b(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},240:function(e,t,a){"use strict";a.r(t),t.default="data:image/png;base64,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"},269:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/nexclipper_intro-cca57563564f4fa0a150c05a2a62d79f.png"}}]);