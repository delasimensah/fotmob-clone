import { FC } from "react";
import Head from "next/head";

type SEOProps = {
  title?: string;
};

const SEO: FC<SEOProps> = ({ title }) => {
  return (
    <Head>
      <title>{title || "Fotmob Clone - Football Live Scores"}</title>
      <meta
        name="description"
        content="Web application to view live scoress for you favourite team amd matches"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
