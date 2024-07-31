import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Partner from '../../../../Components/Partner/Partner'
import partner1 from '../../../../assets/images/partner/style2/1.png';
import partner2 from '../../../../assets/images/partner/style2/2.png';
import partner3 from '../../../../assets/images/partner/style2/3.png';
import partner4 from '../../../../assets/images/partner/style2/4.png';
import partner5 from '../../../../assets/images/partner/style2/5.png';
import partner6 from '../../../../assets/images/partner/style2/6.png';
import partner7 from '../../../../assets/images/partner/style2/7.png';

const partners = [
    { id: 1, src: partner1, link: 'https://devsdesign.net' },
    { id: 2, src: partner2, link: 'https://devsdesign.net' },
    { id: 3, src: partner3, link: 'https://devsdesign.net' },
    { id: 4, src: partner4, link: 'https://devsdesign.net' },
    { id: 5, src: partner5, link: 'https://devsdesign.net' },
    { id: 6, src: partner6, link: 'https://devsdesign.net' },
    { id: 7, src: partner7, link: 'https://devsdesign.net' },
];

const settings = {
    dots: false,
    infinite: true,
    arrows: false,
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
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            },
        },
    ],
};

const PartnerSection = () => (
    <div className="rs-partner partner-main-home partner-modify7">
        <div className="partner-background-overlay"></div>
        <div className="container">
            <div className="partner-content-widget">
                <Slider {...settings}>
                    {partners.map((partner,index) => (
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

export default PartnerSection;
