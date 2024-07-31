// Slider.js
import React from 'react';
import Slider from 'react-slick';

// Importing images
import slideImg1 from '../../../../assets/images/slider/style4/slide-img1.jpg';
import slideImg2 from '../../../../assets/images/slider/style4/slide-img2.jpg';
import frameImg from '../../../../assets/images/slider/style4/frame.png';
import frameImg1 from '../../../../assets/images/slider/style4/frame1.png';
import BannerSlider4 from '../../../../Components/BannerSlider/BannerSlider4';

const sliderData = [
    {
        title1: 'We Are Best',
        title2: 'Builders In',
        title3: 'The World',
        description1: 'We are one of the leading end-to-end engineering services and solutions',
        description2: 'company offering business value across the entire product lifecycle.',
        link: '/contact',
        btnName: 'Discover More',
        imgSrc: slideImg1,
        frame1: frameImg,
        frame2: frameImg1
    },
    {
        title1: 'We Are Best',
        title2: 'Builders In',
        title3: 'The World',
        description1: 'We are one of the leading end-to-end engineering services and solutions',
        description2: 'company offering business value across the entire product lifecycle.',
        link: '/contact',
        btnName: 'Discover More',
        imgSrc: slideImg2,
        frame1: frameImg,
        frame2: frameImg1
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
        <div className="rs-slider slider-style10">
            <div class="slider slider-slide-1">
                <Slider {...settings}>
                    {sliderData.map(slide => (
                        <div key={slide.id} className="slider-item">
                            <div className="container custom13">
                                <BannerSlider4
                                    slide={slide}
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default SliderSection;
