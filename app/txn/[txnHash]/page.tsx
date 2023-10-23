"use client";
import styles from "./page.module.scss";
import * as React from "react";
import { type AllTransactionsListResponse } from "@safe-global/api-kit";
import { options } from "@/lib/AllData/AllOption";
import { Wallet, providers, Signer } from "ethers";
import { useMyContext } from "@/context/AppContext";
import { GoQuestion } from "react-icons/go";
import { Separator } from "@/components/ui/separator";
import {
  SafeMultisigTransactionResponse,
  SafeMultisigConfirmationResponse,
} from "@safe-global/safe-core-sdk-types";
import { getDataWithTransactionHash } from "@/lib/safe-utils/safeApp";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
export function getSignerFromPrivateKey(privateKey: string, rpcUrl: string) {
  const provider = new providers.JsonRpcProvider(rpcUrl);
  const wallet = new Wallet(privateKey, provider);
  return wallet;
}

const tsnHash = ({ params }: { params: { txnHash: string } }) => {
  const { SerchIndex, setSerchIndex } = useMyContext();
  const [transactionData, setTransactionData] =
    React.useState<SafeMultisigTransactionResponse>();
  const [confirmation, setConfirmation] = React.useState<
    SafeMultisigConfirmationResponse[] | undefined
  >();
  const [isSuccessful, setIsSuccessFul] = React.useState(false);
  const [isExecuted, setIsExeisExecuted] = React.useState(false);

  const data = params.txnHash;
  const signer: Signer = getSignerFromPrivateKey(
    "b2dfd42d32e7edf1a74fe0b3fa07d2773d6b0145a19553a770d91a80333a8c39",
    options[6].ProviderLink
  );

  async function Fetchtransaction() {
    console.log(options[SerchIndex].SafeTxService, params.txnHash);
    // const txhash = data.slice(2);
    const response = await getDataWithTransactionHash(
      signer,
      options[SerchIndex].SafeTxService,
      data
    );
    setTransactionData(response);
    setConfirmation(response?.confirmations);

    console.log(response);
  }
  React.useEffect(() => {
    Fetchtransaction();
  }, [SerchIndex]);

  function createData(name: any, data: any, toolpick: any) {
    return { name, data, toolpick };
  }
  const rows = [
    createData(
      "transection Hash",
      `${transactionData?.transactionHash}`,
      "A TxHash or transaction hash is a unique 66-characters identifier that is generated whenever a transaction is executed."
    ),
    createData(
      "Status:",
      transactionData?.isExecuted,
      "The status of the transaction."
    ),
    createData(
      "Block:",
      transactionData?.blockNumber,
      "Number of blocks validated since"
    ),

    createData(
      "From:",
      transactionData?.safe,
      "The sending party of the transaction."
    ),
    createData(
      "To",
      transactionData?.to,
      "The receiving party of the transaction (could be a contract address)."
    ),

    createData(
      "Transaction Fee:",
      transactionData?.fee?.toString(),
      "Amount paid to the miner for processing the transaction."
    ),
    createData("Value:", transactionData?.value, "The value being transacted "),
    createData(
      "Gas Price:",
      transactionData?.gasPrice,
      "Cost per unit of gas specified for the transaction."
    ),
    createData(
      " time ",
      transactionData?.submissionDate,
      "when transaction performed "
    ),
    createData(
      "confirmation",
      transactionData?.isSuccessful,
      "when transaction performed "
    ),
  ];
  const rows1 = [
    createData("gas Token", transactionData?.gasToken, ""),
    createData(
      "Nonce",
      transactionData?.nonce,
      "The status of the transaction."
    ),

    createData(
      "operation",
      transactionData?.operation,
      "The sending party of the transaction."
    ),

    createData(
      "refundReceiver ",
      transactionData?.refundReceiver,
      "Amount paid to the miner for processing the transaction."
    ),
  ];
  const [showmore, setshowmore] = React.useState<Boolean>(false);
  return (
    <>
      <div className={styles.main}>
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger>Select Chain</DropdownMenuTrigger>
            <DropdownMenuContent>
              {options.map((items, index) => {
                return (
                  <DropdownMenuItem
                    onClick={() => {
                      setSerchIndex(index);
                    }}
                  >
                    {items.label}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="space-y-8">
          {rows.map((item, a) => (
            <div className={styles.datadiv} key={a}>
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
                  <h2>{item.data}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="Details">
          {showmore &&
            rows1.map((item, a) => (
              <div className={styles.datadiv} key={a}>
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
                    <h2>{item.data}</h2>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className={styles.ShowMoreButton}>
          <Button
            onClick={() => {
              setshowmore(!showmore);
            }}
            className="bg-[#202020] text-[#707070] m-4"
          >
            {showmore ? " Show Less ..." : "Show More... "}
          </Button>
        </div>
      </div>
    </>
  );
};
export default tsnHash;
