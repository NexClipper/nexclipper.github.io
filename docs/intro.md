---
id: intro_ko
title: Introduction to NexClipper
sidebar_label: Introduction to NexClipper
slug: /
hide_title: true
keywords:
  - mission
  - vision
  - product
  - nexclipper
---

## NexClipper

### Mission

NexClipper는 고객의 클라우드 네이티브 인프라스트럭처를 쉽고 안정적인 방법으로 관리/모니터링하도록 돕습니다.

### 비전(Vision)

**Automated Enterprise Prometheus Eco-System**

고객의 비즈니스 변화에 신속히 대응하고 혁신하기 위한 Kubernetes와 같은 클라우드 네이티브 인프라스트럭처 및 플랫폼등을 모니터링, 분석, 운영할수 있는 쉽고 안정적인 서비스를 제공합니다.


![img](../static/img/architecture_outline3_layer.png)

### 제품(Product)

* NexClipper Manager
  * 자동화된 프로메테우스 에코시스템 관리 
* Prometheus Exporter Catalog(ExporterHub)
  * 익스포터 구성 자동화, 메트릭 컬렉션 플래그, Alert-Rule 관리 기능
* Metric Operator (MetricOps)
  * 프로메테우스 기반 롱텀 스토리지, 글로벌 뷰(쿼리), 메트릭 기반 운영 기능
* Klevr Manager
  * 비동기 분산 인프라 관리 기능
* Provbee
  * 클라우드 네이티브 기반 Delivery 기능

### 제품 목표(Objective)
* 클라우드 네이티브 기반 전달(Delivery)및 관측(Observability) 통합 플랫폼

* 확장성 있는 롱텀 스토리지를 매니지드 형태로 제공하여 엔터프라이즈 환경에서도 운영수준의 통합 프로메테우스 서비스를 제공하고, 오픈소스 기반 에코시스템들을 쉽고 안정적이고 확장성있게 관리할수 있게 합니다.
* 모니터링 하고자 하는 대상의 Exporter의 설치 및 Alert-Rule 관리를 자동화합니다.
* 프라이빗 클라우드 네이티브 환경에서도 메트릭 데이터 수집 및 애플리케이션 전달을 쉽고 빠르게 관리할 수 있습니다.
* 표준 인터페이스를 제공하여 외부 모니터링 및 에코시스템과의 호환성을 제공하여 확장성 있는 운영이 가능합니다. 비즈니스 분석을 위한 데이터 원천으로도 활용 가능하고 운영자 뿐만 아닌 개발자도 활용가능합니다. 메트릭을 기반으로 하는 모든 운영을 MetricOps(Metric Pipeline) 형태로 관리할 수 있게 합니다. 종속적이지 않고 중립성 있게 SLO(Service-Level Objective)기반으로 GitOps 기반 배포와 롤백을 쉽게 구현이 가능합니다. 
