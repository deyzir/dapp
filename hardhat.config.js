require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
// const dotenv = require("dotenv");
// dotenv.config();
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
 task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
   const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
     console.log(account.address);
   }
   });
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */


const { API_URL, PRIVATE_KEY } = process.env;
 module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "goerli",
  networks: {
     hardhat: {},
     goerli: {
        url: API_URL,
        accounts: [`0x${PRIVATE_KEY}`],
     },
  },
  etherscan:{
     apiKey:"enter etherscan apı key ",
  }
}
// module.exports = {
//   solidity: "0.8.4",
//   networks:{
//     rinkeby:{
//       url: process.env.REACT_APP_RINKEBY_RPC_URL,
//       accounts:[process.env.REACT_APP_PRIVATE_KEY],
//     },
//   },
//   etherscan:{
//     apiKey:process.env.REACT_APP_ETHERSCAN_KEY,
//   },
// };
