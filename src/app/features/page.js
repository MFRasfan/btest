"use client"

import React, { Fragment } from "react";
import LayoutOne from "../layouts";
import CRM from "../containers/crm";
import ServiceTwo from "../containers/services/service-two";
import Breadcrumb from "../components/UI/breadcrumb";

export const metadata = {
  title: 'Cloud-Based Phone System Canada | Besanz.com',
  description: 'Besanz is more than just a phone system. It’s a smart communication platform that lets you connect with your customers  from anywhere, on any device. ',
}

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
