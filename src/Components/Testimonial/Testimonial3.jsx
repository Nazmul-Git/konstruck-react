import React from 'react';

const Testimonial3 = ({ testimonial, quoteImg }) => {
    return (
        <div className="testi-item">
            <div className="item-content">
                <div className="desc">
                    <img className="quote" src={quoteImg} alt="Quote" />
                    {testimonial.desc}
                </div>
            </div>
            <div className="testi-content">
                <div className="image-wrap">
                    <img src={testimonial.img} alt={testimonial.name} />
                </div>
                <div className="testi-information">
                    <div className="testi-name">{testimonial.name}</div>
                    <span className="designation">{testimonial.designation}</span>
                </div>
            </div>
        </div>
    );
};

export default Testimonial3;