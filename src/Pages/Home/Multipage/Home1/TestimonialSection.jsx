import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import quoteImg from '../../../../assets/images/testimonial/style1/quote.png';
import shape1 from '../../../../assets/images/shape-1.png';
import Team from '../../../../Components/Team/Team';
import Partner from '../../../../Components/Partner/Partner';
import Testimonial from '../../../../Components/Testimonial/Testimonial';

// Import images
import testi1 from '../../../../assets/images/testimonial/style1/testi1.jpg';
import testi2 from '../../../../assets/images/testimonial/style1/testi2.jpg';

import tm1 from '../../../../assets/images/team/tm1.jpg';
import tm2 from '../../../../assets/images/team/tm2.jpg';
import tm3 from '../../../../assets/images/team/tm3.jpg';
import tm4 from '../../../../assets/images/team/tm4.jpg';
import tm5 from '../../../../assets/images/team/tm5.jpg';
import tm6 from '../../../../assets/images/team/tm6.jpg';

import img1 from '../../../../assets/images/partner/style1/1.png';
import img2 from '../../../../assets/images/partner/style1/2.png';
import img3 from '../../../../assets/images/partner/style1/3.png';
import img4 from '../../../../assets/images/partner/style1/4.png';
import img5 from '../../../../assets/images/partner/style1/5.png';
import img6 from '../../../../assets/images/partner/style1/6.png';
import img7 from '../../../../assets/images/partner/style1/7.png';

const TestimonialSection = () => {
    const mainSlider = useRef(null);
    const navSlider = useRef(null);

    // Testimonial data
    const testimonials = [
        {
            quote: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.',
            image: testi1,
            name: 'David M. Martin',
            title: 'CEO, Pro Theme',
        },
        {
            quote: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway.',
            image: testi2,
            name: 'Angel Puspa',
            title: 'CEO, Brick Consulting',
        },
    ];

    // Testimonial slider settings
    const testiSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    // Team members data
    const teamMembers = [
        {
            name: 'Davis Youn',
            title: 'Architecture',
            image: tm1,
            link: '/team-single',
        },
        {
            name: 'Eng Forhad Ahmad',
            title: 'Project Manager',
            image: tm2,
            link: '/team-single',
        },
        {
            name: 'Masud Maria',
            title: 'Foreman',
            image: tm3,
            link: '/team-single',
        },
        {
            name: 'Shahinur Islam',
            title: 'Construction Worker',
            image: tm4,
            link: '/team-single',
        },
        {
            name: 'Abdur Rashid',
            title: 'CEO & Engineer',
            image: tm5,
            link: '/team-single',
        },
        {
            name: 'Deluar Hossen',
            title: 'Builder Advisor',
            image: tm6,
            link: '/team-single',
        },
    ];

    // Partner logos data
    const partners = [
        { src: img1, link: 'https://devsdesign.net' },
        { src: img2, link: 'https://devsdesign.net' },
        { src: img3, link: 'https://devsdesign.net' },
        { src: img4, link: 'https://devsdesign.net' },
        { src: img5, link: 'https://devsdesign.net' },
        { src: img6, link: 'https://devsdesign.net' },
        { src: img7, link: 'https://devsdesign.net' },
    ];

    // Partner slider settings
    const partnerSettings = {
        dots: false,
        arrows: false, // Turn off arrows
        infinite: true,
        speed: 800,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const mainSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: navSlider.current,
        fade: true,
    };

    const navSettings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: mainSlider.current,
        dots: false,
        focusOnSelect: true,
        vertical: true,
    };

    useEffect(() => {
        if (mainSlider.current && navSlider.current) {
            mainSlider.current.slickGoTo(0);
            navSlider.current.slickGoTo(0);
        }
    }, []);

    return (
        <div id="rs-testimonial" className="rs-testimonial testimonial-style1 gray-bg pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 md-mb-50">
                        <div className="sec-title mb-45">
                            <span className="sub-text">
                                <img src={shape1} alt="Images" />
                                Testimonials
                            </span>
                            <h2 className="title">Our clients reviews.</h2>
                        </div>
                        <div className="testi-item-content">
                            <Slider {...testiSettings} className="slider testi-slide-1">
                                {testimonials.map((testimonial, index) => (
                                    <Testimonial
                                        key={index}
                                        quoteImg={quoteImg}
                                        quote={testimonial.quote}
                                        title={testimonial.title}
                                        image={testimonial.image}
                                        name={testimonial.name}
                                    />
                                ))}
                            </Slider>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="rs-team team-style1">
                            <div className="sec-title mb-45">
                                <span className="sub-text">
                                    <img src={shape1} alt="Images" />
                                    Team Members
                                </span>
                                <h2 className="title">Expert team members.</h2>
                            </div>
                            <div className="vertical-widget-content">
                                <div className="slick-part single-product-slider">
                                    <Slider {...mainSettings} ref={mainSlider} className="slider slider-for">
                                        {teamMembers.map((member, index) => (
                                            <Team key={index} member={member} />
                                        ))}
                                    </Slider>
                                    <Slider {...navSettings} ref={navSlider} className="slider slider-nav">
                                        {teamMembers.map((member, index) => (
                                            <div className="images-list" key={index}>
                                                <Link to="#">
                                                    <img src={member.image} alt="Team" />
                                                </Link>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rs-partner partner-main-home pt-100 md-pt-70">
                    <div className="container">
                        <div className="partner-content-widget">
                            <Slider {...partnerSettings}>
                                {partners.map((partner, index) => (
                                    <Partner key={index} partner={partner} />
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSection;
