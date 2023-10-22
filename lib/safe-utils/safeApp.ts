"use client";
import SafeApiKit from "@safe-global/api-kit";
import { ethers, providers } from "ethers";
import { EthersAdapter } from "@safe-global/protocol-kit/dist/src/adapters/ethers";
import {
  SafeServiceInfoResponse,
  MasterCopyResponse,
  SafeMultisigTransactionEstimateResponse,
  OwnerResponse,
  SafeCreationInfoResponse,
  TokenInfoListResponse,
  TransferListResponse,
  AllTransactionsListResponse,
  SafeMultisigTransactionListResponse,
  SafeModuleTransactionListResponse,
  SafeInfoResponse,
} from "@safe-global/api-kit";
import { SafeMultisigTransactionResponse } from "@safe-global/safe-core-sdk-types";
import { txServiceList } from "./safeData";

//Returns the information and configuration of the service.
export async function getServiceInfo(
  address: any,
  signer: providers.JsonRpcSigner,
  txServiceUrl: string
) {
  try {
    const ethAdapterOwner1 = new EthersAdapter({
      ethers,
      signerOrProvider: signer,
    });

    const safeService = new SafeApiKit({
      txServiceUrl,
      ethAdapter: ethAdapterOwner1,
    });
    const serviceInfo: SafeServiceInfoResponse =
      await safeService.getServiceInfo();
    console.log(serviceInfo);
    return serviceInfo;
  } catch (e) {
    console.log(e);
  }
}

/// this help to find safe account of the address
export async function getSafesByOwner(
  address: any,
  signer: providers.JsonRpcSigner,
  txServiceUrl: string
) {
  try {
    const ethAdapterOwner1 = new EthersAdapter({
      ethers,
      signerOrProvider: signer,
    });

    const safeService = new SafeApiKit({
      txServiceUrl,
      ethAdapter: ethAdapterOwner1,
    });
    console.log(safeService);
    const safes: OwnerResponse = await safeService.getSafesByOwner(address);
    return safes;
  } catch (e) {
    console.log(e);
  }
}

// export async function Ownerdetal({
//   signer,
// }: {
//   signer: providers.JsonRpcSigner;
// }) {
//   try {
//     const ethAdapterOwner1 = new EthersAdapter({
//       ethers,
//       signerOrProvider: signer,
//     });
//     const address = "0x645D85678C2d4C56c17F3579a278C2bE2D73119c";
//     const txServiceUrl = "https://safe-transaction-goerli.safe.global";

//     const safeService = new SafeApiKit({
//       txServiceUrl,
//       ethAdapter: ethAdapterOwner1,
//     });

//     const serviceInfo: OwnerResponse = await safeService.getSafesByOwner(
//       address
//     );
//     console.log(serviceInfo);
//     return serviceInfo;
//   } catch (e) {
//     console.log(e);
//   }
// }

// return the data of multisig transaction by transaction hash
export async function getMultisigTransaction(
  safeTxHash: any,
  signer: providers.JsonRpcSigner,
  txServiceUrl: string
) {
  const ethAdapterOwner1 = new EthersAdapter({
    ethers,
    signerOrProvider: signer,
  });

  const safeService = new SafeApiKit({
    txServiceUrl,
    ethAdapter: ethAdapterOwner1,
  });
  const tx: SafeMultisigTransactionResponse = await safeService.getTransaction(
    safeTxHash
  );
  return tx;
}

// return the transaction detail by taking parameter  of safe service and transaction hash as safetxhash
export async function getDataWithTransactionHash(
  signer: providers.JsonRpcSigner,
  txServiceUrl: string,
  safeTxHash: string
) {
  try {
    const ethAdapterOwner1 = new EthersAdapter({
      ethers,
      signerOrProvider: signer,
    });

    const safeService = new SafeApiKit({
      txServiceUrl,
      ethAdapter: ethAdapterOwner1,
    });
    const tx: SafeMultisigTransactionResponse =
      await safeService.getTransaction(safeTxHash);
    console.log(tx);
    return tx;
  } catch (e) {
    console.log(e);
  }
}

// return all the information about the safe
export async function getSafeInfo(
  signer: any,
  txServiceUrl: string,
  address: string
) {
  try {
    const ethAdapterOwner1 = new EthersAdapter({
      ethers,
      signerOrProvider: signer,
    });

    const safeService = new SafeApiKit({
      txServiceUrl,
      ethAdapter: ethAdapterOwner1,
    });
    console.log("hello");
    const safeInfo: SafeInfoResponse = await safeService.getSafeInfo(address);
    console.log(safeInfo);
    return safeInfo;
  } catch (e) {
    console.log(e);
  }
}

// return the information of safe creation
export async function getSafeCreationInfo(
  signer: providers.JsonRpcSigner,
  txServiceUrl: string,
  address: string
) {
  const ethAdapterOwner1 = new EthersAdapter({
    ethers,
    signerOrProvider: signer,
  });

  const safeService = new SafeApiKit({
    txServiceUrl,
    ethAdapter: ethAdapterOwner1,
  });
  const safeCreationInfo: SafeCreationInfoResponse =
    await safeService.getSafeCreationInfo(address);
  return safeCreationInfo;
}

// return the safe transaction history
export async function SafeTransactionsHistory(
  signer: providers.JsonRpcSigner,
  txServiceUrl: string,
  address: string
) {
  const ethAdapterOwner1 = new EthersAdapter({
    ethers,
    signerOrProvider: signer,
  });

  const safeService = new SafeApiKit({
    txServiceUrl,
    ethAdapter: ethAdapterOwner1,
  });
  const incomingTxs: TransferListResponse =
    await safeService.getIncomingTransactions(address);

  return incomingTxs;
}

// return the transaction history by any module
export async function ModuleTransactionsHistory(
  signer: providers.JsonRpcSigner,
  txServiceUrl: string,
  address: string
) {
  const ethAdapterOwner1 = new EthersAdapter({
    ethers,
    signerOrProvider: signer,
  });

  const safeService = new SafeApiKit({
    txServiceUrl,
    ethAdapter: ethAdapterOwner1,
  });
  const moduleTxs: SafeModuleTransactionListResponse =
    await safeService.getModuleTransactions(address);

  return moduleTxs;
}

// return the transaction history of a safe with multiple owner
export async function MultisigTransactionsHistory(
  signer: providers.JsonRpcSigner,
  txServiceUrl: string,
  address: string
) {
  const ethAdapterOwner1 = new EthersAdapter({
    ethers,
    signerOrProvider: signer,
  });

  const safeService = new SafeApiKit({
    txServiceUrl,
    ethAdapter: ethAdapterOwner1,
  });
  const multisigTxs: SafeMultisigTransactionListResponse =
    await safeService.getMultisigTransactions(address);

  return multisigTxs;
}

// return all the pending transaction  of safe with multiple owner
export async function MultiSigPendingTransactionsList(
  signer: providers.JsonRpcSigner,
  txServiceUrl: string,
  address: string
) {
  const ethAdapterOwner1 = new EthersAdapter({
    ethers,
    signerOrProvider: signer,
  });

  const safeService = new SafeApiKit({
    txServiceUrl,
    ethAdapter: ethAdapterOwner1,
  });
  const pendingTxs: SafeMultisigTransactionListResponse =
    await safeService.getPendingTransactions(address);

  return pendingTxs;
}

/// return all the transaction list of a  particular safe
export async function AllTransactionList(
  signer: providers.JsonRpcSigner,
  txServiceUrl: string,
  address: string
) {
  const ethAdapterOwner1 = new EthersAdapter({
    ethers,
    signerOrProvider: signer,
  });

  const safeService = new SafeApiKit({
    txServiceUrl,
    ethAdapter: ethAdapterOwner1,
  });
  const allTxs: AllTransactionsListResponse =
    await safeService.getAllTransactions(address);
  return allTxs;
}

// its return pending transaction list by taking safe address and nonce
export async function PendingTransactionsListWithCurrentNonce(
  signer: providers.JsonRpcSigner,
  txServiceUrl: string,
  address: string,
  currentNonce: any
) {
  const ethAdapterOwner1 = new EthersAdapter({
    ethers,
    signerOrProvider: signer,
  });

  const safeService = new SafeApiKit({
    txServiceUrl,
    ethAdapter: ethAdapterOwner1,
  });
  const pendingTxs: SafeMultisigTransactionListResponse =
    await safeService.getPendingTransactions(address, currentNonce);
  return pendingTxs;
}

// return the info about the safe  with all info

export async function AllTokenForSafe(
  signer: providers.JsonRpcSigner,
  txServiceUrl: string
) {
  const ethAdapterOwner1 = new EthersAdapter({
    ethers,
    signerOrProvider: signer,
  });

  const safeService = new SafeApiKit({
    txServiceUrl,
    ethAdapter: ethAdapterOwner1,
  });
  const tokens: TokenInfoListResponse = await safeService.getTokenList();
  return tokens;
}
