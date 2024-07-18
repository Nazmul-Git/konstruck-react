import React from 'react';
import { Link } from 'react-router-dom';

const CTA = ({ shape1 }) => {
    return (
        <div className="container">
            <div className="call-action">
                <div className="sec-title text-center">
                    <span className="sub-text yellow-color">
                        <img src={shape1} alt="Images" />
                        Work With Us!
                    </span>
                    <h2 className="title white-color pb-20">
                        Have any upcoming project
                    </h2>
                    <p className="desc desc3 pb-35">
                        Leverage agile frameworks to provide a robust synopsis for high level overviews.<br />
                        Iterative approaches to corporate strategy foster collaborative thinking
                    </p>
                    <div className="btn-part">
                        <Link className="readon more contact" to="/contact">Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTA;