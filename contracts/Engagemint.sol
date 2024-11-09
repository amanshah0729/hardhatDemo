// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Engagemint {
    struct Token {
        uint id;
        uint balance;
    }

    mapping(string => Token) public tokens;
    uint public tokenCount;
    string[] public tokenNames;

    constructor() {
        tokenCount = 0;
    }

    function getToken(string memory name) public view returns (Token memory) {
        return tokens[name];
    }

    function addToken(string memory name) public {
        tokenCount++;
        tokens[name] = Token(tokenCount, 0);
        tokenNames.push(name);
    }

    function mintToken(string memory tokenId, uint amount) public {
        require(tokens[tokenId].id != 0, "Token does not exist");
        tokens[tokenId].balance += amount;
    }


    function redeemToken(string memory tokenId, uint amount) public {
        require(tokens[tokenId].id != 0, "Token does not exist");
        require(tokens[tokenId].balance >= amount, "Insufficient balance");
        tokens[tokenId].balance -= amount;
    }
}
