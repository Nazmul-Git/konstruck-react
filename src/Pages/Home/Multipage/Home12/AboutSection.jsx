import React from 'react';
import signatureImg from '../../../../assets/images/about/signature-h12.png';
import aboutImg from '../../../../assets/images/about/about-6.png';

const AboutSection = () => {
    return (
        <div className="rs-about about-style3 about-modify1 pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6 md-mb-50">
                        <div className="sec-title">
                            <span className="sub-text sub-text9">About Us</span>
                            <h2 className="title title6 pb-20">
                                We Always Think<br />
                                On Your Dream
                            </h2>
                            <p className="desc desc9 desc-big">
                                We are a long-established, independent building services and home improvements company. We have a working as main building contractors on all kinds of projects.
                            </p>
                            <p className="desc desc6 pt-30">
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ultricies integer quis auctor elit. Maecenas pharetra convallis posuere morbi leo urna molestie sagittis aliquam.
                            </p>
                            <div className="signature-img mt-40">
                                <img src={signatureImg} alt="Signature" />
                            </div>
                            <div className="about-txt">
                                <h5 className="title-name">Alex Jonsion, CEO</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 pl-70 md-pl-15">
                        <div className="image-part">
                            <img src={aboutImg} alt="About" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
