import Image from "next/image";
import React from "react";
import { FiChevronDown } from "react-icons/fi";

export default function Header() {
  return (
    <div className=" w-full min-h-[500vh]">
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
      <div id="hero-wrapper" className=" w-full min-h-screen flex">
        <div
          id="left"
          className=" w-[70%] h-[200vh] bg-red-700 opacity-5"
        ></div>
        <div id="right" className=" w-[30%] h-[400px] sticky top-4 pl-4">
          <div className=" relative w-full h-full overflow-hidden pb-[75px]">
            <div className="w-full h-full p-4 flex flex-col justify-between items-end">
              <div className=" w-full flex justify-between">
                <p className=" text-muted-foreground italic">01/</p>
                <p className="">About Us</p>
              </div>
              <p className=" w-3/4 text-end">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
                assumenda dolor voluptas quaerat, praesentium libero?
              </p>
            </div>

            <div className=" absolute inset-0 rounded-lg z-[-1]">
              <Image
                className=" object-cover object-center rounded-lg "
                src="/safe-anime.gif"
                alt="safe-anime"
                fill
              />
              <div className=" absolute inset-0 z-10 bg-[rgb(0,0,0,0.7)] rounded-lg backdrop-blur-sm "></div>
            </div>
            <div className="clip-frame bg-background flex flex-col items-center justify-center italic">
              <p>scroll down</p>
              <FiChevronDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
