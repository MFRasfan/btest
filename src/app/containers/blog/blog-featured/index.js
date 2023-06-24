import React from "react";
import Link from "next/link";
import Button from "@/app/components/UI/button";
import styles from "./BlogFeatured.module.scss";

const BlogFeatured = () => {
  return (
    <div className="banner__area">
      <div className="container">
        <div className="row">

          {/* Start Single Banner  */}
          <div className="col-12 col-sm-12 col-lg-6 mb-4">
            <div className={styles.banner}>

              <div className={styles.thumb}>
                <img src={"/assets/images/blog/cloud-based-phone-solution.jpg"} alt="Phone Solution" />
              </div>

              <div className={styles.hoverAction}>
                <div className={styles.bannerContent}>
                  <span>Phone Solution</span>

                  <h3>
                    <Link href="blog/blog-post/the-cost-savings-of-switching-to-a-cloud-based-phone-solution">
                      The Cost Savings of Switching to a Cloud-Based Phone Solution
                    </Link>
                  </h3>

                  <div className={styles.bannerBtn}>
                    <Button type="link" url="blog/blog-post/the-cost-savings-of-switching-to-a-cloud-based-phone-solution" text="Read More" />
                  </div>
                </div>
              </div>

            </div>
          </div>
          {/* End  Single Banner  */}

          {/* Start Single Banner  */}
          <div className="col-12 col-sm-12 col-lg-6 mb-4">
            <div className={`${styles.banner} ${styles.b11}`}>

              <div className={styles.thumb}>
                <img src={"/assets/images/blog/cloud-based-phone-solution-2.jpg"} alt="Phone Solution" />
              </div>

              <div className={styles.hoverAction}>
                <div className={styles.bannerContent}>
                  <span>Phone Solution</span>

                  <h3>
                    <Link href="blog/blog-post/how-a-cloud-based-phone-solution-can-revolutionize-your-business-communications">
                      How a Cloud-Based Phone Solution Can Revolutionize Your Business Communications
                    </Link>
                  </h3>

                  <div className={styles.bannerBtn}>
                    <Button type="link" url="blog/blog-post/how-a-cloud-based-phone-solution-can-revolutionize-your-business-communications" text="Read More" />
                  </div>
                </div>
              </div>

            </div>
          </div>
          {/* End  Single Banner  */}

        </div>
      </div>
    </div>
  );
};

export default BlogFeatured;
