import useNextid from "@/lib/hooks/use-nextid-relation-service";
import React, { useEffect } from "react";

export default function Txn({
  params: { identity },
}: {
  params: { identity: string };
}) {
  const { data, loading } = useNextid({
    platform: "farcaster",
    identity: "suji",
  });

  return (
    <div className=" w-screen h-screen flex items-center justify-center text-xl ">
      <p>{identity}</p>
    </div>
  );
}
