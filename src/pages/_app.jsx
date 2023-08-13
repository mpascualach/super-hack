import "@/styles/globals.css";
import React, { useState } from "react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { OptimismGoerli } from "@thirdweb-dev/chains";
import { metamaskWallet, localWallet } from "@thirdweb-dev/react";
import { EcoSystemContext } from "../contexts/EcoSystemContext";

function App({ Component, pageProps }) {
  const [ecosystem, setEcosystem] = useState("optimism");
  return (
    <UserProvider>
      <ThirdwebProvider
        activeChain={OptimismGoerli}
        clientId="5dbb8f1abc71686e44ab6ff02c6a9a92"
        supportedWallets={[metamaskWallet(), localWallet()]}
      >
        <EcoSystemContext.Provider value={{ ecosystem, setEcosystem }}>
          <Component {...pageProps} />
        </EcoSystemContext.Provider>
      </ThirdwebProvider>
    </UserProvider>
  );
}

export default App;
