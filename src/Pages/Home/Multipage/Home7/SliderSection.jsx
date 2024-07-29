import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerSlider from '../../../../Components/BannerSlider/BannerSlider';

const sliderData = [
    {
        title1: "Ensure world best",
        title2: "logistics services",
        description1: "Lorem Ipsum is simply dummy text of the printing and type",
        description2: "setting has been the industry's standard dummy text",
        link: "/contact",
        imgClass: "slider-item",
        btnName: 'Learn More'
    },
    {
        title1: "Ensure world best",
        title2: "logistics services",
        description1: "Lorem Ipsum is simply dummy text of the printing and type",
        description2: "setting has been the industry's standard dummy text",
        link: "/contact",
        imgClass: "slider-item slide-bg2",
        btnName: 'Learn More'
    }
];

const SliderSection = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <div className="rs-slider slider-style6">
            <Slider {...settings} className='slider slider-slide-1'>
                {sliderData.map((slide, index) => (
                    <BannerSlider
                        key={index}
                        slide={slide}
                        titleClassh1='sl-title wow fadeInDown'
                        descClass='sl-desc wow fadeInLeft'
                        btnClass='paste-btn'
                        slideLayer={true}
                    />
                ))}
            </Slider>
        </div>
    );
};

export default SliderSection;
