import React from 'react';
import { Link } from 'react-router-dom';
import AboutImage from '../../../../assets/images/about/about-3.png';
import AboutUs2 from '../../../../Components/AboutUs/AboutUs2';

const AboutSection = () => {
    return (
        <div className="rs-about pb-120 md-pb-0">
            <AboutUs2
                AboutImage={AboutImage}
            />
        </div>
    );
};

export default AboutSection;
