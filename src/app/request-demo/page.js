"use client"

import React, { Fragment } from "react";
import LayoutOne from "../layouts";
import Breadcrumb from "../components/UI/breadcrumb";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";
// import CalendlyP from "../containers/calendly";

const Calendly = () => {
  return (
    <Fragment>
      <LayoutOne>
        {/* breadcrumb */}
        <Breadcrumb title="Request Demo" />

        <InlineWidget url="https://calendly.com/besanz/30min" />

      </LayoutOne>
    </Fragment>
  );
};

export default Calendly;
