import React from 'react';
import { Link } from 'react-router-dom';

const CTA2 = () => {
    return (
        <div className="container">
            <div className="row y-middle">
                <div className="col-lg-6 md-text-center md-mb-30">
                    <div className="sec-title">
                        <span className="sub-text sub-text2 white-color">
                            Let’s Talk
                        </span>
                        <h2 className="title white-color">
                            Have any upcoming project?
                        </h2>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="btn-part text-right md-text-center">
                        <Link to="/contact" className="readon more contact">Request Services</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTA2;