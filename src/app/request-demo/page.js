"use client"

import React, { Fragment } from "react";
import LayoutOne from "../layouts";
import Breadcrumb from "../components/UI/breadcrumb";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";
// import CalendlyP from "../containers/calendly";

export const metadata = {
  title: 'Cloud-Based Phone System Canada | Besanz.com',
  description: 'Streamline your communication, enhance productivity, and stay ahead of the competition ',
}

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
