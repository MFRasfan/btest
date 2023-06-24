import React, { useEffect } from "react";
import styles from "./ProductReview.module.scss";
import "./index.css";

import $ from "jquery";
// import "jquery-ui-dist/jquery-ui";

const ProductReview = () => {


  useEffect(() => {
    $("#m-play-video").on("click", function (e) {
      e.preventDefault();
      $("#m-video-overlay").addClass("open");
      $("#m-video-overlay").append(
        '<iframe src="https://www.youtube.com/embed/Mp2piaSdzRw" width="853" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>'
      );
    });

    $(".m-video-overlay, .m-video-overlay-close").on("click", function (e) {
      e.preventDefault();
      close_video();
    });

    $('document').keyup(function (e) {
      if (e.keyCode === 27) {
        close_video();
      }
    });

    function close_video() {
      $(".m-video-overlay.open").removeClass("open").find("iframe").remove();
    }
  }, [])

  return (
    <>
      <div className={`${styles.productStatistics} m-productStatistics`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className={styles.contentWrap}>
                <div>
                  <h1>What is a Cloud-Based Phone Solution?</h1>

                  <p>A cloud-based phone solution is a phone system that operates over the internet. Instead of using traditional phone lines and hardware, a cloud-based phone system uses cloud technology to route calls and manage phone features. This means that all the hardware and software required to run the phone system are hosted by the provider, and you do not have to worry about maintenance or upgrades.</p>

                  <div className={styles.progressbar}>
                    <div className="progressbar__single progressbar__1">
                      <div className="progressbar__text d-flex justify-content-between">
                        <span>SEO Analysis</span>
                        <span>95%</span>
                      </div>
                      <div className='progressbar__progressBarContainer'>
                        <div className='progressbar__progressBar'>
                          <div className='progressbar__progressBarRect'>
                            <span className='progressbar__progressBarCircle'></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="progressbar__single progressbar__2">
                      <div className="progressbar__text d-flex justify-content-between">
                        <span>SEO Audit</span>
                        <span>76%</span>
                      </div>
                      <div className='progressbar__progressBarContainer'>
                        <div className='progressbar__progressBar'>
                          <div className='progressbar__progressBarRect'>
                            <span className='progressbar__progressBarCircle'></span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="progressbar__single progressbar__3">
                      <div className="progressbar__text d-flex justify-content-between">
                        <span>Optimization</span>
                        <span>80%</span>
                      </div>
                      <div className='progressbar__progressBarContainer'>
                        <div className='progressbar__progressBar'>
                          <div className='progressbar__progressBarRect'>
                            <span className='progressbar__progressBarCircle'></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className={`${styles.imgWrap} m-product-review-imgWrap`}>
              <img src={"/assets/images/phones-banner.png"} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.certification}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className={styles.rightImgWrap}>
                <div className={styles.imageMask}>
                  <img src={"/assets/images/benefit-image.png"} />

                  <div className={styles.imageBottom}>
                    <svg class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M883.84 515.52c-11.232-2.88-30.4-7.04-51.84-11.52A153.184 153.184 0 0 0 679.04 352c-15.04 0-29.12 2.56-42.88 6.72C616.64 246.08 518.08 160 400 160 267.52 160 160 267.52 160 400c0 18.24 2.24 36.16 6.08 53.12C89.28 472 32 541.44 32 624 32 720.96 111.04 800 208 800h639.36c79.68 0 144.64-64.96 144.64-144.64 0-65.92-44.48-123.52-108.16-139.84zM847.36 768H208C128.64 768 64 703.36 64 624S128.64 480 208 480A208 208 0 1 1 608 400l-0.32 7.68c19.84-14.72 44.48-23.68 71.36-23.68a120.864 120.864 0 0 1 118.4 145.6c31.68 6.4 63.04 12.8 78.4 16.96a112.64 112.64 0 0 1 84.16 108.8c0 62.08-50.56 112.64-112.64 112.64z" fill="#152E4A" /><path d="M960 655.36c0 62.08-50.56 112.64-112.64 112.64H208c-8.64 0-16.96-0.64-24.96-2.24-14.72-22.4-23.04-48.96-23.04-77.76C160 608.64 224.64 544 304 544a208 208 0 0 1 192-288c21.76 0 42.88 3.2 62.72 9.6 30.72 36.16 49.28 83.2 49.28 134.4l-0.32 7.68a119.392 119.392 0 0 1 80.64-23.36c42.56 3.2 78.72 28.48 97.6 64.32a119.456 119.456 0 0 1 11.52 80.96c31.68 6.4 63.04 12.8 78.4 16.96 6.72 1.92 13.12 4.16 19.2 7.04 23.072 10.56 41.6 28.8 52.8 51.52 8 15.04 12.16 32 12.16 50.24zM864 848a16 16 0 0 1 16-16h96a16 16 0 0 1 0 32h-96a16 16 0 0 1-16-16zM32 848a16 16 0 0 1 16-16h736a16 16 0 0 1 0 32h-736a16 16 0 0 1-16-16zM384 912a16 16 0 0 1 16-16h576a16 16 0 0 1 0 32h-576a16 16 0 0 1-16-16zM160 912a16 16 0 0 1 16-16h128a16 16 0 0 1 0 32h-128a16 16 0 0 1-16-16z" fill="#82C7E6" /><path d="M240 416a16 16 0 0 1-16-16C224 226.016 366.56 224 368 224a16 16 0 0 1 0.032 32C363.072 256.032 256 258.848 256 400a16 16 0 0 1-16 16z" fill="#152E4A" /><path d="M432 240m-16 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0Z" fill="#152E4A" /><path d="M864 720a16 16 0 0 0-16-16h-224a16 16 0 0 0 0 32h224a16 16 0 0 0 16-16z" fill="#152E4A" /><path d="M512 720a16 16 0 0 1 16-16h32a16 16 0 0 1 0 32h-32a16 16 0 0 1-16-16z" fill="#152E4A" /></svg>

                    <h1>Cloud-Based</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <h1 className={styles.header}>How Can a Cloud-Based Phone Solution Benefit Your Business?</h1>

              <div className={styles.benefitBox}>
                <div className={styles.itemIcon}>
                  <svg class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1000 884h-976c-13.232 0-24-10.768-24-24v-544c0-13.232 10.768-24 24-24h976c13.232 0 24 10.768 24 24v544c0 13.232-10.768 24-24 24z m-976-576a8 8 0 0 0-8 8v544a8 8 0 0 0 8 8h976c4.4 0 8-3.6 8-8v-544c0-4.4-3.6-8-8-8h-976z" fill="#263238" />
                    <path d="M846.464 388H177.536A128.208 128.208 0 0 1 96 469.536v236.928a128.16 128.16 0 0 1 81.536 81.536h668.928A128.208 128.208 0 0 1 928 706.464V469.536a128.128 128.128 0 0 1-81.536-81.536z" fill="#152E4A" />
                    <path d="M846.464 796H177.536a8 8 0 0 1-7.6-5.504 120.384 120.384 0 0 0-76.432-76.432 8 8 0 0 1-5.504-7.6V469.552a8 8 0 0 1 5.504-7.6 120.384 120.384 0 0 0 76.432-76.448 8 8 0 0 1 7.6-5.504h668.928a8 8 0 0 1 7.6 5.504 120.384 120.384 0 0 0 76.432 76.448 8 8 0 0 1 5.504 7.6v236.928a8 8 0 0 1-5.504 7.6 120.384 120.384 0 0 0-76.432 76.432 8 8 0 0 1-7.6 5.488z m-663.264-16h657.616a136.56 136.56 0 0 1 79.184-79.184V475.2a136.592 136.592 0 0 1-79.184-79.2H183.2A136.528 136.528 0 0 1 104 475.2v225.616a136.64 136.64 0 0 1 79.2 79.184z" fill="#152E4A" /><path d="M512 588m-240 0a240 240 0 1 0 480 0 240 240 0 1 0-480 0Z" fill="#82C7E6" />
                    <path d="M512 836c-136.752 0-248-111.248-248-248s111.248-248 248-248 248 111.248 248 248-111.248 248-248 248z m0-480c-127.92 0-232 104.08-232 232s104.08 232 232 232c127.936 0 232-104.08 232-232s-104.08-232-232-232zM704 244h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16zM640 244H320a8 8 0 0 1 0-16h320a8 8 0 0 1 0 16zM352 948h-32a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16zM704 948H384a8 8 0 0 1 0-16h320a8 8 0 0 1 0 16z" fill="#152E4A" />
                    <path d="M544 564h-64c-13.232 0-24-10.768-24-24s10.768-24 24-24h104v-48h-48v-32h-48v32H480c-39.696 0-72 32.304-72 72s32.304 72 72 72h64c13.232 0 24 10.768 24 24s-10.768 24-24 24h-112v48h56v32h48v-32h8c39.696 0 72-32.304 72-72s-32.304-72-72-72z" fill="#FFFFFF" /><path d="M536 748h-48a8 8 0 0 1-8-8v-24h-48a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8h112a16 16 0 0 0 0-32h-64c-44.112 0-80-35.888-80-80s35.888-80 80-80v-24a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v24h40a8 8 0 0 1 8 8v48a8 8 0 0 1-8 8H480a16.016 16.016 0 0 0 0 32h64c44.112 0 80 35.888 80 80s-35.888 80-80 80v24a8 8 0 0 1-8 8z m-40-16h32v-24a8 8 0 0 1 8-8h8c35.296 0 64-28.704 64-64s-28.704-64-64-64h-64c-17.648 0-32-14.352-32-32s14.352-32 32-32h96v-32h-40a8 8 0 0 1-8-8v-24h-32v24a8 8 0 0 1-8 8H480c-35.296 0-64 28.704-64 64s28.704 64 64 64h64c17.648 0 32 14.352 32 32s-14.352 32-32 32h-104v32h48a8 8 0 0 1 8 8v24zM272 124h-64a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16z" fill="#152E4A" /><path d="M240 156a8 8 0 0 1-8-8v-64a8 8 0 0 1 16 0v64a8 8 0 0 1-8 8z" fill="#152E4A" />
                    <path d="M144 212H80a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16z" fill="#152E4A" />
                    <path d="M112 244a8 8 0 0 1-8-8v-64a8 8 0 0 1 16 0v64a8 8 0 0 1-8 8z" fill="#152E4A" /></svg>
                </div>
                <div className={styles.content}>
                  <h1>Cost Savings</h1>
                  <p>A cloud-based phone solution can save your business money in several ways. Firstly, you do not need to invest in expensive hardware or equipment, as the provider will take care of all the necessary equipment and software. Secondly, you can reduce your monthly phone bills, as calls are routed over the internet and are typically cheaper than traditional phone lines. Thirdly, you can avoid costly maintenance and upgrades, as the provider will take care of these tasks.
                  </p>
                </div>
              </div>

              <div className={styles.benefitBox}>
                <div className={styles.itemIcon}>
                  <svg class="svg-icon" viewBox="0 0 1129 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1112.090483 902.797241c0 52.276966-42.372414 94.649379-94.64938 94.64938H112.489931c-52.276966 0-94.649379-42.372414-94.649379-94.64938 0-52.268138 42.372414-94.649379 94.649379-94.649379h904.951172c52.268138 0 94.649379 42.372414 94.64938 94.649379z" fill="#82C7E6" />
                    <path d="M1040.728276 240.772414V760.32c0 52.550621-42.601931 95.161379-95.161379 95.161379h-761.202759c-52.559448 0-95.161379-42.610759-95.161379-95.161379V240.772414c0-52.550621 42.601931-95.152552 95.161379-95.152552h761.202759c52.559448 0 95.161379 42.601931 95.161379 95.152552z" fill="#fff" />
                    <path d="M945.575724 808.147862H184.35531a47.58069 47.58069 0 0 1-47.580689-47.58069V240.525241a47.58069 47.58069 0 0 1 47.580689-47.571862h761.220414a47.58069 47.58069 0 0 1 47.58069 47.58069v520.050759a47.58069 47.58069 0 0 1-47.58069 47.580689z" fill="#fff" />
                    <path d="M897.995034 311.375448v378.341518a23.790345 23.790345 0 0 1-23.790344 23.790344H255.717517a23.790345 23.790345 0 0 1-23.781517-23.790344V311.375448a23.790345 23.790345 0 0 1 23.781517-23.781517h618.496a23.790345 23.790345 0 0 1 23.781517 23.781517z" fill="#82C7E6" />
                    <path d="M897.995034 311.26069v378.579862c0 13.064828-10.646069 23.657931-23.790344 23.657931H255.717517a23.746207 23.746207 0 0 1-23.657931-21.195035l190.984828-189.969655h213.28331c4.634483 0 9.074759-1.783172 12.393931-4.978759l218.244414-209.761103h7.238621c13.144276 0 23.790345 10.593103 23.790344 23.657931z" fill="#82C7E6" />
                    <path d="M1111.940414 40.96l-13.797517 116.418207c-0.688552 5.843862-6.011586 11.140414-11.890759 11.828965-2.824828 0.335448-5.393655-0.467862-7.150345-2.224551l-26.544552-26.394483L659.870897 518.002759c-3.319172 3.204414-7.768276 4.987586-12.393931 4.987586H434.193655L214.810483 741.208276a17.831724 17.831724 0 0 1-12.614621 5.199448 17.840552 17.840552 0 0 1-12.614621-5.199448 17.681655 17.681655 0 0 1 0-25.096828L414.190345 492.694069a17.88469 17.88469 0 0 1 12.605793-5.190621H640.264828l387.054344-372.020965-60.857379-60.530759c-1.765517-1.747862-2.56-4.307862-2.224552-7.115034 0.688552-5.843862 6.011586-11.149241 11.890759-11.828966l117.036138-13.726896c11.758345-1.368276 20.162207 6.991448 18.776276 18.679172z" fill="#152E4A" />
                    <path d="M1052.830897 796.133517c3.707586-11.105103 5.737931-22.969379 5.737931-35.310345v-520.562758c0-5.737931-0.441379-11.493517-1.306483-17.125517a17.831724 17.831724 0 1 0-35.266207 5.420137c0.591448 3.848828 0.882759 7.785931 0.882759 11.714207v520.553931c0 42.354759-34.674759 76.8-77.312 76.8h-761.202759c-42.637241 0-77.320828-34.445241-77.320828-76.8v-520.562758c0-42.345931 34.683586-76.8 77.312-76.8h713.639724a17.831724 17.831724 0 1 0 0-35.681104H184.35531c-62.305103 0-112.993103 50.458483-112.993103 112.489931v520.562759c0 12.32331 2.030345 24.187586 5.737931 35.301517C31.849931 811.140414 0 853.512828 0 902.797241c0 62.022621 50.688 112.489931 112.993103 112.489931h903.944828c62.305103 0 112.993103-50.46731 112.993103-112.489931 0-49.275586-31.849931-91.656828-77.100137-106.663724z m-35.892966 183.472552H112.993103c-42.637241 0-77.312-34.454069-77.312-76.808828 0-35.654621 24.452414-66.030345 58.350345-74.460689a113.054897 113.054897 0 0 0 90.323862 44.976551h761.220414c36.881655 0 69.684966-17.681655 90.315035-44.976551 33.897931 8.430345 58.359172 38.806069 58.359172 74.460689 0 42.354759-34.683586 76.8-77.312 76.8zM953.882483 67.601655l44.491034 44.261517-369.22262 354.886621H415.646897a17.831724 17.831724 0 0 0-12.588138 5.190621L178.46731 695.348966a17.831724 17.831724 0 1 0 25.158621 25.299862l219.383172-218.217931h213.318621a17.831724 17.831724 0 0 0 12.358621-4.978759l374.995862-360.421517 42.831448 42.610758a26.041379 26.041379 0 0 0 18.502621 7.485793c1.103448 0 2.206897-0.070621 3.319172-0.194206 14.035862-1.650759 25.864828-13.453241 27.533242-27.453794l13.797517-116.418206c1.297655-11.008-2.171586-21.53931-9.524966-28.910345-7.379862-7.38869-17.95531-10.893241-29.042758-9.577931l-117.053793 13.718069c-14.027034 1.641931-25.864828 13.444414-27.524414 27.453793-0.979862 8.253793 1.703724 16.216276 7.353379 21.857103z m140.190896-27.453793l-12.35862 104.280276L989.228138 52.435862l104.845241-12.296828zM380.610207 926.455172a17.831724 17.831724 0 0 1-17.840552 17.831725H172.464552a17.831724 17.831724 0 1 1 0-35.672276h190.305103a17.831724 17.831724 0 0 1 17.831724 17.831724z m594.696827 0a17.831724 17.831724 0 0 1-17.831724 17.831725H600.637793a17.831724 17.831724 0 1 1 0-35.672276h356.819862a17.831724 17.831724 0 0 1 17.840552 17.831724z m-437.698206 0a17.831724 17.831724 0 0 1-17.840552 17.831725h-2.383448a17.831724 17.831724 0 1 1 0-35.672276h2.383448a17.831724 17.831724 0 0 1 17.840552 17.831724z m-73.745656 0a17.831724 17.831724 0 0 1-17.831724 17.831725h-2.383448a17.831724 17.831724 0 1 1 0-35.672276h2.383448a17.831724 17.831724 0 0 1 17.831724 17.831724z" fill="#152E4A" />
                  </svg>
                </div>

                <div className={styles.content}>
                  <h1>Scalability</h1>
                  <p>A cloud-based phone solution is highly scalable, which means that it can grow with your business. As your business expands, you can easily add new phone lines or features, without having to purchase new hardware or equipment. This flexibility allows you to adapt to changing business needs, and ensures that you always have the right number of phone lines and features to meet your requirements.
                  </p>
                </div>
              </div>

              <div className={styles.benefitBox}>
                <div className={styles.itemIcon}>
                  <svg class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M440.4 981.2L338.4 928v-341.6l36-28.4 58.4-47.6c14.8-12 23.6-18.8 23.6-18.8l1.2-0.8 10-10c54-54.8 84-128.8 84-206V264c0-0.8 0.8-0.8 0.8-0.8l0.4 0.4c23.6 18.8 51.6 52 51.6 102.4v196.8H968c8.4 0 14 3.6 17.6 6.4 0.8 0.4 1.2 1.2 2 2 1.2 1.2 2.4 2.8 3.6 4 3.2 4.8 4.8 10 4.8 15.6v23.2c0 5.6-1.6 10.8-4.8 15.6-0.8 1.6-2 2.8-3.6 4-0.8 0.8-1.2 1.2-2 1.6-3.6 2.8-9.6 6.4-17.6 6.4h-5.2c-10.4 0-19.2 7.6-21.2 17.6l-0.4 1.6c-2 11.6 5.6 22.4 16.8 24.8H959.2c0.4 0 1.2 0.4 2 0.4 5.2 1.6 10.4 4.4 14 8.4l0.8 0.8c3.2 4 5.6 9.6 6.4 14.8V738.4c0 8-3.6 16-10 21.2-5.2 4.4-12 6.4-19.2 6.4h-12.4c-10 0-18.8 6.8-21.2 16.8-3.2 13.2 6.4 26.4 20 27.2h0.4c14.8 0.8 26 13.2 26 27.6v25.6c0 15.2-12.4 28-28 28h-1.2c-14 0-25.2 11.2-25.2 25.2 0 9.6 5.6 18 14 22.4 4.8 2.4 8.8 6 8.8 10v18.4c0 7.6-6.4 14-14 14h-480z" fill="#F5F8FA" /><path d="M938 920h-32v-13.2h32c23.6 0 43.2-19.2 43.2-43.2v-25.6c0-11.6-4.4-22.4-12.8-30.4-8-8-18.8-12.8-30.4-12.8h-3.2v-13.2h3.2c15.2 0 29.2 6 39.6 16.4s16.4 24.8 16.4 39.6v25.6c0.4 31.6-24.8 56.8-56 56.8z" fill="#152E4A" />
                    <path d="M920.8 1009.6H433.2l-123.2-64.4v-372.4l46.8-37.2 8 10.4-42 33.2v358.4l113.2 59.2h484.4c16 0 29.2-13.2 29.2-29.2v-18.4c0-16-13.2-29.2-29.2-29.2h-2.4v-13.2h2.4c23.2 0 42 18.8 42 42v18.4c0.8 23.6-18 42.4-41.6 42.4z" fill="#152E4A" />
                    <path d="M323.2 996.8h-228V512.4h228.4v484.4zM108 983.6h202V525.6H108v458z" fill="#152E4A" />
                    <path d="M128.8 546h160.8v416.8H128.8z" fill="#82C7E6" />
                    <path d="M209.2 658c-25.2 0-46-20.8-46-46s20.8-46 46-46 46 20.8 46 46c0 25.6-20.8 46-46 46z m0-78.8c-18 0-32.8 14.8-32.8 32.8 0 18 14.8 32.8 32.8 32.8s32.8-14.8 32.8-32.8c0-18-14.8-32.8-32.8-32.8zM530.4 996.4h363.2v13.2h-363.2zM963.2 669.6h-208.8c-37.2 0-67.6-30.4-67.6-67.6s30.4-67.6 67.6-67.6h114v13.2h-114c-30 0-54.8 24.4-54.8 54.8s24.4 54.8 54.8 54.8h208.8v12.4z" fill="#152E4A" />
                    <path d="M876.4 794.8H756c-38 0-69.2-30.8-69.2-69.2s30.8-69.2 69.2-69.2h112.8v13.2H756c-30.8 0-56 25.2-56 56s25.2 56 56 56h120.4v13.2z" fill="#152E4A" />
                    <path d="M876.4 920H756c-38 0-69.2-30.8-69.2-69.2s30.8-69.2 69.2-69.2h112.8v13.2H756c-30.8 0-56 25.2-56 56s25.2 56 56 56h120.4v13.2z" fill="#152E4A" />
                    <path d="M876.4 1009.6h-138.4c-28.4 0-51.6-23.2-51.6-51.6s23.2-51.6 51.6-51.6h130.4v13.2h-130.4c-21.2 0-38.4 17.2-38.4 38.4s17.2 38.4 38.4 38.4h138.4v13.2z" fill="#152E4A" />
                    <path d="M850.8 781.6h86.8v13.2h-86.8z" fill="#152E4A" />
                    <path d="M825.2 906.8H912v13.2h-86.8z" fill="#152E4A" />
                    <path d="M108 996.8H0v-13.2h95.2V524L0 498.8v-12.8l108 28z" fill="#152E4A" />
                    <path d="M0 964.4V518.8l75.6 20v425.6z" fill="#152E4A" />
                    <path d="M920.8 1009.6H433.2l-123.2-64.4v-372.4l46.8-37.2 58-47.2c13.6-11.2 22-17.6 24-19.2l8.4-8.8c49.2-50 76-116 76-186v-10.8c0-16 13.2-29.2 29.2-29.2 6.8 0 12.8 2.4 18 6.4 28.4 22.8 62 62.8 62 124.4v168.8H968c13.2 0 25.6 4.4 35.6 12.8 1.2 1.2 2.8 2.4 4 3.6 2.4 2.4 4.8 5.2 6.8 8.4 6.4 9.2 9.6 20 9.6 31.6v23.2c0 11.2-3.2 22-9.6 31.6-2 2.8-4.4 5.6-6.8 8.4-1.2 1.2-2.4 2.4-4 3.6-5.2 4.4-10.8 7.6-17.2 9.6 3.6 2.4 7.2 5.6 10.4 9.2l0.8 0.8c7.2 8.8 12 19.6 13.2 30.8 0 2 0.4 3.6 0.4 5.6v25.6c0 11.2-3.2 22-9.6 31.6-7.2 10.8-18 18.8-30 22.4 14 10.4 23.2 26.8 23.2 45.6v25.6c0 26.8-18.8 49.6-44.4 54.8 8 7.6 12.8 18.4 12.8 30.4v18.4c0 23.2-18.8 42-42.4 42z m-484.4-13.2h484.4c16 0 29.2-13.2 29.2-29.2v-18.4c0-16-13.2-29.2-29.2-29.2v-13.2h17.2c23.6 0 43.2-19.2 43.2-43.2v-25.6c0-22.8-18-41.6-40.8-42.8l-8-0.4 3.2-12.8h18.8c14.4 0 27.6-7.2 35.6-19.2 4.8-7.2 7.2-15.6 7.2-24v-25.6c0-1.6 0-2.8-0.4-4.4-0.8-8.4-4.4-16.8-10-23.6l-0.8-0.8c-5.6-6.4-13.2-10.8-20.8-13.2l0.4-1.6h-0.4l-0.4 1.6c-1.2-0.4-2-0.4-3.2-0.8l-6.8-1.2 1.6-7.2 0.8-5.2h10c10 0 19.6-3.6 27.6-10 1.2-0.8 2-2 3.2-2.8 2-2 3.6-4 5.2-6.4 4.8-7.2 7.2-15.6 7.2-24v-23.2c0-8.8-2.4-16.8-7.2-24-1.6-2.4-3.2-4.4-5.2-6.4-0.8-0.8-2-2-3.2-2.8-7.6-6.4-17.6-10-27.6-10H620V365.6c0-56.4-31.2-93.2-57.2-114.4-2.8-2.4-6.4-3.6-10-3.6-7.6 0-16 6-16 16v10.8c0 73.6-28.4 142.8-79.6 195.2l-9.6 9.6s-9.2 6.8-24 19.2l-58.4 47.2-42 33.2v358.4l113.2 59.2z" fill="#152E4A" />
                    <path d="M489.6 752.8c-37.6 0-68-13.2-68.4-13.2l5.2-12c0.4 0 23.6 10.4 54 12 40 2.4 72-10.4 96-37.6 50-57.2 44-160 44-160.8l13.2-0.8c0 1.2 1.6 27.6-3.2 61.6-4.4 32-16 76.4-44 108.8-29.2 32.8-65.6 42-96.8 42z" fill="#152E4A" />
                    <path d="M561.6 14.4h13.2v135.2h-13.2z" fill="#152E4A" />
                    <path d="M708 315.2h135.2v13.2H708z" fill="#152E4A" />
                    <path d="M289.6 315.2h135.2v13.2H289.6z" fill="#152E4A" />
                    <path d="M681.2 211.6l-10-8.4 8.4-10 10 8.4-8.4 10z m16.8-20l-10-8.4 8.4-10 10 8.4-8.4 10z m16.8-20l-10-8.4 8.4-10 10 8.4-8.4 10z m16.8-20.4l-10-8.4 8.4-10 10 8.4-8.4 10z m16.8-20l-10-8.4 8.4-10 10 8.4-8.4 10z" fill="#152E4A" />
                    <path d="M442 211.6l-8.4-10 10-8.4 8.4 10-10 8.4z m-16.8-20l-8.4-10 10-8.4 8.4 10-10 8.4z m-16.8-20l-8.4-10 10-8.4 8.4 10-10 8.4z m-16.8-20l-8.4-10 10-8.4 8.4 10-10 8.4z m-16.8-20.4l-8.4-10 10-8.4 8.4 10-10 8.4z" fill="#152E4A" />
                  </svg>
                </div>

                <div className={styles.content}>
                  <h1>Remote Work</h1>
                  <p>With a cloud-based phone solution, your employees can work from anywhere, as long as they have an internet connection. This is especially important in today's world, where remote work has become the norm. Cloud-based phone solutions allow your employees to stay connected, even when they are working from home or on the go.</p>
                </div>
              </div>

              <div className={styles.benefitBox}>
                <div className={styles.itemIcon}>
                  <svg class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M94.332171 13.490539m55.715928 0l666.365193 0q55.715928 0 55.715928 55.715928l0 885.586459q0 55.715928-55.715928 55.715928l-666.365193 0q-55.715928 0-55.715928-55.715928l0-885.586459q0-55.715928 55.715928-55.715928Z" fill="#82C7E6" />
                    <path d="M826.463744 14.434877v995.129639a55.78338 55.78338 0 0 0 45.732929-54.77159V69.206467a55.78338 55.78338 0 0 0-45.732929-54.77159z" fill="##F5F8FA" />
                    <path d="M140.0651 14.434877v995.129639a55.78338 55.78338 0 0 1-45.732929-54.77159V69.206467a55.78338 55.78338 0 0 1 45.732929-54.77159z" fill="#FFFFFF" />
                    <path d="M813.85009 1023.999393H147.484896A69.27392 69.27392 0 0 1 78.278429 954.792926V357.971463a13.490539 13.490539 0 0 1 26.981079 0v596.821463a42.292841 42.292841 0 0 0 42.225388 42.225388h666.365194a42.292841 42.292841 0 0 0 42.225388-42.225388V69.206467A42.292841 42.292841 0 0 0 813.85009 26.981079H147.484896A42.292841 42.292841 0 0 0 105.259508 69.206467v60.707427a13.490539 13.490539 0 0 1-26.981079 0v-60.707427A69.27392 69.27392 0 0 1 147.484896 0h666.365194a69.27392 69.27392 0 0 1 69.206467 69.206467v885.586459a69.27392 69.27392 0 0 1-69.206467 69.206467z" fill="#152E4A" />
                    <path d="M91.768968 295.442813a13.490539 13.490539 0 0 1-13.490539-13.49054V205.933084a13.490539 13.490539 0 0 1 26.981079 0V281.952273a13.490539 13.490539 0 0 1-13.49054 13.49054z" fill="#152E4A" />
                    <path d="M91.768968 801.270587h777.797049v161.886473a47.216888 47.216888 0 0 1-47.216887 47.216888H138.985856a47.216888 47.216888 0 0 1-47.216888-47.216888v-161.886473z" fill="#FFFFFF" /><path d="M832.601939 801.270587v161.886473a47.216888 47.216888 0 0 1-47.216887 47.216888H820.258096a47.216888 47.216888 0 0 0 47.216888-47.216888v-161.886473z" fill="#DCDDDD" />
                    <path d="M822.079319 1023.999393H138.985856a60.707427 60.707427 0 0 1-60.707427-60.707427v-175.377013h804.778128v175.377013a60.707427 60.707427 0 0 1-60.977238 60.707427zM105.259508 814.761127v148.395933a33.726348 33.726348 0 0 0 33.726348 33.726349h683.093463a33.726348 33.726348 0 0 0 33.726348-33.726349v-148.395933z" fill="#152E4A" />
                    <path d="M480.701219 905.889721m-62.798461 0a62.798461 62.798461 0 1 0 125.596922 0 62.798461 62.798461 0 1 0-125.596922 0Z" fill="#00A0E9" />
                    <path d="M480.701219 982.178721A76.289 76.289 0 1 1 557.192578 905.889721a76.356453 76.356453 0 0 1-76.491359 76.289z m0-125.596922A49.307921 49.307921 0 1 0 530.211499 905.889721a49.375374 49.375374 0 0 0-49.51028-49.240469z" fill="#152E4A" /></svg>
                </div>

                <div className={styles.content}>
                  <h1>Advanced Features</h1>
                  <p>A cloud-based phone solution offers a range of advanced features that are not available with traditional phone systems. These features include call recording, voicemail-to-email, call forwarding, and more. These features can help your business operate more efficiently, and provide a better customer experience.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className={styles.productVideo}>
        <div className="container">
          <div className="video-card">
            <img src={"/assets/videos/video-img.jpg"} className="img-btn" />
            <a id="m-play-video" className="video-play-btn" href="#">
              <svg class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <path d="M732.502883 465.602819c-107.883492-82.3454-215.772403-164.681769-323.652282-247.014525-38.414608-29.327534-93.780555-1.929039-93.780555 46.396277v494.029051c0 48.325316 55.365948 75.725617 93.780555 46.398084 107.87988-82.332757 215.76879-164.669126 323.652282-247.014525 30.61356-23.357989 30.61356-69.436372 0-92.794362z" fill="#231815"></path>
              </svg>
            </a>
          </div>

          <div id="m-video-overlay" className="m-video-overlay">
            <a className="m-video-overlay-close">&times;</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductReview;