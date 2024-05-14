import "@/styles/globals.css"
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import { ConfigProvider, theme } from "antd";
import type { AppProps } from "next/app";
import Head from "next/head";

const { darkAlgorithm } = theme;

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={{
      token : {
        // colorPrimary : "#000000",
        fontFamily   : "Geist Sans",
      },
      // algorithm : darkAlgorithm,
    }}>
      <PlasmicRootProvider Head={Head}>
        <Component {...pageProps} />
      </PlasmicRootProvider>
    </ConfigProvider>
  );
}