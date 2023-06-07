import PropTypes from "prop-types";
import React from "react";


const ServiceTwoSingle = ({ data, styles }) => {

  return (
    <div className="col-12 col-lg-12 col-xl-6 sm__mt--40">
      <div className={styles.bestService}>
        <div
          className={styles.icon}
        >
          <img
            src={`/assets/images/features/${data.icon}`}
            style={{ width: 100, height: 100 }}
          />
        </div>
        <div className={styles.content}>
          <h2>{data.title.en}</h2>
          <p>{data.text.en}</p>
        </div>
      </div>
    </div>
  );
};

ServiceTwoSingle.propTypes = {
  data: PropTypes.object,
  styles: PropTypes.object
};

export default ServiceTwoSingle;
