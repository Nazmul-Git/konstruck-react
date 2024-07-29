import React from 'react';

import icon1 from '../../../../assets/images/services/style7/icons/1.png';
import icon2 from '../../../../assets/images/services/style7/icons/2.png';
import icon3 from '../../../../assets/images/services/style7/icons/3.png';
import ServiceCard from '../../../../Components/Services/ServiceCard';

const servicesData = [
    {
        icon: icon1,
        title: "Transport Solutions",
        description: "Leverage agile frameworks to provide a robust synopsis for high level overviews iterative approaches to corporate.",
        link: "services-style1.html",
        backgroundClass: ""
    },
    {
        icon: icon2,
        title: "Warehousing Solutions",
        description: "Leverage agile frameworks to provide a robust synopsis for high level overviews iterative approaches to corporate.",
        link: "services-style1.html",
        backgroundClass: "ser-bg2"
    },
    {
        icon: icon3,
        title: "Transport Solutions",
        description: "Leverage agile frameworks to provide a robust synopsis for high level overviews iterative approaches to corporate.",
        link: "services-style1.html",
        backgroundClass: "ser-bg3"
    }
];

const ServicesSection = () => {
    return (
        <div className="rs-services services-style7 pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="row">
                    {servicesData.map((service, index) => (
                        <div className="col-lg-4 col-md-6 mb-30" key={index}>
                            <ServiceCard
                                service={service}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
