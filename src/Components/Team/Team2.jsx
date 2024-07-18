import React from 'react';
import { Link } from 'react-router-dom';

const Team2 = ({ member }) => {
    return (
        <div className="team-inner-wrap">
            <div className="image-wrap">
                <Link to="/team-single"><img src={member.image} alt={member.name} /></Link>
            </div>
            <div className="team-content">
                <div className="team-info">
                    <h3 className="team-name">
                        <Link to="/team-single">{member.name}</Link>
                    </h3>
                    <span className="team-title">{member.title}</span>
                </div>
                <ul className="social-icon">
                    <li><Link to="#"><i className="ri-facebook-fill"></i></Link></li>
                    <li><Link to="#"><i className="ri-instagram-fill"></i></Link></li>
                    <li><Link to="#"><i className="ri-twitter-fill"></i></Link></li>
                    <li><Link to="#"><i className="ri-linkedin-fill"></i></Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Team2;