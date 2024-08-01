import React from 'react';
import CountUp from 'react-countup';

const ServiceCountrCard = ({ service }) => {
    return (
        <div className="services-item">
            <div className="services-icon">
                <img src={service.image} alt="Services" />
            </div>
            <div className="services-text">
                <h5 className="title">
                    <CountUp end={service.count} duration={2.5} />+
                    {' ' + service.title}
                </h5>
                <p className="services-txt">
                    {service.description}
                </p>
            </div>
        </div>
    );
};

export default ServiceCountrCard;