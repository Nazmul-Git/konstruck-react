import React from 'react';
import { Link } from 'react-router-dom';

const BannerSlider4 = ({ slide }) => {
    return (
        <div className="slider-inner">
            <div className="content-part">
                <h1 className="sl-title wow fadeInDown">
                    {slide.title1}<br />
                    {slide.title2}<br />
                    {slide.title3}
                </h1>
                <p className="sl-desc wow fadeInLeft2">
                    {slide.description1}<br />
                    {slide.description2}
                </p>
                <div className="slider-bottom wow fadeInUp">
                    <Link className="readon orange-btn1" to={slide.link}>{slide.btnName}</Link>
                </div>
            </div>
            <div className="slide-images wow fadeInUp">
                <img src={slide.imgSrc} alt="Slide" />
                <div className="animate-shape">
                    <div className="animation frame1">
                        <img src={slide.frame1} alt="Frame 1" />
                    </div>
                    <div className="animation frame2">
                        <img src={slide.frame2} alt="Frame 2" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerSlider4;