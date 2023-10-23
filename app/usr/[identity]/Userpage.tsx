import React from "react";
import { useMyContext } from "@/context/AppContext";
import { options } from "@/lib/AllData/AllOption";
import { getSafesByOwner } from "@/lib/safe-utils/safeApp";
import { useNextid } from "@/lib/hooks/use-nextid-relation-service";
import { useRouter } from "next/router";

type UserpageProps = {
  id: string;
  platform: "twitter" | "ens" | "lens" | "safe" | "dotbit" | "eoa";
};

export default function Userpage({ id, platform }: UserpageProps) {
  if (id === "" && id === undefined) return <div>error</div>;
  return (
    <div className="">
      <p>{id ? id : "loading.."}</p>
      <p>{platform ? platform : "loading.."}</p>
    </div>
  );
}
