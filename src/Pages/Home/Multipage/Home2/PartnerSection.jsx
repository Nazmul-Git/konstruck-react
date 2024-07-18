import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../../../../assets/images/partner/style1/1.png';
import img2 from '../../../../assets/images/partner/style1/2.png';
import img3 from '../../../../assets/images/partner/style1/3.png';
import img4 from '../../../../assets/images/partner/style1/4.png';
import img5 from '../../../../assets/images/partner/style1/5.png';
import img6 from '../../../../assets/images/partner/style1/6.png';
import img7 from '../../../../assets/images/partner/style1/7.png';
import Partner from '../../../../Components/Partner/Partner';

const PartnerSection = () => {
    // Partner logos data
    const partners = [
        { src: img1, link: 'https://devsdesign.net' },
        { src: img2, link: 'https://devsdesign.net' },
        { src: img3, link: 'https://devsdesign.net' },
        { src: img4, link: 'https://devsdesign.net' },
        { src: img5, link: 'https://devsdesign.net' },
        { src: img6, link: 'https://devsdesign.net' },
        { src: img7, link: 'https://devsdesign.net' },
    ];
    // Partner slider settings
    const settings = {
        dots: false,
        arrows: false, // Turn off arrows
        infinite: true,
        speed: 800,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="rs-partner partner-main-home partner-modify1">
            <div className="container">
                <div className="partner-content-widget">
                    <Slider {...settings} className="rs-carousel owl-carousel">
                        {partners.map((partner, index) => (
                            <Partner
                                key={index}
                                index={index}
                                partner={partner} />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default PartnerSection;