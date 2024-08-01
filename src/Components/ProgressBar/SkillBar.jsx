import React, { useEffect, useRef } from 'react';
import CountUp from 'react-countup';

const SkillBar = ({ percentage, txtColor }) => {
    const skillBarRef = useRef(null);
    const skillBarBarRef = useRef(null);

    useEffect(() => {
        const skillBarBar = skillBarBarRef.current;
        skillBarBar.style.width = '0%';

        setTimeout(() => {
            skillBarBar.style.transition = 'width 2s ease-in-out';
            skillBarBar.style.width = percentage;
        }, 100);
    }, [percentage]);

    return (
        <div className="skillbar" ref={skillBarRef} data-percent={percentage}>
            <p className="skillbar-bar" ref={skillBarBarRef}></p>
            <span className="skill-bar-percent">
                <CountUp className={txtColor ? txtColor : 'text-white'} end={parseInt(percentage, 10)} duration={2} /><span className={txtColor ? txtColor : 'text-white'}>%</span>
            </span>
        </div>
    );
};

export default SkillBar;

