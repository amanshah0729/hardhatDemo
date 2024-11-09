import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
dotenv.config();


const config: HardhatUserConfig = {
  solidity: "0.8.27",
  networks: {
    baseSepolia: {
      url: "https://sepolia.base.org",
      accounts: [process.env.BASE_SEPOLIA_PRIVATE_KEY!],
    },
  },
};

export default config;
