import PropTypes from "prop-types";
import React from "react";

const ServiceOneSingle = ({ data, styles }) => {

  return (
    <div className="col-12 col-md-6 col-lg-4 md__mt--40 sm__mt--40">
      <div className={`${styles.service} m-service`}>

        <h2>{data.title.en}</h2>
        <p>{data.text.en}</p>
      </div>
    </div>
  );
};

ServiceOneSingle.propTypes = {
  data: PropTypes.object,
  styles: PropTypes.object
};

export default ServiceOneSingle;
