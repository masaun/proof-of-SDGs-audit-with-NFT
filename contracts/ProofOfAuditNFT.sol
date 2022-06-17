// SPDX-License-Identifier: MIT

pragma solidity 0.8.10;

import { ERC721 } from "@openzeppelin/contracts/token/ERC721/ERC721.sol";


contract ProofOfAuditNFT is ERC721 {

    constructor() ERC721("ProofOfAuditNFT", "POA") {}

    function safeMint(address to, uint256 tokenId) public {
        _safeMint(to, tokenId);
    }

}