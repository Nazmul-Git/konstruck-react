// BlogSection.js
import React from 'react';
import Slider from 'react-slick';
import BlogCard from '../../../../Components/Blog/BlogCard';
import shape3 from '../../../../assets/images/shape-3.png';

// Importing images
import img1 from '../../../../assets/images/blog/style1/1.jpg';
import img2 from '../../../../assets/images/blog/style1/2.jpg';
import img3 from '../../../../assets/images/blog/style1/3.jpg';
import img4 from '../../../../assets/images/blog/style1/4.jpg';
import img5 from '../../../../assets/images/blog/style1/5.jpg';
import img6 from '../../../../assets/images/blog/style1/6.jpg';

// Slick Slider settings
const sliderSettings = {
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
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

const BlogSection = () => {
    const blogs = [
        { image: img1, date: '26 April 2022', author: 'Admin', title: 'We really appreciate content about the construction', link: '/blog-single', btnName: 'Read More' },
        { image: img2, date: '26 April 2022', author: 'Admin', title: 'Best practices construction law on construction', link: '/blog-single', btnName: 'Read More' },
        { image: img3, date: '26 April 2022', author: 'Admin', title: 'Although many people may overlook the need', link: '/blog-single', btnName: 'Read More' },
        { image: img4, date: '26 April 2022', author: 'Admin', title: 'Construction executive holds a very special place', link: '/blog-single', btnName: 'Read More' },
        { image: img5, date: '26 April 2022', author: 'Admin', title: 'This is another massive sites with a ton of information', link: '/blog-single', btnName: 'Read More' },
        { image: img6, date: '26 April 2022', author: 'Admin', title: 'The construction business the owner site is jam-packed', link: '/blog-single', btnName: 'Read More' },
    ];

    return (
        <div id="rs-blog" className="rs-blog blog-main-home blog-modify9 pt-120 pb-110 md-pt-80 md-pb-70">
            <div className="container">
                <div className="sec-title text-center mb-50 md-mb-35">
                    <span className="sub-text sub-text8">
                        <img src={shape3} alt="Images" />
                        News & Blog
                    </span>
                    <h2 className="title">
                        Our latest news post and<br />
                        articles
                    </h2>
                </div>
                <Slider {...sliderSettings}>
                    {blogs.map((blog, index) => (
                        <BlogCard
                            key={index}
                            index={index}
                            blog={blog}
                            titleLast={true}
                            blogBtn={true}
                            btnClass={'blog-bnt2'}
                            btnIcon={true}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default BlogSection;
