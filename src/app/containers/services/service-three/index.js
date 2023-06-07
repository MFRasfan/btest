import React from "react";
import ServiceOne from "@/app/containers/services/service-one";
import serviceData from "@/app/data/services/service-three-content.json";
import styles from "./ServiceThree.module.scss";

const ServiceThree = () => {

  return (
    <div className="voopo__service__video">

      {/* Start Service Area */}
      <ServiceOne serviceSpacing="minusMargin" />
      {/* End Service Area */}

      {/* Start Video Start */}
      <div className={styles.voopoVideo}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className={styles.videoInner}>
                {/* //   {width} */}
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-xl-6 d-none d-sm-block">
                  </div>

                  <div className="col-12 col-sm-12 col-md-12 col-xl-6">
                    <div className={styles.videoContent}>
                      <div
                        className={styles.videoContentIcon}
                        style={{
                          backgroundImage: `url(/assets/images/icons/${serviceData.serviceContentIcon}))`,
                        }}
                      />
                      <h2>{serviceData.serviceTitle.en}</h2>
                      <div />
                      <p>{serviceData.serviceContent.en}</p>
                      <p>{serviceData.serviceContent2.en}</p>
                      <p>{serviceData.serviceContent6.en}</p>
                      <p>{serviceData.serviceContent7.en}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* End Video Start */}
    </div>
  );
};

export default ServiceThree;
