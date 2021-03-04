---
id: health
title: Health Dashboard
hide_title: true
description: 
---

## Monitor Prometheus & Kubernetes

You can return to the console to view the list of provisioned clusters.

![img](../static/img/nc-cluster-dashboard.png)

You can view the details of the cluster.

* Platform
  * It shows the current platform type, agent and prometheus stack status.
* Cluster Detail
  * It shows the number of nodes that currently have agents deployed and the version information and Kubernetes Account information installed.
* Tasks
  * It shows all Job and Task status performed by NexClipper.
* Prometheus
  * It shows the current installed Prometheus stack. Also,it can expose externally accessible endpoints in Prometheus ecosystem. Click on each ecosystem to view more detailed information, and you can see  each dashboard exposed on NodePort or LoadBalancer.
* Volumes
  * It shows the current PVs information and status for long-term storage.

Clicking the link or Health menu of Prometheus will take you to the Prometheus Health dashboard.

![img](../static/img/nc-prom-dashboard.png)

You can view the information in the cluster.  
* Age(Cluster Age): Time elapsed since cluster creation
* Cluster Status: Status of cluster nodes
  * All nodes are healthy - All Ready
  * Some nodes are healthy - Partially Ready
  * All nodes unhealthy - Not Ready
* Nodes: Number of Nodes
* Unavaliable Node: Unhealthy Node Count
* Namespaces: Number of Namespaces
* Cluster Pod Usage: Pod Utilization in Cluster
* Cluster CPU Usage: CPU Utilization in Cluster
* Cluster Memory Usage: Memory Utilization in Cluster
* Cluster Disk Usage: Disk Utilization in Cluster
* Pods: Number of active Pods
* Restarted Pods(30m): Number of Pods restarted in 30 minutes
* Failed Pods: Number of Pods in Failed state
* Pending Pods: Number of Pods in the Pending state
* PVCs: Number of PersistentVolumeClaims
* Prometheus Status: Prometheus Instance Status
* Alertmanager Status: Alertmanager Instance Status
* API Server Status: Cluster API Server Status
* API server total requests code: 5 minute average by Kubenetes API response code