(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{169:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return c}));var r=a(3),n=a(8),o=(a(0),a(224)),i={title:"Prometheus at NexClipper",author:"Jinwoong Kim",author_title:"NexClipper",author_url:"https://github.com/ddiiwoong",author_image_url:"https://avatars1.githubusercontent.com/u/37430952?v=4",description:"Summarize the issues that arise in operating Prometheus at the enterprise level and introduce NexClipper's development roadmap to solve them.",tags:["Prometheus","Exporter","NexClipper"]},s={permalink:"/blog/2020/11/09/prometheus-at-nexcilpper",editUrl:"https://github.com/NexClipper/docs/edit/master/blog/blog/2020-11-09-prometheus-at-nexcilpper.md",source:"@site/blog/2020-11-09-prometheus-at-nexcilpper.md",description:"Summarize the issues that arise in operating Prometheus at the enterprise level and introduce NexClipper's development roadmap to solve them.",date:"2020-11-09T00:00:00.000Z",formattedDate:"November 9, 2020",tags:[{label:"Prometheus",permalink:"/blog/tags/prometheus"},{label:"Exporter",permalink:"/blog/tags/exporter"},{label:"NexClipper",permalink:"/blog/tags/nex-clipper"}],title:"Prometheus at NexClipper",readingTime:6.665,truncated:!0,prevItem:{title:"NexClipper\uc758 \uac00\uce58",permalink:"/blog/2021/03/22/values-of-nexcilpper"},nextItem:{title:"Prometheus Exporter & ExporterHub (Eng.)",permalink:"/blog/2020/09/25/prometheus-exporter-exporterhub-en"}},l=[{value:"Overview for Monitoring Kubernetes",id:"overview-for-monitoring-kubernetes",children:[]},{value:"Prometheus Components",id:"prometheus-components",children:[]},{value:"How to install Prometheus",id:"how-to-install-prometheus",children:[]},{value:"Advantages of using Prometheus",id:"advantages-of-using-prometheus",children:[]},{value:"Cons of Prometheus",id:"cons-of-prometheus",children:[]},{value:"NexClipper",id:"nexclipper",children:[]},{value:"Summary",id:"summary",children:[]},{value:"Introduce NexCloud and Career",id:"introduce-nexcloud-and-career",children:[]}],u={toc:l};function c(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(o.a)("wrapper",Object(r.a)({},u,i,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"In this post, I summarize the issues that arise in operating Prometheus at the enterprise level and introduce NexClipper's development roadmap to solve them."),Object(o.a)("h2",{id:"overview-for-monitoring-kubernetes"},"Overview for Monitoring Kubernetes"),Object(o.a)("p",null,"Kubernetes is the first project to graduate from the Cloud Native Computing Foundation (CNCF), and it is currently the de facto standard for container orchestration, encompassing IaaS and PaaS, and has grown tremendously in just a few years, revitalizing the community, and many companies have adopted it in real production environments."),Object(o.a)("p",null,Object(o.a)("a",{parentName:"p",href:"https://github.com/kubernetes/community/blob/master/contributors/design-proposals/instrumentation/monitoring_architecture.md#architecture"},"https://github.com/kubernetes/community/blob/master/contributors/design-proposals/instrumentation/monitoring_architecture.md#architecture"),"  "),Object(o.a)("p",null,"The basic Kubernetes metric description is divided into system metrics and service metrics, and monitoring methods are largely divided into core metric pipeline and monitoring pipeline."),Object(o.a)("p",null,"Initially, Heapster was widely used together with Kubernetes as a monitoring solution, as indicated in that document. It started as a tool that transmits monitoring data to an external system, and has since grown into its own monitoring system. However, Heapster was deprecated in Kubernetes version 1.11, and most components of Kubernetes clusters after 1.13 are supported by Prometheus to measure in cloud native way."),Object(o.a)("h2",{id:"prometheus-components"},"Prometheus Components"),Object(o.a)("p",null,"Kubernetes monitoring is based on cluster monitoring by default. As you monitor your cluster, you can get information about the overall health and workloads of the system, such as checking the utilization of nodes and the number of pods running. Next, we describe the services and tools most used among the various ecosystems.  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"Prometheus : Open source time series database"),Object(o.a)("li",{parentName:"ul"},"kube-state-metric : Service that generates metrics information of various objects and workloads in Kubernetes cluster"),Object(o.a)("li",{parentName:"ul"},"Node_exporter : Service that generates hardware and OS metric information exposed by the *NIX kernel"),Object(o.a)("li",{parentName:"ul"},"Pushgateway : Receive and provide metrics for ad-hoc and small batch jobs"),Object(o.a)("li",{parentName:"ul"},"Alertmanager : Service that handles (deduplication, grouping, and sending) notifications sent from Prometheus server"),Object(o.a)("li",{parentName:"ul"},"Grafana : Dashboard visualization tool for monitoring and metric analysis")),Object(o.a)("h2",{id:"how-to-install-prometheus"},"How to install Prometheus"),Object(o.a)("p",null,"Installing Prometheus is not difficult. However, using Prometheus with a complete understanding or just deploying it with Getting Started is very different for an actual operation in the future.  "),Object(o.a)("p",null,"There are mainly two ways to configure it by yourself. You can run the already compiled binary or build the source yourself and install it using Docker. In addition, it can be installed using configuration management tools such as Ansible and Puppet."),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",{parentName:"li",href:"https://prometheus.io/docs/prometheus/latest/installation/"},"https://prometheus.io/docs/prometheus/latest/installation/"))),Object(o.a)("p",null,"The Prometheus community basically provides Helm Charts in beta.  "),Object(o.a)("p",null,"You can simply deploy Alertmanager and Prometheus alone, or simply use it for deploying various exporters.  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",{parentName:"li",href:"https://github.com/prometheus-community/helm-charts"},"https://github.com/prometheus-community/helm-chart"))),Object(o.a)("p",null,"Prometheus Operators use ",Object(o.a)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/"},"Custom Resources")," by default to simplify deployment and configuration of Prometheus, Alert Manager, and related ecosystems.  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",{parentName:"li",href:"https://github.com/prometheus-operator/prometheus-operator"},"https://github.com/prometheus-operator/prometheus-operator"))),Object(o.a)("p",null,"Alternatively, it can be deployed through the kube-prometheus-stack helm chart that includes the operator above."),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("a",{parentName:"li",href:"https://github.com/prometheus-operator/kube-prometheus"},"https://github.com/prometheus-operator/kube-prometheus"))),Object(o.a)("h2",{id:"advantages-of-using-prometheus"},"Advantages of using Prometheus"),Object(o.a)("p",null,"There are several advantages to using Prometheus as a monitoring tool for Kubernetes."),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"Ease of management: The key to Prometheus is that it is easy to manage. Since it operates as a single binary file without separate installation, it basically only needs a local disk and has few dependencies with other solutions such as database or cache."),Object(o.a)("li",{parentName:"ul"},"Service Discovery: Basically, file or DNS-based service discovery can be configured, so the target to be scraped is basically registered through the DNS domain name that is periodically queried. In the Kubernetes REST API, you can search for what to scrap and stay in sync with your Kubernetes cluster at all times.")),Object(o.a)("p",null,Object(o.a)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#kubernetes_sd_config"},"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#kubernetes_sd_config")),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("p",{parentName:"li"},"Powerful and easy data model: All collected monitoring data is stored in metric format in the built-in time series database (TSDB). And in addition to the default name, every sample contains a set of tags that describe the characteristics of the sample. Each time series data is uniquely identified by a metric name and a key-value pair called an optional label. Each time series data stores a series of sample values \u200b\u200bin chronological order. Each sample consists of a float64 value and a timestamp in milliseconds.")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("p",{parentName:"li"},"Query Language (PromQL): Easily query and aggregate monitoring data based on labels and time series. You can apply functions and operators to metric queries, filter and group by label, and even use regular expressions for matching and filtering. PromQL is also used for data visualization or alerts, notifications such as Grafana.")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("p",{parentName:"li"},"Monitoring internal status by pull collection method: Prometheus recommends that users monitor the internal status of the service themselves. You can check the metric status of the actual application or solution using various client libraries or exporters."))),Object(o.a)("h2",{id:"cons-of-prometheus"},"Cons of Prometheus"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"Long-term storage: Basically, if 100,000 metrics of 3 byte size are stored per second, about 500 GB of storage is used in 30 days. If Prometheus is operated in the form of a local instance or Pod, long-term storage is not easy, and the more monitoring targets, the more data is stored."),Object(o.a)("li",{parentName:"ul"},"Data source redundancy: When Prometheus is installed and operated in multiple clusters, it is not easy to manage in terms of data sources, and when a dashboard such as Grafana is configured, it is difficult to distinguish when querying multiple clusters for the same metric. Because of this, when Prometheus is installed for each cluster, it is difficult to see the data integrated."),Object(o.a)("li",{parentName:"ul"},"It lacks group management and user authentication management (security)."),Object(o.a)("li",{parentName:"ul"},"Raw log/event collection is not possible."),Object(o.a)("li",{parentName:"ul"},"Application-based request tracing is not supported by itself."),Object(o.a)("li",{parentName:"ul"},"Additional data analysis capability is required for Anomaly Detection."),Object(o.a)("li",{parentName:"ul"},"Complicated configuration for horizontal scaling and high availability."),Object(o.a)("li",{parentName:"ul"},"It takes a lot of labor and effort to distribute and operate. (Learn PromQL, configure Grafana dashboard, create Alert-Rule, etc.)")),Object(o.a)("h2",{id:"nexclipper"},"NexClipper"),Object(o.a)("p",null,"NexClipper is under development with the following roadmap to solve the problems the current Prometheus ecosystem has. We are working hard to add new features while maintaining our existing open source and solutions."),Object(o.a)("p",null,Object(o.a)("img",{alt:"architect",src:a(394).default})),Object(o.a)("p",null,"The following features are currently being developed."),Object(o.a)("p",null,"Prometheus ecosystem can be quickly and easily deployed in any production environment. (",Object(o.a)("a",{parentName:"p",href:"https://github.com/NexClipper/provbee"},"https://github.com/NexClipper/provbee"),")  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"NexClipper Cloud allows you to quickly and easily deploy Prometheus ecosystem through a simple installation command."),Object(o.a)("li",{parentName:"ul"},"NexClipper On-Premise provides a separate Prometheus server cluster and various ecosystem installation and operation environments in multiple multi-cloud environments."),Object(o.a)("li",{parentName:"ul"},"Long-term storage can be configured based on open source softwares. (Avoiding vendor dependency)"),Object(o.a)("li",{parentName:"ul"},"Provisioned based on PromScale, which is basically composed of TimescaleDB, and storage period and capacity can be increased whenever necessary.")),Object(o.a)("p",null,"Similar to the Bastion Host role, even in a blocking environment such as a firewall, the open source-based Task Manager(",Object(o.a)("a",{parentName:"p",href:"https://github.com/NexClipper/klevr"},"https://github.com/NexClipper/klevr"),") executes asynchronous jobs, so it can be operated in a private cloud environment.  "),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"Separate charts or resources can be directly distributed, and operation is possible in a private environment that is isolated for security reasons."),Object(o.a)("li",{parentName:"ul"},"Cluster management or operation is possible without direct access to KubeAPI."),Object(o.a)("li",{parentName:"ul"},"Remotely modify and manage Prometheus and AlertManager config.")),Object(o.a)("p",null,"NexClipper provides convenient functions related to queries and rules."),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"Multiple Prometheus instances can be queried simultaneously to a single endpoint and multi-cluster Graphana dashboards can be operated while minimizing the movement of multiple data sources."),Object(o.a)("li",{parentName:"ul"},"Promlens(",Object(o.a)("a",{parentName:"li",href:"https://github.com/promlabs/promlens-public"},"https://github.com/promlabs/promlens-public"),") Preview features are included so you can write and test simple queries."),Object(o.a)("li",{parentName:"ul"},"With the ability to manage exporters, you can easily install and configure AlertRule for operation. ",Object(o.a)("a",{parentName:"li",href:"https://ExporterHub.io"},"ExporterHub.io"),", ",Object(o.a)("a",{parentName:"li",href:"https://github.com/NexClipper/exporterhub.io"},"https://github.com/NexClipper/exporterhub.io"))),Object(o.a)("p",null,"We are working hard to provide many other features."),Object(o.a)("h2",{id:"summary"},"Summary"),Object(o.a)("p",null,"In this post, explained monitoring in the Kubernetes environment, the pros and cons of Prometheus, and the roadmap of NexClipper to overcome the drawbacks of Prometheus.  "),Object(o.a)("p",null,"If you have any questions or would like to have additional information, please visit KubeCon North America 2020 NexClipper Booth."),Object(o.a)("p",null,"We appreciate all your feedbacks on all our technologies and products, including blog content, and if you have any questions at any time, please contact us at ",Object(o.a)("a",{parentName:"p",href:"mailto:support@nexclipper.io"},"support@nexclipper.io")," and we will reply as soon as possible."),Object(o.a)("h2",{id:"introduce-nexcloud-and-career"},"Introduce NexCloud and Career"),Object(o.a)("p",null,Object(o.a)("a",{parentName:"p",href:"https://www.nexclipper.io/"},"NexCloud")," is a container-based cloud technology company.\nWe\u2019re planning to kick-start our US operations in early 2021, and looking for talents to grow with the company.  "),Object(o.a)("p",null,Object(o.a)("a",{parentName:"p",href:"https://www.notion.so/nexclipper/Job-description-63e5113b79a943f28a75c1eca1e0f50a"},"Product Marketing Manager")))}c.isMDXComponent=!0},224:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=n.a.createContext({}),c=function(e){var t=n.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,h=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return a?n.a.createElement(h,s(s({ref:t},u),{},{components:a})):n.a.createElement(h,s({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},394:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/nexclipper_architect-78e0205e7a7716f0d1383230db35a37a.png"}}]);