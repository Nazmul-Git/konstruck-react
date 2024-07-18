import React from 'react';

// Import images
import ServiceIcon1 from '../../../../assets/images/services/style3/ser-icon1.png';
import ServiceIcon2 from '../../../../assets/images/services/style3/ser-icon2.png';
import ServiceIcon3 from '../../../../assets/images/services/style3/ser-icon3.png';
import ServiceIcon4 from '../../../../assets/images/services/style3/ser-icon4.png';
import ServiceIcon5 from '../../../../assets/images/services/style3/ser-icon5.png';
import ServiceIcon6 from '../../../../assets/images/services/style3/ser-icon6.png';
import Service3 from '../../../../Components/Services/Service3';

const services = [
    {
        title: "General construction",
        link: "/general-construction",
        img: ServiceIcon1,
        description: "Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus consulting."
    },
    {
        title: "Property maintenance",
        link: "/property-maintenance",
        img: ServiceIcon2,
        description: "Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus consulting."
    },
    {
        title: "Project management",
        link: "/project-management",
        img: ServiceIcon3,
        description: "Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus consulting."
    },
    {
        title: "Virtual design & build",
        link: "/virtual-design-build",
        img: ServiceIcon4,
        description: "Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus consulting."
    },
    {
        title: "Preconstruction",
        link: "/preconstruction",
        img: ServiceIcon5,
        description: "Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus consulting."
    },
    {
        title: "Design build",
        link: "/design-build",
        img: ServiceIcon6,
        description: "Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus consulting."
    },
];

const ServiceSection2 = () => {
    return (
        <div id="rs-services" className="rs-services services-style3 bg5 pt-120 pb-120 md-pt-70 md-pb-80">
            <div className="container">
                <div className="sec-title2 text-center mb-65 md-mb-45">
                    <span className="sub-title">Valued Services</span>
                    <h2 className="title pb-25">
                        Our experts offer a full range<br />
                        contracting services
                    </h2>
                    <div className="heading-border-line"></div>
                </div>
                <div className="row">
                    {services.map((service, index) => (
                        <div className="col-lg-4 col-md-6 mb-60" key={index}>
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
