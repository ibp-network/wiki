---
sidebar_position: 5
---

# External Links

## IBP Monitors

Each member could run a copy of the monitor. By running a monitor, members publishe their services via gossip to other monitors. Each monitor runs SLA checks on published services, and reports results via gossip. In this way, each instance of the monitor should have all the shared SLA data.

- stake.plus - http://192.96.202.185:30001
- metaspan - https://ibp-monitor.metaspan.io

Code for the monitor is open source [here](https://github.com/dotsama-ibp/dotsama-ibp/tree/main/monitor)


## Pull requests for boot nodes
 
### Requirements at stage P2 

The Pull Request below belongs to the Parity Polkadot repository:

| Member      | Polkadot                                                 | Kusama                                                   | Westend                                                  |
| ----------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| amforc      | (6077)[https://github.com/paritytech/polkadot/pull/6077] | (6077)[https://github.com/paritytech/polkadot/pull/6077] | (6434)[https://github.com/paritytech/polkadot/pull/6434] |
| stake.plus  | (6159)[https://github.com/paritytech/polkadot/pull/6159] | (6159)[https://github.com/paritytech/polkadot/pull/6159] | (6159)[https://github.com/paritytech/polkadot/pull/6159] |
| helikon     | (6240)[https://github.com/paritytech/polkadot/pull/6240] | (6240)[https://github.com/paritytech/polkadot/pull/6240] | (6240)[https://github.com/paritytech/polkadot/pull/6240] |
| gatotech    | (6499)[https://github.com/paritytech/polkadot/pull/6499] | (6499)[https://github.com/paritytech/polkadot/pull/6499] | (6499)[https://github.com/paritytech/polkadot/pull/6499] |
| metaspan    | (6499)[https://github.com/paritytech/polkadot/pull/6499] | (6499)[https://github.com/paritytech/polkadot/pull/6499] | (6499)[https://github.com/paritytech/polkadot/pull/6499] |
| turboflakes | (6628)[https://github.com/paritytech/polkadot/pull/6628] | (6628)[https://github.com/paritytech/polkadot/pull/6628] | (6628)[https://github.com/paritytech/polkadot/pull/6628] |

### Requirements at stage P4

The Pull requests below belongs to the Parity Cumulus repository:

For Polkadot's system parachains:

| Member      | Statemint                                               | Collectives                                             | BridgeHub |
| ----------- | ------------------------------------------------------- | ------------------------------------------------------- | --------- |
| stake.plus  | (2176)[https://github.com/paritytech/cumulus/pull/2176] | (2176)[https://github.com/paritytech/cumulus/pull/2176] | N/A       |
| metaspan    | (2218)[https://github.com/paritytech/cumulus/pull/2218] | (2218)[https://github.com/paritytech/cumulus/pull/2218] | N/A       |
| turboflakes | (2223)[https://github.com/paritytech/cumulus/pull/2223] | (2223)[https://github.com/paritytech/cumulus/pull/2223] | N/A       |
| gatotech    | (2237)[https://github.com/paritytech/cumulus/pull/2237] | (2237)[https://github.com/paritytech/cumulus/pull/2237] | N/A       |
| amforc      | (2246)[https://github.com/paritytech/cumulus/pull/2246] | (2246)[https://github.com/paritytech/cumulus/pull/2246] | N/A       |
| helikon     | pending                                                 | pending                                                 | N/A       |

For Kusama's system parachains:

| Member      | Statemine                                               | Collectives | BridgeHub                                               |
| ----------- | ------------------------------------------------------- | ----------- | ------------------------------------------------------- |
| stake.plus  | (2176)[https://github.com/paritytech/cumulus/pull/2176] | N/A         | (2201)[https://github.com/paritytech/cumulus/pull/2201] |
| metaspan    | (2218)[https://github.com/paritytech/cumulus/pull/2218] | N/A         | (2218)[https://github.com/paritytech/cumulus/pull/2218] |
| turboflakes | (2223)[https://github.com/paritytech/cumulus/pull/2223] | N/A         | (2223)[https://github.com/paritytech/cumulus/pull/2223] |
| gatotech    | (2237)[https://github.com/paritytech/cumulus/pull/2237] | N/A         | (2237)[https://github.com/paritytech/cumulus/pull/2237] |
| amforc      | (2246)[https://github.com/paritytech/cumulus/pull/2246] | N/A         | (2246)[https://github.com/paritytech/cumulus/pull/2246] |
| helikon     | pending                                                 | N/A         | pending                                                 |

For Westend's system parachains

| Member      | Westnmint                                               | Collectives                                             | BridgeHub |
| ----------- | ------------------------------------------------------- | ------------------------------------------------------- | --------- |
| stake.plus  | (2176)[https://github.com/paritytech/cumulus/pull/2176] | (2201)[https://github.com/paritytech/cumulus/pull/2201] | N/A       |
| metaspan    | (2218)[https://github.com/paritytech/cumulus/pull/2218] | (2218)[https://github.com/paritytech/cumulus/pull/2218] | N/A       |
| turboflakes | (2223)[https://github.com/paritytech/cumulus/pull/2223] | (2223)[https://github.com/paritytech/cumulus/pull/2223] | N/A       |
| gatotech    | (2237)[https://github.com/paritytech/cumulus/pull/2237] | (2237)[https://github.com/paritytech/cumulus/pull/2237] | N/A       |
| amforc      | (2246)[https://github.com/paritytech/cumulus/pull/2246] | (2246)[https://github.com/paritytech/cumulus/pull/2246] | N/A       |
| helikon     | pending                                                 | pending                                                 | N/A       |

And the following PRs belong to the Encointer repository:

| Member      | Encointer - Kusama                                               |
| ----------- | ---------------------------------------------------------------- |
| stake.plus  | (162)[https://github.com/encointer/encointer-parachain/pull/162] |
| metaspan    | (163)[https://github.com/encointer/encointer-parachain/pull/163] |
| turboflakes | (164)[https://github.com/encointer/encointer-parachain/pull/164] |
| gatotech    | (165)[https://github.com/encointer/encointer-parachain/pull/165] |
| amforc      | (166)[https://github.com/encointer/encointer-parachain/pull/166] |
| helikon     | pending                                                          |
