"use client"

import React from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import SubscribeEmail from "@/app/components/blog/blog-sidebar/SubscribeEmail";

import styles from "./BlogSidebar.module.scss";

const BlogSidebar = () => {
  return (
    <div className="voopoSidebar">

      {/* Start Serarch */}
      {/* <div className={`${styles.vpWidget} ${styles.search} mb--60 m-blog-Serarch`}>
        <input type="text" placeholder="Search Here" />
        <button>
          <IoIosSearch />
        </button>
      </div> */}
      {/* End Serarch */}

      {/* Start Newsleter */}
      {/* <div className={`${styles.vpWidget} ${styles.newsletter} mb--60`}>
        <h4>Subscribe to Newsletter</h4>
        <SubscribeEmail mailchimpUrl="https://besanz.us21.list-manage.com/subscribe/post?u=34568160078ca5029861ec516&amp;id=f7f23dad6e&amp;f_id=004dcfe1f0" />
      </div> */}
      {/* End Newsleter */}

      {/* Start Recent Post */}
      <div className={`${styles.vpWidget} ${styles.recentPostWrap} mb--60`}>
        <Tab.Container defaultActiveKey="recent">

          <Nav variant="pills" className={`${styles.voopoNav} nav justify-content-center ms-0`}>
            <Nav.Item className={styles.navItem}>
              <Nav.Link eventKey="recent">Recent</Nav.Link>
            </Nav.Item>
            <Nav.Item className={styles.navItem}>
              <Nav.Link eventKey="trending">Trending</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="recent" className={styles.singleTabContent}>

              <div className={styles.recentPost}>
                <div className={styles.thumb}>
                  <Link href={"blog/blog-post/the-cost-savings-of-switching-to-a-cloud-based-phone-solution"}>
                    <img src={"/assets/images/blog/cloud-based-phone-solution-sm.jpg"} alt="Phone Solution" />
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                    <Link href={"blog/blog-post/the-cost-savings-of-switching-to-a-cloud-based-phone-solution"}>
                      The Cost Savings of Switching to a Cloud-Based Phone Solution
                    </Link>
                  </h4>
                  <span>24 June 2023</span>
                </div>
              </div>

              <div className={styles.recentPost}>
                <div className={styles.thumb}>
                  <Link href={"blog/blog-post/how-a-cloud-based-phone-solution-can-revolutionize-your-business-communications"}>
                    <img src={"/assets/images/blog/cloud-based-phone-solution-sm-2.jpg"} alt="Phone Solution"/>
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                    <Link href={"blog/blog-post/how-a-cloud-based-phone-solution-can-revolutionize-your-business-communications"}>
                      How a Cloud-Based Phone Solution Can Revolutionize Your Business Communications
                    </Link>
                  </h4>
                  <span>24 June 2023</span>
                </div>
              </div>

              <div className={styles.recentPost}>
                <div className={styles.thumb}>
                  <Link href={"blog/blog-post/cloud-based-on-premise-business-phone-systems-which-one-is-right-for-you"}>
                    <img src={"/assets/images/blog/cloud-based-phone-solution-sm-3.jpg"} alt="Phone Solution"/>
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                    <Link href={"blog/blog-post/cloud-based-on-premise-business-phone-systems-which-one-is-right-for-you"}>
                      Cloud-Based vs. On-Premise Business Phone Systems: Which One is Right for You?
                    </Link>
                  </h4>
                  <span>24 June 2023</span>
                </div>
              </div>

              <div className={styles.recentPost}>
                <div className={styles.thumb}>
                  <Link href={"blog/blog-post/the-benefits-of-cloud-based-business-phone-solutions-for-remote-and-hybrid-work"}>
                    <img src={"/assets/images/blog/cloud-based-phone-solution-sm-4.jpg"} alt="Phone Solution"/>
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                    <Link href={"blog/blog-post/the-benefits-of-cloud-based-business-phone-solutions-for-remote-and-hybrid-work"}>
                      The Benefits of Cloud-Based Business Phone Solutions for Remote and Hybrid Work
                    </Link>
                  </h4>
                  <span>24 June 2023</span>
                </div>
              </div>

              <div className={styles.recentPost}>
                <div className={styles.thumb}>
                  <Link href={"blog/blog-post/the-security-benefits-of-a-loud-based-business-phone-system"}>
                    <img src={"/assets/images/blog/cloud-based-phone-solution-sm-5.jpg"} alt="Phone Solution"/>
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                    <Link href={"blog/blog-post/the-security-benefits-of-a-loud-based-business-phone-system"}>
                      The Security Benefits of a Cloud-Based Business Phone System
                    </Link>
                  </h4>
                  <span>24 June 2023</span>
                </div>
              </div>

              <div className={styles.recentPost}>
                <div className={styles.thumb}>
                  <Link href={"blog/blog-post/the-future-of-cloud-based-business-phone-solutions"}>
                    <img src={"/assets/images/blog/cloud-based-phone-solution-sm-6.jpg"} alt="Phone Solution"/>
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                    <Link href={"blog/blog-post/the-future-of-cloud-based-business-phone-solutions"}>
                      The future of cloud-based business phone solutions
                    </Link>
                  </h4>
                  <span>24 June 2023</span>
                </div>
              </div>
            </Tab.Pane>

            <Tab.Pane eventKey="trending" className={styles.singleTabContent}>
              <div className={styles.recentPost}>
                <div className={styles.thumb}>
                  <Link href={"blog/blog-post/the-cost-savings-of-switching-to-a-cloud-based-phone-solution"}>
                    <img src={"/assets/images/blog/cloud-based-phone-solution-sm.jpg"} alt="Phone Solution"/>
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                    <Link href={"blog/blog-post/the-cost-savings-of-switching-to-a-cloud-based-phone-solution"}>
                      The Cost Savings of Switching to a Cloud-Based Phone Solution
                    </Link>
                  </h4>
                  <span>24 June 2023</span>
                </div>
              </div>

              <div className={styles.recentPost}>
                <div className={styles.thumb}>
                  <Link href={"blog/blog-post/how-a-cloud-based-phone-solution-can-revolutionize-your-business-communications"}>
                    <img src={"/assets/images/blog/cloud-based-phone-solution-sm-2.jpg"} alt="Phone Solution"/>
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                    <Link href={"blog/blog-post/how-a-cloud-based-phone-solution-can-revolutionize-your-business-communications"}>
                      How a Cloud-Based Phone Solution Can Revolutionize Your Business Communications
                    </Link>
                  </h4>
                  <span>24 June 2023</span>
                </div>
              </div>

              <div className={styles.recentPost}>
                <div className={styles.thumb}>
                  <Link href={"blog/blog-post/cloud-based-on-premise-business-phone-systems-which-one-is-right-for-you"}>
                    <img src={"/assets/images/blog/cloud-based-phone-solution-sm-3.jpg"} alt="Phone Solution"/>
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                    <Link href={"blog/blog-post/cloud-based-on-premise-business-phone-systems-which-one-is-right-for-you"}>
                      Cloud-Based vs. On-Premise Business Phone Systems: Which One is Right for You?
                    </Link>
                  </h4>
                  <span>24 June 2023</span>
                </div>
              </div>

              <div className={styles.recentPost}>
                <div className={styles.thumb}>
                  <Link href={"blog/blog-post/the-benefits-of-cloud-based-business-phone-solutions-for-remote-and-hybrid-work"}>
                    <img src={"/assets/images/blog/cloud-based-phone-solution-sm-4.jpg"} alt="Phone Solution"/>
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                    <Link href={"blog/blog-post/the-benefits-of-cloud-based-business-phone-solutions-for-remote-and-hybrid-work"}>
                      The Benefits of Cloud-Based Business Phone Solutions for Remote and Hybrid Work
                    </Link>
                  </h4>
                  <span>24 June 2023</span>
                </div>
              </div>

              <div className={styles.recentPost}>
                <div className={styles.thumb}>
                  <Link href={"blog/blog-post/the-security-benefits-of-a-loud-based-business-phone-system"}>
                    <img src={"/assets/images/blog/cloud-based-phone-solution-sm-5.jpg"} alt="Phone Solution"/>
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                    <Link href={"blog/blog-post/the-security-benefits-of-a-loud-based-business-phone-system"}>
                      The Security Benefits of a Cloud-Based Business Phone System
                    </Link>
                  </h4>
                  <span>24 June 2023</span>
                </div>
              </div>

              <div className={styles.recentPost}>
                <div className={styles.thumb}>
                  <Link href={"blog/blog-post/the-future-of-cloud-based-business-phone-solutions"}>
                    <img src={"/assets/images/blog/cloud-based-phone-solution-sm-6.jpg"} alt="Phone Solution"/>
                  </Link>
                </div>
                <div className={styles.content}>
                  <h4>
                    <Link href={"blog/blog-post/the-future-of-cloud-based-business-phone-solutions"}>
                      The future of cloud-based business phone solutions
                    </Link>
                  </h4>
                  <span>24 June 2023</span>
                </div>
              </div>
            </Tab.Pane>
            
          </Tab.Content>
        </Tab.Container>
      </div>
      {/* End Recent Post */}

      {/* Start Newsleter */}
      {/* <div className={`${styles.vpWidget} ${styles.banner} mb--60`}>
        <div className={styles.thumb}>
          <Link href={"/blog"}>
            <img src={"/assets/images/blog/banner.png"} alt="voopo voip" />
          </Link>
        </div>
      </div> */}
      {/* End Newsleter */}

      {/* Start Tag */}
      {/* <div className={`${styles.vpWidget} ${styles.voopoTag}`}>
        <ul className={styles.tagList}>
          <li>
            <Link href={"/blog"}>
              Network
            </Link>
          </li>
          <li>
            <Link href={"/blog"}>
              communication
            </Link>
          </li>
          <li>
            <Link href={"/blog"}>
              Voip
            </Link>
          </li>
          <li>
            <Link href={"/blog"}>
              Voopo
            </Link>
          </li>
          <li>
            <Link href={"/blog"}>
              Techno
            </Link>
          </li>
          <li>
            <Link href={"/blog"}>
              Telecom
            </Link>
          </li>
          <li>
            <Link href={"/blog"}>
              Network
            </Link>
          </li>
          <li>
            <Link href={"/blog"}>
              Cloud
            </Link>
          </li>
        </ul>
      </div> */}
      {/* End Tag */}
    </div>
  );
};

export default BlogSidebar;
