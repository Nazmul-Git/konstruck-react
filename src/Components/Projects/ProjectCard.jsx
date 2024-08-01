import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project, index, isPIconHide }) => {
    return (
        <div className={`project-item ${index === 0 ? 'mb-30' : ''}`}>
            <div className="project-img">
                <img src={project.img} alt={project.title} />
            </div>
            <div className="project-content">
                {
                    !isPIconHide &&
                    <div className="p-icon">
                    <Link to={project.link}><i className="ri-arrow-right-up-line"></i></Link>
                </div>
                }
                <div className="project-inner">
                    <h3 className="title"><Link to={project.link}>{project.title}</Link></h3>
                    <span className="category"><Link to={project.link}>{project.category}</Link></span>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;