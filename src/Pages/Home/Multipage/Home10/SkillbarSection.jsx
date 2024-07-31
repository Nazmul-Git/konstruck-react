
import React from 'react';
import skillbar2 from '../../../../assets/images/skillbar/skill-2.png'
import shape3 from '../../../../assets/images/shape-3.png'
import SkillBar from '../../../../Components/ProgressBar/SkillBar';

const SkillbarSection = () => {
    const skills = [
        { label: 'Wind Energy', percentage: '80%' },
        { label: 'Hydropower', percentage: '75%' },
        { label: 'Solar Energy', percentage: '90%' },
    ];

    return (
        <div className="rs-skillbar skillbar-style1 skillbar-modify4 pt-120 pb-120 md-pt-80 md-pb-60">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6 md-mb-50">
                        <div className="skill-imag">
                            <img src={skillbar2} alt="About" />
                        </div>
                    </div>
                    <div className="col-lg-6 pl-55 md-pl-15">
                        <div className="sec-title">
                            <span className="sub-text sub-text8">
                                <img src={shape3} alt="Images" />
                                PERSEVERANCE
                            </span>
                            <h2 className="title pb-27">
                                Alternatives for<br /> 
                                renewable energy
                            </h2>
                            <p className="desc pb-20">
                                At auctor urna nunc id cursus metus aliquam. Eget arcu dictum varius duis at. Condimentum lacinia quis vel eros donec ac odio tempor. Tellus molestie nunc non blandit massa enim.
                            </p>
                            <div className="cl-skill-bar">
                                {skills.map((skill, index) => (
                                    <div key={index}>
                                        <span className="skillbar-title">{skill.label}</span>
                                        <SkillBar percentage={skill.percentage} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillbarSection;
