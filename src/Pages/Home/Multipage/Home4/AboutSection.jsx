import React from 'react';
import { Link } from 'react-router-dom';
import about1 from '../../../../assets/images/about/style2/about-1.png';
import about2 from '../../../../assets/images/about/style2/about-2.png';
import about3 from '../../../../assets/images/about/style2/about-3.png';
import about4 from '../../../../assets/images/about/style2/about-4.png';
import shape2 from '../../../../assets/images/shape-2.png';
import serIcon1 from '../../../../assets/images/about/style2/ser-icon1.png';
import serIcon2 from '../../../../assets/images/about/style2/ser-icon2.png';
import Service3 from '../../../../Components/Services/Service3';

const services = [
    {
        img: serIcon1,
        title1: 'Commercial',
        title2: 'Roofing'
    },
    {
        img: serIcon2,
        title1: 'Residential',
        title2: 'Roofing'
    }
];

const AboutSection = () => {
    return (
        <div className="rs-about about-style1 pt-150 pb-150 md-pt-80 md-pb-75">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6 md-mb-50">
                        <div className="about-image-wrap">
                            <div className="images-part">
                                <img className="main-img" src={about1} alt="About" />
                                <img className="top-img1" src={about2} alt="About" />
                                <img className="middle-img2" src={about3} alt="About" />
                                <img className="bottom-img3" src={about4} alt="About" />
                            </div>
                            <div className="rs-addon-services">
                                <div className="services-icon">
                                    <img src={shape2} alt="favicon" />
                                </div>
                                <div className="services-text">
                                    <h2 className="title"> Leading Roof Repair Agency Since 2001</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 pl-80 md-pl-15">
                        <div className="sec-title">
                            <span className="sub-text sub-text3">
                                <img src={shape2} alt="Images" />
                                About Us
                            </span>
                            <h2 className="title pb-20">
                                Committed to high quality roofing services
                            </h2>
                            <p className="desc pb-32">
                                Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy data foster to collaborative thinking to empowerment.
                            </p>
                            <div className="row">
                                {
                                    services &&
                                    services.map((service, index) => (
                                        <div className={`col-lg-6 ${index === 0 ? 'md-mb-30' : ''}`} key={index}>
                                            <Service3 service={service} />
                                        </div>
                                    ))
                                }
                            </div>
                            <p className="desc pt-30">
                                Corporate strategy frameworks to provide a robust synopsis for high level overviews. Iterative approaches to data foster to collaborative thinking to empowerment corporate strategy.
                            </p>
                            <div className="btn-part mt-45">
                                <Link className="readon red-btn know-radius" to="/about">Know More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
