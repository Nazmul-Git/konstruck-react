import React from 'react';
import { Link } from 'react-router-dom';

const Service4 = ({ service }) => {
    return (
        <div className="services-item">
            <div className="services-image">
                <img src={service.img} alt="Images" />
            </div>
            <div className="services-text">
                <div className="services-inner">
                    <h3 className="title"><Link to={service.link}>{service.title}</Link></h3>
                    <div className="services-btn">
                        <Link className="red-btn-text" to={service.link}>
                            <i className="ri-arrow-right-line"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service4;