---
id: config
title: Prometheus Configuration
hide_title: true
description: 
---

## Edit & Unit Test for Prometheus Config

Click on `Config` under Prometheus to modify the configuration in the currently provisioned state. It allows you to edit config and rules(alert, recording) on the editor screen. And you can use the `promtool test` to determine whether there is a problem with the unit test. If there is no problem, just save and apply it. 

![img](../static/img/nc-prom-config.png)

The functions that edit and test Prometheus Configurations are operated through `Edit`, `Save & Test`. This step checks for YAML syntax errors in the config and rules.

After the test passed, the configuration will be temporarily stored, but it doesn't mean actually applied to the Prometheus cluster. 

![img](../static/img/nc-config-test.png)

Let's take a look at cases where the test failed. For example, `global.scrape_timeout`, you should enter a value within 60 seconds. Otherwise,it is considered abnormal and the test fails. In the case of failure, the related log is printed on the page.

![img](../static/img/nc-config-fail.png)  

If there is no problem with the Configuration, apply it through `Apply & Reload` and restart the Prometheus instance.

![img](../static/img/nc-config-reload.png)