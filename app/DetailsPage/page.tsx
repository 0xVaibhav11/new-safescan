"use client";
import styles from "./page.module.scss";
import * as React from "react";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { GoQuestion } from "react-icons/go";
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

// :
// 0
// blockNumber
// :
// 9901314
// confirmations: [{…}]
// confirmationsRequired: 1
// data: null
// dataDecoded: null
// ethGasPrice: "1062"
// executionDate: "2023-10-20T18:11:24Z"
// executor: "0x41E5d6bdF32d1ACB1aB0abeE083A211385591E62"
// fee: "204925644"
// gasPrice: "0"
// gasToken: "0x0000000000000000000000000000000000000000"
// gasUsed: 192962
// isExecuted: true
// isSuccessful: true
// maxFeePerGas: "1066"
// maxPriorityFeePerGas: "1050"
// modified: "2023-10-20T18:11:29.139266Z"
// nonce: 0
// operation: 0
// origin: "{}"
// refundReceiver: "0x0000000000000000000000000000000000000000"
// safe: "0xa43624b7472c37B1E1884645a3D04710afCD8eB5"
// safeTxGas: 0
// safeTxHash: "0x492e1f5905fa51b38533e99fd6aa431915c40c09e9df4fce40b3d64539ba4893"
// signatures: "0xef5196853d3109d67be4335c296b0bfafb22837e287178139f60e17d64e13a5304fce22f0536674f398ba6e6b5a64cc654354a6bf77e6f5ea0328aad511fa70d1b"
// submissionDate: "2023-10-20T18:11:10.905217Z"
// to: "0x645D85678C2d4C56c17F3579a278C2bE2D73119c"
// transactionHash: "0x8203fa9cbe0b0b6bf0496cc0900be12b8950447d681c733e5af7faefea488fbf"
// trusted: true
// value: "100000000000000000"

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
              <div className={styles.row}>
                <div className={styles.column}>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger className=" mr-2">
                          <GoQuestion />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{item.toolpick}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <h2> {item.name}</h2>
                  </div>
                </div>
                <div className={styles.column}>
                  <h2>{item.toolpick}</h2>
                </div>
              </div>
            </div>
            // <div key={a}>
            //   <div className="flex  justify-evenly items-center">
            //     <div className="ml-4 space-y-1">
            //       <p className="text-sm font-medium leading-none">
            //         {item.name}
            //       </p>
            //       <p className="text-sm text-muted-foreground">2232</p>
            //     </div>
            //     <div className="ml-auto font-medium">{item.toolpick}</div>
            //   </div>
            //   <Separator className="my-4" />
            // </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default DetailsPage;
