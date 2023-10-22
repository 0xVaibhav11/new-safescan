import React from "react";

export default function Txn({
  params: { txnHash },
}: {
  params: { txnHash: string };
}) {
  return (
    <div className=" w-screen h-screen flex items-center justify-center text-xl ">
      <p>{txnHash}</p>
    </div>
  );
}
