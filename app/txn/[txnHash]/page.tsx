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
import { getSignerFromPrivateKey } from "@/lib/utils";

const DetailsPage = ({ params }: { params: { txnHash: string } }) => {
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
      "transection Hash     ",
      transactionData?.transactionHash,
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
      transactionData?.fee,
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
  return (
    <>
      <div className={styles.main}>
        {/* <div>
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
        </div> */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            marginBottom: "50px",
          }}
        >
          {" "}
          <div
            style={{
              minWidth: "200px",
              display: "flex",
              paddingTop: "24px",
            }}
          >
            <h2>Sponsooore</h2>
          </div>
          <div
            style={{
              width: "728px",
              height: "90px",
            }}
          >
            <iframe
              src="https://cdn.coinzilla.io/html_customers/bf133327ba467fd86c34145d9ac8f683/index.html"
              width="100%"
              height="100%"
              style={{
                border: "none",
                margin: "0 !important",
                padding: "0 !important",
              }}
            >
              ad
            </iframe>
          </div>
        </div>
        <div className="space-y-8">
          {rows.map((item, a) => (
            <div key={a}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "start",
                  gap: "100px",
                }}
              >
                <div style={{ minWidth: "400px" }}>
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
                <div style={{}}>
                  <h2>{item.data}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default DetailsPage;
