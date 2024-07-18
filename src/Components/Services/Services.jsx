import React from 'react';
import { Link } from 'react-router-dom';

const Services = ({ service }) => {
    return (
        <div className="services-slider">
            <div className="services-img">
                <Link to={service.link}>
                    <img src={service.img} alt="Services" />
                </Link>
            </div>
            <div className="services-content">
                <div className="services-titles">
                    <h4 className="title"><Link to={service.link}>{service.title}</Link></h4>
                </div>
                <p className="services-txt">
                    {service.description}
                </p>
                <div className="services-btn btn-style2">
                    <Link className="btn-text" to={service.link}>Know More<i className="ri-arrow-right"></i></Link>
                </div>
            </div>
        </div>
    );
};

export default Services;
