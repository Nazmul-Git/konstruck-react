import React from 'react';

const Service6 = ({ service }) => {
    return (
        <>
            <div className="services-icon">
                <img src={service.icon} alt="Icons" />
            </div>
            <div className="services-text">
                {
                    service.h4Title &&
                    <h4 className="title">{service.title}</h4>
                }
                {
                    service.h5Title &&
                    <h5 className="title">{service.h5title}</h5>
                }
                
                <p className="services-txt">{service.description}</p>
            </div>
        </>
    );
};

export default Service6;