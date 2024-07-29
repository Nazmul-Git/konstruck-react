import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logo1 from '../../../../assets/images/partner/style2/1.png';
import logo2 from '../../../../assets/images/partner/style2/2.png';
import logo3 from '../../../../assets/images/partner/style2/3.png';
import logo4 from '../../../../assets/images/partner/style2/4.png';
import logo5 from '../../../../assets/images/partner/style2/5.png';
import logo6 from '../../../../assets/images/partner/style2/6.png';
import logo7 from '../../../../assets/images/partner/style2/7.png';
import Partner from '../../../../Components/Partner/Partner';

const partnerLogos = [
    { src: logo1, link: "https://devsdesign.net" },
    { src: logo2, link: "https://devsdesign.net" },
    { src: logo3, link: "https://devsdesign.net" },
    { src: logo4, link: "https://devsdesign.net" },
    { src: logo5, link: "https://devsdesign.net" },
    { src: logo6, link: "https://devsdesign.net" },
    { src: logo7, link: "https://devsdesign.net" },
];

const PartnerSection = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="rs-partner partner-main-home partner-modify5">
            <div className="partner-background-overlay"></div>
            <div className="container">
                <div className="partner-content-widget">
                    <Slider {...settings}>
                        {partnerLogos.map((partner, index) => (
                            <Partner
                                key={index}
                                index={index}
                                partner={partner}
                            />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default PartnerSection;
