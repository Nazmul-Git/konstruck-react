import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BannerSlider from '../../../../Components/BannerSlider/BannerSlider';

const SliderSection = () => {
    const sliderData = [
        {
            subtitle: 'Construction building',
            title1: 'We building for',
            smallTitle: 'better',
            highlight: 'futures',
            description1: 'Leverage agile frameworks to provide a robust synopsis for high level',
            description2: 'overviews. Iterative approaches to corporate strategy.',
            imgClass: 'slider-item',
            smallSubtitle: 'Construction building',
            link: '/contact',
            btnName: 'Discover More'
        },
        {
            subtitle: 'Construction building',
            title1: 'We building for',
            smallTitle: 'dream',
            highlight: 'house',
            description1: 'Leverage agile frameworks to provide a robust synopsis for high level',
            description2: 'overviews. Iterative approaches to corporate strategy.',
            imgClass: 'slider-item slide-bg2',
            smallSubtitle: 'Construction building',
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
        <div className="rs-slider slider-style2">
            <div className="slider slider-slide-1">
                <Slider {...sliderSettings}>
                    {
                        sliderData &&
                        sliderData.map((slide, index) => (
                            <BannerSlider
                                key={index}
                                slide={slide}
                            />
                        ))}
                </Slider>
            </div>
        </div >
    );
};

export default SliderSection;