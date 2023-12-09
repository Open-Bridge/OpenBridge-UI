import { HardhatRuntimeEnvironment } from "hardhat/types"
import { DeployFunction } from "hardhat-deploy/types"
import verify from "../helper-functions"
import { networkConfig, developmentChains, ROUTER, LINK } from "../helper-hardhat-config"
import { ethers } from "hardhat"

const deployTokenTransferorContract: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment
) {
  // @ts-ignore
  const { getNamedAccounts, deployments, network } = hre
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
  log("----------------------------------------------------")

  log("Testnet Network detected: Deploying OpenBridge Contract...")
  const openBridge = await deploy("OpenBridge", {
    from: deployer,
    log: true,
    args: [ROUTER, LINK],
    waitConfirmations: networkConfig[network.name].blockConfirmations || 1,
  })
  log(`OpenBridge Contract Deployed at ${openBridge.address}`)
  log("---------------------------------------------------")
  log("Deployed Contract address detected: Verifying OpenBridge Contract...")
  if (
    (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) ||
    process.env.POLYGONSCAN_API_KEY
  ) {
    await verify(openBridge.address, [ROUTER, LINK])
  }
}

export default deployTokenTransferorContract
deployTokenTransferorContract.tags = ["all", "openBridge"]
