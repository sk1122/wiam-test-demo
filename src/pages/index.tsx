import { useWallet } from "@solana/wallet-adapter-react";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import WIAM from "iam-react";
import { HomeView } from "../views";

const wiam = new WIAM("85cb4fbd-08bd-4e2e-9837-15e70f531541", {
  serviceWorker: "g.js",
  recordPageViews: true
})

const Home: NextPage = (props) => {
  const { publicKey } = useWallet()
  useEffect(() => {
    if(publicKey) {
      console.log("123", publicKey.toBase58())
      wiam.setWallet(publicKey.toString())
    }
  }, [publicKey])
  return (
    <div>
      <Head>
        <title>Solana Scaffold</title>
        <meta
          name="description"
          content="Solana Scaffold"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
