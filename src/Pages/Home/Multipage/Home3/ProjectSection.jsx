import React from 'react';
import { Link } from 'react-router-dom';


const features = [
    "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.",
    "Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.",
    "Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus."
];

const ProjectSection = () => {
    return (
        <div className="rs-project portfolio-image">
            <div className="row no-gutters">
                <div className="col-lg-7 project-img">
                </div>
                <div className="col-lg-5">
                    <div className="features-content">
                        <div className="sec-title2 mb-35 md-mb-25">
                            <span className="sub-text pb-8">Projects</span>
                            <h2 className="title pb-25">
                                Super prime high end small projects developments
                            </h2>
                            <div className="desc-big pb-0">
                                We denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms.
                            </div>
                        </div>
                        <ul className="rs-features-list">
                            {features.map((feature, index) => (
                                <li key={index}>
                                    <i className="ri-check-line"></i>
                                    <span className="feature-text">{feature}</span>
                                </li>
                            ))}
                            <li>
                                <div className="btn-part mt-30 md-mt-15">
                                    <Link className="readon more discover" to="/projects-style1">View Projects</Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;
