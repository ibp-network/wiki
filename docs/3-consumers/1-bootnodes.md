---
sidebar_position: 1
---

# Bootnodes

A bootnode is a regular network node used to discover other nodes.

Most of the time the information about bootnodes are included in the network's chain specification file, so the end users do not need to provision these details separately.

However, you can also manually specify additional bootnodes via the command line interface (CLI) for most Subtrate-based networks, like that:

``` shell
# This is only an example
polkadot --bootnodes <MULTIADDR>
```

For the `MULTIADDR` argument, you can specify one or several bootnodes' [multiaddresses](https://docs.libp2p.io/concepts/fundamentals/addressing/) separared by spaces.

For all bootnodes listed in this document, you can quickly test if it is working by using the below generic command (adjust according to your chain)

``` shell
# Testing a bootnode
<BINARY> --chain <CHAIN> --reserved-only --reserved-nodes <MULTIADDR>
# example for Gatotech's Polkadot bootnode over p2p connection
polkadot --no-hardware-benchmarks --no-mdns --chain polkadot --reserved-only --reserved-nodes "/dns/dot-bootnode-cr.gatotech.network/tcp/31310/p2p/12D3KooWK4E16jKk9nRhvC4RfrDVgcZzExg8Q3Q2G7ABUUitks1w"
```

:::info
This method, althougth effective, is under revision due to its deviation from a pure bootnode's perspective (the new node connects to the bootnode and allows syncing the chain, but it doesn't allow to discover more nodes).
:::

The bootnodes from the Infrastructure Builders' Programme are available in three different connection alternatives, including basic TCP transport between peers  and websockets encapsulated in TCP with or without TLS-encryption.

## Peer-to-peer (p2p) 

This is the default protocol used to connect nodes nodes directly to other nodes of the network via a TCP (Transmission Control Protocol) connection, so it is the one prefered when a new node (e.g. a validator) is deployed.

The p2p bootnodes from the Infrastructure Builder's Programme are:

### Polkadot

```shell
# Dwellir
/dns/polkadot-boot.dwellir.com/tcp/30334/ws/p2p/12D3KooWKvdDyRKqUfSAaUCbYiLwKY8uK3wDWpCuy2FiDLbkPTDJ
# Stake.plus
/dns/boot.stake.plus/tcp/30333/p2p/12D3KooWKT4ZHNxXH4icMjdrv7EwWBkfbz5duxE5sdJKKeWFYi5n
# Helikon
/dns/boot-node.helikon.io/tcp/7070/p2p/12D3KooWS9ZcvRxyzrSf6p63QfTCWs12nLoNKhGux865crgxVA4H
# Amforc
/dns/polkadot.bootnode.amforc.com/tcp/30333/p2p/12D3KooWAsuCEVCzUVUrtib8W82Yne3jgVGhQZN3hizko5FTnDg3
# Polkadotters
/dns/polkadot-bootnode.polkadotters.com/tcp/30333/p2p/12D3KooWPAVUgBaBk6n8SztLrMk8ESByncbAfRKUdxY1nygb9zG3
# Gatotech
/dns/dot-bootnode-cr.gatotech.network/tcp/31310/p2p/12D3KooWK4E16jKk9nRhvC4RfrDVgcZzExg8Q3Q2G7ABUUitks1w
# Metaspan
/dns/boot-polkadot.metaspan.io/tcp/13012/p2p/12D3KooWRjHFApinuqSBjoaDjQHvxwubQSpEVy5hrgC9Smvh92WF
# Turboflakes
/dns/polkadot-bootnode.turboflakes.io/tcp/30300/p2p/12D3KooWHJBMZgt7ymAdTRtadPcGXpJw79vBGe8z53r9JMkZW7Ha
```

### Kusama

```shell
# Dwellir
/dns/kusama-boot.dwellir.com/tcp/30333/ws/p2p/12D3KooWFj2ndawdYyk2spc42Y2arYwb2TUoHLHFAsKuHRzWXwoJ
# Stake.plus
/dns/boot.stake.plus/tcp/31333/p2p/12D3KooWLa1UyG5xLPds2GbiRBCTJjpsVwRWHWN7Dff14yiNJRpR
# Helikon
/dns/boot-node.helikon.io/tcp/7060/p2p/12D3KooWL4KPqfAsPE2aY1g5Zo1CxsDwcdJ7mmAghK7cg6M2fdbD
# Amforc
/dns/kusama.bootnode.amforc.com/tcp/30333/p2p/12D3KooWLx6nsj6Fpd8biP1VDyuCUjazvRiGWyBam8PsqRJkbUb9
# Polkadotters
/dns/kusama-bootnode.polkadotters.com/tcp/30333/p2p/12D3KooWHB5rTeNkQdXNJ9ynvGz8Lpnmsctt7Tvp7mrYv6bcwbPG
# Gatotech
/dns/ksm-bootnode-cr.gatotech.network/tcp/31320/p2p/12D3KooWRNZXf99BfzQDE1C8YhuBbuy7Sj18UEf7FNpD8egbURYD
# Metaspan
/dns/boot-kusama.metaspan.io/tcp/23012/p2p/12D3KooWE1tq9ZL9AAxMiUBBqy1ENmh5pwfWabnoBPMo8gFPXhn6
# Turboflakes
/dns/kusama-bootnode.turboflakes.io/tcp/30305/p2p/12D3KooWR6cMhCYRhbJdqYZfzWZT6bcck3unpRLk8GBQGmHBgPwu
```

### Westend

```shell
# Stake.plus
/dns/boot.stake.plus/tcp/32333/p2p/12D3KooWK8fjVoSvMq5copQYMsdYreSGPGgcMbGMgbMDPfpf3sm7
# Helikon
/dns/boot-node.helikon.io/tcp/7080/p2p/12D3KooWRFDPyT8vA8mLzh6dJoyujn4QNjeqi6Ch79eSMz9beKXC
# Amforc
/dns/westend.bootnode.amforc.com/tcp/30333/p2p/12D3KooWJ5y9ZgVepBQNW4aabrxgmnrApdVnscqgKWiUu4BNJbC8
# Polkadotters
/dns/westend-bootnode.polkadotters.com/tcp/30333/p2p/12D3KooWHPHb64jXMtSRJDrYFATWeLnvChL8NtWVttY67DCH1eC5
# Gatotech
/dns/wnd-bootnode-cr.gatotech.network/tcp/31330/p2p/12D3KooWQGR1vUhoy6mvQorFp3bZFn6NNezhQZ6NWnVV7tpFgoPd
# Metaspan
/dns/boot-westend.metaspan.io/tcp/33012/p2p/12D3KooWNTau7iG4G9cUJSwwt2QJP1W88pUf2SgqsHjRU2RL8pfa
# Turboflakes
/dns/westend-bootnode.turboflakes.io/tcp/30310/p2p/12D3KooWJvPDCZmReU46ghpCMJCPVUvUCav4WQdKtXQhZgJdH6tZ
```

## Websocket (over p2p)

## Secured Websocket (over p2p)

