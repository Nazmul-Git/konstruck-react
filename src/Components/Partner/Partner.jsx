import React from 'react';
import { Link } from 'react-router-dom';

const Partner = ({ partner, index }) => {
    return (
        <div className="logo-img">
            <Link to={partner.link}>
                <img className="hovers-logos rs-grid-img" src={partner.src} alt={`Partner ${index + 1}`} />
                <img className="mains-logos rs-grid-img" src={partner.src} alt={`Partner ${index + 1}`} />
            </Link>
        </div>
    );
};

export default Partner;
