import React from 'react';
import { Link } from 'react-router-dom';

const Services = ({ service, serviceTitle1, serviceBtn1, serviceBtn2, className, btnStyle }) => {
    return (
        <div className={`services-${className ? className : 'slider'}`}>
            <div className="services-img">
                <Link to={service.link}>
                    <img src={service.img} alt="Services" />
                </Link>
            </div>
            <div className="services-content">
                {
                    serviceTitle1 &&
                    <div className="services-titles">
                        <h4 className="title"><Link to={service.link}>{service.title}</Link></h4>
                    </div>
                }
                {
                    serviceBtn1 &&
                    <div className={`services-btn ${btnStyle ? btnStyle : 'btn-style2'}`}>
                        <Link className="btn-text" to={service.link}>Know More<i className="ri-arrow-right-line"></i></Link>
                    </div>
                }
                <p className="services-txt">
                    {service.description}
                </p>

                {
                    serviceBtn2 &&
                    <div className={`services-btn ${btnStyle ? btnStyle : 'btn-style2'}`}>
                        <Link className="btn-text" to={service.link}>Know More<i className="ri-arrow-right-line"></i></Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default Services;
