import React from 'react';
import { Link } from 'react-router-dom';

const BannerSlider3 = ({ slide }) => {
    return (
        <div className={slide.imgClass}>
            <div className="container custom13">
                <div className="slider-inner">
                    <div className="content-part">
                        {
                            slide.smallSubTitle &&
                            <span className="sl-subtitle">{slide.smallSubTitle}</span>
                        }
                        <h1 className="sl-title">{slide.title1} <br /> {slide.title2}</h1>
                        <p className="sl-desc">{slide.description1} <br /> {slide.description2}</p>
                        {
                            slide.buttons &&
                            <ul className="slider-bottom">
                                {slide.buttons.map((button, index) => (
                                    <li key={index}>
                                        <Link className="readon tan-btn" to={button.link}>{button.text}</Link>
                                    </li>
                                ))}
                            </ul>
                        }
                        {
                            slide.text &&
                            <div className="slider-bottom">
                                <Link className="readon paste-btn2" to={slide.link}>{slide.text}</Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerSlider3;