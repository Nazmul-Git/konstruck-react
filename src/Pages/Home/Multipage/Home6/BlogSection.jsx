import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import blogImage1 from '../../../../assets/images/blog/style1/1.jpg';
import blogImage2 from '../../../../assets/images/blog/style1/2.jpg';
import blogImage3 from '../../../../assets/images/blog/style1/3.jpg';
import blogImage4 from '../../../../assets/images/blog/style1/4.jpg';
import blogImage5 from '../../../../assets/images/blog/style1/5.jpg';
import blogImage6 from '../../../../assets/images/blog/style1/6.jpg';
import BlogCard from '../../../../Components/Blog/BlogCard';

const blogPosts = [
    {
        image: blogImage1,
        date: "26 April 2022",
        admin: "Admin",
        title: "We really appreciate content about the construction",
        link: "/blog-single",
        btnName: 'Read More'
    },
    {
        image: blogImage2,
        date: "26 April 2022",
        admin: "Admin",
        title: "Best practices construction law on construction",
        link: "/blog-single",
        btnName: 'Read More'
    },
    {
        image: blogImage3,
        date: "26 April 2022",
        admin: "Admin",
        title: "Although many people may overlook the need",
        link: "/blog-single",
        btnName: 'Read More'
    },
    {
        image: blogImage4,
        date: "26 April 2022",
        admin: "Admin",
        title: "Construction executive holds a very special place",
        link: "/blog-single",
        btnName: 'Read More'
    },
    {
        image: blogImage5,
        date: "26 April 2022",
        admin: "Admin",
        title: "This is another massive sites with a ton of information",
        link: "/blog-single",
        btnName: 'Read More'
    },
    {
        image: blogImage6,
        date: "26 April 2022",
        admin: "Admin",
        title: "The construction business the owner site is jam-packed",
        link: "/blog-single",
        btnName: 'Read More'
    },
];

const BlogSection = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div id="rs-blog" className="rs-blog blog-main-home blog-modify5 pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="sec-title text-center mb-45">
                    <span className="sub-text sub-text5">News & Blog</span>
                    <h2 className="title">
                        Our latest news post
                        <br />
                        and articles
                    </h2>
                </div>
                <Slider {...settings}>
                    {blogPosts.map((blog, index) => (
                        <BlogCard
                            key={index}
                            blog={blog}
                            titleLast={true}
                            blogBtn={true}
                            btnClass={'blog-btn5'}
                            
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default BlogSection;
