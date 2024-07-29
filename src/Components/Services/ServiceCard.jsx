import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    return (
        <div className={`services-item ${service.backgroundClass}`}>
            <div className="background-overlay"></div>
            <div className="rs-iconbox-area">
                <div className="icon-area">
                    <Link to={service.link}>
                        <img className="dance_hover" src={service.icon} alt="Services" />
                    </Link>
                </div>
                <div className="text-area">
                    <h3 className="title">
                        <a href={service.link}>{service.title}</a>
                    </h3>
                    <p className="services-txt">{service.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;