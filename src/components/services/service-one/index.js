import getTransaltedContent from "@/helpers/getTransaltedContent";
import PropTypes from "prop-types";
import React from "react";

const ServiceOneSingle = ({ data, styles, language }) => {

  return (
    <div className="col-12 col-md-6 col-lg-4 md__mt--40 sm__mt--40">
      <div className={`${styles.service} m-service`}>

        <h2>{getTransaltedContent(data.title, language)}</h2>
        <p>{getTransaltedContent(data.text, language)}</p>
      </div>
    </div>
  );
};

ServiceOneSingle.propTypes = {
  data: PropTypes.object,
  styles: PropTypes.object
};

export default ServiceOneSingle;
