import React, { useState } from 'react';
import shapeImage from '../../../../assets/images/shape-1.png';
import { Link } from 'react-router-dom';

const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="rs-faq faq-style1">
            <div className="row">
                <div className="col-lg-4 offset-2 faq-offset6 md-mb-50">
                    <div className="faq-content">
                        <div className="sec-title mb-40">
                            <span className="sub-text">
                                <img src={shapeImage} alt="Images" />
                                Your Benefit
                            </span>
                            <h2 className="title">
                                Build better futures with<br />
                                steady focus on quality
                            </h2>
                        </div>
                        <div id="accordion" className="accordion">
                            <div className="card">
                                <div className="card-header" onClick={() => handleToggle(0)}>
                                    <Link className={`card-link ${activeIndex === 0 ? '' : 'collapsed'}`} to="#!" aria-expanded={activeIndex === 0}>
                                        We are a global family that values diversity.
                                    </Link>
                                </div>
                                <div id="collapseOne" className={`collapse ${activeIndex === 0 ? 'show' : ''}`}>
                                    <div className="card-body">
                                        Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure steady steady.
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" onClick={() => handleToggle(1)}>
                                    <Link className={`card-link ${activeIndex === 1 ? '' : 'collapsed'}`} to="#!" aria-expanded={activeIndex === 1}>
                                        We own and shape our future.
                                    </Link>
                                </div>
                                <div id="collapseTwo" className={`collapse ${activeIndex === 1 ? 'show' : ''}`}>
                                    <div className="card-body">
                                        Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure steady steady.
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" onClick={() => handleToggle(2)}>
                                    <Link className={`card-link ${activeIndex === 2 ? '' : 'collapsed'}`} to="#!" aria-expanded={activeIndex === 2}>
                                        We create sustainable growth.
                                    </Link>
                                </div>
                                <div id="collapseThree" className={`collapse ${activeIndex === 2 ? 'show' : ''}`}>
                                    <div className="card-body">
                                        Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure steady steady.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 faq-images md-offset-2"></div>
            </div>
        </div>
    );
};

export default FaqSection;
