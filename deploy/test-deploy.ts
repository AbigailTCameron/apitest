const hre = require("hardhat");
const { ethers } = require("hardhat");
require('dotenv').config();

async function main() {

  const [deployer] = await ethers.getSigners();

  console.log("Deploying test contract with the account:", deployer.address);

  const testFactory = await ethers.getContractFactory("TestContractForAbigail");
  const testContract = await testFactory.deploy("Abigail Cameron"); 

  console.log(`deployed TestContractForAbigail at : ${testContract.address}`);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });