"use client";
import axios from "axios";
export async function ScanApi(scanLink: string, ApiKey: string) {
  const address = "0xa6B71E26C5e0845f74c812102Ca7114b6a896AB2";
  const action = "txlist"; // For normal transactions
  const modul = "account";
  const startBlock = "0"; // Start from block 0
  const endBlock = "latest"; // Up to the latest block
  axios
    .get(scanLink, {
      params: {
        modul,
        action,
        address,
        startblock: startBlock,
        endblock: endBlock,
        sort: "desc", // To get the most recent transactions first
        apikey: ApiKey,
      },
    })
    .then((response) => {
      const transactions = response.data.result;
      return transactions;
      //   setItems(transactions);
      //   setItemsToShow(
      //     transactions.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
      //   );

      //   console.log("Transactions:", transactions);
      //   setFlag(true);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
