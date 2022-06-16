const { expect } = require("chai")
const { ethers } = require("hardhat")

import { SAIReportRegistry } from "../types/SAIReportRegistry"


describe("Greeter", function () {

    let saiReportRegistry: SAIReportRegistry

    before("Setup smart contracts", async () => {
        //[TODO]:
        const something: string = "something"

        const SAIReportRegistry = await ethers.getContractFactory("SAIReportRegistry")
        saiReportRegistry = await SAIReportRegistry.deploy(something)
        await saiReportRegistry.deployed()

        // @dev - Check result
        //expect(await saiReportRegistry.getSomething().to.equal("something")
    })

    it("registerNewSAIReport() - Register a new SAIReport", async function () {
        const organization: string = "0xe344D3D194cD5038Bc9B02F5042754677FBddE81"
        const auditor: string = "0xe7E6c88Ad1BAb6508a251B7995f44fB1C5E3dCF7"
        const contentHashOfSAIReport: string = ""
        const tx = await saiReportRegistry.registerNewSAIReport(organization, auditor, contentHashOfSAIReport)

        // wait until the transaction is mined
        await tx.wait()

        // @dev - Check result
        //expect(await saiReportRegistry.getSAIReport(organization, auditor)).to.equal({ "0xe344D3D194cD5038Bc9B02F5042754677FBddE81", "0xe7E6c88Ad1BAb6508a251B7995f44fB1C5E3dCF7", "QmbWqxBEKC3P8tqsKc98xmWNzrzDtRLMiMPL8wBuTGsMnR" })
    })

})