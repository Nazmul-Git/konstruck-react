import React from 'react';
import SkillBar from '../../../../Components/ProgressBar/SkillBar';

const SkillSection = () => {
    const skills = [
        { title: 'Builders', percentage: '95%' },
        { title: 'Construction', percentage: '90%' },
        { title: 'House Renovation', percentage: '85%' },
        { title: 'Painting', percentage: '85%' },
    ];

    return (
        <div className="rs-choose choose-style2">
            <div className="row no-gutters">
                <div className="col-lg-5">
                    <div className="choose-content bg8">
                        <div className="sec-title2 mb-25">
                            <span className="sub-text pb-8">Why choose us</span>
                            <h2 className="title pb-25">
                                A right choice that makes the difference to others
                            </h2>
                            <div className="desc-big pb-0">
                                We donec pulvinar magna id leoersi pellentesque impered upon dignissim rhoncus euismod euismod eros vitae.
                            </div>
                        </div>
                        {/* Skillbar Section Start */}
                        <div className="rs-skillbar skillbar-style1 skillbar-modify1 mb-10">
                            <div className="cl-skill-bar">
                                {skills.map((skill, index) => (
                                    <div key={index}>
                                        <span className="skillbar-title">{skill.title}</span>
                                        <SkillBar percentage={skill.percentage} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Skillbar Section End */}
                    </div>
                </div>
                <div className="col-lg-7 choose-img">
                    {/* Optional content for the right column */}
                </div>
            </div>
        </div>
    );
};

export default SkillSection;
