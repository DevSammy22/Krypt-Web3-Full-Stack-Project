/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");
//require("@nomiclabs/hardhat-ethers");
// require("dotenv").config();
// require("@nomiclabs/hardhat-etherscan");
// require("./tasks/block-number");
// require("solidity-coverage");
// require("hardhat-gas-reporter");
// require("hardhat-deploy");

// const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL;
// const PRIVATE_KEY = process.env.PRIVATE_KEY;
// const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
// const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;
module.exports = {
  //defaultNetwork: "hardhat",
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/Fiy7HkHjV0j-OzQ3zORPJr1s1PZuL_6J", //GOERLI_RPC_URL,
      accounts: [
        "d80757ffc4761571a767e7f242f3dbb044d2803e546826151c41440a08561f3d",
      ], //[PRIVATE_KEY],
      // chainId: 5,
      // blockConfirmations: 6,
    },
    // localhost: {
    //   url: "http://127.0.0.1:8545/", //LocalHost is different from Hardhart networks
    //   chainId: 31337,
    // },
  },
  // solidity: {
  //   compilers: [
  //     {
  //       version: "0.8.17",
  //     },
  //     {
  //       version: "0.6.6",
  //     },
  //   ],
  // },
  // etherscan: {
  //     apiKey: ETHERSCAN_API_KEY,
  // },
  // gasReporter: {
  //     enabled: true,
  //     outputFile: "gas-report.txt",
  //     noColors: true,
  //     currency: "USD",
  //     //coinmarketcap: COINMARKETCAP_API_KEY,
  // },
  // namedAccounts: {
  //     deployer: {
  //         default: 0, // here this will by default take the first account as deployer
  //         1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
  //     },
  // },
};
