import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
    return (
        <div className="rs-about about-style5">
            <div className="row no-gutters">
                <div className="col-lg-6 about-image"></div>
                <div className="col-lg-6">
                    <div className="about-content-wrap">
                        <div className="sec-title">
                            <div className="title-inner pb-18">
                                <h2 className="title"><span className="watermark">01</span>About Us</h2>
                            </div>
                            <h2 className="title title5 white-color pb-23">
                                We Always Think On<br />
                                Your Dream
                            </h2>
                            <p className="desc desc7">
                                There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected humour. There are many variations of
                                passages of Lorem Ipsum available, but the majority have suffered alteration in some form, printer
                                took a galley of type.
                            </p>
                            <div className="btn-part mt-50">
                                <Link className="readon red2-more view-pro" to="/about">Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
