// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { DataTypes } from '../libraries/DataTypes.sol';


interface ISAIReportRegistry {
    function registerNewSAIReport(address organization, address auditor, string memory contentHashOfSAIReport) external;
    function getSAIReport(address organization, address auditor) external view returns (DataTypes.SAIReport memory _saiReport);
    function getSomething() external view returns (string memory _something);
}