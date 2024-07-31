import React from 'react';
import service1 from '../../../../assets/images/services/style9/service1.jpg'; // Update with the correct path
import service2 from '../../../../assets/images/services/style9/service2.jpg';
import service3 from '../../../../assets/images/services/style9/service3.jpg';
import service4 from '../../../../assets/images/services/style9/service4.jpg';
import service5 from '../../../../assets/images/services/style9/service5.jpg';
import service6 from '../../../../assets/images/services/style9/service6.jpg';
import service7 from '../../../../assets/images/services/style9/service7.jpg';
import service8 from '../../../../assets/images/services/style9/service8.jpg';
import Service3 from '../../../../Components/Services/Service3';

const services = [
    {
        id: 1,
        h4Title: 'General Carpentry',
        img: service1,
        link: '/services-style1'
    },
    {
        id: 2,
        h4Title: 'Furniture Paint & Polish',
        img: service2,
        link: '/services-style1'
    },
    {
        id: 3,
        h4Title: 'Furniture Assembly',
        img: service3,
        link: '/services-style1'
    },
    {
        id: 4,
        h4Title: 'Furniture Repair & Fixes',
        img: service4,
        link: '/services-style1'
    },
    {
        id: 5,
        h4Title: 'Furniture Design',
        img: service5,
        link: '/services-style1'
    },
    {
        id: 6,
        h4Title: 'Indoor & Outdoor',
        img: service6,
        link: '/services-style1'
    },
    {
        id: 7,
        h4Title: 'Indoor & Outdoor',
        img: service7,
        link: '/services-style1'
    },
    {
        id: 8,
        h4Title: 'Renovation & Decoration',
        img: service8,
        link: '/services-style1'
    }
];

const ServiceSection = () => {
    return (
        <div className="rs-services services-style9 gray-bg4 pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="sec-title text-center mb-45 md-mb-25">
                    <span className="sub-text sub-text6">Latest Services</span>
                    <h2 className="title">
                        Our professional carpenter<br />
                        services solutions
                    </h2>
                </div>
                <div className="row">
                    {services.map((service) => (
                        <div key={service.id} className="col-xl-3 col-md-6 mb-20">
                            <Service3
                                serviceImageClass={'services-image'}
                                service={service}
                                withAncor={true}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;
