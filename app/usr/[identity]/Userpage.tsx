"use client";
import React, { useEffect } from "react";
import ethereumUtil from "ethereumjs-util";
import { useMyContext } from "@/context/AppContext";
import { options } from "@/lib/AllData/AllOption";
import { getSafeInfo, getSafesByOwner } from "@/lib/safe-utils/safeApp";
import { ethers } from "ethers";
import {
  NextIdUsingAddr,
  NextidNeighbor,
  useGetUserAddr,
  useNextid,
} from "@/lib/hooks/use-nextid-relation-service";
import SafeList from "./safeList";
import { SignerType, getSignerFromPrivateKey } from "@/lib/utils";
import { LuCopy, LuCopyCheck } from "react-icons/lu";
import { shortenAddress } from "@/lib/utils";
import TransactionTab from "@/components/TransactionTab";

import { Separator } from "@/components/ui/separator";
import Avatar from "poc-avatarkit";

type UserpageProps = {
  id: string;
  platform: "twitter" | "ens" | "lens" | "safe" | "dotbit" | "eoa" | "unknown";
  error?: boolean;
};

function AccountDetails({
  addr,
  bal,
  tokens,
  nfts,
}: {
  addr: string;
  bal: string;
  tokens: number;
  nfts: number;
}) {
  return (
    <div className="flex flex-col text-muted-foreground">
      <div className="flex gap-2 items-center">
        <Avatar emojiType="flat" string={addr} size={32} />
        <p>{addr}</p>
      </div>
      <div className=" flex gap-4">
        <p>{bal}</p>
        <div className=" flex gap-2">
          <p className=" text-muted-foregraund">Tokens</p>
          <p className=" text-zinc-300">{tokens}</p>
        </div>
        <div className=" flex gap-2">
          <p className=" text-muted-foregraund">NFTs</p>
          <p className=" text-zinc-300">{nfts}</p>
        </div>
      </div>
    </div>
  );
}

export default function Userpage({ id, platform, error }: UserpageProps) {
  const { SerchIndex, setSerchIndex } = useMyContext();
  const [nextIdAddr, setNextIdAddr] = React.useState("");
  const [flag, setFlag] = React.useState(false);
  const [safeAddress, setSafeAddress] = React.useState<string[]>();
  const [currentSafe, setCurrentSafe] = React.useState("");
  const { ethAddr } = useGetUserAddr({
    platform: platform,
    identity: id,
  });
  const { data, loading, isNotReady } = useNextid({
    platform: "twitter",
    identity: "suji_yan",
  });
  const signer = getSignerFromPrivateKey(
    "b2dfd42d32e7edf1a74fe0b3fa07d2773d6b0145a19553a770d91a80333a8c39",
    options[6].ProviderLink
  );
  async function logSafeInfo() {
    if (nextIdAddr) {
      console.log(nextIdAddr);
      const add: string = nextIdAddr;
      const checksummedAddress = ethers.utils.getAddress(add);

      console.log(checksummedAddress);
      const ans = await getSafesByOwner(
        checksummedAddress,
        signer,
        options[SerchIndex].SafeTxService
      );
      console.log(ans?.safes);
      setFlag(true);
      setSafeAddress(ans?.safes);
    }
  }
  useEffect(() => {
    logSafeInfo();
  }, []);
  // useEffect(() => {
  //   if (loading) return;
  //   setNextIdAcc(data?.identity.neighbor);
  // }, [data, loading, isNotReady]);
  // useEffect(() => {
  //   console.log(nextIdAcc);
  // }, [nextIdAcc, loading, isNotReady]);

  useEffect(() => {
    console.log(ethAddr);
    setNextIdAddr(ethAddr);
    logSafeInfo();
  }, [ethAddr, SerchIndex]);

  return (
    <div className=" w-full min-h-screen px-4">
      <div className=" w-full min-h-[55vh] bg-background flex items-start justify-center px-unit-2xl pb-8">
        <div className=" w-[30%] flex flex-col items-end justify-center pt-10 pr-4 gap-2">
          <div className=" w-72 h-72 rounded-lg bg-blue-600"></div>
          <div className=" flex flex-col items-start w-72">
            <h1 className=" font-body font-bold text-xl leading-none">
              {platform}
            </h1>
            <div className=" flex gap-2 text-muted-foreground items-center justify-center">
              <p className=" ">
                {id.length < 25 ? id : shortenAddress(id, 13)}
              </p>
            </div>
          </div>
          <div className=" w-72 gap-1 flex justify-start flex-wrap pr-2">
            {/* {nextIdAcc.length !== 0 &&
              nextIdAcc.map((acc: any) => {
                return (
                  <UserIdBadge
                    key={acc.identity.platform}
                    platform={acc.identity.platform}
                    id={acc.identity.identity}
                  />
                );
              })} */}
            {nextIdAddr === undefined ? null : (
              <NextIdUsingAddr platform="ethereum" identity={nextIdAddr} />
            )}
            {/* <NextIdUsingAddr identity="suji_yan" platform="twitter" /> */}
          </div>
        </div>
        <div className="w-[70%] h-full pt-10 gap-4 pl-4 flex flex-col items-start">
          <div className="w-full flex flex-col items-start font-body">
            <h1 className=" font-body font-bold text-xl">Owner address</h1>
            <div className=" flex gap-2 text-muted-foreground items-center justify-center">
              <p className=" ">{nextIdAddr}</p>
              <LuCopy />
            </div>
            <p className=" text-4xl text-muted-foreground">9.99 ETH</p>
          </div>
          <Separator />
          <div className=" w-full h-[80%] flex flex-col items-start justify-start gap-3">
            <h2 className=" text-5xl">Safe accounts </h2>
            <h4 className=" text-1xl text-red-500">
              if nothing is showing please try changing chain{" "}
            </h4>
            <div className=" flex flex-col gap-2">
              {safeAddress?.map((add, index) => {
                return <SafeList key={index} address={add} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <h2>Address = {currentSafe} </h2>
      {/* <TransactionTab address={currentSafe} /> */}
    </div>
  );
}
