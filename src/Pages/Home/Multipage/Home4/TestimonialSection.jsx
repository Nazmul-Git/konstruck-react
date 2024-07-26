import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import shape2 from '../../../../assets/images/shape-2.png';
import quote2 from '../../../../assets/images/testimonial/style1/quote2.png';
import testi1 from '../../../../assets/images/testimonial/style1/testi1.jpg';
import testi2 from '../../../../assets/images/testimonial/style1/testi2.jpg';
import testi3 from '../../../../assets/images/testimonial/style1/testi3.jpg';
import testi4 from '../../../../assets/images/testimonial/style1/testi4.jpg';
import Testimonial from '../../../../Components/Testimonial/Testimonial';

const testimonials = [
    {
        img: testi1,
        name: "David M. Martin",
        title: "CEO, Pro Theme",
        content: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
    },
    {
        img: testi2,
        name: "Jessica Alba",
        title: "Manager",
        content: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
    },
    {
        img: testi3,
        name: "Abdur Rashid",
        title: "CEO, Brick Consulting",
        content: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
    },
    {
        img: testi4,
        name: "Maria Masud",
        title: "Apps Developer",
        content: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway."
    }
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
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div id="rs-testimonial" className="rs-testimonial testimonial-style2 testimonial-modify1 pt-120 pb-120 md-pt-80 md-pb-80 sm-pb-45">
            <div className="container">
                <div className="sec-title text-center mb-60 md-mb-40">
                    <span className="sub-text sub-text3">
                        <img src={shape2} alt="Images" />
                        Testimonials
                    </span>
                    <h2 className="title">
                        Our clients reviews.
                    </h2>
                </div>
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <Testimonial
                            key={index}
                            quoteImg={quote2}
                            quote={testimonial.content}
                            image={testimonial.img}
                            name={testimonial.name}
                            title={testimonial.title}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default TestimonialSection;