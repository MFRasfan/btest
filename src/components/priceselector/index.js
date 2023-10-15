"use client"

import React, { useState } from "react";
import Button from '@mui/material/Button'
import PricingTableOne from "@/containers/pricing-tables/pricing-table-one";
import { annualPriceData, monthlyPriceData } from "@/data/pricing-tables/pricedata.js";
import './priceSelector.css'
import getTextSubscription from "@/language/i18/subscription/getTextSubscription";

const PriceSelector = ({ language }) => {

  const [active, setActive] = useState("annual");

  function getTransaltedContent(obj) {
    if (!language || language == null || language == "") return obj.en;
    return obj[language]
  }

  return (
    <div>
      <div align='center' >
        <Button onClick={() => setActive("annual")} className={active === "annual" ? "tab active-tab" : "tab"} >
          {getTextSubscription('annualPlan', language)}
        </Button>

        <Button onClick={() => setActive("monthly")} className={active === "monthly" ? "tab active-tab" : "tab"}>
          {getTextSubscription('monthlyPlan', language)}
        </Button>

      </div>
      <div>
        {active === "annual" && <PricingTableOne background="none" type={"annual"} data={getTransaltedContent(annualPriceData)} language={language} />}

        {active === "monthly" && <PricingTableOne background="none" type={"monthly"} data={getTransaltedContent(monthlyPriceData)} language={language} />}
      </div>
    </div>
  );
};

export default PriceSelector;
