import React from 'react';
import icon1 from '../../../../assets/images/services/style13/icon1.png';
import icon2 from '../../../../assets/images/services/style13/icon2.png';
import icon3 from '../../../../assets/images/services/style13/icon3.png';
import icon4 from '../../../../assets/images/services/style13/icon4.png';
import Service6 from '../../../../Components/Services/Service6';

const servicesData = [
    {
        icon: icon1,
        h5title: 'Construction',
        description: 'Neque egestas congue quisque egestas diam in arcu cursus',
    },
    {
        icon: icon2,
        h5title: 'Landscape Design',
        description: 'Neque egestas congue quisque egestas diam in arcu cursus',
    },
    {
        icon: icon3,
        h5title: 'Interior Design',
        description: 'Neque egestas congue quisque egestas diam in arcu cursus',
    },
    {
        icon: icon4,
        h5title: 'Urban Planning',
        description: 'Neque egestas congue quisque egestas diam in arcu cursus',
    },
];

const ServiceSection = () => {
    return (
        <div className="rs-services services-style15 gray-bg9 pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="services-overlay"></div>
            <div className="container">
                <div className="sec-title text-center mb-35 md-mb-25">
                    <span className="sub-text sub-text9">What We Do</span>
                    <h2 className="title title6 pb-20">
                        Featured Services
                    </h2>
                </div>
                <div className="row">
                    {servicesData.map((service, index) => (
                        <div key={index} className="col-xl-3 col-md-6 xl-mb-30">
                            <div className="services-item">
                                <Service6
                                    service={service}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;
