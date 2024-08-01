import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard3 = ({ project, imgWithAncor, proIcon }) => {
    return (
        <div className="project-item">


            <div className="project-img">
                {
                    !imgWithAncor ?
                        <img src={project.image} alt={project.title} /> :
                        <Link to={project.link} className="project-img">
                            <img src={project.image} alt={project.title} />
                        </Link>
                }
            </div>


            <div className="project-content">
                <div className="project-inner">
                    <span className="category"><Link to={project.link}>{project.category}</Link></span>
                    <h3 className="title"><Link to={project.link}>{project.title}</Link></h3>
                    {
                        proIcon &&
                        <p className="pro-icon">
                            <Link to={project.link}>
                                <i className="ri-arrow-right-fill"></i>
                            </Link>
                        </p>
                    }
                </div>
            </div>
        </div>
    );
};

export default ProjectCard3;