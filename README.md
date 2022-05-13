![HotDawgs Logotip](https://i.imgur.com/XnKV99V.png)

##### **Hot Dawgs** is a collection of 500 randomly generated and unique NFTs build on the [Ethereum](https://ethereum.org/en/) blockchain.
##### The collection is build on the [ERC-721](https://ethereum.org/en/developers/docs/standards/tokens/erc-721/) token standard, which is, unlike [ERC-20](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/), specialy designed for NFTs.

## Technologies used

As the base, I've used [Hashlip's Labs](https://github.com/hashlips-lab) Smart Contact & dApp. I've modified both programs to make them fit my needs. I've also added a couple features, such as .gif support.

**React + TypeScript**

## Deployment & Usage

### Smart Contract
To deploy the smart contract to **Rinkeby Testnet** using **Truffle**
```bash
  yarn deploy --network truffle
```
To validate the smart contract on **Rinkeby Testnet**
```bash
  yarn verify CONTRACT_ADDRESS --network truffle
```
To open the mint to *whitelisted* wallets
```bash
  yarn whitelist-open --network truffle
```
To close the mint
```bash
  yarn whitelist-close --network truffle
```
To open the mint to *public* wallets
```bash
  yarn public-open --network truffle
```
### Minting dApp
To deploy the minting dApp on **127.0.0.1**

```bash
  yarn dev-server
```
