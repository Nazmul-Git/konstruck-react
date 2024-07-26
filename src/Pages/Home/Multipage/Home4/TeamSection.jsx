import React from 'react';
import Slider from 'react-slick';
import shape2 from '../../../../assets/images/shape-2.png';
import team1 from '../../../../assets/images/team/tm1.jpg';
import team2 from '../../../../assets/images/team/tm2.jpg';
import team3 from '../../../../assets/images/team/tm3.jpg';
import team4 from '../../../../assets/images/team/tm4.jpg';
import team5 from '../../../../assets/images/team/tm5.jpg';
import team6 from '../../../../assets/images/team/tm6.jpg';
import Team3 from '../../../../Components/Team/Team3';

const teamMembers = [
    { img: team1, name: "Xavier Davids", title: "Builder Advisor" },
    { img: team2, name: "Davis Youn", title: "Architecture" },
    { img: team3, name: "Thomas Arthur", title: "Foreman" },
    { img: team4, name: "Leo Harnent Keorn", title: "Construction Worker" },
    { img: team5, name: "John William", title: "CEO & Engineer" },
    { img: team6, name: "Navin Thapa", title: "Project Manager" },
    { img: team1, name: "Xavier Davids", title: "Builder Advisor" },
    { img: team2, name: "Davis Youn", title: "Architecture" },
    { img: team3, name: "Thomas Arthur", title: "Foreman" },
];

const settings = {
    dots:true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

const TeamSection = () => {
    return (
        <div className="rs-team team-style3 bg11 pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="sec-title text-center mb-60 md-mb-40">
                    <span className="sub-text sub-text3 white-color">
                        <img src={shape2} alt="Images" />
                        Meet Our Team
                    </span>
                    <h2 className="title white-color">
                        Meet our roofing experts
                    </h2>
                </div>
                <Slider {...settings} className='rs-carousel owl-carousel'>
                    {teamMembers.map((member, index) => (
                        <div className="team-item-wrap" key={index}>
                            <Team3
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
