import React from 'react';
import shapeImg from '../../../../assets/images/shape-2.png';
import { Link } from 'react-router-dom';

const CtaSection = () => {
    return (
        <div className="rs-cta bg12 pt-116 pb-116 md-pt-76 md-pb-76">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-8">
                        <div className="sec-title md-text-center md-mb-30">
                            <span className="sub-text sub-text3 white-color">
                                <img src={shapeImg} alt="Images" />
                                Let's Talk
                            </span>
                            <h2 className="title white-color">
                                Ready for a roof consultation?
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="btn-part text-right md-text-center">
                            <Link className="readon more requset-services" to="/contact">Request A Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CtaSection;
