import React from 'react';
import SkillBar from '../../../../Components/ProgressBar/SkillBar'
// Define the skill bars data
const skillBarsData = [
    {
        title: 'Manufacturing',
        percent: '85%'
    },
    {
        title: 'Metallurgy',
        percent: '80%'
    },
    {
        title: 'Urban Planning',
        percent: '95%'
    }
];

const SkillBarSection = () => {
    return (
        <div className="rs-skillbar skillbar-style1 skillbar-modify1 red-skillbar1">
            <div className="row no-gutters">
                <div className="col-lg-6">
                    <div className="skillbar-wrap">
                        <div className="skillbar-shape"></div>
                        <div className="sec-title mb-35">
                            <div className="title-inner ser-inner">
                                <h2 className="title"><span className="watermark">03</span>Recent Projects</h2>
                            </div>
                            <h2 className="title title5 white-color pb-23">
                                Building Today For<br />
                                Better Futures
                            </h2>
                            <p className="desc desc7">
                                Habitant morbi tristique senectus et netus et malesuada. Et tortor at risus viverra adipiscing at in tellus integer. Nibh venenatis cras sed felis eget velit aliquet sagittis id. Risus viverra adipiscing at in tellus integer feugiat.
                            </p>
                        </div>
                        {/* Skillbar Section Start */}
                        <div className="cl-skill-bar">
                            {skillBarsData.map((skill, index) => (
                                <div key={index}>
                                    {/* Start Skill Bar */}
                                    <span className="skillbar-title">{skill.title}</span>
                                    <SkillBar
                                        percentage={skill.percent}
                                    />
                                </div>
                            ))}
                        </div>
                        {/* Skillbar Section End */}
                    </div>
                </div>
                <div className="col-lg-6 skillbar-images"></div>
            </div>
        </div>
    );
};

export default SkillBarSection;
