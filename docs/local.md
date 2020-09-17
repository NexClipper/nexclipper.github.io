---
id: local
title: Kubernetes Local Environment
hide_title: true
description: 
keywords:
  - local
  - minikube
  - k3s
  - docker desktop
  - microk8s
---

## 로컬 환경에서 쿠버네티스 구성하기

로컬에서 쿠버네티스를 구성

### Minimum Requirements

[NexClipper](https://nexclipper.github.io/docs/start#installation)를 로컬에서 테스트 하기 위해서는 다음과 같은 설정이 필요합니다.   

### Kubectl 
[kubectl 설치 및 설정](https://kubernetes.io/ko/docs/tasks/tools/install-kubectl/)

### Minikube

[Minikube 설치](https://kubernetes.io/ko/docs/tasks/tools/install-minikube/)
[Minikube로 쿠버네티스 설치](https://kubernetes.io/ko/docs/setup/learning-environment/minikube/)

### Microk8s

[MicroK8s 설치 및 실행](https://microk8s.io/docs/install-alternatives)

### Docker Desktop

[Docker Desktop 설치](https://www.docker.com/get-started)


:::info
설치 후 아래와 같이 Preferences - Kubernetes - Enable Kubernetes를 체크하시기 바랍니다.
:::

![img](../static/img/docker-desktop.png)

### K3s

[K3s 설치](https://rancher.com/docs/k3s/latest/en/quick-start/)

:::info
K3s는 공식적으로 Ubuntu 16.04 (amd64), Ubuntu 18.04 (amd64), Raspbian Buster* 만 지원합니다. MacOS 환경에서는 직접 설치가 불가능합니다.
:::

