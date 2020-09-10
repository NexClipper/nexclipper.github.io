---
id: start
title: Getting Started Guides
hide_title: true
description: 
keywords:
  - guide
  - installation
  - setup
  - 
  - getting started
  - nexclipper
---

## Getting Started with NexClipper Cloud

### Overview

NexClipper 구성요소는 크게 3가지로 구성되어 있습니다.
NexClipper는 Kubernetes cluster 내에서 데몬셋(DaemonSet)과 파드(Pod), 디플로이먼트(Deployment)형태로 실행됩니다. 

|구성요소|리소스 타입|역할|
|---|---|---|
|Klevr Agent|DaemonSet|NexClipper Manager와 통신|
|Provbee|Pod|Provisioning 및 Task 처리|
|MetricOperator(준비중)|Deployment|메트릭 수집, 처리, 전송|

:::note
NexClipper Agent는 Kubernetes 기준 *1.15.12* 이상에서 테스트 되었습니다. 이하 버전에서는 문제가 발생할 수 있습니다.
:::

### Minimum Requirements

NexClipper는 기본적으로 Linux 환경에서 동작하도록 되어 있습니다. 

* Operating Systems : Linux(WSL포함), MacOS 10.14+
* Software
  * bash or zsh
  * curl
  * ssh-keygen
* Target Kubernetes Cluster : 1.15.12 이상

### Installation

설치 방법은 2가지 옵션이 있습니다. 

1. Remote Kubernetes
   * 원격으로 kube-apiserver로 통신이 가능한 환경 (kubeconfig 환경)
2. Local Kubernetes
   * Docker Desktop, Minikube, K3s, MicroK8s 등 로컬에서 실행하는 경우

#### 1. Remote Kubernetes

nexclipper.io로 접속합니다.

Getting Started를 클릭합니다.

console.nexclipper.io로 이동합니다.

