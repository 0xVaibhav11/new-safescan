"use client";
import React, { useContext } from "react";
import { options } from "@/lib/AllData/AllOption";
import { useMyContext } from "@/context/AppContext";
import { getSafeInfo } from "@/lib/safe-utils/safeApp";
import { Wallet, providers, Signer } from "ethers";

export function getSignerFromPrivateKey(
  privateKey: string,
  rpcUrl: string
): Signer {
  const provider = new providers.JsonRpcProvider(rpcUrl);
  const wallet = new Wallet(privateKey, provider);
  return wallet;
}

export default function Txn({
  params: { identity },
}: {
  params: { identity: string };
}) {
  const { currentIndex, setCurrentIndex, privateKey } = useMyContext();

  async function IdentityFUnction() {
    try {
      if (identity.length == 42) {
        const ans = await hello(identity);
        console.log(ans);
        console.log("this is address");
      } else if (
        identity.slice(identity.length - 4, identity.length) == "lens"
      ) {
        console.log("lens");
      } else if (
        identity.slice(identity.length - 3, identity.length) == "ens"
      ) {
        console.log("ens");
      }
    } catch (e) {
      console.log(e);
    }
  }

  React.useEffect(() => {
    IdentityFUnction();
  });

  const signer = getSignerFromPrivateKey(
    "b2dfd42d32e7edf1a74fe0b3fa07d2773d6b0145a19553a770d91a80333a8c39",
    options[6].ProviderLink
  );
  async function hello(address: string) {
    const safeTxHash = "0xa43624b7472c37B1E1884645a3D04710afCD8eB5";
    try {
      const ans = await getSafeInfo(signer, options[6].SafeTxService, address);
      console.log(ans);
      if (ans == undefined) {
        console.log("eao");
      } else {
        console.log("its safe");
      }
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className=" w-screen h-screen flex items-center justify-center text-xl ">
      <p>{identity}</p>
    </div>
  );
}
