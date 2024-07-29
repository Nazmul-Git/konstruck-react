import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuItems from './HeaderItems/MenuItems';
import ToolBar from './HeaderItems/ToolBar';
import MiddleHeader from './HeaderItems/MiddleHeader';
import RightMenuToggle from './HeaderItems/RightToggleMenu';

const Header = ({ normalLogo, darkLogo, topBarVisible, headerStyle, middleHeader, searchIcon, btnQuite1, btnQuite2, socialIcon, isPhnNumber, topBarModifyClass, callIcon, otherClass, modifyClassMidl, logoMidl, mail, address, textOnly, boxLayout }) => {
    const [searchValue, setSearchValue] = useState('');
    const [isSticky, setSticky] = useState(false);
    const [navExpanded, setNavExpanded] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 70) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };
    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleToggleMobileMenu = () => {
        setNavExpanded(!navExpanded);
        if (!navExpanded) {
            document.body.classList.add('nav-expanded');
        } else {
            document.body.classList.remove('nav-expanded');
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.classList.remove('nav-expanded');
        };
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className="full-width-header">
            {/* Header Start */}
            <header id="rs-header" className={`rs-header ${headerStyle ? headerStyle : ''} ${otherClass ? otherClass : ''}`}>
                {/* Toolbar Area Start */}
                {
                    topBarVisible && <ToolBar
                        phnNumber={isPhnNumber}
                        topBarModifyClass={topBarModifyClass}
                        mail={mail}
                        address={address}
                        textOnly={textOnly}
                    />
                }
                {
                    middleHeader &&
                    <MiddleHeader
                        logo={logoMidl}
                        modifyClassMidl={modifyClassMidl}
                    />
                }

                {/* Toolbar Area End */}

                {/* Menu Start */}
                <div className={`menu-area menu-sticky ${isSticky ? 'sticky' : ''}`} >
                    <div className={`container ${boxLayout ? boxLayout : ''}`}>
                        <div className="row-table">
                            <div className="col-cell header-logo">
                                <div className="logo-area">
                                    <Link to="/index">
                                        <img className="normal-logo" src={normalLogo} alt="logo" />
                                        <img className="sticky-logo" src={darkLogo} alt="logo" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-cell">
                                <div className="rs-menu-area">
                                    <div className="main-menu">
                                        <nav className="rs-menu hidden-md">
                                            <ul className="nav-menu">
                                                <MenuItems />
                                            </ul>
                                            {/* //.nav-menu */}
                                        </nav>
                                    </div>
                                    {/* //.main-menu */}
                                </div>
                            </div>
                            <div className="col-cell">
                                <div className="expand-btn-inner">
                                    <ul>
                                        {
                                            socialIcon &&
                                            <li className="toolbar-sl-share">
                                                <ul className="clearfix">
                                                    <li><Link to="#"><i className="ri-facebook-fill"></i></Link></li>
                                                    <li><Link to="#"><i className="ri-twitter-fill"></i></Link></li>
                                                    <li><Link to="#"><i className="ri-pinterest-fill"></i></Link></li>
                                                    <li><Link to="#"><i className="ri-instagram-fill"></i></Link></li>
                                                </ul>
                                            </li>
                                        }
                                        {
                                            searchIcon &&
                                            <li className="search-parent">
                                                <Link className="hidden-xs rs-search" to="#">
                                                    <i className="ri-search-line"></i>
                                                </Link>
                                                <div className="sticky_form">
                                                    <form role="search" className="bs-search search-form" method="get">
                                                        <div className="search-wrap">
                                                            <label className="screen-reader-text active">
                                                                Search for:
                                                            </label>
                                                            <input
                                                                type="search"
                                                                placeholder="Searching..."
                                                                name="s"
                                                                className="search-input"
                                                                value={searchValue}
                                                                onChange={handleSearchChange}
                                                            />
                                                            <button type="submit" value="Search">
                                                                <i className="ri-search-line"></i>
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </li>
                                        }
                                        {
                                            btnQuite1 &&
                                            <li className="btn-quote"><Link className="quote-button" to="#">Let's Talk</Link></li>
                                        }
                                        {
                                            btnQuite2 &&
                                            <li className="btn-quote"><Link className="quote-button" to="#">Get A Quote<i className="ri-arrow-right-line"></i></Link></li>
                                        }

                                        {
                                            callIcon &&
                                            <li className="rs-contact-phone">
                                                <i className="fi fi-rr-phone-call"></i>
                                                <div className="phone-number">
                                                    <span>Free Call</span>
                                                    <Link to="tel:(+1)7854-333-222"> (+1) 7854-333-222</Link>
                                                </div>
                                            </li>
                                        }

                                        <li className="humburger" onClick={handleToggleMobileMenu}>
                                            <Link id="nav-expander" className="nav-expander bar" to="#">
                                                <div className="bar">
                                                    <span className="dot1"></span>
                                                    <span className="dot2"></span>
                                                    <span className="dot3"></span>
                                                    <span className="dot4"></span>
                                                    <span className="dot5"></span>
                                                    <span className="dot6"></span>
                                                    <span className="dot7"></span>
                                                    <span className="dot8"></span>
                                                    <span className="dot9"></span>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Menu End */}
            </header>
            <RightMenuToggle
                handleToggleMobileMenu={handleToggleMobileMenu}
            />
        </div>
    );
};

export default Header;
