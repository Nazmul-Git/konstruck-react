import React from 'react';

const SliderContentCard = ({ title, index }) => {
    return (
        <h1 className={`sl-title wow fadeInLeft${index > 0 && index + 1}`}>
            <span>{title}</span>
        </h1>
    );
};

export default SliderContentCard;