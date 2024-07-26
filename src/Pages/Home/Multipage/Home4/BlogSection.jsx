import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import images
import img1 from '../../../../assets/images/blog/style1/1.jpg';
import img2 from '../../../../assets/images/blog/style1/2.jpg';
import img3 from '../../../../assets/images/blog/style1/3.jpg';
import img4 from '../../../../assets/images/blog/style1/4.jpg';
import img5 from '../../../../assets/images/blog/style1/5.jpg';
import img6 from '../../../../assets/images/blog/style1/6.jpg';
import shape2 from '../../../../assets/images/shape-2.png';
import BlogCard from '../../../../Components/Blog/BlogCard';

const blogData = [
    {
        image: img1,
        title: 'We really appreciate content about the construction',
        date: '26 April 2022',
        link: 'blog-single',
        author: 'Admin'
    },
    {
        image: img2,
        title: 'Best practices construction law on construction',
        date: '26 April 2022',
        link: 'blog-single',
        author: 'Admin'
    },
    {
        image: img3,
        title: 'Although many people may overlook the need',
        date: '26 April 2022',
        link: 'blog-single',
        author: 'Admin'
    },
    {
        image: img4,
        title: 'Construction executive holds a very special place',
        date: '26 April 2022',
        link: 'blog-single',
        author: 'Admin'
    },
    {
        image: img5,
        title: 'This is another massive sites with a ton of information',
        date: '26 April 2022',
        link: 'blog-single',
        author: 'Admin'
    },
    {
        image: img6,
        title: 'The construction business the owner site is jam-packed',
        date: '26 April 2022',
        link: 'blog-single',
        author: 'Admin'
    },
];

const settings = {
    dots: true,
    arrows: false,
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
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

const BlogSection = () => {
    return (
        <div id="rs-blog" className="rs-blog blog-main-home blog-modify3 pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="sec-title text-center mb-55 md-mb-40">
                    <span className="sub-text sub-text3">
                        <img src={shape2} alt="Images" />
                        News & Blog
                    </span>

                    <h2 className="title">
                        Our latest news post<br />
                        and articles
                    </h2>
                </div>
                <Slider {...settings} className="rs-carousel">
                    {blogData.map((blog, index) => (
                        <BlogCard
                            key={index}
                            index={index}
                            blog={blog}
                            titleFirst={true}
                            blogBtn={true}
                            btnClass='blog-btn3'
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default BlogSection;
