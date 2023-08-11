import { Inter } from "next/font/google";
import { ConnectWallet } from "@thirdweb-dev/react";
import { useNFT, useNFTMetadata } from "@zoralabs/nft-hooks";
import Navbar from "../components/UI/Navbar";
import Layout from "../components/UI/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data } = useNFT("0xabEFBc9fD2F806065b4f3C237d4b59D9A97Bcac7", "20");

  return (
    <Layout>
      <h1>Agent</h1>
      <a href="/api/auth/login">Login</a>

      {data && (
        <div>
          {/* <h3>{data.metadata.name}</h3>
          <p>{data.metadata.description}</p>
          <p>Owned by: {data.nft.owner.address}</p> */}
        </div>
      )}
    </Layout>
  );
}
