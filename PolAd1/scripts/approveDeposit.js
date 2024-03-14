// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const contractJSON = require("../artifacts/contracts/MetaToken.sol/MetaToken.json");

const contractAddress = "0x576842600F32686c7F109f3ff66B8d4C02D54B0B"; // 
const contractABI = contractJSON.abi;
const fxERC721ContractAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
const walletAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"; // place your public address for your wallet here

async function main() {

    const contract = await hre.ethers.getContractAt(contractABI, contractAddress);
    const fxContract = 
      await hre.ethers.getContractAt(fxRootContractABI, fxERC721ContractAddress);
    const totalNFTs = await contract.totalSupply();
    for (let i = 0; i < totalNFTs; i++) {
        const approveTx = await contract.approve(fxERC721ContractAddress, i);
        await approveTx.wait();
        console.log(`NFT with tokenId ${i} approved`);
    }
    console.log("NFTs approved");
    
    for (let i = 0; i< totalNFTs;i++) {
      const depositTx = 
        await fxContract.deposit(contractAddress, walletAddress, i, "0x6556");
        await depositTx.wait();
        console.log(`NFT with TokenId ${i} deposited`);
    }

    console.log("NFTs deposited");
  
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });

