require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",

  networks:{
    sepolia:{
      url:`https://sepolia.infura.io/v3/${process.env.VITE_INFURA_LINK_API_KEY}`,
      accounts: [`${process.env.VITE_PRIVATE_KEY}`]
    }
  }
};
