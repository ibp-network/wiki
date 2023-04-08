---
sidebar_position: 1
---

# Stub

This is a stub


### Monitoring

Each member could run a copy of the monitoring system. By running a monitor, members publish their services via gossip to other monitors. Each monitor runs SLA checks on published services, and reports results via gossip. In this way, each instance of the monitor should have all the shared SLA data.

- stake.plus - http://192.96.202.185:30001
- metaspan - https://ibp-monitor.metaspan.io

Code for the monitor is open source [here](https://github.com/dotsama-ibp/dotsama-ibp/tree/main/monitor)
