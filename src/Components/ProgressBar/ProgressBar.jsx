import React, { useEffect, useState } from 'react';

const ProgressBar = ({
    duration,
    targetProgress,
    barBgClass,
    bgBarProgressColor,
    bgBarColor,
    height,
    barPercentageText,
    item_margin_bottom
}) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let startTime = null;
        let startProgress = 0;

        const animateProgressBar = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startProgress, targetProgress - startProgress, duration);
            setProgress(run);
            if (timeElapsed < duration) requestAnimationFrame(animateProgressBar);
        };

        const ease = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        requestAnimationFrame(animateProgressBar);

        return () => {
            // Cleanup
        };
    }, [duration, targetProgress]);

    return (
        <div
            style={{
                marginBottom: item_margin_bottom || '8px',
                position: 'relative' // Ensure that the absolute positioning of child elements is relative to this container
            }}
        >
            <div className='d-flex justify-content-between align-items-center gap-2' style={{ position: 'relative' }}>
                <div
                    className="cl-skill-bar"
                    style={{
                        width: '100%',
                        height: height || '7px',
                        position: 'relative',
                        backgroundColor: `${barBgClass ? barBgClass : 'rgba(26, 115, 233, 0.2)'}`,
                        background: bgBarColor || '#1A73E933',
                        borderRadius: '5px'
                    }}
                >
                    <div
                        style={{
                            background: `${bgBarProgressColor ? bgBarProgressColor : '#1273eb'}`,
                            backgroundImage: 'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)',
                            height: '100%',
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            transition: 'width 0.2s ease-in-out',
                            width: `${progress}%`,
                            borderRadius: '50px 50px 50px 50px',
                            zIndex: 1 // Ensure the bar is below the percentage text
                        }}
                    />
                </div>
                {barPercentageText && (
                    <span
                        className="skill-bar-percent text-white"
                        style={{
                            position: 'absolute',
                            top: '-30px', // Adjust this value based on your needs
                            left: `${Math.min(progress, 100)}%`, // Adjust horizontal position based on progress
                            transform: 'translateX(-50%)',
                            backgroundColor: '#000', // Optional: background color for readability
                            color: '#fff', // Text color
                            padding: '2px 5px',
                            borderRadius: '3px',
                            fontSize: '12px',
                            zIndex: 2 // Ensure the text is above the progress bar
                        }}
                    >   
                        {`${targetProgress}%`}
                    </span>
                )}
            </div>
        </div>
    );
};

export default ProgressBar;
