// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyToken {
    string public name;
    string public symbol;
    address public owner;

    mapping(address => bool) private hasTShirt;
    mapping(address => bool) private hasPants;
    mapping(address => bool) private hasCap;
    mapping(address => bool) private hasShoes;
    mapping(address => uint256[4]) private redeemedItems;

    mapping(address => uint256) private balances;

    constructor() {
        name = "GameMoney";
        symbol = "GM";
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }

    function mint(address account, uint256 amount) public onlyOwner {
        require(amount > 0, "Amount must be greater than zero");
        balances[account] += amount;
    }

    function transfer(address recipient, uint256 amount) public returns (bool) {
        require(amount > 0, "Amount must be greater than zero");
        require(balances[msg.sender] >= amount, "Insufficient balance");

        balances[msg.sender] -= amount;
        balances[recipient] += amount;
        return true;
    }

    function burn(uint256 amount) public {
        require(amount > 0, "Amount must be greater than zero");
        require(balances[msg.sender] >= amount, "Insufficient balance");

        balances[msg.sender] -= amount;
    }
    
    function showRedeemableItems() public pure returns (string memory) {
        return "1. T-shirt(100 AVAX)  2. Pants(100 AVAX)  3. Cap(30 AVAX)  4. Shoes(50 AVAX)";
    }

    function redeemToken(uint256 item, uint256 quantity) public {
        require(quantity > 0, "Quantity must be greater than zero");

        if (item == 1) {
            redeemTShirt(quantity);
        } else if (item == 2) {
            redeemPants(quantity);
        } else if (item == 3) {
            redeemCap(quantity);
        } else if (item == 4) {
            redeemShoes(quantity);
        } else {
            revert("Invalid item");
        }
    }

    function redeemTShirt(uint256 quantity) private {
        uint256 requiredBalance = 100 * quantity;
        require(balances[msg.sender] >= requiredBalance, "Insufficient balance for T-shirt redemption");
        require(!hasTShirt[msg.sender], "T-shirt already redeemed");

        hasTShirt[msg.sender] = true;
        balances[msg.sender] -= requiredBalance;
        redeemedItems[msg.sender][0] += quantity;
        // Add additional logic for granting the T-shirt item(s) to the player
    }

    function redeemPants(uint256 quantity) private {
        uint256 requiredBalance = 100 * quantity;
        require(balances[msg.sender] >= requiredBalance, "Insufficient balance for pants redemption");
        require(!hasPants[msg.sender], "Pants already redeemed");

        hasPants[msg.sender] = true;
        balances[msg.sender] -= requiredBalance;
        redeemedItems[msg.sender][1] += quantity;
        // Add additional logic for granting the pants item(s) to the player
    }

    function redeemCap(uint256 quantity) private {
        uint256 requiredBalance = 30 * quantity;
        require(balances[msg.sender] >= requiredBalance, "Insufficient balance for cap redemption");
        require(!hasCap[msg.sender], "Cap already redeemed");

        hasCap[msg.sender] = true;
        balances[msg.sender] -= requiredBalance;
        redeemedItems[msg.sender][2] += quantity;
        // Add additional logic for granting the cap item(s) to the player
    }

    function redeemShoes(uint256 quantity) private {
        uint256 requiredBalance = 50 * quantity;
        require(balances[msg.sender] >= requiredBalance, "Insufficient balance for shoes redemption");
        require(!hasShoes[msg.sender], "Shoes already redeemed");

        hasShoes[msg.sender] = true;
        balances[msg.sender] -= requiredBalance;
        redeemedItems[msg.sender][3] += quantity;
        // Add additional logic for granting the shoes item(s) to the player
    }

    function checkBalance(address account) public view returns (uint256) {
        return balances[account];
    }

    function showRedeemedItems(address account) public view returns (string memory) {
        string[4] memory itemNames = ["T-shirt", "Pants", "Cap", "Shoes"];
        string memory result = "";

        for (uint256 i = 0; i < itemNames.length; i++) {
            if (i > 0) {
                result = string(abi.encodePacked(result, "\n"));
            }
            result = string(
                abi.encodePacked(result, itemNames[i], ": ", toString(redeemedItems[account][i]), " items")
            );
        }

        return result;
    }

    function toString(uint256 value) private pure returns (string memory) {
        if (value == 0) {
            return "0";
        }

        uint256 temp = value;
        uint256 digits;

        while (temp != 0) {
            digits++;
            temp /= 10;
        }

        bytes memory buffer = new bytes(digits);

        for (uint256 i = digits; i > 0; i--) {
            buffer[i - 1] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }

        return string(buffer);
    }
}
