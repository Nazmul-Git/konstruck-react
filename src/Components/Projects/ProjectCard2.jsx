import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard2 = ({ project }) => {
    return (
        <div className="project-item">
            <div className="project-img">
                <Link to={project.link}><img src={project.img} alt={project.alt} /> </Link>
            </div>
            <div className="portfolio-content">
                <h4 className="title"><Link to={project.link}> {project.title}</Link></h4>
            </div>
        </div>
    );
};

export default ProjectCard2;