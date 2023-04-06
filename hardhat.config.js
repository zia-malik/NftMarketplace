require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "goerli",
  networks: {
    hardhat:{},
    goerli:{
      url: "your infura url",
      accounts: ["your private key"]
    }
  },
  etherscan: {
    apiKey: "Your etherscan api key",
  }
};
