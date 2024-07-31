import React from 'react';
import { Link } from 'react-router-dom';

const Team4 = ({ member }) => {
    return (
        <div className="team-inner-wrap">
            <div className="image-wrap">
                <Link to="/team-single">
                    <img src={member.image} alt="Team" />
                </Link>
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
                        {member.social.map((item, index) => (
                            <Link key={index} to={item.url}>
                                <i className={`ri-${item.icon}-fill`}></i>
                            </Link>
                        ))}
                    </div>
                    <i className="fi fi-rr-share share-i"></i>
                </div>
            </div>
        </div>
    );
};

export default Team4;