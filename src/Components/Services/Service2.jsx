import React from 'react';
import { Link } from 'react-router-dom';

const Service2 = ({ service, index }) => {
    return (
        <div className={`services-box ${index === 1 ? 'services-yellow-box' : ''}`}>
            <div className="services-icon">
                <Link to={service.link}>
                    <img className="dance_hover" src={service.image} alt="Service" />
                </Link>
            </div>
            <div className="services-content">
                <h3 className="title"><Link to={service.link}>{service.title}</Link></h3>
                <p className="services-txt">
                    {service.description}
                </p>
            </div>
        </div>
    );
};

export default Service2;