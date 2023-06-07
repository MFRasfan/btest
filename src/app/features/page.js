"use client"

import React, { Fragment } from "react";
import LayoutOne from "../layouts";
import CRM from "../containers/crm";
import ServiceTwo from "../containers/services/service-two";
import Breadcrumb from "../components/UI/breadcrumb";

const Comparison = () => {
  return (
    <Fragment>
      <LayoutOne>

        {/* breadcrumb */}
        <Breadcrumb
          // title={t("features")} 
          title="Features"
        />

        {/* service with text */}
        <ServiceTwo />

        {/* crm */}
        <CRM />

      </LayoutOne>
    </Fragment>
  );
};

export default Comparison;
