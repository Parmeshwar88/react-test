import React, { Component } from 'react';
class Footer extends Component {
    state = {  }
    render() { 
        return (
        <footer id="footer" className="footer-area">
        <div className="footer-widget">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6">
                        <div className="footer-link">
                            <h6 className="footer-title">Company</h6>
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Profile</a></li>
                            </ul>
                        </div> 
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="footer-link">
                            <h6 className="footer-title">Solutions</h6>
                            <ul>
                                <li><a href="#">Facilities Services</a></li>
                                <li><a href="#">Workplace Staffing</a></li>
                                <li><a href="#">Project Management</a></li>
                            </ul>
                        </div> 
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="footer-link">
                            <h6 className="footer-title">Product & Services</h6>
                            <ul>
                                <li><a href="#">Products</a></li>
                                <li><a href="#">Business</a></li>
                                <li><a href="#">Developer</a></li>
                            </ul>
                        </div> 
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="footer-link">
                            <h6 className="footer-title">Help & Suuport</h6>
                            <ul>
                                <li><a href="#">Support Center</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                            </ul>
                        </div> 
                    </div>
                </div> 
            </div> 
        </div> 
        
        <div className="footer-copyright">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="copyright text-center text-lg-left mt-10">
                            <p className="text">Crafted by <a  rel="nofollow" href="https://uideck.con">UIdeck</a> and UI Elements from <a  rel="nofollow" href="https://ayroui.com">Ayro UI</a></p>
                        </div> 
                    </div>
                    <div className="col-lg-2">
                        <div className="footer-logo text-center mt-10">
                            <a href="index.html"><img src="assets/images/logo-2.svg" alt="Logo"/></a>
                        </div> 
                    </div>
                    <div className="col-lg-5">
                        <ul className="social text-center text-lg-right mt-10">
                            <li><a href="https://facebook.com/uideckHQ"><i className="lni-facebook-filled"></i></a></li>
                            <li><a href="https://twitter.com/uideckHQ"><i className="lni-twitter-original"></i></a></li>
                            <li><a href="https://instagram.com/uideckHQ"><i className="lni-instagram-original"></i></a></li>
                            <li><a href="#"><i className="lni-linkedin-original"></i></a></li>
                        </ul> 
                    </div>
                </div> 
            </div> 
        </div> 
    </footer>  );
    }
}
 
export default Footer;