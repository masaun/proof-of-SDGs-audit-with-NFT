/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { SAIReportRegistry } from "../SAIReportRegistry";

export class SAIReportRegistry__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _something: string,
    overrides?: Overrides
  ): Promise<SAIReportRegistry> {
    return super.deploy(
      _something,
      overrides || {}
    ) as Promise<SAIReportRegistry>;
  }
  getDeployTransaction(
    _something: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_something, overrides || {});
  }
  attach(address: string): SAIReportRegistry {
    return super.attach(address) as SAIReportRegistry;
  }
  connect(signer: Signer): SAIReportRegistry__factory {
    return super.connect(signer) as SAIReportRegistry__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SAIReportRegistry {
    return new Contract(address, _abi, signerOrProvider) as SAIReportRegistry;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_something",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "organization",
        type: "address",
      },
      {
        internalType: "address",
        name: "auditor",
        type: "address",
      },
    ],
    name: "getSAIReport",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "organization",
            type: "address",
          },
          {
            internalType: "address",
            name: "auditor",
            type: "address",
          },
          {
            internalType: "enum DataTypes.TargetGoalInSDGs",
            name: "targetGoalInSDGs",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "contentHashOfSAIReport",
            type: "string",
          },
        ],
        internalType: "struct DataTypes.SAIReport",
        name: "_saiReport",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSomething",
    outputs: [
      {
        internalType: "string",
        name: "_something",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "organizations",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_organization",
        type: "address",
      },
      {
        internalType: "address",
        name: "_auditor",
        type: "address",
      },
      {
        internalType: "enum DataTypes.TargetGoalInSDGs",
        name: "_targetGoalInSDGs",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "_contentHashOfSAIReport",
        type: "string",
      },
    ],
    name: "registerNewSAIReport",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000adf38038062000adf8339810160408190526200003491620001ea565b6200006c60405180604001604052806009815260200168536f6d657468696e6760b81b815250826200008960201b6200039d1760201c565b805162000081906000906020840190620000fb565b50506200033f565b620000d68282604051602401620000a2929190620002d0565b60408051601f198184030181529190526020810180516001600160e01b03908116634b5c427760e01b17909152620000da16565b5050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b828054620001099062000302565b90600052602060002090601f0160209004810192826200012d576000855562000178565b82601f106200014857805160ff191683800117855562000178565b8280016001018555821562000178579182015b82811115620001785782518255916020019190600101906200015b565b50620001869291506200018a565b5090565b5b808211156200018657600081556001016200018b565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620001d4578181015183820152602001620001ba565b83811115620001e4576000848401525b50505050565b600060208284031215620001fd57600080fd5b81516001600160401b03808211156200021557600080fd5b818401915084601f8301126200022a57600080fd5b8151818111156200023f576200023f620001a1565b604051601f8201601f19908116603f011681019083821181831017156200026a576200026a620001a1565b816040528281528760208487010111156200028457600080fd5b62000297836020830160208801620001b7565b979650505050505050565b60008151808452620002bc816020860160208601620001b7565b601f01601f19169290920160200192915050565b604081526000620002e56040830185620002a2565b8281036020840152620002f98185620002a2565b95945050505050565b600181811c908216806200031757607f821691505b602082108114156200033957634e487b7160e01b600052602260045260246000fd5b50919050565b610790806200034f6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806301ec3b6c1461005157806358fa75fb1461006f578063735650381461008f578063e792dd8a146100a4575b600080fd5b6100596100cf565b60405161006691906104ed565b60405180910390f35b61008261007d366004610523565b610161565b604051610066919061056c565b6100a261009d3660046105ef565b610294565b005b6100b76100b23660046106d8565b610373565b6040516001600160a01b039091168152602001610066565b6060600080546100de906106f1565b80601f016020809104026020016040519081016040528092919081815260200182805461010a906106f1565b80156101575780601f1061012c57610100808354040283529160200191610157565b820191906000526020600020905b81548152906001019060200180831161013a57829003601f168201915b5050505050905090565b6040805160808082018352600080835260208084018290528385018290526060808501526001600160a01b038781168352600282528583208782168452825285832086519485018752805482168552600181015491821692850192909252939491939091830190600160a01b900460ff1660108111156101e3576101e3610556565b60108111156101f4576101f4610556565b8152602001600282018054610208906106f1565b80601f0160208091040260200160405190810160405280929190818152602001828054610234906106f1565b80156102815780601f1061025657610100808354040283529160200191610281565b820191906000526020600020905b81548152906001019060200180831161026457829003601f168201915b5050509190925250919695505050505050565b6001600160a01b03808516600081815260026020908152604080832094881680845294909152902080546001600160a01b0319908116909217815560018101805492831684178155909285926001600160a81b03191617600160a01b83601081111561030257610302610556565b0217905550815161031c9060028301906020850190610407565b50506001805480820182556000919091527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60180546001600160a01b0319166001600160a01b039590951694909417909355505050565b6001818154811061038357600080fd5b6000918252602090912001546001600160a01b0316905081565b6103e282826040516024016103b392919061072c565b60408051601f198184030181529190526020810180516001600160e01b0316634b5c427760e01b1790526103e6565b5050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b828054610413906106f1565b90600052602060002090601f016020900481019282610435576000855561047b565b82601f1061044e57805160ff191683800117855561047b565b8280016001018555821561047b579182015b8281111561047b578251825591602001919060010190610460565b5061048792915061048b565b5090565b5b80821115610487576000815560010161048c565b6000815180845260005b818110156104c6576020818501810151868301820152016104aa565b818111156104d8576000602083870101525b50601f01601f19169290920160200192915050565b60208152600061050060208301846104a0565b9392505050565b80356001600160a01b038116811461051e57600080fd5b919050565b6000806040838503121561053657600080fd5b61053f83610507565b915061054d60208401610507565b90509250929050565b634e487b7160e01b600052602160045260246000fd5b60208152600060018060a01b03808451166020840152806020850151166040840152506040830151601181106105b257634e487b7160e01b600052602160045260246000fd5b8060608401525060608301516080808401526105d160a08401826104a0565b949350505050565b634e487b7160e01b600052604160045260246000fd5b6000806000806080858703121561060557600080fd5b61060e85610507565b935061061c60208601610507565b925060408501356011811061063057600080fd5b9150606085013567ffffffffffffffff8082111561064d57600080fd5b818701915087601f83011261066157600080fd5b813581811115610673576106736105d9565b604051601f8201601f19908116603f0116810190838211818310171561069b5761069b6105d9565b816040528281528a60208487010111156106b457600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000602082840312156106ea57600080fd5b5035919050565b600181811c9082168061070557607f821691505b6020821081141561072657634e487b7160e01b600052602260045260246000fd5b50919050565b60408152600061073f60408301856104a0565b828103602084015261075181856104a0565b9594505050505056fea264697066735822122041c3bebd675787921a7536fbda943f50b155a57089e08f581f380a00c9dd651764736f6c634300080a0033";
