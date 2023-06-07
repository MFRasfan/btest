"use client"

import React, { useEffect, useState } from "react";
import Logo from "../../../components/header/Logo";
import Navigation from "../../../components/header/Navigation";
import HeaderBtn from "../../../components/header/HeaderBtn";
// import MobileMenu from "../../../components/header/MobileMenu";
import styles from "./Header.module.scss";
import { BiSupport } from 'react-icons/bi'
import { BsPhone } from 'react-icons/bs'
import Link from "next/link";

import "./header.css"

const Header = () => {
  
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  // const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const header = document.querySelector("header");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  // useEffect(() => {
  //   const handleWindowResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };
  //   window.addEventListener('resize', handleWindowResize);
  //   return () => {
  //     window.removeEventListener('resize', handleWindowResize);
  //   };
  // });

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <header
      className={`${styles.headerArea} ${scroll > headerTop ? styles.stick : ""
        }`}
    >

      {scroll <= 0 && <div className="topbarr" style={{ marginTop: scroll <= 0 ? 0 : -20 }}>
        <div className="container">

          <Link href="https://395c0d4bb6.appchemist.io/" target="_blank" className="topbar-link">
            <BiSupport size={20} /> Support
          </Link>

          <Link className="topbar-link" href="tel://+1 855 388 9955">
            <BsPhone size={20} /> +1 855 388 9955
          </Link>

        </div>
      </div>
      }
      <div className="container">
        <div className="row d-flex justify-content-between" style={{ paddingTop: scroll <= 0 ? 10 : 0 }}>
          <div className="col-6 col-lg-2">
            {/* logo */}
            <Logo />
          </div>

          <div class="col-lg-10">
            <div className="row flex-row-reverse">
              <div className="col-6 col-lg-auto pt-3">
                {/* header button */}
                <HeaderBtn styles={styles} />
              </div>
              <div className="col-lg-7 d-none d-lg-block">
                {/* navigation */}
                <Navigation />
              </div>
            </div>
          </div>

        </div>

        {/* Mobile Menu */}
        {/* <MobileMenu styles={styles} /> */}

      </div>
    </header>
  );
};

export default Header;
