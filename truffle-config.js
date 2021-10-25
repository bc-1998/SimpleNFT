const HDWalletProvider = require("@truffle/hdwallet-provider");
//const mnemonic = process.env.MNEMONIC
require("dotenv").config();
const mnemonic = process.env.MNEMONIC;
const rpc = process.env.RPC;
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
     polygon: {
      //provider: () => new HDWalletProvider(mnemonic, `https://rpc-mumbai.maticvigil.com/v1/bbcd12537cd9f228a8a54b0bc8b4f4db124000d5`),
      provider: () => new HDWalletProvider(mnemonic, rpc),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },     
  },
  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.8.0"
    }
  }
}
