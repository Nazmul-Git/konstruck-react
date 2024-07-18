import React from 'react';
import { Link } from 'react-router-dom';


const BannerSlider = ({ slide, icon3, icon, contentClass }) => {
    return (

        <div className={slide.imgClass} >
            <div className="container custom13">
                <div className="slider-inner">
                    <div className={`content-part ${contentClass ? contentClass : ''}`}>
                        {
                            icon &&
                            <span className="sl-subtitle wow fadeInDown">
                                <img className="sl-icons" src={icon3} alt="Images" />
                                {slide.subtitle}
                            </span>
                        }
                        {
                            slide.smallSubTitle &&
                            <span className="sl-subtitle wow fadeInDown">{slide.smallSubTitle}</span>
                        }
                        <h1 className="sl-title wow fadeInLeft">
                            {slide.title1}
                            {
                                slide.title2 &&
                                <>
                                    <br />
                                    {slide.title2}
                                </>
                            }
                        </h1>
                        {
                            slide.smallTitle &&
                            <h2 className="small-title2 wow fadeInLeft">{slide.smallTitle} <span className="bdr-big">{slide.highlight}</span></h2>
                        }
                        {
                            slide.description1 || slide.description2 &&
                            <p className="sl-desc wow fadeInLeft2">
                                {slide.description1}
                                <br />
                                {slide.description2}
                            </p>
                        }
                        <div className="slider-bottom wow fadeinup">
                            <Link className="readon more" to={slide.link}>{slide.btnName}</Link>
                        </div>
                    </div>
                </div>
            </div>
            {
                icon &&
                <div className="animation-wrap">
                    {slide.icons.map((icon, i) => (
                        <div key={i} className={`animate-style ${i + 1}`}>
                            <img className="wow spine" src={icon} alt="Images" />
                        </div>
                    ))}
                </div>
            }
        </div>
    );
};

export default BannerSlider;