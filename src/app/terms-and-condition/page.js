import React, { Fragment } from "react";
import LayoutOne from "../layouts";
import Breadcrumb from "../components/UI/breadcrumb";

import PrivacyContent from "../containers/terms-and-conditions/TermsAndConditionContent";

export const metadata = {
  title: 'Cloud-Based Phone System Canada | Besanz.com',
  description: 'Besanz offers reliable and affordable cloud-based phone system solutions in Canada with integration with CRM, 24/5 customer service, and the option to keep your own number',
}

const TermsAndCondition = () => {

  return (
    <Fragment>
      <LayoutOne>
       
        <Breadcrumb title="Terms And Conditions" />

        <PrivacyContent/>

      </LayoutOne>
    </Fragment>
  );
};

export default TermsAndCondition;
