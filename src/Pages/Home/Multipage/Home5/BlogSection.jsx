import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import images
import blog1 from '../../../../assets/images/blog/style1/1.jpg';
import blog2 from '../../../../assets/images/blog/style1/2.jpg';
import blog3 from '../../../../assets/images/blog/style1/3.jpg';
import blog4 from '../../../../assets/images/blog/style1/4.jpg';
import blog5 from '../../../../assets/images/blog/style1/5.jpg';
import blog6 from '../../../../assets/images/blog/style1/6.jpg';
import BlogCard from '../../../../Components/Blog/BlogCard';

const blogData = [
    {
        image: blog1,
        author: 'Admin',
        category: 'Commercial',
        title: 'We really appreciate content about the construction',
        link: '/blog-single',
        btnName: 'View More'
    },
    {
        image: blog2,
        author: 'Admin',
        category: 'Commercial',
        title: 'Best practices construction law on construction',
        link: '/blog-single',
        btnName: 'View More'
    },
    {
        image: blog3,
        author: 'Admin',
        category: 'Commercial',
        title: 'Although many people may overlook the need',
        link: '/blog-single',
        btnName: 'View More'
    },
    {
        image: blog4,
        author: 'Admin',
        category: 'Commercial',
        title: 'Construction executive holds a very special place',
        link: '/blog-single',
        btnName: 'View More'
    },
    {
        image: blog5,
        author: 'Admin',
        category: 'Commercial',
        title: 'This is another massive sites with a ton of information',
        link: '/blog-single',
        btnName: 'View More'
    },
    {
        image: blog6,
        author: 'Admin',
        category: 'Commercial',
        title: 'The construction business the owner site is jam-packed',
        link: '/blog-single',
        btnName: 'View More'
    }
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
        arrows: false,  // Hide navigation arrows
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div id="rs-blog" className="rs-blog blog-main-home blog-modify4 black-bg pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="sec-title text-center mb-55 md-mb-40">
                    <span className="sub-text sub-text4">News</span>
                    <h2 className="title title3">Latest updates and<span> news.</span></h2>
                </div>
                <Slider {...settings}>
                    {blogData.map((blog, index) => (
                        <BlogCard
                            key={index}
                            blog={blog}
                            titleLast={true}
                            blogBtn={true}
                            btnClass='blog-btn4'
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default BlogSection;
