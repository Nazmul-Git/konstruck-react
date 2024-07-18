import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BannerSlider from '../../../../Components/BannerSlider/BannerSlider';

const SliderSection = () => {
    const sliderData = [
        {
            smallSubtitle: 'Welcome To Konstruk',
            title1: 'Best Solution For',
            title2: 'Construction',
            link: '/contact',
            imgClass: "slider-item",
            btnName: 'Read More',
        },
        {
            smallSubtitle: 'Building & Construction',
            title1: 'Construction services',
            title2: 'in new york city',
            link: '/contact',
            imgClass: "slider-item slide-bg2",
            btnName: 'Read More',
        }
    ];
    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrow: true,
    };

    return (
        <div className="rs-slider slider-style3">
            <div className="slider slider-slide-1">
                <Slider {...sliderSettings}>
                    {
                        sliderData &&
                        sliderData.map((slide, index) => (
                            <BannerSlider
                                key={index}
                                slide={slide}
                                contentClass={'text-center'}

                            />
                        ))}
                </Slider>
            </div>
        </div>
    );
};

export default SliderSection;