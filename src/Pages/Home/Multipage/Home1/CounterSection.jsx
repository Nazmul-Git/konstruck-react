import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import shapeImage from '../../../../assets/images/shape-1.png';

const countersData = [
    {
        number: 341,
        title: 'Completed Projects',
    },
    {
        number: 302,
        title: 'Happy Clients',
    },
    {
        number: 153,
        title: 'Qualified Engineers',
    },
    {
        number: 32,
        title: 'Years Experience',
    },
];

const CounterSection = () => {
    return (
        <div className="rs-counter counter-style1 bg2 pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6 md-mb-50">
                        <div className="sec-title">
                            <span className="sub-text yellow-color">
                                <img src={shapeImage} alt="Images" />
                                Number talks
                            </span>
                            <h2 className="title white-color pb-20">
                                Konstruk will help you get<br />
                                things complete reality.
                            </h2>
                            <p className="desc desc2 pb-45">
                                Konstruk will help you get things complete reality.
                            </p>
                            <div className="btn-part">
                                <Link className="readon more contact" to="contact.html">Contact Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row">
                            {countersData.map((counter, index) => (
                                <div className="col-xl-6 col-md-6 col-sm-6 mb-30" key={index}>
                                    <div className="rs-counter-list">
                                        <div className="count-text">
                                            <div className="count-number">
                                                <CountUp end={counter.number} duration={3} className="rs-count" />
                                                <span className="prefix">+</span>
                                            </div>
                                            <span className="title">{counter.title}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CounterSection;
