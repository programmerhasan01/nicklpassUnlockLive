import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/BusinessInsider.module.css";
const BusinessInsider = () => {
  return (
    <>
      <Head>
        {/* google fonts cdn */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.businessInsider}>
        <div className={styles.businessCard}>
          <img
            className={styles.bsInsiderLogo}
            src="./bsInsiderLog.png"
            alt="businessLogo"
          />
          <h2 className={styles.bsTitle}>NICKLpass + Business Insider</h2>
          <div className={styles.bsPrice}>
            <h2>
              $9.99<span>/per user</span>
            </h2>
            <p>Includes: Nicklpass ($5),</p>
            <p>Business Insider ($4.99).</p>
          </div>
          <div className={styles.bsBtns}>
            <button className={`${styles.btnDark}`}>Monthly</button>
            <button className={`${styles.btnLight}`}>Annualy</button>
          </div>
          <Link href="/contact">
            <button className={styles.BtnBlockPrimary}>Get Started</button>
          </Link>
          <Link href="/contact">
            <button className={styles.BtnBlockLight}>Contact Sales</button>
          </Link>
        </div>

        <div className={styles.businessBenefits}>
          <div className={styles.benefitsItem}>
            <img src="./businessIcon1.png" alt="business" />
            <div className={styles.bsInfo}>
              <h4>Unlock enterprise rates</h4>
              <p>
                We negotiate with publishers on your behalf so you get access to
                premium sources for less than individual retail prices.
              </p>
            </div>
          </div>
          <div className={styles.benefitsItem}>
            <img src="./businessIcon2.png" alt="business" />
            <div className={styles.bsInfo}>
              <h4>Consolidate your spend</h4>
              <p>
                Cover all your monthly news consumption across the organization
                with one payment on one credit card.
              </p>
            </div>
          </div>
          <div className={styles.benefitsItem}>
            <img src="./businessIcon3.png" alt="business" />
            <div className={styles.bsInfo}>
              <h4>Pay for what you need</h4>
              <p>
                Get full visibility into which news sources your team is
                actually reading and adjust your plan to only pay for what you
                need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessInsider;
