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

For all bootnodes listed in this document, you can quickly test if it is working by using the below generic command (adjust according to your chain)

``` shell
# Testing a bootnode
polkadot --no-hardware-benchmarks --no-mdns --chain <CHAIN> --reserved-only --reserved-nodes <ADDR>
# example for Gatotech's Polkadot bootnode over p2p connection
polkadot --no-hardware-benchmarks --no-mdns --chain polkadot --reserved-only --reserved-nodes "/dns/dot-bootnode-cr.gatotech.network/tcp/31310/p2p/12D3KooWK4E16jKk9nRhvC4RfrDVgcZzExg8Q3Q2G7ABUUitks1w"
```

:::info

This method, althougth effective, is under revision due to its deviation from a pure bootnode's perspective (the new node connects to the bootnode and allows syncing the chain, but it doesn't allow to discover more nodes).

:::

The bootnodes from the Infrastructure Builders' Programme are available in three different connection alternatives:

## Peer-to-peer (p2p) 

This is the default protocol used to connect nodes nodes directly to other nodes of the network via a TCP (Transmission Control Protocol) connection, so it is the one prefered when a new node (e.g. a validator) is deployed.

The p2p bootnodes from the Infrastructure Builder's Programme are:

### Polkadot

- `/dns/polkadot-boot.dwellir.com/tcp/30334/ws/p2p/12D3KooWKvdDyRKqUfSAaUCbYiLwKY8uK3wDWpCuy2FiDLbkPTDJ`
- `/dns/boot.stake.plus/tcp/30333/p2p/12D3KooWKT4ZHNxXH4icMjdrv7EwWBkfbz5duxE5sdJKKeWFYi5n`
- `/dns/boot-node.helikon.io/tcp/7070/p2p/12D3KooWS9ZcvRxyzrSf6p63QfTCWs12nLoNKhGux865crgxVA4H`
- `/dns/polkadot.bootnode.amforc.com/tcp/30333/p2p/12D3KooWAsuCEVCzUVUrtib8W82Yne3jgVGhQZN3hizko5FTnDg3`
- `/dns/polkadot-bootnode.polkadotters.com/tcp/30333/p2p/12D3KooWPAVUgBaBk6n8SztLrMk8ESByncbAfRKUdxY1nygb9zG3`
- `/dns/dot-bootnode-cr.gatotech.network/tcp/31310/p2p/12D3KooWK4E16jKk9nRhvC4RfrDVgcZzExg8Q3Q2G7ABUUitks1w`
- `/dns/boot-polkadot.metaspan.io/tcp/13012/p2p/12D3KooWRjHFApinuqSBjoaDjQHvxwubQSpEVy5hrgC9Smvh92WF`
- `/dns/polkadot-bootnode.turboflakes.io/tcp/30300/p2p/12D3KooWHJBMZgt7ymAdTRtadPcGXpJw79vBGe8z53r9JMkZW7Ha`

### Kusama

### Westend

## Websocket (over p2p)

## Secured Websocket (over p2p)

