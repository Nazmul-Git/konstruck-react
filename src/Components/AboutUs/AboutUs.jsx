import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = ({aboutImg}) => {
    return (
        <div className="container">
            <div className="row y-middle">
                <div className="col-lg-6 md-mb-50">
                    <div className="images-part">
                        <img src={aboutImg} alt="About" />
                    </div>
                </div>
                <div className="col-lg-6 pl-40 md-pl-15 pr-50 md-pr-15">
                    <div className="sec-title">
                        <span className="sub-text sub-text2">
                            About Us
                        </span>
                        <h2 className="title pb-20">
                            Making your vision come true at the basics.
                        </h2>
                        <p className="desc pb-20">
                            Leverage agile frameworks to provide a robust synopsis for high level overviews iterative approaches to corporate.
                        </p>
                        <h4 className="small-title pb-15">
                            We are world best construction &amp; building<br />
                            company projects including
                        </h4>
                        <div className="row">
                            <div className="col-lg-5 col-md-5">
                                <ul className="check-lists2">
                                    <li>Commercial</li>
                                    <li>Residential</li>
                                    <li>Educational</li>
                                </ul>
                            </div>
                            <div className="col-lg-5 col-md-5">
                                <ul className="check-lists2">
                                    <li>Hospital</li>
                                    <li>Bridge &amp; Road</li>
                                    <li>Oil/Gas/Mining</li>
                                </ul>
                            </div>
                        </div>
                        <div className="btn-part mt-28">
                            <Link className="readon more know" to="/about">Know more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;