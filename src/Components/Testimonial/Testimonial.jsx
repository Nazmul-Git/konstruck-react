import React from 'react';

const Testimonial = ({ quoteImg, quote, image, name, title }) => {

    return (
        <div className="testi-item">
            <div className="item-content">
                <span>
                    <img src={quoteImg} alt="Testimonial" />
                </span>
                <p>{quote}</p>
            </div>
            <div className="testi-content">
                <div className="image-wrap">
                    <img src={image} alt="Testimonial" />
                </div>
                <div className="testi-information">
                    <div className="testi-name">{name}</div>
                    <span className="testi-title">{title}</span>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
