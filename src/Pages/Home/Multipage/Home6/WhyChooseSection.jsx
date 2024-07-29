import React, { useState } from 'react';
import icon1 from '../../../../assets/images/choose/style2/icons/1.png';
import icon2 from '../../../../assets/images/choose/style2/icons/2.png';
import icon3 from '../../../../assets/images/choose/style2/icons/3.png';
import VideoPopUp from '../../../../Components/Modal/VideoPopUp';
import { Link } from 'react-router-dom';
import Service6 from '../../../../Components/Services/Service6';

const WhyChooseSection = () => {
    const [isVideoOpen, setVideoOpen] = useState(false);

    const services = [
        {
            icon: icon1,
            h4Title: "Guaranteed Works",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur proident.",
        },
        {
            icon: icon2,
            h4Title: "Fast Services",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur proident.",
        },
        {
            icon: icon3,
            h4Title: "24/7 Emergency Support",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur proident.",
        },
    ];

    const openVideoPopup = () => setVideoOpen(true);
    const closeVideoPopup = () => setVideoOpen(false);

    return (
        <div className="rs-choose choose-style4">
            <div className="row">
                <div className="col-lg-6">
                    <div className="rs-choose-content">
                        <div className="sec-title mb-45">
                            <span className="sub-text sub-text5">Why Choose Us</span>
                            <h2 className="title">
                                The perfect solution for Plumber Services
                            </h2>
                        </div>
                        {services.map((service, index) => (
                            <div className={`rs-addon-services ${index < services.length - 1 ? 'mb-38' : ''}`} key={index}>
                                <Service6
                                    service={service}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-lg-6 video-item">
                    <div className="rs-videos blue-videos">
                        <div className="animate-border">
                            <Link onClick={openVideoPopup} className="popup-border popup-videos">
                                <i className="ri-play-fill"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <VideoPopUp isOpen={isVideoOpen} onRequestClose={closeVideoPopup} videoUrl="https://www.youtube.com/embed/5CLmRIHR5Zw" />
        </div>
    );
};

export default WhyChooseSection;
