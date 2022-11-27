import Head from "next/head";
import BusinessInsider from "../component/businessInsider/BusinessInsider";
import Footer from "../component/footer/Footer";
import Hero from "../component/hero/Hero";
import Navbar from "../component/navbar/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NICKLPASS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
        {/* google fonts cdn */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header>
        <Navbar />
        <Hero
          title={"Which Plan Works for You?"}
          subTitle="Select from monthly or annualy pricing – for NICKLpass and Business Insider."
        />
      </header>
      <main>
        <BusinessInsider />
      </main>
      <Footer />
    </div>
  );
}
