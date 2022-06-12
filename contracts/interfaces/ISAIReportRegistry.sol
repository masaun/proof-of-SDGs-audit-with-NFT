// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

interface ISAIReportRegistry {
    function registerNewSAIReport(address organization) external;
    function getSAIReport(address organization) external view returns (string memory);
}