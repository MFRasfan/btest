import React from "react";
import styles from "./Navigation.module.scss";
import Link from "next/link";
import getTextCommon from "@/language/i18/common/getTextCommon";
import generateUrl from "@/helpers/generateUrl";

const Navigation = ({ language }) => {
  return (
    <nav>
      <ul className={styles.mainMenu}>
        <li className={styles.drop}>
          <Link href={generateUrl('/', language)}>
            {getTextCommon('home', language)}
          </Link>
        </li>

        <li className={styles.drop}>
          <Link href={generateUrl("/features", language)} >
            {getTextCommon('features', language)}
          </Link>
        </li>

        <li>
          <Link href={generateUrl("/about", language)}>
            {getTextCommon('about', language)}
          </Link>
        </li>

        <li>
          <Link href={generateUrl("/blog", language)} >
            {getTextCommon('blog', language)}
          </Link>
        </li>

        <li className={styles.drop}>
          <Link href={generateUrl("/contact", language)}>
            {getTextCommon('contact', language)}
          </Link>
        </li>

        <li className={styles.drop}>
          <a href="https://besanz.simplelogin.net/" target="_blank">
            {getTextCommon('login', language)}
          </a>
        </li>

      </ul>
    </nav>
  );
};

export default Navigation;
