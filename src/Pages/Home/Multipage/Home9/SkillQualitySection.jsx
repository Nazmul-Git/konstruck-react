import React from 'react';
import skillImage from '../../../../assets/images/skillbar/skill-1.png';
import SkillBar from '../../../../Components/ProgressBar/SkillBar';

const skills = [
    { label: 'Interior Design', percent: '80%' },
    { label: 'Outdoor Design', percent: '70%' },
    { label: 'Indoor Design', percent: '95%' }
];

const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const halfHeight = card.offsetHeight / 2;
    const halfWidth = card.offsetWidth / 2;
    const rotateX = (e.nativeEvent.offsetY - halfHeight) / 10;
    const rotateY = (e.nativeEvent.offsetX - halfWidth) / 10;
    card.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};

const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(500px) rotateX(0deg) rotateY(0deg)`;
};

const SkillQualitySection = () => {

    return (
        <div className="rs-quality gray-bg5 pt-100 pb-100 md-pt-70 md-pb-50">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6 md-mb-50">
                        <div
                            className="quality-img"
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{ transition: 'transform 0.1s ease-out' }}
                        >
                            <img
                                src={skillImage}
                                alt="Quality"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6 pl-63 md-pl-15">
                        <div className="sec-title mb-40">
                            <span className="sub-text sub-text7">Skill & Quality</span>
                            <h2 className="title pb-23">Our Working Skill & Quality</h2>
                            <p className="desc">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in.
                            </p>
                        </div>
                        <div className="rs-skillbar skillbar-style1 skillbar-modify3">
                            <div className="cl-skill-bar">
                                {skills.map((skill, index) => (
                                    <div key={index}>
                                        <span className="skillbar-title">{skill.label}</span>
                                        <SkillBar
                                            percentage={skill.percent}
                                        />
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

export default SkillQualitySection;
