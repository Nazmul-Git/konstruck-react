import React from 'react';
import ProcessItem from '../../../../Components/Process/ProcessItem';

const processItems = [
    {
        id: 1,
        number: '01',
        title: 'Residential Spaces',
        link: '/general-construction',
        backgroundClass: ''
    },
    {
        id: 2,
        number: '02',
        title: 'Public Spaces',
        link: '/general-construction',
        backgroundClass: 'Public-bg'
    },
    {
        id: 3,
        number: '03',
        title: 'Commercial Spaces',
        link: '/general-construction',
        backgroundClass: 'commercial-bg'
    },
];


const ProcessSection = () => (
    <div className="rs-process process-style2 pt-100 pb-100 md-pt-70 md-pb-70">
        <div className="process-overlay-bg"></div>
        <div className="container">
            <div className="row">
                {processItems.map(item => (
                    <ProcessItem
                        key={item.id}
                        item={item}
                    />
                ))}
            </div>
        </div>
    </div>
);

export default ProcessSection;
