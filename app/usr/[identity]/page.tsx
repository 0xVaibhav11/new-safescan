import React from "react";

export default function Txn({
  params: { identity },
}: {
  params: { identity: string };
}) {
  return (
    <div className=" w-screen h-screen flex items-center justify-center text-xl ">
      <p>{identity}</p>
    </div>
  );
}
