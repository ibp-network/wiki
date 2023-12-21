---
sidebar_position: 2
---

# Endpoints

An endpoint, in the realm of the Infrastructure Builders' Programme, refers to the location where 3rd party applications can submit their Remote Procedure Call (RPC) requests.

Most of the standard tooling developed for the substrate networks can benefit from the IBP's endpoints and some of them (e.g. `polkadot{js}` wallet, polkassembly, subsquare, etc.) already use our services.

## Geolocation

Thanks to the geodiverse distribution of the members in the IBP, you only need to select the endpoint that is relevant to the network you want to interact with, and the geoDNS service will do its magic to serve you from the closest location available.

Additionally, the IBP offers its endpoints via 2x domain names (i.e. `ibp.network` & `dotters.network`) which utilise different geoDNS services and diverse technologies. This should result in elevated resiliency and improved latency times for a better user experience in most locations worldwide.

## Relaychains

### Polkadot

Please feel free to use any/all of the following endpoints:

```shell
# For https connection:
https://rpc.ibp.network/polkadot
https://rpc.dotters.network/polkadot

# For secure Websocket connection:
wss://rpc.ibp.network/polkadot
wss://rpc.dotters.network/polkadot
```

### Kusama

Please feel free to use any/all of the following endpoints:

```shell
# For https connection:
https://rpc.ibp.network/kusama
https://rpc.dotters.network/kusama

# For secure Websocket connection:
wss://rpc.ibp.network/kusama
wss://rpc.dotters.network/kusama
```

### Westend

Please feel free to use any/all of the following endpoints:

```shell
# For https connection:
https://rpc.ibp.network/westend
https://rpc.dotters.network/westend

# For secure Websocket connection:
wss://rpc.ibp.network/westend
wss://rpc.dotters.network/westend
```

## Polkadot System Parachains

### Polkadot AssetHub (former Statemint)

Please feel free to use any/all of the following endpoints:

```shell
# For https connection:
https://sys.ibp.network/statemint
https://sys.dotters.network/statemint

# For secure Websocket connection:
wss://sys.ibp.network/statemint
wss://sys.dotters.network/statemint
```

### Polkadot Collectives

Please feel free to use any/all of the following endpoints:

```shell
# For https connection:
https://sys.ibp.network/collectives-polkadot
https://sys.dotters.network/collectives-polkadot

# For secure Websocket connection:
wss://sys.ibp.network/collectives-polkadot
wss://sys.dotters.network/collectives-polkadot
```

### Polkadot BridgeHub

Please feel free to use any/all of the following endpoints:

```shell
# For https connection:
https://sys.ibp.network/bridgehub-polkadot
https://sys.dotters.network/bridgehub-polkadot

# For secure Websocket connection:
wss://sys.ibp.network/bridgehub-polkadot
wss://sys.dotters.network/bridgehub-polkadot
```

## Kusama System Parachains

### Kusama AssetHub (former Statemine)

Please feel free to use any/all of the following endpoints:

```shell
# For https connection:
https://sys.ibp.network/statemine
https://sys.dotters.network/statemine

# For secure Websocket connection:
wss://sys.ibp.network/statemine
wss://sys.dotters.network/statemine
```

### Kusama Encointer

Please feel free to use any/all of the following endpoints:

```shell
# For https connection:
https://sys.ibp.network/encointer-kusama
https://sys.dotters.network/encointer-kusama

# For secure Websocket connection:
wss://sys.ibp.network/encointer-kusama
wss://sys.dotters.network/encointer-kusama
```

### Kusama BridgeHub

Please feel free to use any/all of the following endpoints:

```shell
# For https connection:
https://sys.ibp.network/bridgehub-kusama
https://sys.dotters.network/bridgehub-kusama

# For secure Websocket connection:
wss://sys.ibp.network/bridgehub-kusama
wss://sys.dotters.network/bridgehub-kusama
```

## Westend System Parachains

### Westend AssetHub (former Westmint)

Please feel free to use any/all of the following endpoints:

```shell
# For https connection:
https://sys.ibp.network/westmint
https://sys.dotters.network/westmint

# For secure Websocket connection:
wss://sys.ibp.network/westmint
wss://sys.dotters.network/westmint
```

### Westend Collectives

Please feel free to use any/all of the following endpoints:

```shell
# For https connection:
https://sys.ibp.network/collectives-westend
https://sys.dotters.network/collectives-westend

# For secure Websocket connection:
wss://sys.ibp.network/collectives-westend
wss://sys.dotters.network/collectives-westend
```

### Westend BridgeHub

Please feel free to use any/all of the following endpoints:

```shell
# For https connection:
https://sys.ibp.network/bridgehub-westend
https://sys.dotters.network/bridgehub-westend

# For secure Websocket connection:
wss://sys.ibp.network/bridgehub-westend
wss://sys.dotters.network/bridgehub-westend
```
