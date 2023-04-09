---
sidebar_position: 1
---

# Bootnodes

A bootnode is a regular network node used to discover other nodes.

Most of the time the information about bootnodes are included in the network's chain specification file, so the end users do not need to provision these details separately.

However, you can also man ually specify additional bootnodes via the command line interface (CLI) for most Subtrate-based networks, like that:

``` shell
# This is only an example
polkadot --bootnodes <ADDR>
```

For the `ADDR` argument, you can specify one or several bootnodes (separared by spaces).

The bootnodes from Infrastructure Builders' Programme are available in three different connection alternatives:

## Peer-to-peer (p2p)

This is the default protocol used to connect between nodes of the network, so it is the one prefered when a new node (e.g. a validator) is deployed.

You can quickly test if a bootnode is working over the p2p protocol using the below generic command (adjust according to your chain)

``` shell
# Testing a bootnode
polkadot --no-hardware-benchmarks --no-mdns --chain <CHAIN> --reserved-only --reserved-nodes <ADDR>
# example for Gatotech's polkadot bootnode
polkadot --no-hardware-benchmarks --no-mdns --chain polkadot --reserved-only --reserved-nodes "/dns/dot-bootnode-cr.gatotech.network/tcp/31310/p2p/12D3KooWK4E16jKk9nRhvC4RfrDVgcZzExg8Q3Q2G7ABUUitks1w"
```

:::note

This method, althougth effective, is under revision due to its deviation from a pure bootnode's perspective (the new node connects to the bootnode and allows syncing the chain, but it doesn't allow to discover more nodes).

:::

The p2p bootnodes from the Infrastructure Builder's Programme are:

### Polkadot Ecosystem

| Chain    | bootnode multiaddress |
| -------- | --------------------- |
| polkadot | sf                    |
| ^        | fd                    |
| >        | kusama                |


### Kusama Ecosystem

### Westend Ecosystem

## Websocket (over p2p)

## Secured Websocket (over p2p)

