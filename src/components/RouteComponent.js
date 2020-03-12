import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import Home from "./Home";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PortfolioPage from "./pages/PortfolioPage";
import PricingPage from "./pages/PricingPage";
import ClientsPage from "./pages/ClientsPage";
class RouteComponent extends Component {
    state = {  }
    render() { 
        return (  
        <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/portfolio" component={PortfolioPage} />
              <Route path="/pricing" component={PricingPage} />
              <Route path="/clients" component={ClientsPage} />
              <Route path="/contact" component={ContactPage} />
            </Switch>
          </Router> );
    }
}
 
export default RouteComponent;