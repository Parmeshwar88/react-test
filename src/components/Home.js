import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagetile: "Home Page"
    };
  }
  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>{this.state.pagetile}</title>
        </Helmet>
        <Header />
        <Content></Content>
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default Home;
