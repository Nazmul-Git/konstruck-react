import React from 'react';
import { Link } from 'react-router-dom';

const Team5 = ({member}) => {
    return (
        <div className="team-img-sec">
            <Link to="/team-single">
                <img src={member.image} alt={member.name} />
            </Link>
            <div className="team-content">
                <div className="author-text">
                    <h3 className="team-name">
                        <Link to="/team-single">{member.name}</Link>
                    </h3>
                    <span className="team-title">{member.title}</span>
                </div>
                <ul className="social-icons">
                    {member.social.map((icon, i) => (
                        <li key={i}>
                            <Link to={icon.url}>
                                <i className={`ri-${icon.platform}-fill`}></i>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Team5;