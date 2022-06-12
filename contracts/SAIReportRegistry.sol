//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "./interfaces/ISAIReportRegistry.sol";

contract SAIReportRegistry is ISAIReportRegistry {

    string private something;

    constructor(string memory _something) {
        //[TODO]:
        console.log("Something", _something);
        something = _something;
    }

    function registerNewSAIReport(address organization) external override {
        // [TODO]:
    }

    function getSAIReport(address organization) external override view returns (string memory) {
        return something;
    }

}