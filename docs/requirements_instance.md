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
  * Disk: 40Gi
* Firewall
  * Client(WebService) -> Outbound (Destination : console.nexclipper.io, Port: 80,443,8080)
  * NexClipper Agent(DaemonSet) -> Outbount (Destination : console.nexclipper.io, Port: 8090)