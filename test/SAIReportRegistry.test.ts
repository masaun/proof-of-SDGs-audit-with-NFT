const { expect } = require("chai")
const { ethers } = require("hardhat")

import { SAIReportRegistry } from "../types/SAIReportRegistry"


describe("Greeter", function () {

    let saiReportRegistry: SAIReportRegistry

    const TargetGoalInSDGs = {
        NO_POVERTY: 1,                               // SDGs number: 1
        ZERO_HUNGER: 2,                              // SDGs number: 2
        GOOD_HEALTH_AND_WELL_BEING: 3,               // SDGs number: 3
        QUALITY_EDUCATION: 4,                        // SDGs number: 4
        GENDER_EQUALITY: 5,                          // SDGs number: 5
        CREAN_WATER_AND_SANITATION: 6,               // SDGs number: 6
        AFFORDABLE_AND_CLEAN_ENERGY: 7,              // SDGs number: 7
        DECENT_WORK_AND_ECONOMIC_GROWTH: 8,          // SDGs number: 8
        INDUSTRY_INNOVATION_AND_INFRASTRUCTURE: 9,   // SDGs number: 9
        REDUCED_INQUALITIES: 10,                     // SDGs number: 10
        SUSTAINABLE_CITIES_AND_COMMUNITIES: 11,      // SDGs number: 11
        RESPONSIBLE_CONSUMPTION_AND_PRODUCTION: 12,  // SDGs number: 12
        CLIMATE_ACTION: 13,                          // SDGs number: 13
        LIFE_BELOW_WATER: 14,                        // SDGs number: 14
        LIFE_ON_LAND: 15,                            // SDGs number: 15
        PEACE_JUSTICE_AND_STRONG_INSTITUTIONS: 16,   // SDGs number: 16
        PARTNERSHIPS_FOR_THE_GOALS: 17               // SDGs number: 17
    }


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
        const targetGoalInSDGs: number = TargetGoalInSDGs.NO_POVERTY   // 1
        const contentHashOfSAIReport: string = "QmbWqxBEKC3P8tqsKc98xmWNzrzDtRLMiMPL8wBuTGsMnR"
        const tx = await saiReportRegistry.registerNewSAIReport(organization, auditor, targetGoalInSDGs, contentHashOfSAIReport)

        // wait until the transaction is mined
        const txReceipt = await tx.wait()

        // @dev - Check result
        const saiReport: any = await saiReportRegistry.getSAIReport(organization, auditor)
        console.log(`saiReport: ${ saiReport }`)
        expect(saiReport.organization).to.eq(organization)
        expect(saiReport.auditor).to.eq(auditor)
        expect(saiReport.targetGoalInSDGs).to.eq(TargetGoalInSDGs.NO_POVERTY)  // 1
        expect(saiReport.contentHashOfSAIReport).to.eq(contentHashOfSAIReport)
    })

})