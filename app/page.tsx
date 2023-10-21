"use client";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import { GET_NEXTID_INFO } from "@/graphql/queries";
import { useEffect } from "react";

export default function Home() {
  const { loading, error, data } = useQuery(GET_NEXTID_INFO);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      open console to see the result
    </main>
  );
}
