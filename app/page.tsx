"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import SecondSection from "@/components/SecondSection";
import useNextid from "@/lib/hooks/use-nextid-relation-service";
import { useQuery } from "@apollo/client";
import { GET_NEXTID_INFO } from "@/graphql/queries";
import Apitesting from "@/testing/apitesting";
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
      {/* <Apitesting /> */}
      <div className=" w-full h-max">
        <Navbar />
        <Header />
      </div>
      <SecondSection />
    </main>
  );
}
