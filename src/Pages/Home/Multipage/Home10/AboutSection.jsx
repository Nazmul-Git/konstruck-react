import React from 'react';
import { Link } from 'react-router-dom';
import aboutImage from '../../../../assets/images/about/about-8.jpg';
import shapeImage from '../../../../assets/images/shape-3.png';

const listItems = [
    "Reliability and performance",
    "Just-in-time manufacturing",
    "Solar material financing"
];

const AboutSection = () => {
    return (
        <div className="rs-about about-style3 pt-120 pb-120 md-pt-80 md-pb-75">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6 md-mb-50">
                        <div className="image-wrap">
                            <img src={aboutImage} alt="About" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="sec-title">
                            <span className="sub-text sub-text8">
                                <img src={shapeImage} alt="Images" />
                                About Us
                            </span>
                            <h2 className="title pb-27">
                                Reshaping energy<br />
                                for the future!
                            </h2>
                            <p className="desc desc5 pb-30">
                                We drive the transition to more sustainable, reliable & affordable energy systems. With our innovative technologies, we energize society, that’s our aim!
                            </p>
                            <ul className="check-lists paste-list-style2">
                                {listItems.map((item, index) => (
                                    <li className="list-item" key={index}>
                                        <span className="icon-list-icon">
                                            <i className="ri-checkbox-circle-fill"></i>
                                        </span>
                                        <span className="list-text">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="desc desc6 pt-20">
                                At auctor urna nunc id cursus metus aliquam. Eget arcu dictum varius duis at. Condimentum lacinia quis vel eros donec ac odio tempor.
                            </p>
                            <div className="btn-part mt-45">
                                <Link className="readon paste-btn2 know-more" to="/about">Know More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
