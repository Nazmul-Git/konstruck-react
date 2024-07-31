import React from 'react';
import Slider from 'react-slick';
import Testimonial5 from '../../../../Components/Testimonial/Testimonial5';

// Import images
import testiImage1 from '../../../../assets/images/testimonial/style1/testi1.jpg';
import testiImage2 from '../../../../assets/images/testimonial/style1/testi2.jpg';
import testiImage3 from '../../../../assets/images/testimonial/style1/testi3.jpg';
import testiImage4 from '../../../../assets/images/testimonial/style1/testi4.jpg';

// Testimonial data
const testimonials = [
    {
        image: testiImage1,
        name: 'David M. Martin',
        designation: 'CEO, Pro Theme',
        text: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.'
    },
    {
        image: testiImage2,
        name: 'Maria Masud',
        designation: 'Apps Developer',
        text: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.'
    },
    {
        image: testiImage3,
        name: 'David M. Martin',
        designation: 'CEO, Brick Consulting',
        text: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.'
    },
    {
        image: testiImage4,
        name: 'Angelina Jolie',
        designation: 'Graphic Designer',
        text: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.'
    }
];

// Slick slider settings
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

const TeastimonialSection = () => {
    return (
        <div className="rs-testimonial testimonial-style5 testimonial-modify4 pt-115 pb-120 md-pt-75 md-pb-80">
            <div className="container">
                <div className="sec-title text-center mb-50 md-mb-35">
                    <h2 className="title title5 pb-27">Our Customer Say</h2>
                    <p className="desc desc10">
                        At tellus at urna condimentum mattis pellentesque. Egestas egestas fringilla<br />
                        phasellus faucibus. Praesent ugiat nibh pulvinar gravida.
                    </p>
                </div>
                <Slider className="rs-carousel" {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <Testimonial5
                            key={index}
                            image={testimonial.image}
                            name={testimonial.name}
                            designation={testimonial.designation}
                            text={testimonial.text}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default TeastimonialSection;
