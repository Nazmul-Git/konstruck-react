import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BannerSlider3 from '../../../../Components/BannerSlider/BannerSlider3';

const sliderItems = [
    {
        id: 1,
        smallSubTitle: 'Konstruk architecture',
        title1: 'Modern architecture',
        title2: 'and quality  design',
        description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus',
        description2: 'non powerment everage agile frameworks thinking.',
        imgClass: 'slider-item',
        buttons: [
            { text: 'View Projects', link: '/contact' },
            { text: 'Contact Us', link: '/contact' },
        ],
    },
    {
        id: 2,
        smallSubTitle: 'Konstruk architecture',
        title1: 'Modern architecture',
        title2: 'and quality  design',
        description1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus',
        description2: 'non powerment everage agile frameworks thinking.',
        imgClass: 'slider-item slide-bg2',
        buttons: [
            { text: 'View Projects', link: '/contact' },
            { text: 'Contact Us', link: '/contact' },
        ],
    },
];

const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
};

const SliderSection = () => (
    <div className="rs-slider slider-style8">
        <div className="slider slider-slide-1">
            <Slider {...settings}>
                {sliderItems.map(slide => (
                    <BannerSlider3
                        key={slide.id}
                        slide={slide}
                    />
                ))}
            </Slider>
        </div>
    </div>
);

export default SliderSection;
