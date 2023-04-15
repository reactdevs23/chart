import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import LaunchPad from "./components/LaunchPad/LaunchPad";

import "@rainbow-me/rainbowkit/styles.css";

import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, bsc } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

const hepton = {
  id: 404,
  name: "Hepton",
  network: "hepton",
  iconUrl:
    "https://pbs.twimg.com/profile_images/1624393158456143874/tdEGrujS_400x400.jpg",
  iconBackground: "#fff",
  nativeCurrency: {
    decimals: 18,
    name: "Hepton",
    symbol: "HTE",
  },
  rpcUrls: {
    default: {
      http: ["https://testnet.hepton.io"],
    },
  },
  blockExplorers: {
    default: { name: "SnowTrace", url: "https://testnet.heptonscan.com" },
  },
  testnet: true,
};

const { chains, provider } = configureChains(
  [hepton, bsc],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function App() {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          chains={chains}
          theme={darkTheme()}
          showRecentTransactions={true}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<LaunchPad />}></Route>
          </Routes>
          <Footer />
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}

export default App;
