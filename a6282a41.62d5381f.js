(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{160:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(217)),i={title:"The Concept Of NexClipper\u2019s Anomaly Detection Algorithm",author:"NexClipper",author_title:"NexClipper",author_url:"https://github.com/NexClipper",author_image_url:"https://avatars2.githubusercontent.com/u/39365220?v=4",tags:["NexClipper","Monitoring","Anomaly Detection"]},l={permalink:"/blog/2018/07/20/the-concept-of-nexclippers-anomaly-detection-algorithm",editUrl:"https://github.com/NexClipper/docs/edit/master/blog/blog/2018-07-20-the-concept-of-nexclippers-anomaly-detection-algorithm.md",source:"@site/blog/2018-07-20-the-concept-of-nexclippers-anomaly-detection-algorithm.md",description:"By Kevin Ko , PhD, Data Scientist",date:"2018-07-20T00:00:00.000Z",tags:[{label:"NexClipper",permalink:"/blog/tags/nex-clipper"},{label:"Monitoring",permalink:"/blog/tags/monitoring"},{label:"Anomaly Detection",permalink:"/blog/tags/anomaly-detection"}],title:"The Concept Of NexClipper\u2019s Anomaly Detection Algorithm",readingTime:2.24,truncated:!0,prevItem:{title:"Launching online beta service - NexClipper Cloud for container monitoring and performance management",permalink:"/blog/2018/08/02/launching-online-beta-service-nexclipper-cloud-for-container-monitoring-and-performance-management"},nextItem:{title:"NexCloud(NexClipper's DC/OS on-Premise version) is now listed on DC/OS service catalog.",permalink:"/blog/2018/07/11/nexcloudnexclippers-dc-os-on-premise-version-is-now-listed-on-dc-os-service-catalog"}},c=[],s={toc:c};function p(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(o.a)("p",null,"By ",Object(o.a)("a",{parentName:"p",href:"mailto:support@nexclipper.io"},"Kevin Ko")," , PhD, Data Scientist"),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},Object(o.a)("em",{parentName:"strong"},"What is anomaly detection?"))),Object(o.a)("p",null,"Anomaly detection is the identification of data points, items, observations or events that do not ",Object(o.a)("strong",{parentName:"p"},Object(o.a)("em",{parentName:"strong"},"conform to the expected pattern"))," of a given group. These anomalies occur very infrequently but may signify a large and significant threat such as cyber intrusions or fraud."),Object(o.a)("p",null,"Here, the paragraph, \u201c_conform to the expected pattern\u201d_is the most important. In other words, finding anomalies means finding a case that is hard to happen in a normal situation."),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},Object(o.a)("em",{parentName:"strong"},"How to find anomalies?"))),Object(o.a)("p",null,"The key to anomaly detection is forecasting or predicting normal cases. If we can figure out what the metric will be in the normal case ( ",Object(o.a)("strong",{parentName:"p"},Object(o.a)("em",{parentName:"strong"},"Normal Range"))," ), we can find out anomaly through the degree of deviation from that range, or we can calculate the degree of anomaly. See the following figure."),Object(o.a)("p",null,Object(o.a)("img",{src:a(378).default})),Object(o.a)("p",null,"The traditional method of anomaly detection is to set an upper limit and a lower limit through rule-set like the figure above. However, this general method has a disadvantage that a person has to set rules by empirical judgment. Also, there is another disadvantage in that the upper limit and the lower limit are fixed without changing according to the change of time or changing of system conditions. See the following figure."),Object(o.a)("p",null,Object(o.a)("img",{src:a(379).default})),Object(o.a)("p",null,"As you can see the figure above, Normal Range can be changed by time or system condition. So the rule set that we set up is meaningless. Therefore, a good anomaly detection system or algorithm should have the following characteristics. First, it should be able to automatically predict normal penalties. Second, the normal range should be automatically adjusted depending on the characteristics of the data that change over time or change. See the following figure."),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},Object(o.a)("em",{parentName:"strong"},"How do you handle regular patterns?"))),Object(o.a)("p",null,"Sometimes points beyond the normal range may appear repeatedly. For example, if the normal range is between 50 and 100 and the value ranges from 160 to 170 at 12 pm every day, can you think of this as an anomaly? The answer is that these regular abnormalities are not abnormal cases."),Object(o.a)("p",null,Object(o.a)("img",{src:a(380).default})),Object(o.a)("p",null,"To solve this problem, the nexClipper anomaly detection algorithm implemented logic to automatically detect seasonal patterns. This allows us to adjust the normal range automatically at specific times. See the following figure."),Object(o.a)("p",null,Object(o.a)("img",{src:a(381).default})),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},Object(o.a)("em",{parentName:"strong"},"What are the advantages of using NexClipper Anomaly Detection?"))),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},"It has various forecasting algorithms that can predict the normal range. ",Object(o.a)("strong",{parentName:"li"},"(Forecasting Normal Range)")),Object(o.a)("li",{parentName:"ul"},"With Continuous Learning, the normal range is automatically corrected and adjusted to suit new data or environments. ",Object(o.a)("strong",{parentName:"li"},"(Appling Continuous Learning)")),Object(o.a)("li",{parentName:"ul"},"Automatically finds the temporal patterns embedded in the data. ",Object(o.a)("strong",{parentName:"li"},"(Automatically Finding Temporal Patterns)"))),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"[","NexClipper Anomaly Detection: Screen Example","]")),Object(o.a)("p",null,Object(o.a)("img",{src:a(382).default})))}p.isMDXComponent=!0},217:function(e,t,a){"use strict";a.d(t,"a",(function(){return g}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(a),g=n,d=u["".concat(i,".").concat(g)]||u[g]||m[g]||o;return a?r.a.createElement(d,l(l({ref:t},s),{},{components:a})):r.a.createElement(d,l({ref:t},s))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},378:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/anomal_detect1-4234f754b08c8df1ca5973e361511255.png"},379:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/anomal_detect2-2109a0edac51606c4360435c5ca2e5dd.png"},380:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/anomal_detect3-1aa826c8543e347678161bcf9a95ed93.png"},381:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/anomal_detect4-2f3fff0f02de344d93c394ff9592ed62.png"},382:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/anomal_detect5-20d30cac8cb26e6e6c5bbd24b2809d38.png"}}]);