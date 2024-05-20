import { ColorSchemeContext } from "@/components/plasmic/inprodi_design_system/PlasmicGlobalVariant__ColorScheme";
import useUserThemePreference from "@/hooks/useUserThemePreference";
import "@/styles/globals.css"
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import { ConfigProvider, theme } from "antd";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Toaster } from 'sonner';

const { darkAlgorithm } = theme;

export default function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useUserThemePreference();
  
  return (
    <ColorSchemeContext.Provider value={ theme }>
        <ConfigProvider theme={{
          token : {
            // colorPrimary : "#000000",
            fontFamily   : "Geist Sans",
          },
          // algorithm : theme === "dark" ? darkAlgorithm : undefined,
        }}>
          <PlasmicRootProvider Head={Head}>
            <Toaster
              richColors
              pauseWhenPageIsHidden
              position="bottom-right"
              toastOptions={{
                duration : 4000
              }}
            />
            <Component {...pageProps} />
          </PlasmicRootProvider>
        </ConfigProvider>
      </ColorSchemeContext.Provider>
  );
}