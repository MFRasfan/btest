"use client"

import React, { Fragment } from "react";
import LayoutOne from "../../layouts";
import PriceComparison from "../../containers/pricecomparison";
import Breadcrumb from "../../components/UI/breadcrumb";

export const metadata = {
  title: 'Cloud-Based Phone System Canada | Besanz.com',
  description: 'Besanz is your go-to destination for advanced business phone solutions in North America.  ',
}

const Comparison = () => {
  
  return (
    <Fragment>
      <LayoutOne>

        {/* breadcrumb */}
        <Breadcrumb title="Price Comparison" />

        <PriceComparison />
        
      </LayoutOne>
    </Fragment>
  );
};

export default Comparison;
