// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const contractJSON = require("../artifacts/contracts/MetaToken.sol/MetaToken.json");

const contractAddress = "0x66190B951917Dc2d521e83bc4e99705C4Aa71605"; // place your erc20 contract address here
const contractABI = contractJSON.abi;
const walletAddress = "0xbEeF312074d8b75B661BC07FF6135fD808E71890"; // place your public address for your wallet here

async function main() {

    const contract = await hre.ethers.getContractAt(contractABI, contractAddress);

    console.log(`${walletAddress} has: ${await contract.balanceOf(walletAddress)} NFTs`);

  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });