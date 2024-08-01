import React from 'react';
import aboutImage from '../../../../assets/images/about/about-7.jpg';
import SkillBar from '../../../../Components/ProgressBar/SkillBar';
import { Link } from 'react-router-dom';

const AboutSection = () => {
    const skills = [
        { title: 'Warehousing Solutions', percent: '80%' },
        { title: 'Transport Solutions', percent: '95%' },
    ];

    return (
        <div className="rs-about about-style3 blue-bg3 pt-120 pb-120 md-pt-80 md-pb-75">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6 md-mb-50">
                        <div className="about-imag">
                            <img src={aboutImage} alt="About" />
                        </div>
                    </div>
                    <div className="col-lg-6 pl-55 md-pl-15">
                        <div className="sec-title3">
                            <span className="sub-text">About Us</span>
                            <h2 className="title pb-28 white-color">
                                Construction building and renovation experts
                            </h2>
                            <div className="desc pb-25">
                                Today, a variety of software can create random text that resembles Lorem Ipsum. For example, Apple’s Pages and Keynote software use scrambled placeholder text to corporate website business.
                            </div>
                            {/* Skillbar Section Start */}
                            <div className="rs-skillbar skillbar-style1 skillbar-modify2 mb-10">
                                <div className="cl-skill-bar">
                                    {skills.map((skill, index) => (
                                        <div key={index}>
                                            <span className="skillbar-title">{skill.title}</span>
                                            <SkillBar percentage={skill.percent} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Skillbar Section End */}
                            <div className="btn-part mt-50">
                                <Link className="readon paste-btn dismore" to="/about">Discover More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
