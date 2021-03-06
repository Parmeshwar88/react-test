import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Helmet } from "react-helmet";
class ClientsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagetile: "Clients Page"
    };
  }
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>{this.state.pagetile}</title>
        </Helmet>
        <Header />
        <section id="testimonial" className="testimonial-area mt-50">
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
        <Footer />
      </React.Fragment>
    );
  }
}

export default ClientsPage;
