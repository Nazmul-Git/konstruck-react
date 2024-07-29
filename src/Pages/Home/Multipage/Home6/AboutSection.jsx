import React from 'react';
import CountUp from 'react-countup';
import aboutImage from '../../../../assets/images/about/style3/about-6.png';
import shapeImage from '../../../../assets/images/about/style3/shape-1.png';
import { Link } from 'react-router-dom';

const AboutSection = () => {
    return (
        <div className="rs-about about-style2 pt-120 pb-150 md-pt-80 md-pb-80">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6 md-mb-50">
                        <div className="widget-img">
                            <img src={aboutImage} alt="About" />
                            <div className="multi-img wow fadeinup">
                                <img src={shapeImage} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 pl-70 md-pl-15">
                        <div className="sec-title mb-45 md-mb-25">
                            <span className="sub-text sub-text5">About Us</span>
                            <h2 className="title pb-20">
                                Best plumber services that you can trust
                            </h2>
                            <p className="desc">
                                Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy data foster to collaborative thinking to empowerment.
                            </p>
                        </div>
                        {/* Counter Section Start */}
                        <div id="rs-counter" className="rs-counter counter-style3 pb-50 md-pb-35">
                            <div className="row">
                                <div className="col-lg-5 col-sm-5 xs-mb-30">
                                    <div className="rs-counter-list">
                                        <div className="counter-right-border"></div>
                                        <div className="count-text">
                                            <div className="count-number">
                                                <CountUp className='rs-count' end={552} duration={3} />
                                                <span className="prefix">+</span>
                                            </div>
                                            <span className="title">Happy Customers</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-sm-6">
                                    <div className="rs-counter-list widget-padding">
                                        <div className="count-text">
                                            <div className="count-number">
                                                <CountUp className='rs-count' end={652} duration={3} />
                                                <span className="prefix">k</span>
                                            </div>
                                            <span className="title">Completed Cases</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Counter Section End */}
                        <div className="row y-middle">
                            <div className="col-lg-5 col-sm-5 xs-mb-30">
                                <div className="btn-part">
                                    <Link className="readon blue-btn know-more" to="/about">Know More</Link>
                                </div>
                            </div>
                            <div className="col-lg-7 col-sm-6 pl-30 md-pl-15">
                                <div className="rs-addon-services">
                                    <div className="services-icon">
                                        <i className="ri-phone-fill"></i>
                                    </div>
                                    <div className="services-text">
                                        <h4 className="title">Emergency Services</h4>
                                        <p className="services-txt">(+088) 589-8745</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
