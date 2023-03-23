import { useWallet } from "@solana/wallet-adapter-react";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import WIAM from "iam-react";
import { HomeView } from "../views";

const wiam = new WIAM("930aa070-9535-484f-b33b-8e4557765022", {
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
