import React from 'react';
import Slider from 'react-slick';
import Partner from '../../../../Components/Partner/Partner';

// Import images
import partnerImage1 from '../../../../assets/images/partner/style1/1.png';
import partnerImage2 from '../../../../assets/images/partner/style1/2.png';
import partnerImage3 from '../../../../assets/images/partner/style1/3.png';
import partnerImage4 from '../../../../assets/images/partner/style1/4.png';
import partnerImage5 from '../../../../assets/images/partner/style1/5.png';
import partnerImage6 from '../../../../assets/images/partner/style1/6.png';
import partnerImage7 from '../../../../assets/images/partner/style1/7.png';

// Partner data
const partners = [
    { src: partnerImage1, link: 'https://devsdesign.net' },
    { src: partnerImage2, link: 'https://devsdesign.net' },
    { src: partnerImage3, link: 'https://devsdesign.net' },
    { src: partnerImage4, link: 'https://devsdesign.net' },
    { src: partnerImage5, link: 'https://devsdesign.net' },
    { src: partnerImage6, link: 'https://devsdesign.net' },
    { src: partnerImage7, link: 'https://devsdesign.net' }
];

// Slick slider settings
const settings = {
    dots: false,
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
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: false
            }
        }
    ]
};

const PartnerSection = () => {
    return (
        <div className="rs-partner partner-main-home partner-modify10">
            <div className="container">
                <div className="partner-content-widget">
                    <Slider className="rs-carousel" {...settings}>
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
