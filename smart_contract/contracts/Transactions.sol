// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

//Mora
//idyt
contract Transactions {
    uint256 transactionsCounter;
    event Transfer(
        address from,
        address receiver,
        uint amount,
        string message,
        uint256 timestamp,
        string keyword
    );

    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timeStamp;
        string keyword;
    }
}
