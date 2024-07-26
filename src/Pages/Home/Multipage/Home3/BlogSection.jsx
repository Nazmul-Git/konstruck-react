import React from 'react';
import Slider from 'react-slick';
import blog1 from '../../../../assets/images/blog/style1/1.jpg';
import blog2 from '../../../../assets/images/blog/style1/2.jpg';
import blog3 from '../../../../assets/images/blog/style1/3.jpg';
import blog4 from '../../../../assets/images/blog/style1/4.jpg';
import blog5 from '../../../../assets/images/blog/style1/5.jpg';
import blog6 from '../../../../assets/images/blog/style1/6.jpg';
import BlogCard from '../../../../Components/Blog/BlogCard';
import { Link } from 'react-router-dom';

const BlogSection = () => {
    const blogPosts = [
        {
            image: blog1,
            date: '26 April 2022',
            admin: 'Admin',
            title: 'We really appreciate content about the construction',
            desc: 'The brand has responded by partnering with skincare experts on social and web...',
        },
        {
            image: blog2,
            date: '26 April 2022',
            admin: 'Admin',
            title: 'Best practices construction law on construction',
            desc: 'The brand has responded by partnering with skincare experts on social and web...',
        },
        {
            image: blog3,
            date: '26 April 2022',
            admin: 'Admin',
            title: 'Although many people may overlook the need',
            desc: 'The brand has responded by partnering with skincare experts on social and web...',
        },
        {
            image: blog4,
            date: '26 April 2022',
            admin: 'Admin',
            title: 'Construction executive holds a very special place',
            desc: 'The brand has responded by partnering with skincare experts on social and web...',
        },
        {
            image: blog5,
            date: '26 April 2022',
            admin: 'Admin',
            title: 'This is another massive sites with a ton of information',
            desc: 'The brand has responded by partnering with skincare experts on social and web...',
        },
        {
            image: blog6,
            date: '26 April 2022',
            admin: 'Admin',
            title: 'The construction business the owner site is jam-packed',
            desc: 'The brand has responded by partnering with skincare experts on social and web...',
        },
    ];
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div id="rs-blog" className="rs-blog blog-main-home blog-modify2 bg5 pt-120 pb-115 md-pt-0 md-pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="sec-title2 mb-55 md-mb-35">
                            <span className="sub-title">Latest News</span>
                            <h2 className="title pb-25">Read latest updates</h2>
                            <div className="heading-border-line left-style"></div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="btn-part text-right md-left md-mb-50">
                            <Link className="readon more discover" to="/blog-single">View Updates</Link>
                        </div>
                    </div>
                </div>
                <Slider {...settings}>
                    {blogPosts.map((blog, index) => (
                        <BlogCard
                            key={index}
                            index={index}
                            blog={blog}
                            blogBtn={false}
                            titleLast={true}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default BlogSection;