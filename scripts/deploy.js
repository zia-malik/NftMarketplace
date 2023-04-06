// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  const SBT = await hre.ethers.getContractFactory("SBT");
  const sbt = await SBT.deploy("UniversityOfLahore", "UOL");

  await sbt.deployed();

  // console.log(
  //   `NFT contract Deployed to ${nft.address}`
  // );

  console.log(
    `SBT contract Deployed to ${sbt.address}`
  );
}



// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


// SFT deployed to : 0x6314e575516252EF8A798Bd87e28bC17D10b12E9