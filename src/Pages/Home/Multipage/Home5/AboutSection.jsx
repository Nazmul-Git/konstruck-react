import React from 'react';
import aboutImage from '../../../../assets/images/about/about-5.png';
import { Link } from 'react-router-dom';

const AboutSection = () => {
    return (
        <div className="rs-about about-style2 black-bg pt-120 pb-130 md-pt-80 md-pb-80">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6 md-mb-50">
                        <div className="about-image">
                            <img src={aboutImage} alt="About" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="sec-title">
                            <span className="sub-text sub-text4">About Us</span>
                            <h2 className="title title3 pb-27">
                                25+ years of experience in Industrial <span>services</span>
                            </h2>
                            <p className="desc desc4 pb-40">
                                Leverage agile frameworks to provide a robust synopsis for high level overviews iterative approaches to corporate strategy data foster.
                            </p>
                            <div className="features-content red-feature">
                                <ul className="rs-features-list">
                                    <li>
                                        <i className="ri-check-fill"></i>
                                        <span className="feature-text">Metal, Engineering and Boating</span>
                                    </li>
                                    <li>
                                        <i className="ri-check-fill"></i>
                                        <span className="feature-text">Electrical Related Services</span>
                                    </li>
                                    <li>
                                        <i className="ri-check-fill"></i>
                                        <span className="feature-text">Fuel & Gas Industry</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="btn-part mt-50">
                                <Link className="readon red2-more view" to="/about">View Projects</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
