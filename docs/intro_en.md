---
id: intro
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

NexCloud is the first Korean company to become a silver member of CNCF in 2018,
contributing to cloud native ecosystem.

### Mission

NexCloud helps our customers to manage their Cloud Native infrastructure easily, reliably and at scale which leads to decreased downtime, lower operation costs, and improved business sustainability.

### Vision

**Automated Enterprise Prometheus Eco-System**

A leading enterprise infrastructure software company in cloud native computing.  
With NexClipper, we contribute to cloud native community and help DevOps teams work simple and fast.

### Basic Architecture

NexClipper is under development with the following roadmap to solve the problems the current Prometheus ecosystem has. We are working hard to add new features while maintaining our existing open source and solutions.

![img](../static/img/architecture_outline3_layer.png)

The following features are currently being developed.

### Products

Prometheus ecosystem can be quickly and easily deployed in any production environment. ([https://github.com/NexClipper/provbee](https://github.com/NexClipper/provbee))  
- NexClipper Cloud allows you to quickly and easily deploy Prometheus ecosystem through a simple installation command.
- NexClipper On-Premise provides a separate Prometheus server cluster and various ecosystem installation and operation environments in multiple multi-cloud environments.
- Long-term storage can be configured based on open source softwares. (Avoiding vendor dependency)
- Provisioned based on PromScale, which is basically composed of TimescaleDB, and storage period and capacity can be increased whenever necessary.
 
Similar to the Bastion Host role, even in a blocking environment such as a firewall, the open source-based Task Manager([https://github.com/NexClipper/klevr](https://github.com/NexClipper/klevr)) executes asynchronous jobs, so it can be operated in a private cloud environment.  
- Separate charts or resources can be directly distributed, and operation is possible in a private environment that is isolated for security reasons.
- Cluster management or operation is possible without direct access to KubeAPI.
- Remotely modify and manage Prometheus and AlertManager config.


NexClipper provides convenient functions related to queries and rules.
- Multiple Prometheus instances can be queried simultaneously to a single endpoint and multi-cluster Graphana dashboards can be operated while minimizing the movement of multiple data sources.
- Promlens([https://github.com/promlabs/promlens-public](https://github.com/promlabs/promlens-public)) Preview features are included so you can write and test simple queries.
- With the ability to manage exporters, you can easily install and configure AlertRule for operation. [ExporterHub.io](https://ExporterHub.io), [https://github.com/NexClipper/exporterhub.io](https://github.com/NexClipper/exporterhub.io)

### Objective

#### Automated Enterprise Prometheus ecosystem

- Managing Prometheus and its ecosystem easily, reliably, and at scale
  - It is necessary to run a proper monitoring tool after the initial Kubernetes test or POC.
  - As Kubernetes ecosystem is getting more complicated with more OSS, it’s not easy to organize internal monitoring tools.

- Providing advanced technologies essential to production environments 
  - MetricOps enables automation of all operation based on metrics, and ML-based prediction.

  - GitOps, without dependency on environments and neutral to SLO, easily execute deployment and roll-back.


- Delivering software in any kind of environment.
  - NexClipper SaaS platform can manage
[Public | Private] cloud, and on-premise altogether.
  - As an ambassador to microservices, it provides efficient deployment and monitoring service for more efficient operation and business.
