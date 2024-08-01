import React from 'react';
import Slider from 'react-slick';
import testiImg1 from '../../../../assets/images/testimonial/style1/testi1.jpg';
import testiImg2 from '../../../../assets/images/testimonial/style1/testi2.jpg';
import testiImg3 from '../../../../assets/images/testimonial/style1/testi3.jpg';
import testiImg4 from '../../../../assets/images/testimonial/style1/testi4.jpg';
import Testimonial4 from '../../../../Components/Testimonial/Testimonial4';

const testimonials = [
    {
        id: 1,
        name: 'David M. Martin',
        designation: 'CEO, Pro Theme',
        image: testiImg1,
        content: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.',
    },
    {
        id: 2,
        name: 'Maria Masud',
        designation: 'Apps Developer',
        image: testiImg2,
        content: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.',
    },
    {
        id: 3,
        name: 'David M. Martin',
        designation: 'CEO, Brick Consulting',
        image: testiImg3,
        content: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.',
    },
    {
        id: 4,
        name: 'Angelina Jolie',
        designation: 'Graphic Designer',
        image: testiImg4,
        content: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.',
    },
];

const TestimonialSection = () => {
    const settings = {
        dots: true,
        arrows: false,
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

    return (
        <div className="rs-testimonial testimonial-style5 testimonial-modify5 bg27 pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="sec-title text-center mb-45">
                    <span className="sub-text sub-text9">Testimonial</span>
                    <h2 className="title title6 white-color pb-23">Our Customer Say</h2>
                    <p className="desc desc7">
                        At tellus at urna condimentum mattis pellentesque. Egestas egestas fringilla<br />
                        phasellus faucibus. Praesent ugiat nibh pulvinar gravida.
                    </p>
                </div>
                <Slider {...settings}>
                    {testimonials.map(item => (
                        <div key={item.id} className="testi-item">
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
