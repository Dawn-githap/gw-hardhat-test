//SPDX-License-Identifier:SimpL-2.0
pragma solidity ^0.7.3;

// import "hardhat/console.sol";

contract typeBytes {
    function ass() public view returns (bytes memory a, bytes memory b) {
        assembly {
            a := mload(0x40)
            b := add(a, 33)
            // codecopy(a, 4, 32)
        }
    }
}
