"use client"

import React, { Fragment , useState, useEffect } from "react";
import LayoutOne from "../layouts";
import PricingTableOne from "../containers/pricing-tables/pricing-table-one";
import {annualPriceData, monthlyPriceData, annualOnePriceData,monthlyOnePriceData } from "../data/pricing-tables/pricedetail";
import Breadcrumb from "../components/UI/breadcrumb";

const Comparison = () => {
  
  return (
    <Fragment>
      <LayoutOne>
        {/* breadcrumb */}
        <Breadcrumb 
        // title={t("price_details")} 
        title="Price Details"
        />
        <PricingTableOne background="none" type={"annual"} data={annualPriceData.en} /> 
        <PricingTableOne background="none" type={"monthly"} data={monthlyPriceData.en} /> 
        <PricingTableOne background="none" type={"annual"} data={annualOnePriceData.en} /> 
        <PricingTableOne background="none" type={"monthly"} data={monthlyOnePriceData.en} /> 
      </LayoutOne>
    </Fragment>
  );
};

export default Comparison;
