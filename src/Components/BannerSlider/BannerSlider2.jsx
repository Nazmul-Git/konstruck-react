import React from 'react';

const BannerSlider2 = ({ slide }) => {
    return (
        <div className="row y-middle">
            <div className="col-lg-6 md-mb-50">
                <div className="image-part">
                    <img src={slide.image} alt="" />
                </div>
            </div>
            <div className="col-lg-6 pl-60 md-pl-15">
                <div className="content-part">
                    <div className="slider-des">
                        <span className="sl-sub-title">{slide.subTitle}</span>
                        <h1 className="sl-title">{slide.title}</h1>
                        <h2 className="sl-title-small">{slide.smallTitle}</h2>
                        <p className="sl-desc">{slide.description}</p>
                    </div>
                    <div className="slider-bottom">
                        <a className="readon orange-btn" href={slide.buttonLink}>{slide.buttonText}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerSlider2;