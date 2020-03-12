import React, { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Helmet } from "react-helmet";
class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagetile: "Contact Page"
    };
  }
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>{this.state.pagetile}</title>
        </Helmet>
        <Header />
        <section id="contact" className="contact-area mt-50">
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
        <Footer />
        </React.Fragment>
    );
  }
}

export default ContactPage;
