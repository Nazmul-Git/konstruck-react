import React from 'react';
import CountUp from 'react-countup';

// Import images
import img1 from '../../../../assets/images/counter/icons/count1.png';
import img2 from '../../../../assets/images/counter/icons/count2.png';
import img3 from '../../../../assets/images/counter/icons/count3.png';
import img4 from '../../../../assets/images/counter/icons/count4.png';
import Counter from '../../../../Components/Counter/Counter';

const counterData = [
    {
        icon: img1,
        alt: 'Products',
        count: 40,
        title: 'Products'
    },
    {
        icon: img2,
        alt: 'Project Completed',
        count: 300,
        title: 'Project Completed'
    },
    {
        icon: img3,
        alt: 'Awards Won',
        count: 30,
        title: 'Awards Won'
    },
    {
        icon: img4,
        alt: 'Happy Clients',
        count: 600,
        title: 'Happy Clients'
    }
];

const CounterSection = () => {
    return (
        <div className="rs-counter counter-style2 black-bg2 pt-110 pb-120 md-pt-70 md-pb-80">
            <div className="container">
                <div className="row y-middle">
                    <div className="row">
                        {counterData.map((counter, index) => (
                            <div key={index} className="col-lg-3 col-md-6 col-sm-6 md-mb-30">
                                <Counter
                                    counter={counter}
                                    counterTextClass="counter-text"
                                    counterNumClass="counter-number"
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
