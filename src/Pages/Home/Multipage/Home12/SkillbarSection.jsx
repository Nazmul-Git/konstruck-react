import React, { useState } from 'react';
import aboutImage from '../../../../assets/images/about/about-12.png';
import { Link } from 'react-router-dom';
import SkillBar from '../../../../Components/ProgressBar/SkillBar';
import VideoPopUp from '../../../../Components/Modal/VideoPopUp';

const SkillbarSection = () => {
    const [isVideoOpen, setVideoOpen] = useState(false);
    const openVideoPopup = () => setVideoOpen(true);
    const closeVideoPopup = () => setVideoOpen(false);

    const skillBars = [
        { title: 'Manufacturing', percentage: '85%' },
        { title: 'Metallurgy', percentage: '80%' },
        { title: 'Urban Planning', percentage: '95%' },
    ];

    return (
        <div className="rs-choose choose-style6 pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6 md-mb-50">
                        <div className="images-wrap">
                            <img src={aboutImage} alt="About" />
                            <div className="video-item">
                                <div className="rs-videos">
                                    <div className="animate-border">
                                        <Link onClick={openVideoPopup} className="popup-border popup-videos">
                                            <i className="ri-play-fill"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 pl-80 md-pl-15">
                        <div className="rs-skillbar skillbar-style1 skillbar-modify1 orange-skillbar2">
                            <div className="sec-title">
                                <span className="sub-text sub-text9">WHAT WE OFFER</span>
                                <h2 className="title title6 pb-27">
                                    Building today for<br />better Futures
                                </h2>
                                <p className="desc desc10">
                                    At tellus at urna condimentum mattis pellentesque. Egestas egestas fringilla phasellus faucibus. Praesent feugiat nibh pulvinar gravida.
                                </p>
                                <div className="cl-skill-bar pt-30">
                                    {skillBars.map((skill, index) => (
                                        <div key={index}>
                                            <span className="skillbar-title">{skill.title}</span>
                                            <SkillBar
                                                percentage={skill.percentage}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="banner-btn mt-40">
                                    <Link className="readon blue-btn orange-more1" to="/contact">Learn More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <VideoPopUp isOpen={isVideoOpen} onRequestClose={closeVideoPopup} videoUrl="https://www.youtube.com/embed/5CLmRIHR5Zw" />
        </div>
    );
};

export default SkillbarSection;
