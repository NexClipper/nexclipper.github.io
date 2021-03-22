(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{102:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return c}));var n=r(3),o=r(7),a=(r(0),r(215)),p={title:"Prometheus at NexClipper",author:"Jinwoong Kim",author_title:"NexClipper",author_url:"https://github.com/ddiiwoong",author_image_url:"https://avatars1.githubusercontent.com/u/37430952?v=4",description:"Summarize the issues that arise in operating Prometheus at the enterprise level and introduce NexClipper's development roadmap to solve them.",tags:["Prometheus","Exporter","NexClipper"]},i={permalink:"/blog/2020/11/09/prometheus-at-nexcilpper",editUrl:"https://github.com/NexClipper/docs/edit/master/blog/blog/2020-11-09-prometheus-at-nexcilpper.md",source:"@site/blog/2020-11-09-prometheus-at-nexcilpper.md",description:"Summarize the issues that arise in operating Prometheus at the enterprise level and introduce NexClipper's development roadmap to solve them.",date:"2020-11-09T00:00:00.000Z",tags:[{label:"Prometheus",permalink:"/blog/tags/prometheus"},{label:"Exporter",permalink:"/blog/tags/exporter"},{label:"NexClipper",permalink:"/blog/tags/nex-clipper"}],title:"Prometheus at NexClipper",readingTime:6.665,truncated:!0,prevItem:{title:"values-of-nexcilpper",permalink:"/blog/2021/03/22/values-of-nexcilpper"},nextItem:{title:"Prometheus Exporter & ExporterHub (Eng.)",permalink:"/blog/2020/09/25/prometheus-exporter-exporterhub-en"}},l=[],u={toc:l};function c(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.a)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.a)("p",null,"In this post, I summarize the issues that arise in operating Prometheus at the enterprise level and introduce NexClipper's development roadmap to solve them."))}c.isMDXComponent=!0},215:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),c=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=n,b=m["".concat(p,".").concat(f)]||m[f]||s[f]||a;return r?o.a.createElement(b,i(i({ref:t},u),{},{components:r})):o.a.createElement(b,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var u=2;u<a;u++)p[u]=r[u];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);