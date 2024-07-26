import React from 'react';
import shape2 from '../../../../assets/images/shape-2.png';
import port1 from '../../../../assets/images/project/style2/port-1.jpg';
import port2 from '../../../../assets/images/project/style2/port-2.jpg';
import port3 from '../../../../assets/images/project/style2/port-3.jpg';
import port4 from '../../../../assets/images/project/style2/port-4.jpg';
import ProjectCard from '../../../../Components/Projects/ProjectCard';

const projects1 = [
    {
        img: port1,
        title: 'Jewelers Mutual',
        category: 'Masonry',
        link: '/projects/jewelers-mutual'
    },
    {
        img: port3,
        title: 'Historic Restoration',
        category: 'Masonry',
        link: '/projects/historic-restoration'
    },
];

const projects2 = [
    {
        img: port2,
        title: 'Edison Middle School',
        category: 'Masonry',
        link: '/projects/edison-middle-school'
    },
    {
        img: port4,
        title: 'Olson’s Piggly Wiggly',
        category: 'Masonry',
        link: '/projects/olsons-piggly-wiggly'
    }
];

const ProjectSection = () => {
    return (
        <div className="rs-project project-style2 project-modify1 pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="sec-title text-center mb-55 md-mb-40">
                    <span className="sub-text sub-text3">
                        <img src={shape2} alt="Images" />
                        Latest Project
                    </span>
                    <h2 className="title">
                        View our latest projects.
                    </h2>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6 md-mb-30">
                        {
                            projects1 &&
                            projects1.map((project, index) => (
                                <ProjectCard
                                    key={index}
                                    index={index}
                                    project={project}
                                />
                            ))
                        }
                    </div>
                    <div className="col-lg-6 col-md-6">
                        {
                            projects2 &&
                            projects2.map((project, index) => (
                                <ProjectCard
                                    key={index}
                                    index={index}
                                    project={project}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectSection;
