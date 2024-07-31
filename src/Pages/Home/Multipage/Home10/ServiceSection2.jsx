import React from 'react';
import shapeImage from '../../../../assets/images/shape-3.png';
import serviceIcon1 from '../../../../assets/images/services/style11/icons/sr-4.png';
import serviceIcon2 from '../../../../assets/images/services/style11/icons/sr-5.png';
import serviceIcon3 from '../../../../assets/images/services/style11/icons/sr-6.png';
import serviceIcon4 from '../../../../assets/images/services/style11/icons/sr-7.png';
import Service3 from '../../../../Components/Services/Service3';

const services = [
    {
        img: serviceIcon1,
        h4Title: "Wind power system",
        description: "Nisi scelerisque eu ultrices vitae auctor eu augue ut.",
        link: "/general-construction",
    },
    {
        img: serviceIcon2,
        h4Title: "Hydropower plants",
        description: "Nisi scelerisque eu ultrices vitae auctor eu augue ut.",
        link: "/general-construction",
    },
    {
        img: serviceIcon3,
        h4Title: "Solar Panels",
        description: "Nisi scelerisque eu ultrices vitae auctor eu augue ut.",
        link: "/general-construction",
    },
    {
        img: serviceIcon4,
        h4Title: "Recycling Products",
        description: "Nisi scelerisque eu ultrices vitae auctor eu augue ut.",
        link: "/general-construction",
    }
];

const ServiceSection2 = () => {
    return (
        <div id="rs-services" className="rs-services services-style12 gray-bg5 pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="sec-title text-center mb-50 md-mb-35">
                    <span className="sub-text sub-text8">
                        <img src={shapeImage} alt="Images" />
                        What We Do
                    </span>
                    <h2 className="title">
                        Explore our services and<br />
                        programs.
                    </h2>
                </div>
                <div className="row">
                    {services.map((service, index) => (
                        <div className="col-lg-3 col-md-6 md-mb-30" key={index}>
                            <Service3
                                service={service}
                                btnStyle={'btn-style4'}
                                btnIcon={true}

                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceSection2;
