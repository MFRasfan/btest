"use client"

import React, { Fragment } from "react";
import LayoutOne from "./layouts";
import ServiceThree from "./containers/services/service-three";
import PriceSelector from "./components/priceselector";
import ContactFaqOne from "./containers/contact-faqs/contact-faq-one";

export const metadata = {
  title: 'Cloud-Based Phone System Canada | Besanz.com',
  description: 'Besanz offers reliable and affordable cloud-based phone system solutions in Canada with integration with CRM, 24/5 customer service, and the option to keep your own number',
}

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
