import React, { Fragment } from "react";
import LayoutOne from "@/components/layouts";
import Breadcrumb from "@/app/components/UI/breadcrumb";

import NineOneOneContent from "../containers/911";

const NineOneOne = () => {

  return (
    <Fragment>
      <LayoutOne>
        
        <Breadcrumb title="911" />
     
        <NineOneOneContent>
          {/* <p>heelooo</p> */}
              {/* <PrivacyContent/>  */}
              {/* {render911Template} */}
        </NineOneOneContent>

      </LayoutOne>
    </Fragment>
  );
};

export default NineOneOne;
