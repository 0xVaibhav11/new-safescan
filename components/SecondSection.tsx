import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Link } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FiArrowUpRight, FiChevronDown } from "react-icons/fi";

function Left() {
  return (
    <div className=" w-[30%] h-screen  mr-4">
      <div className="w-full h-[30%]">
        <div className=" h-full w-full relative">
          <Image
            src={"/ethereum-anime.gif"}
            alt="ethereum"
            fill
            className=" object-cover object-center rounded-lg select-none pointer-events-none"
            priority
          />
        </div>
      </div>
      <div className=" flex w-full h-[70%] pt-4">
        <div className=" h-full w-full flex flex-col justify-between">
          <div className=" flex w-full justify-between">
            <p className=" text-muted-foreground italic">02/</p>
            <p className="pl-2">Links</p>
          </div>
          <div className=" flex flex-col w-full justify-between">
            <p className=" font-display italic text-9xl border-b-1 border-muted-foreground mb-8">
              Links
            </p>
            <div className=" border-b-1 border-muted-foreground py-[0.5rem]">
              <p className=" text-muted-foreground italic">Showcase/</p>
              <p className="font-display text-5xl hover:italic hover:underline cursor-pointer">
                EthGlobal
              </p>
            </div>
            <div className=" border-b-1 border-muted-foreground py-[0.5rem]">
              <p className=" text-muted-foreground italic">Repo/</p>
              <p className="font-display text-5xl hover:italic hover:underline transition cursor-pointer">
                <a href="https://github.com/Trymbakmahant/SafeScan">GitHub </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Right() {
  return (
    <div className=" w-full h-screen bg-zinc-900 rounded-lg relative pb-[75px]">
      <div className=" w-full h-full p-4 flex flex-col justify-between items-end">
        <div className=" w-full flex justify-between">
          <p className=" text-muted-foreground italic">03/</p>
          <p className="">Made using Safe and Mask</p>
        </div>
        <div className="relative w-full h-full flex items-center">
          <div className=" absolute logo-sec left-[60%] w-44 h-44 rotate-12">
            <AspectRatio className=" rounded-lg">
              <Image
                src={"/safe.jpg"}
                alt="ethereum"
                fill
                className=" object-cover object-center rounded-lg select-none pointer-events-none"
                priority
              />
            </AspectRatio>
          </div>
          <div className=" logo absolute left-[20%] w-40 h-40 rotate-[-45deg] bg-white p-4 rounded-lg">
            <AspectRatio className=" rounded-lg ">
              <Image
                src={"/mask.png"}
                alt="ethereum"
                fill
                className=" object-cover object-center rounded-lg select-none pointer-events-none"
                priority
              />
            </AspectRatio>
          </div>
        </div>
        <p className=" w-[40%] text-end text-xl ">
          Here we are using safe core sdk for creating safe scan and relation
          service of mask for getting the nextIds and many more.
        </p>
      </div>
      <div className=" absolute inset-0 rounded-lg z-[-1]">
        <Image
          className=" object-cover object-center rounded-lg select-none pointer-events-none"
          src="/safe-anime.gif"
          alt="safe-anime"
          fill
        />
        <div className=" absolute inset-0 z-10 bg-[rgb(0,0,0,0.7)] rounded-lg backdrop-blur-sm " />
      </div>
      <div className="clip-frame-left bg-background pt-2 pl-2">
        <div className=" cursor-pointer hover:italic w-full h-full flex gap-4 items-center justify-center italic rounded-md">
          <p>EthGlobal2023</p>
          <FiArrowUpRight />
        </div>
      </div>
    </div>
  );
}
export default function SecondSection() {
  return (
    <div className=" w-full mt-4 pb-4 min-h-screen flex">
      <Left />
      <Right />
    </div>
  );
}
