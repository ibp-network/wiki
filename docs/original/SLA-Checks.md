---
sidebar_position: 9
---

# SLA Checks

The members agree to the following SLA.

The [SLA Monitor](https://github.com/dotsama-ibp/dotsama-ibp/tree/main/monitor) will test for these conditions periodically. Failure to meet the SLA would result in loss of 'points', which could affect the member payments and/or membership.

# Membership SLA

## DOT & KSM Bond
- each member is required to bond 5000 DOT &  KSM 

# Technical SLA

For each service, the following technical checks should be performed

## Boot node

- test connection via peer.dial (+ make rpc call over P2P?)
- security checks - same as RPC node

## RPC node

### availability
- target: 99.9% uptime
- "ping" for network sockets (equivalents of: 30333, 9900, 9933, 9944)
- syncing? is the node up-to-date?

### performance
- target <100 ms
- RPC connection, query
- #peers (api.rpc.sytem.health)
```json
{
  "peers": 16
  "isSyncing": false
  "shouldHavePeers": true
}
```

### reliability
- software version - get from telemetry
- (get this from the latest release from paritytech/polkadot)
```bash
get_latest_release() {
  curl --silent "https://api.github.com/repos/paritytech/polkadot/releases/latest" | # Get latest release from GitHub api
    grep '"tag_name":' |                                            # Get tag line
    sed -E 's/.*"([^"]+)".*/\1/'                                    # Pluck JSON value
}
# returns
v0.9.37
```
```js
const version = await api.call.core.version()
console.log('version', version.toHuman())
```
```
# returns
version {
  specName: 'westend',
  implName: 'parity-westend',
  authoringVersion: '2',
  specVersion: '9,370',
  implVersion: '0',
  apis: [
    [ '0xdf6acb689907609b', '4' ],
    [ '0x37e397fc7c91f5e4', '1' ],
    [ '0x40fe3ad401f8959a', '6' ],
...
[ '0x17a6bc0d0062aeb3', '1' ]
  ],
  transactionVersion: '18',
  stateVersion: '0'
}
```

### security
- `--rpc-methods="safe"`
```js
  const methods = await api.rpc.rpc.methods()
  console.log('methods', methods.toHuman())
  // list of exposed methods: includes system_peers !!
  // THIS SHOULD FAIL
  const peers = await api.rpc.system.peers()
  console.log('peers', peers.toHuman())

```

### other 
- ssl certificate expired?
- 