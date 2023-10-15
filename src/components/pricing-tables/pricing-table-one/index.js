import PropTypes from "prop-types";
import React from "react";
import Button from "../../UI/button";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import getTextSubscription from "@/language/i18/subscription/getTextSubscription";
import generateUrl from "@/helpers/generateUrl";


const PricingTableOneSingle = ({ data, styles, type, language }) => {

  const { t } = useTranslation(["subscription"]);

  return (
    <div className={`${styles.pricing} ${data.featured ? styles.active : ""}`}>
      <div className={styles.content} style={{ height: '100%' }}>

        <span style={{ textTransform: "uppercase" }}>{t(String(data.planName).toLowerCase())}</span>

        <div className={styles.price}>
          <p>
            <sup>{data.planPriceCurrency}</sup> {data.planPrice}{" "}
            <sub>{data.planPriceDuration}</sub>
            <Link href={generateUrl("/price-details", language)} >
              <p style={{ marginTop: -10, lineHeight: 0.47, color: "#888888" }}><sub>{t(data.caption)}</sub></p>
            </Link>
          </p>
        </div>

        <div>
          <ul>
            {data.planFeatures && data.planFeatures.map((item, index) => (
              <li key={item.id} style={item.style && item.style}>
                {item.name}
              </li>
            ))}

            {data.planFeatures.length < data.maxFeatures && [...Array(data.maxFeatures - data.planFeatures.length).keys()].map((item, index) => (
              <li key={index} style={{ height: "40px" }} />

            ))}

          </ul>
        </div>

        <div className={styles.price__btn}>
          <Button
            type="link"
            url={generateUrl(`/price-comparison/price-comparison-${type}`, language)}
            text={getTextSubscription("compare", language)}
            btnStyle={data.featured ? "" : "light"} />
        </div>

      </div>
    </div>
  );
};

PricingTableOneSingle.propTypes = {
  data: PropTypes.object,
  styles: PropTypes.object
};

export default PricingTableOneSingle;
