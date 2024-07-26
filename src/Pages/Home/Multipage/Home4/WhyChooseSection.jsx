import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import shape2 from '../../../../assets/images/shape-2.png';
import icon1 from '../../../../assets/images/choose/style1/icons/1.png';
import icon2 from '../../../../assets/images/choose/style1/icons/2.png';
import icon3 from '../../../../assets/images/choose/style1/icons/3.png';
import icon4 from '../../../../assets/images/choose/style1/icons/4.png';
import Service5 from '../../../../Components/Services/Service5';
import VideoPopUp from '../../../../Components/Modal/VideoPopUp';

const WhyChooseSection = () => {
    const [isVideoOpen, setVideoOpen] = useState(false);
    const openVideoPopup = () => setVideoOpen(true);
    const closeVideoPopup = () => setVideoOpen(false);

    const services = [
        {
            img: icon1,
            title: 'Quick & Easy',
            link: 'general-construction'
        },
        {
            img: icon2,
            title: 'No-Obligation',
            link: 'general-construction'
        },
        {
            img: icon3,
            title: 'Efficient & Accurate',
            link: 'general-construction'
        },
        {
            img: icon4,
            title: 'Fast & Accurate',
            link: 'general-construction'
        },
    ];

    return (
        <div className="rs-choose choose-style3">
            <div className="row no-gutters">
                <div className="col-lg-6">
                    <div className="choose-widget-content bg10">
                        <div className="sec-title mb-50 md-mb-35">
                            <span className="sub-text sub-text3 white-color">
                                <img src={shape2} alt="Images" />
                                Why Choose Us
                            </span>
                            <h2 className="title white-color">
                                People choose us for our<br />
                                quality craftsmanship
                            </h2>
                        </div>
                        <div className="row">
                            {
                                services.map((service, index) => (
                                    <div className={`col-lg-6 col-md-6 col-sm-6 ${index !== services.length ? 'mb-30' : ''}`} key={index}>
                                        <div className="rs-addon-services">
                                            <Service5
                                                service={service}
                                            />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="video-item">
                        <div className="rs-videos red-videos">
                            <div className="animate-border">
                                <Link onClick={openVideoPopup} className="popup-border popup-videos">
                                    <i className="ri-play-fill"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="contact-bd">
                        <div className="prelements-heading">
                            <div className="title-inner">
                                <h2 className="title">Any emergency help call us</h2>
                            </div>
                            <div className="description">
                                <p>(325) 512-9895</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <VideoPopUp isOpen={isVideoOpen} onRequestClose={closeVideoPopup} videoUrl="https://www.youtube.com/embed/5CLmRIHR5Zw" />
        </div>
    );
};

export default WhyChooseSection;
