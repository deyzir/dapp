
const hre = require("hardhat");
async function main() {
  const Miness = await hre.ethers.getContractFactory("Miness");
  const miness = await Miness.deploy();
  await miness.deployed();
  console.log("miness deployed to:", miness.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
//0x10E3b901Cecf63B88fb28c506A09500686faff56
