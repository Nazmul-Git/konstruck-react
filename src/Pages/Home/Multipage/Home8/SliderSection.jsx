import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slideImage1 from '../../../../assets/images/slider/style2/slide-image1.png';
import slideImage2 from '../../../../assets/images/slider/style2/slide-image2.png';
import BannerSlider2 from '../../../../Components/BannerSlider/BannerSlider2';

const slides = [
    {
        id: 1,
        title: 'Best Carpenter',
        subTitle: 'Carpenter Services',
        smallTitle: 'working services',
        description: 'Leverage agile frameworks to provide a robust synopsis for high level over approaches to corporate strategy.',
        image: slideImage1,
        buttonText: 'Discover More',
        buttonLink: '/contact'
    },
    {
        id: 2,
        title: 'Best Carpenter',
        subTitle: 'Carpenter Services',
        smallTitle: 'working services',
        description: 'Leverage agile frameworks to provide a robust synopsis for high level over approaches to corporate strategy.',
        image: slideImage2,
        buttonText: 'Discover More',
        buttonLink: '/contact'
    }
];

const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const SliderSection = () => (
    <div id="rs-slider" className="rs-slider slider-style7">
        <div className="slider-carousel3 owl-carousel">
            <Slider {...sliderSettings}>
                {slides.map(slide => (
                    <div key={slide.id} className={`slider slide${slide.id}`}>
                        <div className="container">
                            <BannerSlider2
                                slide={slide}
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    </div>
);

export default SliderSection;
