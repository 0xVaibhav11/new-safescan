import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getSafeCreationInfo, getSafeInfo } from "@/lib/safe-utils/safeApp";
import { SafeCreationInfoResponse } from "@safe-global/api-kit";
import { ethers } from "ethers";
import { SignerType, getSignerFromPrivateKey } from "@/lib/utils";
import { useMyContext } from "@/context/AppContext";
import { options } from "@/lib/AllData/AllOption";
import { useEffect, useState } from "react";

interface Creater {
  created: string;
  txHash: string;
  facoryAdd: string;
  MasterCopy: string;
}
export default function AccordionDemo({ address }: { address: string }) {
  const [createrinfo, setCreaterinfo] = useState<SafeCreationInfoResponse>();
  const { SerchIndex, setSerchIndex } = useMyContext();
  const signer = getSignerFromPrivateKey(
    "b2dfd42d32e7edf1a74fe0b3fa07d2773d6b0145a19553a770d91a80333a8c39",
    options[SerchIndex].ProviderLink
  );
  async function logSafeInfo() {
    const checksummedAddress = ethers.utils.getAddress(address);

    const ans = await getSafeCreationInfo(
      signer,
      options[SerchIndex].SafeTxService,
      checksummedAddress
    );
    if (ans) {
      setCreaterinfo(ans);
    }
  }
  useEffect(() => {
    logSafeInfo();
  }, []);
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>{address} </AccordionTrigger>

        <AccordionContent>
          {" "}
          Creation time {createrinfo?.created}
        </AccordionContent>
        <AccordionContent>
          {" "}
          MasterCopy {createrinfo?.masterCopy}
        </AccordionContent>
        <AccordionContent>
          {" "}
          Factory Address {createrinfo?.factoryAddress}
        </AccordionContent>
        <AccordionContent>
          {" "}
          SafeTxHash {createrinfo?.transactionHash}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
