import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import icon1 from '../../../../assets/images/slider/style1/shapes/icons1.png';
import icon2 from '../../../../assets/images/slider/style1/shapes/icons2.png';
import icon3 from '../../../../assets/images/slider/style1/shapes/icons3.png';
import BannerSlider from '../../../../Components/BannerSlider/BannerSlider';

const SliderComponent = () => {
    const sliderData = [
        {
            subtitle: 'Construction Business',
            title1: 'We build something',
            title2: 'new and consistent.',
            description1: 'No matter where or what you want to build, we mobilize the right experts',
            description2: 'to drive value and realize your project consistent goals.',
            link: '/contact',
            btnName: 'Discover More',
            imgClass: "slider-item",
            smallSubtitle: 'Construction building',
            icons: [icon1, icon2, icon2]
        },
        {
            subtitle: 'Construction Business',
            title1: 'We build something',
            title2: 'new and consistent.',
            description1: 'No matter where or what you want to build, we mobilize the right experts',
            description2: 'to drive value and realize your project consistent goals.',
            link: '/contact',
            btnName: 'Discover More',
            imgClass: "slider-item slide-bg2",
            smallSubtitle: 'Construction building',
            icons: [icon1, icon2, icon2]
        }
        // Add more slides as needed
    ];

    // Slick settings
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
        <div className="rs-slider slider-style1">
            <div className="slider slider-slide-1">
                <Slider {...sliderSettings}>
                    {
                        sliderData &&
                        sliderData.map((slide, index) => (
                            <BannerSlider
                                key={index}
                                slide={slide}
                                icon3={icon3}
                                icon={true}
                            />

                        ))}
                </Slider>
            </div>
        </div>
    );
};

export default SliderComponent;
