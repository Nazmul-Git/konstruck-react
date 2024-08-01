// SliderSection.js
import React from 'react';
import Slider from 'react-slick';
import SliderContentCard from '../../../../Components/BannerSlider/SliderContentCard';

const sliderData = [
    {
        titles: ['We Building', 'For Better', 'Futures'],
        bgClass: 'slide-bg1'
    },
    {
        titles: ['We Building', 'For Better', 'Futures'],
        bgClass: 'slide-bg2'
    },
    {
        titles: ['We Building', 'For Better', 'Futures'],
        bgClass: 'slide-bg3'
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
        autoplaySpeed: 5000
    };

    return (
        <div className="rs-slider slider-style11">
            <div className="slider slider-slide-2">
                <Slider {...settings}>
                    {sliderData.map((slide, index) => (
                        <div key={index} className={`slider-item ${slide.bgClass ? slide.bgClass : ''}`}>
                            <div className="container custom13">
                                <div className="slider-inner">
                                    <div className="content-part">
                                        {slide.titles.map((title, index) => (
                                            <SliderContentCard
                                                key={index}
                                                index={index}
                                                title={title}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default SliderSection;
