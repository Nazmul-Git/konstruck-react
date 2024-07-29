import React from 'react';

// Import images
import project1 from '../../../../assets/images/project/indrusti/indrusti-1.jpg';
import project2 from '../../../../assets/images/project/indrusti/indrusti-2.jpg';
import project3 from '../../../../assets/images/project/indrusti/indrusti-3.jpg';
import project4 from '../../../../assets/images/project/indrusti/indrusti-4.jpg';
import project5 from '../../../../assets/images/project/indrusti/indrusti-5.jpg';
import project6 from '../../../../assets/images/project/indrusti/indrusti-6.jpg';
import videoSrc from '../../../../assets/images/konstruk.mp4';
import ProjectCard2 from '../../../../Components/Projects/ProjectCard2';

const projectData = [
    {
        img: project1,
        alt: 'Steel Pipe stack',
        link: '/projects-single',
        title: 'Steel Pipe stack'
    },
    {
        img: project2,
        alt: 'Gas Pipe Line',
        link: '/projects-single',
        title: 'Gas Pipe Line'
    },
    {
        img: project3,
        alt: 'Crisscros Steel Plate',
        link: '/projects-single',
        title: 'Crisscros Steel Plate'
    },
    {
        img: project4,
        alt: 'Power Line Tower',
        link: '/projects-single',
        title: 'Power Line Tower'
    },
    {
        img: project5,
        alt: 'Aluminium Copper',
        link: '/projects-single',
        title: 'Aluminium Copper'
    },
    {
        img: project6,
        alt: 'Metal Texture',
        link: '/projects-single',
        title: 'Metal Texture'
    }
];

const ProjectSection = () => {
    return (
        <div className="rs-project project-style3 pt-120 pb-100 md-pt-80 md-pb-60">
            <video className="rs-html5-video" autoPlay muted playsInline loop src={videoSrc}></video>
            <div className="background-video-wrap">
                <div className="background-overlay"></div>
            </div>
            <div className="container">
                <div className="sec-title text-center mb-40 md-mb-20">
                    <span className="sub-text sub-text4">Latest Projects</span>
                    <h2 className="title title3 pb-27">
                        Latest completed and running <br />
                        awesome <span>projects.</span>
                    </h2>
                </div>
                <div className="row">
                    {projectData.map((project, index) => (
                        <div key={index} className={`col-lg-4 col-md-6 ${index === projectData.length ? '' : 'mb-20'}`}>
                            <ProjectCard2
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
