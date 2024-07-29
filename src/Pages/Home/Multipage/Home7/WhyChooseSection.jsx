import React from 'react';
import { Link } from 'react-router-dom';
import chooseImage from '../../../../assets/images/choose/style3/icons1.png';
import chooseImage2 from '../../../../assets/images/choose/style3/icons2.png';
import chooseImage3 from '../../../../assets/images/choose/style3/icons3.png';
import chooseImage4 from '../../../../assets/images/choose/style3/icons4.png';
import Service6 from '../../../../Components/Services/Service6';

const chooseData = [
    {
        icon: chooseImage,
        h5title: 'Dedicated Fleet',
        description: 'Leverage agile to provide a robust synopsis overviews.',
    },
    {
        icon: chooseImage2,
        h5title: 'Brokerage Division',
        description: 'Leverage agile to provide a robust synopsis overviews.',
    },
    {
        icon: chooseImage3,
        h5title: 'Shipment Tracking',
        description: 'Leverage agile to provide a robust synopsis overviews.',
    },
    {
        icon: chooseImage4,
        h5title: 'Dispatch Technology',
        description: 'Leverage agile to provide a robust synopsis overviews.',
    },
];

const WhyChooseSection = () => {
    return (
        <div className="rs-choose choose-style5">
            <div className="row no-gutter">
                <div className="col-lg-6 sec-image"></div>
                <div className="col-lg-6">
                    <div className="rs-choose-content blue-bg3">
                        <div className="sec-title3 mb-40 md-mb-25">
                            <span className="sub-text">Why Choose Us</span>
                            <h2 className="title white-color">
                                We guaranteed success of your<br />business
                            </h2>
                        </div>
                        <div className="row">
                            {chooseData.map((service, index) => (
                                <div key={index} className="col-lg-6 mb-12">
                                    <div className="services-part">
                                        <Service6
                                            service={service}
                                        />
                                    </div>
                                </div>
                            ))}
                            <div className="btn-part mt-40 md-mt-25">
                                <Link className="readon paste-btn dismore" to="/contact">Discover More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseSection;
