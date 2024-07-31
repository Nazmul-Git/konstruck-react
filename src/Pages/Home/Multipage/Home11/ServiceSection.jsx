import React from 'react';
import Service3 from '../../../../Components/Services/Service3';

// Import images
import serviceImage1 from '../../../../assets/images/services/style11/orange-icon/sr-1.png';
import serviceImage2 from '../../../../assets/images/services/style11/orange-icon/sr-2.png';
import serviceImage3 from '../../../../assets/images/services/style11/orange-icon/sr-3.png';

// Service data
const services = [
    {
        img: serviceImage1,
        h4Title: 'Preconstruction',
        description: 'At tellus at urna condimentum mattis pellentesque egestas fringilla.',
        link: '/general-construction'
    },
    {
        img: serviceImage2,
        h4Title: 'Construction',
        description: 'At tellus at urna condimentum mattis pellentesque egestas fringilla.',
        link: '/general-construction'
    },
    {
        img: serviceImage3,
        h4Title: 'Reconstruction',
        description: 'At tellus at urna condimentum mattis pellentesque egestas fringilla.',
        link: '/general-construction'
    }
];

const ServiceSection = () => {
    return (
        <div id="rs-services" className="rs-services services-style14 gray-bg5 pt-115 pb-120 md-pt-75 md-pb-80">
            <div className="container">
                <div className="sec-title text-center mb-50 md-mb-35">
                    <h2 className="title title5 pb-27">Featured Services</h2>
                    <p className="desc desc10">
                        At tellus at urna condimentum mattis pellentesque. Egestas egestas fringilla<br />
                        phasellus faucibus. Praesent ugiat nibh pulvinar gravida.
                    </p>
                </div>
                <div className="row">
                    {services.map((service, index) => (
                        <div className="col-lg-4 col-md-6 md-mb-30" key={index}>
                            <Service3
                                service={service}
                                titleWithAncor={true}
                                btnStyle={'btn-style5'}
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
