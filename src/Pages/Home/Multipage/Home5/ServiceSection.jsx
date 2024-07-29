import React from 'react';

// Import images
import img1 from '../../../../assets/images/services/style5/1.png';
import img2 from '../../../../assets/images/services/style5/2.png';
import img3 from '../../../../assets/images/services/style5/3.png';
import img4 from '../../../../assets/images/services/style5/4.png';
import img5 from '../../../../assets/images/services/style5/5.png';
import img6 from '../../../../assets/images/services/style5/6.png';
import Service3 from '../../../../Components/Services/Service3';

const servicesData = [
    {
        img: img1,
        alt: 'Rigging',
        h4Title: 'Rigging',
        description: 'Quisque placerat vitae odio lacus uten scelerisque. Fusce luctus odio ac nibh luctus consulting placerat.',
        link: '/services-style1',
        serviceBtn: 'Learn More'
    },
    {
        img: img2,
        alt: 'Pipping',
        h4Title: 'Pipping',
        description: 'Quisque placerat vitae odio lacus uten scelerisque. Fusce luctus odio ac nibh luctus consulting placerat.',
        link: '/services-style1',
        serviceBtn: 'Learn More'
    },
    {
        img: img3,
        alt: 'Wood Crating',
        h4Title: 'Wood Crating',
        description: 'Quisque placerat vitae odio lacus uten scelerisque. Fusce luctus odio ac nibh luctus consulting placerat.',
        link: '/services-style1',
        serviceBtn: 'Learn More'
    },
    {
        img: img4,
        alt: 'General Repair',
        h4Title: 'General Repair',
        description: 'Quisque placerat vitae odio lacus uten scelerisque. Fusce luctus odio ac nibh luctus consulting placerat.',
        link: '/services-style1',
        serviceBtn: 'Learn More'
    },
    {
        img: img5,
        alt: 'Electrical Tower',
        h4Title: 'Electrical Tower',
        description: 'Quisque placerat vitae odio lacus uten scelerisque. Fusce luctus odio ac nibh luctus consulting placerat.',
        link: '/services-style1',
        serviceBtn: 'Learn More'
    },
    {
        img: img6,
        alt: 'Steel Fabrication',
        h4Title: 'Steel Fabrication',
        description: 'Quisque placerat vitae odio lacus uten scelerisque. Fusce luctus odio ac nibh luctus consulting placerat.',
        link: '/services-style1',
        serviceBtn: 'Learn More'
    }
];

const ServicesSection = () => {
    return (
        <div className="rs-services services-style5 bg13 pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="row">
                    {servicesData.map((service, index) => (
                        <div key={index} className="col-lg-4 col-md-6 mb-20">
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

export default ServicesSection;
