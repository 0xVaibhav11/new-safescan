import { Button } from "@/components/ui/button";
import axios from "axios";

import Link from "next/link";
import React, { MouseEvent } from "react";
import { useState } from "react";
import { AllTransactionList } from "@/lib/safe-utils/safeApp";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Wallet, providers, Signer } from "ethers";
import { options } from "@/lib/AllData/AllOption";
import { FiArrowDown } from "react-icons/fi";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { RiFileList3Fill } from "react-icons/ri";
import { useMyContext } from "@/context/AppContext";
import { shortenAddress } from "@/lib/utils";
import { SafeMultisigConfirmationListResponse } from "@safe-global/safe-core-sdk-types";
interface Item {
  txType: "";
  blockNumber: "18399277";
  executionDate: " ";
  from: "0x9d0870e65416c0727cf733704069d9fea5a66be4";
  to: "0xa6b71e26c5e0845f74c812102ca7114b6a896ab2";
  data: "";
  txHash: "0xe2cbcb881abb5825f24f97f84439b1cb7acd191b705a0ebdcee3c31309d2747a";
}
type DataRowProps = {
  userAddress: string;
  txnHash: string | undefined;
  action: string;
  time: string;
  block: string;

  key: any;
};
export function DataRowForSingle({
  userAddress,
  txnHash,
  action,
  time,
  block,

  key,
}: DataRowProps) {
  if (action == "MULTISIG_TRANSACTION") {
    return;
  }
  return (
    <div
      id="row"
      className=" w-full h-max p-4 flex justify-between items-center"
      key={key}
    >
      <div id="txnColumn" className="w-[45%] flex flex-col gap-2">
        <div className=" flex gap-2 items-center  text-muted-foreground">
          <HiOutlineSwitchHorizontal />
          <p className=" text-foreground-900">
            {shortenAddress(userAddress, 20)}
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
      </div>
    </div>
  );
}
export function DataRowForMulti({
  userAddress,
  txnHash,
  action,
  time,
  block,

  key,
}: DataRowProps) {
  if (action == "ETHEREUM_TRANSACTION") {
    return;
  }
  return (
    <div
      id="row"
      className=" w-full h-max p-4 flex justify-between items-center"
      key={key}
    >
      <div id="txnColumn" className="w-[45%] flex flex-col gap-2">
        <div className=" flex gap-2 items-center  text-muted-foreground">
          <HiOutlineSwitchHorizontal />
          <p className=" text-foreground-900">
            {shortenAddress(userAddress, 20)}
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
      </div>
    </div>
  );
}
export function DataRowModule({
  userAddress,
  txnHash,
  action,
  time,
  block,

  key,
}: DataRowProps) {
  if (action == "MULTISIG_TRANSACTION") {
    return;
  }
  return (
    <div
      id="row"
      className=" w-full h-max p-4 flex justify-between items-center"
      key={key}
    >
      <div id="txnColumn" className="w-[45%] flex flex-col gap-2">
        <div className=" flex gap-2 items-center  text-muted-foreground">
          <HiOutlineSwitchHorizontal />
          <p className=" text-foreground-900">
            {shortenAddress(userAddress, 20)}
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
      </div>
    </div>
  );
}

export function getSignerFromPrivateKey(
  privateKey: string,
  rpcUrl: string
): Signer {
  const provider = new providers.JsonRpcProvider(rpcUrl);
  const wallet = new Wallet(privateKey, provider);
  return wallet;
}
export default function TransactionTab({ address }: { address: string }) {
  const [flag, setFlag] = useState(false);
  const { SerchIndex, setSerchIndex } = useMyContext();

  const [itemTOshow, setItemsToShow] = useState<Item[]>([
    {
      txType: "",
      blockNumber: "18399277",
      executionDate: " ",
      from: "0x9d0870e65416c0727cf733704069d9fea5a66be4",
      to: "0xa6b71e26c5e0845f74c812102ca7114b6a896ab2",
      data: "",
      txHash:
        "0xe2cbcb881abb5825f24f97f84439b1cb7acd191b705a0ebdcee3c31309d2747a",
    },
  ]);
  const signer = getSignerFromPrivateKey(
    "b2dfd42d32e7edf1a74fe0b3fa07d2773d6b0145a19553a770d91a80333a8c39",
    options[6].ProviderLink
  );
  async function AllTransaction() {
    try {
      const ans: any = await AllTransactionList(
        signer,
        options[SerchIndex].SafeTxService,
        address
      );
      setFlag(true);
      setItemsToShow(ans.results);
      console.log(ans.results);
    } catch (e) {
      console.log(e);
    }
  }

  React.useEffect(() => {
    setFlag(false);
    AllTransaction();
  }, [SerchIndex]);

  return (
    <div className=" w-[80vw] h-full ">
      <Tabs defaultValue="SafeTransaction" className="w-full">
        <TabsList className="w-full flex">
          <TabsTrigger className=" w-full" value="SafeTransaction">
            Safe Transaction
          </TabsTrigger>
          <TabsTrigger className=" w-full" value="MultiTx">
            MultiSign Transaction
          </TabsTrigger>
          <TabsTrigger className=" w-full" value="ModuleTx">
            Module Transaction
          </TabsTrigger>
        </TabsList>
        <TabsContent value="SafeTransaction">
          {flag && (
            <div className="w-full min-h-[100vh]   flex flex-col">
              {Array.isArray(itemTOshow) &&
                itemTOshow.map((items, key) => {
                  return (
                    <DataRowForSingle
                      key={key}
                      userAddress={items.from}
                      txnHash={items.txHash}
                      block={items.blockNumber}
                      time={items.executionDate}
                      action={items.txType}
                    />
                  );
                })}
            </div>
          )}
        </TabsContent>
        <TabsContent value="MultiTx">
          {flag && (
            <div className="w-full min-h-[100vh]   flex flex-col">
              {Array.isArray(itemTOshow) &&
                itemTOshow.map((items, key) => {
                  return (
                    <DataRowForMulti
                      key={key}
                      userAddress={items.from}
                      txnHash={items.txHash}
                      block={items.blockNumber}
                      time={items.executionDate}
                      action={items.txType}
                    />
                  );
                })}
            </div>
          )}
        </TabsContent>
        <TabsContent value="ModuleTx">
          {flag && (
            <div className="w-full min-h-[100vh]   flex flex-col">
              {Array.isArray(itemTOshow) &&
                itemTOshow.map((items, key) => {
                  return (
                    <DataRowModule
                      key={key}
                      userAddress={items.from}
                      txnHash={items.txHash}
                      block={items.blockNumber}
                      time={items.executionDate}
                      action={items.txType}
                    />
                  );
                })}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
