import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard3 = ({ project }) => {
    return (
        <div className="project-item">
            <div className="project-img">
                <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
                <div className="project-inner">
                    <span className="category"><Link to={project.link}>{project.category}</Link></span>
                    <h3 className="title"><Link to={project.link}>{project.title}</Link></h3>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard3;