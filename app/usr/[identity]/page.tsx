"use client";
import React, { useContext, useState } from "react";
import { options } from "@/lib/AllData/AllOption";
import { useMyContext } from "@/context/AppContext";
import { getSafeInfo } from "@/lib/safe-utils/safeApp";
import { Wallet, providers, Signer } from "ethers";
import AddressPage from "./Address";
import Lens from "./lens";
import Dotbit from "./Dotbit";
import SafePage from "./SafeAddress";
import Ens from "./Ens";
import Twitter from "./Twitter";
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
  const [flagdata, setFlagdata] = useState({
    eao: false,
    safe: false,
    twitter: false,
    lens: false,
    ens: false,
    bit: false,
  });
  const id = identity;
  const { currentIndex, setCurrentIndex, privateKey } = useMyContext();
  const signer = getSignerFromPrivateKey(
    "b2dfd42d32e7edf1a74fe0b3fa07d2773d6b0145a19553a770d91a80333a8c39",
    options[6].ProviderLink
  );
  async function IdentityFUnction() {
    try {
      if (identity.length == 42) {
        await name();
      } else if (
        identity.slice(identity.length - 4, identity.length) == "lens"
      ) {
        setFlagdata((prevState) => ({
          ...prevState,
          lens: true,
        }));
        console.log("lens");
      } else if (
        identity.slice(identity.length - 3, identity.length) == "ens"
      ) {
        console.log("ens");
        setFlagdata((prevState) => ({
          ...prevState,
          ens: true,
        }));
      } else if (identity.slice(0, 3) == "%40") {
        console.log("this is twitter");
        setFlagdata((prevState) => ({
          ...prevState,
          twitter: true,
        }));
      } else if (
        identity.slice(identity.length - 3, identity.length) == "bit"
      ) {
        setFlagdata((prevState) => ({
          ...prevState,
          bit: true,
        }));
        console.log("this is dot bit");
      }
    } catch (e) {
      console.log(e);
    }
  }
  async function name() {
    const ans = await getSafeInfo(signer, options[6].SafeTxService, identity);

    if (ans == undefined) {
      setFlagdata((prevState) => ({
        ...prevState,
        eao: true,
      }));
      console.log("eao");
    } else {
      console.log("safe");
      setFlagdata((prevState) => ({
        ...prevState,
        safe: true,
      }));
    }
  }

  React.useEffect(() => {
    IdentityFUnction();
  }, []);

  return (
    <div className=" w-screen h-screen flex items-center justify-center text-xl ">
      {flagdata.bit && (
        <>
          <Dotbit id={identity} />
        </>
      )}
      {flagdata.ens && (
        <>
          <Ens id={identity} />
        </>
      )}
      {flagdata.twitter && (
        <>
          <Twitter id={identity} />
        </>
      )}
      {flagdata.lens && (
        <>
          <Lens id={identity} />
        </>
      )}
      {flagdata.eao && (
        <>
          <AddressPage id={identity} />
        </>
      )}
      {flagdata.safe && (
        <>
          <SafePage id={identity} />
        </>
      )}
    </div>
  );
}
