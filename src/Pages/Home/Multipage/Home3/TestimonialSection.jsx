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
        <div id="rs-testimonial" className="rs-blog blog-main-home blog-modify2 bg5 pt-120 pb-115 md-pt-0 md-pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="sec-title2 mb-55 md-mb-35">
                            <span className="sub-title">Latest News</span>
                            <h2 className="title pb-25">
                                Read latest updates
                            </h2>
                            <div className="heading-border-line left-style"></div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="btn-part text-right md-left md-mb-50">
                            <Link className="readon more discover" to="/blog-single">View Updates</Link>
                        </div>
                    </div>
                </div>
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <Testimonial2
                            key={index}
                            testimonial={testimonial}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default TestimonialSection;
