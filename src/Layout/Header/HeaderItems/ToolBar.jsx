import React from 'react';
import { Link } from 'react-router-dom';

const ToolBar = ({ topBarModifyClass, phnNumber, mail, address, textOnly, phnNumberFirst, containerFluid }) => {
    return (
        <>
            <div className={`toolbar-area topbar-style1 ${topBarModifyClass ? topBarModifyClass : ''} hidden-md`}>
                <div className={`container${containerFluid ? containerFluid : ''}`}>
                    <div className="row rs-vertical-middle">
                        <div className="col-lg-7">
                            <div className="toolbar-contact">
                                <ul className="rs-contact-info">
                                    {
                                        phnNumberFirst &&
                                        <li>
                                            <i className="ri-phone-line"></i>
                                            <Link to="tel:(+1)7854-333-222">(+1) 7854-333-222</Link>
                                        </li>
                                    }
                                    {
                                        mail &&
                                        <li>
                                            <i className="ri-mail-send-line"></i>
                                            <Link to="mailto:info@konstruk.com">info@konstruk.com</Link>
                                        </li>
                                    }
                                    {
                                        phnNumber &&
                                        <li>
                                            <i className="ri-phone-line"></i>
                                            <Link to="tel:(+1)7854-333-222">(+1) 7854-333-222</Link>
                                        </li>
                                    }
                                    {
                                        address &&
                                        <li>
                                            <i className="ri-map-pin-line"></i>
                                            31 New Street, NY, USA
                                        </li>
                                    }
                                    {
                                        textOnly &&
                                        <li> Welcome To Konstruk Company  </li>
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="toolbar-sl-share">
                                <ul className="clearfix">
                                    <li className="opening">
                                        <em>
                                            <i className="ri-time-line"></i> Hours: Mon-Fri: 9.00 am - 7.00 pm
                                        </em>
                                    </li>
                                    <li><Link to="#"><i className="ri-facebook-fill"></i></Link></li>
                                    <li><Link to="#"><i className="ri-twitter-fill"></i></Link></li>
                                    <li><Link to="#"><i className="ri-pinterest-fill"></i></Link></li>
                                    <li><Link to="#"><i className="ri-instagram-fill"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ToolBar;
