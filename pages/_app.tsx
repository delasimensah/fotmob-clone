import type { AppProps } from "next/app";
import { Nunito } from "@next/font/google";
import { MantineProvider } from "@mantine/core";

import { SEO } from "../components";

import "../styles/globals.css";

const nunito = Nunito({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SEO />

      <style jsx global>{`
        body {
          font-family: ${nunito.style.fontFamily};
        }
      `}</style>

      <MantineProvider>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
