(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{182:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||i;return n?a.a.createElement(m,o(o({ref:t},b),{},{components:n})):a.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var b=2;b<i;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},258:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/docker-desktop-70dda646e0a1e21b571b6bdba884993c.png"},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),i=(n(0),n(182)),c={id:"local",title:"Kubernetes Local Environment",hide_title:!0,description:null,keywords:["local","minikube","k3s","docker desktop","microk8s"]},o={unversionedId:"local",id:"local",isDocsHomePage:!1,title:"Kubernetes Local Environment",description:"Local \ud658\uacbd\uc5d0\uc11c Kubernetes \uad6c\uc131\ud558\uae30",source:"@site/docs/local.md",slug:"/local",permalink:"/docs/local",editUrl:"https://github.com/NexClipper/docs/edit/master/docs/local.md",version:"current",sidebar:"someSidebar",previous:{title:"Introduction to NexClipper",permalink:"/docs/"},next:{title:"Getting Started Guides",permalink:"/docs/start"}},s=[{value:"Local \ud658\uacbd\uc5d0\uc11c Kubernetes \uad6c\uc131\ud558\uae30",id:"local-\ud658\uacbd\uc5d0\uc11c-kubernetes-\uad6c\uc131\ud558\uae30",children:[{value:"Minimum Requirements",id:"minimum-requirements",children:[]},{value:"minikube \uc124\uce58 \ubc0f \uc2e4\ud589",id:"minikube-\uc124\uce58-\ubc0f-\uc2e4\ud589",children:[]},{value:"microk8s \uc124\uce58",id:"microk8s-\uc124\uce58",children:[]},{value:"Docker Desktop",id:"docker-desktop",children:[]},{value:"K3s",id:"k3s",children:[]}]}],b={rightToc:s};function l(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"local-\ud658\uacbd\uc5d0\uc11c-kubernetes-\uad6c\uc131\ud558\uae30"},"Local \ud658\uacbd\uc5d0\uc11c Kubernetes \uad6c\uc131\ud558\uae30"),Object(i.b)("h3",{id:"minimum-requirements"},"Minimum Requirements"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://nexclipper.github.io/docs/start#installation"}),"https://nexclipper.github.io/docs/start#installation")),Object(i.b)("h4",{id:"kubectl-\uc124\uce58\ud558\uae30"},"kubectl \uc124\uce58\ud558\uae30"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://kubernetes.io/ko/docs/tasks/tools/install-kubectl/"}),"kubectl \uc124\uce58 \ubc0f \uc124\uc815")),Object(i.b)("h3",{id:"minikube-\uc124\uce58-\ubc0f-\uc2e4\ud589"},"minikube \uc124\uce58 \ubc0f \uc2e4\ud589"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://kubernetes.io/ko/docs/tasks/tools/install-minikube/"}),"Minikube \uc124\uce58"),"\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://kubernetes.io/ko/docs/setup/learning-environment/minikube/"}),"Minikube\ub85c \ucfe0\ubc84\ub124\ud2f0\uc2a4 \uc124\uce58")),Object(i.b)("h3",{id:"microk8s-\uc124\uce58"},"microk8s \uc124\uce58"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://microk8s.io/docs/install-alternatives"}),"MicroK8s \uc124\uce58 \ubc0f \uc2e4\ud589")),Object(i.b)("h3",{id:"docker-desktop"},"Docker Desktop"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.docker.com/get-started"}),"Docker Desktop \uc124\uce58")),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"\uc124\uce58 \ud6c4 \uc544\ub798\uc640 \uac19\uc774 Preferences - Kubernetes - Enable Kubernetes\ub97c \uccb4\ud06c\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4."))),Object(i.b)("p",null,Object(i.b)("img",{alt:"img",src:n(258).default})),Object(i.b)("h3",{id:"k3s"},"K3s"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"K3s\ub294 \uacf5\uc2dd\uc801\uc73c\ub85c Ubuntu 16.04 (amd64), Ubuntu 18.04 (amd64), Raspbian Buster* \ub9cc \uc9c0\uc6d0\ud569\ub2c8\ub2e4. MacOS \ud658\uacbd\uc5d0\uc11c\ub294 \uc9c1\uc811 \uc124\uce58\uac00 \ubd88\uac00\ub2a5\ud569\ub2c8\ub2e4."))),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://rancher.com/docs/k3s/latest/en/quick-start/"}),"K3s \uc124\uce58")))}l.isMDXComponent=!0}}]);