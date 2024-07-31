import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import shapeImage from '../../../../assets/images/shape-3.png';

import quoteImage from '../../../../assets/images/testimonial/style1/quote7.png';
import testi1Image from '../../../../assets/images/testimonial/style1/testi1.jpg';
import testi2Image from '../../../../assets/images/testimonial/style1/testi2.jpg';
import testi3Image from '../../../../assets/images/testimonial/style1/testi3.jpg';
import testi4Image from '../../../../assets/images/testimonial/style1/testi4.jpg';
import Testimonial from '../../../../Components/Testimonial/Testimonial';

const testimonials = [
    {
        content: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.",
        image: testi1Image,
        name: "David M. Martin",
        title: "CEO, Pro Theme"
    },
    {
        content: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.",
        image: testi2Image,
        name: "Jessica Alba",
        title: "Envato Author"
    },
    {
        content: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.",
        image: testi3Image,
        name: "Angel Maria",
        title: "Manager"
    },
    {
        content: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.",
        image: testi4Image,
        name: "Angelina Jolie",
        title: "Apps Developer"
    }
];

const TestimonialSection = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true
    };

    return (
        <div id="rs-testimonial" className="rs-testimonial testimonial-style7 bg20 pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="sec-title text-center mb-50 md-mb-35">
                    <span className="sub-text sub-text8 white-color">
                        <img src={shapeImage} alt="Images" />
                        Testimonial
                    </span>
                    <h2 className="title white-color">
                        Customers About Our Solar<br />
                        Panels
                    </h2>
                </div>
                <Slider className="slider testi-slide-1" {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <Testimonial
                            key={index}
                            quoteImg={quoteImage}
                            quote={testimonial.content}
                            image={testimonial.image}
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
