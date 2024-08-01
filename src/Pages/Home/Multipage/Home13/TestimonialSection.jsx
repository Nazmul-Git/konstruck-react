import React from 'react';
import Slider from 'react-slick';
import quote9 from '../../../../assets/images/testimonial/style1/quote9.png';
import Testimonial6 from '../../../../Components/Testimonial/Testimonial6';

// Define the testimonials data
const testimonialsData = [
    {
        desc: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.',
        image: quote9,
        name: 'David M. Martin',
        designation: 'CEO, Pro Theme'
    },
    {
        desc: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.',
        image: quote9,
        name: 'Mike Hotten',
        designation: 'CEO, Brick Consulting'
    },
    {
        desc: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.',
        image: quote9,
        name: 'Jen Johnson',
        designation: 'Manager'
    },
    {
        desc: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.',
        image: quote9,
        name: 'Lisa Duncan',
        designation: 'CEO, Keen IT Solution'
    }
];

const TestimonialSection = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="rs-testimonial testimonial-style9 bg30 pt-120 pb-200 md-pt-80 md-pb-80 sm-pb-60">
            <div className="container custom6">
                <div className="sec-title text-center mb-45">
                    <div className="title-inner ser-inner">
                        <h2 className="title"><span className="watermark">05</span>Testimonials</h2>
                    </div>
                    <h2 className="title title5 white-color">
                        Customer Reviews
                    </h2>
                </div>
                <div className="slider testi-slide-2">
                    <Slider {...settings}>
                        {testimonialsData.map((testimonial, index) => (
                            <div className="testi-wrap" key={index}>
                                <Testimonial6
                                    testimonial={testimonial}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;
