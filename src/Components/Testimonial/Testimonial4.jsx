import React from 'react';

const Testimonial4 = ({ item }) => {
    return (
        <div className="testi-contents">
            <div className="image-wrap">
                <img src={item.image} alt="Testimonial" />
            </div>
            <div className="item-content">
                <p>{item.content}</p>
            </div>
            <div className="testi-information">
                <div className="testi-name">{item.name}</div>
                <span className="designation">{item.designation}</span>
            </div>
        </div>
    );
};

export default Testimonial4;