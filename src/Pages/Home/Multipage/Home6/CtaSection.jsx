import React from 'react';

import PlumberMan from '../../../../assets/images/cta/plumber-man.png';
import { Link } from 'react-router-dom';

const CtaSection = () => {
    return (
        <div className="rs-cta cta-style1 bg15">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="cta-content md-text-center pt-110 pb-125 md-pt-65 md-pb-65">
                            <div className="title-heading mb-40">
                                <span className="sub-text">Emergency Services</span>
                                <h2 className="title">Emergency services call us</h2>
                            </div>
                            <div className="address-wrap">
                                <div className="address-icon">
                                    <i className="ri-phone-fill"></i>
                                </div>
                                <div className="content-txt">
                                    <Link to="#">+0820 318 887</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="cta-img">
                            <img src={PlumberMan} alt="Images" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CtaSection;
