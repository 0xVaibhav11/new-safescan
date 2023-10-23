import { Button } from "@/components/ui/button";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React, { MouseEvent } from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

import { options } from "@/lib/AllData/AllOption";
import { FiArrowDown } from "react-icons/fi";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { RiFileList3Fill } from "react-icons/ri";
import { useMyContext } from "@/context/AppContext";
import { DataThroughAddress } from "@/lib/MaskNetwork-Api/RelationshipServiceUseingWeb3Bio";
import { shortenAddress } from "@/lib/utils";
import { Skeleton } from "./ui/skeleton";
import moment from "moment";
import { NextIdUsingAddr } from "@/lib/hooks/use-nextid-relation-service";

export const revalidate = 10;
interface Item {
  blockHash: "0xa54e2e48552c7428c6f7b5b748a78d452a3bd23a227e4c992c634d315816d8e5";
  blockNumber: "18399277";
  confirmations: "20";
  contractAddress: "";
  cumulativeGasUsed: "6659184";
  from: "0x9d0870e65416c0727cf733704069d9fea5a66be4";
  functionName: "createProxyWithNonce(address _mastercopy, bytes initializer, uint256 saltNonce)";
  gas: "261619";
  gasPrice: "10999913628";
  gasUsed: "258640";
  hash: "0xe2cbcb881abb5825f24f97f84439b1cb7acd191b705a0ebdcee3c31309d2747a";
  input: "0x1688f0b9000000000000000000000000d9db270c1b5e3bd161e8c8503c55ceabee70955200000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000018b52a241b00000000000000000000000000000000000000000000000000000000000000164b63e800d0000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000140000000000000000000000000f48f2b2d2a534e402487b3ee7c18c33aec0fe5e400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000009d0870e65416c0727cf733704069d9fea5a66be4000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000";
  isError: "0";
  methodId: "0x1688f0b9";
  nonce: "9";
  timeStamp: "1697898467";
  to: "0xa6b71e26c5e0845f74c812102ca7114b6a896ab2";
  transactionIndex: "67";
  txreceipt_status: "1";
  value: "0";
}
type DataRowProps = {
  userAddress: string;
  txnHash: string | undefined;
  action: string;
  time: string;
  block: string;
  fees: string;
  key: any;
};
export function LoadingDataRows({ repeat }: { repeat: number }) {
  const rows = createArray(repeat);
  function createArray(count: number): number[] {
    return Array.from({ length: count }, (_, i) => i);
  }
  return (
    <>
      {rows.map((row) => {
        return (
          <div
            id="row"
            className=" w-full h-max p-4 flex justify-between items-center"
            key={row}
          >
            <div id="txnColumn" className="w-[45%] flex flex-col gap-2">
              <div className=" flex text-xs gap-2">
                <Skeleton className=" w-20 h-4" />
                <Skeleton className=" w-10 h-4" />
                <Skeleton className=" w-12 h-4" />
              </div>

              <div className=" flex gap-2 items-center  text-muted-foreground">
                <HiOutlineSwitchHorizontal />
                <Skeleton className=" w-[50%] h-4" />
              </div>
            </div>
            <div id="userColumn" className=" flex gap-2 items-center">
              <div className=" text-xl text-muted-foreground">
                <FiArrowDown />
              </div>
              <div className="flex flex-col gap-2">
                <Skeleton className=" w-44 h-4" />

                <Skeleton className=" w-40 h-4" />
              </div>
            </div>
            <div id="timeColumn" className="">
              <div className=" flex gap-2 items-center">
                <p>Block</p>
                <Skeleton className=" w-8 h-4" />
              </div>
              <div className=" flex gap-2 items-center">
                <p>Fees</p>
                <Skeleton className=" w-8 h-4" />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export function DataRow({
  userAddress,
  txnHash,
  action,
  time,
  block,
  fees,
  key,
}: DataRowProps) {
  // const data = DataThroughAddress(userAddress);
  // async function DataApi() {
  //   const address = "0xa6B71E26C5e0845f74c812102Ca7114b6a896AB2";
  //   const action = "txlist"; // For normal transactions
  //   const modul = "account";
  //   const startBlock = "0"; // Start from block 0
  //   const endBlock = "latest"; // Up to the latest block
  //   axios
  //     .get(options[currentIndex].ScanLink, {
  //       params: {
  //         modul,
  //         action,
  //         address,
  //         startblock: startBlock,
  //         endblock: endBlock,
  //         sort: "desc", // To get the most recent transactions first
  //         apikey: options[currentIndex].ApiKey,
  //       },
  //     })
  //     .then((response: any) => {
  //       const transactions = response.data.result;
  //       setItems(transactions);
  //       setItemsToShow(transactions.slice(0, 10));

  //       console.log("Transactions:", transactions);
  //     })
  //     .catch((error: any) => {
  //       console.error("Error:", error);
  //     });
  // }
  return (
    <div
      id="row"
      className=" w-full h-max p-4 flex justify-between items-center"
      key={key}
    >
      <div id="txnColumn" className="w-[45%] flex flex-col gap-2">
        <div className=" flex text-xs gap-2">
          {/* <NextIdUsingAddr
            identity="ethereum"
            platform="0x7cbba07e31dc7b12bb69a1209c5b11a8ac50acf5"
          /> */}
          <NextIdUsingAddr identity={userAddress} platform="ethereum" />
        </div>

        <div className=" flex gap-2 items-center  text-muted-foreground">
          <HiOutlineSwitchHorizontal />
          <p className=" text-foreground-900">
            {shortenAddress(userAddress, 20)}
            {/* {userAddress} */}
          </p>
          <p className="">{time}</p>
        </div>
      </div>
      <div id="userColumn" className=" flex gap-2 items-center">
        <div className=" text-xl text-muted-foreground">
          <FiArrowDown />
        </div>
        <div className="flex flex-col gap-1">
          <Link href={`/txn/${txnHash}s`} passHref>
            <p>{shortenAddress(txnHash, 13)}</p>
          </Link>
          <Badge className="flex gap-1">
            <RiFileList3Fill />
            {action}
          </Badge>
        </div>
      </div>
      <div id="timeColumn" className="">
        <div className=" flex gap-2">
          <p>Block</p>
          <p className=" text-muted-foreground">{block}</p>
        </div>
        <div className=" flex gap-2">
          <p>Fees</p>
          <p className=" text-muted-foreground">{fees}</p>
        </div>
      </div>
    </div>
  );
}

export default function LatestCreationFeed() {
  const [flag, setFlag] = useState(false);
  const [itemTOshow, setItemsToShow] = useState<Item[]>([
    {
      blockHash:
        "0xa54e2e48552c7428c6f7b5b748a78d452a3bd23a227e4c992c634d315816d8e5",
      blockNumber: "18399277",
      confirmations: "20",
      contractAddress: "",
      cumulativeGasUsed: "6659184",
      from: "0x9d0870e65416c0727cf733704069d9fea5a66be4",
      functionName:
        "createProxyWithNonce(address _mastercopy, bytes initializer, uint256 saltNonce)",
      gas: "261619",
      gasPrice: "10999913628",
      gasUsed: "258640",
      hash: "0xe2cbcb881abb5825f24f97f84439b1cb7acd191b705a0ebdcee3c31309d2747a",
      input:
        "0x1688f0b9000000000000000000000000d9db270c1b5e3bd161e8c8503c55ceabee70955200000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000018b52a241b00000000000000000000000000000000000000000000000000000000000000164b63e800d0000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000140000000000000000000000000f48f2b2d2a534e402487b3ee7c18c33aec0fe5e400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000009d0870e65416c0727cf733704069d9fea5a66be4000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      isError: "0",
      methodId: "0x1688f0b9",
      nonce: "9",
      timeStamp: "1697898467",
      to: "0xa6b71e26c5e0845f74c812102ca7114b6a896ab2",
      transactionIndex: "67",
      txreceipt_status: "1",
      value: "0",
    },
  ]);
  const { currentIndex, setCurrentIndex } = useMyContext();
  const [totalTransaction, setTotalTransaction] = useState(0);

  async function DataApi() {
    //totalTransaction
    const address = "0xa6B71E26C5e0845f74c812102Ca7114b6a896AB2";
    const action = "txlist"; // For normal transactions
    const modul = "account";
    const startBlock = "0"; // Start from block 0
    const endBlock = "99999999"; // 99999999 Up to the latest block
    const res = await fetch(
      `${options[currentIndex].ScanLink}?module=${modul}&action=${action}&startblock=${startBlock}&endblock=${endBlock}&sort=desc&address=${address}&page=1&apikey=${options[currentIndex].ApiKey}`,
      {
        next: {
          revalidate: 1,
        },
      }
    );
    const data = await res.json();
    console.log(data);
    setTotalTransaction(data.result.length);
    setItemsToShow(data.result.slice(0, 10));
    setFlag(true);
  }
  React.useEffect(() => {
    DataApi();
    setFlag(false);
  }, [currentIndex]);

  // owner/scials, txn hash, action(contract), time, block
  return (
    <div className=" w-full h-full">
      <Tabs defaultValue="Etherum" className="w-full">
        <TabsList className="w-full flex">
          {options.map((option, index) => {
            return (
              <TabsTrigger
                key={index}
                onClick={(e) => {
                  setCurrentIndex(index);
                  console.log(index);
                }}
                className=" w-full"
                value={option.label}
              >
                {option.label}
              </TabsTrigger>
            );
          })}
        </TabsList>
        <TabsContent value={options[currentIndex].label}>
          {flag ? (
            <p className=" text-lg text-muted-foreground">
              Showing <span className="text-white">10</span> txns of total{" "}
              <span className=" text-green-600">{totalTransaction}+</span>
            </p>
          ) : (
            <div className="flex item-center gap-2">
              <p className=" text-lg text-muted-foreground">
                Showing <span className="text-white">10</span> txns of total{" "}
              </p>
              <Skeleton className=" w-20 h-4  mt-1" />
            </div>
          )}

          {flag ? (
            <>
              {Array.isArray(itemTOshow) &&
                itemTOshow.length > 0 &&
                itemTOshow.map((items, key) => {
                  return (
                    <>
                      <DataRow
                        key={key}
                        userAddress={items.from}
                        txnHash={items.hash}
                        block={items.blockNumber}
                        fees={items.gas}
                        time={moment(Number(items.timeStamp) * 1000).fromNow()}
                        action={items.functionName.slice(0, 15)}
                      />
                    </>
                  );
                })}
            </>
          ) : (
            <LoadingDataRows repeat={10} />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
