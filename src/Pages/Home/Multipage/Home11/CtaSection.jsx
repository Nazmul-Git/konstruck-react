import React from 'react';
import { Link } from 'react-router-dom';

const CtaSection = () => {
    return (
        <div id="rs-cta" className="rs-cta cta-style2">
            <div className="container custom4">
                <div className="cta-wrap">
                    <div className="sec-title">
                        <h2 className="title white-color pb-27">
                            Ready to get started for<br/>
                                first project?
                        </h2>
                        <div className="btn-part">
                            <Link className="readon orange-btn1 get-white1" to="/contact">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CtaSection;