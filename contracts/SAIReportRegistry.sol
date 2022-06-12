//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.10;

import { ISAIReportRegistry } from "./interfaces/ISAIReportRegistry.sol";

import { Events } from './libraries/Events.sol';
import { Helpers } from './libraries/Helpers.sol';
import { Constants } from './libraries/Constants.sol';
import { DataTypes } from './libraries/DataTypes.sol';
import { Errors } from './libraries/Errors.sol';

import "hardhat/console.sol";


contract SAIReportRegistry is ISAIReportRegistry {

    string private something;

    mapping (address => mapping (address => DataTypes.SAIReport)) saiReports; 

    constructor(string memory _something) {
        //[TODO]:
        console.log("Something", _something);
        something = _something;
    }

    /**
     * @notice - Register a new SAIReport
     * @dev - Multi-Sig btw organization and auditor
     */ 
    function registerNewSAIReport(address _organization, address _auditor, string memory _contentHashOfSAIReport) external override {
        // [TODO]:

        DataTypes.SAIReport storage saiReport = saiReports[_organization][_auditor];
        saiReport.contentHashOfSAIReport = _contentHashOfSAIReport;
    }

    function getSAIReport(address organization) external override view returns (string memory _contentHashOfSAIReport) {
        return something;
    }

}