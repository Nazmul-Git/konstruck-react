import React from 'react';

const Testimonial6 = ({ testimonial }) => {
    return (
        <div className="testi-item">
            <div className="item-content">
                <img className="quote" src={testimonial.image} alt="quote" />
                <div className="desc">{testimonial.desc}</div>
            </div>
            <div className="testi-content">
                <div className="testi-information">
                    <div className="testi-name">{testimonial.name}</div>
                    <span className="designation">{testimonial.designation}</span>
                </div>
            </div>
        </div>
    );
};

export default Testimonial6;