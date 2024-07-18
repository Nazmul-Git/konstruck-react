import React, { useState } from 'react';
import shapeImage from '../../../../assets/images/shape-1.png'; // Import shape image
import ProgressBar from '../../../../Components/ProgressBar/ProgressBar';
import { Link } from 'react-router-dom';
import VideoPopUp from '../../../../Components/Modal/VideoPopUp';

const ChooseUsSection = () => {
    
    const [isVideoOpen, setVideoOpen] = useState(false);
    const openVideoPopup = () => setVideoOpen(true);
    const closeVideoPopup = () => setVideoOpen(false);
    // Example data for services
    const services = [
        { id: 1, title: 'Best sustainability' },
        { id: 2, title: 'Health and safety' },
        { id: 3, title: 'Modern methods' },
        { id: 4, title: 'Certified engineer' }
    ];


    return (
        <div className="rs-choose choose-style1">
            <div className="row no-gutters">
                <div className="col-lg-6 md-mb-50 video-item">
                    <div className="rs-videos">
                        <div className="animate-border">
                            <Link onClick={openVideoPopup} className="popup-border popup-videos">
                                <i className="ri-play-fill"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="widget-wrap-content">
                        <div className="sec-title mb-46 md-mb-25">
                            <span className="sub-text">
                                <img src={shapeImage} alt="Images" /> {/* Using imported shape image */}
                                Why Choose Us
                            </span>
                            <h2 className="title pb-20">
                                Why you should choose<br />
                                our konstruk platform.
                            </h2>
                            <p className="desc">
                                Nor is there anyone who loves or pursues or desires to obtain pain of the<br />
                                itself, because it is pain, but occasionally circumstances.
                            </p>
                        </div>
                        <div className="row">
                            {services.map((service) => (
                                <div key={service.id} className="col-lg-6 mb-25">
                                    <div className="rs-addon-services">
                                        <div className="services-item">
                                            <div className="serial-number">{service.id}</div>
                                            <div className="services-text">
                                                <div className="services-title">
                                                    <h4 className="title">{service.title}</h4>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="working-skill-part pt-50">
                            <div className="row y-middle">
                                <div className="col-lg-4">
                                    <div className="title-inner mb-10">
                                        <h4 className="title">Working skill</h4>
                                    </div>
                                    <div className="title-inner">
                                        <h4 className="title">Client rating</h4>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="rs-skillbar skillbar-style1 mb-10">
                                        <div className="cl-skill-bar">
                                            {/* Start Skill Bar */}
                                            <ProgressBar
                                                targetProgress={95}
                                                bgBarColor={'#E8EAEE'}
                                                bgBarProgressColor={'#FFB703'}
                                                duration={2000}
                                                barPercentageText={95}
                                            />
                                        </div>
                                    </div>
                                    <ul className="icon-list-item">
                                        <li><i className="ri-star-s-fill"></i></li>
                                        <li><i className="ri-star-s-fill"></i></li>
                                        <li><i className="ri-star-s-fill"></i></li>
                                        <li><i className="ri-star-s-fill"></i></li>
                                        <li><i className="ri-star-s-fill"></i></li>
                                    </ul>
                                </div>
                            </div>
                            <p className="view-result pt-15">5.00 Average Based On 50 Rating – <Link to="#"><span>More information</span></Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <VideoPopUp isOpen={isVideoOpen} onRequestClose={closeVideoPopup} videoUrl="https://www.youtube.com/embed/5CLmRIHR5Zw" />
        </div>
    );
};

export default ChooseUsSection;
