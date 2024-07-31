import React, { useState } from 'react';
import project1Img from '../../../../assets/images/project/style5/port-1.jpg';
import project2Img from '../../../../assets/images/project/style5/port-2.jpg';
import project3Img from '../../../../assets/images/project/style5/port-3.jpg';
import project4Img from '../../../../assets/images/project/style5/port-4.jpg';
import project5Img from '../../../../assets/images/project/style5/port-5.jpg';
import project6Img from '../../../../assets/images/project/style5/port-6.jpg';
import ProjectCard3 from '../../../../Components/Projects/ProjectCard3';

const projects = [
    {
        id: 1,
        category: 'General',
        image: project1Img,
        title: 'Gas Pipe Line',
        filter: 'filter1',
    },
    {
        id: 2,
        category: 'General',
        image: project2Img,
        title: 'Steel Pipe stack',
        filter: 'filter3 filter1',
    },
    {
        id: 3,
        category: 'Outdoor',
        image: project3Img,
        title: 'Crisscros Steel Plate',
        filter: 'filter2 filter4',
    },
    {
        id: 4,
        category: 'Repair',
        image: project4Img,
        title: 'Power Line Tower',
        filter: 'filter2 filter3',
    },
    {
        id: 5,
        category: 'Indoor',
        image: project5Img,
        title: 'Metal Texture',
        filter: 'filter3 filter4',
    },
    {
        id: 6,
        category: 'General',
        image: project6Img,
        title: 'Edison Middle School',
        filter: 'filter1 filter4',
    },
];

const ProjectSection = () => {
    const [filter, setFilter] = useState('*');

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    return (
        <div className="rs-project project-style4 port-orange-modify2 pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="sec-title text-center mb-35 md-mb-25">
                    <span className="sub-text sub-text6">Latest Project</span>
                    <h2 className="title">
                        Our latest completed projects.
                    </h2>
                </div>
                <div className="gridFilter gridfilter-style1 mb-40 md-mb-30 text-center">
                    <button
                        className={filter === '*' ? 'active' : ''}
                        onClick={() => handleFilterChange('*')}
                    >
                        All
                    </button>
                    <button
                        className={filter === 'filter1' ? 'active' : ''}
                        onClick={() => handleFilterChange('filter1')}
                    >
                        General
                    </button>
                    <button
                        className={filter === 'filter2' ? 'active' : ''}
                        onClick={() => handleFilterChange('filter2')}
                    >
                        Indoor
                    </button>
                    <button
                        className={filter === 'filter3' ? 'active' : ''}
                        onClick={() => handleFilterChange('filter3')}
                    >
                        Outdoor
                    </button>
                    <button
                        className={filter === 'filter4' ? 'active' : ''}
                        onClick={() => handleFilterChange('filter4')}
                    >
                        Repair
                    </button>
                </div>
                <div className="row grid">
                    {projects
                        .filter((project) => filter === '*' || project.filter.includes(filter))
                        .map((project) => (
                            <div
                                key={project.id}
                                className={`col-lg-4 col-md-6 mb-30 grid-item ${project.filter}`}
                            >
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
