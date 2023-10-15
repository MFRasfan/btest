import React, { Fragment } from "react";
import LayoutOne from "@/components/layouts";
import Breadcrumb from "@/components/UI/breadcrumb";

import InformationContent from "@/containers/911information/911Information";

export const metadata = {
  title: 'Cloud-Based Phone System Canada | Besanz.com',
  description: ' Transform your communication strategy with North America smartest business phone solutions. Experience seamless integration and enhanced productivity. ',
}

const Information = () => {

  return (
    <Fragment>
      <LayoutOne>

        <Breadcrumb title="911 Information" />

        <InformationContent />

      </LayoutOne>
    </Fragment>
  );
};

export default Information;
