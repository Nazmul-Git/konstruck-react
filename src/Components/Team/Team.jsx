import React from 'react';
import { Link } from 'react-router-dom';


const Team = ({ member }) => {

    return (
        <div className="team-inner-wrap">
            <div className="image-wrap">
                <Link to={member.link}><img src={member.image} alt="Team" /></Link>
            </div>
            <div className="team-content">
                <h3 className="title"><Link to={member.link}>{member.name}</Link></h3>
                <span className="team-title">{member.title}</span>
            </div>
        </div>
    );
};

export default Team;
