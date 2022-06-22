# Proof of SDGs Audit (with NFT)🌍🌿
## 【Overview】
- The 17 Sustainable Development Goals (SDGs) are defined by UN (United Nations) in 2015.  
  https://www.un.org/development/desa/disabilities/envision2030.html
  ↓
  - There is `external auditor` called `the Supreme Audit Institutions ("SAIs")`  
  - SAIs investigate whether organizations is quarified for target SDGs or not.  
  - Once a SAI audit an organization, that SAI publish an audit report for the organization. (it's called `"SAI report"` )  
    https://www.un.org/en/desa/some-considerations-external-audits-sdg-implementation

<br>

- This is a smart contract allow organizations to show `a proof of SDGs audit` in the form of `NFT` ( `on-chain` ) that is associated with `SAI reports` .
  - The 17 Sustainable Development Goals (SDGs) are defined in `DataTypes.sol` as an enum:  
    https://github.com/masaun/proof-of-SDGs-audit-with-NFT/blob/develop/contracts/libraries/DataTypes.sol#L23-L44  
    <img width="482" alt="Screen Shot 2022-06-21 at 20 51 40" src="https://user-images.githubusercontent.com/19357502/174920336-9cb9cedf-7b3b-44e4-88f0-eabe1d41771b.png">


<br>

## 【Workflow】
- At the moment, this smart contract mainly works from the workflow ③〜④ below.
  ![Diagram_Proof-of-SDGs-Audit-with NFT](https://user-images.githubusercontent.com/19357502/174918330-d15815a0-1cc1-4e2d-8278-e5083f7767a0.jpeg)

<br>

## 【Installation】
- ① Install modules
```
npm install
```

<br>

- ② Compile smart contracts
```
npm run compile
```

<br>

## 【Test】
- Run all of tests. (NOTE: At the moment, only `./test/SAIReportRegistry.test.ts` is executed)
```
npm run test
```
( `npx hardhat test --network hardhat` )


<br>

## 【Demo】
- This is a demo of test of the SAIReportRegistry contract ( `./test/SAIReportRegistry.test.ts` ) above.  
  https://youtu.be/rFSO96llCps


