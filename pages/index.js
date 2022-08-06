import Head from "next/head";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Raccoon Test</title>
        <meta name="description" content="Teste da Racooon Monks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </div>
  );
}
