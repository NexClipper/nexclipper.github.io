---
title: "Prometheus at NexClipper(Korean)"
author: Jinwoong Kim
author_title: NexClipper
author_url: https://github.com/ddiiwoong
author_image_url: https://avatars1.githubusercontent.com/u/37430952?v=4
description: "엔터프라이즈 레벨에서 프로메테우스를 운영하는데 있어 이슈가 되는 내용을 정리해보고 이를 해결하기 위한 NexClipper의 개발 로드맵을 설명합니다."
tags: [Prometheus, Exporter, NexClipper]
---

이번 포스팅에서는 엔터프라이즈 레벨에서 프로메테우스를 운영하는데 있어 이슈가 되는 내용을 정리해보고 이를 해결하기 위한 NexClipper의 개발 로드맵을 설명합니다..

## 쿠버네티스 모니터링을 위한 개요

쿠버네티스는 CNCF(Cloud Native Computing Foundation)을 졸업한 최초의 프로젝트이며, 현재 컨테이너 오케스트레이션의 사실상 표준이자 IaaS, PaaS 영역까지 아우르며 불과 몇년 사이에 엄청난 성장과 커뮤니티 활성화가 되며 실제 프로덕션 환경에서도 많은 기업들이 도입을 하고 있는 상황입니다. 

<!--truncate-->

[https://github.com/kubernetes/community/blob/master/contributors/design-proposals/instrumentation/monitoring_architecture.md#architecture](https://github.com/kubernetes/community/blob/master/contributors/design-proposals/instrumentation/monitoring_architecture.md#architecture) 기본적인 쿠버네티스의 메트릭 설명을 보면 시스템 메트릭과 서비스 메트릭으로 나뉘어서 설명하고 있고 모니터링 방식은 크게 코어 메트릭 파이프라인과 모니터링 파이프라인으로 구분되어 있습니다. 

해당 문서에서도 나와 있듯이 초기에는 힙스터(Heapster)는 쿠버네티스와 함께 모니터링 솔루션으로 널리 사용됐습니다. 모니터링 데이터를 외부 시스템으로 전송하는 도구로 시작되었고, 이후 자체적인 모니터링 시스템으로 성장하게 됐습니다. 하지만 힙스터는 쿠버네티스 1.11버전에서 deprecated되었고 1.13이후의 쿠버네티스 클러스터를 구성하는 대부분의 구성 요소들은 프로메테우스에서 클라우드 네이티브 형태로 측정하도록 지원하고 있습니다.  

## 프로메테우스 구성요소 설명

쿠버네티스 모니터링은 기본적으로 클러스터 모니터링을 기본으로 합니다. 클러스터를 모니터링하면서 노드의 사용률, 실행 중인 파드 수를 확인하는 것과 같이 시스템의 전반적인 상태와 워크로드 들에 대한 정보를 얻을 수 있습니다. 다양한 에코시스템 중에 가장 많이 사용되는 서비스와 도구를 정리했습니다. 

- Prometheus : 오픈 소스 시계열 데이터베이스
- kube-state-metric : 클러스터의 다양한 오브젝트, 워크로드의 메트릭 정보를 생성하는 서비스
- node_exporter : *NIX 커널에 의해 노출되는 하드웨어 및 OS 메트릭 정보를 생성하는 서비스
- pushgateway : 임시 및 배치 작업의 메트릭을 수신, 제공
- alertmanager : 프로메테우스 서버에서 보낸 알림(Alert)를 처리(중복제거, 그룹화, 전송)하는 서비스
- grafana : 모니터링과 메트릭 분석을 위한 대시보드 시각화 도구

## 프로메테우스 설치방법

프로메테우스를 설치하는 방법은 어렵지는 않습니다. 하지만 모든 내용을 이해하고 사용하는 것과 그냥 Getting Started로 배포하는 것은 향후 실제 운영을 위해서는 매우 다른 차이를 가지고 있습니다.  

직접 구성하는 방법은 크게 2가지로 이미 컴파일된 바이너리를 실행하거나 직접 소스를 빌드할 수 있고 도커를 사용해서 설치할 수 있습니다. 이외에도 Ansible, Puppet 등과 같은 Configuration Management 도구를 활용해서 설치도 가능합니다.

- [https://prometheus.io/docs/prometheus/latest/installation/](https://prometheus.io/docs/prometheus/latest/installation/)

프로메테우스 커뮤니티에서는 기본적으로 베타로 Helm Chart를 제공하고 있습니다. 

단순히 alertmanager와 prometheus를 단독으로 배포하거나, 여러가지 익스포터를 배포하는 용도로는 간단하게 사용이 가능합니다. 

- [https://github.com/prometheus-community/helm-chart](https://github.com/prometheus-community/helm-charts)

프로메테우스 오퍼레이터는 기본적으로 [Custom Resources](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/)를 사용하여 프로메테우스, 얼럿매니저, 관련된 에코시스템 배포와 구성을 단순화합니다. 

- [https://github.com/prometheus-operator/prometheus-operator](https://github.com/prometheus-operator/prometheus-operator)

아니면 위 오퍼레이터가 포함된 kube-prometheus-stack helm 차트를 통해서도 배포가 가능합니다. 

- [https://github.com/prometheus-operator/kube-prometheus](https://github.com/prometheus-operator/kube-prometheus)

## 프로메테우스를 사용할 때의 이점

프로메테우스를 쿠버네티스의 모니터링 도구로 사용할때의 여러가지 장점이 있습니다. 

- 관리의 용이성 - 프로메테우스는 관리가 편하다는 것이 가장 핵심입니다. 별도의 설치없이 바이너리 파일 하나로 동작하기 때문에 기본적으로 로컬디스크만 있으면 되고 데이터베이스나 캐시와 같은 다른 솔루션과의 종속성이 거의 없습니다.
- 서비스 디스커버리 - 기본적으로 파일 또는 DNS기반의 서비스 디스커버리 구성이 가능하기 때문에 주기적으로 쿼리되는 DNS 도메인 네임을 통해 기본적으로 스크랩할 대상을 등록합니다. 쿠버네티스 REST API에서 스크랩할 대상을 검색하고 항상 쿠버네티스 클러스터와 동기화 상태를 유지할 수 있습니다.

[https://prometheus.io/docs/prometheus/latest/configuration/configuration/#kubernetes_sd_config](https://prometheus.io/docs/prometheus/latest/configuration/configuration/#kubernetes_sd_config)

- 강력하고 쉬운 데이터 모델 - 수집 된 모든 모니터링 데이터는 기본 제공되는 시계열 데이터베이스(TSDB)에 메트릭 형식으로 저장됩니다. 그리고 기본 이름 외에도 모든 샘플에는 샘플의 특성을 설명하는 태그 세트가 포함되어 있습니다. 각 시계열 데이터는 메트릭 이름과 옵션인 레이블이라 부르는 키-밸류 쌍으로 고유하게 식별됩니다. 각 시계열 데이터는 일련의 샘플 값을 시간 순서대로 저장합니다. 각 샘플은 float64 값과 밀리세컨드 수준의 타임스탬프로 구성됩니다.
- 쿼리 언어(PromQL) - 레이블과 시계열을 기반으로 모니터링 데이터를 쉽게 쿼리하고 집계할 수 있습니다. 메트릭 쿼리에 함수와 연산자를 적용하고 레이블별로 필터링 및 그룹화하고 매칭과 필터링을 위해 정규 표현식을 사용할 수도 있습니다. 또한 PromQL은 그라파나(Grafana)와 같은 데이터 시각화나 알림(alert, notification)에도 사용됩니다.
- 풀(Pull) 수집 방식으로 인한 내부 상태 모니터링 - 프로메테우스는 사용자가 직접 서비스의 내부 상태를 모니터링 하도록 권장합니다. 다양한 클라이언트 라이브러리나 익스포터를 사용하여 실제 애플리케이션 또는 솔루션의 메트릭 상태를 확인이 가능합니다.

## 프로메테우스를 사용할 때의 문제점

- 장기 보관 - 기본적으로 3Byte 사이즈의 메트릭이 초당 100,000 개씩 저장될 경우 30일에 500GB 정도 스토리지를 사용하게 됩니다. 로컬 인스턴스나 파드 형태로 프로메테우스를 운영할 경우 장기 보관이 쉽지 않으며 모니터링 대상이 많아질수록 더 많은 데이터를 저장하게 됩니다.
- 데이터 소스 중복 - 프로메테우스는 여러 클러스터에 설치해서 운영할 경우 데이터 소스 측면에서 관리가 쉽지 않으며,  Grafana와 같은 대시보드를 구성할 경우 동일한 메트릭에 대해서 여러 클러스터에 쿼리를 수행할 경우 구분하기가 쉽지 않습니다. 이로 인해 각 클러스터 별로 프로메테우스가 설치될 경우 데이터를 통합해서 보기가 어렵습니다.
- 그룹관리 및 사용자 인증 관리(보안) 측면에서 부족한 부분이 있습니다.
- 원시 로그 / 이벤트 수집이 불가합니다.
- 애플리케이션 기반 요청 추적(Request Tracing)이 자체적으로 지원이 되지 않습니다.
- 이상 감지(Anomaly Detection)를 하기 위해서는 별도의 데이터 분석 역량이 필요합니다.
- 스케일링(horizontal scaling) 및 고가용성에 대한 구성이 복잡합니다.
- 배포하고 운영하는데 많은 공수와 노력이 필요합니다. (PromQL 학습, Grafana 대시보드 구성, Alert-Rule 작성 등)

## NexClipper

NexClipper는 이런 부분을 프로메테우스 에코시스템을 그대로 활용하면서 가지고 있는 문제점을 해결하기 위해 아래와 같은 로드맵을 가지고 개발중입니다. 기존의 오픈소스와 솔루션을 유지하면서도 새로운 기능들을 추가하기 위해 열심히 노력중입니다.

![architect](images/nexclipper_architect.png)

다음과 같은 기능들을 현재 개발중입니다. 

프로메테우스 에코시스템을 운영환경으로 어떤 환경에서도 쉽고 빠르게 배포가능합니다. ([https://github.com/NexClipper/provbee](https://github.com/NexClipper/provbee))  
  - 클라우드 서비스에서는 간단한 설치 스크립트를 통해 프로메테우스 에코시스템을 쉽고 빠르게 배포할 수 있습니다.
  - 구축형 서비스에서는 별도의 프로메테우스 서버 클러스터와 여러 멀티 클라우드 환경에서의 다양한 에코시스템 설치와 운영환경을 제공합니다.
  - 오픈소스 기반으로 장기저장소 구성이 가능합니다. (벤더 종속성 탈피)
  - 기본적으로 TimescaleDB로 구성되는 PromScale 기반으로 프로비저닝되며, 필요할 경우에 언제든지 저장기간, 용량 증설이 가능합니다.

방화벽 같은 차단환경에서도 Bastion Host 역할과 유사하게 오픈소스 기반 Task 매니저([https://github.com/NexClipper/klevr](https://github.com/NexClipper/klevr))가 비동기 방식의 Job을 실행하기 때문에 Private 클라우드 환경에서도 운영이 가능합니다.  
- 별도의 차트를 직접 배포할 수 있고, 보안상 격리되어 있는 Private환경에서도 운영이 가능합니다.
- KubeAPI를 직접 Access 하지 못한 상태에서도 클러스터 운영이 가능합니다.
- 프로메테우스 및 얼럿매니저 컨피그를 원격에서 수정하고 관리가능합니다.


쿼리 및 룰 관련한 편의기능을 제공합니다.  
- 여러개의 프로메테우스 인스턴스를 동시에 하나의 엔드포인트로 쿼리가 가능합니다.
  - 단일 엔드포인트를 통해 여러 데이터 소스의 이동을 최소화하고 멀티클러스터의 그라파나 대시보드 운영이 가능합니다.
- Promlens([https://github.com/promlabs/promlens-public](https://github.com/promlabs/promlens-public)) Preview features를 포함하고 있어 간단한 쿼리를 작성하고 확인할 수 있습니다.
- exporter를 관리하는 기능을 통해 쉽게 설치하고 운영을 위한 AlertRule 구성이 가능합니다. (ExporterHub.io, https://github.com/NexClipper/exporterhub.io)

이외에도 많은 기능을 제공하기 위해 고군분투하고 있습니다.

## **정리**

이번 포스팅에서는 쿠버네티스 환경에서의 모니터링과 프로메테우스의 장단점 그리고 단점을 극복하기 위한 향후 NexClipper의 개발 로드맵도 같이 설명드렸습니다.

궁금한 내용이 있으시거나 추가적인 정보를 원하시면 KubeCon North America 2020 NexClipper Booth에 방문하시기 바랍니다. 

블로그 내용을 포함한 저희의 모든 기술과 제품에 대한 다양한 피드백 부탁드리고, 언제든지 궁금한 사항이 있으시거나 기술 미팅 등 필요한 사항이 있으시면 언제든지 [support@nexclipper.io](mailto:support@nexclipper.io) 로 연락 주시면 빠른 시간 내에 회신 드리도록 하겠습니다.

## **넥스클라우드 소개 및 채용**

[넥스클라우드](https://www.nexclipper.io/)는 컨테이너 기반 클라우드 기술 회사입니다.
2020년 하반기부터 본격적인 글로벌 사업을 위해 현재 미국 법인 설립을 진행 중이며 능력있는 분들을 모시고 있습니다.

[개발자 (Engineer) 부문](https://www.notion.so/nexclipper/Engineer-a83352e7b6a24bbbb1ac77bf83a7026b)
[Product Marketing Manager](https://www.notion.so/nexclipper/Job-description-63e5113b79a943f28a75c1eca1e0f50a)
[Cloud Platform Consulting Manager](https://www.notion.so/nexclipper/Cloud-Platform-Consulting-Manager-871f792b04994afeb40984dbe05da386)