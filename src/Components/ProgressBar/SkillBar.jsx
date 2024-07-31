
import React, { useEffect, useRef } from 'react';

const SkillBar = ({ percentage, label }) => {
    const skillBarRef = useRef(null);
    const skillBarBarRef = useRef(null);
    const skillBarPercentRef = useRef(null);

    useEffect(() => {
        const skillBarBar = skillBarBarRef.current;
        const skillBarPercent = skillBarPercentRef.current;

        skillBarBar.style.width = '0%';
        skillBarPercent.textContent = '0%';

        setTimeout(() => {
            skillBarBar.style.transition = 'width 2s ease-in-out';
            skillBarBar.style.width = percentage;
            skillBarPercent.textContent = percentage;
        }, 100);
    }, [percentage]);

    return (
        <div className="skillbar" ref={skillBarRef} data-percent={percentage}>
            <p className="skillbar-bar" ref={skillBarBarRef}></p>
            <span className="skill-bar-percent" ref={skillBarPercentRef}>{percentage}</span>
        </div>
    );
};

export default SkillBar;
