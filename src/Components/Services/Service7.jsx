import React from 'react';

const Service7 = ({ process, index }) => {
    return (
        <div className="services-item">
            <div className={`services-icon ${index === 1 ? 'blue-icon-bg' : ''}`}>
                <img src={process.icon} alt="Images" />
            </div>
            <div className="content-text">
                <h4 className="title">{process.title}</h4>
                <p className="services-txt">{process.description}</p>
            </div>
        </div>
    );
};

export default Service7;