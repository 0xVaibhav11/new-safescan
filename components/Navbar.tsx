import Image from "next/image";
import React, { useState } from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import { Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";

export default function Navbar() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // Call your search function here
      if (search.length === 66) {
        router.push(`/txn/${search}`);
      } else {
        router.push(`/usr/${search}`);
      }
    }
  };
  return (
    <div className=" w-full h-[10%] py-4 border-t-1 border-b-1 border-y-muted-foreground font-display flex items-center justify-between bg-[rgb(9,9,11,0.1)] backdrop-blur-lg">
      <div className=" w-44">
        <AspectRatio ratio={518 / 120}>
          <Image
            src="/safescan-logo.svg"
            alt="logo"
            className=" object-cover select-none pointer-events-none"
            fill
          />
        </AspectRatio>
      </div>
      <div className=" flex w-[30%] text-xl py-[0.5rem]">lol</div>
      <div className=" flex w-[30%] text-xl py-[0.5rem] font-body">
        {/* "0xfbfb3fb72b2a59e8bca2f88d1e13293cbd98d10fb4ccaea25be8d61d1b65c9d4" */}
        <Input
          type="email"
          placeholder="Search by address / Txn hash / @username / web3 username"
          onKeyDown={handleSearch}
          onChange={(e) => setSearch(e.target.value)}
          startContent={
            <FiSearch className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
        />
      </div>
    </div>
  );
}
