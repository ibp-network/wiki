---
sidebar_position: 1
---

# Ring Network - Proxmox

For high speed connectivity among servers, specially important in [High Availability clusters](/docs/6-members/8-highavailability/1-proxmoxceph.md), you can interconnect them directly in a ring network.

This is particularly efficient when the quantity of interconnected servers is limited (i.e. less than 4) and the costs of a dedicated high speed network switch is deemed prohibitive.

The content of this tutorial is wholly based on the following links:

1. [Full Mesh Network for Ceph Server](https://pve.proxmox.com/wiki/Full_Mesh_Network_for_Ceph_Server#RSTP_Loop_Setup)
2. [Proper network connectivity verification and benchmarking](https://medium.com/@krisiasty/proper-network-connectivity-verification-and-benchmarking-d9cfc6dde7bf)

## RSTP Loop Setup

This setup requires the use of Open vSwitch (OVS) as it supports RSTP (Rapid Spanning Tree Protocol). The Linux bridge itself only supports STP (without the rapid) which usually needs too long to react to a changed topology. In our tests we saw the RSTP setup to recover from one network connection going down within a few seconds while STP took about 30 seconds. This is long enough for Ceph to start to complain and throw some warnings.

First the package `openvswitch-switch` needs to be installed on all nodes:

``` shell
apt install openvswitch-switch
```

The network configuration will look the same for each node, except maybe for the IP addresses and the NIC names.

``` shell
nano /etc/network/interfaces
```

Edit the content to add the Open vSwitch configuration to both NICs and to the virtual bridge

``` conf
auto lo
iface lo inet loopback

iface eno1 inet manual

iface eno2 inet manual

iface enp65s0f0 inet manual
    ovs_type OVSPort
    ovs_bridge vmbr7
    ovs_mtu 9000
    ovs_options other_config:rstp-enable=true other_config:rstp-path-cost=150 other_config:rstp-port-admin-edge=false other_config:rstp-port-auto-edge=false other_config:rstp-port-mcheck=true vlan_mode=native-untagged

iface enp65s0f1 inet manual
    ovs_type OVSPort
    ovs_bridge vmbr7
    ovs_mtu 9000
    ovs_options other_config:rstp-enable=true other_config:rstp-path-cost=150 other_config:rstp-port-admin-edge=false other_config:rstp-port-auto-edge=false other_config:rstp-port-mcheck=true vlan_mode=native-untagged

auto vmbr0
iface vmbr0 inet static
    address 190.124.251.133/32
    gateway 190.124.251.129
    bridge-ports eno1
    bridge-stp off
    bridge-fd 0

auto vmbr7
iface vmbr7 inet static
    address 10.0.0.1/29
    ovs_type OVSBridge
    ovs_ports enp65s0f0 enp65s0f1
    ovs_mtu 9000
    up ovs-vsctl set Bridge ${IFACE} rstp_enable=true other_config:rstp-priority=32768 other_config:rstp-forward-delay=4 other_config:rstp-max-age=6
    post-up sleep 10

```

For newer NICs (e.g. 100Gbe) you need to set the MTU with `ovs_mtu 9000` in the `vmbr1`, `eno18` and `eno19` configs.

You can check the RSTP status with

``` shell
ovs-appctl rstp/show
```

it will show the following report:

``` terminal
---- vmbr7 ----
Root ID:
  stp-priority    32768
  stp-system-id   b4:96:91:b3:b0:ea
  stp-hello-time  2s
  stp-max-age     6s
  stp-fwd-delay   4s
  This bridge is the root

Bridge ID:
  stp-priority    32768
  stp-system-id   b4:96:91:b3:b0:ea
  stp-hello-time  2s
  stp-max-age     6s
  stp-fwd-delay   4s

  Interface  Role       State      Cost     Pri.Nbr
  ---------- ---------- ---------- -------- -------
  enp65s0f0  Designated Forwarding 150      128.1
  enp65s0f1  Designated Forwarding 150      128.2
```

## Test Link Speeds

```shell
apt update
apt install iperf
```

on one end start the server:

```shell
iperf -s
```

the on the other run the client test:

```shell
iperf -c 10.0.0.1 -P8 --sum-only
```

and the result should show like below:

``` terminal
------------------------------------------------------------
Client connecting to 10.0.0.1, TCP port 5001
TCP window size:  325 KByte (default)
------------------------------------------------------------
[SUM-cnt] Interval       Transfer     Bandwidth
[SUM-8] 0.0000-10.0005 sec   115 GBytes  98.8 Gbits/sec
```
