import React from 'react';
import port1 from '../../../../assets/images/project/style6/port1.jpg';
import port2 from '../../../../assets/images/project/style6/port2.jpg';
import port3 from '../../../../assets/images/project/style6/port3.jpg';
import port4 from '../../../../assets/images/project/style6/port4.jpg';
import ProjectCard3 from '../../../../Components/Projects/ProjectCard3';

const projects = [
    { image: port1, category: 'Architect Design', title: 'Restoration House', link: '/projects-single' },
    { image: port2, category: 'Architect Design', title: 'Historic Restoration', link: '/projects-single' },
    { image: port3, category: 'Architect Design', title: 'Jewelers Mutual', link: '/projects-single' },
    { image: port4, category: 'Architect Design', title: 'Blue Glass Building', link: '/projects-single' }
];

const ProjectSection = () => {
    return (
        <div className="rs-project project-style5 pt-100 pb-100 md-pt-70 md-pb-70">
            <div className="container">
                <div className="sec-title text-center mb-40">
                    <span className="sub-text sub-text7">Archtek Project</span>
                    <h2 className="title">Our Latest Projects</h2>
                </div>
                <div className="row">
                    {projects.map((project, index) => (
                        <div className="col-lg-6 col-md-6 mb-20" key={index}>
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
