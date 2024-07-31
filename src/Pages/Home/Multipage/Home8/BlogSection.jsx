import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import blog1 from '../../../../assets/images/blog/style1/1.jpg';
import blog2 from '../../../../assets/images/blog/style1/2.jpg';
import blog3 from '../../../../assets/images/blog/style1/3.jpg';
import blog4 from '../../../../assets/images/blog/style1/4.jpg';
import blog5 from '../../../../assets/images/blog/style1/5.jpg';
import blog6 from '../../../../assets/images/blog/style1/6.jpg';
import BlogCard from '../../../../Components/Blog/BlogCard';

const blogItems = [
    {
        id: 1,
        image: blog1,
        date: '26 April 2022',
        author: 'Admin',
        title: 'We really appreciate content about the construction',
        link: '/blog-single',
        btnName : 'Read More'
    },
    {
        id: 2,
        image: blog2,
        date: '26 April 2022',
        author: 'Admin',
        title: 'Best practices construction law on construction',
        link: '/blog-single',
        btnName : 'Read More'
    },
    {
        id: 3,
        image: blog3,
        date: '26 April 2022',
        author: 'Admin',
        title: 'Although many people may overlook the need',
        link: '/blog-single',
        btnName : 'Read More'
    },
    {
        id: 4,
        image: blog4,
        date: '26 April 2022',
        author: 'Admin',
        title: 'Construction executive holds a very special place',
        link: '/blog-single',
        btnName : 'Read More'
    },
    {
        id: 5,
        image: blog5,
        date: '26 April 2022',
        author: 'Admin',
        title: 'This is another massive sites with a ton of information',
        link: '/blog-single',
        btnName : 'Read More'
    },
    {
        id: 6,
        image: blog6,
        date: '26 April 2022',
        author: 'Admin',
        title: 'The construction business the owner site is jam-packed',
        link: '/blog-single',
        btnName : 'Read More'
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
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

const BlogSection = () => (
    <div id="rs-blog" className="rs-blog blog-main-home blog-modify7 gray-bg4 pt-120 pb-120 md-pt-80 md-pb-80">
        <div className="container">
            <div className="sec-title text-center mb-45">
                <span className="sub-text sub-text6">News & Blog</span>
                <h2 className="title">
                    Our latest news post<br />
                    and articles
                </h2>
            </div>
            <Slider {...settings}>
                {blogItems.map((blog,index) => (
                    <BlogCard
                        key={index}
                        blog={blog}
                        titleLast={true}
                        blogBtn={true}
                        btnClass={'blog-btn6'}
                    />
                ))}
            </Slider>
        </div>
    </div>
);

export default BlogSection;
