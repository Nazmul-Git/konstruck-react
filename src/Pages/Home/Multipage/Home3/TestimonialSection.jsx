import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testi1 from '../../../../assets/images/testimonial/style1/testi1.jpg';
import testi2 from '../../../../assets/images/testimonial/style1/testi2.jpg';
import testi3 from '../../../../assets/images/testimonial/style1/testi3.jpg';
import testi4 from '../../../../assets/images/testimonial/style1/testi4.jpg';
import Testimonial2 from '../../../../Components/Testimonial/Testimonial2';
import { Link } from 'react-router-dom';

const testimonials = [
    {
        image: testi1,
        text: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.',
        name: 'Megan Fox',
        title: 'Senior CEO'
    },
    {
        image: testi2,
        text: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.',
        name: 'Angelina Jolie',
        title: 'Envato Advisor'
    },
    {
        image: testi3,
        text: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.',
        name: 'Matt Damon',
        title: 'Envato User'
    },
    {
        image: testi4,
        text: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.',
        name: 'Jessica Alba',
        title: 'Manager'
    }
];

const TestimonialSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
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
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div id="rs-testimonial" className="rs-testimonial testimonial-style3 bg3 pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="sec-title2 text-center mb-55 md-mb-35">
                    <span className="sub-title">Testimonials</span>
                    <h2 className="title pb-25">
                        Customers reviews
                    </h2>
                    <div className="heading-border-line"></div>
                </div>
                <div className="rs-carousel owl-carousel">

                    <Slider {...settings}>
                        {testimonials.map((testimonial, index) => (
                            <Testimonial2
                                key={index}
                                testimonial={testimonial}
                            />
                        ))}
                    </Slider>
                </div>
            </div >
        </div >
    );
}

export default TestimonialSection;
