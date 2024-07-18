import React from 'react';
import Counter from '../../../../Components/Counter/Counter';

const CounterSection = () => {
    const counters = [
        { count: 94, title: 'Successfully Project' },
        { count: 83, title: 'Happy Clients' },
        { count: 42, title: 'Qualified Engineers' },
        { count: 8, title: 'Years Experience' }
    ];

    return (
        <div className="rs-counter counter-style1 counter-modify1 bg6 pt-120 pb-120 md-pt-70 md-pb-75">
            <div className="container">
                <div className="row y-middle">
                    <div className="row">
                        {counters.map((counter, index) => (
                            <div className="col-lg-3 col-md-6 col-sm-6 md-mb-30" key={index}>
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
