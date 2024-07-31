import React from 'react';
import Slider from 'react-slick';

// Import images
import quoteImage from '../../../../assets/images/testimonial/style1/quote6.png';
import testi1Image from '../../../../assets/images/testimonial/style1/testi1.jpg';
import testi2Image from '../../../../assets/images/testimonial/style1/testi2.jpg';
import testi3Image from '../../../../assets/images/testimonial/style1/testi3.jpg';
import testi4Image from '../../../../assets/images/testimonial/style1/testi4.jpg';
import tiltImage from '../../../../assets/images/testimonial/testi-9.png';
import Testimonial from '../../../../Components/Testimonial/Testimonial';

// Testimonial data
const testimonials = [
    {
        content: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.",
        name: "Michel Cleark",
        title: "Web Developer",
        image: testi1Image
    },
    {
        content: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.",
        name: "Jen Johnson",
        title: "Manager",
        image: testi2Image
    },
    {
        content: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.",
        name: "Mike Hotten",
        title: "Owner, BT Consulting",
        image: testi3Image
    },
    {
        content: "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.",
        name: "Lisa Duncan",
        title: "CEO, Keen IT Solution",
        image: testi4Image
    }
];

// Slick slider settings
const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false
};

const TestimonialSection = () => {

    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const halfHeight = card.offsetHeight / 2;
        const halfWidth = card.offsetWidth / 2;
        const rotateX = (e.nativeEvent.offsetY - halfHeight) / 10;
        const rotateY = (e.nativeEvent.offsetX - halfWidth) / 10;
        card.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = (e) => {
        const card = e.currentTarget;
        card.style.transform = `perspective(500px) rotateX(0deg) rotateY(0deg)`;
    };

    return (
        <div className="rs-testimonial testimonial-style6 pt-100 pb-100 md-pt-70 md-pb-50">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6 md-mb-50">
                        <div className="sec-title mb-35">
                            <span className="sub-text sub-text7">Client Reviews</span>
                            <h2 className="title">What Our Client Says</h2>
                        </div>
                        <Slider {...settings}>
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
                    <div className="col-lg-6 pl-20 md-pl-15">
                        <div className="testi-img">
                            <div
                                className="quality-img"
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                                style={{ transition: 'transform 0.1s ease-out' }}
                            >
                                <img src={tiltImage} alt="Testimonial" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;
