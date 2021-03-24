---
id: requirements
title: Requirements with Kubernetes
hide_title: true
description: 
---

## Minimum Requirements

NexClipper runs in a Kubernetes environment.

* Target Kubernetes Cluster : 1.15.12 or higher
* Cluster Hardware
  * RAM: 4GB Minimum (Recommended 6GB)
  * CPU: 2Core Minimum
  * Volume: 40Gi
* Bastion Host : Linux(WSL included), MacOS 10.14+
* Bastion Software
  * bash or zsh
  * curl
  * ssh-keygen
* Firewall
  * Client(WebService) -> Outbound (Destination : console.nexclipper.io, Port: 80,443,8080)
  * NexClipper Agent(DaemonSet) -> Outbount (Destination : console.nexclipper.io, Port: 8090)
---

## Check Environment

There are two options for installation.  

1. Remote Kubernetes
   * An environment that can communicate remotely to kube-apiserver (kubeconfig environment)
2. Local Kubernetes
   * When running locally, such as Docker Desktop, Minikube, K3s, MicroK8s, etc.


Run the following command to check the currently connected cluster in an environment that can run bash or zsh. If you have configured your Kubernetes environment with docker-desktop, you are expected to get results similar to the following:

```bash
$ kubectl cluster-info
Kubernetes master is running at https://kubernetes.docker.internal:6443
KubeDNS is running at https://kubernetes.docker.internal:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy
```

:::caution
You might encounter problems if you install duplicates with an existing operating Prometheus Operator. NexClipper distributes and manages Prometheus-related ecosystem based on Helm.
:::

