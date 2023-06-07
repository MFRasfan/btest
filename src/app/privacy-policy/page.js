import React, { Fragment } from "react";
import LayoutOne from "../layouts";
import Breadcrumb from "../components/UI/breadcrumb";

import PrivacyContent from "../containers/privacypolicy/privacyContent";

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
