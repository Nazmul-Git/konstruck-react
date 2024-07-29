import React from 'react';
import Slider from 'react-slick';
import quote from '../../../../assets/images/testimonial/style1/quote4.png';
import testi1 from '../../../../assets/images/testimonial/style1/testi1.jpg';
import testi2 from '../../../../assets/images/testimonial/style1/testi2.jpg';
import testi3 from '../../../../assets/images/testimonial/style1/testi3.jpg';
import testi4 from '../../../../assets/images/testimonial/style1/testi4.jpg';
import Testimonial from '../../../../Components/Testimonial/Testimonial';

const testimonials = [
    {
        quote: quote,
        text: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.",
        img: testi1,
        name: "David M. Martin",
        title: "CEO, Pro Theme"
    },
    {
        quote: quote,
        text: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.",
        img: testi2,
        name: "Jessica Alba",
        title: "Manager"
    },
    {
        quote: quote,
        text: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.",
        img: testi3,
        name: "Abdur Rashid",
        title: "CEO, Brick Consulting"
    },
    {
        quote: quote,
        text: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.",
        img: testi4,
        name: "Maria Masud",
        title: "Apps Developer"
    },
];

const settings = {
    dots: true,
    arrows: false,
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
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

const TestimonialSection = () => {
    return (
        <div id="rs-testimonial" className="rs-testimonial testimonial-style2 testimonial-modify2 gray-bg3 pt-120 pb-120 md-pt-80 md-pb-80 sm-pb-40">
            <div className="container">
                <div className="sec-title text-center mb-45">
                    <span className="sub-text sub-text5">Testimonials</span>
                    <h2 className="title">
                        Our clients reviews.
                    </h2>
                </div>
                <Slider {...settings} className="rs-carousel owl-carousel">
                    {testimonials.map((testimonial, index) => (
                        <Testimonial
                            key={index}
                            quoteImg={testimonial.quote}
                            image={testimonial.img}
                            title={testimonial.title}
                            name={testimonial.name}
                            quote={testimonial.text}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default TestimonialSection;
