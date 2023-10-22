interface ToggleOption {
  label: string;
  value: number;
  SafeTxService: string;
  ProviderLink: string;
  ScanLink: string;
  ApiKey: string | undefined;
}

// Now you can access environment variables

export const options: ToggleOption[] = [
  {
    label: "ehterum",
    value: 1,
    SafeTxService: "https://safe-transaction-mainnet.safe.global/",
    ProviderLink: "https://rpc.mevblocker.io",
    ScanLink: "https://api.etherscan.io/api",
    ApiKey: process.env.NEXT_PUBLIC_Eth_Main,
  },
  {
    label: "genosis chain",
    value: 100,
    SafeTxService: "https://safe-transaction-gnosis-chain.safe.global/",
    ProviderLink: "https://rpc.gnosischain.com",
    ScanLink: "https://api.gnosisscan.io/api",
    ApiKey: process.env.NEXT_PUBLIC_Genosis_main,
  },
  {
    label: "polygon",
    value: 137,
    SafeTxService: "https://safe-transaction-polygon.safe.global/",
    ProviderLink: "https://polygon.meowrpc.com",
    ScanLink: "https://api.polygonscan.com/api",
    ApiKey: process.env.NEXT_PUBLIC_Polygon,
  },
  {
    label: "Arbitrum one",
    value: 42161,
    SafeTxService: "https://safe-transaction-arbitrum.safe.global/",
    ProviderLink: "https://arbitrum.meowrpc.com",
    ScanLink: "https://api.arbiscan.io/api",
    ApiKey: process.env.NEXT_PUBLIC_Arbitrum_one,
  },
  {
    label: "Avalanche c-chain",
    value: 43114,
    SafeTxService: "https://safe-transaction-avalanche.safe.global/",
    ProviderLink: "https://avax.meowrpc.com",
    ScanLink: "https://api.snowtrace.io/api",
    ApiKey: process.env.NEXT_PUBLIC_Avalanche,
  },
  {
    label: "Celo",
    value: 42220,
    SafeTxService: "https://safe-transaction-celo.safe.global/",
    ProviderLink: "https://forno.celo.org",
    ScanLink: "https://api.celoscan.io/",
    ApiKey: process.env.NEXT_PUBLIC_Celo,
  },
  {
    label: "Gorali",
    value: 5,
    SafeTxService: "https://safe-transaction-goerli.safe.global/",
    ProviderLink: "https://ethereum-goerli.publicnode.com",
    ScanLink: "https://api-goerli.etherscan.io/api",
    ApiKey: process.env.NEXT_PUBLIC_Goerli,
  },
  {
    label: "Base mainnet",
    value: 8453,
    SafeTxService: "https://safe-transaction-base.safe.global/",
    ProviderLink: "https://base.meowrpc.com",
    ScanLink: "https://mainnet.base.org/",
    ApiKey: process.env.NEXT_PUBLIC_Base_Main,
  },
  {
    label: "BNB Smart Chain",
    value: 56,
    SafeTxService: "https://safe-transaction-bsc.safe.global/",
    ProviderLink: "https://bsc.meowrpc.com",
    ScanLink: "https://api.bscscan.com/api",
    ApiKey: process.env.NEXT_PUBLIC_BNB,
  },
  {
    label: "Optimism",
    value: 10,
    SafeTxService: "https://safe-transaction-optimism.safe.global/",
    ProviderLink: "https://optimistic.ethereum.io",
    ScanLink: "https://api-optimistic.etherscan.io/",
    ApiKey: process.env.NEXT_PUBLIC_Optimisum,
  },
];
