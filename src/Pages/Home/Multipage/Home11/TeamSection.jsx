import React from 'react';
import Slider from 'react-slick';
import Team4 from '../../../../Components/Team/Team4';

// Import images
import teamImage1 from '../../../../assets/images/team/style1/tm1.jpg';
import teamImage2 from '../../../../assets/images/team/style1/tm2.jpg';
import teamImage3 from '../../../../assets/images/team/style1/tm3.jpg';

// Team data
const teamMembers = [
    {
        image: teamImage1,
        name: 'Xavier Davids',
        title: 'Builder Advisor',
        social: [
            { icon: 'facebook', url: '#' },
            { icon: 'instagram', url: '#' },
            { icon: 'twitter', url: '#' },
            { icon: 'linkedin', url: '#' }
        ]
    },
    {
        image: teamImage2,
        name: 'Davis Youn',
        title: 'Architecture',
        social: [
            { icon: 'facebook', url: '#' },
            { icon: 'instagram', url: '#' },
            { icon: 'twitter', url: '#' },
            { icon: 'linkedin', url: '#' }
        ]
    },
    {
        image: teamImage3,
        name: 'Thomas Arthur',
        title: 'Foreman',
        social: [
            { icon: 'facebook', url: '#' },
            { icon: 'instagram', url: '#' },
            { icon: 'twitter', url: '#' },
            { icon: 'linkedin', url: '#' }
        ]
    },
    {
        image: teamImage1,
        name: 'Xavier Davids',
        title: 'Builder Advisor',
        social: [
            { icon: 'facebook', url: '#' },
            { icon: 'instagram', url: '#' },
            { icon: 'twitter', url: '#' },
            { icon: 'linkedin', url: '#' }
        ]
    },
    {
        image: teamImage2,
        name: 'Davis Youn',
        title: 'Architecture',
        social: [
            { icon: 'facebook', url: '#' },
            { icon: 'instagram', url: '#' },
            { icon: 'twitter', url: '#' },
            { icon: 'linkedin', url: '#' }
        ]
    },
    {
        image: teamImage3,
        name: 'Thomas Arthur',
        title: 'Foreman',
        social: [
            { icon: 'facebook', url: '#' },
            { icon: 'instagram', url: '#' },
            { icon: 'twitter', url: '#' },
            { icon: 'linkedin', url: '#' }
        ]
    },
    // Add more team members as needed
];

// Slick slider settings
const settings = {
    dots: false,
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
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const TeamSection = () => {
    return (
        <div className="rs-team team-style3 team-modify4 pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="sec-title text-center mb-45">
                    <span className="sub-text sub-text13">Meet our team</span>
                    <h2 className="title">Meet our plumber experts</h2>
                </div>
                <Slider className="rs-carousel" {...settings}>
                    {teamMembers.map((member, index) => (
                        <div className="team-item-wrap" key={index}>
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
