import React from 'react';

const Service8 = ({ item }) => {
    return (
        <li>
            <span><img src={item.icon} alt="" /></span>
            <span className="list-text">{item.text}</span>
        </li>
    );
};

export default Service8;