import React from 'react';
import Slider from 'react-slick';

// Import project images
import img1 from '../../../../assets/images/project/style7/pro-1.jpg';
import img2 from '../../../../assets/images/project/style7/pro-2.jpg';
import img3 from '../../../../assets/images/project/style7/pro-3.jpg';
import img4 from '../../../../assets/images/project/style7/pro-4.jpg';
import ProjectCard from '../../../../Components/Projects/ProjectCard';

// Define the projects data
const projectsData = [
    {
        img: img1,
        title: 'Construction Challenges',
        category: 'Construction',
        link: '/projects-single'
    },
    {
        img: img2,
        title: 'Construction Plans',
        category: 'Construction',
        link: '/projects-single'
    },
    {
        img: img3,
        title: 'Construction Project',
        category: 'Construction',
        link: '/projects-single'
    },
    {
        img: img4,
        title: 'Construction Management',
        category: 'Construction',
        link: '/projects-single'
    },
    {
        img: img1,
        title: 'Construction Challenges',
        category: 'Construction',
        link: '/projects-single'
    },
    {
        img: img2,
        title: 'Construction Plans',
        category: 'Construction',
        link: '/projects-single'
    },
    {
        img: img3,
        title: 'Construction Project',
        category: 'Construction',
        link: '/projects-single'
    },
    {
        img: img4,
        title: 'Construction Management',
        category: 'Construction',
        link: '/projects-single'
    }
];

const ProjectSection = () => {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="rs-project project-style4 red-modify4 red-bg1 pt-140 md-pt-80 md-pb-80">
            <div className="container">
                <div className="sec-title text-center mb-45">
                    <div className="title-inner ser-inner">
                        <h2 className="title"><span className="watermark">04</span>Recent Projects</h2>
                    </div>
                    <h2 className="title title5 white-color pb-28">
                        We Always Think On<br />
                        Your Dream
                    </h2>
                </div>
            </div>
            <div className="slider project-slide-2">
                <Slider {...settings}>
                    {projectsData.map((project, index) => (
                        <div key={index} className="grid-item">
                            <ProjectCard
                                project={project}
                                index={index}
                                isPIconHide={true}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ProjectSection;
