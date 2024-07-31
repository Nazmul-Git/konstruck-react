import React from 'react';
import shapeImage from '../../../../assets/images/shape-3.png';
import chooseImage from '../../../../assets/images/choose/choose-image9.png';
import icon1 from '../../../../assets/images/choose/style4/icons/ser1.png';
import icon2 from '../../../../assets/images/choose/style4/icons/ser2.png';
import icon3 from '../../../../assets/images/choose/style4/icons/ser3.png';
import icon4 from '../../../../assets/images/choose/style4/icons/ser4.png';
import icon5 from '../../../../assets/images/choose/style4/icons/ser5.png';
import icon6 from '../../../../assets/images/choose/style4/icons/ser6.png';
import Service8 from '../../../../Components/Services/Service8';

const servicesList1 = [
    { icon: icon1, text: "Lightweight" },
    { icon: icon3, text: "Flexible" },
    { icon: icon5, text: "Waterproof" }
];

const servicesList2 = [
    { icon: icon2, text: "Easy to Setup" },
    { icon: icon4, text: "Easy to maintenance" },
    { icon: icon6, text: "Cloud Backup" }
];

const ChooseUsSection = () => {
    return (
        <div className="rs-choose choose-style5 pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-5 md-mb-50">
                        <div className="sec-title">
                            <span className="sub-text sub-text8">
                                <img src={shapeImage} alt="Images" />
                                Why choose us
                            </span>
                            <h2 className="title pb-20">
                                Why you should choose<br />
                                our service?
                            </h2>
                            <p className="desc desc5 pb-17">
                                Save Money, Save The Environment
                            </p>
                            <p className="desc desc6 pb-30">
                                Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Fringilla ut morbi tincidunt augue.
                            </p>
                        </div>
                        <div className="row y-middle">
                            <div className="col-lg-6 col-sm-5 xs-mb-30">
                                <ul className="services-item-list">
                                    {servicesList1.map((item, index) => (
                                        <Service8
                                            key={index}
                                            item={item}
                                        />
                                    ))}
                                </ul>
                            </div>
                            <div className="col-lg-6 col-sm-5">
                                <ul className="services-item-list">
                                    {servicesList2.map((item, index) => (
                                        <li key={index}>
                                            <span><img src={item.icon} alt="" /></span>
                                            <span className="list-text">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="choose-img">
                            <img src={chooseImage} alt="Choose" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUsSection;
