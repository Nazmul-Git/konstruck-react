import React from 'react';
import { Link } from 'react-router-dom';

const Service5 = ({ service }) => {
    return (
        <div className="services-item">
            <div className="services-icon">
                <img src={service.img} alt="" />
            </div>
            <div className="services-text">
                <div className="services-title">
                    <h3 className="title"><Link to={service.Link}>{service.title}</Link>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Service5;