import { ethers, BigNumberish } from "ethers";

export async function fetchTransactionDetails(txHash: string, chain: string) {
  try {
    console.log(chain, txHash);
    // Create a provider (you can choose your Ethereum node URL)
    const provider = new ethers.providers.JsonRpcProvider(chain);

    // Fetch the transaction details
    const transaction = await provider.getTransaction(txHash);

    if (transaction) {
      console.log("Transaction Details:");
      console.log("Block Number:", transaction.blockNumber);
      console.log("From:", transaction.from);
      console.log("To:", transaction.to);
      console.log("Value:", ethers.utils.formatEther(transaction.value));
      console.log("Gas Limit:", transaction.gasLimit.toNumber());

      // Check if gasPrice is defined before using it
      if (transaction.gasPrice !== undefined) {
        console.log(
          "Gas Price:",
          ethers.utils.formatUnits(transaction.gasPrice as BigNumberish, "gwei")
        );
      } else {
        console.log("Gas Price: Not available");
      }

      console.log("Nonce:", transaction.nonce);
      console.log("Data:", transaction.data);
    } else {
      console.log("Transaction not found.");
    }
    return transaction;
  } catch (error) {
    console.error("Error:", error);
  }
}

// // Replace 'yourTxHash' with the actual transaction hash
// const txHash = "yourTxHash";

// // Call the function to fetch transaction details
// fetchTransactionDetails(txHash);
