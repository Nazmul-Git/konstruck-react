import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MenuItems = ({ firstLvlMenu, secondLvlMenu }) => {
    const location = useLocation();

    // Function to determine if a menu item should be active based on current location
    const isActive = (menuItem) => {
        return location.pathname.startsWith(menuItem); // Check if current path starts with the menuItem path
    };

    return (
        <>
            <li className={`menu-item-has-children ${firstLvlMenu === 'home' ? 'current-menu-item' : ''}`}>
                <Link to="#">Home</Link>
                <ul className="sub-menu">
                    <li className={`menu-item-has-children ${secondLvlMenu === 'multipages' ? 'current-menu-item' : ''}`}>
                        <Link to="#">Multipages</Link>
                        <ul className="sub-menu">
                            <li className={`${isActive("/index-01") ? 'active' : ''}`} ><Link to="/index-01">Main Home</Link></li>
                            <li className={`${isActive("/index-02") ? 'active' : ''}`} ><Link to="/index-02">Construction 2</Link></li>
                            <li className={`${isActive("/index-03") ? 'active' : ''}`} ><Link to="/index-03">Construction 3</Link></li>
                            <li className={`${isActive("/index-04") ? 'active' : ''}`} ><Link to="/index-04">Roofing</Link></li>
                            <li className={`${isActive("/index-05") ? 'active' : ''}`} ><Link to="/index-05">Industry</Link></li>
                            <li className={`${isActive("/index-06") ? 'active' : ''}`} ><Link to="/index-06">Plumber</Link></li>
                            <li className={`${isActive("/index-07") ? 'active' : ''}`} ><Link to="/index-07">Logistics</Link></li>
                            <li className={`${isActive("/index-08") ? 'active' : ''}`} ><Link to="/index-08">Carpenter</Link></li>
                            <li className={`${isActive("/index-09") ? 'active' : ''}`} ><Link to="/index-09">Architecture</Link></li>
                            <li className={`${isActive("/index-10") ? 'active' : ''}`} ><Link to="/index-10">Energy</Link></li>
                            <li className={`${isActive("/index-11") ? 'active' : ''}`} ><Link to="/index-11">Construction 4</Link></li>
                            <li className={`${isActive("/index-12") ? 'active' : ''}`} ><Link to="/index-12">Construction 5</Link></li>
                            <li className={`${isActive("/index-13") ? 'active' : ''}`} ><Link to="/index-13">Construction 6</Link></li>
                            <li className={`${isActive("/index-14") ? 'active' : ''}`} ><Link to="/index-14">Construction 7</Link></li>
                            <li className={`${isActive("/index-15") ? 'active' : ''}`} ><Link to="/index-15">Industry 2</Link></li>
                        </ul>
                    </li>
                    <li className={` menu-item-has-children ${secondLvlMenu === 'onepages' ? 'current-menu-item' : ''}`}>
                        <Link to="#">Onepages</Link>
                        <ul className="sub-menu">
                            <li className={`${isActive("/onepage-01") ? 'active' : ''}`} ><Link to="/onepage-01">Onepage Main</Link></li>
                            <li className={`${isActive("/onepage-02") ? 'active' : ''}`} ><Link to="/onepage-02">Onepage Construction 2</Link></li>
                            <li className={`${isActive("/onepage-03") ? 'active' : ''}`} ><Link to="/onepage-03">Onepage Construction 3</Link></li>
                            <li className={`${isActive("/onepage-04") ? 'active' : ''}`} ><Link to="/onepage-04">Onepage Roofing</Link></li>
                            <li className={`${isActive("/onepage-05") ? 'active' : ''}`} ><Link to="/onepage-05">Onepage Industry</Link></li>
                            <li className={`${isActive("/onepage-06") ? 'active' : ''}`} ><Link to="/onepage-06">Onepage Plumber</Link></li>
                            <li className={`${isActive("/onepage-07") ? 'active' : ''}`} ><Link to="/onepage-07">Onepage Logistics</Link></li>
                            <li className={`${isActive("/onepage-08") ? 'active' : ''}`} ><Link to="/onepage-08">Onepage Carpenter</Link></li>
                            <li className={`${isActive("/onepage-09") ? 'active' : ''}`} ><Link to="/onepage-09">Onepage Architecture</Link></li>
                            <li className={`${isActive("/onepage-10") ? 'active' : ''}`} ><Link to="/onepage-10">Onepage Energy</Link></li>
                            <li className={`${isActive("/onepage-11") ? 'active' : ''}`} ><Link to="/onepage-11">Construction 4</Link></li>
                            <li className={`${isActive("/onepage-12") ? 'active' : ''}`} ><Link to="/onepage-12">Construction 5</Link></li>
                            <li className={`${isActive("/onepage-13") ? 'active' : ''}`} ><Link to="/onepage-13">Construction 6</Link></li>
                            <li className={`${isActive("/onepage-14") ? 'active' : ''}`} ><Link to="/onepage-14">Construction 7</Link></li>
                            <li className={`${isActive("/onepage-15") ? 'active' : ''}`} ><Link to="/onepage-15">Industry 2</Link></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className={`${firstLvlMenu === 'about' ? 'current-menu-item' : ''}`}>
                <Link to="/about">About</Link>
            </li>
            <li className={`menu-item-has-children ${firstLvlMenu === 'services' ? 'current-menu-item' : ''}`}>
                <Link to="#">Services</Link>
                <ul className="sub-menu">
                    <li className={`${isActive("/services-style-01") ? 'active' : ''}`} ><Link to="/services-style-01">Services Style 1</Link></li>
                    <li className={`${isActive("/services-style-02") ? 'active' : ''}`} ><Link to="/services-style-02">Services Style 2</Link></li>
                    <li className={`last-item menu-item-has-children ${secondLvlMenu === 'service-single' ? 'current-menu-item' : ''}`}>
                        <Link to="#">Service Single</Link>
                        <ul className="sub-menu">
                            <li className={`${isActive("/general-construction") ? 'active' : ''}`} ><Link to="/general-construction">General Construction</Link></li>
                            <li className={`${isActive("/property-maintenance") ? 'active' : ''}`} ><Link to="/property-maintenance">Property Maintenance</Link></li>
                            <li className={`${isActive("/preconstruction") ? 'active' : ''}`} ><Link to="/preconstruction">Preconstruction</Link></li>
                            <li className={`${isActive("/virtual-design-build") ? 'active' : ''}`} ><Link to="/virtual-design-build">Virtual Design & Build</Link></li>
                            <li className={`${isActive("/project-managment") ? 'active' : ''}`} ><Link to="/project-managment">Project Managment</Link></li>
                            <li className={`${isActive("/design-build") ? 'active' : ''}`} ><Link to="/design-build">Design Build</Link></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className={`menu-item-has-children ${firstLvlMenu === 'pages' ? 'current-menu-item' : ''}`}>
                <Link to="#">Pages</Link>
                <ul className="sub-menu">
                    <li className={`last-item menu-item-has-children ${secondLvlMenu === 'team' ? 'current-menu-item' : ''}`}>
                        <Link to="#">Team</Link>
                        <ul className="sub-menu">
                            <li className={`${isActive("/team-style-01") ? 'active' : ''}`} ><Link to="/team-style-01">Team Style 1</Link></li>
                            <li className={`${isActive("/team-style-02") ? 'active' : ''}`} ><Link to="/team-style-02">Team Style 2</Link></li>
                            <li className={`${isActive("/team-style-03") ? 'active' : ''}`} ><Link to="/team-style-03">Team Style 3</Link></li>
                            <li className={`${isActive("/team-style-04") ? 'active' : ''}`} ><Link to="/team-style-04">Team Style 4</Link></li>
                            <li className={`${isActive("/team-style-05") ? 'active' : ''}`} ><Link to="/team-style-05">Team Style 5</Link></li>
                            <li className={`${isActive("/team-single") ? 'active' : ''}`} ><Link to="/team-single">Team Single</Link></li>
                        </ul>
                    </li>
                    <li className={`last-item menu-item-has-children ${secondLvlMenu === 'projects' ? 'current-menu-item' : ''}`}>
                        <Link to="#">Projects</Link>
                        <ul className="sub-menu">
                            <li className={`${isActive("/projects-style-01") ? 'active' : ''}`} ><Link to="/projects-style-01">Projects Style 1</Link></li>
                            <li className={`${isActive("/projects-style-02") ? 'active' : ''}`} ><Link to="/projects-style-02">Projects Style 2</Link></li>
                            <li className={`${isActive("/projects-style-03") ? 'active' : ''}`} ><Link to="/projects-style-03">Projects Style 3</Link></li>
                            <li className={`${isActive("/projects-style-04") ? 'active' : ''}`} ><Link to="/projects-style-04">Projects Style 4</Link></li>
                            <li className={`${isActive("/projects-style-05") ? 'active' : ''}`} ><Link to="/projects-style-05">Projects Style 5</Link></li>
                            <li className={`${isActive("/projects-filter-style-01") ? 'active' : ''}`} ><Link to="/projects-filter-style-01">Projects Filter Style 1</Link></li>
                            <li className={`${isActive("/projects-filter-style-02") ? 'active' : ''}`} ><Link to="/projects-filter-style-02">Projects Filter Style 2</Link></li>
                            <li className={`${isActive("/projects-single") ? 'active' : ''}`} ><Link to="/projects-single">Projects Single</Link></li>
                        </ul>
                    </li>
                    <li className={`${isActive("/pricing-plan") ? 'active' : ''}`} ><Link to="/pricing-plan">Pricing Plan</Link></li>
                    <li className={`${isActive("/faq") ? 'active' : ''}`} ><Link to="/faq">Faq</Link></li>
                    <li className={`${isActive("/gallery") ? 'active' : ''}`} ><Link to="/gallery">Gallery</Link></li>
                    <li className={`last-item menu-item-has-children ${secondLvlMenu === 'shop' ? 'current-menu-item' : ''}`}>
                        <Link to="#">Shop</Link>
                        <ul className="sub-menu">
                            <li className={`${isActive("/shop") ? 'active' : ''}`} ><Link to="/shop">Shop</Link></li>
                            <li className={`${isActive("/shop-single") ? 'active' : ''}`} ><Link to="/shop-single">Shop Single</Link></li>
                            <li className={`${isActive("/cart") ? 'active' : ''}`} ><Link to="/cart">Cart</Link></li>
                            <li className={`${isActive("/checkout") ? 'active' : ''}`} ><Link to="/checkout">Checkout</Link></li>
                            <li className={`${isActive("/my-account") ? 'active' : ''}`} ><Link to="/my-account">My Account</Link></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className={`${isActive("/blog") ? 'active' : ''}`} >
                <Link to="/blog">Blog</Link>
            </li>
            <li className={`${isActive("/contact") ? 'active' : ''}`} >
                <Link to="/contact">Contact</Link>
            </li>
        </>
    );
};

export default MenuItems;