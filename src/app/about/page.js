import React, { Fragment } from "react";
import LayoutOne from "../../components/layouts";
import Breadcrumb from "../components/UI/breadcrumb";
import FeatureImageTextOne from "../containers/feature-image-texts/feature-image-text-one";
import AboutContentOne from "../containers/about-contents/about-content-one";
// import TestimonialOne from "../containers/testimonials/testimonial-one";

export const metadata = {
  title: 'Cloud-Based Phone System Canada | Besanz.com',
  description: 'No matter what size or industry your business is in, Besanz has a smart phone solution that suits your needs. ',
}

const About = () => {
  return (
    <Fragment>
      <LayoutOne>

        {/* breadcrumb */}
        <Breadcrumb
          // title={t("About_Us")} 
          title="About Us"
        />

        {/* feature */}
        <FeatureImageTextOne />

        {/* testimonials */}
        {/* <TestimonialOne /> */}

        {/* about content */}
        <AboutContentOne />

      </LayoutOne>
    </Fragment>
  );
};

export default About;
