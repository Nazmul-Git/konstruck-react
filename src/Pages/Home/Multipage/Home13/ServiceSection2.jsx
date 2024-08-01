import React from 'react';
import icon1 from '../../../../assets/images/services/style16/icon-1.png'; // Update the path accordingly
import icon2 from '../../../../assets/images/services/style16/icon-2.png';
import icon3 from '../../../../assets/images/services/style16/icon-3.png';
import icon4 from '../../../../assets/images/services/style16/icon-4.png';
import Service3 from '../../../../Components/Services/Service3';

const servicesData = [
    {
        img: icon1,
        h3Title: 'Construction Management',
        description1: 'Neque egestas congue quisque',
        description2: 'egestas diam arcu cursus',
    },
    {
        img: icon2,
        h3Title: 'Facade Engineering',
        description1: 'Neque egestas congue quisque',
        description2: 'egestas diam arcu cursus',
    },
    {
        img: icon3,
        h3Title: 'Apartment Design',
        description1: 'Neque egestas congue quisque',
        description2: 'egestas diam arcu cursus',
    },
    {
        img: icon4,
        h3Title: 'Urban Planning',
        description1: 'Neque egestas congue quisque',
        description2: 'egestas diam arcu cursus',
    },
];

const ServiceSection2 = () => {
    return (
        <div id="rs-services" className="rs-services services-style18 bg29 pt-115 pb-120 md-pt-70 md-pb-80">
            <div className="container">
                <div className="sec-title text-center mb-45">
                    <div className="title-inner ser-inner">
                        <h2 className="title"><span className="watermark">02</span>Our Services</h2>
                    </div>
                    <h2 className="title title5 white-color">
                        Our core Services
                    </h2>
                </div>
                <div className="row y-middle">
                    {servicesData.map((service, index) => (
                        <div key={index} className={`col-xl-3 col-md-6 ${index < 3 ? 'xl-mb-30' : ''} ${index === 2 ? 'sm-mb-30' : ''}`}>
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

export default ServiceSection2;
