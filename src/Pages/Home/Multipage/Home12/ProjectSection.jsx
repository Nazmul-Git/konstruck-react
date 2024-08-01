import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import projectImg1 from '../../../../assets/images/project/style8/port-1.jpg';
import projectImg2 from '../../../../assets/images/project/style8/port-2.jpg';
import projectImg3 from '../../../../assets/images/project/style8/port-3.jpg';
import projectImg4 from '../../../../assets/images/project/style8/port-4.jpg';
import projectImg5 from '../../../../assets/images/project/style8/port-5.jpg';
import projectImg6 from '../../../../assets/images/project/style8/port-6.jpg';
import projectImg7 from '../../../../assets/images/project/style8/port-7.jpg';
import ProjectCard3 from '../../../../Components/Projects/ProjectCard3';

const projects = [
    { id: 1, title: 'Construction Processes', image: projectImg1, link: '/projects-single' },
    { id: 2, title: 'Construction Challenges', image: projectImg2, link: '/projects-single' },
    { id: 3, title: 'Construction Plans', image: projectImg3, link: '/projects-single' },
    { id: 4, title: 'Construction Project', image: projectImg4, link: '/projects-single' },
    { id: 5, title: 'Construction Management', image: projectImg5, link: '/projects-single' },
    { id: 6, title: 'Blue Glass Building', image: projectImg6, link: '/projects-single' },
    { id: 7, title: 'Ferguson Family YMCA', image: projectImg7, link: '/projects-single' },
    { id: 8, title: 'Historic Restoration', image: projectImg1, link: '/projects-single' },
    { id: 9, title: 'Construction Challenges', image: projectImg2, link: '/projects-single' },
];

const ProjectSection = () => {
    const settings = {
        dots: true,
        arrows: true, 
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="rs-project project-style9 pt-120 pb-175 md-pt-80 md-pb-80">
            <div className="container">
                <div className="sec-title text-center mb-45">
                    <span className="sub-text sub-text9">Recent Projects</span>
                    <h2 className="title title6">
                        We Always Think On<br />
                        Your Dream
                    </h2>
                </div>
            </div>
            <div className="slider project-slide-2">
                <Slider {...settings}>
                    {projects.map(project => (
                        <div key={project.id} className="grid-item">
                            <ProjectCard3
                                project={project}
                                imgWithAncor={true}
                                proIcon={true}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ProjectSection;
