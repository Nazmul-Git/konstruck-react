import React from 'react';
import { Link } from 'react-router-dom';
import FeatureItem from '../../../../Components/AboutUs/FeatureItem';

import aboutImg from  '../../../../assets/images/about/about-9.jpg';
import aboutImg1 from '../../../../assets/images/about/about-9-1.jpg';

const AboutSection = () => {
    const features = [
        'Integer egestas metus blandit sagittis vestibulum.',
        'Dolor sit amet consectetur adipiscing',
        'Enim sit amet venenatis urna cursus eget nunc scelerisque'
    ];

    return (
        <div className="rs-about about-style3 about-modify1 pt-120 pb-220 md-pt-80 md-pb-100">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6 md-mb-50">
                        <div className="image-wrap2">
                            <img src={aboutImg} alt="About" />
                            <div className="images-shape">
                                <img className="wow fadeInUp" src={aboutImg1} alt="About" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="sec-title">
                            <h2 className="title title5 pb-27">
                                Providing solutions for construction management, and restoration.
                            </h2>
                            <p className="desc desc9">
                                We are a long-established, independent building services and home improvements company. We have a wealth of experience working as main building contractors on all kinds of projects, big and small.
                            </p>
                            <ul className="check-lists check-list1 pt-20">
                                {features.map((feature, index) => (
                                    <FeatureItem
                                        key={index}
                                        feature={feature}
                                    />
                                ))}
                            </ul>
                            <ul className="abou-btn-wrap mt-30">
                                <li>
                                    <div className="btn-part">
                                        <Link className="readon orange-btn1" to="/about">Learn More</Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="address-wrap videos-icons-style3">
                                        <div className="address-icon">
                                            <i className="ri-phone-fill"></i>
                                        </div>
                                        <div className="inner-txt">
                                            <span className="sub-text">Call Us</span>
                                            <h2 className="title"><Link to="#">(00) 123 456 00</Link></h2>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;