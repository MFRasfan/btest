"use client"

import React, { Fragment } from "react";
import LayoutOne from "./layouts";
import ServiceThree from "./containers/services/service-three";
import PriceSelector from "./components/priceselector";
import ContactFaqOne from "./containers/contact-faqs/contact-faq-one";

const Home = () => {
  return (
    <Fragment>
      <LayoutOne footerBg="white">

        {/* QUOTE PAGE IS BUILD MODIFYING CONTACT FAQ ONE */}
        <ContactFaqOne />
        <PriceSelector />
        <ServiceThree />

      </LayoutOne>
    </Fragment>
  );
};

export default Home;
