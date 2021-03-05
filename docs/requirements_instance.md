---
id: requirements_instance
title: Requirements without Kubernetes
hide_title: true
description: 
---

## Minimum Requirements

NexClipper without Kubernetes runs in a Linux environment.

* Operating Systems : Modern Linux systems(WSL, Alpine, Raspbian Buster included)
* Software
  * bash or zsh
  * curl
  * ssh-keygen
* Hardware
  * RAM: 4GB Minimum
  * CPU: 2Core Minimum
* Firewall
  * Client(WebService) -> Outbound (Destination : console.nexclipper.io, Port: 80,443,8080)
  * NexClipper Agent(DaemonSet) -> Outbount (Destination : console.nexclipper.io, Port: 8090)
---

## Quick Start Environment

If you want to install in a Linux environment, change `K3S_SET` ENV in a generated script from `N` to `Y`. 

```sh
curl -sL gg.gg/provbee | TAGPROV=0.5 TAGKLEVR=0.2.8-SNAPSHOT K3S_SET=N K_API_KEY="ba567a96551042b7baed32ec81b02f40" K_PLATFORM="kubernetes" K_MANAGER_URL="https://dev.nexclipper.io:8080/klevr" K_ZONE_ID="589" K_CLUSTER_NAME="123123r5" bash
```