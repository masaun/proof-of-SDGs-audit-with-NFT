//@notice - Variable for storing smart contract instances
let saiReportRegistry
let proofOfAuditNFT

//@notice - Variable for storing smart contract addresses
let SAI_REPORT_REGISTRY
let PROOF_OF_AUDIT_NFT


/**
 * @notice Deploy smart contracts
 */ 
async function deploySmartContracts() {
    const something = "something"

    //@dev - Deploy the ProofOfAuditNFT.sol
    const ProofOfAuditNFT = await ethers.getContractFactory("ProofOfAuditNFT")
    proofOfAuditNFT = await ProofOfAuditNFT.deploy()
    //proofOfAuditNFT = await ProofOfAuditNFT.deploy({ gasLimit: 250000, gasPrice: 1000000000000 })
    PROOF_OF_AUDIT_NFT = proofOfAuditNFT.address
    await proofOfAuditNFT.deployed()
    console.log("PROOF_OF_AUDIT_NFT: ", PROOF_OF_AUDIT_NFT);

    //@dev - Deploy the SAIReportRegistry.sol
    const SAIReportRegistry = await ethers.getContractFactory("SAIReportRegistry")
    saiReportRegistry = await SAIReportRegistry.deploy(PROOF_OF_AUDIT_NFT, something)
    //saiReportRegistry = await SAIReportRegistry.deploy(PROOF_OF_AUDIT_NFT, something, { gasLimit: 250000, gasPrice: 10000000000000 })
    SAI_REPORT_REGISTRY = saiReportRegistry.address
    await saiReportRegistry.deployed()
}

async function main() {
    console.log(process.argv);
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    console.log("Account balance:", (await deployer.getBalance()).toString());

    await deploySmartContracts()

    // const Token = await ethers.getContractFactory("Token");
    // const token = await Token.deploy();

    // console.log("Token address: ", token.address);
}


main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });