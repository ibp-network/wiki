---
sidebar_position: 1
---

# Hello fellow!

We celebrate your arrival and are grateful for your interest in helping the IBP collective to achieve the objectives bestowed upon all of us!

In this section of the wiki you will find information relating to the aspect you will need to acquire and some guidance on the services which you need to deploy, with instruction on how to do that, according to the experience of the previous members who have contributed writing this wiki.

However, please do not understand this documentation as the only source of truth for your operations, feel free to use your own skills in technology that you are comfortable with, that helps avoiding the pitfalls of supply chain lock-in.

:::info
All your contributions to this wiki will be warmly welcome!
Whereas they mean to correct or update existing content, or to add new content about alternative technologies found viable for the services of the IBP, they are of high collective value, please do not hesitate to place your Pull Request (PR) against the [IBP's Wiki Github Repository](https://github.com/ibp-network/wiki)
:::

## Datacenter Considerations

The Infrastructure Builders' Programme prides itself in promoting best practices for the industry, that is the reason why your selected datacentre should meet with the following criteria:
- **100% Renewable Power**: This is a hard requirement to meet the goals inspired by the Paris Climate Agreement, where possible datacentres must be selected on their ability to provide net-zero network emissions. In regions where this is not feasible yet, a plan must be devise to achieve that by no later than year 2030.
- **Good, resiliant connectivity**: a strong connection to at least two major fibre networks and/or subsea cables, with at least 400Mbps of resilient bandwidth to the rack is required. The connection to the rack should also be realised with at least two cross-connects to the independent ISPs via independent routes and separate networking devices in the datacentre's own infrastructure.
- **Good, redundant electricity**: independet connections to at least two electricity companies and/or supply facilities (sub-stations), in N+1 or N+N arrangements, is required. These supplies should be handled by independent circuits all the way up to the rack's lines A + B.
- **Good, redundant cooling**: independent, redundant, fire-safe Air Handling Units (AHUs) should be implemented in the Datacentre to comply with a good level of resiliency in case breakdowns or failures occur in the main units.
- **Good security and safety**: appropriate means for access control of people, vehicles and materials, fire detection, alarm and suppression, and natural disasters detection / mitigation systems, like antiseismic construction and others, if applicable.

Any deviation from the above should be duly documented and explained, alongside with a plan to eventually move into compliance at a set date, in agreement with the curators of the Programme

## Hardware Considerations

As a decentralised entity, you are free to choose the specific brands and vendors which best serve your regions and interests.

There are, however, requirements and recomendations to take into consideration when selecting your hardware items:

**Requirements**:
- Solid State Drives (SSDs) conforming to NVMe PCIe 4.0 with at least 250K IOPS per TB (i.e. a 4TB drive must have a 1M IOPS throughput)

**Recommendations**:
- At least 3x similar servers are recommended in each datacentre location, so you can build High Availability (HA) clusters.
- At least 2x of each networking devices are recommended per function (i.e. 2x firewalls, 2x switches, 2 uplinks, etc) with resiliency configuration.
- All appliances (servers and networking devices) should have dual hot-swap power supplies (CPRS) to minimise disruptions.
- All appliances (servers and networking devices) with single supply should be connected to diverse power lines (i.e. switch1 to Line A and switch2 to line B).
- All NIC speeds should be at least 1GbE (ideally 10GbE) for Internet-facing production ports, and 25GbE (ideally 100GbE) for interconnection of servers in HA clusters.
- All networking devices should exhibit a very low latency time (< 1ms) and allow a high volume of sessions/connections (> 1M).
- Servers' motherboards should be PCIe 4.0 compatible, suppot ECC memory and provide means for remote management (DRAC, IPMI, etc.).
- Modern AMD and Intel processors are acceptable, bear in mind that if you plan to use Proxmox you may want the least quantity of processors with the highest amount of cores possible, while if you plan to use WMware, then processors up to 32 cores will result in less licencing fees for your operations.
- 32 physical cores (64 threads) is the minimum recommendation per server.
- 512 GB RAM is recommended per server (best if 1TB for future expansions). This needs to be at least DDR4, 3200Mhz, fully ECC compliant, however no requirements on registered (buffered) DIMMs are indicated.
- 15 TB storage is recommended per server (more will be needed for future expansions). This needs to comply with the 250K IOPS per TB requirement indicated above.
- NVMe drives can be provided in any form factor, with special preference towards U.3 hot-swap frontal bays, but U.2 and even M.2 drives on internal PCIe split cards are also acceptable.
- Be mindful about the power and cooling requirement of your appliances: 1) do not exceed the power rating of your power supplies and 2) servers should provide airflow from front to back, network devices usually reverse that (back to front) to allow installation of the ports-side in the same side where the server's ports are located, always follow your datacentre's convention on this.

### Monitoring

Each member could run a copy of the monitoring system. By running a monitor, members publish their services via gossip to other monitors. Each monitor runs SLA checks on published services, and reports results via gossip. In this way, each instance of the monitor should have all the shared SLA data.

- stake.plus - http://192.96.202.185:30001
- metaspan - https://ibp-monitor.metaspan.io

Code for the monitor is open source [here](https://github.com/dotsama-ibp/dotsama-ibp/tree/main/monitor)
