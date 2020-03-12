import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Helmet } from "react-helmet";
class PortfolioPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagetile: "Portfolio Page"
    };
  }
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>{this.state.pagetile}</title>
        </Helmet>
        <Header />
        <section id="portfolio" className="portfolio-area pricing-area mt-50">
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
        <Footer />
      </React.Fragment>
    );
  }
}

export default PortfolioPage;
