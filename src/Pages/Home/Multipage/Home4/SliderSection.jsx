import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BannerSlider from '../../../../Components/BannerSlider/BannerSlider';
import imgIcon2 from '../../../../assets/images/slider/style1/icon2.png';

const SliderSection = () => {
    const sliderData = [
        {
            subtitle: 'Roofing Construction',
            title1: 'best roofing',
            title2: 'Solutions',
            description1: 'Leverage agile frameworks to provide a robust synopsis for high',
            description2: 'level overviews iterative approaches. ',
            imgClass: 'slider-item',
            link: '/contact',
            btnName: 'Discover More'
        },
        {
            subtitle: 'Roofing Construction',
            title1: 'best roofing',
            title2: 'Solutions',
            description1: 'Leverage agile frameworks to provide a robust synopsis for high',
            description2: 'level overviews iterative approaches. ',
            imgClass: 'slider-item slide-bg2',
            link: '/contact',
            btnName: 'Discover More'
        },
    ];

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="rs-slider slider-style4">
            <div className="slider slider-slide-1">
                <Slider {...sliderSettings}>
                    {
                        sliderData &&
                        sliderData.map((slide, index) => (
                            <BannerSlider
                                key={index}
                                slide={slide}
                                icon3={imgIcon2} 
                                btnClass='red-btn'

                            />
                        ))}
                </Slider>
            </div>
        </div >
    );
};

export default SliderSection;
