import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "../Header";
import Footer from "../Footer";

class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagetile: "About Page"
    };
  }
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>{this.state.pagetile}</title>
        </Helmet>
        <Header />
        <section id="about" className="about-area mt-50">
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
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default AboutPage;
