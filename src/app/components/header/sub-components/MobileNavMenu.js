import React from "react";
import Link from "next/link";
import "./index.css"

const MobileNavMenu = ({ styles }) => {

  return (
    <nav className={styles.offcanvasNavigation} id="offcanvas-navigation">
      <ul>
        <li className={`${styles.menuItemHasChildren} mobile-munu-link`}>
          <Link href={process.env.PUBLIC_URL + "/"}>
              Home
          </Link>
        </li>

        <li className={`${styles.menuItemHasChildren} mobile-munu-link`}>
          <Link href={process.env.PUBLIC_URL + "/features"}>
              Features
          </Link>
        </li>

        <li className={`${styles.menuItemHasChildren} mobile-munu-link`}>
          <Link href={process.env.PUBLIC_URL + "/about"}>
              About
          </Link>
        </li>
        
        <li className={`${styles.menuItemHasChildren} mobile-munu-link`}>
          <Link href={process.env.PUBLIC_URL + "/contact"}>
              Contact
          </Link>
        </li>

        <li className={`${styles.menuItemHasChildren} mobile-munu-link`}>
          <Link href={process.env.PUBLIC_URL + "/customer-login"} target="_blank">
              Login
          </Link>
        </li>

        <li className={`${styles.menuItemHasChildren} mobile-munu-link`}>
          <Link href={process.env.PUBLIC_URL + "/support"} target="_blank">
              Support
          </Link>
        </li>

        {/* <li className={`${styles.menuItemHasChildren}  mobile-munu-link`}>
          <select className=" mobile-munu-dropdown" value={localStorage.getItem("i18nextLng")} onChange={handleLanguageChange}>
            <option className="select-item" value={"en"} >English</option>
            <option className="select-item" value={"fr"}>French</option>
            <option className="select-item" value={"es"}>Spanish</option>
          </select>
        </li> */}
      
       
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
