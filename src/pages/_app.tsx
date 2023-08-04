import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain="ethereum"
      clientId="5dbb8f1abc71686e44ab6ff02c6a9a92"
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}
