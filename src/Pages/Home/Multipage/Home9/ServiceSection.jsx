import React from 'react';
import serviceIcon1 from '../../../../assets/images/services/style10/icons/ser1.png';
import serviceIcon2 from '../../../../assets/images/services/style10/icons/ser2.png';
import serviceIcon3 from '../../../../assets/images/services/style10/icons/ser3.png';
import serviceIcon4 from '../../../../assets/images/services/style10/icons/ser4.png';
import serviceIcon5 from '../../../../assets/images/services/style10/icons/ser5.png';
import serviceIcon6 from '../../../../assets/images/services/style10/icons/ser6.png';
import Service3 from '../../../../Components/Services/Service3';

const services = [
    {
        img: serviceIcon1,
        title: 'Architecture',
        description: 'The planning of your project starts here. Working together with your architect.',
        link: '/general-construction',
        serviceBtn: 'Read More',
    },
    {
        img: serviceIcon2,
        title: 'Interior Design',
        description: 'The planning of your project starts here. Working together with your architect.',
        link: '/general-construction',
        serviceBtn: 'Read More',
    },
    {
        img: serviceIcon3,
        title: 'Renovation',
        description: 'The planning of your project starts here. Working together with your architect.',
        link: '/general-construction',
        serviceBtn: 'Read More',
    },
    {
        img: serviceIcon4,
        title: 'Construction',
        description: 'The planning of your project starts here. Working together with your architect.',
        link: '/general-construction',
        serviceBtn: 'Read More',
    },
    {
        img: serviceIcon5,
        title: 'Planning',
        description: 'The planning of your project starts here. Working together with your architect.',
        link: '/general-construction',
        serviceBtn: 'Read More',
    },
    {
        img: serviceIcon6,
        title: '3D Animation',
        description: 'The planning of your project starts here. Working together with your architect.',
        link: '/general-construction',
        serviceBtn: 'Read More',
    }
];

const ServiceSection = () => {
    return (
        <div className="rs-services services-style10 gray-bg5 pt-100 pb-100 md-pt-70 md-pb-70">
            <div className="container custom2">
                <div className="sec-title text-center mb-45">
                    <span className="sub-text sub-text7">Archtek Services</span>
                    <h2 className="title">Our Featured Services</h2>
                </div>
                <div className="row">
                    {services.map((service, index) => (
                        <div className="col-lg-4 col-md-6 mb-20" key={index}>
                            <Service3
                                service={service}
                                serviceContCls={'services-content'}
                                btnStyle={'btn-style4'}
                                linkCls='btn-text'
                                btnIcon={true}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;
