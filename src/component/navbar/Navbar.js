import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import styles from "../../styles/Navbar.module.css";
const Navbar = () => {
  const [closeNav, setCloseNav] = useState(true);
  const handleNav = () => {
    setCloseNav(!closeNav);
    console.log(closeNav);
    // document.getElementById("ul").style.right = "-100%";
    // document.getElementById("ul").style.display = "none";
  };
  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/e1318758e4.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <div className={styles.navContainer}>
        <Link href="/">
          <img className={styles.logo} src="./MainLogo.png" alt="" />
        </Link>
        <nav className={styles.navbar}>
          <ul id={closeNav && styles.closeNav}>
            <Link href="/">Home</Link>
            <Link href="#">For Enterprise</Link>
            <Link href="#">For Publisher</Link>
            <Link href="#">We’re Hiring</Link>
            <Link href="#">Support</Link>
          </ul>
        </nav>
        <Link href="/contact">
          <button className={`${styles.btnPrimary} ${styles.contactSalesBtn}`}>
            Contact Sales
          </button>
        </Link>
        <span onClick={handleNav}>
          {/* <i className="fa-solid fa-bars"></i> */}
          <FaBars className={styles.menuIcon} />
        </span>
      </div>
    </>
  );
};

export default Navbar;
