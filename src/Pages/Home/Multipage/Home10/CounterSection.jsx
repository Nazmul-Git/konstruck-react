// CounterSection.js
import React from 'react';
import energyvideo from '../../../../assets/images/energy-video-bg.mp4';
import shape3 from '../../../../assets/images/shape-3.png';
import { Link } from 'react-router-dom';
import Counter from '../../../../Components/Counter/Counter';

const CounterSection = () => {
    const counters = [
        { count: 341, title: 'Completed Projects', prefix: '+', border: 'counter-right-border' },
        { count: 302, title: 'Happy Clients', prefix: '+' },
        { count: 152, title: 'Qualified Engineers', prefix: '+', border: 'counter-left-border' },
        { count: 32, title: 'Years Experience', prefix: '+' },
    ];

    return (
        <div id="rs-counter" className="rs-counter counter-style4 pt-120 pb-120 md-pt-80 md-pb-80">
            <video className="rs-html5-video" autoPlay muted playsInline loop src={energyvideo}></video>
            <div className="background-video-wrap">
                <div className="background-overlay"></div>
            </div>
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6 md-mb-50">
                        <div className="sec-title">
                            <span className="sub-text sub-text8 white-color">
                                <img src={shape3} alt="Images" />
                                Renewable Energy
                            </span>
                            <h2 className="title pb-20 white-color">
                                Commercial, Residential &<br />
                                Industrial Solar Systems!
                            </h2>
                            <p className="desc desc7">
                                Konstruk will help you get things complete reality.
                            </p>
                            <div className="btn-part mt-47 md-mt-30">
                                <Link className="readon paste-btn2 know-more" to="/contact">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row">
                            {counters.map((counter, index) => (
                                <div key={index} className="col-lg-6 col-sm-6 mb-80 md-mb-50 xs-mb-50">
                                    <Counter
                                        counter={counter}
                                    />
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
