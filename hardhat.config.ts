import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    arbitrum: {
        url: "https://arb1.arbitrum.io/rpc",
        accounts: [process.env.PRIVATE_KEY ?? '']
    },
    hardhat: {
      chainId: 42161,
      forking: {
          url: "https://arb1.arbitrum.io/rpc",
      },
    }
  }
};

export default config;
