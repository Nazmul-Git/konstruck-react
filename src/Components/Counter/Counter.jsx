import React from 'react';
import CountUp from 'react-countup';

const Counter = ({ counter, counterTextClass, counterNumClass }) => {
    return (
        <div className={`rs-counter-list ${counter.border ? counter.border : ''}`}>
            {
                counter.icon &&
                <div className="counter-icon">
                    <img src={counter.icon} alt={counter.alt} />
                </div>
            }
            <div className={`${counterTextClass ? counterTextClass : "count-text"}`}>
                <div className={`${counterNumClass ? counterNumClass : "count-number"}`}>
                    <CountUp end={counter.count} duration={5} className="rs-count" />
                    <span className="prefix">+</span>
                </div>
                <span className="title">{counter.title}</span>
            </div>
        </div>
    );
};

export default Counter;
