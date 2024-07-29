import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import BlogCard from '../../../../Components/Blog/BlogCard';

// Import images
import blog1 from '../../../../assets/images/blog/style1/1.jpg';
import blog2 from '../../../../assets/images/blog/style1/2.jpg';
import blog3 from '../../../../assets/images/blog/style1/3.jpg';
import blog4 from '../../../../assets/images/blog/style1/4.jpg';
import blog5 from '../../../../assets/images/blog/style1/5.jpg';
import blog6 from '../../../../assets/images/blog/style1/6.jpg';

// Sample data
const blogData = [
    {
        id: 1,
        image: blog1,
        date: '26 April 2022',
        author: 'Admin',
        title: 'We really appreciate content about the construction',
        desc: 'The brand has responded by partnering with skincare experts on social and web...',
        link: '/blog-single',
    },
    {
        id: 2,
        image: blog2,
        date: '26 April 2022',
        author: 'Admin',
        title: 'Best practices construction law on construction',
        desc: 'The brand has responded by partnering with skincare experts on social and web...',
        link: '/blog-single',
    },
    {
        id: 3,
        image: blog3,
        date: '26 April 2022',
        author: 'Admin',
        title: 'Although many people may overlook the need',
        desc: 'The brand has responded by partnering with skincare experts on social and web...',
        link: '/blog-single',
    },
    {
        id: 4,
        image: blog4,
        date: '26 April 2022',
        author: 'Admin',
        title: 'Construction executive holds a very special place',
        desc: 'The brand has responded by partnering with skincare experts on social and web...',
        link: '/blog-single',
    },
    {
        id: 5,
        image: blog5,
        date: '26 April 2022',
        author: 'Admin',
        title: 'This is another massive sites with a ton of information',
        desc: 'The brand has responded by partnering with skincare experts on social and web...',
        link: '/blog-single',
    },
    {
        id: 6,
        image: blog6,
        date: '26 April 2022',
        author: 'Admin',
        title: 'The construction business the owner site is jam-packed',
        desc: 'The brand has responded by partnering with skincare experts on social and web...',
        link: '/blog-single',
    },
];

const BlogSection = () => {
    // Slick Slider settings
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div id="rs-blog" className="rs-blog blog-main-home blog-modify6 bg5 pt-120 pb-115 md-pt-75 md-pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="sec-title3 mb-66 md-mb-46">
                            <span className="sub-title">Latest News</span>
                            <h2 className="title pb-25">Read latest updates</h2>
                            <div className="heading-border-line left-style"></div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="btn-part text-right md-left mt-40 md-mt-0 md-mb-40">
                            <Link className="readon paste-btn updates" to="/contact">
                                View Updates
                            </Link>
                        </div>
                    </div>
                </div>
                <Slider {...settings}>
                    {blogData.map((blog, index) => (
                        <BlogCard
                            key={index}
                            index={index}
                            blog={blog}
                            titleLast={true}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default BlogSection;
