import React from 'react';
import { Link } from 'react-router-dom';

const ProcessItem = ({ item }) => {
    return (
        <div className={`col-lg-4 col-md-6 ${item.backgroundClass}`}>
            <div className="rs-addon-item">
                <div className="addon-wrap">
                    <div className="addon-number">
                        {item.number}
                    </div>
                    <div className="addon-content">
                        <h3 className="title">
                            <Link to={item.link}>{item.title}</Link>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProcessItem;

