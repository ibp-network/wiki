---
sidebar_position: 1
---

# Bootnodes

A bootnode is a regular network node used to discover other nodes.

Most of the time the bootnodes' mechanisms are already included in the relevant network's chain specification file, and the end users do not need to concern about those details.

However, you can also manually specify additional bootnodes via the command line interface (CLI) for most Substrate-based networks, like that:

```shell
# The generic command:
<BINARY> --bootnodes <MULTIADDRESS>

# This is only an example
polkadot --bootnodes "/dns/boot.gatotech.network/tcp/33100/p2p/12D3KooWK4E16jKk9nRhvC4RfrDVgcZzExg8Q3Q2G7ABUUitks1w"
```

::: info
The `<MULTIADDR>` argument can hold one or more bootnodes' [multiaddresses](https://docs.libp2p.io/concepts/fundamentals/addressing/) separated by spaces.
:::

## Endpoint flavours

All bootnodes from the Infrastructure Builders' Programme are available in at least two different mandatory connection alternatives:

- **TCP over P2P**: basic Transmission Control Protocol (TCP) allowing the connection between peers (P2P). This is the standard connectivity that is established among almost all nodes in the network, so it is only right that all IBP members provide an endpoint for this protocol.
- **WSS over P2P**: Secured Websocket over the P2P network is the alternative used by all light-client nodes in the substrate chains, so this is the second endpoint that all IBP members provide to the community.

## TCP over P2P

This is the default protocol that nodes use to connect directly to other nodes of the network, so it is the one preferred when a new node (e.g. a validator) is deployed.

The p2p TCP multiaddresses of the bootnodes from the Infrastructure Builder's Programme are:

### Polkadot Chains

#### Relaychain

``` shell
# Lagos, Nigeria, Africa.
/dns/polkadot-boot-ng.dwellir.com/tcp/30336/p2p/12D3KooWFFqjBKoSdQniRpw1Y8W6kkV7takWv1DU2ZMkaA81PYVq

# San Jose, Costa Rica, Central America
/dns/boot-cr.gatotech.network/tcp/33100/p2p/12D3KooWK4E16jKk9nRhvC4RfrDVgcZzExg8Q3Q2G7ABUUitks1w

# Phoenix AZ, United States, North America.
/dns/ibp-boot-polkadot.luckyfriday.io/tcp/30333/p2p/12D3KooWEjk6QXrZJ26fLpaajisJGHiz6WiQsR8k7mkM9GmWKnRZ

# Washington DC, United States, North America.
/dns/boot.stake.plus/tcp/30333/p2p/12D3KooWKT4ZHNxXH4icMjdrv7EwWBkfbz5duxE5sdJKKeWFYi5n

# Santiago, Chile, South America
#pending 

# Mumbai, India, Asia.
/dns/polkadot-bootnode.radiumblock.com/tcp/30333/p2p/12D3KooWNwWNRrPrTk4qMah1YszudMjxNw2qag7Kunhw3Ghs9ea5

# Bangkok, Thailand, Asia.
/dns/dot14.rotko.net/tcp/33214/p2p/12D3KooWPyEvPEXghnMC67Gff6PuZiSvfx3fmziKiPZcGStZ5xff

# Istanbul, Turkey, Asia.
/dns/boot-node.helikon.io/tcp/7070/p2p/12D3KooWS9ZcvRxyzrSf6p63QfTCWs12nLoNKhGux865crgxVA4H

# High Wycombe, England, Europe.
/dns/boot.interweb-it.com/tcp/13012/p2p/12D3KooWRjHFApinuqSBjoaDjQHvxwubQSpEVy5hrgC9Smvh92WF

# Lisbon, Portugal, Europe.
/dns/polkadot-bootnode.turboflakes.io/tcp/30300/p2p/12D3KooWHJBMZgt7ymAdTRtadPcGXpJw79vBGe8z53r9JMkZW7Ha

# Lucerne, Switzerland, Europe.
/dns/polkadot.bootnode.amforc.com/tcp/30333/p2p/12D3KooWAsuCEVCzUVUrtib8W82Yne3jgVGhQZN3hizko5FTnDg3

# Christchurch, New Zealand, Oceania.
/dns/polkadot-bootnode.polkadotters.com/tcp/30333/p2p/12D3KooWPAVUgBaBk6n8SztLrMk8ESByncbAfRKUdxY1nygb9zG3
```

<!---
20240422 Last audited 22 APR 2024
20240422 Polkadotters DOT bootnode failed to function, waiting for reply
-->

#### AssetHub

``` shell
# Lagos, Nigeria, Africa.
/dns/statemint-boot-ng.dwellir.com/tcp/30344/p2p/12D3KooWEFrNuNk8fPdQS2hf34Gmqi6dGSvrETshGJUrqrvfRDZr

# San Jose, Costa Rica, Central America
/dns/boot.gatotech.network/tcp/33110/p2p/12D3KooWKgwQfAeDoJARdtxFNNWfbYmcu6s4yUuSifnNoDgzHZgm

# Phoenix AZ, United States, North America.
#pending

# Washington DC, United States, North America.
/dns/boot.stake.plus/tcp/35333/p2p/12D3KooWFrQjYaPZSSLLxEVmoaHFcrF6VoY4awG4KRSLaqy3JCdQ

# Santiago, Chile, South America
#pending 

# Mumbai, India, Asia.
/dns/statemint-bootnode.radiumblock.com/tcp/30333/p2p/12D3KooWLKxHom7f3XawRJqrF8RwiKK5Sj3qZqz5c7hF6eJeXhTx

# Bangkok, Thailand, Asia.
/dns/mint14.rotko.net/tcp/33514/p2p/12D3KooWKkzLjYF6M5eEs7nYiqEtRqY8SGVouoCwo3nCWsRnThDW

# Istanbul, Turkey, Asia.
/dns/boot-node.helikon.io/tcp/10220/p2p/12D3KooW9uybhguhDjVJc3U3kgZC3i8rWmAnSpbnJkmuR7C6ZsRW

# High Wycombe, England, Europe.
/dns/boot.metaspan.io/tcp/16052/p2p/12D3KooWLwiJuvqQUB4kYaSjLenFKH9dWZhGZ4qi7pSb3sUYU651

# Lisbon, Portugal, Europe.
/dns/statemint-bootnode.turboflakes.io/tcp/30315/p2p/12D3KooWL8CyLww3m3pRySQGGYGNJhWDMqko3j5xi67ckP7hDUvo

# Lucerne, Switzerland, Europe.
/dns/statemint.bootnode.amforc.com/tcp/30341/p2p/12D3KooWByohP9FXn7ao8syS167qJsbFdpa7fY2Y24xbKtt3r7Ls

# Christchurch, New Zealand, Oceania.
/dns/asset-hub-polkadot.bootnodes.polkadotters.com/tcp/30508/p2p/12D3KooWKbfY9a9oywxMJKiALmt7yhrdQkjXMtvxhhDDN23vG93R
```

<!---
20240426 Last audited 26 APR 2024.
20240426 LuckyFriday bootnode p2p endpoint missing, waiting reply.
20240426 Polkadotters bootnode failed, waiting reply.
-->

#### BridgeHub

```shell

```

#### Collectives

```shell

```

### Kusama Chains

#### Relaychain

```shell
# Lagos, Nigeria, Africa.
/dns/kusama-boot-ng.dwellir.com/tcp/30334/p2p/12D3KooWLswepVYVdCNduvWRTyNTaDMXEBcmvJdZ9Bhw3u2Jhad2

# San Jose, Costa Rica, Central America
/dns/boot-cr.gatotech.network/tcp/33200/p2p/12D3KooWRNZXf99BfzQDE1C8YhuBbuy7Sj18UEf7FNpD8egbURYD

# Phoenix AZ, United States, North America.
/dns/ibp-boot-kusama.luckyfriday.io/tcp/30333/p2p/12D3KooW9vu1GWHBuxyhm7rZgD3fhGZpNajPXFexadvhujWMgwfT

# Washington DC, United States, North America.
/dns/boot.stake.plus/tcp/31333/p2p/12D3KooWLa1UyG5xLPds2GbiRBCTJjpsVwRWHWN7Dff14yiNJRpR

# Mumbai, India, Asia.
/dns/kusama-bootnode.radiumblock.com/tcp/30335/wss/p2p/12D3KooWGzKffWe7JSXeKMQeSQC5xfBafZtgBDCuBVxmwe2TJRuc

# Bangkok, Thailand, Asia.
/dns/ksm14.rotko.net/tcp/33224/p2p/12D3KooWAa5THTw8HPfnhEei23HdL8P9McBXdozG2oTtMMksjZkK

# Istanbul, Turkey, Asia.
/dns/boot-node.helikon.io/tcp/7060/p2p/12D3KooWL4KPqfAsPE2aY1g5Zo1CxsDwcdJ7mmAghK7cg6M2fdbD

# High Wycombe, England, Europe.
/dns/boot-kusama.metaspan.io/tcp/23012/p2p/12D3KooWE1tq9ZL9AAxMiUBBqy1ENmh5pwfWabnoBPMo8gFPXhn6

# Lisbon, Portugal, Europe.
/dns/kusama-bootnode.turboflakes.io/tcp/30305/p2p/12D3KooWR6cMhCYRhbJdqYZfzWZT6bcck3unpRLk8GBQGmHBgPwu

# Lucerne, Switzerland, Europe.
/dns/kusama.bootnode.amforc.com/tcp/30333/p2p/12D3KooWLx6nsj6Fpd8biP1VDyuCUjazvRiGWyBam8PsqRJkbUb9

# Christchurch, New Zealand, Oceania.
/dns/kusama-bootnode.polkadotters.com/tcp/30333/p2p/12D3KooWHB5rTeNkQdXNJ9ynvGz8Lpnmsctt7Tvp7mrYv6bcwbPG
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
# Lagos, Nigeria, Africa.
/dns/westend-boot-ng.dwellir.com/tcp/30335/p2p/12D3KooWJifoDhCL3swAKt7MWhFb7wLRFD9oG33AL3nAathmU24x

# San Jose, Costa Rica, Central America
/dns/boot-cr.gatotech.network/tcp/33300/p2p/12D3KooWQGR1vUhoy6mvQorFp3bZFn6NNezhQZ6NWnVV7tpFgoPd

# Phoenix AZ, United States, North America.
/dns/ibp-boot-westend.luckyfriday.io/tcp/30333/p2p/12D3KooWDg1YEytdwFFNWroFj6gio4YFsMB3miSbHKgdpJteUMB9

# Washington DC, United States, North America.
/dns/boot.stake.plus/tcp/32333/p2p/12D3KooWK8fjVoSvMq5copQYMsdYreSGPGgcMbGMgbMDPfpf3sm7

# Mumbai, India, Asia.
/dns/westend-bootnode.radiumblock.com/tcp/30333/p2p/12D3KooWJBowJuX1TaWNWHt8Dz8z44BoCZunLCfFqxA2rLTn6TBD

# Bangkok, Thailand, Asia.
/dns/wnd14.rotko.net/tcp/33234/p2p/12D3KooWLK8Zj1uZ46phU3vQwiDVda8tB76S8J26rXZQLHpwWkDJ

# Istanbul, Turkey, Asia.
/dns/boot-node.helikon.io/tcp/7080/p2p/12D3KooWRFDPyT8vA8mLzh6dJoyujn4QNjeqi6Ch79eSMz9beKXC

# High Wycombe, England, Europe.
/dns/boot-westend.metaspan.io/tcp/33012/p2p/12D3KooWNTau7iG4G9cUJSwwt2QJP1W88pUf2SgqsHjRU2RL8pfa

# Lisbon, Portugal, Europe.
/dns/westend-bootnode.turboflakes.io/tcp/30310/p2p/12D3KooWJvPDCZmReU46ghpCMJCPVUvUCav4WQdKtXQhZgJdH6tZ

# Lucerne, Switzerland, Europe.
/dns/westend.bootnode.amforc.com/tcp/30333/p2p/12D3KooWJ5y9ZgVepBQNW4aabrxgmnrApdVnscqgKWiUu4BNJbC8

# Christchurch, New Zealand, Oceania.
/dns/westend-bootnode.polkadotters.com/tcp/30333/p2p/12D3KooWHPHb64jXMtSRJDrYFATWeLnvChL8NtWVttY67DCH1eC5
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
# Lagos, Nigeria, Africa.


# San Jose, Costa Rica, Central America
/dns/boot.gatotech.network/tcp/33400/p2p/12D3KooWEvz5Ygv3MhCUNTVQbUTVhzhvf4KKcNoe5M5YbVLPBeeW

# Phoenix AZ, United States, North America.


# Washington DC, United States, North America.


# Mumbai, India, Asia.
/dns/paseo-bootnode.radiumblock.com/tcp/30333/p2p/12D3KooWADeaC8zag4Qrb4GosSn65MmfVZztRPMaBdgZnQqXRo

# Bangkok, Thailand, Asia.


# Istanbul, Turkey, Asia.
/dns/boot-node.helikon.io/tcp/10020/p2p/12D3KooWBetfzZpf6tGihKrqCo5z854Ub4ZNAUUTRT6eYHNh7FYi

# High Wycombe, England, Europe.


# Lisbon, Portugal, Europe.


# Lucerne, Switzerland, Europe.
/dns/paseo.bootnode.amforc.com/tcp/30333/wss/p2p/12D3KooWFD81HC9memUwuGMLvhDDEfmXjn6jC4n7zyNs3vToXapS

# Christchurch, New Zealand, Oceania.

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
# Lagos, Nigeria, Africa.


# San Jose, Costa Rica, Central America


# Phoenix AZ, United States, North America.


# Washington DC, United States, North America.


# Mumbai, India, Asia.


# Bangkok, Thailand, Asia.


# Istanbul, Turkey, Asia.


# High Wycombe, England, Europe.


# Lisbon, Portugal, Europe.


# Lucerne, Switzerland, Europe.


# Christchurch, New Zealand, Oceania.

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
# Lagos, Nigeria, Africa.


# San Jose, Costa Rica, Central America


# Phoenix AZ, United States, North America.


# Washington DC, United States, North America.


# Mumbai, India, Asia.


# Bangkok, Thailand, Asia.


# Istanbul, Turkey, Asia.


# High Wycombe, England, Europe.


# Lisbon, Portugal, Europe.


# Lucerne, Switzerland, Europe.


# Christchurch, New Zealand, Oceania.

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
# Lagos, Nigeria, Africa.


# San Jose, Costa Rica, Central America


# Phoenix AZ, United States, North America.


# Washington DC, United States, North America.


# Mumbai, India, Asia.


# Bangkok, Thailand, Asia.


# Istanbul, Turkey, Asia.


# High Wycombe, England, Europe.


# Lisbon, Portugal, Europe.


# Lucerne, Switzerland, Europe.


# Christchurch, New Zealand, Oceania.

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
# Lagos, Nigeria, Africa.


# San Jose, Costa Rica, Central America


# Phoenix AZ, United States, North America.


# Washington DC, United States, North America.


# Mumbai, India, Asia.


# Bangkok, Thailand, Asia.


# Istanbul, Turkey, Asia.


# High Wycombe, England, Europe.


# Lisbon, Portugal, Europe.


# Lucerne, Switzerland, Europe.


# Christchurch, New Zealand, Oceania.

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
