import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerSlider from '../../../../Components/BannerSlider/BannerSlider';

const sliderData = [
    {
        smallSubTitle: "Industrial Services",
        title1: 'Manufacturing Industry',
        title2: 'Service Solutions.',
        description1: "Leverage agile frameworks to provide a robust synopsis for high level",
        description2: "overviews. Iterative approaches to corporate strategy.",
        link: "/contact",
        imgClass: "slider-item",
        btnName: 'Discover More',
    },
    {
        smallSubTitle: "Industrial Services",
        title1: "Manufacturing Industry",
        title2: "Service Solutions.",
        description1: "Leverage agile frameworks to provide a robust synopsis for high level",
        description2: "overviews. Iterative approaches to corporate strategy.",
        link: "/contact",
        imgClass: "slider-item slide-bg2",
        btnName: 'Discover More',
    }
];

const SliderSection = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    };

    return (
        <div className="rs-slider slider-style5">
            <Slider {...settings} className="slider slider-slide-1">
                {sliderData.map((slide, index) => (
                    <BannerSlider
                        key={index}
                        slide={slide}
                        btnClass={'red2-more'}
                    />
                ))}
            </Slider>
        </div>
    );
};

export default SliderSection;
