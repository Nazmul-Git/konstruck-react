import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import images
import quoteImg from '../../../../assets/images/testimonial/style1/quote3.png';
import testi1 from '../../../../assets/images/testimonial/style1/testi1.jpg';
import testi2 from '../../../../assets/images/testimonial/style1/testi2.jpg';
import testi3 from '../../../../assets/images/testimonial/style1/testi3.jpg';
import testi4 from '../../../../assets/images/testimonial/style1/testi4.jpg';
import Testimonial3 from '../../../../Components/Testimonial/Testimonial3';

const testimonialData = [
    {
        desc: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.',
        img: testi1,
        name: 'David M. Martin',
        designation: 'CEO, Pro Theme'
    },
    {
        desc: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.',
        img: testi2,
        name: 'Melania Trump',
        designation: 'Assistant Director'
    },
    {
        desc: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.',
        img: testi3,
        name: 'Abdur Rashid',
        designation: 'CEO, Brick Consulting'
    },
    {
        desc: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.',
        img: testi4,
        name: 'Maria Masud',
        designation: 'Apps Developer'
    }
];

const TestimonialSection = () => {
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
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="rs-testimonial testimonial-style4 bg14 pt-120 pb-120 md-pt-80 md-pb-80 sm-pb-60">
            <div className="container">
                <div className="sec-title text-center mb-55 md-mb-40">
                    <span className="sub-text sub-text4">Testimonials</span>
                    <h2 className="title title3">
                        Customers<span> reviews.</span>
                    </h2>
                </div>
                <Slider {...settings} className='rs-carousel owl-carousel'>
                    {testimonialData.map((testimonial, index) => (
                        <Testimonial3
                            key={index}
                            testimonial={testimonial}
                            quoteImg={quoteImg}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default TestimonialSection;
