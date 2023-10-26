---
sidebar_position: 1
---

# Substrate Nodes

Running a network node based on the Substrate framework (e.g. Polkadot, Kusama, etc..) is a relatively easy task thanks to the following standard procedure, of which only three are mandatory:

1. Provision a machine (or virtual machine) that can run the executable binary.
2. (optional) Create a separate user to run the binary.
3. (optional) Organise a directory where to store the blockchain database.
4. Download and prepare the executable binary.
5. (optional) Create a System Daemon Unit (systemd service) file to run in the background.
6. Execute the binary.

This procedure is the same for any type of nodes in any of the Substrate-based networks, it is applicable to bootnodes, archive nodes, validator nodes, and so on. However, each one of those types of nodes will have slightly different touches which are detailed in the following chapters, feel free to jump directly if you so desire:

- for [bootnodes](2-bootnodes.md) used in network bootstrapping and light-clients' startups.
- for [archive nodes](3-archives.md) used in Remote Procedure Call (RPC) services and Websocket (WS) Application Programming Interfaces (API).

Now, in this chapter, we will go through each general step:

## Provision Machine

Most binaries for Substrate-based networks are coded in Rust and compiled for Linux-based operating systems, with Ubuntu Server being a popular choice in the community.

Under the Infrastructure Builders' Programme, the standard recommended specifications for the virtual machines running relaychain archive nodes is:

```
Processor: 4 vCPU.
Technology: AMD Zen 3 or Intel 11th Gen (Rocket Lake).
Memory: 16GB RAM.
Storage (NVMe): Westend 512 GB, Kusama 2.0 TB, Polkadot 1.5 TB. (May 2023)
Bandwitdh: 400 Mbps symmetrical.
Traffic: 2.0 TB/month.
Operating System: Ubuntu Server.
Security: hardened, specially against DDoS attacks.
```

:::note
These specifications should be understood as the typical deployment, but you may want to increase processing power and memory for those networks showing signs of degradation or when performing the initial syncronisation of the databases.
:::

## Create Users

This step is optional.

However, it is recommended from a security standpoint, given that running the network node with a standard user that, for example, has access via `ssh` to the machine, could potentially have it easier to mess up with the running node.

For example, to create a system user called `polkadot` and its corresponding group but without password, without home directory and without login shell:

```shell
# Create a secured system user and its group
sudo adduser \
   --system \
   --group \
   --no-create-home \
   --disabled-password \
   --shell /usr/sbin/nologin \
   polkadot
```

For temporary deployments you can just use your own user, or the `root` one.

## Organise Directories

This step is optional.

However it is recommendable to understand that Substrate nodes require storage of files in three particular directories of the machine and learn the best practices applicable to these matters.

This will potentially save a lot of time and efforts when doing maintenance and troubleshooting:

1. **Executable Binary**: this should usually be stored in the `/usr/local/bin` directory along with the rest of the software installed locally. However for temporary deployments you can still  download the binary directly to your home directory or any convenient place in the machine.
2. **Blockchain Database**: this should usually be created inside the `/var/lib/` directory of the machine, and typically is named as `/var/lib/polkadot` . Nevertheless, in case a temporary node is being deployed, the binary will automatically create a hidden `~/.local/share/polkadot` folder in your home directory by default.
3. **Systemd Service**: finally, in case you are running your node as a systemd service, the configuration file will be stored in the `/etc/systemd/system` directory. This is obviously not needed when you are spinning a temporary node.

If you want to follow best practices, the only new directory you need to create is the location of the blockchain database, like this:

```shell
# Create the directory:
sudo mkdir /var/lib/polkadot

# Assign the correct owner to the new directory:
sudo chown polkadot:polkadot /var/lib/polkadot

# Assign the appropriate permissions to the binary:
sudo chmod 755 /var/lib/polkadot

# Verify the changes:
ls -l /var/lib/
```
It should result in the a similar output to:

```
(...)
drwxr-xr-x  3 polkadot  polkadot  4096 May 12 03:08 polkadot
(...)
```

## Download Binary

The binaries for the different Substrate-based relaychains and parachains are usually available in the following Github repositories:

- **Main Relaychains (Polkadot)**: e.g. Polkadot, Kusama, Westend, available at https://github.com/paritytech/polkadot.
- **Most Parachains (Cumulus)**: e.g. Statemint, Statemine, Westmint, available at https://github.com/paritytech/cumulus.
- **Encointer only**: available at https://github.com/encointer/encointer-parachain.

so for example, to download and make ready the lastest binary (May 2023) of the polkadot relaychain, you would perform the following commands:

```shell
# Download the binary from the Github releases:
sudo wget -P /usr/local/bin https://github.com/paritytech/polkadot/releases/download/v0.9.42/polkadot

# Assign the correct owner to the binary:
sudo chown polkadot:polkadot /usr/local/bin/polkadot

# Assign the appropriate permissions to the binary:
sudo chmod 755 /usr/local/bin/polkadot

# Verify the changes:
ls -l /usr/local/bin/
```

It should show the following output so indicate it's ready to be executed:

```
(...)
-rwxr-xr-x 1 polkadot polkadot 125085504 May 12 02:47 polkadot
(...)
```

## Create Service

This step is optional.

However it is the *de-facto* standard in the community to run their nodes as a `systemd` service, one of the best alternatives is to run it as a `docker` container and if you are just spinning a temporary node, please feel free to execute the binary directly from the Command Line Interface (CLI).

In case you decide for the tried and tested `systemd` service, you will need to create a service file with the following commands

```shell
# Open the text editor to create a new service file
sudo nano /etc/systemd/system/polkadot1.service
```

As the content of the file, let's start with the following basic configuration:

```systemd title="/etc/systemd/system/polkadot1.service"
[Unit]
Description=Polkadot Relaychain Node
After=network-online.target
Wants=network-online.target

[Service]
User=polkadot
Group=polkadot
ExecStart=/usr/local/bin/polkadot \
     --chain polkadot \
     --base-path /var/lib/polkadot/polkadot1/ 

Restart=always
RestartSec=120

[Install]
WantedBy=multi-user.target
```

You can copy the above and paste into the text editor, then save and close it.

## Run Service

Finally you can run the node by starting the `systemd` service:

```shell
# Start systemd service
sudo systemctl start polkadot

# Verify the 
sudo journalctl -f -u polkadot
```

Which should result in the following flood of information, feel free to exit the command with the `Ctrl + C` key combination.

```
2023-05-25 16:11:20 Parity Polkadot
2023-05-25 16:11:20 ✌️  version 0.9.42-9b1fc27cec4
2023-05-25 16:11:20 ❤️  by Parity Technologies <admin@parity.io>, 2017-2023
2023-05-25 16:11:20 📋 Chain specification: Polkadot
2023-05-25 16:11:20 🏷  Node name: lazy-feast-9516
2023-05-25 16:11:20 👤 Role: FULL
2023-05-25 16:11:20 💾 Database: RocksDb at /var/lib/polkadot/polkadot1/chains/polkadot/db/full
2023-05-25 16:11:20 ⛓  Native runtime: polkadot-9420 (parity-polkadot-0.tx23.au0)
2023-05-25 16:11:28 🏷  Local node identity is: 12D3KooWBFJHpw4odEXfDJpDeDQonn9ng5LFTR9PgSi3jB4reGMi
2023-05-25 16:11:28 💻 Operating system: linux
2023-05-25 16:11:28 💻 CPU architecture: x86_64
2023-05-25 16:11:28 💻 Target environment: gnu
2023-05-25 16:11:28 💻 CPU: AMD EPYC 7443 24-Core Processor
2023-05-25 16:11:28 💻 CPU cores: 6
2023-05-25 16:11:28 💻 Memory: 7951MB
2023-05-25 16:11:28 💻 Kernel: 5.15.0-72-generic
2023-05-25 16:11:28 💻 Linux distribution: Ubuntu 22.04.2 LTS
2023-05-25 16:11:28 💻 Virtual machine: yes
2023-05-25 16:11:28 📦 Highest known block at #58368
2023-05-25 16:11:28 〽️ Prometheus exporter started at 127.0.0.1:9615
2023-05-25 16:11:28 Running JSON-RPC HTTP server: addr=127.0.0.1:9933, allowed origins=["http://localhost:*", "http://127.0.0.1:*", "https://localhost:*", "https://127.0.0.1:*", "https://polkadot.js.org"]
2023-05-25 16:11:28 Running JSON-RPC WS server: addr=127.0.0.1:9944, allowed origins=["http://localhost:*", "http://127.0.0.1:*", "https://localhost:*", "https://127.0.0.1:*", "https://polkadot.js.org"]
2023-05-25 16:11:28 🏁 CPU score: 1.09 GiBs
2023-05-25 16:11:28 🏁 Memory score: 17.63 GiBs
2023-05-25 16:11:28 🏁 Disk score (seq. writes): 363.12 MiBs
2023-05-25 16:11:28 🏁 Disk score (rand. writes): 175.09 MiBs
2023-05-25 16:11:29 🔍 Discovered new external address for our node: /ip4/138.59.133.248/tcp/30333/ws/p2p/12D3KooWBFJHpw4odEXfDJpDeDQonn9ng5LFTR9PgSi3jB4reGMi
2023-05-25 16:11:33 ⚙️  Syncing, target=#15678795 (6 peers), best: #59683 (0xc8ec…53d4), finalized #59392 (0x3b77…9b02), ⬇ 132.6kiB/s ⬆ 12.9kiB/s
2023-05-25 16:11:38 ⚙️  Syncing 658.6 bps, target=#15678795 (11 peers), best: #62976 (0x3ea5…fa1f), finalized #62464 (0x918f…2827), ⬇ 328.7kiB/s ⬆ 7.1kiB/s
2023-05-25 16:11:43 ⚙️  Syncing 614.4 bps, target=#15678795 (13 peers), best: #66048 (0x7dcd…0c1b), finalized #65536 (0x5c8f…1904), ⬇ 241.5kiB/s ⬆ 12.0kiB/s
2023-05-25 16:11:48 ⚙️  Syncing 528.6 bps, target=#15678795 (18 peers), best: #68691 (0xc4a9…278d), finalized #68608 (0xc20c…c3ee), ⬇ 193.2kiB/s ⬆ 7.1kiB/s
```

As soon as you see that the new lines indicate `Syncing` or `Imported` and a certain quantity of peers connected to your node, it means you are part of the network. Congratulations!

To make this node permanent and allow it to restart after rebooting the machine, you must enable this `systemd` service:

```shell
# Enable the systemd service
sudo systemctl enable polkadot1

# Verify that the systemd service is enabled
sudo systemctl status polkadot1
```

```
● polkadot1.service - Polkadot Node
     Loaded: loaded (/etc/systemd/system/polkadot1.service; enabled; vendor preset: enabled)
     Active: active (running) since Sun 2023-05-21 08:34:25 UTC; 4 days ago
   Main PID: 864 (polkadot)
      Tasks: 23 (limit: 4571)
     Memory: 2.9G
        CPU: 1d 5h 42min 41.414s
     CGroup: /system.slice/polkadot1.service
             └─864 /usr/local/bin/polkadot --name GATOTECH😸DOT_BOOT --chain polkadot --base-path /var/lib/polkadot/polkadot1 --database paritydb --state-pruning 256 --prometheus-port 161>

May 25 16:21:05 dot-boot polkadot[864]: 2023-05-25 16:21:05 💤 Idle (40 peers), best: #15678890 (0xdc54…5756), finalized #15678887 (0x6f7c…cec1), ⬇ 391.6kiB/s ⬆ 390.5kiB/s
May 25 16:21:06 dot-boot polkadot[864]: 2023-05-25 16:21:06 ✨ Imported #15678891 (0x5eaf…b47a)
(...)
```

Please note that the second line states that the file `/etc/systemd/system/polkadot1.service` is `enabled`.

In the next chapters you will be able to modify the configuration of your node to make it a bootnode or a full archive node, depending on your needs to provide services under the Infrastructure Builders' Programme.

