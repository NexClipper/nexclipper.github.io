---
id: components
title: Components
hide_title: true
description: 
---

## NexClipper Components

NexClipper has three main components:    
NexClipper runs in the type of DaemonSet, StatefulSet, and Deployment within Kubernetes cluster.  
All resources run in the nex-system, nexclipper Namespace by default, and contain ecosystem related to Prometheus.

|Component|Resource|Role|
|---|---|---|
|Klevr Agent|DaemonSet|Communicate with NexClipper Manager|
|Provbee|Deployment|Provisioning and Task Processing|
|Prometheus|Deployment|Metric-Based Monitoring Tool|
|node-exporter|DaemonSet|Machine Metric Collection Exporter|
|Grafana|Deployment|Visualization Dashboard Tool|
|Kube-state-metrics|Deployment|Cluster Metric Collection Tool|
|Alertmanager|Deployment|Alarm Management Tools|
|pushgateway|Deployment|Small Batchjob Metric Collection Tool|
|Promlens|Deployment|Query Builder based on PromQL|
|Promscale|Deployment|Prometheus Metric Analysis Tool|
|TimescaleDB|StatefulSet|Time Series-Based SQL DB|
|MetricOperator|Deployment|Caching Cluster State|
|NexCloud Basic|Deployment|Basic Dashboard|
|ExporterHub(Preparing)|Deployment|Exporter curation page|

:::note
NexClipper Agent has been tested for Kubernetes version 1.15.12 or higher. Problems may occur in lower versions.
:::