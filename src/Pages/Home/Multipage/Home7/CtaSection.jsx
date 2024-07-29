import React from 'react';
import { Link } from 'react-router-dom';

const CtaSection = () => {
    return (
        <div className="rs-cta bg17 pt-116 pb-116 md-pt-76 md-pb-76">
            <div className="container">
                <div className="sec-title3 text-center">
                    <span className="sub-title">Work With Us !</span>
                    <h2 className="title pb-25 white-color">
                        Are you looking logistics<br />company?
                    </h2>
                    <div className="heading-border-line"></div>
                    <p className="desc margin-0 white-color pt-50 md-pt-30">
                        Leverage agile frameworks to provide a robust synopsis for high level overviews.<br />
                        Iterative approaches to corporate strategy foster collaborative thinking
                    </p>
                    <div className="btn-part mt-40">
                        <Link className="readon paste-btn started" to="/contact">
                            Get Started
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CtaSection;