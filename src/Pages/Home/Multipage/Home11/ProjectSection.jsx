import React from 'react';
import Slider from 'react-slick';

// Import images
import projectImage1 from '../../../../assets/images/project/style7/pro-1.jpg';
import projectImage2 from '../../../../assets/images/project/style7/pro-2.jpg';
import projectImage3 from '../../../../assets/images/project/style7/pro-3.jpg';
import projectImage4 from '../../../../assets/images/project/style7/pro-4.jpg';
import ProjectCard from '../../../../Components/Projects/ProjectCard';

// Project data
const projects = [
    {
        img: projectImage1,
        title: 'Construction Challenges',
        link: '/projects-single',
        category: 'Construction'
    },
    {
        img: projectImage2,
        title: 'Construction Plans',
        link: '/projects-single',
        category: 'Construction'
    },
    {
        img: projectImage3,
        title: 'Construction Project',
        link: '/projects-single',
        category: 'Construction'
    },
    {
        img: projectImage4,
        title: 'Construction Management',
        link: '/projects-single',
        category: 'Construction'
    },
    {
        img: projectImage1,
        title: 'Construction Challenges',
        link: '/projects-single',
        category: 'Construction'
    }
];

// Slick slider settings
const settings = {
    dots: false,
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
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const ProjectSection = () => {
    return (
        <div className="rs-project project-style4 orange-modify3 gray-bg8 pt-115 pb-120 md-pt-75 md-pb-80">
            <div className="container">
                <div className="sec-title mb-50 md-mb-35">
                    <h2 className="title title5 white-color">Works Showcase</h2>
                </div>
            </div>
            <Slider className="slider project-slide-1" {...settings}>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        project={project}
                    />
                ))}
            </Slider>
        </div>
    );
};

export default ProjectSection;
