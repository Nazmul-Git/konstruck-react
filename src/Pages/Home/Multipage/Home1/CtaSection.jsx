import React from 'react';
import shape1 from '../../../../assets/images/shape-1.png';
import CTA from '../../../../Components/CallToAction/CTA';

const CtaSection = () => {
    return (
        <div className="rs-cta bg4 pt-120 pb-115 md-pt-80 md-pb-75">
            <CTA
                shape1={shape1}
            />
        </div>
    );
};

export default CtaSection;
