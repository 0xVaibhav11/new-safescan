"use client";

import React, { createContext, useContext, ReactNode, useState } from "react";
import { providers } from "ethers";
import { ethers } from "ethers";
// Define the shape of your context data
interface MyContextData {
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  SerchIndex: number;
  setSerchIndex: React.Dispatch<React.SetStateAction<number>>;
  otherAccount: NextidNeighbor[];
  setOtherAccount: React.Dispatch<React.SetStateAction<NextidNeighbor[]>>;
  privateKey: string | undefined;
}
interface NextidNeighbor {
  displayName: string;
  identity: string;
  platform: string;
  uuid: string;
}
interface ChainsDatas {
  provider: string;
  signer: providers.JsonRpcSigner;
  rpcLink: string;
  ApiKey: string;
  txService: string;
}

const MyContext = createContext<MyContextData | undefined>(undefined);

export function MyContextProvider({ children }: { children: ReactNode }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [SerchIndex, setSerchIndex] = useState(0);
  const [otherAccount, setOtherAccount] = useState<NextidNeighbor[]>([]);
  const privateKey = process.env.NEXT_PUBLIC_PrivateKey;
  return (
    <MyContext.Provider
      value={{
        otherAccount,
        setOtherAccount,
        privateKey,
        currentIndex,
        setCurrentIndex,
        SerchIndex,
        setSerchIndex,
      }}
    >
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
