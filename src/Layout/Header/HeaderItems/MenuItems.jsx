import React from 'react';
import { Link } from 'react-router-dom';

const MenuItems = () => {
    return (
        <>
            <li className="menu-item-has-children current-menu-item">
                <Link to="#">Home</Link>
                <ul className="sub-menu">
                    <li className="menu-item-has-children current-menu-item">
                        <Link to="#">Multipages</Link>
                        <ul className="sub-menu">
                            <li className="active"><Link to="/index-01">Main Home</Link></li>
                            <li><Link to="/index-02">Construction 2</Link></li>
                            <li><Link to="/index-03">Construction 3</Link></li>
                            <li><Link to="/index-04">Roofing</Link></li>
                            <li><Link to="/index-05">Industry</Link></li>
                            <li><Link to="/index-06">Plumber</Link></li>
                            <li><Link to="/index-07">Logistics</Link></li>
                            <li><Link to="/index-08">Carpenter</Link></li>
                            <li><Link to="/index-09">Architecture</Link></li>
                            <li><Link to="/index-10">Energy</Link></li>
                            <li><Link to="/index-11">Construction 4</Link></li>
                            <li><Link to="/index-12">Construction 5</Link></li>
                            <li><Link to="/index-13">Construction 6</Link></li>
                            <li><Link to="/index-14">Construction 7</Link></li>
                            <li><Link to="/index-15">Industry 2</Link></li>
                        </ul>
                    </li>
                    <li className="menu-item-has-children">
                        <Link to="#">Onepages</Link>
                        <ul className="sub-menu">
                            <li><Link to="/onepage1">Onepage Main</Link></li>
                            <li><Link to="/onepage2">Onepage Construction 2</Link></li>
                            <li><Link to="/onepage3">Onepage Construction 3</Link></li>
                            <li><Link to="/onepage4">Onepage Roofing</Link></li>
                            <li><Link to="/onepage5">Onepage Industry</Link></li>
                            <li><Link to="/onepage6">Onepage Plumber</Link></li>
                            <li><Link to="/onepage7">Onepage Logistics</Link></li>
                            <li><Link to="/onepage8">Onepage Carpenter</Link></li>
                            <li><Link to="/onepage9">Onepage Architecture</Link></li>
                            <li><Link to="/onepage10">Onepage Energy</Link></li>
                            <li><Link to="/onepage11">Construction 4</Link></li>
                            <li><Link to="/onepage12">Construction 5</Link></li>
                            <li><Link to="/onepage13">Construction 6</Link></li>
                            <li><Link to="/onepage14">Construction 7</Link></li>
                            <li><Link to="/onepage15">Industry 2</Link></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li className="menu-item-has-children">
                <Link to="/services">Services</Link>
                <ul className="sub-menu">
                    <li><Link to="/services-style1">Services Style 1</Link></li>
                    <li><Link to="/services-style2">Services Style 2</Link></li>
                    <li className="last-item menu-item-has-children">
                        <Link to="#">Service Single</Link>
                        <ul className="sub-menu">
                            <li><Link to="/general-construction">General Construction</Link></li>
                            <li><Link to="/property-maintenance">Property Maintenance</Link></li>
                            <li><Link to="/preconstruction">Preconstruction</Link></li>
                            <li><Link to="/virtual-design-build">Virtual Design & Build</Link></li>
                            <li><Link to="/project-managment">Project Managment</Link></li>
                            <li><Link to="/design-build">Design Build</Link></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li className="menu-item-has-children">
                <Link to="#">Pages</Link>
                <ul className="sub-menu">
                    <li className="last-item menu-item-has-children">
                        <Link to="#">Team</Link>
                        <ul className="sub-menu">
                            <li><Link to="/team-style1">Team Style 1</Link></li>
                            <li><Link to="/team-style2">Team Style 2</Link></li>
                            <li><Link to="/team-style3">Team Style 3</Link></li>
                            <li><Link to="/team-style4">Team Style 4</Link></li>
                            <li><Link to="/team-style5">Team Style 5</Link></li>
                            <li><Link to="/team-single">Team Single</Link></li>
                        </ul>
                    </li>
                    <li className="last-item menu-item-has-children">
                        <Link to="#">Projects</Link>
                        <ul className="sub-menu">
                            <li><Link to="/projects-style1">Projects Style 1</Link></li>
                            <li><Link to="/projects-style2">Projects Style 2</Link></li>
                            <li><Link to="/projects-style3">Projects Style 3</Link></li>
                            <li><Link to="/projects-style4">Projects Style 4</Link></li>
                            <li><Link to="/projects-style5">Projects Style 5</Link></li>
                            <li><Link to="/projects-filter-style1">Projects Filter Style 1</Link></li>
                            <li><Link to="/projects-filter-style2">Projects Filter Style 2</Link></li>
                            <li><Link to="/projects-single">Projects Single</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/pricing-plan">Pricing Plan</Link></li>
                    <li><Link to="/faq">Faq</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li className="last-item menu-item-has-children">
                        <Link to="#">Shop</Link>
                        <ul className="sub-menu">
                            <li><Link to="/shop">Shop</Link></li>
                            <li><Link to="/shop-single">Shop Single</Link></li>
                            <li><Link to="/cart">Cart</Link></li>
                            <li><Link to="/checkout">Checkout</Link></li>
                            <li><Link to="/my-account">My Account</Link></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <Link to="/blog">Blog</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </>
    );
};

export default MenuItems;