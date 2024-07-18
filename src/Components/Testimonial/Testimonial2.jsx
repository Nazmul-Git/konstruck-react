import React from 'react';

const Testimonial2 = ({ testimonial }) => {
    return (
        <div className="testi-item">
            <div className="testi-wrap">
                <div className="image-wrap">
                    <img src={testimonial.image} alt="Testimonial" />
                </div>
                <div className="item-contents">
                    <p>{testimonial.text}</p>
                </div>
                <div className="testi-information">
                    <div className="testi-name">{testimonial.name}</div>
                    <span className="testi-title">{testimonial.title}</span>
                </div>
            </div>
        </div>
    );
};

export default Testimonial2;