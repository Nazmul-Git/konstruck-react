import React from 'react';
import { Link } from 'react-router-dom';

const BannerSection = () => {
    return (
        <div className="rs-banner banner-style2">
            <div className="container">
                <div className="content-wrap">
                    <h1 className="title wow fadeInDown">
                        We Are Best Builders<br />
                        In The World
                    </h1>
                    <div className="description wow fadeInLeft">
                        <p>
                            We are one of the leading end-to-end engineering services and solutions company<br />
                            offering business value across the product lifecycle.
                        </p>
                    </div>
                    <div className="banner-btn mt-40 wow fadeInUp">
                        <Link className="readon blue-btn orange-more1" to="/contact">
                            Discover More<i className="fa fi fi-rr-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerSection;