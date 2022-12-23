import type { AppProps } from "next/app";
import { Nunito } from "@next/font/google";
import { MantineProvider } from "@mantine/core";

import { SEO, Topbar } from "../components";

import "../styles/globals.css";

const nunito = Nunito({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <SEO />

      <style jsx global>{`
        body {
          font-family: ${nunito.style.fontFamily};
        }
      `}</style>

      <MantineProvider>
        <Topbar />

        <main className="min-h-screen mx-auto max-w-7xl bg-[#f5f5f5]">
          <Component {...pageProps} />
        </main>
      </MantineProvider>
    </>
  );
};

export default App;
