import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Service3 from '../../../../Components/Services/Service3';

// Importing service icons
import icon1 from '../../../../assets/images/services/style8/icons1.png';
import icon2 from '../../../../assets/images/services/style8/icons2.png';
import icon3 from '../../../../assets/images/services/style8/icons3.png';
import icon4 from '../../../../assets/images/services/style8/icons4.png';
import icon5 from '../../../../assets/images/services/style8/icons5.png';
import icon6 from '../../../../assets/images/services/style8/icons6.png';

const services = [
    { img: icon1, h3Title: 'Air Transport', description: 'Quisque placerat vitae lacus ut scelerisque fusce luctus odio ac nibh luctu.', link: '/services-style2' },
    { img: icon2, h3Title: 'Smart Logistics', description: 'Quisque placerat vitae lacus ut scelerisque fusce luctus odio ac nibh luctu.', link: '/services-style2' },
    { img: icon3, h3Title: 'Ocean Freight', description: 'Quisque placerat vitae lacus ut scelerisque fusce luctus odio ac nibh luctu.', link: '/services-style2' },
    { img: icon4, h3Title: 'Ship Transport', description: 'Quisque placerat vitae lacus ut scelerisque fusce luctus odio ac nibh luctu.', link: '/services-style2' },
    { img: icon5, h3Title: 'Cargo Transport', description: 'Quisque placerat vitae lacus ut scelerisque fusce luctus odio ac nibh luctu.', link: '/services-style2' },
    { img: icon6, h3Title: 'Ware Housing', description: 'Quisque placerat vitae lacus ut scelerisque fusce luctus odio ac nibh luctu.', link: '/services-style2' },
];

const ServiceSection2 = () => {

    return (
        <div id="rs-services" className="rs-services services-style8 bg5 pt-120 pb-120 md-pt-75 md-pb-80">
            <div className="container">
                <div className="sec-title3 text-center mb-60 md-mb-45">
                    <span className="sub-title">Valued Services</span>
                    <h2 className="title pb-25">
                        Our experts offer a full range<br />
                        contracting services
                    </h2>
                    <div className="heading-border-line"></div>
                </div>
                <div className="row">
                    {services.map((service, index) => (
                        <div className="col-lg-4 col-md-6 mb-20" key={index}>
                            <Service3
                                key={index}
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
