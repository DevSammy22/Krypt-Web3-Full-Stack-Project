// const { verifyMessage } = require("ethers/lib/utils");
// const { ethers, run, network } = require("hardhat"); //Here we are importing the ether from hardhat
// require("dotenv").config();
// //const fs = require("fs-extra"); //This is to read from the abi and bin files. (Use yarn add fs-extra to install it)
// //require("dotenv").config(); //This is for the code to see what is in the .env file

const main = async () => {
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  console.log("Deploying contract, please wait...");
  const transactions = await Transactions.deploy();
  await transactions.deployed();
  console.log("Transactions deployed to: ", transactions.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
// main()
//     .then(() => process.exit(0))
//     .catch((error) => {
//         console.error(error);
//         process.exit(1);
//     });
