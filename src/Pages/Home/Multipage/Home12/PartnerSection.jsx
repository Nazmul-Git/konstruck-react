import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Partner from '../../../../Components/Partner/Partner';

import logo1 from '../../../../assets/images/partner/style1/1.png';
import logo2 from '../../../../assets/images/partner/style1/2.png';
import logo3 from '../../../../assets/images/partner/style1/3.png';
import logo4 from '../../../../assets/images/partner/style1/4.png';
import logo5 from '../../../../assets/images/partner/style1/5.png';
import logo6 from '../../../../assets/images/partner/style1/6.png';
import logo7 from '../../../../assets/images/partner/style1/7.png';

const PartnerSection = () => {
    const partners = [
        { src: logo1, alt: 'Logo 1' },
        { src: logo2, alt: 'Logo 2' },
        { src: logo3, alt: 'Logo 3' },
        { src: logo4, alt: 'Logo 4' },
        { src: logo5, alt: 'Logo 5' },
        { src: logo6, alt: 'Logo 6' },
        { src: logo7, alt: 'Logo 7' }
    ];

    const settings = {
        infinite: true,
        speed: 800,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };

    return (
        <div className="rs-partner partner-main-home partner-modify10 bg25">
            <div className="container">
                <div className="partner-content-widget">
                    <Slider {...settings}>
                        {partners.map((partner, index) => (
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
