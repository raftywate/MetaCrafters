/*
Task:
1. Has the ability to "mint" NFTs and store them
2. You should "mint" at least three NFT's
3. Has the ability to print the details of your NFTs to the console
4. Has the ability to print the total supply of your NFT collection to the console
*/

// Step 1: Create a variable to hold your NFT's
let nftCollection = [];

// Step 2: Create an object inside your mintNFT function
// This function takes parameters for metadata and creates an NFT object
function mintNFT(name, eyeColor, shirtType, bling) {
    let newNFT = {
        name: name,
        eyeColor: eyeColor,
        shirtType: shirtType,
        bling: bling
    };
    // Store the new NFT in the nftCollection variable
    nftCollection.push(newNFT);
}

// Step 3: Create listNFTs() function to print NFTs metadata
function listNFTs() {
    for (let i = 0; i < nftCollection.length; i++) {
        let currentNFT = nftCollection[i];
        console.log("Name: " + currentNFT.name +
                    ", Eye Color: " + currentNFT.eyeColor +
                    ", Shirt Type: " + currentNFT.shirtType +
                    ", Bling: " + currentNFT.bling);
    }
}

// Step 4: Create getTotalSupply() function to return the number of NFTs
function getTotalSupply() {
    return nftCollection.length;
}

// Step 5: Call your functions to mint at least three NFTs
mintNFT("NFT1", "Blue", "T-shirt", "Gold Chain");
mintNFT("NFT2", "Green", "Hoodie", "Diamond Ring");
mintNFT("NFT3", "Red", "Jacket", "Silver Bracelet");

listNFTs(); // This should print the details of all three NFTs
console.log("Total NFTs: " + getTotalSupply()); // This should print the total number of NFTs
