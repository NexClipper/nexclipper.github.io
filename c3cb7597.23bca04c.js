(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{105:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/1*5hGUwC7FtdMqOxizd5UHFQ-4ad7b712b34963c48c21fa3ea5d12866.png"},81:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return l})),o.d(t,"metadata",(function(){return p})),o.d(t,"rightToc",(function(){return a})),o.d(t,"default",(function(){return b}));var r=o(2),n=o(6),c=(o(0),o(92)),l={title:"Prometheus Exporter & ExporterHub",author:"Jinwoong Kim",author_title:"NexClipper",author_url:"https://github.com/ddiiwoong",author_image_url:"https://avatars1.githubusercontent.com/u/37430952?v=4",description:"\ud504\ub85c\uba54\ud14c\uc6b0\uc2a4 \uc624\ud508\uc18c\uc2a4\uc758 \ud544\uc218 \uad6c\uc131\uc694\uc18c\uc778 \ud074\ub77c\uc774\uc5b8\ud2b8 \ub77c\uc774\ube0c\ub7ec\ub9ac, \uc775\uc2a4\ud3ec\ud130\uc5d0 \ub300\ud574\uc11c \uc774\uc57c\uae30 \ud558\uace0 \ud604\uc7ac \uac1c\ubc1c \uc911\uc778 [ExporterHub.io](http://exporterhub.io) \uacfc \ud5a5\ud6c4 NexClipper\uc758 \ub85c\ub4dc\ub9f5\ub3c4 \uac19\uc774 \uc124\uba85\ud569\ub2c8\ub2e4.",tags:["Prometheus","Exporter"]},p={permalink:"/blog/2020/09/03/prometheus-exporter-exporterhub",editUrl:"https://github.com/NexClipper/docs/edit/master/website/blog/blog/2020-09-03-prometheus-exporter-exporterhub.md",source:"@site/blog/2020-09-03-prometheus-exporter-exporterhub.md",description:"\ud504\ub85c\uba54\ud14c\uc6b0\uc2a4 \uc624\ud508\uc18c\uc2a4\uc758 \ud544\uc218 \uad6c\uc131\uc694\uc18c\uc778 \ud074\ub77c\uc774\uc5b8\ud2b8 \ub77c\uc774\ube0c\ub7ec\ub9ac, \uc775\uc2a4\ud3ec\ud130\uc5d0 \ub300\ud574\uc11c \uc774\uc57c\uae30 \ud558\uace0 \ud604\uc7ac \uac1c\ubc1c \uc911\uc778 [ExporterHub.io](http://exporterhub.io) \uacfc \ud5a5\ud6c4 NexClipper\uc758 \ub85c\ub4dc\ub9f5\ub3c4 \uac19\uc774 \uc124\uba85\ud569\ub2c8\ub2e4.",date:"2020-09-03T00:00:00.000Z",tags:[{label:"Prometheus",permalink:"/blog/tags/prometheus"},{label:"Exporter",permalink:"/blog/tags/exporter"}],title:"Prometheus Exporter & ExporterHub",readingTime:5.715,truncated:!1,nextItem:{title:"Welcome",permalink:"/blog/welcome"}},a=[{value:"Prometheus ecosystem components",id:"prometheus-ecosystem-components",children:[]},{value:"\ud074\ub77c\uc774\uc5b8\ud2b8 \ub77c\uc774\ube0c\ub7ec\ub9ac(Client Library)",id:"\ud074\ub77c\uc774\uc5b8\ud2b8-\ub77c\uc774\ube0c\ub7ec\ub9acclient-library",children:[]},{value:"\uc775\uc2a4\ud3ec\ud130(Exporter)",id:"\uc775\uc2a4\ud3ec\ud130exporter",children:[]},{value:"\ud074\ub77c\uc774\uc5b8\ud2b8 \ub77c\uc774\ube0c\ub7ec\ub9ac(Client Library) \uc0ac\uc6a9",id:"\ud074\ub77c\uc774\uc5b8\ud2b8-\ub77c\uc774\ube0c\ub7ec\ub9acclient-library-\uc0ac\uc6a9",children:[]},{value:"\uc775\uc2a4\ud3ec\ud130 \uc0ac\uc6a9",id:"\uc775\uc2a4\ud3ec\ud130-\uc0ac\uc6a9",children:[]},{value:"ExporterHub.io",id:"exporterhubio",children:[]},{value:"<strong>\uc815\ub9ac</strong>",id:"\uc815\ub9ac",children:[]},{value:"<strong>\ub125\uc2a4\ud074\ub77c\uc6b0\ub4dc \uc18c\uac1c \ubc0f \ucc44\uc6a9</strong>",id:"\ub125\uc2a4\ud074\ub77c\uc6b0\ub4dc-\uc18c\uac1c-\ubc0f-\ucc44\uc6a9",children:[]}],s={rightToc:a};function b(e){var t=e.components,l=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,l,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\uc624\ub298\uc740 Prometheus exporter\uc640 \uad00\ub828\ub41c \ub0b4\uc6a9\uc744 \ub2e4\ub904\ubcf4\ub824\uace0 \ud569\ub2c8\ub2e4."),Object(c.b)("h3",{id:"prometheus-ecosystem-components"},"Prometheus ecosystem components"),Object(c.b)("p",null,"\ud504\ub85c\uba54\ud14c\uc6b0\uc2a4\ub294 \uae30\ubcf8\uc801\uc73c\ub85c \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ub610\ub294 \uc368\ub4dc-\ud30c\ud2f0 \uc2dc\uc2a4\ud15c(\uc11c\ube44\uc2a4)\uc758 \uba54\ud2b8\ub9ad\uc744 \uacc4\uce21(instrumentation)\ud558\uac8c \ub418\ub294\ub370 \uc77c\ubc18\uc801\uc73c\ub85c\ub294 \ud0c0\uac9f(target) \uc5d4\ub4dc\ud3ec\uc778\ud2b8\ub97c \ud1b5\ud574 \uc2a4\ud06c\ub798\ud551(scrape)\ud558\uac8c \ub429\ub2c8\ub2e4."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\ud504\ub85c\uba54\ud14c\uc6b0\uc2a4 \ud3ec\ud2b8 \ud560\ub2f9 \ucc38\uace0 :\xa0",Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/prometheus/prometheus/wiki/Default-port-allocations"}),"https://github.com/prometheus/prometheus/wiki/Default-port-allocations"))),Object(c.b)("p",null,"\ubaa8\ub4e0 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774\ub098 \uc11c\ube44\uc2a4\ub4e4\uc774 \ud504\ub85c\uba54\ud14c\uc6b0\uc2a4 \ud638\ud658\ub418\ub294 \uba54\ud2b8\ub9ad\uc744 \uc0dd\uc131\ud574 \uc8fc\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uadf8\ub798\uc11c \ud504\ub85c\uba54\ud14c\uc6b0\uc2a4 \ud0c0\uac9f\uc774 \ub418\ub294 \uc218\uc9d1 \ub300\uc0c1\uc740 \ud06c\uac8c \ud074\ub77c\uc774\uc5b8\ud2b8 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc640 \uc775\uc2a4\ud3ec\ud130 \ud615\ud0dc\ub85c \uc218\uc9d1\uc774 \uac00\ub2a5\ud558\ub3c4\ub85d \ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("h3",{id:"\ud074\ub77c\uc774\uc5b8\ud2b8-\ub77c\uc774\ube0c\ub7ec\ub9acclient-library"},"\ud074\ub77c\uc774\uc5b8\ud2b8 \ub77c\uc774\ube0c\ub7ec\ub9ac(Client Library)"),Object(c.b)("p",null,"\uc11c\ube44\uc2a4\ub97c \uac1c\ubc1c\ud560 \ub54c \uac00\uc7a5 \uc88b\uc740 \ubc29\ubc95\uc740 \ud504\ub85c\uba54\ud14c\uc6b0\uc2a4 \ud074\ub77c\uc774\uc5b8\ud2b8 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc0ac\uc6a9\ud574 \uba54\ud2b8\ub9ad\uc744 \ucf54\ub4dc \uc778\ub77c\uc778 \uae30\ubc18\uc73c\ub85c \uc9c1\uc811 \uc791\uc131\ud558\uace0 \uacc4\uce21\ud558\ub294 \uac83\uc785\ub2c8\ub2e4."),Object(c.b)("p",null,"\uae30\ubcf8\uc801\uc73c\ub85c Go, Java(Scala), Python, Ruby \ub294 \uacf5\uc2dd \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\ud074\ub77c\uc774\uc5b8\ud2b8 \ub77c\uc774\ube0c\ub7ec\ub9ac : ",Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://prometheus.io/docs/instrumenting/clientlibs/"}),"https://prometheus.io/docs/instrumenting/clientlibs/"))),Object(c.b)("p",null,"\ube44\uacf5\uc2dd \ub77c\uc774\ube0c\ub7ec\ub9ac\ub294 \ucee4\ubba4\ub2c8\ud2f0\uc5d0\uc11c \uc790\uccb4\uc801\uc73c\ub85c \uc0ac\uc6a9\uc790\ub4e4\uc774 \uc6b4\uc601\uc744 \ud558\uae30 \ub54c\ubb38\uc5d0 \ucf54\ub4dc \uc720\uc9c0\ubcf4\uc218 \uad00\ub828\ud574\uc11c\ub3c4 \ubb38\uc81c\uac00 \ub420 \uc218 \uc788\uc73c\ubbc0\ub85c \ud56d\uc0c1 \ub9b4\ub9ac\uc988 \uc815\ubcf4\ub97c \ud655\uc778\ud558\uba74\uc11c \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4."),Object(c.b)("h3",{id:"\uc775\uc2a4\ud3ec\ud130exporter"},"\uc775\uc2a4\ud3ec\ud130(Exporter)"),Object(c.b)("p",null,"\uc775\uc2a4\ud3ec\ud130\ub294 \ucf54\ub4dc\ub97c \uc9c1\uc811 \uc218\uc815\ud560 \uc218 \uc5c6\ub294 \ud328\ud0a4\uc9d5\ub41c \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub098 \uc11c\ub4dc-\ud30c\ud2f0 \uc2dc\uc2a4\ud15c(\uc11c\ube44\uc2a4)\ub4f1\uc758 \uba54\ud2b8\ub9ad\uc744 \ub178\ucd9c(expose)\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubcf4\ud1b5 \ubca4\ub354\ub098 \uc11c\ube44\uc2a4 \ud68c\uc0ac\uc5d0\uc11c \uc9c1\uc811 \uba54\ud2b8\ub9ad\uc744 expose \ud558\ub294 \uacbd\uc6b0\ub3c4 \uc788\uc9c0\ub9cc \ub9ac\ub205\uc2a4 \uc2dc\uc2a4\ud15c \ucee4\ub110\uc774\ub098 \ub124\ud2b8\uc6cc\ud06c \uc7a5\ube44, \uc2a4\ud1a0\ub9ac\uc9c0, \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc640 \uac19\uc740 \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub97c \uacc4\uce21\ud558\uae30 \uc704\ud574\uc11c\ub294 \ubcc4\ub3c4\ub85c \uc775\uc2a4\ud3ec\ud130\uac00 \ud544\uc694\ud569\ub2c8\ub2e4."),Object(c.b)("p",null,"\uac70\uc758 \ub300\ubd80\ubd84\uc758 \ubaa8\ub4e0 \uc11c\ube44\uc2a4\ub294 \ucee4\ubba4\ub2c8\ud2f0\uc640 \uc0ac\uc6a9\uc790\ub4e4\uc774 \uc81c\uacf5\ud558\uace0 \uc788\uace0 \uc775\uc2a4\ud3ec\ud130 \ud604\ud669\uc740 \uc544\ub798 \ub9c1\ud06c\uc5d0\uc11c \ud655\uc778\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Exporter : ",Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://prometheus.io/docs/instrumenting/exporters/"}),"https://prometheus.io/docs/instrumenting/exporters/")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"http://exporterhub.io"}),"ExporterHub.io")," : \ub125\uc2a4\ud074\ub77c\uc6b0\ub4dc\uc5d0\uc11c \ucd5c\uadfc \ubc30\ud3ec\ud55c \uc775\uc2a4\ud3ec\ud130 \uce74\ud0c8\ub85c\uadf8 \ub9ac\uc2a4\ud2b8")),Object(c.b)("h3",{id:"\ud074\ub77c\uc774\uc5b8\ud2b8-\ub77c\uc774\ube0c\ub7ec\ub9acclient-library-\uc0ac\uc6a9"},"\ud074\ub77c\uc774\uc5b8\ud2b8 \ub77c\uc774\ube0c\ub7ec\ub9ac(Client Library) \uc0ac\uc6a9"),Object(c.b)("p",null,"\ud074\ub77c\uc774\uc5b8\ud2b8 \ub77c\uc774\ube0c\ub7ec\ub9ac \uc0ac\uc6a9\uc5d0 \ub300\ud55c \uac04\ub2e8\ud55c \uc608\uc2dc\ub97c \ubcf4\uc5ec\ub4dc\ub9ac\uace0\uc790 \ud569\ub2c8\ub2e4. \ucf54\ub4dc\ub294 \uc77c\uc804\uc5d0 spinnaker \uae30\ubc18 \uce74\ub098\ub9ac \ubc30\ud3ec \ud14c\uc2a4\ud2b8\ub54c \ud65c\uc6a9\ud588\ub358 \ucf54\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc600\uc2b5\ub2c8\ub2e4."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Python \ud074\ub77c\uc774\uc5b8\ud2b8 \ub77c\uc774\ube0c\ub7ec\ub9ac : ",Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/prometheus/client_python"}),"https://github.com/prometheus/client","_","python"))),Object(c.b)("p",null,"\ucf54\ub4dc\ub97c \uac04\ub2e8\ud788 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. app.py\ub294 python flask \uae30\ubc18\uc73c\ub85c \uc791\uc131\ud588\uace0 prometheus","_","client \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \ucd94\uac00\ud55c \uc0c1\ud0dc\ub85c \uba54\ud2b8\ub9ad HTTP endpoint(:8080)\ub97c \uc704\ud55c start","_","http","_","server \ub97c \uc0ac\uc6a9\ud588\uc2b5\ub2c8\ub2e4."),Object(c.b)("p",null,"\uac04\ub2e8\ud788 internal 500 error\ub97c \uc6d0\ud558\ub294 \ube44\uc728\ub85c \ubc1c\uc0dd\uc2dc\ud0a4\uace0 \uc778\uc704\uc801\uc778 \uba54\ud2b8\ub9ad\uc73c\ub85c \ud655\uc778\uc744 \uc704\ud574 success","_","rate \ubcc0\uc218\ub97c \ub9cc\ub4e4\uace0 Gauge, Counter \ub85c \uacc4\uce21\uc744 \uc704\ud574\uc11c Metric \uc11c\ubc84(:8000)\ub97c \uac04\ub2e8\ud558\uac8c \uad6c\uc131 \ud574\ubd24\uc2b5\ub2c8\ub2e4."),Object(c.b)("p",null,"Counter \uba54\ud2b8\ub9ad \ud0c0\uc785 \ud655\uc778\uc744 \ud558\uae30 \uc704\ud574 label\uc744 http","_","code='500', http","_","code='200' \ub85c \uc124\uc815\ud569\ub2c8\ub2e4."),Object(c.b)("p",null,"\ub9c8\uc9c0\ub9c9\uc73c\ub85c Gauge \uba54\ud2b8\ub9ad \ud0c0\uc785\uc73c\ub85c \uc120\uc5b8\ud558\uae30 \uc704\ud574 g.set(rate","_","responce) \ub85c \uc124\uc815\ub3c4 \ucd94\uac00\ud569\ub2c8\ub2e4."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"expose\ub418\ub294 endpoint\ub098 \uc775\uc2a4\ud3ec\ud130\ub294 \uc704\uc640 \uac19\uc774 \ub2e4\ub978 \uacbd\ub85c\ub85c \uc124\uc815\ud574\ub3c4 \ubb34\ubc29\ud558\uc9c0\ub9cc /metrics \uacbd\ub85c\ub97c \uad00\ub840\ucc98\ub7fc \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc608) ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"http://localhost:8000/metrics"}),"http://localhost:8000/metrics"))),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"#!/usr/bin/env python from random import randrange from flask import Flask from prometheus_client import start_http_server, Gauge, Counter import sys\n\napp = Flask('python-library-test') c = Counter('requests', 'Number of requests served, by http code', ['http_code']) g = Gauge('rate_requests', 'Rate of success requests')\n\nresponce_500 = 0 responce_200 = 0 rate_responce = 0 success_rate = sys.argv[1] # internal 500 error\ub97c \uc6d0\ud558\ub294 \ube44\uc728\ub85c \ubc1c\uc0dd\uc2dc\ud0a4\uae30 \uc704\ud55c \uc785\ub825 \uc778\uc790\n\n@app.route('/') def hello(): global responce_500 global responce_200 global rate_responce if randrange(1, 100) > int(success_rate): c.labels(http_code='500').inc() responce_500 = responce_500 + 1 rate_responce = responce_500 / (responce_500+responce_200) * 100 g.set(rate_responce) return \"Internal Server Error\\\\n\", 500 else: c.labels(http_code='200').inc() responce_200 = responce_200 + 1 rate_responce = responce_500 / (responce_500+responce_200) * 100 g.set(rate_responce) return \"Hello World!\\\\n\"\n\nstart_http_server(8000) app.run(host = '0.0.0.0', port = 8080)\n")),Object(c.b)("p",null,"\ud14c\uc2a4\ud2b8 \uc6a9\ub3c4\uc774\ub2c8 \uac04\ub2e8\ud558\uac8c \ub85c\uceec\uc5d0\uc11c \uc2e4\ud589\ud569\ub2c8\ub2e4."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'$ pip install flask prometheus_client\n$ python app.py 50 # internal 500 error\ub97c \uc6d0\ud558\ub294 \ube44\uc728\ub85c \ubc1c\uc0dd\uc2dc\ud0a4\uae30 \uc704\ud55c \uc785\ub825 \uc778\uc790\n * Serving Flask app "python-library-test" (lazy loading)\n * Environment: production\n   WARNING: This is a development server. Do not use it in a production deployment.\n   Use a production WSGI server instead.\n * Debug mode: off\n * Running on <http://0.0.0.0:8080/> (Press CTRL+C to quit)\n')),Object(c.b)("p",null,"\uba54\ud2b8\ub9ad\uc744 \uc218\uc9d1\ud558\uae30 \uc704\ud574 \uac04\ub2e8\ud558\uac8c ab \uba85\ub839\uc744 \ud65c\uc6a9\ud558\uc5ec \ubc18\ubcf5 \ud638\ucd9c\ud569\ub2c8\ub2e4."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"$ ab -n 1000 <http://localhost:8080/>\n...\nServer Software:        Werkzeug/1.0.1\nServer Hostname:        localhost\nServer Port:            8080\n\nDocument Path:          /\nDocument Length:        22 bytes\n\nConcurrency Level:      1\nTime taken for tests:   1.775 seconds\nComplete requests:      1000\nFailed requests:        0\nNon-2xx responses:      505\n...\n")),Object(c.b)("p",null,"\uacb0\uacfc\uc5d0\uc11c \uc790\uc138\ud788 \ubd10\uc57c\ud558\ub294 \uac83\uc740 Complete requests, Non-2xx responses \uc785\ub2c8\ub2e4."),Object(c.b)("p",null,"\uc785\ub825\ubc1b\uc740 \uc778\uc790\uc778 50\ud504\ub85c \ud655\ub960\ub85c 1000\ubc88 request\ub97c \ud558\uc5ec \uc5d0\ub7ec\ub97c \ubc1c\uc0dd\uc2dc\ucf30\uae30 \ub54c\ubb38\uc5d0 \uc131\uacf5\uc740 495\ubc88, \uc5d0\ub7ec\ub294 505\ubc88 \ubc1c\uc0dd\ud55c \uac83\uc73c\ub85c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("p",null,"\uba54\ud2b8\ub9ad\uc744 \ud655\uc778\ud558\uae30 \uc704\ud574 expose\ub41c 8000 \ud3ec\ud2b8\ub85c \uc811\uc18d\ud574 \ubd05\ub2c8\ub2e4."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'$ curl localhost:8000 # HELP python_gc_objects_collected_total Objects collected during gc # TYPE python_gc_objects_collected_total counter python_gc_objects_collected_total{generation="0"} 18055.0 python_gc_objects_collected_total{generation="1"} 2461.0 python_gc_objects_collected_total{generation="2"} 0.0 # HELP python_gc_objects_uncollectable_total Uncollectable object found during GC # TYPE python_gc_objects_uncollectable_total counter python_gc_objects_uncollectable_total{generation="0"} 0.0 python_gc_objects_uncollectable_total{generation="1"} 0.0 python_gc_objects_uncollectable_total{generation="2"} 0.0 # HELP python_gc_collections_total Number of times this generation was collected # TYPE python_gc_collections_total counter python_gc_collections_total{generation="0"} 82.0 python_gc_collections_total{generation="1"} 7.0 python_gc_collections_total{generation="2"} 0.0 # HELP python_info Python platform information # TYPE python_info gauge python_info{implementation="CPython",major="3",minor="8",patchlevel="3",version="3.8.3"} 1.0 # HELP requests_total Number of requests served, by http code # TYPE requests_total counter requests_total{http_code="500"} 505.0 requests_total{http_code="200"} 495.0 # HELP requests_created Number of requests served, by http code # TYPE requests_created gauge requests_created{http_code="500"} 1.5990454944853382e+09 requests_created{http_code="200"} 1.599045494488697e+09 # HELP rate_requests Rate of success requests # TYPE rate_requests gauge rate_requests 50.5\n')),Object(c.b)("p",null,"\uc81c\uac00 \uc791\uc131\ud55c Counter\uc778 http","_","code='500', http","_","code='200' \ub97c \ubcf4\uba74 \uc704 ab \uc5d0\uc11c \ud655\uc778\ud55c \uba54\ud2b8\ub9ad\uacfc \ub3d9\uc77c\ud568\uc744 \uc54c \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("p",null,"\uadf8\ub9ac\uace0 Gauge\ub85c \uc124\uc815\ud55c rate","_","requests\ub97c \ubcf4\uba74 success rate\uac00 50\ud504\ub85c\uc758 \ube44\uc728\uc784\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("h3",{id:"\uc775\uc2a4\ud3ec\ud130-\uc0ac\uc6a9"},"\uc775\uc2a4\ud3ec\ud130 \uc0ac\uc6a9"),Object(c.b)("p",null,"\uc800\ub294 \ud604\uc7ac MacOS\ub97c \uc0ac\uc6a9\uc911\uc774\uace0 \ud638\uc2a4\ud2b8 \uba54\ud2b8\ub9ad\uc744 \ud655\uc778\ud558\uae30 \uc704\ud574 node","_","exporter\ub97c \uc0ac\uc6a9\ud558\ub824\uace0 \ud569\ub2c8\ub2e4."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"node","_","exporter : ",Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/prometheus/node_exporter"}),"https://github.com/prometheus/node","_","exporter"))),Object(c.b)("p",null,"node","_","exporter\ub294 \ud504\ub85c\uba54\ud14c\uc6b0\uc2a4 \ucee4\ubba4\ub2c8\ud2f0\uc5d0\uc11c \uacf5\uc2dd\uc801\uc73c\ub85c \uc81c\uacf5\ud558\uace0 \uc788\ub294 \uc775\uc2a4\ud3ec\ud130\ub85c \uc800\ub294 \ubc14\uc774\ub108\ub9ac\ub97c \ubc1b\uc544\uc11c \uac19\ub2e8\ud558\uac8c \uc2e4\ud589\ud558\ub824\uace0 \ud569\ub2c8\ub2e4."),Object(c.b)("p",null,"\uc704\uc5d0\uc11c\ub3c4 \uc7a0\uae50 \uc5b8\uae09\ud588\ub4ef\uc774 \uc774\ubc88\uc5d0 \ub125\uc2a4\ud074\ub77c\uc6b0\ub4dc\uc5d0\uc11c \ucee4\ubba4\ub2c8\ud2f0 \uc0ac\uc6a9\uc790\ub4e4\uc744 \uc704\ud574 \ud050\ub808\uc774\uc158 \ud398\uc774\uc9c0\ub85c \uc624\ud508\ud55c ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://exporterhub.io"}),"https://exporterhub.io")," \uc5d0\uc11c Node Exporter \ub97c \ud0d0\uc0c9\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4."),Object(c.b)("p",null,Object(c.b)("img",{src:o(105).default})),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/NexClipper/exporterhub.io/blob/master/lists/node/README.md"}),"https://github.com/NexClipper/exporterhub.io/blob/master/lists/node/README.md")),Object(c.b)("p",null,"\ub9c1\ud06c\ub41c \uc704 readme \ud398\uc774\uc9c0\ub97c \ucc38\uace0\ud574\uc11c macOS \ub85c\uceec\uc5d0 node","_","exporter\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4. \ubc14\uc774\ub108\ub9ac\ub85c \ub418\uc5b4 \uc788\uae30 \ub54c\ubb38\uc5d0 \ucee8\ud14c\uc774\ub108\ub85c \uc2e4\ud589\ud574\ub3c4 \ub418\uc9c0\ub9cc mac\uc5d0\uc11c\ub294 \ud638\uc2a4\ud2b8 \ub124\ud2b8\uc6cc\ud06c \uad00\ub828\uac00 \uc788\uc5b4\uc11c \uc9c1\uc811 \uc2e4\ud589\ud588\uc2b5\ub2c8\ub2e4."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'wget <https://github.com/prometheus/node_exporter/releases/download/v1.0.1/node_exporter-1.0.1.darwin-amd64.tar.gz> tar -xzf node_exporter-1.0.1.darwin-amd64.tar.gz cd node_exporter-1.0.1.darwin-amd64 ./node_exporter\n\nlevel=info ts=2020-09-02T12:31:03.309Z caller=node_exporter.go:177 msg="Starting node_exporter" version="(version=1.0.1, branch=HEAD, revision=3715be6ae899f2a9b9dbfd9c39f3e09a7bd4559f)" level=info ts=2020-09-02T12:31:03.309Z caller=node_exporter.go:178 msg="Build context" build_context="(go=go1.14.4, user=root@4c8e5c628328, date=20200616-12:52:07)" level=info ts=2020-09-02T12:31:03.309Z caller=node_exporter.go:105 msg="Enabled collectors" level=info ts=2020-09-02T12:31:03.309Z caller=node_exporter.go:112 collector=boottime level=info ts=2020-09-02T12:31:03.310Z caller=node_exporter.go:112 collector=cpu level=info ts=2020-09-02T12:31:03.310Z caller=node_exporter.go:112 collector=diskstats level=info ts=2020-09-02T12:31:03.310Z caller=node_exporter.go:112 collector=filesystem level=info ts=2020-09-02T12:31:03.310Z caller=node_exporter.go:112 collector=loadavg level=info ts=2020-09-02T12:31:03.310Z caller=node_exporter.go:112 collector=meminfo level=info ts=2020-09-02T12:31:03.310Z caller=node_exporter.go:112 collector=netdev level=info ts=2020-09-02T12:31:03.310Z caller=node_exporter.go:112 collector=textfile level=info ts=2020-09-02T12:31:03.310Z caller=node_exporter.go:112 collector=time level=info ts=2020-09-02T12:31:03.310Z caller=node_exporter.go:112 collector=uname level=info ts=2020-09-02T12:31:03.310Z caller=node_exporter.go:191 msg="Listening on" address=:9100 level=info ts=2020-09-02T12:31:03.310Z caller=tls_config.go:170 msg="TLS is disabled and it cannot be enabled on the fly." http2=false\n')),Object(c.b)("p",null,"\uae30\ubcf8\uc801\uc73c\ub85c \uc704\uc5d0\uc11c\ub3c4 \uc5b8\uae09\ud588\uc9c0\ub9cc \uc608\uc57d\ub41c \ud3ec\ud2b8\uc815\ubcf4\ub4e4\uc774 \uc788\uace0 /metrics \uc5d4\ub4dc\ud3ec\uc778\ud2b8\ub85c expose \ub418\ubbc0\ub85c ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"http://localhost:9100/metrics"}),"http://localhost:9100/metrics")," \uc5d0 \uc811\uc18d\ud574 \ubd05\ub2c8\ub2e4. \ud604\uc7ac \uc0ac\uc6a9\uc911\uc778 macbook\uc758 \uba38\uc2e0 \uba54\ud2b8\ub9ad\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'$ curl <http://localhost:9100/metrics>\n...\n# HELP node_cpu_seconds_total Seconds the cpus spent in each mode.\n# TYPE node_cpu_seconds_total counter\nnode_cpu_seconds_total{cpu="0",mode="idle"} 25639.47\nnode_cpu_seconds_total{cpu="0",mode="nice"} 0\nnode_cpu_seconds_total{cpu="0",mode="system"} 6361.26\nnode_cpu_seconds_total{cpu="0",mode="user"} 12627.86\nnode_cpu_seconds_total{cpu="1",mode="idle"} 37124.82\nnode_cpu_seconds_total{cpu="1",mode="nice"} 0\nnode_cpu_seconds_total{cpu="1",mode="system"} 2697.6\nnode_cpu_seconds_total{cpu="1",mode="user"} 4805.51\nnode_cpu_seconds_total{cpu="2",mode="idle"} 26546.08\nnode_cpu_seconds_total{cpu="2",mode="nice"} 0\nnode_cpu_seconds_total{cpu="2",mode="system"} 5505.62\nnode_cpu_seconds_total{cpu="2",mode="user"} 12576.23\nnode_cpu_seconds_total{cpu="3",mode="idle"} 37708.71\nnode_cpu_seconds_total{cpu="3",mode="nice"} 0\nnode_cpu_seconds_total{cpu="3",mode="system"} 2413.04\nnode_cpu_seconds_total{cpu="3",mode="user"} 4506.18\n...\n')),Object(c.b)("p",null,"\uc774\ud6c4 \ud504\ub85c\uba54\ud14c\uc6b0\uc2a4\uc640 \uc5f0\ub3d9\ud558\ub294 \uacfc\uc815\uc740 \uc124\uc815 \ubcc0\uacbd \uc0ac\ud56d\uc774\ubbc0\ub85c \ub530\ub85c \uc5b8\uae09\ud558\uc9c0\ub294 \uc54a\uaca0\uc2b5\ub2c8\ub2e4."),Object(c.b)("h3",{id:"exporterhubio"},"ExporterHub.io"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"http://exporterhub.io/"}),"ExporterHub.io")," \ub294 \ud504\ub85c\uba54\ud14c\uc6b0\uc2a4 \ucee4\ubba4\ub2c8\ud2f0 \uc720\uc800\ub97c \uc704\ud574 \uc81c\uc791\ub418\uc5c8\uace0, awesome \ud504\ub85c\uc81d\ud2b8\uc640 \uc720\uc0ac\ud558\uac8c \ud050\ub808\uc774\uc158 \ub9ac\uc2a4\ud2b8\ub97c \uc81c\uacf5\ud558\ub294 \ubaa9\uc801\uc73c\ub85c \ub9cc\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4."),Object(c.b)("p",null,"\ub2e8\uc21c\ud788 \ud050\ub808\uc774\uc158 \uc815\ubcf4 \ubfd0\ub9cc \uc544\ub2c8\ub77c \uc704\uc640 \uac19\uc740 \uac04\ub2e8\ud55c \uc124\uce58 \uac00\uc774\ub4dc, alertrule \uc124\uc815, \ub300\uc2dc\ubcf4\ub4dc \uad00\ub828 \uc815\ubcf4\ub4e4\uc744 \ud55c\ubc88\uc5d0 \ubcfc \uc218 \uc788\ub3c4\ub85d \ub9cc\ub4e4\uace0 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("p",null,"\ud5a5\ud6c4 \ub85c\ub4dc\ub9f5\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\uc775\uc2a4\ud3ec\ud130 \ubcc4 alert-rule \uc0dd\uc131"),Object(c.b)("li",{parentName:"ul"},"\uac80\uc0c9, \ud398\uc774\uc9c0 \uace0\ub3c4\ud654, \ub9b4\ub9ac\uc988 \uc5c5\ub370\uc774\ud2b8 \uc5f0\ub3d9"),Object(c.b)("li",{parentName:"ul"},"NexClipper Cloud \uc11c\ube44\uc2a4 \ud1b5\ud569")),Object(c.b)("p",null,"\ud558\ubc18\uae30 \uc911\uc5d0 NexClipper Cloud \uc11c\ube44\uc2a4\ub97c \uc624\ud508 \uc608\uc815\uc774\uace0 \ub0b4\ub144 \uc815\uc2dd \ucd9c\uc2dc\uc804\uc5d0 \ud504\ub85c\uba54\ud14c\uc6b0\uc2a4 \uc5d0\ucf54\uc2dc\uc2a4\ud15c \uad00\ub828 \uc5ec\ub7ec\uac00\uc9c0 \ud3b8\uc758 \uae30\ub2a5\uc744 \ud3ec\ud568 \ud560 \uc608\uc815\uc785\ub2c8\ub2e4."),Object(c.b)("p",null,"\uc9c1\uc811 \uac1c\ubc1c\uc911\uc778 exporter\uac00 \uc788\uc73c\uc2dc\uac70\ub098 \uc218\uc815\uc774\ub098 \uac1c\uc120\uc0ac\ud56d\uc774 \uc788\uc73c\uc2dc\uba74 \uc5b8\uc81c\ub4e0\uc9c0 issue, PR \ubd80\ud0c1\ub4dc\ub9bd\ub2c8\ub2e4."),Object(c.b)("h3",{id:"\uc815\ub9ac"},Object(c.b)("strong",{parentName:"h3"},"\uc815\ub9ac")),Object(c.b)("p",null,"\uc774\ubc88 \ud3ec\uc2a4\ud305\uc5d0\uc11c\ub294 \ud504\ub85c\uba54\ud14c\uc6b0\uc2a4 \uc624\ud508\uc18c\uc2a4\uc758 \ud544\uc218 \uad6c\uc131\uc694\uc18c\uc778 \ud074\ub77c\uc774\uc5b8\ud2b8 \ub77c\uc774\ube0c\ub7ec\ub9ac, \uc775\uc2a4\ud3ec\ud130\uc5d0 \ub300\ud574\uc11c \uc774\uc57c\uae30\ud574\ubd24\uc2b5\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \ud604\uc7ac \uac1c\ubc1c \uc911\uc778 ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"http://exporterhub.io"}),"ExporterHub.io")," \uacfc \ud5a5\ud6c4 NexClipper\uc758 \ub85c\ub4dc\ub9f5\ub3c4 \uac19\uc774 \uc124\uba85\ub4dc\ub838\uc2b5\ub2c8\ub2e4."),Object(c.b)("p",null,"\ube14\ub85c\uadf8 \ub0b4\uc6a9\uc744 \ud3ec\ud568\ud55c \uc800\ud76c\uc758 \ubaa8\ub4e0 \uae30\uc220\uacfc \uc81c\ud488\uc5d0 \ub300\ud55c \ub2e4\uc591\ud55c \ud53c\ub4dc\ubc31 \ubd80\ud0c1\ub4dc\ub9ac\uace0, \uc5b8\uc81c\ub4e0\uc9c0 \uad81\uae08\ud55c \uc0ac\ud56d\uc774 \uc788\uc73c\uc2dc\uac70\ub098 \ucc44\uc6a9 \ubc0f \uae30\uc220 \ubbf8\ud305 \ub4f1 \ud544\uc694\ud55c \uc0ac\ud56d\uc774 \uc788\uc73c\uc2dc\uba74 \uc5b8\uc81c\ub4e0\uc9c0 ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"mailto:support@nexclipper.io"}),"support@nexclipper.io")," \ub85c \uc5f0\ub77d \uc8fc\uc2dc\uba74 \ube60\ub978 \uc2dc\uac04 \ub0b4\uc5d0 \ud68c\uc2e0 \ub4dc\ub9ac\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4."),Object(c.b)("h3",{id:"\ub125\uc2a4\ud074\ub77c\uc6b0\ub4dc-\uc18c\uac1c-\ubc0f-\ucc44\uc6a9"},Object(c.b)("strong",{parentName:"h3"},"\ub125\uc2a4\ud074\ub77c\uc6b0\ub4dc \uc18c\uac1c \ubc0f \ucc44\uc6a9")),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.nexclipper.io/"}),"\ub125\uc2a4\ud074\ub77c\uc6b0\ub4dc"),"\ub294 \ucee8\ud14c\uc774\ub108 \uae30\ubc18 \ud074\ub77c\uc6b0\ub4dc \uae30\uc220 \ud68c\uc0ac\uc785\ub2c8\ub2e4."),Object(c.b)("p",null,"2020\ub144 \ud558\ubc18\uae30\ubd80\ud130 \ubcf8\uaca9\uc801\uc778 \uae00\ub85c\ubc8c \uc0ac\uc5c5\uc744 \uc704\ud574 \ud604\uc7ac \ubbf8\uad6d \ubc95\uc778 \uc124\ub9bd\uc744 \uc9c4\ud589 \uc911\uc774\uba70 \ub2a5\ub825\uc788\ub294 \ubd84\ub4e4\uc744 \ubaa8\uc2dc\uace0 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.notion.so/Engineer-a83352e7b6a24bbbb1ac77bf83a7026b"}),"\uac1c\ubc1c\uc790 (Engineer) \ubd80\ubb38")))}b.isMDXComponent=!0},92:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return m}));var r=o(0),n=o.n(r);function c(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){c(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)o=c[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)o=c[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=n.a.createContext({}),b=function(e){var t=n.a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):p(p({},t),e)),o},u=function(e){var t=b(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=b(o),d=r,m=u["".concat(l,".").concat(d)]||u[d]||i[d]||c;return o?n.a.createElement(m,p(p({ref:t},s),{},{components:o})):n.a.createElement(m,p({ref:t},s))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=o.length,l=new Array(c);l[0]=d;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<c;s++)l[s]=o[s];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"}}]);