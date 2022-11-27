import Head from "next/head";
import BuyerDetails from "../../component/buyerDetails/BuyerDetails";
import Footer from "../../component/footer/Footer";
import Hero from "../../component/hero/Hero";
import Navbar from "../../component/navbar/Navbar";
import styles from "../../styles/ContactSales.module.css";
const ContactSales = () => {
  return (
    <div className={styles.ContactSales}>
      <Head>
        <title>Contact-Sales</title>
        <link rel="icon" href="/logo.png" />
        {/* google fonts cdn */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Navbar />
        <Hero
          title={"How Many People Need Access?"}
          subTitle={
            "Add at least two additional people on your team to get access."
          }
        />
        <BuyerDetails />
      </main>
      <Footer />
    </div>
  );
};

export default ContactSales;
