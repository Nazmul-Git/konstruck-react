import React from 'react';
import Slider from 'react-slick';
import quoteImg from '../../../../assets/images/testimonial/style1/quote5.png';
import testi1 from '../../../../assets/images/testimonial/style1/testi1.jpg';
import testi2 from '../../../../assets/images/testimonial/style1/testi2.jpg';
import testi3 from '../../../../assets/images/testimonial/style1/testi3.jpg';
import testi4 from '../../../../assets/images/testimonial/style1/testi4.jpg';
import Testimonial from '../../../../Components/Testimonial/Testimonial';

const testimonials = [
    {
        id: 1,
        image: testi1,
        name: 'David M. Martin',
        title: 'CEO, Pro Theme',
        text: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.',
    },
    {
        id: 2,
        image: testi2,
        name: 'Jessica Alba',
        title: 'Manager',
        text: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.',
    },
    {
        id: 3,
        image: testi3,
        name: 'Abdur Rashid',
        title: 'CEO, Brick Consulting',
        text: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.',
    },
    {
        id: 4,
        image: testi4,
        name: 'Maria Masud',
        title: 'Apps Developer',
        text: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.',
    },
];

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
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

const TestimonialSection = () => {
    return (
        <div id="rs-testimonial" className="rs-testimonial testimonial-style2 testimonial-modify3 pt-120 pb-120 md-pt-80 md-pb-80 sm-pb-45">
            <div className="container">
                <div className="sec-title text-center mb-45">
                    <span className="sub-text sub-text6">Testimonials</span>
                    <h2 className="title">Our clients reviews.</h2>
                </div>
                <Slider {...settings}>
                    {
                        testimonials.map((testiItem) => (
                            <Testimonial
                                key={testiItem.id}
                                quoteImg={quoteImg}
                                quote={testiItem.text}
                                image={testiItem.image}
                                name={testiItem.name}
                                title={testiItem.title}
                            />
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default TestimonialSection;
