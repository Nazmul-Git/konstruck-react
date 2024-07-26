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
                    service.description &&
                    <p className="services-txt">{service.description}</p>   
                }
            </div>
        </div>
    );
};

export default Service3;