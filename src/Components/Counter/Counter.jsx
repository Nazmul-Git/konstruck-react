import React from 'react';
import CountUp from 'react-countup';

const Counter = ({ counter }) => {
    return (
        <div className="rs-counter-list">
            <div className="count-text">
                <div className="count-number">
                    <CountUp end={counter.count} duration={5} className="rs-count" />
                    <span className="prefix">+</span>
                </div>
                <span className="title">{counter.title}</span>
            </div>
        </div>
    );
};

export default Counter;