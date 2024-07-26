import React from 'react';
import { Link } from 'react-router-dom';

const Team3 = ({ member }) => {
    return (
        <div className="team-inner-wrap">
            <div className="image-wrap">
                <Link to="/team-single"><img src={member.img} alt="Team" /></Link>
            </div>
            <div className="team-content">
                <div className="team-info">
                    <h3 className="team-name">
                        <Link to="/team-single">{member.name}</Link>
                    </h3>
                    <span className="team-title">{member.title}</span>
                </div>
                <div className="plus-team">
                    <div className="social-icons">
                        <Link to="#"><i className="ri-facebook-fill"></i></Link>
                        <Link to="#"><i className="ri-instagram-fill"></i></Link>
                        <Link to="#"><i className="ri-twitter-fill"></i></Link>
                        <Link to="#"><i className="ri-linkedin-fill"></i></Link>
                    </div>
                    <i className="fi fi-rr-share share-i"></i>
                </div>
            </div>
        </div>
    );
};

export default Team3;