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
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">For Enterprise</a>
            </li>
            <li>
              <a href="#">For Publisher</a>
            </li>
            <li>
              <a href="#">We’re Hiring</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
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
