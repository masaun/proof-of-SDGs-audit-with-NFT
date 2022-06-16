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
        expect(await saiReportRegistry.getSomething()).to.eq("something")
    })

    it("registerNewSAIReport() - Register a new SAIReport", async function () {
        const organization: string = "0xe344D3D194cD5038Bc9B02F5042754677FBddE81"
        const auditor: string = "0xe7E6c88Ad1BAb6508a251B7995f44fB1C5E3dCF7"
        const contentHashOfSAIReport: string = "QmbWqxBEKC3P8tqsKc98xmWNzrzDtRLMiMPL8wBuTGsMnR"
        const tx = await saiReportRegistry.registerNewSAIReport(organization, auditor, contentHashOfSAIReport)

        // wait until the transaction is mined
        const txReceipt = await tx.wait()

        // @dev - Check result
        const saiReport: any = await saiReportRegistry.getSAIReport(organization, auditor)
        console.log(`saiReport: ${ saiReport }`)
        expect(saiReport.organization).to.eq(organization)
        expect(saiReport.auditor).to.eq(auditor)
        expect(saiReport.contentHashOfSAIReport).to.eq(contentHashOfSAIReport)
        //expect(saiReport).to.eq("0xe344D3D194cD5038Bc9B02F5042754677FBddE81", "0xe7E6c88Ad1BAb6508a251B7995f44fB1C5E3dCF7", "QmbWqxBEKC3P8tqsKc98xmWNzrzDtRLMiMPL8wBuTGsMnR")
    })

})