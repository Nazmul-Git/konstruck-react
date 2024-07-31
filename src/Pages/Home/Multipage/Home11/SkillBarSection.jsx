import React from 'react';

// Import images
import skillImage from '../../../../assets/images/skillbar/skill-3.png';
import SkillBar from '../../../../Components/ProgressBar/SkillBar';

const skills = [
    { label: 'Manufacturing', percentage: '85%' },
    { label: 'Metallurgy', percentage: '80%' },
    { label: 'Urban Planning', percentage: '95%' }
];

const SkillBarSection = () => {
    return (
        <div className="rs-skillbar skillbar-style1 skillbar-modify1 orange-skillbar gray-bg7 pt-115 pb-120 md-pt-75 md-pb-80">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6 pr-75 md-pr-15 md-mb-50">
                        <div className="sec-title">
                            <h2 className="title title5 pb-27">
                                Building today for better Futures
                            </h2>
                            <p className="desc desc10">
                                At tellus at urna condimentum mattis pellentesque. Egestas egestas fringilla phasellus faucibus. Praesent semper feugiat nibh pulvinar gravida. Arcu bibendum at varius vel. Nulla facilisi etiam dignissim diam.
                            </p>
                            <div className="cl-skill-bar pt-30">
                                {skills.map((skill, index) => (
                                    <div key={index}>
                                        <span className="skillbar-title">{skill.label}</span>
                                        <SkillBar percentage={skill.percentage} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="skill-imag">
                            <img src={skillImage} alt="About" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillBarSection;
