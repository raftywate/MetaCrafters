require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  networks: {
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: [process.env.PRIVATE_KEY],
    },
    goerli: {
      url: 'https://polygon-mainnet.g.alchemy.com/v2/FF7U2wSihJGUvzlhgHf32NlLPHZXqA0K',
      accounts: [process.env.PRIVATE_KEY],
    },
  }
};
