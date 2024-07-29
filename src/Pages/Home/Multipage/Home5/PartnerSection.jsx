import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import images
import partner1 from '../../../../assets/images/partner/style2/1.png';
import partner2 from '../../../../assets/images/partner/style2/2.png';
import partner3 from '../../../../assets/images/partner/style2/3.png';
import partner4 from '../../../../assets/images/partner/style2/4.png';
import partner5 from '../../../../assets/images/partner/style2/5.png';
import partner6 from '../../../../assets/images/partner/style2/6.png';
import partner7 from '../../../../assets/images/partner/style2/7.png';
import Partner from '../../../../Components/Partner/Partner';

const partners = [
    { src: partner1, link: 'https://devsdesign.net' },
    { src: partner2, link: 'https://devsdesign.net' },
    { src: partner3, link: 'https://devsdesign.net' },
    { src: partner4, link: 'https://devsdesign.net' },
    { src: partner5, link: 'https://devsdesign.net' },
    { src: partner6, link: 'https://devsdesign.net' },
    { src: partner7, link: 'https://devsdesign.net' }
];

const PartnerSection = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="rs-partner partner-main-home partner-modify4">
            <div className="partner-background-overlay"></div>
            <div className="container">
                <div className="partner-content-widget">
                    <Slider {...settings}>
                        {partners.map((partner, index) => (
                            <Partner
                                key={index}
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
