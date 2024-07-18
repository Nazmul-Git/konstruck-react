import React from 'react';
import { Link } from 'react-router-dom';
import aboutImage from '../../../../assets/images/about/style1/about.png';
import shapeImage from '../../../../assets/images/shape-1.png';
import abztImage from '../../../../assets/images/about/style1/abzt.jpg';
import signetureImage from '../../../../assets/images/about/style1/signeture1.png';

const AboutSection = () => {
    return (
        <div className="rs-about about-style1 bg1 pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6 md-mb-50">
                        <div className="images-part">
                            <img src={aboutImage} alt="About" />
                        </div>
                    </div>
                    <div className="col-lg-6 pl-50 md-pl-15">
                        <div className="sec-title">
                            <span className="sub-text">
                                <img src={shapeImage} alt="Images" />
                                Who We Are
                            </span>
                            <h2 className="title pb-20">
                                Construction solutions focused future ready
                            </h2>
                            <p className="desc pb-37">
                                Leverage agile frameworks to provide a robust synopsis for high
                                level overviews. Iterative approaches to corporate strategy data
                                foster to collaborative thinking to empowerment.
                            </p>
                            <div className="row y-middle">
                                <div className="col-lg-4 col-md-4 sm-mb-30">
                                    <div className="about-img">
                                        <img src={abztImage} alt="About" />
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8">
                                    <ul className="check-lists">
                                        <li className="list-item">
                                            <span className="icon-list-icon">
                                                <i className="ri-checkbox-circle-fill"></i>
                                            </span>
                                            <span className="list-text">Pre-construction services</span>
                                        </li>
                                        <li className="list-item">
                                            <span className="icon-list-icon">
                                                <i className="ri-checkbox-circle-fill"></i>
                                            </span>
                                            <span className="list-text">Industrial manufacturing</span>
                                        </li>
                                        <li className="list-item">
                                            <span className="icon-list-icon">
                                                <i className="ri-checkbox-circle-fill"></i>
                                            </span>
                                            <span className="list-text">Building and construction</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row mt-47 md-mt-25">
                                <div className="col-lg-6 col-md-4 sm-mb-30">
                                    <div className="btn-part">
                                        <Link className="readon more know" to="about.html">Know more</Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-8">
                                    <div className="signeture-img">
                                        <img src={signetureImage} alt="Images" />
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
