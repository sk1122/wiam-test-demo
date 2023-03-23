import { useWallet } from "@solana/wallet-adapter-react";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import WIAM from "wiam";
import { HomeView } from "../views";

const wiam = new WIAM("f4cd1044-e8f3-4808-89a9-50b6f57a3d92", {
  serviceWorker: "g.js",
  recordPageViews: true
})

const Home: NextPage = (props) => {
  const { publicKey } = useWallet()
  let running = false
  
  useEffect(() => {
    if(publicKey && !running) {
      running = true
      wiam.setWallet(publicKey.toString())
    }
    
    running = false
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
