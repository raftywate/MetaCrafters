# MetaCrafters
Has all the projects/tasks done in MetaCrafters course.


**1. javascriptBeginners.js :**

In this session, we explored the creation of NFTs, delving into the steps involved in generating the variables that store NFTs, their associated metadata, the minting process, and the overall supply of NFTs. 

**2. ethBeginners.sol :**

This program constitutes a straightforward Solidity contract that can be compiled using Remix IDE. Within this contract, a custom token is established, facilitating the tracking of token balances associated with specific addresses. It also provides insights into the minting and burning of tokens, along with details about the total token supply.

**3. eth-avaxIntMod1.sol:**
   
This basic contract serves the purpose of verifying whether the contract owner matches the user interacting with it. To accomplish this, three error-handling methods—require(), revert(), and assert()—have been implemented, each carrying out the same verification task.

Contract Details The ErrorHandlingContract is a smart contract that manages a balance variable. The deposit function allows users to add funds to the balance, but it requires the deposit amount to be greater than zero. The withdraw function lets users withdraw funds from the balance, but it checks if the withdrawal amount is greater than the available balance. If it is, the transaction is reverted with an "Insufficient balance" error message. The checkBalance function returns the current value of the balance variable, but it also uses an assert statement to ensure the balance is always greater than or equal to zero. Overall, the contract implements basic error handling and validation using the require(), assert(), and revert() statements to ensure proper behavior and prevent incorrect operations.

**4. Eth-Avax Int Module 2:**

The CustomToken contract, incorporating ERC20, ERC20Burnable, and Ownable from the OpenZeppelin library, establishes a versatile token system. The constructor initializes the token with the name 'MyToken' and symbol 'MyTk.' The mint function, restricted to the contract owner, allows token creation by invoking the _mint function from the ERC20 contract with specified parameters.

**5. Eth-Avax Int Module 3:**

This project has been created using the React JS as the frontend for this file has been developed in the React and there is a simple smart contract developed in Solidity which gets integrated with the frontend application and all the functionalities of the contract can be accessed using the frontend. 


**6. Eth-Avax Int Module 4:**

MyToken Contract requires Solidity ^0.8.0. It features the MyToken contract, managing token balances, item redemption, and ownership control. The contract includes functions like minting tokens, transferring, redeeming items, and checking balances, with detailed mappings and a constructor initializing key variables."
