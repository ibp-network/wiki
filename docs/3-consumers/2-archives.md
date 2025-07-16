---
sidebar_position: 2
---

# Archives

An archive, in the realm of the Infrastructure Builders' Programme, refers to the location where 3rd party applications can submit their Remote Procedure Call (RPC) requests.

Most of the standard tooling developed for the substrate networks can benefit from the IBP's endpoints and some of them (e.g. `polkadot{js}` wallet, polkassembly, subsquare, etc.) already use our services.

## Specifications

The latest specifications for the RPC endpoints are:

- maximum request size: 16 MByte.
- maximum response size: 32 MByte.
- no rate limiting, no API throttling.

:::info
These specifications are subject to change in accordance with the social agreements with the networks, so please check these capabilities and limitations periodically.
:::

:::warning
In this page you will find only the latest syntax for the endpoints of the RPC services provided by the IBP, please note that from time to time developers and project teams may rename their chains and the IBP may update these names for better usability (e.g. `statemint` to  `asset-hub-polkadot`). The IBP will make its best effort to support the previous names or syntaxes for the longest terms possible, but this is not guaranteed.
:::

## Geolocation

Thanks to the geodiverse distribution of the members in the IBP, you only need to select the endpoint that is relevant to the network you want to interact with, and the geoDNS service will do its magic to serve you from the closest location available.

Additionally, the IBP offers its endpoints via 2x domain names (i.e. `ibp.network` & `dotters.network`) which utilise separate geoDNS services and diverse technologies. This should result in elevated resiliency and improved latency times for a better user experience in most locations worldwide.

## Polkadot Chains

### Polkadot Relay Chain

```shell
# For https connection:
https://rpc.ibp.network/polkadot
https://polkadot.dotters.network

# For secure Websocket connection:
wss://rpc.ibp.network/polkadot
wss://polkadot.dotters.network
```

### Polkadot System Chains

#### Polkadot AssetHub

```shell
# For https connection:
https://sys.ibp.network/asset-hub-polkadot
https://asset-hub-polkadot.dotters.network

# For secure Websocket connection:
wss://sys.ibp.network/asset-hub-polkadot
wss://asset-hub-polkadot.dotters.network
```

#### Polkadot BridgeHub

```shell
# For https connection:
https://sys.ibp.network/bridgehub-polkadot
https://bridge-hub-polkadot.dotters.network

# For secure Websocket connection:
wss://sys.ibp.network/bridgehub-polkadot
wss://bridge-hub-polkadot.dotters.network
```

#### Polkadot Collectives

```shell
# For https connection:
https://sys.ibp.network/collectives-polkadot
https://collectives-polkadot.dotters.network

# For secure Websocket connection:
wss://sys.ibp.network/collectives-polkadot
wss://collectives-polkadot.dotters.network
```

#### Polkadot People

```shell
# For https connection:
https://sys.ibp.network/people-polkadot
https://people-polkadot.dotters.network

# For secure Websocket connection:
wss://sys.ibp.network/people-polkadot
wss://people-polkadot.dotters.network
```

#### Polkadot Coretime

```shell
# For https connection:
https://sys.ibp.network/coretime-polkadot
https://coretime-polkadot.dotters.network

# For secure Websocket connection:
wss://sys.ibp.network/coretime-polkadot
wss://coretime-polkadot.dotters.network
```

### Polkadot Parachains

#### Polkadot Acala

```shell
# For https connection:
https://acala.ibp.network
https://acala.dotters.network

# For secure Websocket connection:
wss://acala.ibp.network
wss://acala.dotters.network
```

#### Polkadot Ajuna

```shell
# For https connection:
https://ajuna.ibp.network
https://ajuna.dotters.network

# For secure Websocket connection:
wss://ajuna.ibp.network
wss://ajuna.dotters.network
```

#### Polkadot Bifrost

```shell
# For https connection:
https://bifrost-polkadot.ibp.network
https://bifrost-polkadot.dotters.network

# For secure Websocket connection:
wss://bifrost-polkadot.ibp.network
wss://bifrost-polkadot.dotters.network
```

#### Polkadot Hydration

```shell
# For https connection:
https://hydration.ibp.network
https://hydration.dotters.network

# For secure Websocket connection:
wss://hydration.ibp.network
wss://hydration.dotters.network
```

#### Polkadot Hyperbridge

```shell
# For https connection:
https://nexus.ibp.network
https://nexus.dotters.network

# For secure Websocket connection:
wss://nexus.ibp.network
wss://nexus.dotters.network
```

#### Polkadot Kilt

```shell
# For https connection:
https://kilt.ibp.network
https://kilt.dotters.network

# For secure Websocket connection:
wss://kilt.ibp.network
wss://kilt.dotters.network
```

#### Polkadot Moonbeam

```shell
# For https connection:
https://moonbeam.ibp.network
https://moonbeam.dotters.network

# For secure Websocket connection:
wss://moonbeam.ibp.network
wss://moonbeam.dotters.network
```

#### Polkadot Mythos

```shell
# For https connection:
https://mythos.ibp.network
https://mythos.dotters.network

# For secure Websocket connection:
wss://mythos.ibp.network
wss://mythos.dotters.network
```

#### Polkadot Polimec

```shell
# For https connection:
https://polimec.ibp.network
https://polimec.dotters.network

# For secure Websocket connection:
wss://polimec.ibp.network
wss://polimec.dotters.network
```

#### Polkadot Unique

```shell
# For https connection:
https://unique.ibp.network
https://unique.dotters.network

# For secure Websocket connection:
wss://unique.ibp.network
wss://unique.dotters.network
```

## Kusama Chains

### Kusama Relay Chain

```shell
# For https connection:
https://rpc.ibp.network/kusama
https://kusama.dotters.network

# For secure Websocket connection:
wss://rpc.ibp.network/kusama
wss://kusama.dotters.network
```

### Kusama System Chains

#### Kusama AssetHub

```shell
# For https connection:
https://sys.ibp.network/asset-hub-kusama
https://asset-hub-kusama.dotters.network

# For secure Websocket connection:
wss://sys.ibp.network/asset-hub-kusama
wss://asset-hub-kusama.dotters.network
```

#### Kusama BridgeHub

```shell
# For https connection:
https://sys.ibp.network/bridgehub-kusama
https://bridge-hub-kusama.dotters.network

# For secure Websocket connection:
wss://sys.ibp.network/bridgehub-kusama
wss://bridge-hub-kusama.dotters.network
```

#### Kusama Encointer

```shell
# For https connection:
https://sys.ibp.network/encointer-kusama
https://encointer-kusama.dotters.network

# For secure Websocket connection:
wss://sys.ibp.network/encointer-kusama
wss://encointer-kusama.dotters.network
```

#### Kusama People

```shell
# For https connection:
https://sys.ibp.network/people-kusama
https://people-kusama.dotters.network

# For secure Websocket connection:
wss://sys.ibp.network/people-kusama
wss://people-kusama.dotters.network
```

#### Kusama Coretime

```shell
# For https connection:
https://sys.ibp.network/coretime-kusama
https://coretime-kusama.dotters.network

# For secure Websocket connection:
wss://sys.ibp.network/coretime-kusama
wss://coretime-kusama.dotters.network
```

## Westend Chains

### Westend Relay Chain

```shell
# For https connection:
https://rpc.ibp.network/westend
https://westend.dotters.network

# For secure Websocket connection:
wss://rpc.ibp.network/westend
wss://westend.dotters.network
```

### Westend System Chains

#### Westend AssetHub

```shell
# For https connection:
https://sys.ibp.network/asset-hub-westend
https://asset-hub-westend.dotters.network

# For secure Websocket connection:
wss://sys.ibp.network/asset-hub-westend
wss://asset-hub-westend.dotters.network
```

#### Westend BridgeHub

```shell
# For https connection:
https://sys.ibp.network/bridgehub-westend
https://bridge-hub-westend.dotters.network

# For secure Websocket connection:
wss://sys.ibp.network/bridgehub-westend
wss://bridge-hub-westend.dotters.network
```

#### Westend Collectives

```shell
# For https connection:
https://sys.ibp.network/collectives-westend
https://collectives-westend.dotters.network

# For secure Websocket connection:
wss://sys.ibp.network/collectives-westend
wss://collectives-westend.dotters.network
```

#### Westend People

```shell
# For https connection:
https://sys.ibp.network/people-westend
https://people-westend.dotters.network

# For secure Websocket connection:
wss://sys.ibp.network/people-westend
wss://people-westend.dotters.network
```

#### Westend Coretime

```shell
# For https connection:
https://sys.ibp.network/coretime-westend
https://coretime-westend.dotters.network

# For secure Websocket connection:
wss://sys.ibp.network/coretime-westend
wss://coretime-westend.dotters.network
```

## Paseo Chains

### Paseo Relay Chain

```shell
# For https connection:
https://rpc.ibp.network/paseo
https://paseo.dotters.network

# For secure Websocket connection:
wss://rpc.ibp.network/paseo
wss://paseo.dotters.network
```

### Paseo System Chains

#### Paseo AssetHub

```shell
# For https connection:
https://sys.ibp.network/asset-hub-paseo
https://asset-hub-paseo.dotters.network

# For secure Websocket connection:
wss://sys.ibp.network/asset-hub-paseo
wss://asset-hub-paseo.dotters.network
```

#### Paseo BridgeHub

```shell
# For https connection:
https://sys.ibp.network/bridgehub-paseo
https://bridge-hub-paseo.dotters.network

# For secure Websocket connection:
wss://sys.ibp.network/bridgehub-paseo
wss://bridge-hub-paseo.dotters.network
```

#### Paseo Collectives

```shell
# For https connection:
https://sys.ibp.network/collectives-paseo
https://collectives-paseo.dotters.network

# For secure Websocket connection:
wss://sys.ibp.network/collectives-paseo
wss://collectives-paseo.dotters.network
```

#### Paseo People

```shell
# For https connection:
https://sys.ibp.network/people-paseo
https://people-paseo.dotters.network

# For secure Websocket connection:
wss://sys.ibp.network/people-paseo
wss://people-paseo.dotters.network
```

#### Paseo Coretime

```shell
# For https connection:
https://sys.ibp.network/coretime-paseo
https://coretime-paseo.dotters.network

# For secure Websocket connection:
wss://sys.ibp.network/coretime-paseo
wss://coretime-paseo.dotters.network
```