import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import shape1 from '../../../../assets/images/shape-1.png';
import blogImg1 from '../../../../assets/images/blog/style1/1.jpg';
import blogImg2 from '../../../../assets/images/blog/style1/2.jpg';
import blogImg3 from '../../../../assets/images/blog/style1/3.jpg';
import blogImg4 from '../../../../assets/images/blog/style1/4.jpg';
import blogImg5 from '../../../../assets/images/blog/style1/5.jpg';
import blogImg6 from '../../../../assets/images/blog/style1/6.jpg';
import BlogCard from '../../../../Components/Blog/BlogCard';

const blogPosts = [
    {
        image: blogImg1,
        date: '26 April 2022',
        author: 'Admin',
        title: 'We really appreciate content about the construction',
        link: '/blog-single',
    },
    {
        image: blogImg2,
        date: '26 April 2022',
        author: 'Admin',
        title: 'Best practices construction law on construction',
        link: '/blog-single',
    },
    {
        image: blogImg3,
        date: '26 April 2022',
        author: 'Admin',
        title: 'Although many people may overlook the need',
        link: '/blog-single',
    },
    {
        image: blogImg4,
        date: '26 April 2022',
        author: 'Admin',
        title: 'Construction executive holds a very special place',
        link: '/blog-single',
    },
    {
        image: blogImg5,
        date: '26 April 2022',
        author: 'Admin',
        title: 'This is another massive site with a ton of information',
        link: '/blog-single',
    },
    {
        image: blogImg6,
        date: '26 April 2022',
        author: 'Admin',
        title: 'The construction business the owner site is jam-packed',
        link: '/blog-single',
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

const BlogSection = () => {
    return (
        <div id="rs-blog" className="rs-blog blog-main-home pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="sec-title text-center mb-45 md-mb-25">
                    <span className="sub-text">
                        <img src={shape1} alt="Images" />
                        News & Blog
                    </span>
                    <h2 className="title">
                        Our latest news post<br />
                        and articles?
                    </h2>
                </div>
                <Slider {...settings}>
                    {blogPosts.map((blog, index) => (
                        <BlogCard
                            key={index}
                            index={index}
                            blog={blog}
                            blogBtn={true}
                            titleLast={true}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default BlogSection;
