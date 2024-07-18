import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import manImg from '../../../../assets/images/testimonial/man-img.png';
import quoteImg from '../../../../assets/images/testimonial/style1/quote.png';
import testi1 from '../../../../assets/images/testimonial/style1/testi1.jpg';
import testi2 from '../../../../assets/images/testimonial/style1/testi2.jpg';
import testi3 from '../../../../assets/images/testimonial/style1/testi3.jpg';
import testi4 from '../../../../assets/images/testimonial/style1/testi4.jpg';

import Testimonial from '../../../../Components/Testimonial/Testimonial';

const testimonials = [
    {
        quote: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.",
        name: "David M. Martin",
        title: "CEO, Pro Theme",
        image: testi1
    },
    {
        quote: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.",
        name: "Jessica Alba",
        title: "Manager",
        image: testi2
    },
    {
        quote: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.",
        name: "Abdur Rashid",
        title: "CEO, Brick Consulting",
        image: testi3
    },
    {
        quote: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.",
        name: "Maria Masud",
        title: "Apps Developer",
        image: testi4
    },
];

const TestimonialSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false, // Turn off arrows
    };

    return (
        <div id="rs-testimonial" className="rs-testimonial testimonial-style2 gray-bg2 pt-120 md-pt-80 md-pb-80 sm-pb-42">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 md-mb-50">
                        <div className="testi-img">
                            <img src={manImg} alt="Testimonial" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="sec-title mb-50">
                            <span className="sub-text sub-text2">Testimonials</span>
                            <h2 className="title">Our clients reviews.</h2>
                        </div>
                        <Slider {...settings}>
                            {testimonials.map((testimonial, index) => (
                                <Testimonial
                                    key={index}
                                    quote={testimonial.quote}
                                    name={testimonial.name}
                                    title={testimonial.title}
                                    image={testimonial.image}
                                    quoteImg={quoteImg}
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;
