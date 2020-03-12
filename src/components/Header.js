import React, { Component } from "react";
import { BrowserRouter as Router, Link,NavLink } from "react-router-dom";
class Header extends Component {
  state = {};
  render() {
    
    return (
      <div>
        {/* <div className="preloader">
          <div className="loader">
            <div className="ytp-spinner">
              <div className="ytp-spinner-container">
                <div className="ytp-spinner-rotator">
                  <div className="ytp-spinner-left">
                    <div className="ytp-spinner-circle"></div>
                  </div>
                  <div className="ytp-spinner-right">
                    <div className="ytp-spinner-circle"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <section className="header-area">
          <div className="navbar-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="#">
                      <img src="assets/images/logo.png" alt="Logo" />
                    </a>

                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarEight"
                      aria-controls="navbarEight"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="toggler-icon"></span>
                      <span className="toggler-icon"></span>
                      <span className="toggler-icon"></span>
                    </button>

                    <div
                      className="collapse navbar-collapse sub-menu-bar"
                      id="navbarEight"
                    >
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                          <NavLink exact to={"/"}  activeClassName="active">Home</NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink to={"/about"} activeClassName="active">ABOUT</NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink to="/portfolio" activeClassName="active">PORTFOLIO</NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink to="/pricing" activeClassName="active">PRICING</NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink to="/clients" activeClassName="active">CLIENTS</NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink to="/contact" activeClassName="active">CONTACT</NavLink>
                        </li>
                      </ul>
                    </div>
                    <div className="navbar-btn d-none mt-15 d-lg-inline-block">
                      <a className="menu-bar" href="#side-menu-right">
                        <i className="lni-menu"></i>
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Header;
