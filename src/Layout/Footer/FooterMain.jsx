import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({logo}) => {
    return (
        <footer id="rs-footer" className="rs-footer footer-main-home">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 pr-20 md-pr-15 md-mb-20">
                            <div className="footer-logo mb-51 md-mb-30">
                                <Link to="/"><img src={logo} alt="Logo" /></Link>
                            </div>
                            <div className="textwidget">
                                <p className="pb-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                <p className="pb-25"><strong>Opening Hours</strong> : Monday – Sat: 9am to 6pm</p>
                            </div>
                            <ul className="footer-social md-mb-30">
                                <li><Link to="#"><i className="ri-facebook-fill"></i></Link></li>
                                <li><Link to="#"><i className="ri-twitter-fill"></i></Link></li>
                                <li><Link to="#"><i className="ri-pinterest-fill"></i></Link></li>
                                <li><Link to="#"><i className="ri-instagram-fill"></i></Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 md-mb-10">
                            <h3 className="footer-title">Contact Info</h3>
                            <ul className="address-widget">
                                <li>
                                    <i className="fi fi-rr-marker"></i>
                                    <div className="desc">
                                        Ta-134/A, Gulshan Badda Link<br />
                                        Rd, Dhaka
                                    </div>
                                </li>
                                <li>
                                    <i className="fi fi-rr-phone-call"></i>
                                    <div className="desc">
                                        <Link to="tel:(+880)15569569365">(+880)155 69569 365</Link><br />
                                        <Link to="tel:(+880)15569569366">(+880)155 69569 366</Link>
                                    </div>
                                </li>
                                <li>
                                    <i className="fi fi-rr-envelope"></i>
                                    <div className="desc">
                                        <Link to="mailto:support@devsdesign.com">support@devsdesign.com</Link><br />
                                        <Link to="mailto:infoname@gmail.com">infoname@gmail.com</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 md-mb-10">
                            <h3 className="footer-title">Our Services</h3>
                            <ul className="site-map">
                                <li><Link to="/general-construction">General Construction</Link></li>
                                <li><Link to="/property-maintenance">Property Maintenance</Link></li>
                                <li><Link to="/project-managment">Project Management</Link></li>
                                <li><Link to="/virtual-design-build">Virtual Design &amp; Build</Link></li>
                                <li><Link to="/preconstruction">Preconstruction</Link></li>
                                <li><Link to="/design-build">Design Build</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h3 className="footer-title">Newsletter</h3>
                            <p className="widget-desc">Tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                            <p>
                                <input type="email" name="email" placeholder="Your Email Address" required />
                                <input type="submit" value="Subscribe Now" />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row y-middle">
                        <div className="col-lg-6 md-mb-10 text-lg-end text-center order-last">
                            <ul className="copy-right-menu">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/services">Services</Link></li>
                                <li><Link to="#">Pages</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <div className="copyright text-lg-start text-center">
                                <p>© 2022 Konstruk.  Designed By <Link to="https://devsdesign.net" target="_blank" rel="noopener noreferrer">Devsdesign</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
