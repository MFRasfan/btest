import React, { Fragment } from "react";
import LayoutOne from "../layouts";
import Breadcrumb from "../components/UI/breadcrumb";

import PrivacyContent from "../containers/terms-and-conditions/TermsAndConditionContent";

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
