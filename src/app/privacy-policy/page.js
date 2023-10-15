import React, { Fragment } from "react";
import LayoutOne from "@/components/layouts";
import Breadcrumb from "@/components/UI/breadcrumb";

import PrivacyContent from "@/containers/privacypolicy/privacyContent";

export const metadata = {
  title: 'Cloud-Based Phone System Canada | Besanz.com',
  description: 'Besanz offers reliable and affordable cloud-based phone system solutions in Canada with integration with CRM, 24/5 customer service, and the option to keep your own number',
}

const PrivacyPolicy = () => {

  return (
    <Fragment>
      <LayoutOne>
       
        <Breadcrumb title="Privacy Policy" />

        <PrivacyContent/>

      </LayoutOne>
    </Fragment>
  );
};

export default PrivacyPolicy;
