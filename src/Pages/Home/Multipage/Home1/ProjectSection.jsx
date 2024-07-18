import React, { useState } from 'react';
import shapeImage from '../../../../assets/images/shape-1.png'; // Importing shape image
import project1 from '../../../../assets/images/project/style1/1.jpg'; // Importing project images
import project2 from '../../../../assets/images/project/style1/2.jpg';
import project3 from '../../../../assets/images/project/style1/3.jpg';
import project4 from '../../../../assets/images/project/style1/4.jpg';
import project5 from '../../../../assets/images/project/style1/5.jpg';
import project6 from '../../../../assets/images/project/style1/6.jpg';
import { Link } from 'react-router-dom';

const ProjectSection = () => {
    const [activeFilter, setActiveFilter] = useState('*'); // Default filter to show all projects

    const handleFilterClick = (filter) => {
        setActiveFilter(filter); // Update active filter state
    };

    const projects = [
        { id: 1, imageSrc: project1, title: 'Blue Glass Building', category: 'filter1' },
        { id: 2, imageSrc: project2, title: 'Ferguson Family YMCA', category: 'filter3 filter1' },
        { id: 3, imageSrc: project3, title: 'Stone Harbor', category: 'filter2 filter4' },
        { id: 4, imageSrc: project4, title: 'Hyatt Regency', category: 'filter2 filter3' },
        { id: 5, imageSrc: project5, title: 'Eisenhower Elementary', category: 'filter3 filter4' },
        { id: 6, imageSrc: project6, title: 'Edison Middle School', category: 'filter2 filter4' }
    ];

    return (
        <div className="rs-project project-style1 gray-bg pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="sec-title text-center mb-45">
                    <span className="sub-text">
                        <img src={shapeImage} alt="Images" /> {/* Using imported shape image */}
                        Projects
                    </span>
                    <h2 className="title">
                        Latest completed projects
                    </h2>
                </div>
                <div className="gridFilter gridfilter-style2 mb-47 text-center">
                    <button className={activeFilter === '*' ? 'active' : ''} onClick={() => handleFilterClick('*')}>All</button>
                    <button className={activeFilter === 'filter1' ? 'active' : ''} onClick={() => handleFilterClick('filter1')}>Architecture</button>
                    <button className={activeFilter === 'filter2' ? 'active' : ''} onClick={() => handleFilterClick('filter2')}>House & Exterior</button>
                    <button className={activeFilter === 'filter3' ? 'active' : ''} onClick={() => handleFilterClick('filter3')}>House Renovation</button>
                    <button className={activeFilter === 'filter4' ? 'active' : ''} onClick={() => handleFilterClick('filter4')}>Interiors</button>
                </div>
                <div className="row grid">
                    {projects.map((project) => (
                        project.category.includes(activeFilter) || activeFilter === '*' ? (
                            <div key={project.id} className="col-lg-4 col-md-6 mb-30 grid-item">
                                <div className="project-item">
                                    <div className="project-img">
                                        <Link to="/projects-single"><img src={project.imageSrc} alt="images" /></Link>
                                    </div>
                                    <div className="project-content">
                                        <div className="project-inner">
                                            <h3 className="title"><Link to="/projects-single">{project.title}</Link></h3>
                                            <span className="category"><Link to="/projects-single">{project.category.includes('filter1') ? 'Architecture' : project.category.includes('filter2') ? 'House & Exterior' : project.category.includes('filter3') ? 'House Renovation' : 'Interiors'}</Link></span>
                                        </div>
                                        <div className="p-icon"><Link to="/projects-single"><i className="ri-arrow-right-line"></i></Link></div>
                                    </div>
                                </div>
                            </div>
                        ) : null
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;
