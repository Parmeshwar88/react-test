import React, { Component } from "react";
class Content extends Component {
  state = {};
  render() {
    return (
      <div>
        <section>
          <div id="home" className="slider-area">
            <div className="bd-example">
              <div
                id="carouselOne"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselOne"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li data-target="#carouselOne" data-slide-to="1"></li>
                  <li data-target="#carouselOne" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner">
                  <div
                    className="carousel-item bg_cover active"
                    style={{
                      backgroundImage: `url("assets/images/slider-1.jpg")`
                    }}
                  >
                    <div className="carousel-caption">
                      <div className="container">
                        <div className="row justify-content-center">
                          <div className="col-xl-6 col-lg-7 col-sm-10">
                            <h2 className="carousel-title">
                              Refreshing Design & Easy to Customize
                            </h2>
                            <ul className="carousel-btn rounded-buttons">
                              <li>
                                <a className="main-btn rounded-three" href="#">
                                  GET STARTED
                                </a>
                              </li>
                              <li>
                                <a className="main-btn rounded-one" href="#">
                                  DOWNLOAD
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="carousel-item bg_cover"
                    style={{
                      backgroundImage: `url("assets/images/slider-1.jpg")`
                    }}
                  >
                    <div className="carousel-caption">
                      <div className="container">
                        <div className="row justify-content-center">
                          <div className="col-xl-6 col-lg-7 col-sm-10">
                            <h2 className="carousel-title">
                              Based on Latest Bootstrap & HTML5
                            </h2>
                            <ul className="carousel-btn rounded-buttons">
                              <li>
                                <a className="main-btn rounded-three" href="#">
                                  GET STARTED
                                </a>
                              </li>
                              <li>
                                <a className="main-btn rounded-one" href="#">
                                  DOWNLOAD
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="carousel-item bg_cover"
                    style={{
                      backgroundImage: `url("assets/images/slider-1.jpg")`
                    }}
                  >
                    <div className="carousel-caption">
                      <div className="container">
                        <div className="row justify-content-center">
                          <div className="col-xl-6 col-lg-7 col-sm-10">
                            <h2 className="carousel-title">
                              Multi-purpose Landing Page Template
                            </h2>
                            <ul className="carousel-btn rounded-buttons">
                              <li>
                                <a className="main-btn rounded-three" href="#">
                                  GET STARTED
                                </a>
                              </li>
                              <li>
                                <a className="main-btn rounded-one" href="#">
                                  DOWNLOAD
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselOne"
                  role="button"
                  data-slide="prev"
                >
                  <i className="lni-arrow-left-circle"></i>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselOne"
                  role="button"
                  data-slide="next"
                >
                  <i className="lni-arrow-right-circle"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="about-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8">
                <div
                  className="about-image text-center wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-offset="100"
                >
                  <img src="assets/images/services.png" alt="services" />
                </div>
                <div className="section-title text-center mt-30 pb-40">
                  <h4
                    className="title wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay="0.6s"
                  >
                    The future of designing starts here
                  </h4>
                  <p
                    className="text wow fadeInUp"
                    data-wow-duration="1.5s"
                    data-wow-delay="1s"
                  >
                    An open platform for presentations and content
                    collaboration. Sign up to get early access.
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div
                  className="single-about d-sm-flex mt-30 wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="1.2s"
                >
                  <div className="about-icon">
                    <img src="assets/images/icon-1.png" alt="Icon" />
                  </div>
                  <div className="about-content media-body">
                    <h4 className="about-title">Powerful templates</h4>
                    <p className="text">
                      Poorly designed presentations are a thing of the past.
                      Create beautiful and high-quality content that is aligned.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="single-about d-sm-flex mt-30 wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="1.4s"
                >
                  <div className="about-icon">
                    <img src="assets/images/icon-2.png" alt="Icon" />
                  </div>
                  <div className="about-content media-body">
                    <h4 className="about-title">Designed for everyone</h4>
                    <p className="text">
                      Poorly designed presentations are a thing of the past.
                      Create beautiful and high-quality content that is aligned.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="single-about d-sm-flex mt-30 wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="1.6s"
                >
                  <div className="about-icon">
                    <img src="assets/images/icon-3.png" alt="Icon" />
                  </div>
                  <div className="about-content media-body">
                    <h4 className="about-title">Work anywhere</h4>
                    <p className="text">
                      Poorly designed presentations are a thing of the past.
                      Create beautiful and high-quality content that is aligned.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="single-about d-sm-flex mt-30 wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="1.8s"
                >
                  <div className="about-icon">
                    <img src="assets/images/icon-4.png" alt="Icon" />
                  </div>
                  <div className="about-content media-body">
                    <h4 className="about-title">Updated in real time</h4>
                    <p className="text">
                      Poorly designed presentations are a thing of the past.
                      Create beautiful and high-quality content that is aligned.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio" className="portfolio-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center pb-20">
                  <h3 className="title">Our Portfolio</h3>
                  <p className="text">
                    Stop wasting time and money designing and managing a website
                    that doesn’t get results. Happiness guaranteed!
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="portfolio-menu pt-30 text-center">
                  <ul>
                    <li data-filter="*" className="active">
                      ALL WORK
                    </li>
                    <li data-filter=".branding-3">BRANDING</li>
                    <li data-filter=".marketing-3">MARKETING</li>
                    <li data-filter=".planning-3">PLANNING</li>
                    <li data-filter=".research-3">RESEARCH</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row grid">
              <div className="col-lg-4 col-sm-6 branding-3 planning-3">
                <div
                  className="single-portfolio mt-30 wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                >
                  <div className="portfolio-image">
                    <img src="assets/images/portfolio-1.png" alt="" />
                    <div className="portfolio-overlay d-flex align-items-center justify-content-center">
                      <div className="portfolio-content">
                        <div className="portfolio-icon">
                          <a
                            className="image-popup"
                            href="assets/images/portfolio-1.png"
                          >
                            <i className="lni-zoom-in"></i>
                          </a>
                        </div>
                        <div className="portfolio-icon">
                          <a href="#">
                            <i className="lni-link"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-text">
                    <h4 className="portfolio-title">
                      <a href="#">Graphics Design</a>
                    </h4>
                    <p className="text">
                      Short description for the ones who look for something new.
                      Awesome!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 marketing-3 research-3">
                <div
                  className="single-portfolio mt-30 wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.4s"
                >
                  <div className="portfolio-image">
                    <img src="assets/images/portfolio-2.png" alt="" />
                    <div className="portfolio-overlay d-flex align-items-center justify-content-center">
                      <div className="portfolio-content">
                        <div className="portfolio-icon">
                          <a
                            className="image-popup"
                            href="assets/images/portfolio-2.png"
                          >
                            <i className="lni-zoom-in"></i>
                          </a>
                        </div>
                        <div className="portfolio-icon">
                          <a href="#">
                            <i className="lni-link"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-text">
                    <h4 className="portfolio-title">
                      <a href="#">Graphics Design</a>
                    </h4>
                    <p className="text">
                      Short description for the ones who look for something new.
                      Awesome!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 branding-3 marketing-3">
                <div
                  className="single-portfolio mt-30 wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.7s"
                >
                  <div className="portfolio-image">
                    <img src="assets/images/portfolio-3.png" alt="" />
                    <div className="portfolio-overlay d-flex align-items-center justify-content-center">
                      <div className="portfolio-content">
                        <div className="portfolio-icon">
                          <a
                            className="image-popup"
                            href="assets/images/portfolio-3.png"
                          >
                            <i className="lni-zoom-in"></i>
                          </a>
                        </div>
                        <div className="portfolio-icon">
                          <a href="#">
                            <i className="lni-link"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-text">
                    <h4 className="portfolio-title">
                      <a href="#">Graphics Design</a>
                    </h4>
                    <p className="text">
                      Short description for the ones who look for something new.
                      Awesome!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 planning-3 research-3">
                <div
                  className="single-portfolio mt-30 wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                >
                  <div className="portfolio-image">
                    <img src="assets/images/portfolio-4.png" alt="" />
                    <div className="portfolio-overlay d-flex align-items-center justify-content-center">
                      <div className="portfolio-content">
                        <div className="portfolio-icon">
                          <a
                            className="image-popup"
                            href="assets/images/portfolio-4.png"
                          >
                            <i className="lni-zoom-in"></i>
                          </a>
                        </div>
                        <div className="portfolio-icon">
                          <a href="#">
                            <i className="lni-link"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-text">
                    <h4 className="portfolio-title">
                      <a href="#">Graphics Design</a>
                    </h4>
                    <p className="text">
                      Short description for the ones who look for something new.
                      Awesome!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 marketing-3">
                <div
                  className="single-portfolio mt-30 wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.4s"
                >
                  <div className="portfolio-image">
                    <img src="assets/images/portfolio-5.png" alt="" />
                    <div className="portfolio-overlay d-flex align-items-center justify-content-center">
                      <div className="portfolio-content">
                        <div className="portfolio-icon">
                          <a
                            className="image-popup"
                            href="assets/images/portfolio-5.png"
                          >
                            <i className="lni-zoom-in"></i>
                          </a>
                        </div>
                        <div className="portfolio-icon">
                          <a href="#">
                            <i className="lni-link"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-text">
                    <h4 className="portfolio-title">
                      <a href="#">Graphics Design</a>
                    </h4>
                    <p className="text">
                      Short description for the ones who look for something new.
                      Awesome!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 planning-3">
                <div
                  className="single-portfolio mt-30 wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.7s"
                >
                  <div className="portfolio-image">
                    <img src="assets/images/portfolio-6.png" alt="" />
                    <div className="portfolio-overlay d-flex align-items-center justify-content-center">
                      <div className="portfolio-content">
                        <div className="portfolio-icon">
                          <a
                            className="image-popup"
                            href="assets/images/portfolio-6.png"
                          >
                            <i className="lni-zoom-in"></i>
                          </a>
                        </div>
                        <div className="portfolio-icon">
                          <a href="#">
                            <i className="lni-link"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-text">
                    <h4 className="portfolio-title">
                      <a href="#">Graphics Design</a>
                    </h4>
                    <p className="text">
                      Short description for the ones who look for something new.
                      Awesome!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="pricing-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center pb-20">
                  <h3 className="title">Pricing Plan</h3>
                  <p className="text">
                    Stop wasting time and money designing and managing a website
                    that doesn’t get results. Happiness guaranteed!
                  </p>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-7 col-sm-9">
                <div
                  className="pricing-style-one mt-40 wow fadeIn"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                >
                  <div className="pricing-icon text-center">
                    <img src="assets/images/wman.svg" alt="" />
                  </div>
                  <div className="pricing-header text-center">
                    <h5 className="sub-title">Basic</h5>
                    <p className="month">
                      <span className="price">$ 199</span>/month
                    </p>
                  </div>
                  <div className="pricing-list">
                    <ul>
                      <li>
                        <i className="lni-check-mark-circle"></i> Carefully
                        crafted components
                      </li>
                      <li>
                        <i className="lni-check-mark-circle"></i> Amazing page
                        examples
                      </li>
                    </ul>
                  </div>
                  <div className="pricing-btn rounded-buttons text-center">
                    <a className="main-btn rounded-three" href="#">
                      GET STARTED
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-7 col-sm-9">
                <div
                  className="pricing-style-one mt-40 wow fadeIn"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.5s"
                >
                  <div className="pricing-icon text-center">
                    <img src="assets/images/wman.svg" alt="" />
                  </div>
                  <div className="pricing-header text-center">
                    <h5 className="sub-title">Pro</h5>
                    <p className="month">
                      <span className="price">$ 399</span>/month
                    </p>
                  </div>
                  <div className="pricing-list">
                    <ul>
                      <li>
                        <i className="lni-check-mark-circle"></i> Carefully
                        crafted components
                      </li>
                      <li>
                        <i className="lni-check-mark-circle"></i> Amazing page
                        examples
                      </li>
                    </ul>
                  </div>
                  <div className="pricing-btn rounded-buttons text-center">
                    <a className="main-btn rounded-three" href="#">
                      GET STARTED
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-7 col-sm-9">
                <div
                  className="pricing-style-one mt-40 wow fadeIn"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.8s"
                >
                  <div className="pricing-icon text-center">
                    <img src="assets/images/wman.svg" alt="" />
                  </div>
                  <div className="pricing-header text-center">
                    <h5 className="sub-title">Enterprise</h5>
                    <p className="month">
                      <span className="price">$ 699</span>/month
                    </p>
                  </div>
                  <div className="pricing-list">
                    <ul>
                      <li>
                        <i className="lni-check-mark-circle"></i> Carefully
                        crafted components
                      </li>
                      <li>
                        <i className="lni-check-mark-circle"></i> Amazing page
                        examples
                      </li>
                    </ul>
                  </div>
                  <div className="pricing-btn rounded-buttons text-center">
                    <a className="main-btn rounded-three" href="#">
                      GET STARTED
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="call-action" className="call-action-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="call-action-content mt-45">
                  <h3 className="action-title">Get latest updates!</h3>
                  <p className="text">We never spam your email</p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="call-action-form mt-50">
                  <form action="#">
                    <input type="text" placeholder="Enter your email" />
                    <div className="action-btn rounded-buttons">
                      <button className="main-btn rounded-three">
                        subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonial" className="testimonial-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center pb-20">
                  <h3 className="title">Testimonial</h3>
                  <p className="text">
                    Stop wasting time and money designing and managing a website
                    that doesn’t get results. Happiness guaranteed!
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="row testimonial-active">
                  <div className="col-lg-4">
                    <div className="single-testimonial mt-30 mb-30 text-center">
                      <div className="testimonial-image">
                        <img src="assets/images/author-3.jpg" alt="Author" />
                      </div>
                      <div className="testimonial-content">
                        <p className="text">
                          Stop wasting time and money designing and managing a
                          website that doesn’t get results. Happiness
                          guaranteed! Stop wasting time and money designing and
                          managing a website that doesn’t get results. Happiness
                          guaranteed!
                        </p>
                        <h6 className="author-name">Isabela Moreira</h6>
                        <span className="sub-title">CEO, GrayGrids</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="single-testimonial mt-30 mb-30 text-center">
                      <div className="testimonial-image">
                        <img src="assets/images/author-1.jpg" alt="Author" />
                      </div>
                      <div className="testimonial-content">
                        <p className="text">
                          Stop wasting time and money designing and managing a
                          website that doesn’t get results. Happiness
                          guaranteed! Stop wasting time and money designing and
                          managing a website that doesn’t get results. Happiness
                          guaranteed!
                        </p>
                        <h6 className="author-name">Fiona</h6>
                        <span className="sub-title">Lead Designer, UIdeck</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="single-testimonial mt-30 mb-30 text-center">
                      <div className="testimonial-image">
                        <img src="assets/images/author-2.jpg" alt="Author" />
                      </div>
                      <div className="testimonial-content">
                        <p className="text">
                          Stop wasting time and money designing and managing a
                          website that doesn’t get results. Happiness
                          guaranteed! Stop wasting time and money designing and
                          managing a website that doesn’t get results. Happiness
                          guaranteed!
                        </p>
                        <h6 className="author-name">Elon Musk</h6>
                        <span className="sub-title">CEO, SpaceX</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="single-testimonial mt-30 mb-30 text-center">
                      <div className="testimonial-image">
                        <img src="assets/images/author-4.jpg" alt="Author" />
                      </div>
                      <div className="testimonial-content">
                        <p className="text">
                          Stop wasting time and money designing and managing a
                          website that doesn’t get results. Happiness
                          guaranteed! Stop wasting time and money designing and
                          managing a website that doesn’t get results. Happiness
                          guaranteed!
                        </p>
                        <h6 className="author-name">Fajar Siddiq</h6>
                        <span className="sub-title">CEO, MakerFlix</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="client" className="client-logo-area">
          <div className="container">
            <div className="row client-active">
              <div className="col-lg-3">
                <div className="single-client text-center">
                  <img src="assets/images/client_logo_01.png" alt="Logo" />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="single-client text-center">
                  <img src="assets/images/client_logo_02.png" alt="Logo" />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="single-client text-center">
                  <img src="assets/images/client_logo_03.png" alt="Logo" />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="single-client text-center">
                  <img src="assets/images/client_logo_04.png" alt="Logo" />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="single-client text-center">
                  <img src="assets/images/client_logo_05.png" alt="Logo" />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="single-client text-center">
                  <img src="assets/images/client_logo_06.png" alt="Logo" />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="single-client text-center">
                  <img src="assets/images/client_logo_07.png" alt="Logo" />
                </div>
              </div>
              <div className="col-lg-3">
                <div className="single-client text-center">
                  <img src="assets/images/client_logo_08.png" alt="Logo" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="contact-area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="section-title text-center pb-20">
                  <h3 className="title">Get in touch</h3>
                  <p className="text">
                    Stop wasting time and money designing and managing a website
                    that doesn’t get results. Happiness guaranteed!
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div
                  className="contact-two mt-50 wow fadeIn"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                >
                  <h4 className="contact-title">Lets talk about the project</h4>
                  <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Ullam unde repellendus delectus facilis quia consequatur
                    maxime perferendis! Sequi, modi consequatur.
                  </p>
                  <ul className="contact-info">
                    <li>
                      <i className="lni-money-location"></i> Elizabeth St,
                      Melbourne, Australia
                    </li>
                    <li>
                      <i className="lni-phone-handset"></i> +333 789-321-654
                    </li>
                    <li>
                      <i className="lni-envelope"></i> hello@ayroui.com
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="contact-form form-style-one mt-35 wow fadeIn"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.5s"
                >
                  <form id="contact-form" action="#" method="post">
                    <div className="form-input mt-15">
                      <label>Name</label>
                      <div className="input-items default">
                        <input type="text" placeholder="Name" name="name" />
                        <i className="lni-user"></i>
                      </div>
                    </div>
                    <div className="form-input mt-15">
                      <label>Email</label>
                      <div className="input-items default">
                        <input type="email" placeholder="Email" name="email" />
                        <i className="lni-envelope"></i>
                      </div>
                    </div>
                    <div className="form-input mt-15">
                      <label>Massage</label>
                      <div className="input-items default">
                        <textarea
                          placeholder="Massage"
                          name="massage"
                        ></textarea>
                        <i className="lni-pencil-alt"></i>
                      </div>
                    </div>
                    <p className="form-message"></p>
                    <div className="form-input rounded-buttons mt-20">
                      <button type="submit" className="main-btn rounded-three">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Content;
