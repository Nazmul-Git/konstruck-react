import React from 'react';

const Testimonial5 = ({ image, name, designation, text }) => {
    return (
        <div className="testi-item">
            <div className="testi-contents">
                <div className="image-wrap">
                    <img src={image} alt="Testimonial" />
                </div>
                <div className="item-content">
                    <span><i className="fa fa-quote-left"></i></span>
                    <p>{text}</p>
                </div>
                <div className="testi-information">
                    <div className="testi-name">{name}</div>
                    <span className="designation">{designation}</span>
                </div>
            </div>
        </div>
    );
};

export default Testimonial5;