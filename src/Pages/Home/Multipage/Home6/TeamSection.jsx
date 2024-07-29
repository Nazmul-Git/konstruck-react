
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import tm1 from '../../../../assets/images/team/style1/tm1.jpg';
import tm2 from '../../../../assets/images/team/style1/tm2.jpg';
import tm3 from '../../../../assets/images/team/style1/tm3.jpg';
import Team4 from '../../../../Components/Team/Team4';

const teamMembers = [
    {
        id: 1,
        image: tm1,
        name: "Xavier Davids",
        title: "Builder Advisor",
        social: [
            { platform: "facebook", url: "#" },
            { platform: "instagram", url: "#" },
            { platform: "twitter", url: "#" },
            { platform: "linkedin", url: "#" }
        ]
    },
    {
        id: 2,
        image: tm2,
        name: "Davis Youn",
        title: "Architecture",
        social: [
            { platform: "facebook", url: "#" },
            { platform: "instagram", url: "#" },
            { platform: "twitter", url: "#" },
            { platform: "linkedin", url: "#" }
        ]
    },
    {
        id: 3,
        image: tm3,
        name: "Thomas Arthur",
        title: "Foreman",
        social: [
            { platform: "facebook", url: "#" },
            { platform: "instagram", url: "#" },
            { platform: "twitter", url: "#" },
            { platform: "linkedin", url: "#" }
        ]
    },
    {
        id: 4,
        image: tm1,
        name: "Leo Harnent Keorn",
        title: "Construction Worker",
        social: [
            { platform: "facebook", url: "#" },
            { platform: "instagram", url: "#" },
            { platform: "twitter", url: "#" },
            { platform: "linkedin", url: "#" }
        ]
    },
    {
        id: 5,
        image: tm2,
        name: "John William",
        title: "CEO & Engineer",
        social: [
            { platform: "facebook", url: "#" },
            { platform: "instagram", url: "#" },
            { platform: "twitter", url: "#" },
            { platform: "linkedin", url: "#" }
        ]
    },
    {
        id: 6,
        image: tm3,
        name: "Navin Thapa",
        title: "Project Manager",
        social: [
            { platform: "facebook", url: "#" },
            { platform: "instagram", url: "#" },
            { platform: "twitter", url: "#" },
            { platform: "linkedin", url: "#" }
        ]
    }
];

const TeamSection = () => {
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
                    slidesToShow: 2,
                    slidesToScroll: 1
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

    return (
        <div className="rs-team team-style3 team-modify2 gray-bg3 pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="sec-title text-center mb-45">
                    <span className="sub-text sub-text5">Meet our team</span>
                    <h2 className="title">Meet our plumber experts</h2>
                </div>
                <Slider {...settings} className="rs-carousel">
                    {teamMembers.map(member => (
                        <div key={member.id} className="team-item-wrap">
                            <Team4
                                member={member}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default TeamSection;
