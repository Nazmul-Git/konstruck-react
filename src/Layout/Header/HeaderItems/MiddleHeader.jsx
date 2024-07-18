import React from 'react';
import { Link } from 'react-router-dom';

const MiddleHeader = ({logo}) => {
    return (
        <div className="middle-header hidden-md">
            <div className="container">
                <div className="row-table">
                    <div className="col-cell header-logo">
                        <div className="logo-part">
                            <Link to="/index-01">
                                <img src={logo} alt="Logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-cell">
                        <div className="rs-contact-info">
                            <div className="contact-part">
                                <div className="info-icon">
                                    <i className="fi fi-rr-map-marker-home"></i>
                                </div>
                                <div className="contact-info">
                                    <div className="info-title">Contact us</div>
                                    <div className="info-des">31 New Street, NY, USA</div>
                                </div>
                            </div>
                            <div className="contact-part">
                                <div className="info-icon">
                                    <i className="fi fi-rr-envelope-plus"></i>
                                </div>
                                <div className="contact-info">
                                    <div className="info-title">Email us</div>
                                    <div className="info-des">
                                        <Link to="mailto:support@devsdesign.net">support@devsdesign.net</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-part margin-no">
                                <div className="info-icon">
                                    <i className="fi fi-rr-phone-call"></i>
                                </div>
                                <div className="contact-info">
                                    <div className="info-title">Free Call</div>
                                    <div className="info-des">
                                        <Link to="tel:(+0885)-23456789">(+0885) - 2345 6789</Link>
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

export default MiddleHeader;
