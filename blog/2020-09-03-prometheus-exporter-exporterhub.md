---
title: "Prometheus Exporter & ExporterHub"
author: Jinwoong Kim
author_title: NexClipper
author_url: https://github.com/ddiiwoong
author_image_url: https://avatars1.githubusercontent.com/u/37430952?v=4
description: "프로메테우스 오픈소스의 필수 구성요소인 클라이언트 라이브러리, 익스포터에 대해서 이야기 하고 현재 개발 중인 [ExporterHub.io](http://exporterhub.io) 과 향후 NexClipper의 로드맵도 같이 설명합니다."
tags: [Prometheus, Exporter]
---



오늘은 Prometheus exporter와 관련된 내용을 다뤄보려고 합니다.

<!--truncate-->

### Prometheus ecosystem components

프로메테우스는 기본적으로 애플리케이션 또는 써드-파티 시스템(서비스)의 메트릭을 계측(instrumentation)하게 되는데 일반적으로는 타겟(target) 엔드포인트를 통해 스크래핑(scrape)하게 됩니다.

- 프로메테우스 포트 할당 참고 : [https://github.com/prometheus/prometheus/wiki/Default-port-allocations](https://github.com/prometheus/prometheus/wiki/Default-port-allocations)

모든 애플리케이션이나 서비스들이 프로메테우스 호환되는 메트릭을 생성해 주지 않습니다. 그래서 프로메테우스 타겟이 되는 수집 대상은 크게 클라이언트 라이브러리와 익스포터 형태로 수집이 가능하도록 하고 있습니다.

### 클라이언트 라이브러리(Client Library)

서비스를 개발할 때 가장 좋은 방법은 프로메테우스 클라이언트 라이브러리를 사용해 메트릭을 코드 인라인 기반으로 직접 작성하고 계측하는 것입니다.

기본적으로 Go, Java(Scala), Python, Ruby 는 공식 라이브러리를 제공합니다.

- 클라이언트 라이브러리 : [https://prometheus.io/docs/instrumenting/clientlibs/](https://prometheus.io/docs/instrumenting/clientlibs/)

비공식 라이브러리는 커뮤니티에서 자체적으로 사용자들이 운영을 하기 때문에 코드 유지보수 관련해서도 문제가 될 수 있으므로 항상 릴리즈 정보를 확인하면서 사용해야 합니다.

### 익스포터(Exporter)

익스포터는 코드를 직접 수정할 수 없는 패키징된 소프트웨어나 서드-파티 시스템(서비스)등의 메트릭을 노출(expose)할 수 있습니다. 보통 벤더나 서비스 회사에서 직접 메트릭을 expose 하는 경우도 있지만 리눅스 시스템 커널이나 네트워크 장비, 스토리지, 데이터베이스와 같은 소프트웨어를 계측하기 위해서는 별도로 익스포터가 필요합니다.

거의 대부분의 모든 서비스는 커뮤니티와 사용자들이 제공하고 있고 익스포터 현황은 아래 링크에서 확인이 가능합니다.

- Exporter : [https://prometheus.io/docs/instrumenting/exporters/](https://prometheus.io/docs/instrumenting/exporters/)
- [ExporterHub.io](http://exporterhub.io) : 넥스클라우드에서 최근 배포한 익스포터 카탈로그 리스트

### 클라이언트 라이브러리(Client Library) 사용

클라이언트 라이브러리 사용에 대한 간단한 예시를 보여드리고자 합니다. 코드는 일전에 spinnaker 기반 카나리 배포 테스트때 활용했던 코드를 사용하였습니다.

- Python 클라이언트 라이브러리 : [https://github.com/prometheus/client\_python](https://github.com/prometheus/client_python)

코드를 간단히 살펴보겠습니다. app.py는 python flask 기반으로 작성했고 prometheus\_client 라이브러리를 추가한 상태로 메트릭 HTTP endpoint(:8080)를 위한 start\_http\_server 를 사용했습니다.

간단히 internal 500 error를 원하는 비율로 발생시키고 인위적인 메트릭으로 확인을 위해 success\_rate 변수를 만들고 Gauge, Counter 로 계측을 위해서 Metric 서버(:8000)를 간단하게 구성 해봤습니다.

Counter 메트릭 타입 확인을 하기 위해 label을 http\_code='500', http\_code='200' 로 설정합니다.

마지막으로 Gauge 메트릭 타입으로 선언하기 위해 g.set(rate\_responce) 로 설정도 추가합니다.

> expose되는 endpoint나 익스포터는 위와 같이 다른 경로로 설정해도 무방하지만 /metrics 경로를 관례처럼 사용합니다. 예) [http://localhost:8000/metrics](http://localhost:8000/metrics)

```python
#!/usr/bin/env python
from random import randrange
from flask import Flask
from prometheus_client import start_http_server, Gauge, Counter
import sys
app = Flask('python-library-test')
c = Counter('requests', 'Number of requests served, by http code', ['http_code'])
g = Gauge('rate_requests', 'Rate of success requests')
responce_500 = 0
responce_200 = 0
rate_responce = 0
success_rate = sys.argv[1] # internal 500 error를 원하는 비율로 발생시키기 위한 입력 인자
@app.route('/')
def hello():
    global responce_500
    global responce_200
    global rate_responce
    if randrange(1, 100) > int(success_rate):
        c.labels(http_code='500').inc()
        responce_500 = responce_500 + 1
        rate_responce = responce_500 / (responce_500+responce_200) * 100
        g.set(rate_responce)
        return "Internal Server Error\\n", 500
    else:
        c.labels(http_code='200').inc()
        responce_200 = responce_200 + 1
        rate_responce = responce_500 / (responce_500+responce_200) * 100
        g.set(rate_responce)
        return "Hello World!\\n"
start_http_server(8000)
app.run(host = '0.0.0.0', port = 8080)
```

테스트 용도이니 간단하게 로컬에서 실행합니다.

```sh
$ pip install flask prometheus_client
$ python app.py 50 # internal 500 error를 원하는 비율로 발생시키기 위한 입력 인자
 * Serving Flask app "python-library-test" (lazy loading)
 * Environment: production
   WARNING: This is a development server. Do not use it in a production deployment.
   Use a production WSGI server instead.
 * Debug mode: off
 * Running on <http://0.0.0.0:8080/> (Press CTRL+C to quit)
```

메트릭을 수집하기 위해 간단하게 ab 명령을 활용하여 반복 호출합니다.

```sh
$ ab -n 1000 http://localhost:8080/
...
Server Software:        Werkzeug/1.0.1
Server Hostname:        localhost
Server Port:            8080

Document Path:          /
Document Length:        22 bytes

Concurrency Level:      1
Time taken for tests:   1.775 seconds
Complete requests:      1000
Failed requests:        0
Non-2xx responses:      505
...
```

결과에서 자세히 봐야하는 것은 Complete requests, Non-2xx responses 입니다.

입력받은 인자인 50프로 확률로 1000번 request를 하여 에러를 발생시켰기 때문에 성공은 495번, 에러는 505번 발생한 것으로 확인할 수 있습니다.

메트릭을 확인하기 위해 expose된 8000 포트로 접속해 봅니다.

```sh
$ curl localhost:8000
# HELP python_gc_objects_collected_total Objects collected during gc
# TYPE python_gc_objects_collected_total counter
python_gc_objects_collected_total{generation="0"} 18055.0
python_gc_objects_collected_total{generation="1"} 2461.0
python_gc_objects_collected_total{generation="2"} 0.0
# HELP python_gc_objects_uncollectable_total Uncollectable object found during GC
# TYPE python_gc_objects_uncollectable_total counter
python_gc_objects_uncollectable_total{generation="0"} 0.0
python_gc_objects_uncollectable_total{generation="1"} 0.0
python_gc_objects_uncollectable_total{generation="2"} 0.0
# HELP python_gc_collections_total Number of times this generation was collected
# TYPE python_gc_collections_total counter
python_gc_collections_total{generation="0"} 82.0
python_gc_collections_total{generation="1"} 7.0
python_gc_collections_total{generation="2"} 0.0
# HELP python_info Python platform information
# TYPE python_info gauge
python_info{implementation="CPython",major="3",minor="8",patchlevel="3",version="3.8.3"} 1.0
# HELP requests_total Number of requests served, by http code
# TYPE requests_total counter
requests_total{http_code="500"} 505.0
requests_total{http_code="200"} 495.0
# HELP requests_created Number of requests served, by http code
# TYPE requests_created gauge
requests_created{http_code="500"} 1.5990454944853382e+09
requests_created{http_code="200"} 1.599045494488697e+09
# HELP rate_requests Rate of success requests
# TYPE rate_requests gauge
rate_requests 50.5
```

제가 작성한 Counter인 http\_code='500', http\_code='200' 를 보면 위 ab 에서 확인한 메트릭과 동일함을 알 수 있습니다.

그리고 Gauge로 설정한 rate\_requests를 보면 success rate가 50프로의 비율임을 확인할 수 있습니다.

### 익스포터 사용

저는 현재 MacOS를 사용중이고 호스트 메트릭을 확인하기 위해 node\_exporter를 사용하려고 합니다.

- node\_exporter : [https://github.com/prometheus/node\_exporter](https://github.com/prometheus/node_exporter)

node\_exporter는 프로메테우스 커뮤니티에서 공식적으로 제공하고 있는 익스포터로 저는 바이너리를 받아서 같단하게 실행하려고 합니다.

위에서도 잠깐 언급했듯이 이번에 넥스클라우드에서 커뮤니티 사용자들을 위해 큐레이션 페이지로 오픈한 [https://exporterhub.io](https://exporterhub.io) 에서 Node Exporter 를 탐색해보겠습니다.

![](images/1*5hGUwC7FtdMqOxizd5UHFQ.png)

[https://github.com/NexClipper/exporterhub.io/blob/master/lists/node/README.md](https://github.com/NexClipper/exporterhub.io/blob/master/lists/node/README.md)

링크된 위 readme 페이지를 참고해서 macOS 로컬에 node\_exporter를 실행합니다. 바이너리로 되어 있기 때문에 컨테이너로 실행해도 되지만 mac에서는 호스트 네트워크 관련가 있어서 직접 실행했습니다.

```sh
$ wget  https://github.com/prometheus/node_exporter/releases/download/v1.0.1/node_exporter-1.0.1.darwin-amd64.tar.gz
$ tar -xzf node_exporter-1.0.1.darwin-amd64.tar.gz
$ cd node_exporter-1.0.1.darwin-amd64
$ ./node_exporter
level=info ts=2020-09-02T12:31:03.309Z caller=node_exporter.go:177 msg="Starting node_exporter" version="(version=1.0.1, branch=HEAD, revision=3715be6ae899f2a9b9dbfd9c39f3e09a7bd4559f)"
level=info ts=2020-09-02T12:31:03.309Z caller=node_exporter.go:178 msg="Build context" build_context="(go=go1.14.4, user=root@4c8e5c628328, date=20200616-12:52:07)"
level=info ts=2020-09-02T12:31:03.309Z caller=node_exporter.go:105 msg="Enabled collectors"
level=info ts=2020-09-02T12:31:03.309Z caller=node_exporter.go:112 collector=boottime
level=info ts=2020-09-02T12:31:03.310Z caller=node_exporter.go:112 collector=cpu
level=info ts=2020-09-02T12:31:03.310Z caller=node_exporter.go:112 collector=diskstats
level=info ts=2020-09-02T12:31:03.310Z caller=node_exporter.go:112 collector=filesystem
level=info ts=2020-09-02T12:31:03.310Z caller=node_exporter.go:112 collector=loadavg
level=info ts=2020-09-02T12:31:03.310Z caller=node_exporter.go:112 collector=meminfo
level=info ts=2020-09-02T12:31:03.310Z caller=node_exporter.go:112 collector=netdev
level=info ts=2020-09-02T12:31:03.310Z caller=node_exporter.go:112 collector=textfile
level=info ts=2020-09-02T12:31:03.310Z caller=node_exporter.go:112 collector=time
level=info ts=2020-09-02T12:31:03.310Z caller=node_exporter.go:112 collector=uname
level=info ts=2020-09-02T12:31:03.310Z caller=node_exporter.go:191 msg="Listening on" address=:9100
level=info ts=2020-09-02T12:31:03.310Z caller=tls_config.go:170 msg="TLS is disabled and it cannot be enabled on the fly." http2=false
```

기본적으로 위에서도 언급했지만 예약된 포트정보들이 있고 /metrics 엔드포인트로 expose 되므로 [http://localhost:9100/metrics](http://localhost:9100/metrics) 에 접속해 봅니다. 현재 사용중인 macbook의 머신 메트릭을 확인할 수 있습니다.

```sh
$ curl http://localhost:9100/metrics
...
# HELP node_cpu_seconds_total Seconds the cpus spent in each mode.
# TYPE node_cpu_seconds_total counter
node_cpu_seconds_total{cpu="0",mode="idle"} 25639.47
node_cpu_seconds_total{cpu="0",mode="nice"} 0
node_cpu_seconds_total{cpu="0",mode="system"} 6361.26
node_cpu_seconds_total{cpu="0",mode="user"} 12627.86
node_cpu_seconds_total{cpu="1",mode="idle"} 37124.82
node_cpu_seconds_total{cpu="1",mode="nice"} 0
node_cpu_seconds_total{cpu="1",mode="system"} 2697.6
node_cpu_seconds_total{cpu="1",mode="user"} 4805.51
node_cpu_seconds_total{cpu="2",mode="idle"} 26546.08
node_cpu_seconds_total{cpu="2",mode="nice"} 0
node_cpu_seconds_total{cpu="2",mode="system"} 5505.62
node_cpu_seconds_total{cpu="2",mode="user"} 12576.23
node_cpu_seconds_total{cpu="3",mode="idle"} 37708.71
node_cpu_seconds_total{cpu="3",mode="nice"} 0
node_cpu_seconds_total{cpu="3",mode="system"} 2413.04
node_cpu_seconds_total{cpu="3",mode="user"} 4506.18
...
```

이후 프로메테우스와 연동하는 과정은 설정 변경 사항이므로 따로 언급하지는 않겠습니다.

### ExporterHub.io

[ExporterHub.io](http://exporterhub.io/) 는 프로메테우스 커뮤니티 유저를 위해 제작되었고, awesome 프로젝트와 유사하게 큐레이션 리스트를 제공하는 목적으로 만들었습니다.

단순히 큐레이션 정보 뿐만 아니라 위와 같은 간단한 설치 가이드, alertrule 설정, 대시보드 관련 정보들을 한번에 볼 수 있도록 만들고 있습니다.

향후 로드맵은 다음과 같습니다.

- 익스포터 별 alert-rule 생성
- 검색, 페이지 고도화, 릴리즈 업데이트 연동
- NexClipper Cloud 서비스 통합

하반기 중에 NexClipper Cloud 서비스를 오픈 예정이고 내년 정식 출시전에 프로메테우스 에코시스템 관련 여러가지 편의 기능을 포함 할 예정입니다.

직접 개발중인 exporter가 있으시거나 수정이나 개선사항이 있으시면 언제든지 issue, PR 부탁드립니다.

### **정리**

이번 포스팅에서는 프로메테우스 오픈소스의 필수 구성요소인 클라이언트 라이브러리, 익스포터에 대해서 이야기해봤습니다. 그리고 현재 개발 중인 [ExporterHub.io](http://exporterhub.io) 과 향후 NexClipper의 로드맵도 같이 설명드렸습니다.

블로그 내용을 포함한 저희의 모든 기술과 제품에 대한 다양한 피드백 부탁드리고, 언제든지 궁금한 사항이 있으시거나 채용 및 기술 미팅 등 필요한 사항이 있으시면 언제든지 [support@nexclipper.io](mailto:support@nexclipper.io) 로 연락 주시면 빠른 시간 내에 회신 드리도록 하겠습니다.

 

### **넥스클라우드 소개 및 채용**

[넥스클라우드](https://www.nexclipper.io/)는 컨테이너 기반 클라우드 기술 회사입니다.

2020년 하반기부터 본격적인 글로벌 사업을 위해 현재 미국 법인 설립을 진행 중이며 능력있는 분들을 모시고 있습니다.

[개발자 (Engineer) 부문](https://www.notion.so/Engineer-a83352e7b6a24bbbb1ac77bf83a7026b)
