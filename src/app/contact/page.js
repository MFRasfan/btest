import React, { Fragment } from "react";
import LayoutOne from "../layouts";
import Breadcrumb from "../components/UI/breadcrumb";
import ContactForm from "../containers/contact/contact-form";
import ContactMap from "../containers/contact/contact-map";

const Contact = () => {

  return (
    <Fragment>
      <LayoutOne>
        
        {/* breadcrumb */}
        <Breadcrumb
          // title={t("Contact")} 
          title="Contact"
        />

        {/* contact form */}
        <ContactForm />

        {/* contact map */}
        <ContactMap />

      </LayoutOne>
    </Fragment>
  );
};

export default Contact;
