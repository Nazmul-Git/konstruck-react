import React from 'react';
import Services from '../../../../Components/Services/Services';
import { Link } from 'react-router-dom';

import Service1 from '../../../../assets/images/services/style6/service-1.jpg';
import Service2 from '../../../../assets/images/services/style6/service-2.jpg';
import Service3 from '../../../../assets/images/services/style6/service-3.jpg';
import Service4 from '../../../../assets/images/services/style6/service-4.jpg';
import Service5 from '../../../../assets/images/services/style6/service-5.jpg';
import Service6 from '../../../../assets/images/services/style6/service-6.jpg';

const ServiceSection = () => {
    const servicesData = [
        {
            id: 1,
            title: "Bathroom Plumbing",
            description: "Nor is there anyone who loves pursues bit desires to obtain pain of itself.",
            img: Service1,
            link: "/services-style1",
        },
        {
            id: 2,
            title: "Kitchen Plumbing",
            description: "Nor is there anyone who loves pursues bit desires to obtain pain of itself.",
            img: Service2,
            link: "/services-style1",
        },
        {
            id: 3,
            title: "Basement Plumbing",
            description: "Nor is there anyone who loves pursues bit desires to obtain pain of itself.",
            img: Service3,
            link: "/services-style1",
        },
        {
            id: 4,
            title: "Drain clogged",
            description: "Nor is there anyone who loves pursues bit desires to obtain pain of itself.",
            img: Service4,
            link: "/services-style1",
        },
        {
            id: 5,
            title: "Water Line Repair",
            description: "Nor is there anyone who loves pursues bit desires to obtain pain of itself.",
            img: Service5,
            link: "/services-style1",
        },
        {
            id: 6,
            title: "Sewage Backups",
            description: "Nor is there anyone who loves pursues bit desires to obtain pain of itself.",
            img: Service6,
            link: "/services-style1",
        }
    ];

    return (
        <div className="rs-services services-style6 gray-bg3 pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="sec-title text-center mb-35 md-mb-25">
                    <span className="sub-text sub-text5">Latest Services</span>
                    <h2 className="title pb-20">
                        Our professional plumbing<br />
                        services solutions
                    </h2>
                </div>
                <div className="row">
                    {servicesData.map((service, index) => (
                        <div className={`col-lg-4 col-md-6 ${index === servicesData.length ? '' : 'mb-20'}`} key={service.id}>
                            <Services
                                service={service}
                                className={'item'}
                                serviceTitle1={true}
                                serviceBtn2={true}
                                btnStyle={'btn-style3'}
                            />
                        </div>
                    ))}
                    <div className="col-lg-12 mt-55 md-mt-35">
                        <div className="sec-title text-center sm-left">
                            <p className="view-services">Find Your Best Plumbing Services.<Link to="#"><span className="btn-text">Find Your Services</span></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;
