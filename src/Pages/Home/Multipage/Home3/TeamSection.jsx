import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import team1 from '../../../../assets/images/team/tm1.jpg';
import team2 from '../../../../assets/images/team/tm2.jpg';
import team3 from '../../../../assets/images/team/tm3.jpg';
import team4 from '../../../../assets/images/team/tm4.jpg';
import team5 from '../../../../assets/images/team/tm5.jpg';
import team6 from '../../../../assets/images/team/tm6.jpg';
import Team2 from '../../../../Components/Team/Team2';

const teamMembers = [
    { name: 'Xavier Davids', title: 'Builder Advisor', image: team1 },
    { name: 'Davis Youn', title: 'Architecture', image: team2 },
    { name: 'Thomas Arthur', title: 'Foreman', image: team3 },
    { name: 'Leo Harnent Keorn', title: 'Construction Worker', image: team4 },
    { name: 'John William', title: 'CEO & Engineer', image: team5 },
    { name: 'Navin Thapa', title: 'Project Manager', image: team6 },
];

const TeamSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
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
        <div className="rs-team team-style2 pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="sec-title2 text-center mb-55 md-mb-35">
                    <span className="sub-title">Expert People</span>
                    <h2 className="title pb-25">Our Team Members</h2>
                    <div className="heading-border-line"></div>
                </div>
                <Slider {...settings}>
                    {teamMembers.map((member, index) => (
                        <div className="team-item-wrap" key={index}>
                            <Team2
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
