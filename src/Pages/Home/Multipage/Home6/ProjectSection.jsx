import React, { useState } from 'react';
import port1 from '../../../../assets/images/project/style3/port-1.jpg';
import port2 from '../../../../assets/images/project/style3/port-2.jpg';
import port3 from '../../../../assets/images/project/style3/port-3.jpg';
import port4 from '../../../../assets/images/project/style3/port-4.jpg';
import port5 from '../../../../assets/images/project/style3/port-5.jpg';
import port6 from '../../../../assets/images/project/style3/port-6.jpg';
import ProjectCard3 from '../../../../Components/Projects/ProjectCard3';

const projects = [
    { id: 1, image: port1, category: 'Kitchen', title: 'Clogged Drains', filters: ['filter1', 'filter2'] },
    { id: 2, image: port5, category: 'Kitchen', title: 'Plumbing Diagnosis', filters: ['filter3'] },
    { id: 3, image: port3, category: 'Water Line', title: 'Water Heater Installation', filters: ['filter4', 'filter3'] },
    { id: 4, image: port2, category: 'Bathroom', title: 'Leak Detection', filters: ['filter2', 'filter1'] },
    { id: 5, image: port4, category: 'Bathroom', title: 'Frozen Pipes', filters: ['filter2', 'filter4'] },
    { id: 6, image: port6, category: 'Gas Line', title: 'Emergency Plumber', filters: ['filter4', 'filter1'] },
];

const filters = [
    { name: 'All', value: '*' },
    { name: 'Bathroom', value: 'filter1' },
    { name: 'Gas Line', value: 'filter2' },
    { name: 'Kitchen', value: 'filter3' },
    { name: 'Water Line', value: 'filter4' }
];

const ProjectSection = () => {
    const [activeFilter, setActiveFilter] = useState('*');

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

    const filteredProjects = activeFilter === '*' ? projects : projects.filter(project => project.filters.includes(activeFilter));

    return (
        <div className="rs-project project-style4 pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="sec-title text-center mb-35 md-mb-25">
                    <span className="sub-text sub-text5">Latest Project</span>
                    <h2 className="title">Our latest completed projects.</h2>
                </div>
                <div className="gridFilter mb-50 md-mb-30 text-center">
                    {filters.map((filter) => (
                        <button
                            key={filter.value}
                            className={activeFilter === filter.value ? 'active' : ''}
                            onClick={() => handleFilterClick(filter.value)}
                            data-filter={filter.value}
                        >
                            {filter.name}
                        </button>
                    ))}
                </div>
                <div className="row grid">
                    {filteredProjects.map(project => (
                        <div key={project.id} className={`col-lg-4 col-md-6 mb-30 grid-item ${project.filters.join(' ')}`}>
                            <ProjectCard3
                                project={project}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;
