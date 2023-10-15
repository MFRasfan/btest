import PropTypes from "prop-types";
import React from "react";
import SectionTitle from "@/components/UI/section-title/section-title-one";
import serviceData from "@/data/services/service-one.json";
import ServiceOneSingle from "@/components/services/service-one";
import styles from "./ServiceOne.module.scss";
import getTextCommon from "@/language/i18/common/getTextCommon";


const ServiceOne = ({ serviceSpacing, language }) => {

  return (

    <div className="voopo__picing__area pt--60 pb--60 bgImg">
      <div className="container">

        <div className="row">
          <div className="col-lg-12" style={{ marginBottom: 20 }}>
            {/* section title */}
            <SectionTitle title={getTextCommon("AddOn", language)} text={getTextCommon('featuresAddOn', language)} />
          </div>
        </div>

        <div className="row mt--50">
          {serviceData && serviceData.map((single, key) => {
            return (
              <ServiceOneSingle
                data={single}
                key={key}
                styles={styles}
                language={language}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

ServiceOne.propTypes = {
  serviceSpacing: PropTypes.string
};

export default ServiceOne;
