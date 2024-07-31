import React from 'react';

const FeatureItem = ({ feature }) => {
    return (
        <li className="list-item">
            <span className="icon-list-icon">
                <i className="ri-checkbox-circle-fill"></i>
            </span>
            <span className="list-text">{feature}</span>
        </li>
    );
};

export default FeatureItem;