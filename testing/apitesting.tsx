// import React from "react";
// // import AKAfunction from "../utils/Safe-Api/safeApp";
// import { ethers } from "ethers";
// import SafeApiKit from "@safe-global/api-kit";
// import {
//   getSafeInfo,
//   getServiceInfo,
//   getSafesByOwner,
//   Ownerdetal,
// } from "../utils/Safe-Api/safeApp";

// import { EthersAdapter } from "@safe-global/protocol-kit/dist/src/adapters/ethers";
// import { useWalletClient, useAccount } from "wagmi";
// import { providers } from "ethers";
// import { useEthersSigner } from "../utils/hooks/ethersSigner";

// const apitesting = () => {
//   const { data: walletClient, isError, isLoading } = useWalletClient();
//   const signer: any = useEthersSigner();
//   const { address } = useAccount();
//   // const address = "0xa43624b7472c37B1E1884645a3D04710afCD8eB5";
//   async function hello() {
//     try {
//       const ans = await Ownerdetal({ signer });
//       console.log(ans);
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   return (
//     <div>
//       <button
//         onClick={() => {
//           hello();
//         }}
//       >
//         {" "}
//         lfjwpojfjow eofdwo iofiouwh fioof{" "}
//       </button>
//     </div>
//   );
// };

// export default apitesting;

////////////////////////////////// MASK NETWORK TESTING /////////////////////////////

// import React from "react";
// import { DataThroughAddress } from "../utils/MaskNetwork-Api/RelationshipServiceUseingWeb3Bio";

// const ApiTesting = () => {
//   return (
//     <div>
//       ApiTesting
//       <button
//         onClick={async () => {
//           try {
//             const data = await DataThroughAddress(
//               "0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
//             );

//             console.log(data);
//           } catch (e) {
//             console.log(e);
//           }
//         }}
//       >
//         click me{" "}
//       </button>
//     </div>
//   );
// };

// export default ApiTesting;

///////////////////////////////////////////// get safe info  through address ///////////////////////////////

// import { getDataWithTransactionHash } from "../utils/Safe-Api/safeApp";
// import React from "react";
// // import AKAfunction from "../utils/Safe-Api/safeApp";
// import { ethers } from "ethers";
// import SafeApiKit from "@safe-global/api-kit";
// import { options } from "@/lib/AllData/AllOption";
// import {
//   getSafeInfo,
//   getServiceInfo,
//   getDataWithTransactionHash,
//   getSafesByOwner,
// } from "@/lib/safe-utils/safeApp";
// import { Wallet, providers, Signer } from "ethers";

// export function getSignerFromPrivateKey(
//   privateKey: string,
//   rpcUrl: string
// ): Signer {
//   const provider = new providers.JsonRpcProvider(rpcUrl);
//   const wallet = new Wallet(privateKey, provider);
//   return wallet;
// }

// import { EthersAdapter } from "@safe-global/protocol-kit/dist/src/adapters/ethers";
// // import { useWalletClient, useAccount } from "wagmi";

// // import { useEthersSigner } from "../utils/hooks/ethersSigner";
// // import { txServiceList } from "../utils/Safe-Api/ServciceData";

// const apitesting = () => {
//   // const { data: walletClient, isError, isLoading } = useWalletClient();
//   // const signer: any = useEthersSigner();
//   // const { address } = useAccount();
//   const signer = getSignerFromPrivateKey(
//     "b2dfd42d32e7edf1a74fe0b3fa07d2773d6b0145a19553a770d91a80333a8c39",
//     options[6].ProviderLink
//   );

//   async function hello() {
//     const safeTxHash = "0xa43624b7472c37B1E1884645a3D04710afCD8eB5";
//     try {
//       const ans = await getDataWithTransactionHash(
//         signer,
//         "https://safe-transaction-goerli.safe.global/",
//         "0x492e1f5905fa51b38533e99fd6aa431915c40c09e9df4fce40b3d64539ba4893"
//       );
//       console.log(ans);
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   return (
//     <div>
//       <button
//         onClick={() => {
//           hello();
//         }}
//       >
//         lfjwpojfjow
//       </button>
//     </div>
//   );
// };

// export default apitesting;

/////////////////////////////////////////////////// safe creation info ///////////////////////////////
// import React from "react";
// import { getSafesByOwner } from "../utils/Safe-Api/safeApp";
// import { useWalletClient, useAccount } from "wagmi";
// import { useEthersSigner } from "../utils/hooks/ethersSigner";
// import { txServiceList } from "../utils/Safe-Api/ServciceData";

// const apitesting = () => {
//   const { data: walletClient, isError, isLoading } = useWalletClient();
//   const signer: any = useEthersSigner();
//   const { address } = useAccount();

//   async function hello() {
//     const safeTxHash = "0xbC2eFF3EA913317e523EB65A579d723334F9f135";
//     try {
//       const ans = await getSafesByOwner(
//         safeTxHash,
//         signer,

//         txServiceList.Goerli
//       );
//       console.log(ans);
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   return (
//     <div>
//       <button
//         onClick={() => {
//           hello();
//         }}
//       >
//         Testings{" "}
//       </button>
//     </div>
//   );
// };

// export default apitesting;

///////////////////////////// safe transaction detail ////////////////////////////////

// import React from "react";
// import { getDataWithTransactionHash } from "../utils/Safe-Api/safeApp";
// import { useWalletClient, useAccount } from "wagmi";
// import { useEthersSigner } from "../utils/hooks/ethersSigner";
// import { txServiceList } from "../utils/Safe-Api/ServciceData";
// import { fetchTransaction } from "@wagmi/core";

// const apitesting = () => {
//   const { data: walletClient, isError, isLoading } = useWalletClient();
//   const signer: any = useEthersSigner();
//   const { address } = useAccount();

//   async function hello() {
//     const safeTxHash =
//       "0x596104426ff8fd56e0488099cfe1829b45aaab323af1ef9cf8d610cae7af57ac";
//     const safeAddress = "0xa43624b7472c37B1E1884645a3D04710afCD8eB5";
//     try {
//       const transaction = await fetchTransaction({
//         hash: "0x596104426ff8fd56e0488099cfe1829b45aaab323af1ef9cf8d610cae7af57ac",
//       });
//       // const ans = await getDataWithTransactionHash(
//       //   signer,
//       //   txServiceList.Goerli,
//       //   safeTxHash
//       // );
//       console.log(transaction);
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   return (
//     <div>
//       <button
//         onClick={() => {
//           hello();
//         }}
//       >
//         Testings{" "}
//       </button>
//     </div>
//   );
// };

// export default apitesting;

/////////////////////////// All transaction  testing //////////////////////////
import React from "react";
// import AKAfunction from "../utils/Safe-Api/safeApp";
import { ethers } from "ethers";
import SafeApiKit from "@safe-global/api-kit";
import { options } from "@/lib/AllData/AllOption";
import { AllTransactionList } from "@/lib/safe-utils/safeApp";
import { Wallet, providers, Signer } from "ethers";

export function getSignerFromPrivateKey(
  privateKey: string,
  rpcUrl: string
): Signer {
  const provider = new providers.JsonRpcProvider(rpcUrl);
  const wallet = new Wallet(privateKey, provider);
  return wallet;
}

import { EthersAdapter } from "@safe-global/protocol-kit/dist/src/adapters/ethers";
// import { useWalletClient, useAccount } from "wagmi";

// import { useEthersSigner } from "../utils/hooks/ethersSigner";
// import { txServiceList } from "../utils/Safe-Api/ServciceData";

const apitesting = () => {
  // const { data: walletClient, isError, isLoading } = useWalletClient();
  // const signer: any = useEthersSigner();
  // const { address } = useAccount();
  const signer = getSignerFromPrivateKey(
    "b2dfd42d32e7edf1a74fe0b3fa07d2773d6b0145a19553a770d91a80333a8c39",
    options[6].ProviderLink
  );

  async function hello() {
    const safeTxHash = "0xa43624b7472c37B1E1884645a3D04710afCD8eB5";
    try {
      const ans = await AllTransactionList(
        signer,
        "https://safe-transaction-goerli.safe.global/",
        "0xa43624b7472c37B1E1884645a3D04710afCD8eB5"
      );
      console.log(ans);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <button
        onClick={() => {
          hello();
        }}
      >
        lfjwpojfjow
      </button>
    </div>
  );
};

export default apitesting;
// export default apitesting;

/////////////////////////// All transaction  of creater contract //////////////////////////
// import React from "react";
// import { AllTransactionList } from "../../utils/Safe-Api/safeApp";
// import { useWalletClient, useAccount } from "wagmi";
// import { useEthersSigner } from "../../utils/hooks/ethersSigner";
// import { useEthersProvider } from "../../utils/hooks/ethersProvider";
// import axios from "axios";
// import { options } from "../constant/AllServiceOption";
// import { ProviderLink } from "../../utils/Safe-Api/ServciceData";
// const { ethers } = require("ethers");

// const apitesting = () => {
//   const { data: walletClient, isError, isLoading } = useWalletClient();
//   const signer: any = useEthersSigner();
//   const Apikey = process.env.NEXT_PUBLIC_Eth_Main;
//   async function hello() {
//     const safeTxHash =
//       "0x596104426ff8fd56e0488099cfe1829b45aaab323af1ef9cf8d610cae7af57ac";
//     const safeAddress = "0xa43624b7472c37B1E1884645a3D04710afCD8eB5";

//     const apiKey = process.env.NEXT_PUBLIC_Celo;
//     const address = "0xa6B71E26C5e0845f74c812102Ca7114b6a896AB2";

//     const apiUrl = options[5].ScanLink;
//     const action = "txlist"; // For normal transactions
//     const module = "account";
//     const startBlock = "0"; // Start from block 0
//     const endBlock = "latest"; // Up to the latest block

//     // console.log(Apikey);
//     axios
//       .get(apiUrl, {
//         params: {
//           module,
//           action,
//           address,
//           startblock: startBlock,
//           endblock: endBlock,
//           sort: "desc", // To get the most recent transactions first
//           apikey: apiKey,
//         },
//       })
//       .then((response) => {
//         const transactions = response.data.result;
//         console.log("Transactions:", transactions);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   }

//   return (
//     <div>
//       <button
//         onClick={() => {
//           getData();
//         }}
//       >
//         Testings{" "}
//       </button>
//       {Apikey}
//     </div>
//   );
// };

// export const getData = () => {
//   console.log(options);
//   return {
//     props: {
//       hello: "world",
//     },
//   };
// };

// export default apitesting;

// https://api.etherscan.io/api
//    ?module=logs
//    &action=getLogs
//    &address=0xa6B71E26C5e0845f74c812102Ca7114b6a896AB2
//    &fromBlock=12878196
//    &toBlock=12878196
//    &page=1
//    &offset=1000
//    &apikey=26TJW7XYJ3UUYQ7T9E3PV4TDZR748TR84V

//////////////////////////////////rpc testing /////////////

// import { fetchTransactionDetails } from "../../utils/hooks/ethersFetchTransactionWithHash";
// import { options } from "../constant/AllServiceOption";
// import React from "react";

// const apitesting = () => {
//   console.log(
//     "0xf33199a1974402d6bb748d3f682ff8662824e60dfcce77a9a3e0c1abbe970e2b",
//     options[1].ProviderLink
//   );
//   return (
//     <div>
//       <button
//         onClick={() => {
//           fetchTransactionDetails(
//             "0xc14106726cc5aff5d374e63d2e2e812bc20e02db77fa380b1312617018aacc21",
//             "https://rpc.mevblocker.io"
//           );
//         }}
//       >
//         hello
//       </button>
//     </div>
//   );
// };

// export default apitesting;

////// safe by owner

// import React from "react";
// // import AKAfunction from "../utils/Safe-Api/safeApp";
// import { ethers } from "ethers";
// import SafeApiKit from "@safe-global/api-kit";
// import { options } from "@/lib/AllData/AllOption";
// import { getSafesByOwner } from "@/lib/safe-utils/safeApp";
// import { Wallet, providers, Signer } from "ethers";

// export function getSignerFromPrivateKey(
//   privateKey: string,
//   rpcUrl: string
// ): Signer {
//   const provider = new providers.JsonRpcProvider(rpcUrl);
//   const wallet = new Wallet(privateKey, provider);
//   return wallet;
// }

// import { EthersAdapter } from "@safe-global/protocol-kit/dist/src/adapters/ethers";
// // import { useWalletClient, useAccount } from "wagmi";

// // import { useEthersSigner } from "../utils/hooks/ethersSigner";
// // import { txServiceList } from "../utils/Safe-Api/ServciceData";

// const apitesting = () => {
//   // const { data: walletClient, isError, isLoading } = useWalletClient();
//   // const signer: any = useEthersSigner();
//   // const { address } = useAccount();
//   const signer = getSignerFromPrivateKey(
//     "b2dfd42d32e7edf1a74fe0b3fa07d2773d6b0145a19553a770d91a80333a8c39",
//     options[6].ProviderLink
//   );

//   async function hello() {
//     const safeTxHash = "0xa43624b7472c37B1E1884645a3D04710afCD8eB5";
//     try {
//       const ans = await getSafesByOwner(
//         "0x645D85678C2d4C56c17F3579a278C2bE2D73119c",

//         signer,
//         "https://safe-transaction-goerli.safe.global/"
//       );
//       console.log(ans);
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   return (
//     <div>
//       <button
//         onClick={() => {
//           hello();
//         }}
//       >
//         lfjwpojfjow
//       </button>
//     </div>
//   );
// };

// export default apitesting;
