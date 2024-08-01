import React from 'react';
import serviceImg1 from '../../../../assets/images/services/style14/ser-1.png';
import serviceImg2 from '../../../../assets/images/services/style14/ser-2.png';
import serviceImg3 from '../../../../assets/images/services/style14/ser-3.png';
import serviceImg4 from '../../../../assets/images/services/style14/ser-4.png';
import ServiceCountrCard from '../../../../Components/Services/ServiceCountrCard';

const services = [
    { id: 1, title: 'Awards', description: 'Meque egestas quisque egestas in effective e-business cursu', image: serviceImg1, count: 130 },
    { id: 2, title: 'Project Success', description: 'Meque egestas quisque egestas in effective e-business cursu', image: serviceImg2, count: 50 },
    { id: 3, title: 'Worldwide Clients', description: 'Interactively procrastinate high-payoff without backward-compatibleu', image: serviceImg3, count: 200 },
    { id: 4, title: 'Employees', description: 'Podcasting operational change inside establish framework globally.', image: serviceImg4, count: 60 },
];

const ServiceSection2 = () => {
    return (
        <div id="rs-services" className="rs-services services-style16 bg26 pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container custom5">
                <div className="row">
                    {services.map(service => (
                        <div key={service.id} className={`col-xl-3 col-md-6 ${service.id % 2 === 0 ? 'xl-mb-40' : 'sm-mb-40'}`}>
                            <ServiceCountrCard
                                service={service}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceSection2;
