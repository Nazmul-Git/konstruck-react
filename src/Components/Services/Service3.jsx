import React from 'react';
import { Link } from 'react-router-dom';

const Service3 = ({ service, serviceImageClass, serviceMainCls, serviceContCls, imgWithAncor,titleWithAncor, btnStyle, linkCls, btnIcon }) => {
    return (
        <div className={`${serviceMainCls ? serviceMainCls : "services-item"}`}>
            <div className={`${serviceImageClass ? serviceImageClass : "services-icon"}`}>
                {
                    service.img && imgWithAncor ?
                        <Link to={service.link}><img src={service.img} alt="Images" /></Link> :
                        <img src={service.img} alt="Services" />
                }
            </div>
            <div className={`${serviceContCls ? serviceContCls : "services-text"}`}>
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
                    service.h4Title && titleWithAncor ?
                        <h4 className="title"><Link to={service.link}>{service.h4Title}</Link></h4> :
                        <h4 className="title">{service.h4Title}</h4>
                }

                {
                    service.description &&
                    <p className="services-txt">{service.description}</p>
                }
                {
                    service.serviceBtn || btnIcon &&
                    <div className={`services-btn ${btnStyle ? btnStyle : ''}`}>
                        <Link className={`${linkCls ? linkCls : "learn-text"}`} to={service.link}>{service.serviceBtn}
                            {
                                btnIcon &&
                                <i className="ri-arrow-right-fill"></i>
                            }
                        </Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default Service3;