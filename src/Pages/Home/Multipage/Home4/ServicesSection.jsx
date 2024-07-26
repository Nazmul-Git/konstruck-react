import React from 'react';
import shape2 from '../../../../assets/images/shape-2.png';
import service1 from '../../../../assets/images/services/style4/service-1.png';
import service2 from '../../../../assets/images/services/style4/service-2.png';
import service3 from '../../../../assets/images/services/style4/service-3.png';
import service4 from '../../../../assets/images/services/style4/service-4.png';
import service5 from '../../../../assets/images/services/style4/service-5.png';
import service6 from '../../../../assets/images/services/style4/service-6.png';
import Service4 from '../../../../Components/Services/Service4';

const services = [
    {
        img: service1,
        title: 'General construction',
        link: '/general-construction'
    },
    {
        img: service2,
        title: 'Modified Roofing',
        link: '/services-style1'
    },
    {
        img: service3,
        title: 'Metal Roofing',
        link: '/services-style1'
    },
    {
        img: service4,
        title: 'Vegetative Roofing',
        link: '/services-style1'
    },
    {
        img: service5,
        title: 'Inspections',
        link: '/services-style1'
    },
    {
        img: service6,
        title: 'Siding & Gutters',
        link: '/services-style1'
    }
];

const ServicesSection = () => {
    return (
        <div className="rs-services services-style4 bg10 pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="sec-title text-center mb-60 md-mb-40">
                    <span className="sub-text sub-text3 white-color">
                        <img src={shape2} alt="Images" />
                        What We Do
                    </span>
                    <h2 className="title white-color">
                        Leading roof repair and<br />
                        re-roofing services
                    </h2>
                </div>
                <div className="row">
                    {
                        services.map((service, index) => (
                            <div className={`col-lg-4 col-md-6 ${index === 0 ? 'md-mb-40' : ''}`} key={index}>
                                <Service4 service={service} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
