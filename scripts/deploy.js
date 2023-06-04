
import hre from "hardhat";


async function main(){
const Lock = await hre.ethers.getContractFactory("Bank");
const lock = await Lock.deploy();

await lock.deployed();

console.log(
  `BANK CONTRACT deployed to ${lock.address}`
);
}

main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
  });