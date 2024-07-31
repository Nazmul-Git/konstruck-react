import React from 'react';
import { Link } from 'react-router-dom';

const CtaSection = () => {
    return (
        <div className="rs-cta cta-style1 cta-modify1 bg18">
            <div className="container">
                <div className="cta-content text-center pt-110 pb-125 md-pt-65 md-pb-65">
                    <div className="title-heading mb-40">
                        <span className="sub-text">Emergency Services</span>
                        <h2 className="title">Emergency services call us</h2>
                    </div>
                    <div className="address-wrap">
                        <div className="address-icon">
                            <i className="ri-phone-fill"></i>
                        </div>
                        <div className="content-txt">
                            <Link to="tel:+0820318887">+0820 318 887</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CtaSection;
