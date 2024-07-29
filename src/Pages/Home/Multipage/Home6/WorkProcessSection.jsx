import React from 'react';
import icon1 from '../../../../assets/images/process/style1/1.png';
import icon2 from '../../../../assets/images/process/style1/2.png';
import icon3 from '../../../../assets/images/process/style1/3.png';
import arrowIcon from '../../../../assets/images/process/style1/arrow-icon.png';
import Service7 from '../../../../Components/Services/Service7';

const WorkProcessSection = () => {
    const processes = [
        {
            icon: icon1,
            title: "Online Booking",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum.",
        },
        {
            icon: icon2,
            title: "We Arrive Fast",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum.",
        },
        {
            icon: icon3,
            title: "Solving Problem",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum.",
        },
    ];

    return (
        <div className="rs-process process-style1 bg16 pt-120 pb-115 md-pt-80 md-pb-75">
            <div className="container">
                <div className="sec-title text-center mb-45">
                    <span className="sub-text sub-text5 white-color">How We Work</span>
                    <h2 className="title white-color">
                        Our works process for you
                    </h2>
                </div>
                <div className="row">
                    {processes.map((process, index) => (
                        <div className="col-lg-4 col-md-6 md-mb-30" key={index}>
                            <Service7
                                process={process}
                                index={index}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="rs-arrow-animate">
                <div className="arrow-style one">
                    <img src={arrowIcon} alt="Images" />
                </div>
                <div className="arrow-style two">
                    <img src={arrowIcon} alt="Images" />
                </div>
            </div>
        </div>
    );
};

export default WorkProcessSection;
