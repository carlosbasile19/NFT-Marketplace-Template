require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
dotenv = require("dotenv");
dotenv.config();

const sepolia_url = process.env.SEPOLIA_URL;
const account = process.env.WALLET_PRIVATE_KEY;

const fs = require('fs');
const { env } = require('process');
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    sepolia: {
      url: sepolia_url,
      accounts: [ account ]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};