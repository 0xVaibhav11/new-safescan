import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
import { Wallet, providers, Signer } from "ethers";
export type SignerType = Signer;
export type WalletType = Wallet;
export function getSignerFromPrivateKey(privateKey: string, rpcUrl: string) {
  const provider = new providers.JsonRpcProvider(rpcUrl);
  const wallet = new Wallet(privateKey, provider);
  return wallet;
}
export function shortenAddress(
  address: string | undefined,
  chars: 13 | 20 | 4
) {
  // 0x6ebbb366bc7542eeee...5683
  if (!address) return null;
  if (chars === 13) return `${address.slice(0, 13)}...${address.slice(-4)}`;
  if (chars === 4) return `${address.slice(0, 4)}...${address.slice(-4)}`;
  return `${address.slice(0, 20)}...${address.slice(-4)}`;
}
