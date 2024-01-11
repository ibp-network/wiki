---
sidebar_position: 1
---

# Bootnodes

A bootnode is a regular network node used to discover other nodes.

Most of the time the bootnodes' mechanisms are already included in the network's chain specification file, and the end users do not concern about those details.

However, you can also manually specify additional bootnodes via the command line interface (CLI) for most Substrate-based networks, like that:

```shell
# The generic command:
<BINARY> --bootnodes <MULTIADDRESS>

# This is only an example
polkadot --bootnodes "/dns/boot.gatotech.network/tcp/33100/p2p/12D3KooWK4E16jKk9nRhvC4RfrDVgcZzExg8Q3Q2G7ABUUitks1w"
```

The `<MULTIADDR>` argument can hold one or more bootnodes' [multiaddresses](https://docs.libp2p.io/concepts/fundamentals/addressing/) separated by spaces.

## Testing a bootnode

For all bootnodes listed in this document, you can quickly test if it is working by using the below generic command (adjust according to your chain)

```shell
# Testing a bootnode
<BINARY> --chain <CHAIN> --bootnodes <MULTIADDR>

# This is only an example
polkadot --no-hardware-benchmarks --no-mdns --chain polkadot.json --bootnodes "/dns/boot.gatotech.network/tcp/33100/p2p/12D3KooWK4E16jKk9nRhvC4RfrDVgcZzExg8Q3Q2G7ABUUitks1w"
```

Let us dive in the recommended command flags:
- `--chain`: please use the modified chainspec files available at this [IBP Repository](https://github.com/ibp-network/config/tree/main/chain-spec) these are basically the same chainspecs of the original networks but the bootnodes' information has been removed.
- `--bootnodes`: in here you specify the bootnode(s) you want to test.
- `--no-hardware-benchmarks`: (optional) this may speed up the test execution by omitting the initial hardware checks.
- `--no-mdns`: (optional) this could also help mitigating the search of peers in the local network so focus is on the remote bootnode only.

:::info
There was a previous methodology, used historically to test bootnodes, that leveraged on the flags `--reserved-only` and `--reserved-nodes`. The IBP has decided that such methodology failed to test the core function of a bootnode and recommends the correct test indicated above.
:::

## Endpoint flavours

All bootnodes from the Infrastructure Builders' Programme are available in at least two different mandatory connection alternatives, and most members also including a third one in case there is use for that in the served community:

- **TCP over P2P**: basic transport protocol (TCP) allowing the connection between peers (P2P). This is the standard connectivity that is established among almost all nodes in the network, so it is only right that all IBP members provide an endpoint for this protocol.
- **WS over P2P**:  Websocket-encapsulated in TCP over the P2P network is a intermediate step towards the following alternative, however, little use-cases has been identified for this alternative (it is useful for testing and troubleshooting, though :wink:).
- **WSS over P2P**: Secured Websocket over the P2P network is the alternative used by all light-client nodes in the substrate chains, so this is the second endpoint that all IBP members provide to the community.

## TCP Endpoints

This is the default protocol used to connect nodes nodes directly to other nodes of the network via a TCP (Transmission Control Protocol) connection, so it is the one preferred when a new node (e.g. a validator) is deployed.

The p2p TCP multiaddresses of the bootnodes from the Infrastructure Builder's Programme are:

### Polkadot Chains

#### Relaychain

```shell
# Dwellir - Nigeria
/dns/polkadot-boot.dwellir.com/tcp/30334/ws/p2p/12D3KooWKvdDyRKqUfSAaUCbYiLwKY8uK3wDWpCuy2FiDLbkPTDJ

# Stake.plus - United States (DC)
/dns/boot.stake.plus/tcp/30333/p2p/12D3KooWKT4ZHNxXH4icMjdrv7EwWBkfbz5duxE5sdJKKeWFYi5n

# Helikon - Turkey
/dns/boot-node.helikon.io/tcp/7070/p2p/12D3KooWS9ZcvRxyzrSf6p63QfTCWs12nLoNKhGux865crgxVA4H

# Amforc - Switzerland
/dns/polkadot.bootnode.amforc.com/tcp/30333/p2p/12D3KooWAsuCEVCzUVUrtib8W82Yne3jgVGhQZN3hizko5FTnDg3

# Polkadotters - New Zealand
/dns/polkadot-bootnode.polkadotters.com/tcp/30333/p2p/12D3KooWPAVUgBaBk6n8SztLrMk8ESByncbAfRKUdxY1nygb9zG3

# Gatotech - Costa Rica
/dns/dot-bootnode-cr.gatotech.network/tcp/31310/p2p/12D3KooWK4E16jKk9nRhvC4RfrDVgcZzExg8Q3Q2G7ABUUitks1w

# Metaspan - United Kingdom
/dns/boot-polkadot.metaspan.io/tcp/13012/p2p/12D3KooWRjHFApinuqSBjoaDjQHvxwubQSpEVy5hrgC9Smvh92WF

# Turboflakes - Portugal
/dns/polkadot-bootnode.turboflakes.io/tcp/30300/p2p/12D3KooWHJBMZgt7ymAdTRtadPcGXpJw79vBGe8z53r9JMkZW7Ha
```

#### AssetHub

```shell

```

#### BridgeHub

```shell

```

#### Collectives

```shell

```

### Kusama Chains

#### Relaychain

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

#### AssetHub

```shell

```

#### BridgeHub

```shell

```

#### Encointer

```shell

```

### Westend Chains

#### Relaychain

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

#### AssetHub

```shell

```

#### BridgeHub

```shell

```

#### Collectives

```shell

```

### Paseo Chains

#### Relaychain

```shell

```

#### AssetHub

```shell

```

#### BridgeHub

```shell

```

#### Collectives

```shell

```

## WSS Endpoints

### Polkadot Chains

#### Relaychain

```shell

```

#### AssetHub

```shell

```

#### BridgeHub

```shell

```

#### Collectives

```shell

```

### Kusama Chains

#### Relaychain

```shell

```

#### AssetHub

```shell

```

#### BridgeHub

```shell

```

#### Encointer

```shell

```

### Westend Chains

#### Relaychain

```shell

```

#### AssetHub

```shell

```

#### BridgeHub

```shell

```

#### Collectives

```shell

```

### Paseo Chains

#### Relaychain

```shell

```

#### AssetHub

```shell

```

#### BridgeHub

```shell

```

#### Collectives

```shell

```