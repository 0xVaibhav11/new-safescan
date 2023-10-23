"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import { Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import { useMyContext } from "@/context/AppContext";

import { BsArrowUpRight } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Drawer from "./Drawer/Drawer";
import Link from "next/link";
import { options } from "@/lib/AllData/AllOption";

export default function Navbar() {
  const { SerchIndex, setSerchIndex } = useMyContext();

  const router = useRouter();
  const [search, setSearch] = useState("vatalic.eth");
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
    <div className=" w-full h-[10%] py-2 border-t-1 border-b-1 border-y-muted-foreground font-display flex items-center justify-between bg-[rgb(9,9,11,0.1)] backdrop-blur-lg">
      <Link href="/">
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
      </Link>
      <div className=" flex flex-row w-[30%] text-xl py-[0.5rem]">
        {" "}
        <a href="https://github.com/Trymbakmahant/SafeScan">
          GitHub <span></span>
        </a>
        <div style={{ padding: "4px" }}>
          <BsArrowUpRight />{" "}
        </div>
      </div>
      <div>
        <Drawer />
      </div>
      <div className=" flex items-center w-[40%] gap-4 font-body">
        <DropdownMenu>
          <DropdownMenuTrigger>{options[SerchIndex].label}</DropdownMenuTrigger>
          <DropdownMenuContent>
            {options.map((items, index) => {
              return (
                <DropdownMenuItem
                  key={index}
                  onClick={() => {
                    setSerchIndex(index);
                  }}
                >
                  {items.label}
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>

        <Input
          type="email"
          placeholder="Search safe addr / Txn hash / @twitter / web3 identity"
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
