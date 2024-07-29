import React from 'react';
import teamImage1 from '../../../../assets/images/team/style1/tm1.jpg';
import teamImage2 from '../../../../assets/images/team/style1/tm2.jpg';
import teamImage3 from '../../../../assets/images/team/style1/tm3.jpg';
import teamImage4 from '../../../../assets/images/team/style1/tm4.jpg';
import teamImage5 from '../../../../assets/images/team/tm3.jpg';
import teamImage6 from '../../../../assets/images/team/tm4.jpg';
import Team5 from '../../../../Components/Team/Team5';

const teamData = [
    {
        name: 'Carmine Endrizzi',
        title: 'Builder Advisor',
        image: teamImage1,
        social: [
            { platform: 'facebook', url: '#' },
            { platform: 'instagram', url: '#' },
            { platform: 'twitter', url: '#' },
            { platform: 'linkedin', url: '#' },
        ],
    },
    {
        name: 'Richard Landry',
        title: 'CEO & Engineer',
        image: teamImage2,
        social: [
            { platform: 'facebook', url: '#' },
            { platform: 'instagram', url: '#' },
            { platform: 'twitter', url: '#' },
            { platform: 'linkedin', url: '#' },
        ],
    },
    {
        name: 'Michael Lindsey',
        title: 'Construction Worker',
        image: teamImage3,
        social: [
            { platform: 'facebook', url: '#' },
            { platform: 'instagram', url: '#' },
            { platform: 'twitter', url: '#' },
            { platform: 'linkedin', url: '#' },
        ],
    },
    {
        name: 'Lorenzo Veitch',
        title: 'Foreman',
        image: teamImage4,
        social: [
            { platform: 'facebook', url: '#' },
            { platform: 'instagram', url: '#' },
            { platform: 'twitter', url: '#' },
            { platform: 'linkedin', url: '#' },
        ],
    },
    {
        name: 'Xavier Davids',
        title: 'Thomas Arthur',
        image: teamImage5,
        social: [
            { platform: 'facebook', url: '#' },
            { platform: 'instagram', url: '#' },
            { platform: 'twitter', url: '#' },
            { platform: 'linkedin', url: '#' },
        ],
    },
    {
        name: 'Leo Harnent Keorn',
        title: 'Project Manager',
        image: teamImage6,
        social: [
            { platform: 'facebook', url: '#' },
            { platform: 'instagram', url: '#' },
            { platform: 'twitter', url: '#' },
            { platform: 'linkedin', url: '#' },
        ],
    },
];

const TeamSection = () => {
    return (
        <div className="rs-team team-style4 pt-120 pb-120 md-pt-75 md-pb-80">
            <div className="container">
                <div className="sec-title3 text-center mb-60 md-mb-40">
                    <span className="sub-title">Expert People</span>
                    <h2 className="title pb-25">Our Team Members</h2>
                    <div className="heading-border-line"></div>
                </div>
                <div className="row">
                    {teamData.map((member, index) => (
                        <div key={index} className="col-lg-4 col-md-6 mb-30">
                            <div className="team-item">
                                <div className="team-inner-wrap">
                                    <div className="image-wrap">
                                        <Team5
                                            member={member}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeamSection;
