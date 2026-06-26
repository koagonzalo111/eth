import { ethers } from "hardhat";

async function main() {
  const Contract = await ethers.getContractFactory("YourContract"); // Replace
  const contract = await Contract.deploy(); // Add constructor args if needed

  await contract.waitForDeployment();
  console.log("✅ Deployed at:", contract.target);
}

main().catch((error) => {
  console.error("❌ Error:", error);
  process.exit(1);
});
