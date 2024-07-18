import React from 'react';
import { Link } from 'react-router-dom';
import shapeImage from '../../../../assets/images/shape-1.png';
import serviceIcon1 from '../../../../assets/images/services/main-home/main-icons/service-icon1.png';
import serviceIcon2 from '../../../../assets/images/services/main-home/main-icons/service-icon2.png';
import serviceIcon3 from '../../../../assets/images/services/main-home/main-icons/service-icon3.png';
import serviceIcon4 from '../../../../assets/images/services/main-home/main-icons/service-icon4.png';
import serviceIcon5 from '../../../../assets/images/services/main-home/main-icons/service-icon5.png';
import serviceIcon6 from '../../../../assets/images/services/main-home/main-icons/service-icon6.png';
import serviceImg1 from '../../../../assets/images/services/main-home/main-img/servic-1.jpg';
import serviceImg2 from '../../../../assets/images/services/main-home/main-img/servic-2.jpg';
import serviceImg3 from '../../../../assets/images/services/main-home/main-img/servic-3.jpg';
import serviceImg4 from '../../../../assets/images/services/main-home/main-img/servic-4.jpg';
import serviceImg5 from '../../../../assets/images/services/main-home/main-img/servic-5.jpg';
import serviceImg6 from '../../../../assets/images/services/main-home/main-img/servic-6.jpg';

const servicesData = [
    {
        img: serviceImg1,
        icon: serviceIcon1,
        title: 'General construction',
        link: 'general-construction.html',
        text: 'Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus.',
    },
    {
        img: serviceImg2,
        icon: serviceIcon2,
        title: 'Property maintenance',
        link: 'property-maintenance.html',
        text: 'Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus.',
    },
    {
        img: serviceImg3,
        icon: serviceIcon3,
        title: 'Project management',
        link: 'project-managment.html',
        text: 'Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus.',
    },
    {
        img: serviceImg4,
        icon: serviceIcon4,
        title: 'Virtual design & build',
        link: 'virtual-design-build.html',
        text: 'Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus.',
    },
    {
        img: serviceImg5,
        icon: serviceIcon5,
        title: 'Preconstruction',
        link: 'preconstruction.html',
        text: 'Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus.',
    },
    {
        img: serviceImg6,
        icon: serviceIcon6,
        title: 'Design build',
        link: 'design-build.html',
        text: 'Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus.',
    },
];

const ServiceSection = () => {
    return (
        <div className="rs-services services-main-home gray-bg pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="sec-title text-center mb-55 md-mb-35">
                    <span className="sub-text">
                        <img src={shapeImage} alt="Images" />
                        What We Do
                    </span>
                    <h2 className="title">
                        Develop comprehensive solutions<br />
                        for each project
                    </h2>
                </div>
                <div className="row">
                    {servicesData.map((service, index) => (
                        <div className="col-xl-4 col-md-6 mb-30" key={index}>
                            <div className="services-item">
                                <div className="services-wrap">
                                    <div className="services-image">
                                        <img src={service.img} alt="Services" />
                                    </div>
                                    <div className="services-content">
                                        <div className="service-inner">
                                            <div className="icon-top">
                                                <img src={service.icon} alt="Services" />
                                            </div>
                                            <div className="services-titles">
                                                <h3 className="title"><Link to={service.link}>{service.title}</Link></h3>
                                            </div>
                                            <p className="services-txt">{service.text}</p>
                                            <div className="services-btn">
                                                <Link className="btn-text" to={service.link}>Read More</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="normarl-text-area">
                                        <div className="services-titles">
                                            <h3 className="title"><Link to={service.link}>{service.title}</Link></h3>
                                        </div>
                                        <div className="icon-image">
                                            <img src={service.icon} alt="Services" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;
