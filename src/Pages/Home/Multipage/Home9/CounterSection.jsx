import React from 'react';
import CountUp from 'react-countup';
import Counter from '../../../../Components/Counter/Counter';

const counters = [
    { count: 500, title: 'Complete Project' },
    { count: 300, title: 'Expert Workers' },
    { count: 400, title: 'Happy Clients' },
    { count: 700, title: 'Upcoming Project' }
];

const CounterSection = () => {
    return (
        <div className="rs-counter counter-style1 counter-modify2 bg19 pt-90 pb-100 md-pt-60 md-pb-70">
            <div className="container">
                <div className="row y-middle">
                    <div className="row">
                        {counters.map((counter, index) => (
                            <div className="col-lg-3 col-sm-6 md-mb-30" key={index}>
                                <Counter
                                    counter={counter} 
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CounterSection;
