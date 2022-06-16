/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Greeter } from "../Greeter";

export class Greeter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(_greeting: string, overrides?: Overrides): Promise<Greeter> {
    return super.deploy(_greeting, overrides || {}) as Promise<Greeter>;
  }
  getDeployTransaction(
    _greeting: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(_greeting, overrides || {});
  }
  attach(address: string): Greeter {
    return super.attach(address) as Greeter;
  }
  connect(signer: Signer): Greeter__factory {
    return super.connect(signer) as Greeter__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Greeter {
    return new Contract(address, _abi, signerOrProvider) as Greeter;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_greeting",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "greet",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_greeting",
        type: "string",
      },
    ],
    name: "setGreeting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516200087b3803806200087b833981016040819052610031916101c5565b61005e60405180606001604052806023815260200162000858602391398261007860201b6101c41760201c565b80516100719060009060208401906100e6565b5050610306565b6100c1828260405160240161008e92919061029d565b60408051601f198184030181529190526020810180516001600160e01b03908116634b5c427760e01b179091526100c516565b5050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b8280546100f2906102cb565b90600052602060002090601f016020900481019282610114576000855561015a565b82601f1061012d57805160ff191683800117855561015a565b8280016001018555821561015a579182015b8281111561015a57825182559160200191906001019061013f565b5061016692915061016a565b5090565b5b80821115610166576000815560010161016b565b634e487b7160e01b600052604160045260246000fd5b60005b838110156101b0578181015183820152602001610198565b838111156101bf576000848401525b50505050565b6000602082840312156101d757600080fd5b81516001600160401b03808211156101ee57600080fd5b818401915084601f83011261020257600080fd5b8151818111156102145761021461017f565b604051601f8201601f19908116603f0116810190838211818310171561023c5761023c61017f565b8160405282815287602084870101111561025557600080fd5b610266836020830160208801610195565b979650505050505050565b60008151808452610289816020860160208601610195565b601f01601f19169290920160200192915050565b6040815260006102b06040830185610271565b82810360208401526102c28185610271565b95945050505050565b600181811c908216806102df57607f821691505b6020821081141561030057634e487b7160e01b600052602260045260246000fd5b50919050565b61054280620003166000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063a41368621461003b578063cfae321714610050575b600080fd5b61004e610049366004610325565b61006e565b005b610058610132565b6040516100659190610423565b60405180910390f35b61011b6040518060600160405280602381526020016104ea60239139600080546100979061043d565b80601f01602080910402602001604051908101604052809291908181526020018280546100c39061043d565b80156101105780601f106100e557610100808354040283529160200191610110565b820191906000526020600020905b8154815290600101906020018083116100f357829003601f168201915b505050505083610209565b805161012e906000906020840190610276565b5050565b6060600080546101419061043d565b80601f016020809104026020016040519081016040528092919081815260200182805461016d9061043d565b80156101ba5780601f1061018f576101008083540402835291602001916101ba565b820191906000526020600020905b81548152906001019060200180831161019d57829003601f168201915b5050505050905090565b61012e82826040516024016101da929190610478565b60408051601f198184030181529190526020810180516001600160e01b0316634b5c427760e01b179052610255565b610250838383604051602401610221939291906104a6565b60408051601f198184030181529190526020810180516001600160e01b0316632ced7cef60e01b179052610255565b505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b8280546102829061043d565b90600052602060002090601f0160209004810192826102a457600085556102ea565b82601f106102bd57805160ff19168380011785556102ea565b828001600101855582156102ea579182015b828111156102ea5782518255916020019190600101906102cf565b506102f69291506102fa565b5090565b5b808211156102f657600081556001016102fb565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561033757600080fd5b813567ffffffffffffffff8082111561034f57600080fd5b818401915084601f83011261036357600080fd5b8135818111156103755761037561030f565b604051601f8201601f19908116603f0116810190838211818310171561039d5761039d61030f565b816040528281528760208487010111156103b657600080fd5b826020860160208301376000928101602001929092525095945050505050565b6000815180845260005b818110156103fc576020818501810151868301820152016103e0565b8181111561040e576000602083870101525b50601f01601f19169290920160200192915050565b60208152600061043660208301846103d6565b9392505050565b600181811c9082168061045157607f821691505b6020821081141561047257634e487b7160e01b600052602260045260246000fd5b50919050565b60408152600061048b60408301856103d6565b828103602084015261049d81856103d6565b95945050505050565b6060815260006104b960608301866103d6565b82810360208401526104cb81866103d6565b905082810360408401526104df81856103d6565b969550505050505056fe4368616e67696e67206772656574696e672066726f6d202725732720746f2027257327a26469706673582212209c6da88dea80736f8b3a70466dfcfbb68c52470f34b0e0d59960eb1c55027ad264736f6c634300080a00334465706c6f79696e6720612050575065676765722077697468206772656574696e673a";
