"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <main className=" w-full min-h-screen px-[1rem]">
      <div className=" w-full h-full">
        <Navbar />
        <Header />
      </div>
    </main>
  );
}
