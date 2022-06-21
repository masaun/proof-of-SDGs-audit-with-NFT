// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { DataTypes } from '../libraries/DataTypes.sol';


interface ISAIReportRegistry {
    function registerNewSAIReport(address organization, address auditor, DataTypes.TargetGoalInSDGs _targetGoalInSDGs, string memory contentHashOfSAIReport) external;
    function getSAIReport(address organization, address auditor) external view returns (DataTypes.SAIReport memory _saiReport);
}