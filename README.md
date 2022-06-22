# Proof of SDGs Audit (with NFT)🌍🌿
## 【Overview】
- The 17 Sustainable Development Goals (SDGs) are defined by UN (United Nations) in 2015.
  - There is `external auditor` called `the Supreme Audit Institutions ("SAIs")` and audit report by them. (it's called `"SAI report"` ) 
    https://www.un.org/en/desa/some-considerations-external-audits-sdg-implementation

<br>

- This is a smart contract allow organizations to show `a proof of SDGs audit` in the form of `NFT` ( `on-chain` ) that is associated with `SAI reports` .

<br>

## 【Workflow】
- At the moment, this smart contract works from workflow ③〜④ below.
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

<hr>

- **NFT badge** as **_proof_** of `achievement` for `each goals (17) of SDGs` . 🌿  
  - To increase awareness of SDGs and actions associated with them.
    - This proofs are a global proof🌍 
    - Who does judge whether individuals or enterprises achieve goals or not❓
       - Auditor/publisher is UN.
       - How to decentralize `auditor/publisher` is key. 🔴
         - Aggregate reports from different `auditors` ➕ Publishing NFT-badges is escrowed. 👍
         ↓
         - There are 2 models (as candidates for implementation)
           - e.g). Toucan.Protocol🌿 (Using the `Verra Standard`, etc)
              => **_The Supreme Audit Institutions ("SAIs")_** 🌍 is an `external auditor` for **_SDGs_** 🔴：https://www.un.org/en/desa/some-considerations-external-audits-sdg-implementation 
           - e.g). /or `Relayer` model (e.g. Tornado.Cash, 0x, FOAM, etc)
           
    - `Multi-Sig` when register SAI Report (=External Audit Report by SAI)🔴：Auditor & Organization which has a SAI Report (External Audit Report by SAI). 

    - Deadline of 17 goals of SDGs is by 2030 <= Add `timestamp` to NFT-badges
         <img width="507" alt="Screen Shot 2022-06-11 at 14 39 17" src="https://user-images.githubusercontent.com/19357502/173188296-ceea7559-946e-41c8-bb5c-302ad11be3be.png">

<br>

### _[Ref]：an `external auditor` for SDGs_
- **_The Supreme Audit Institutions ("SAIs")_** 🌍 is an `external auditor` for **_SDGs_** 🔴
  - Article by UN：https://www.un.org/en/desa/some-considerations-external-audits-sdg-implementation 
  - PDF：[external-audits-of-SDG-implementation.pdf](https://github.com/masaun/DApps_Truffle_Ethereum_Projects/files/8885383/external-audits-of-SDG-implementation.pdf)
     <img width="986" alt="Screen Shot 2022-06-11 at 21 26 02" src="https://user-images.githubusercontent.com/19357502/173202158-844f780d-d9fb-4a23-b089-054ca2337aac.png">




