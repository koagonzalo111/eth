// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Fish {
    string public name = "Fishy";

    function greet() public pure returns (string memory) {
        return "Hello from Fish!";
    }
}
