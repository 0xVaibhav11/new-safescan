import { Pagination } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { FiChevronDown } from "react-icons/fi";
import LatestCreationFeed from "./LatestCreationFeed";

function Right() {
  return (
    <div id="right" className=" w-[30%] h-[400px] sticky top-4 pl-4">
      <div className=" relative w-full h-full overflow-hidden pb-[75px]">
        <div className="w-full h-full p-4 flex flex-col justify-between items-end">
          <div className=" w-full flex justify-between">
            <p className=" text-muted-foreground italic">01/</p>
            <p className="">About Us</p>
          </div>
          <p className=" w-3/4 text-end">
            Wellcome to safe world here you can get all information about you
            safe account's here we are using safe sdk for getting .. and mask
            for getting the data if they have an ENS or an address
          </p>
        </div>

        <div className=" absolute inset-0 rounded-lg z-[-1]">
          <Image
            className=" object-cover object-center rounded-lg select-none pointer-events-none"
            src="/safe-anime.gif"
            alt="safe-anime"
            fill
          />
          <div className=" absolute inset-0 z-10 bg-[rgb(0,0,0,0.7)] rounded-lg backdrop-blur-sm "></div>
        </div>
        <div className="clip-frame bg-background pt-2 pl-2">
          <div className=" w-full h-full flex flex-col items-center justify-center italic rounded-md">
            <p>scroll down</p>
            <FiChevronDown />
          </div>
        </div>
      </div>
    </div>
  );
}

function Left() {
  return (
    <div id="left" className=" w-[70%] min-h-[100vh] bg-black-700">
      <LatestCreationFeed />
    </div>
  );
}

function HeroText() {
  return (
    <div
      id="hero-text"
      className=" w-full py-8 h-max  flex flex-col items-start justify-center gap-4"
    >
      <div className="font-body pl-4 flex w-1/2 justify-between items-center">
        <p>Here's the</p>
        <div className=" text-center text-muted-foreground">
          <p> / Optimized and web3 community based,</p>
          <p>on all chains!</p>
        </div>
      </div>
      <h1 className="font-display text-9xl italic leading-none">
        Scanner of Safe world
      </h1>
    </div>
  );
}

export default function Header() {
  return (
    <div className=" w-full min-h-[100vh]">
      <HeroText />
      <div className="flex w-full min-h-screen " id="hero-wrapper">
        <Left />
        <Right />
      </div>
    </div>
  );
}
