---
title: "Concerns with Running Containers"
author: NexClipper
author_title: NexClipper
author_url: https://github.com/NexClipper
author_image_url: https://avatars2.githubusercontent.com/u/39365220?v=4
tags: [NexClipper,Containers Monitoring, Prometheus]
---


**What are the concerns in using containers and how NexClipper deals with them.**

According to recent survey by CNCF (Cloud Native Computing Foundation), 58% of respondents are using Kubernetes in production for container management tools, while 42% are considering it for future use. Also, concerns they have when it comes to using containers are as followings:

<!--truncate-->

In order for organizations to effectively run containers on Kubernetes, monitoring is required to see if container is healthy. It will help you understand insights regarding containers.

1. Complexity: 40% up from 35%
2. Lack of training: 40%
3. Monitoring: 34%
4. Storage: 30%

[Source: https://www.cncf.io/](https://www.cncf.io/blog/2018/08/29/cncf-survey-use-of-cloud-native-technologies-in-production-has-grown-over-200-percent/)

**How these concerns could be relieved with NexClipper**

- **Complexity**: NexClipper provides you with a more simplified setup process than ever before; NexClipper uses NexAgent, an agent that replaces node exporter, Kube-state-metrics, cAdvisor.
- **Lack of training**: Full stack monitoring allows you to easily understand container status even for non-skilled employees and even reduce learning curves.
- **Monitoring**: With NexClipper, you can monitor each layer that should be monitored. To be specific, you are able to monitor containers, agents, and hosts which allows you to get full-stack insights.
- **Storage**: In terms of storage, Prometheus is commonly used to monitor Kubernetes.  NexClipper uses InfluxDB as default for long-term storage and gives you an option to integrate Prometheus depending on your preference.

**more information about NexClipper is** [**here**](https://github.com/NexClipper/NexClipper)

