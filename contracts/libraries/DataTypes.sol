// SPDX-License-Identifier: MIT

pragma solidity 0.8.10;

/**
 * @title DataTypes
 * @author Lens Protocol
 *
 * @notice A standard library of data types used throughout the Lens Protocol.
 */
library DataTypes {

    /**
     * @notice - Data of SAI Report
     */ 
    struct SAIReport {
        address organization; 
        address auditor;
        TargetGoalInSDGs targetGoalInSDGs; // 1 ~ 17 
        string contentHashOfSAIReport;
    }

    /**
     * @notice - Target of SDGs (1 ~ 17)
     */ 
    enum TargetGoalInSDGs {
        NO_POVERTY,                              // SDGs number: 1
        ZERO_HUNGER,                             // SDGs number: 2
        GOOD_HEALTH_AND_WELL_BEING,              // SDGs number: 3
        QUALITY_EDUCATION,                       // SDGs number: 4
        GENDER_EQUALITY,                         // SDGs number: 5
        CREAN_WATER_AND_SANITATION,              // SDGs number: 6
        AFFORDABLE_AND_CLEAN_ENERGY,             // SDGs number: 7
        DECENT_WORK_AND_ECONOMIC_GROWTH,         // SDGs number: 8
        INDUSTRY_INNOVATION_AND_INFRASTRUCTURE,  // SDGs number: 9
        REDUCED_INQUALITIES,                     // SDGs number: 10
        SUSTAINABLE_CITIES_AND_COMMUNITIES,      // SDGs number: 11
        RESPONSIBLE_CONSUMPTION_AND_PRODUCTION,  // SDGs number: 12
        CLIMATE_ACTION,                          // SDGs number: 13
        LIFE_BELOW_WATER,                        // SDGs number: 14
        LIFE_ON_LAND,                            // SDGs number: 15
        PEACE_JUSTICE_AND_STRONG_INSTITUTIONS,   // SDGs number: 16
        PARTNERSHIPS_FOR_THE_GOALS               // SDGs number: 17
    }

}
