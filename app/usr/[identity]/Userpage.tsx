"use client";
import React, { useEffect } from "react";
import { useMyContext } from "@/context/AppContext";
import { options } from "@/lib/AllData/AllOption";
import { getSafeInfo, getSafesByOwner } from "@/lib/safe-utils/safeApp";
import {
  NextidNeighbor,
  useNextid,
} from "@/lib/hooks/use-nextid-relation-service";
import TransactionPage from "@/components/TransactionTab";
import { useRouter } from "next/router";
import { Badge } from "@/components/ui/badge";
import { SignerType, getSignerFromPrivateKey } from "@/lib/utils";
import { LuCopy, LuCopyCheck } from "react-icons/lu";
import { shortenAddress } from "@/lib/utils";
import { UserIdBadge } from "@/components/UserIdBadge";
import { Separator } from "@/components/ui/separator";

type UserpageProps = {
  id: string;
  platform: "twitter" | "ens" | "lens" | "safe" | "dotbit" | "unknown";
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
      <p>{addr}</p>
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
  const { data, loading, ident } = useNextid({
    platform: "twitter",
    identity: "suji_yan",
  });
  let datais: NextidNeighbor[] = [];
  const [dataflag, setDataFlag] = React.useState(false);
  const { setOtherAccount, otherAccount } = useMyContext();
  const [userAllInfo, setUserAllInfo] = React.useState();

  const signer: SignerType = getSignerFromPrivateKey(
    "b2dfd42d32e7edf1a74fe0b3fa07d2773d6b0145a19553a770d91a80333a8c39",
    options[6].ProviderLink
  );
  async function logSafeInfo() {
    const safeInfo = await getSafesByOwner(
      "0xe159251810d23623a64Adb495648e44730bdfA27",
      signer,
      options[6].SafeTxService
    );
    console.log(safeInfo);
  }

  useEffect(() => {
    if (loading) return;
    console.log(ident);
    console.log(dataflag);
    datais = data?.identity.neigber;
    setOtherAccount(data?.identity.neighbor);
    setDataFlag(true);
    console.log(data?.identity.neighbor);
  }, [data]);
  return (
    <>
      <div className=" w-full min-h-screen px-4 bg-black">
        <div className=" w-full h-[75vh] bg-background flex items-center justify-center px-unit-2xl">
          <div className=" w-[30%] h-full flex flex-col items-end pt-10 pr-4 gap-2">
            <div className=" w-60 h-60 rounded-lg bg-blue-600"></div>
            <div className=" flex flex-col items-start w-60">
              <h1 className=" font-body font-bold text-xl leading-none">
                {platform}
              </h1>
              <div className=" flex gap-2 text-muted-foreground items-center justify-center">
                <p className=" ">
                  {id.length < 25 ? id : shortenAddress(id, 13)}
                </p>
              </div>
            </div>

            <div className=" w-60 gap-1 flex justify-start flex-wrap pr-2">
              {/* {otherAccount.map((acc, index) => {
                console.log(acc);
                return (
                  <UserIdBadge platform={acc.identity} id={acc.displayName} />
                );
              })} */}
              {/* <UserIdBadge platform="lens" id={id} />
         <UserIdBadge platform="ens" id={id} />
         <UserIdBadge platform={"farcaster"} id={id} />
         <UserIdBadge platform={"github"} id={id} />
         <UserIdBadge platform={"twitter"} id={id} /> */}
            </div>
          </div>
          <div className="w-[70%] h-full pt-10 gap-4 pl-4 flex flex-col items-start">
            <div className="w-full flex flex-col items-start font-body">
              <h1 className=" font-body font-bold text-xl">Owner address</h1>
              <div className=" flex gap-2 text-muted-foreground items-center justify-center">
                <p className=" ">0xa6B71E26C5e0845f74c812102Ca7114b6a896AB2</p>
                <LuCopy />
              </div>
              <p className=" text-4xl text-muted-foreground">9.99 ETH</p>
            </div>
            <Separator />
            <div className=" w-full h-[80%] flex items-start justify-start gap-3">
              <div className=" w-1/2">
                <h2 className=" text-4xl">Safe accounts</h2>
                <div className=" flex flex-col gap-2">
                  <AccountDetails
                    addr="0xa6B71E26C5e0845f74c812102Ca7114b6a896AB2"
                    bal="9.99 ETH"
                    tokens={0}
                    nfts={0}
                  />
                  <AccountDetails
                    addr="0xa6B71E26C5e0845f74c812102Ca7114b6a896AB2"
                    bal="9.99 ETH"
                    tokens={0}
                    nfts={0}
                  />
                  <AccountDetails
                    addr="0xa6B71E26C5e0845f74c812102Ca7114b6a896AB2"
                    bal="9.99 ETH"
                    tokens={0}
                    nfts={0}
                  />
                </div>
              </div>
              <div className=" w-1/2">
                <h2 className=" text-4xl">Safe accounts</h2>
                <div className=" flex flex-col gap-2">
                  <AccountDetails
                    addr="0xa6B71E26C5e0845f74c812102Ca7114b6a896AB2"
                    bal="9.99 ETH"
                    tokens={0}
                    nfts={0}
                  />
                  <AccountDetails
                    addr="0xa6B71E26C5e0845f74c812102Ca7114b6a896AB2"
                    bal="9.99 ETH"
                    tokens={0}
                    nfts={0}
                  />
                  <AccountDetails
                    addr="0xa6B71E26C5e0845f74c812102Ca7114b6a896AB2"
                    bal="9.99 ETH"
                    tokens={0}
                    nfts={0}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TransactionPage address="0xa43624b7472c37B1E1884645a3D04710afCD8eB5" />
    </>
  );
}
