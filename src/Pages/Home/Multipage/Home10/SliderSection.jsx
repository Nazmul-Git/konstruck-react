import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerSlider3 from '../../../../Components/BannerSlider/BannerSlider3';

const sliderData = [
    {
        title1: 'Smart Renewable',
        title2: 'Energy Solutions',
        description1: 'Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Sed',
        description2: 'tempusphar pharetra massa massa ultricies mi.',
        link: '/contact',
        imgClass: 'slider-item',
        text: 'Discover More'
    },
    {
        title1: 'Smart Renewable',
        title2: 'Energy Solutions',
        description1: 'Mollis aliquam ut porttitor leo a diam sollicitudin tempor id. Sed',
        description2: 'tempusphar pharetra massa massa ultricies mi.',
        link: '/contact',
        imgClass: 'slider-item slide-bg2',
        text: 'Discover More'
    }
];

const SliderSection = () => {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    return (
        <div className="rs-slider slider-style9">
            <div className='slider slider-slide-1'>
                <Slider {...settings}>
                    {sliderData.map((slide, index) => (
                        <BannerSlider3
                            key={index}
                            slide={slide}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default SliderSection;
