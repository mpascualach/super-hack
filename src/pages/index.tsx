import { Inter } from "next/font/google";
import { ConnectWallet } from "@thirdweb-dev/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1>Agent</h1>
      <ConnectWallet />
    </div>
  );
}
