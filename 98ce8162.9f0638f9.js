(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return o}));var a=n(2),r=n(6),b=(n(0),n(181)),c={id:"start",title:"Getting Started Guides",hide_title:!0,description:null,keywords:["guide","installation","setup","getting started","nexclipper"]},i={unversionedId:"start",id:"start",isDocsHomePage:!1,title:"Getting Started Guides",description:"Getting Started with NexClipper Cloud",source:"@site/docs/start.md",slug:"/start",permalink:"/docs/start",editUrl:"https://github.com/NexClipper/docs/edit/master/docs/start.md",version:"current",sidebar:"someSidebar",previous:{title:"Introduction to NexClipper",permalink:"/docs/"},next:{title:"Style Guide",permalink:"/docs/style"}},l=[{value:"Getting Started with NexClipper Cloud",id:"getting-started-with-nexclipper-cloud",children:[{value:"Overview",id:"overview",children:[]},{value:"Minimum Requirements",id:"minimum-requirements",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Remote Kubernetes",id:"remote-kubernetes",children:[]}]}],p={rightToc:l};function o(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},p,c,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"getting-started-with-nexclipper-cloud"},"Getting Started with NexClipper Cloud"),Object(b.b)("h3",{id:"overview"},"Overview"),Object(b.b)("p",null,"NexClipper \uad6c\uc131\uc694\uc18c\ub294 \ud06c\uac8c 3\uac00\uc9c0\ub85c \uad6c\uc131\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.\nNexClipper\ub294 Kubernetes cluster \ub0b4\uc5d0\uc11c \ub370\ubaac\uc14b(DaemonSet)\uacfc \ud30c\ub4dc(Pod), \ub514\ud50c\ub85c\uc774\uba3c\ud2b8(Deployment)\ud615\ud0dc\ub85c \uc2e4\ud589\ub429\ub2c8\ub2e4.",Object(b.b)("br",{parentName:"p"}),"\n","\ubaa8\ub4e0 \ub9ac\uc18c\uc2a4\ub294 nexclipper \ub124\uc784\uc2a4\ud398\uc774\uc2a4\uc5d0\uc11c \uad6c\ub3d9\ub418\uba70, \ud504\ub85c\uba54\ud14c\uc6b0\uc2a4 \uc5d0\ucf54\uc2dc\uc2a4\ud15c\uc740 \ubaa8\ub450 "),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\uad6c\uc131\uc694\uc18c"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\ub9ac\uc18c\uc2a4 \ud0c0\uc785"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\uc5ed\ud560"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Klevr Agent"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"DaemonSet"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"NexClipper Manager\uc640 \ud1b5\uc2e0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Provbee"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Pod"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Provisioning \ubc0f Task \ucc98\ub9ac")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"MetricOperator(\uc900\ube44\uc911)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Deployment"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\uba54\ud2b8\ub9ad \uc218\uc9d1, \ucc98\ub9ac, \uc804\uc1a1")))),Object(b.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(b.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(b.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(b.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"NexClipper Agent\ub294 Kubernetes \uae30\uc900 ",Object(b.b)("em",{parentName:"p"},"1.15.12")," \uc774\uc0c1\uc5d0\uc11c \ud14c\uc2a4\ud2b8 \ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc774\ud558 \ubc84\uc804\uc5d0\uc11c\ub294 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"minimum-requirements"},"Minimum Requirements"),Object(b.b)("p",null,"NexClipper\ub294 \uae30\ubcf8\uc801\uc73c\ub85c Linux \ud658\uacbd\uc5d0\uc11c \ub3d9\uc791\ud558\ub3c4\ub85d \ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.   "),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Operating Systems : Linux(WSL\ud3ec\ud568), MacOS 10.14+"),Object(b.b)("li",{parentName:"ul"},"Software",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"bash or zsh"),Object(b.b)("li",{parentName:"ul"},"curl"),Object(b.b)("li",{parentName:"ul"},"ssh-keygen"))),Object(b.b)("li",{parentName:"ul"},"Target Kubernetes Cluster : 1.15.12 \uc774\uc0c1"),Object(b.b)("li",{parentName:"ul"},"Firewall : Outbound (Destination : console.nexclipper.io, Port: 80,443,8080,8090)")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"installation"},"Installation"),Object(b.b)("p",null,"\uc124\uce58 \ubc29\ubc95\uc740 2\uac00\uc9c0 \uc635\uc158\uc774 \uc788\uc2b5\ub2c8\ub2e4. "),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"Remote Kubernetes",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\uc6d0\uaca9\uc73c\ub85c kube-apiserver\ub85c \ud1b5\uc2e0\uc774 \uac00\ub2a5\ud55c \ud658\uacbd (kubeconfig \ud658\uacbd)"))),Object(b.b)("li",{parentName:"ol"},"Local Kubernetes",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Docker Desktop, Minikube, K3s, MicroK8s \ub4f1 \ub85c\uceec\uc5d0\uc11c \uc2e4\ud589\ud558\ub294 \uacbd\uc6b0")))),Object(b.b)("p",null,"bash \ub610\ub294 zsh\uc744 \uc2e4\ud589\ud560 \uc218 \uc788\ub294 \ud658\uacbd\uc5d0\uc11c \ud604\uc7ac \uc5f0\uacb0\ub41c \ud074\ub7ec\uc2a4\ud2b8\ub97c \ud655\uc778\ud558\ub294 \ub2e4\uc74c \uba85\ub839\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4.\ndocker-descktop\uc73c\ub85c kubernetes \ud658\uacbd\uc744 \uad6c\uc131\ud588\ub2e4\uba74 \ub2e4\uc74c\uacfc \uc720\uc0ac\ud55c \uacb0\uacfc\ub97c \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ kubectl cluster-info\nKubernetes master is running at https://kubernetes.docker.internal:6443\nKubeDNS is running at https://kubernetes.docker.internal:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy\n\n")),Object(b.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(b.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(b.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(b.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"\uae30\uc874 \uc6b4\uc601\uc911\uc778 \ud504\ub85c\uba54\ud14c\uc6b0\uc2a4 \uc624\ud37c\ub808\uc774\ud130(Operator)\uc640 \uc911\ubcf5 \uc124\uce58\ub420 \uacbd\uc6b0\uc5d0 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"remote-kubernetes"},"Remote Kubernetes"),Object(b.b)("p",null,Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://nexclipper.io"}),"https://nexclipper.io")," \ub85c \uc811\uc18d\ud558\uc5ec ",Object(b.b)("inlineCode",{parentName:"p"},"TRY")," \uba54\ub274\ub97c \ud074\ub9ad\ud569\ub2c8\ub2e4."),Object(b.b)("p",null,Object(b.b)("img",{alt:"img",src:n(306).default})),Object(b.b)("p",null,"Beta Test Landing Page\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4."),Object(b.b)("p",null,Object(b.b)("img",{alt:"img",src:n(307).default})),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"Sign In")," \uba54\ub274\ub97c \ud074\ub9ad\ud558\uc5ec ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"https://console.nexclipper.io/login"}),"https://console.nexclipper.io/login")," \ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4."),Object(b.b)("p",null,Object(b.b)("img",{alt:"img",src:n(308).default})),Object(b.b)("div",{className:"admonition admonition-info alert alert--info"},Object(b.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(b.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(b.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"\ud604\uc7ac\ub294 \uad6c\uae00 \uc778\uc99d\ub9cc \uc9c0\uc6d0\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. GSuite \uacc4\uc815 \ud3ec\ud568 Gmail \uc544\uc774\ub514\ub85c\ub9cc \uc0ac\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4."))),Object(b.b)("p",null,"Google\uacc4\uc815\uc73c\ub85c \ub85c\uadf8\uc778 \ud569\ub2c8\ub2e4."),Object(b.b)("p",null,Object(b.b)("img",{alt:"img",src:n(309).default})),Object(b.b)("p",null,"\ucd5c\ucd08 \uc0ac\uc6a9\uc790\uc758 \uacbd\uc6b0 \uc544\ub798\uc640 \uac19\uc774 Welcome \ud654\uba74\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(b.b)("p",null,Object(b.b)("img",{alt:"img",src:n(310).default})),Object(b.b)("p",null,"NexClipper\ub294 \ubaa8\ub4e0 \ud074\ub7ec\uc2a4\ud130\uc758 \ub2e8\uc704\uac00 Zone\uc774\ub77c\ub294 \uac00\uc0c1\uc758 \uadf8\ub8f9 \uae30\ubc18\uc73c\ub85c \ub3d9\uc791\ud569\ub2c8\ub2e4. Account\uc5d0 \ub9f5\ud551\ub41c API KEY \ubc1c\uae09\uc744 \uc704\ud574 \ub2e4\uc74c \ub2e8\uacc4\ub97c \uc218\ud589\ud569\ub2c8\ub2e4."),Object(b.b)("p",null,"Zone Name\uc744 \uc785\ub825\ud569\ub2c8\ub2e4. Zone Name\uc740 \ub9ac\uc2a4\ud2b8\uc5d0 \ubcf4\uc5ec\uc9c0\ub294 \uac12\uc73c\ub85c \uc0ac\uc6a9\uc790\uac00 Zone \ub610\ub294 Cluster\ub97c \uad6c\ubd84\ud558\uae30 \uc704\ud55c \uc785\ub825\uac12\uc785\ub2c8\ub2e4."),Object(b.b)("p",null,Object(b.b)("img",{alt:"img",src:n(311).default})),Object(b.b)("p",null,"\ud504\ub85c\ube44\uc800\ub2dd\ud560 \ub300\uc0c1 \ud074\ub7ec\uc2a4\ud130 \ub610\ub294 \uc778\ud504\ub77c\ub97c \uc120\ud0dd\ud569\ub2c8\ub2e4. "),Object(b.b)("div",{className:"admonition admonition-info alert alert--info"},Object(b.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(b.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(b.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"\ud604\uc7ac\ub294 \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub7ec\uc2a4\ud130\ub9cc \uc9c0\uc6d0\ud569\ub2c8\ub2e4. \uc774\ud6c4 Baremetal, Instance \ub610\ub294 Laptop \ud658\uacbd \ubc0f Public Cloud \ud658\uacbd\ub3c4 \uc81c\uacf5\ud560 \uc608\uc815\uc785\ub2c8\ub2e4."))),Object(b.b)("p",null,Object(b.b)("img",{alt:"img",src:n(312).default})),Object(b.b)("p",null,"\uc120\ud0dd\ud55c \ud074\ub7ec\uc2a4\ud130\uc5d0 \uc124\uce58\ud560 Bootstrap \uc2a4\ud06c\ub9bd\ud2b8\uac00 \uc0dd\uc131\ub429\ub2c8\ub2e4."),Object(b.b)("p",null,Object(b.b)("img",{alt:"img",src:n(313).default})),Object(b.b)("p",null,"\uc0dd\uc131\ub41c \uc2a4\ud06c\ub9bd\ud2b8\ub97c zsh, bash \uad6c\ub3d9\uc774 \uac00\ub2a5\ud55c Bastion \ub610\ub294 Local\uc5d0\uc11c \uc2e4\ud589\ud569\ub2c8\ub2e4."),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'curl -sL gg.gg/provbee | K3S_SET=N K_API_KEY="370c659d7cd948f78eee3a0581a099ba" K_PLATFORM="kubernetes" K_MANAGER_URL="https://console.nexclipper.io:8090" K_ZONE_ID="76" bash\n')),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"Continue"),"\ub97c \ub20c\ub7ec \ub2e4\uc74c \ub2e8\uacc4\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4. "),Object(b.b)("p",null,"\uc124\uce58\ub418\ub294 \uc0c1\ud0dc\ub294 kubectl\uc744 \ud1b5\ud574 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(b.b)("p",null,"nexclipper \ub124\uc784\uc2a4\ud398\uc774\uc2a4\uc5d0\ub294 klevr \uc5d0\uc774\uc804\ud2b8 \ub370\ubaac\uc14b\uc640 provbee \ud30c\ub4dc\uac00 \uc0dd\uc131\ub429\ub2c8\ub2e4.   "),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"> kubectl get pod -n nexclipper\n\nNAME                READY   STATUS    RESTARTS   AGE\nklevr-agent-9r5z9   1/1     Running   0          59m\nklevr-agent-lcp2j   1/1     Running   0          59m\nprovbee             1/1     Running   0          59m\n")),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"monitoring")," \ub124\uc784\uc2a4\ud398\uc774\uc2a4\uc5d0\ub294 \ud504\ub85c\uba54\ud14c\uc6b0\uc2a4 \uc5d0\ucf54\uc2dc\uc2a4\ud15c\uc774 \uc124\uce58\ub429\ub2c8\ub2e4."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"prometheus-operator"),Object(b.b)("li",{parentName:"ul"},"prometheus"),Object(b.b)("li",{parentName:"ul"},"node-exporter"),Object(b.b)("li",{parentName:"ul"},"kube-state-metrics"),Object(b.b)("li",{parentName:"ul"},"alertmanager"),Object(b.b)("li",{parentName:"ul"},"grafana")),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"> kubectl get pod -n monitoring\nNAME                                   READY   STATUS    RESTARTS   AGE\nalertmanager-main-0                    2/2     Running   0          61m\nalertmanager-main-1                    2/2     Running   0          61m\nalertmanager-main-2                    2/2     Running   0          61m\ngrafana-67dfc5f687-w8kpw               1/1     Running   0          61m\nkube-state-metrics-69d4c7c69d-jrfxl    3/3     Running   0          61m\nnode-exporter-4cgzp                    2/2     Running   0          61m\nnode-exporter-768m9                    2/2     Running   0          61m\nnode-exporter-bvlhx                    2/2     Running   0          61m\nprometheus-adapter-66b855f564-tvb6r    1/1     Running   0          61m\nprometheus-k8s-0                       3/3     Running   1          61m\nprometheus-k8s-1                       3/3     Running   1          61m\nprometheus-operator-57859b8b59-ns7g2   2/2     Running   0          61m\n")),Object(b.b)("p",null,"\ub2e4\uc2dc \ucf58\uc194\ub85c \ub3cc\uc544\uc640 \ud504\ub85c\ube44\uc800\ub2dd\ub41c Zone \ubaa9\ub85d\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.   "),Object(b.b)("p",null,Object(b.b)("img",{alt:"img",src:n(314).default})),Object(b.b)("p",null,"\ud574\ub2f9 Zone\uc744 \ud074\ub9ad\ud558\uc2dc\uba74 \uc0c1\uc138 \ub0b4\uc5ed\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Zone Name"),Object(b.b)("li",{parentName:"ul"},"Management",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\ucd94\ud6c4 \uad00\ub9ac \uae30\ub2a5\uc774 \ud3ec\ud568\ub420 \uc601\uc5ed\uc73c\ub85c \ud604\uc7ac\ub294 provbee, grafana \uc0c1\ud0dc\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."))),Object(b.b)("li",{parentName:"ul"},"Platform Status",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\uc124\uce58\ub41c \ud50c\ub7ab\ud3fc\uacfc \uc5d0\uc774\uc804\ud2b8, \ud504\ub85c\uba54\ud14c\uc6b0\uc2a4 \uc0c1\ud0dc\ub97c \ud45c\uc2dc\ud558\ub294 \uc601\uc5ed\uc73c\ub85c \ud604\uc7ac\ub294 Agent \uc0c1\ud0dc\ub9cc\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."))),Object(b.b)("li",{parentName:"ul"},"Task Status",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\ud604\uc7ac \uac1c\ubc1c\uc911\uc778 \uae30\ub2a5\uc73c\ub85c NexClipper\uc5d0\uc11c \uc218\ud589\ub418\ub294 \ubaa8\ub4e0 Job\uacfc Task \uc0c1\ud0dc\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."))),Object(b.b)("li",{parentName:"ul"},"Zone Status",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"Zone\uc758 \uc0c1\ud0dc \uc815\ubcf4\ub85c \ud604\uc7ac\ub294 Agent\uac00 \ubc30\ud3ec\ub41c Node \ub300\uc218\uc640 Grafana Endpoint(NodePort)\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. ")))),Object(b.b)("p",null,Object(b.b)("img",{alt:"img",src:n(315).default})),Object(b.b)("p",null,"Zone Status\uc5d0 \ud45c\uae30\ub41c Grafana Endpoint\ub85c \uc811\uc18d\ud558\uba74 \ud504\ub85c\ube44\uc800\ub2dd\ub41c Grafana \uc811\uc18d \uc815\ubcf4 \ud655\uc778\uc774 \uac00\ub2a5\ud799\ub2c8\ub2e4.",Object(b.b)("br",{parentName:"p"}),"\n","\uae30\ubcf8 \uacc4\uc815 \uc815\ubcf4\ub294 \uc544\uc774\ub514, \ud328\uc2a4\uc6cc\ub4dc \ub3d9\uc77c\ud558\uac8c ",Object(b.b)("inlineCode",{parentName:"p"},"admin:admin"),"\uc73c\ub85c \uc124\uc815\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),Object(b.b)("p",null,Object(b.b)("img",{alt:"img",src:n(316).default})))}o.isMDXComponent=!0},181:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=o(n),m=a,d=s["".concat(c,".").concat(m)]||s[m]||u[m]||b;return n?r.a.createElement(d,i(i({ref:t},p),{},{components:n})):r.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,c=new Array(b);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<b;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},306:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/nc-start-19ea6ede37e3c91102fd674876390c66.png"},307:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/nc-landing-ed8d8a1876abcb18468fbbdb694c2aba.png"},308:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/nc-login-461593f6f79934c580d05fa15d0d9058.png"},309:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/nc-login-google-cd484c44561917652f8e4fb463412ba9.png"},310:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/nc-welcome-85aee74a77ea09b10a26e188b0a57a04.png"},311:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/nc-create-zone-bfcdd6dfa37fd2db45c1e1b6b824dd61.png"},312:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/nc-select-platform-9f5698f1dc67e09d0504c52cd30fc106.png"},313:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/nc-bootstrap-f6a14b5a21fa78981dbf71d0d0caab76.png"},314:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/nc-dashboard-6acb89e9f7cae6e9fa0d2ded33dd8ed2.png"},315:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/nc-detail-4fcfa96dcadcb6deb5e8ec16e4428f93.png"},316:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/nc-grafana-4d2415ec7fd4ca7b014bb59cc699422b.png"}}]);