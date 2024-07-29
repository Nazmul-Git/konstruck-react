import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import images
import testi1 from '../../../../assets/images/testimonial/style1/testi1.jpg';
import testi2 from '../../../../assets/images/testimonial/style1/testi2.jpg';
import testi3 from '../../../../assets/images/testimonial/style1/testi3.jpg';
import testi4 from '../../../../assets/images/testimonial/style1/testi4.jpg';
import Testimonial4 from '../../../../Components/Testimonial/Testimonial4';

const testimonialData = [
    {
        image: testi1,
        content: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.",
        name: "David M. Martin",
        designation: "CEO, Pro Theme",
    },
    {
        image: testi2,
        content: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.",
        name: "Maria Masud",
        designation: "Apps Developer",
    },
    {
        image: testi3,
        content: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.",
        name: "David M. Martin",
        designation: "CEO, Brick Consulting",
    },
    {
        image: testi4,
        content: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.",
        name: "Angelina Jolie",
        designation: "Graphic Designer",
    },
];

const TestimonialSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="rs-testimonial testimonial-style5 bg3 pt-120 pb-120 md-pt-75 md-pb-75">
            <div className="testi-overlay-bg"></div>
            <div className="container">
                <div className="sec-title3 text-center mb-60 md-mb-45">
                    <span className="sub-title">Testimonials</span>
                    <h2 className="title pb-25">Customers reviews</h2>
                    <div className="heading-border-line"></div>
                </div>
                <Slider {...settings} className="rs-carousel owl-carousel">
                    {testimonialData.map((item, index) => (
                        <div key={index} className="testi-item">
                            <Testimonial4
                                item={item}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default TestimonialSection;
