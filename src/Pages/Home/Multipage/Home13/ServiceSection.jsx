// Importing necessary packages and assets
import React from 'react';

// Importing images
import icon1 from '../../../../assets/images/services/style15/s-icon1.png';
import icon2 from '../../../../assets/images/services/style15/s-icon2.png';
import icon3 from '../../../../assets/images/services/style15/s-icon3.png';
import icon4 from '../../../../assets/images/services/style15/s-icon4.png';
import Service3 from '../../../../Components/Services/Service3';

// Service data
const serviceData = [
    {
        img: icon1,
        h3Title: '100% Satisfaction',
        description: 'Leverage agile frameworks to provide a robust synopsis.',
        link: '/services-style1',
        extraClass: 'ser-select'
    },
    {
        img: icon2,
        h3Title: 'Quality Work',
        description: 'Leverage agile frameworks to provide a robust synopsis.',
        link: '/services-style1',
        extraClass: ''
    },
    {
        img: icon3,
        h3Title: 'Expert Architect',
        description: 'Leverage agile frameworks to provide a robust synopsis.',
        link: '/services-style1',
        extraClass: ''
    },
    {
        img: icon4,
        h3Title: 'Strong Security',
        description: 'Leverage agile frameworks to provide a robust synopsis.',
        link: '/services-style1',
        extraClass: 'no-border'
    }
];

// ServicesSection component
const ServiceSection = () => {
    return (
        <div className="rs-services services-style17">
            <div className="container custom">
                <div className="row no-gutters">
                    {serviceData.map((service, index) => (
                        <div key={index} className={`col-xl-3 col-md-6 xl-mb-30 ${service.extraClass}`}>
                            <Service3
                                service={service}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;
