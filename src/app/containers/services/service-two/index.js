import React,{useState, useEffect} from "react";
import serviceData from "../../../data/services/service-two.json";
import serviceContentData from "../../../data/services/service-two-content.json";
import ServiceTwoSingle from "../../../components/services/service-two";
import styles from "./ServiceTwo.module.scss";

const ServiceTwo = () => {

  return (
    <div className="voopo__best__service bg--white ptb--110  poss--relative area__text">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-8 col-md-5 col-lg-4">

              <div className={`${styles.serviceTitle} m-serviceTitle`}>
                <h2>{serviceContentData.title.en}</h2>
                <h2 className={styles.serviceTitle2}>{serviceContentData.subtitle.en}</h2>
                  <p>
                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <path d="M741.3 512.3c-0.2-10.7-4.6-20.8-12.1-28.3L355.6 110.4c-16.2-16.2-42.5-16.2-58.7 0-16.2 16.2-16.2 42.5 0 58.7l344.2 344.2-197.3 197.3c-16.2 16.2-16.2 42.5 0 58.7 16.2 16.2 42.5 16.2 58.7 0l226.7-226.7c2.5-2.5 4.6-5.2 6.4-8.3 0.3-0.6 0.7-1.2 1-1.8 0.8-1.5 1.5-3 2.1-4.6 0.5-1.3 0.9-2.5 1.2-3.8 0.9-3.2 1.3-6.5 1.4-9.9v-1.9zM385.2 828c-16.2-16.2-42.5-16.2-58.7 0l-29.3 29.3c-16.2 16.2-16.2 42.5 0 58.7 16.2 16.2 42.5 16.2 58.7 0l29.3-29.3c16.2-16.2 16.2-42.5 0-58.7z" fill="" />
                    </svg>
                    {serviceContentData.text.en}
                  </p>

                  <p>
                  <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <path d="M741.3 512.3c-0.2-10.7-4.6-20.8-12.1-28.3L355.6 110.4c-16.2-16.2-42.5-16.2-58.7 0-16.2 16.2-16.2 42.5 0 58.7l344.2 344.2-197.3 197.3c-16.2 16.2-16.2 42.5 0 58.7 16.2 16.2 42.5 16.2 58.7 0l226.7-226.7c2.5-2.5 4.6-5.2 6.4-8.3 0.3-0.6 0.7-1.2 1-1.8 0.8-1.5 1.5-3 2.1-4.6 0.5-1.3 0.9-2.5 1.2-3.8 0.9-3.2 1.3-6.5 1.4-9.9v-1.9zM385.2 828c-16.2-16.2-42.5-16.2-58.7 0l-29.3 29.3c-16.2 16.2-16.2 42.5 0 58.7 16.2 16.2 42.5 16.2 58.7 0l29.3-29.3c16.2-16.2 16.2-42.5 0-58.7z" fill="" />
                    </svg>
                    {serviceContentData.text2.en}
                  </p>

                  <p>
                  <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <path d="M741.3 512.3c-0.2-10.7-4.6-20.8-12.1-28.3L355.6 110.4c-16.2-16.2-42.5-16.2-58.7 0-16.2 16.2-16.2 42.5 0 58.7l344.2 344.2-197.3 197.3c-16.2 16.2-16.2 42.5 0 58.7 16.2 16.2 42.5 16.2 58.7 0l226.7-226.7c2.5-2.5 4.6-5.2 6.4-8.3 0.3-0.6 0.7-1.2 1-1.8 0.8-1.5 1.5-3 2.1-4.6 0.5-1.3 0.9-2.5 1.2-3.8 0.9-3.2 1.3-6.5 1.4-9.9v-1.9zM385.2 828c-16.2-16.2-42.5-16.2-58.7 0l-29.3 29.3c-16.2 16.2-16.2 42.5 0 58.7 16.2 16.2 42.5 16.2 58.7 0l29.3-29.3c16.2-16.2 16.2-42.5 0-58.7z" fill="" />
                    </svg>
                    {serviceContentData.text3.en}
                  </p>

                  <p>
                  <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <path d="M741.3 512.3c-0.2-10.7-4.6-20.8-12.1-28.3L355.6 110.4c-16.2-16.2-42.5-16.2-58.7 0-16.2 16.2-16.2 42.5 0 58.7l344.2 344.2-197.3 197.3c-16.2 16.2-16.2 42.5 0 58.7 16.2 16.2 42.5 16.2 58.7 0l226.7-226.7c2.5-2.5 4.6-5.2 6.4-8.3 0.3-0.6 0.7-1.2 1-1.8 0.8-1.5 1.5-3 2.1-4.6 0.5-1.3 0.9-2.5 1.2-3.8 0.9-3.2 1.3-6.5 1.4-9.9v-1.9zM385.2 828c-16.2-16.2-42.5-16.2-58.7 0l-29.3 29.3c-16.2 16.2-16.2 42.5 0 58.7 16.2 16.2 42.5 16.2 58.7 0l29.3-29.3c16.2-16.2 16.2-42.5 0-58.7z" fill="" />
                    </svg>
                    {serviceContentData.text4.en}
                  </p>

                  <p>
                  <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <path d="M741.3 512.3c-0.2-10.7-4.6-20.8-12.1-28.3L355.6 110.4c-16.2-16.2-42.5-16.2-58.7 0-16.2 16.2-16.2 42.5 0 58.7l344.2 344.2-197.3 197.3c-16.2 16.2-16.2 42.5 0 58.7 16.2 16.2 42.5 16.2 58.7 0l226.7-226.7c2.5-2.5 4.6-5.2 6.4-8.3 0.3-0.6 0.7-1.2 1-1.8 0.8-1.5 1.5-3 2.1-4.6 0.5-1.3 0.9-2.5 1.2-3.8 0.9-3.2 1.3-6.5 1.4-9.9v-1.9zM385.2 828c-16.2-16.2-42.5-16.2-58.7 0l-29.3 29.3c-16.2 16.2-16.2 42.5 0 58.7 16.2 16.2 42.5 16.2 58.7 0l29.3-29.3c16.2-16.2 16.2-42.5 0-58.7z" fill="" />
                    </svg>
                    {serviceContentData.text5.en}
                  </p>

                  <p>
                  <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <path d="M741.3 512.3c-0.2-10.7-4.6-20.8-12.1-28.3L355.6 110.4c-16.2-16.2-42.5-16.2-58.7 0-16.2 16.2-16.2 42.5 0 58.7l344.2 344.2-197.3 197.3c-16.2 16.2-16.2 42.5 0 58.7 16.2 16.2 42.5 16.2 58.7 0l226.7-226.7c2.5-2.5 4.6-5.2 6.4-8.3 0.3-0.6 0.7-1.2 1-1.8 0.8-1.5 1.5-3 2.1-4.6 0.5-1.3 0.9-2.5 1.2-3.8 0.9-3.2 1.3-6.5 1.4-9.9v-1.9zM385.2 828c-16.2-16.2-42.5-16.2-58.7 0l-29.3 29.3c-16.2 16.2-16.2 42.5 0 58.7 16.2 16.2 42.5 16.2 58.7 0l29.3-29.3c16.2-16.2 16.2-42.5 0-58.7z" fill="" />
                    </svg>
                    {serviceContentData.text6.en}
                  </p>
              </div>

            <div className={`${styles.serviceTitle} m-serviceTitle`}>
              <h2 className={styles.serviceTitle2}>{serviceContentData.subtitle2.en}</h2>
                <p>
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <path d="M741.3 512.3c-0.2-10.7-4.6-20.8-12.1-28.3L355.6 110.4c-16.2-16.2-42.5-16.2-58.7 0-16.2 16.2-16.2 42.5 0 58.7l344.2 344.2-197.3 197.3c-16.2 16.2-16.2 42.5 0 58.7 16.2 16.2 42.5 16.2 58.7 0l226.7-226.7c2.5-2.5 4.6-5.2 6.4-8.3 0.3-0.6 0.7-1.2 1-1.8 0.8-1.5 1.5-3 2.1-4.6 0.5-1.3 0.9-2.5 1.2-3.8 0.9-3.2 1.3-6.5 1.4-9.9v-1.9zM385.2 828c-16.2-16.2-42.5-16.2-58.7 0l-29.3 29.3c-16.2 16.2-16.2 42.5 0 58.7 16.2 16.2 42.5 16.2 58.7 0l29.3-29.3c16.2-16.2 16.2-42.5 0-58.7z" fill="" />
                    </svg>
                  {serviceContentData.text7.en}
                </p>

                <p>
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <path d="M741.3 512.3c-0.2-10.7-4.6-20.8-12.1-28.3L355.6 110.4c-16.2-16.2-42.5-16.2-58.7 0-16.2 16.2-16.2 42.5 0 58.7l344.2 344.2-197.3 197.3c-16.2 16.2-16.2 42.5 0 58.7 16.2 16.2 42.5 16.2 58.7 0l226.7-226.7c2.5-2.5 4.6-5.2 6.4-8.3 0.3-0.6 0.7-1.2 1-1.8 0.8-1.5 1.5-3 2.1-4.6 0.5-1.3 0.9-2.5 1.2-3.8 0.9-3.2 1.3-6.5 1.4-9.9v-1.9zM385.2 828c-16.2-16.2-42.5-16.2-58.7 0l-29.3 29.3c-16.2 16.2-16.2 42.5 0 58.7 16.2 16.2 42.5 16.2 58.7 0l29.3-29.3c16.2-16.2 16.2-42.5 0-58.7z" fill="" />
                    </svg>
                  {serviceContentData.text8.en}
                </p>

                <p>
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <path d="M741.3 512.3c-0.2-10.7-4.6-20.8-12.1-28.3L355.6 110.4c-16.2-16.2-42.5-16.2-58.7 0-16.2 16.2-16.2 42.5 0 58.7l344.2 344.2-197.3 197.3c-16.2 16.2-16.2 42.5 0 58.7 16.2 16.2 42.5 16.2 58.7 0l226.7-226.7c2.5-2.5 4.6-5.2 6.4-8.3 0.3-0.6 0.7-1.2 1-1.8 0.8-1.5 1.5-3 2.1-4.6 0.5-1.3 0.9-2.5 1.2-3.8 0.9-3.2 1.3-6.5 1.4-9.9v-1.9zM385.2 828c-16.2-16.2-42.5-16.2-58.7 0l-29.3 29.3c-16.2 16.2-16.2 42.5 0 58.7 16.2 16.2 42.5 16.2 58.7 0l29.3-29.3c16.2-16.2 16.2-42.5 0-58.7z" fill="" />
                    </svg>
                  {serviceContentData.text9.en}
                </p> 

                <p>
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <path d="M741.3 512.3c-0.2-10.7-4.6-20.8-12.1-28.3L355.6 110.4c-16.2-16.2-42.5-16.2-58.7 0-16.2 16.2-16.2 42.5 0 58.7l344.2 344.2-197.3 197.3c-16.2 16.2-16.2 42.5 0 58.7 16.2 16.2 42.5 16.2 58.7 0l226.7-226.7c2.5-2.5 4.6-5.2 6.4-8.3 0.3-0.6 0.7-1.2 1-1.8 0.8-1.5 1.5-3 2.1-4.6 0.5-1.3 0.9-2.5 1.2-3.8 0.9-3.2 1.3-6.5 1.4-9.9v-1.9zM385.2 828c-16.2-16.2-42.5-16.2-58.7 0l-29.3 29.3c-16.2 16.2-16.2 42.5 0 58.7 16.2 16.2 42.5 16.2 58.7 0l29.3-29.3c16.2-16.2 16.2-42.5 0-58.7z" fill="" />
                    </svg>
                  {serviceContentData.text10.en}
                </p>

                <p>
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <path d="M741.3 512.3c-0.2-10.7-4.6-20.8-12.1-28.3L355.6 110.4c-16.2-16.2-42.5-16.2-58.7 0-16.2 16.2-16.2 42.5 0 58.7l344.2 344.2-197.3 197.3c-16.2 16.2-16.2 42.5 0 58.7 16.2 16.2 42.5 16.2 58.7 0l226.7-226.7c2.5-2.5 4.6-5.2 6.4-8.3 0.3-0.6 0.7-1.2 1-1.8 0.8-1.5 1.5-3 2.1-4.6 0.5-1.3 0.9-2.5 1.2-3.8 0.9-3.2 1.3-6.5 1.4-9.9v-1.9zM385.2 828c-16.2-16.2-42.5-16.2-58.7 0l-29.3 29.3c-16.2 16.2-16.2 42.5 0 58.7 16.2 16.2 42.5 16.2 58.7 0l29.3-29.3c16.2-16.2 16.2-42.5 0-58.7z" fill="" />
                    </svg>
                  {serviceContentData.text11.en}
                </p>

                <p>
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <path d="M741.3 512.3c-0.2-10.7-4.6-20.8-12.1-28.3L355.6 110.4c-16.2-16.2-42.5-16.2-58.7 0-16.2 16.2-16.2 42.5 0 58.7l344.2 344.2-197.3 197.3c-16.2 16.2-16.2 42.5 0 58.7 16.2 16.2 42.5 16.2 58.7 0l226.7-226.7c2.5-2.5 4.6-5.2 6.4-8.3 0.3-0.6 0.7-1.2 1-1.8 0.8-1.5 1.5-3 2.1-4.6 0.5-1.3 0.9-2.5 1.2-3.8 0.9-3.2 1.3-6.5 1.4-9.9v-1.9zM385.2 828c-16.2-16.2-42.5-16.2-58.7 0l-29.3 29.3c-16.2 16.2-16.2 42.5 0 58.7 16.2 16.2 42.5 16.2 58.7 0l29.3-29.3c16.2-16.2 16.2-42.5 0-58.7z" fill="" />
                    </svg>
                  {serviceContentData.text12.en}
                </p>
            </div>

          </div>
          
          <div className="col-md-7 col-lg-8">
            <div className="row">
              {serviceData &&
                serviceData.map((single, key) => {
                  return (
                    <ServiceTwoSingle data={single} key={key} styles={styles} />
                  );
                })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceTwo;
