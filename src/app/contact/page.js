import React, { Fragment } from "react";
import LayoutOne from "../../components/layouts";
import Breadcrumb from "../components/UI/breadcrumb";
import ContactForm from "../containers/contact/contact-form";
import ContactMap from "../containers/contact/contact-map";

export const metadata = {
  title: 'Cloud-Based Phone System Canada | Besanz.com',
  description: 'Stay ahead of the curve with Besanz.com intelligent business phone solutions in North America. Elevate your communication game. ',
}

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
