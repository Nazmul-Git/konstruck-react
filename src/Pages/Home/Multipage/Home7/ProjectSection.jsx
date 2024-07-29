import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectCard from '../../../../Components/Projects/ProjectCard';

// Project images
import img1 from '../../../../assets/images/project/style4/port1.jpg';
import img2 from '../../../../assets/images/project/style4/port2.jpg';
import img3 from '../../../../assets/images/project/style4/port3.jpg';
import img4 from '../../../../assets/images/project/style4/port4.jpg';
import img5 from '../../../../assets/images/project/style4/port5.jpg';

const projects = [
    { img: img1, category: 'Transport', title: 'Coxs-Bazar Seaport', link: '/projects-single' },
    { img: img2, category: 'Warehouse', title: 'United Kingdom Wirehouse', link: '/projects-single' },
    { img: img3, category: 'Transport', title: 'Flight and Ship Freight Project', link: '/projects-single' },
    { img: img4, category: 'Canada Warehouse', title: 'Canada Warehouse', link: '/projects-single' },
    { img: img5, category: 'Transport', title: 'Ship Freight For Moving', link: '/projects-single' },
];

const ProjectSection = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
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
        <div className="rs-project project-style2 project-modify2">
            <div className="rs-carousel">
                <Slider {...settings}>
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            index={index}
                            project={project}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default ProjectSection;
