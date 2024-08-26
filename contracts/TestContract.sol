// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.4;

contract TestContractForAbigail {
  
    string public name;
    address public owner;

    event Withdrawal(uint amount, uint when);

    constructor(string memory _name)  {
        name = _name; 
        owner = msg.sender; 
    }
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Cannot use this function");
        _;
    }


    function returnName() public view returns (string memory){
        return name; 
    }
    

    function changeOwner(string memory _newName) onlyOwner public {
        name = _newName;
    }
}
