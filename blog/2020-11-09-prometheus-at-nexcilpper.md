---
title: "Prometheus at NexClipper"
author: Jinwoong Kim
author_title: NexClipper
author_url: https://github.com/ddiiwoong
author_image_url: https://avatars1.githubusercontent.com/u/37430952?v=4
description: "Summarize the issues that arise in operating Prometheus at the enterprise level and introduce NexClipper's development roadmap to solve them."
tags: [Prometheus, Exporter, NexClipper]
---

In this post, I summarize the issues that arise in operating Prometheus at the enterprise level and introduce NexClipper's development roadmap to solve them.

<!--truncate-->

## Overview for Monitoring Kubernetes

Kubernetes is the first project to graduate from the Cloud Native Computing Foundation (CNCF), and it is currently the de facto standard for container orchestration, encompassing IaaS and PaaS, and has grown tremendously in just a few years, revitalizing the community, and many companies have adopted it in real production environments.

<!--truncate-->

[https://github.com/kubernetes/community/blob/master/contributors/design-proposals/instrumentation/monitoring_architecture.md#architecture](https://github.com/kubernetes/community/blob/master/contributors/design-proposals/instrumentation/monitoring_architecture.md#architecture)  

The basic Kubernetes metric description is divided into system metrics and service metrics, and monitoring methods are largely divided into core metric pipeline and monitoring pipeline.

Initially, Heapster was widely used in conjunction with Kubernetes as a monitoring solution, as indicated in that document. It started as a tool that transmits monitoring data to an external system, and has since grown into its own monitoring system. However, hipster was deprecated in Kubernetes version 1.11, and most components of Kubernetes clusters after 1.13 are supported by Prometheus to measure in cloud native way.

## Prometheus Components

Kubernetes monitoring is based on cluster monitoring by default. As you monitor your cluster, you can get information about the overall health and workloads of the system, such as checking the utilization of nodes and the number of pods running. Next, we describe the services and tools most used among the various ecosystems.  

- Prometheus : Open source time series database
- kube-state-metric : Service that generates metrics information of various objects and workloads in kubernetes cluster
- node_exporter : Service that generates hardware and OS metric information exposed by the *NIX kernel
- pushgateway : Receive and provide metrics for ad-hoc and small batch jobs
- alertmanager : Service that handles (deduplication, grouping, and sending) notifications sent from Prometheus server
- grafana : Dashboard visualization tool for monitoring and metric analysis

## How to install Prometheus

How to install Prometheus is not difficult. However, understanding and using everything and just deploying with Getting Started have very different differences due to actual operation in the future.  

There are two main ways to configure it yourself. You can run the already compiled binary or build the source yourself and install it using Docker. In addition, it can be installed using configuration management tools such as Ansible and Puppet.

- [https://prometheus.io/docs/prometheus/latest/installation/](https://prometheus.io/docs/prometheus/latest/installation/)

The Prometheus community basically provides Helm Charts in beta.  

You can simply deploy Alertmanager and Prometheus alone, or simply use it for deploying various exporters.  

- [https://github.com/prometheus-community/helm-chart](https://github.com/prometheus-community/helm-charts)

Prometheus Operators use [Custom Resources](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/) by default to simplify deployment and configuration of Prometheus, Alert Manager, and related ecosystems.  

- [https://github.com/prometheus-operator/prometheus-operator](https://github.com/prometheus-operator/prometheus-operator)

Alternatively, it can be deployed through the kube-prometheus-stack helm chart that includes the operator above.

- [https://github.com/prometheus-operator/kube-prometheus](https://github.com/prometheus-operator/kube-prometheus)

## Advantages of using Prometheus

There are several advantages to using Prometheus as a monitoring tool for Kubernetes.

- Ease of management: The key to Prometheus is that it is easy to manage. Since it operates as a single binary file without separate installation, it basically only needs a local disk and has few dependencies with other solutions such as database or cache.
- Service Discovery: Basically, file or DNS-based service discovery can be configured, so the target to be scraped is basically registered through the DNS domain name that is periodically queried. In the Kubernetes REST API, you can search for what to scrap and stay in sync with your Kubernetes cluster at all times.

[https://prometheus.io/docs/prometheus/latest/configuration/configuration/#kubernetes_sd_config](https://prometheus.io/docs/prometheus/latest/configuration/configuration/#kubernetes_sd_config)

- Powerful and easy data model: All collected monitoring data is stored in metric format in the built-in time series database (TSDB). And in addition to the default name, every sample contains a set of tags that describe the characteristics of the sample. Each time series data is uniquely identified by a metric name and a key-value pair called an optional label. Each time series data stores a series of sample values ​​in chronological order. Each sample consists of a float64 value and a timestamp in milliseconds.

- Query Language (PromQL): Easily query and aggregate monitoring data based on labels and time series. You can apply functions and operators to metric queries, filter and group by label, and even use regular expressions for matching and filtering. PromQL is also used for data visualization or alerts, notifications such as Grafana.
  
- Monitoring internal status due to pull collection method: Prometheus recommends that users monitor the internal status of the service themselves. You can check the metric status of the actual application or solution using various client libraries or exporters.

## Cons of Prometheus

- Long-term storage: Basically, if 100,000 metrics of 3 byte size are stored per second, about 500 GB of storage is used in 30 days. If Prometheus is operated in the form of a local instance or Pod, long-term storage is not easy, and the more monitoring targets, the more data is stored.
- Data source redundancy: When Prometheus is installed and operated in multiple clusters, it is not easy to manage in terms of data sources, and when a dashboard such as Grafana is configured, it is difficult to distinguish when querying multiple clusters for the same metric. Because of this, when Prometheus is installed for each cluster, it is difficult to see the data integrated.
- There is a lack of group management and user authentication management (security).
- Raw log/event collection is not possible.
- Application-based request tracing is not supported by itself.
- Additional data analysis capability is required for Anomaly Detection.
- Complicated configuration for horizontal scaling and high availability.
- It takes a lot of labor and effort to distribute and operate. (Learn PromQL, configure Grafana dashboard, create Alert-Rule, etc.)

## NexClipper

NexClipper is developing with the following roadmap to solve the problems it has while using the Prometheus ecosystem as it is. We are working hard to add new features while maintaining our existing open source and solutions.

![architect](images/nexclipper_architect.png)

The following features are currently being developed.

Prometheus ecosystem can be quickly and easily deployed in any production environment. ([https://github.com/NexClipper/provbee](https://github.com/NexClipper/provbee))  
- NexClipper Cloud allows you to quickly and easily deploy Prometheus ecosystem through a simple installation command.
- NexClipper On-Premise provides a separate Prometheus server cluster and various ecosystem installation and operation environments in multiple multi-cloud environments.
- Long-term storage can be configured based on open source. (Avoiding vendor dependency)
- Provisioned based on PromScale, which is basically composed of TimescaleDB, and storage period and capacity can be increased whenever necessary.
 
Similar to the Bastion Host role in a closed environment where a firewall exists, the open source-based task manager ([https://github.com/NexClipper/klevr](https://github.com/NexClipper/klevr)) runs various jobs, it can be operated even in a Private cloud environment.
- Separate charts or resources can be directly distributed, and operation is possible in a private environment that is isolated for security reasons.
- Cluster Management or Operation is possible without direct access to KubeAPI.
- Remotely modify and manage Prometheus and AlertManager config.


NexClipper provides convenient functions related to queries and rules.
- Multiple Prometheus instances can be accessed through a single endpoint and multi-cluster graphana dashboards can be operated while minimizing the movement of multiple data sources.
- Promlens([https://github.com/promlabs/promlens-public](https://github.com/promlabs/promlens-public)) Preview features are included so you can write and test simple queries.
- With the ability to manage exporters, you can easily install and configure AlertRule for operation. [ExporterHub.io](https://ExporterHub.io), [https://github.com/NexClipper/exporterhub.io](https://github.com/NexClipper/exporterhub.io)

We are working hard to provide many other features.

## Summary

In this post, I also explained the development roadmap of NexClipper in the future to overcome the pros and cons of Prometheus and monitoring in the Kubernetes environment.

If you have any questions or would like additional information, please visit KubeCon North America 2020 NexClipper Booth.

If you have any questions or would like more information, please visit NexClipper Booth via KubeCon + CloudNativeCon North America 2020.

We ask for a variety of feedback on all our technologies and products, including blog content, and if you have any questions at any time, or have any necessary matters such as recruitment and technical meetings, please contact us at [support@nexclipper.io](mailto:support@nexclipper.io) and we will reply as soon as possible.

## Introduce NexClipper and Career

[NexCloud](https://www.nexclipper.io/) is a container-based cloud technology company.
From the second half of 2020, we are currently in the process of establishing a U.S. corporation for full-scale global business, and we are looking for talented people.

[Product Marketing Manager](https://www.notion.so/nexclipper/Job-description-63e5113b79a943f28a75c1eca1e0f50a)