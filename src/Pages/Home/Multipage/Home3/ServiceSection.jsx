import React from 'react';
import ServiceImage1 from '../../../../assets/images/services/style2/1.png';
import ServiceImage2 from '../../../../assets/images/services/style2/2.png';
import ServiceImage3 from '../../../../assets/images/services/style2/3.png';
import Service2 from '../../../../Components/Services/Service2';

const ServiceSection = () => {
    // Array of service data
    const servicesData = [
        {
            title: 'Sustainable System',
            link: '/general-construction',
            image: ServiceImage1,
            description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews iterative approaches to corporate.'
        },
        {
            title: 'Quality Services',
            link: '/project-managment',
            image: ServiceImage2,
            description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews iterative approaches to corporate.'
        },
        {
            title: 'Remodeling Experts',
            link: 'preconstruction',
            image: ServiceImage3,
            description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews iterative approaches to corporate.'
        }
    ];

    return (
        <div className="rs-services services-style2 pb-120 md-pb-0">
            <div className="container">
                <div className="row no-gutters">
                    {servicesData.map((service, index) => (
                        <div key={index} className="col-lg-4">
                            <Service2
                                index={index}
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
