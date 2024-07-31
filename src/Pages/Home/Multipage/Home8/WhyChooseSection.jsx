import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import VideoPopUp from '../../../../Components/Modal/VideoPopUp';

import icon1 from '../../../../assets/images/choose/style2/icons/1.png';
import icon2 from '../../../../assets/images/choose/style2/icons/2.png';
import icon3 from '../../../../assets/images/choose/style2/icons/3.png';
import Service6 from '../../../../Components/Services/Service6';

const services = [
    {
        id: 1,
        icon: icon1,
        h4Title: 'Dedicated Fleet',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur proident.',
    },
    {
        id: 2,
        icon: icon2,
        h4Title: 'Fast Services',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur proident.',
    },
    {
        id: 3,
        icon: icon3,
        h4Title: '24/7 Emergency Support',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur proident.',
    },
];

const WhyChooseSection = () => {

    const [isVideoOpen, setVideoOpen] = useState(false);
    const openVideoPopup = () => setVideoOpen(true);
    const closeVideoPopup = () => setVideoOpen(false);

    return (
        <div className="rs-choose choose-style4 choose-modify1 gray-bg4 pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 md-mb-50">
                        <div className="rs-choose-content">
                            <div className="sec-title mb-45">
                                <span className="sub-text sub-text6">Why Choose Us</span>
                                <h2 className="title">
                                    The perfect solution for Carpenter Services
                                </h2>
                            </div>
                            {services.map(service => (
                                <div key={service.id} className="rs-addon-services mb-38">
                                    <Service6
                                        service={service}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="video-item">
                            <div className="rs-videos orange-videos">
                                <div className="animate-border">
                                    <Link onClick={openVideoPopup} className="popup-border popup-videos">
                                        <i className="ri-play-fill"></i>
                                    </Link>
                                </div>
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
