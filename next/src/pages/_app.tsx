import "@/styles/globals.css";
import "@/styles/css/app.css";
import "@/styles/css/bootstrap.min.css";
import "@/styles/css/icons.css";
import "@/styles/css/index.css";
import "@/styles/css/pace.min.css";

import type { AppProps } from "next/app";
import { Wallet } from "@/hooks/Wallet";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Wallet>
      <Component {...pageProps} />
    </Wallet>
  );
}
