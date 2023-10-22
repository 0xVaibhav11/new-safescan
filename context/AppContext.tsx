"use client";

import React, { createContext, useContext, ReactNode, useState } from "react";
import { providers } from "ethers";
import { ethers } from "ethers";
// Define the shape of your context data
interface MyContextData {
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  privateKey: string | undefined;
}
interface ChainsDatas {
  provider: string;
  signer: providers.JsonRpcSigner;
  rpcLink: string;
  ApiKey: string;
  txService: string;
}

// Create the context with an initial state
const MyContext = createContext<MyContextData | undefined>(undefined);

// Create a context provider component
export function MyContextProvider({ children }: { children: ReactNode }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const privateKey = process.env.NEXT_PUBLIC_PrivateKey;
  return (
    <MyContext.Provider value={{ privateKey, currentIndex, setCurrentIndex }}>
      {" "}
      {children}
    </MyContext.Provider>
  );
}

export function useMyContext() {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error("useNumber must be used within a NumberProvider");
  }
  return context;
}
