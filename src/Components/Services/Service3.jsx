import React from 'react';
import { Link } from 'react-router-dom';

const Service3 = ({ service }) => {
    return (
        <div className="services-item">
            <div className="services-icon">
                <img src={service.img} alt="Services" />
            </div>
            <div className="services-text">
                {
                    service.title1 && service.title2 &&
                    <h2 className="title"> {service.title1} <br /> {service.title2}</h2>
                }
                {
                    service.title &&
                    <h2 className="title"><Link to={service.link}>{service.title}</Link></h2>
                }
                {
                    service.h3Title &&
                    <h3 className="title"><Link to={service.link}>{service.h3Title}</Link></h3>
                }
                {
                    service.h4Title &&
                    <h4 className="title">{service.h4Title}</h4>
                }
                
                {
                    service.description &&
                    <p className="services-txt">{service.description}</p>
                }
                {
                    service.serviceBtn &&
                    <div className="services-btn">
                        <Link className="learn-text" to={service.link}>Learn More</Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default Service3;