import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  contractName: 'HotDawgs',
  tokenName: 'Hot Dawgs Collection',
  tokenSymbol: 'DAWG',
  hiddenMetadataUri: 'ipfs://Qmb6EtRZaKyvLRJMh3mmVbLshagSW6c3gV7Pn3hMW2BvS4/hidden.json',
  maxSupply: 500,
  whitelistSale: {
    price: 0.01,
    maxMintAmountPerTx: 2,
  },
  preSale: {
    price: 0.02,
    maxMintAmountPerTx: 3,
  },
  publicSale: {
    price: 0.05,
    maxMintAmountPerTx: 5,
  },
  contractAddress: "0x680156716741b71C3456080E11676D977A1CAEac",
  marketplaceIdentifier: 'HotDawgs',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;


