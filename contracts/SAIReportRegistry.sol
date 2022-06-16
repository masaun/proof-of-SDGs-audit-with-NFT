// SPDX-License-Identifier: MIT

pragma solidity 0.8.10;

import { ISAIReportRegistry } from "./interfaces/ISAIReportRegistry.sol";

import { DataTypes } from './libraries/DataTypes.sol';
import { Events } from './libraries/Events.sol';
import { Helpers } from './libraries/Helpers.sol';
import { Constants } from './libraries/Constants.sol';
import { Errors } from './libraries/Errors.sol';

import "hardhat/console.sol";


contract SAIReportRegistry is ISAIReportRegistry {

    string private something;

    //@dev - List of organizations registered
    address[] public organizations;

    //@dev - Storage of the SAIReport (struct)
    mapping (address => mapping (address => DataTypes.SAIReport)) saiReports;  // [Key]: organization's address -> auditor's address -> SAIReport struct

    constructor(string memory _something) {
        //[TODO]:
        console.log("Something", _something);
        something = _something;
    }

    /**
     * @notice - Register a new SAIReport
     * @dev - Multi-Sig btw organization and auditor
     */ 
    function registerNewSAIReport(address _organization, address _auditor, DataTypes.TargetGoalInSDGs _targetGoalInSDGs, string memory _contentHashOfSAIReport) external override {
        // [TODO]:

        DataTypes.SAIReport storage saiReport = saiReports[_organization][_auditor];
        saiReport.organization = _organization;
        saiReport.auditor = _auditor;
        saiReport.targetGoalInSDGs = _targetGoalInSDGs;
        saiReport.contentHashOfSAIReport = _contentHashOfSAIReport;

        //@dev - Add a new organizations registered to the list of "organizations"
        organizations.push(_organization);
    }

    /**
     * @notice - Get a SAIReport registered
     */ 
    function getSAIReport(address organization, address auditor) external override view returns (DataTypes.SAIReport memory _saiReport) {
        DataTypes.SAIReport memory saiReport = saiReports[organization][auditor];
        return saiReport;
    }


    /**
     * @notice - Test
     */ 
    function getSomething() external override view returns (string memory _something) {
        return something;
    }

}