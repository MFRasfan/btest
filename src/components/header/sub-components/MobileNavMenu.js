import React from "react";
import Link from "next/link";
import "./index.css"

const MobileNavMenu = ({ styles }) => {

  return (
    <nav className={styles.offcanvasNavigation} id="offcanvas-navigation">
      <ul>
        <li className={`${styles.menuItemHasChildren} mobile-munu-link`}>
          <Link href="/">
              Home
          </Link>
        </li>

        <li className={`${styles.menuItemHasChildren} mobile-munu-link`}>
          <Link href="/features">
              Features
          </Link>
        </li>

        <li className={`${styles.menuItemHasChildren} mobile-munu-link`}>
          <Link href="/about">
              About
          </Link>
        </li>

        <li className={`${styles.menuItemHasChildren} mobile-munu-link`}>
          <Link href="/blog">
              Blog
          </Link>
        </li>
        
        <li className={`${styles.menuItemHasChildren} mobile-munu-link`}>
          <Link href="/contact">
              Contact
          </Link>
        </li>

        <li className={`${styles.menuItemHasChildren} mobile-munu-link`}>
          <Link href="https://besanz.simplelogin.net/" target="_blank">
              Login
          </Link>
        </li>

        <li className={`${styles.menuItemHasChildren} mobile-munu-link`}>
          <Link href="https://395c0d4bb6.appchemist.io/" target="_blank">
              Support
          </Link>
        </li>
       
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
