import React from 'react';
import sr1 from '../../../../assets/images/services/style11/icons/sr-1.png';
import sr2 from '../../../../assets/images/services/style11/icons/sr-2.png';
import sr3 from '../../../../assets/images/services/style11/icons/sr-3.png';
import Service3 from '../../../../Components/Services/Service3';

const servicesData = [
    {
        img: sr1,
        title: 'Wind power system',
        description: 'Nisi scelerisque eu ultrices vitae auctor eu augue ut.'
    },
    {
        img: sr2,
        title: 'Solar Power System',
        description: 'Nisi scelerisque eu ultrices vitae auctor eu augue ut.'
    },
    {
        img: sr3,
        title: 'Electric Vehicle',
        description: 'Nisi scelerisque eu ultrices vitae auctor eu augue ut.'
    }
];

const ServiceSection = () => {
    return (
        <div className="rs-services services-style11">
            <div className="container">
                <div className="row">
                    {servicesData.map((service, index) => (
                        <div key={index} className="col-lg-4 col-md-6 md-mb-30">
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
