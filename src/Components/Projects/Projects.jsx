import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const Projects = ({ projects, settings }) => {
    
    return (
        <div className="rs-project project-style2">
            <div className="sec-title text-center mb-50">
                <span className="sub-text sub-text2">
                    Latest Project
                </span>
                <h2 className="title">
                    Our latest completed and<br />
                    running projects.
                </h2>
            </div>
            <Slider {...settings}>
                {projects.map((project, index) => (
                    <div key={index} className="project-item" style={{ padding: '0 15px' }}>
                        <div className="project-img">
                            <img src={project.img} alt={project.title} />
                        </div>
                        <div className="project-content">
                            <div className="p-icon">
                                <Link to={project.link}><i className="ri-arrow-right-up-line"></i></Link>  
                            </div>
                            <div className="project-inner">
                                <span className="category"><Link to={project.link}>{project.category}</Link></span>
                                <h3 className="title"><Link to={project.link}>{project.title}</Link></h3>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Projects;
