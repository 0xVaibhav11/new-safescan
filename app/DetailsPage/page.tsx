"use client";
import styles from "./page.module.scss";
import * as React from "react";
import { Separator } from "@/components/ui/separator";
interface TxData {
  accessList: [];
  blockHash: "0x183d2f73c320a0f5a00af512e16f325aa2b2bf30fa73c9fe90b1b9ae4c69e6df";
  blockNumber: 9899515n;
  chainId: 5;
  from: "0x645d85678c2d4c56c17f3579a278c2be2d73119c";
  gas: 40993n;
  gasPrice: 1500000016n;
  hash: "0x596104426ff8fd56e0488099cfe1829b45aaab323af1ef9cf8d610cae7af57ac";
  input: "0x";
  maxFeePerGas: 1500000022n;
  maxPriorityFeePerGas: 1500000000n;
  nonce: 10;
  r: "0x65c002b47dec55620777c8f0d99dc360a3a4fdb2fb8c4aae9ef66849887cec36";
  s: "0x8babdb4df6f98ec65e3d323e3eea20b2fa3839c95d64a2da86d7cfdde2557e3";
  to: "0xa43624b7472c37b1e1884645a3d04710afcd8eb5";
  transactionIndex: 7;
  type: "eip1559";
  v: 0n;
  value: 1000000000000000000n;
}

const DetailsPage = ({ params }: { params: { SinglePage: string } }) => {
  // const [transactionData, setTransactionData] = React.useState<Transaction>();
  // async function Fetchtransaction() {
  //     const txhash = data.slice(2);
  //     const transaction = await fetchTransaction({
  //       hash: `0x${txhash}`,
  //     });
  //     setTransactionData(transaction);
  //     console.log(transaction);
  //   }
  //   React.useEffect(() => {
  //     Fetchtransaction();
  //   }, []);
  const data = params.SinglePage;
  function createData(name: any, data: any, toolpick: any) {
    return { name, data, toolpick };
  }
  const rows = [
    createData(
      "transection Hash",
      data,
      "A TxHash or transaction hash is a unique 66-characters identifier that is generated whenever a transaction is executed."
    ),
    createData("Status:", " 0", "The status of the transaction."),
    createData("Block:", "derdfd", "Number of blocks validated since"),

    createData("From:", "derdfd", "The sending party of the transaction."),
    createData(
      "Interacted With (To):",
      "derdfd",
      "The receiving party of the transaction (could be a contract address)."
    ),

    createData(
      "Transaction Fee:",
      "derdfd",
      "Amount paid to the miner for processing the transaction."
    ),
    createData(
      "Value:",
      "derdfd",
      "The value being transacted in MATIC and fiat value. Note: You can click the fiat value (if available) to see historical value at the time of transaction."
    ),
    createData(
      "Gas Price:",
      "derdfd",
      "Cost per unit of gas specified for the transaction, in MATIC and Gwei. The higher the gas price the higher chance of getting included in a block."
    ),
    createData(
      "maxFeePerGas :",
      "derdfd",
      "Cost per unit of gas specified for the transaction, in MATIC and Gwei. The higher the gas price the higher chance of getting included in a block."
    ),
  ];
  return (
    <>
      {" "}
      <div className={styles.main}>
        <div className="space-y-8">
          {rows.map((item, a) => (
            <div key={a}>
              <div className="flex  justify-evenly items-center">
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {item.name}
                  </p>
                  <p className="text-sm text-muted-foreground">2232</p>
                </div>
                <div className="ml-auto font-medium">{item.toolpick}</div>
              </div>
              <Separator className="my-4" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default DetailsPage;
