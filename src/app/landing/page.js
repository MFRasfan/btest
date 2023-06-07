"use client"

import React, { Fragment} from "react";
import LayoutOne from "../layouts";
import WhoAreWe from "../containers/who-are-we";
import ProductReview from "../containers/product-review";
import WhyTrustMe from "../containers/why-trust-me";
import RequestQuote from "../containers/request-quote";
import ContactFaqOne from "../containers/contact-faqs/contact-faq-one";

const Home2 = () => {
return (
    <Fragment>
      <LayoutOne footerBg="white">
        
        <WhoAreWe />
        <ProductReview />
        <WhyTrustMe />
        <RequestQuote />

      </LayoutOne>
    </Fragment>
  );
};

export default Home2;