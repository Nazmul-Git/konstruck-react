import React from 'react';
import Projects from '../../../../Components/Projects/Projects';
import projectImg1 from '../../../../assets/images/project/style1/1.jpg';
import projectImg2 from '../../../../assets/images/project/style1/2.jpg';
import projectImg3 from '../../../../assets/images/project/style1/3.jpg';
import projectImg4 from '../../../../assets/images/project/style1/4.jpg';

const projectsData = [
    {
        img: projectImg1,
        category: 'Interiors',
        title: 'Edison Middle School',
        link: '/projects-single'
    },
    {
        img: projectImg2,
        category: 'House Renovation',
        title: 'Olson’s Piggly Wiggly',
        link: '/projects-single'
    },
    {
        img: projectImg3,
        category: 'House Renovation',
        title: 'Jewelers Mutual',
        link: '/projects-single'
    },
    {
        img: projectImg4,
        category: 'House & Exterior',
        title: 'Stone Harbor',
        link: '/projects-single'
    },
    // Add more projects as needed
];

const ProjectSection = () => {
    const settings = {
        dots: true,
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
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <Projects
                projects={projectsData}
                settings={settings} />
        </>
    )
}

export default ProjectSection;
