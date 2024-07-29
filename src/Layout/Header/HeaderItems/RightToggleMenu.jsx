import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/paste-light.png';

const RightMenuToggle = ({ handleToggleMobileMenu }) => {

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
    };

    const scrollableContentStyle = {
        overflowY: 'auto',
        flex: 1,
        paddingRight: '5px',
        paddingTop: '130px'
    }

    return (
        <nav className="right_menu_togle menu-wrap-off hidden-md" style={containerStyle}>
            <div className="close-btn">
                <Link id="nav-close" className="nav-close" onClick={handleToggleMobileMenu}>
                    <div className="line">
                        <span className="line1"></span>
                        <span className="line2"></span>
                    </div>
                </Link>
            </div>
            <div className="rs-offcanvas-inner" style={scrollableContentStyle}>
                <div className="canvas-logo">
                    <Link to="/index"><img src={logo} alt="logo" /></Link>
                </div>
                <div className="offcanvas-text">
                    <p>We denounce with righteous indig nation in and dislike men who are so beguiled and to demo realized, that they data forest see best business consulting wordpress theme 2022.</p>
                </div>
                <div className="canvas-contact">
                    <div className="address-area">
                        <div className="address-list">
                            <div className="info-icon">
                                <i className="fi fi-rr-map-marker-home"></i>
                            </div>
                            <div className="info-content">
                                <h4 className="title">Contact us</h4>
                                <em>25/2 Dublin, Ireland</em>
                            </div>
                        </div>
                        <div className="address-list">
                            <div className="info-icon">
                                <i className="fi fi-rr-envelope-plus"></i>
                            </div>
                            <div className="info-content">
                                <h4 className="title">Email Us</h4>
                                <em><Link to="mailto:support@devsdesign.net">support@devsdesign.net</Link></em>
                            </div>
                        </div>
                        <div className="address-list">
                            <div className="info-icon">
                                <i className="fi fi-rr-phone-call"></i>
                            </div>
                            <div className="info-content">
                                <h4 className="title">Get Free Estimate</h4>
                                <em>(+0885) - 2345 6789</em>
                            </div>
                        </div>
                    </div>
                    <ul className="social">
                        <li><Link to="#" className="hash"><i className="ri-facebook-fill"></i></Link></li>
                        <li><Link to="#" className="hash"><i className="ri-twitter-fill"></i></Link></li>
                        <li><Link to="#" className="hash"><i className="ri-pinterest-fill"></i></Link></li>
                        <li><Link to="#" className="hash"><i className="ri-instagram-fill"></i></Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default RightMenuToggle;
