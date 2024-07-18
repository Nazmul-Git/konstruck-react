import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs2 = ({ AboutImage }) => {
    return (
        <div className="container">
            <div className="row y-middle">
                <div className="col-lg-6 md-mb-50">
                    <div className="about-img home3-full">
                        <img src={AboutImage} alt="About" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="sec-title2 pl-45 md-pl-15">
                        <span className="sub-text">About Us</span>
                        <h2 className="title pb-25">
                            Construction building and renovation experts
                        </h2>
                        <div className="desc pb-17">
                            Today, a variety of software can create random text that resembles Lorem Ipsum. For example, Apple’s Pages and Keynote software use scrambled placeholder text. And Lorem Ipsum is featured on Google Docs, building renovation expert iterative approaches to corporate
                        </div>
                        <div className="row">
                            <div className="col-sm-5">
                                <ul className="check-lists2">
                                    <li>Commercial</li>
                                    <li>Residential</li>
                                    <li>Educational</li>
                                </ul>
                            </div>
                            <div className="col-sm-4">
                                <ul className="check-lists2">
                                    <li>Hospital</li>
                                    <li>Bridge & Road</li>
                                    <li>Oil/Gas/Mining</li>
                                </ul>
                            </div>
                        </div>
                        <div className="btn-part mt-30">
                            <Link className="readon more discover" to="/about">Discover More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs2;