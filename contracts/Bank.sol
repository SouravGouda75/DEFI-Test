    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.9;

    contract Bank {
        address public owner;

        function PAY(address payable to) public payable {
            require(to.send(msg.value), 'Transaction Failed');
        }

        function userBalance()public view returns (uint){
            return msg.sender.balance;
        }
    }