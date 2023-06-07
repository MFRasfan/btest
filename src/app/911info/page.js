import React, { Fragment } from "react";
import LayoutOne from "../layouts";
import Breadcrumb from "../components/UI/breadcrumb";

import InformationContent from "../containers/911information/911Information";

const Information = () => {

  return (
    <Fragment>
      <LayoutOne>
       
        <Breadcrumb title="911 Information" />

        <InformationContent/>
        
      </LayoutOne>
    </Fragment>
  );
};

export default Information;
