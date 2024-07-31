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
import BlogCard from '../../../../Components/Blog/BlogCard';

const blogPosts = [
    { image: img1, title: 'We really appreciate content about the construction', date: '26 April 2022', author: 'Admin', btnName: 'Read More', link: '/blog-single' },
    { image: img2, title: 'Best practices construction law on construction', date: '26 April 2022', author: 'Admin', btnName: 'Read More', link: '/blog-single' },
    { image: img3, title: 'Although many people may overlook the need', date: '26 April 2022', author: 'Admin', btnName: 'Read More', link: '/blog-single' },
    { image: img4, title: 'Construction executive holds a very special place', date: '26 April 2022', author: 'Admin', btnName: 'Read More', link: '/blog-single' },
    { image: img5, title: 'This is another massive sites with a ton of information', date: '26 April 2022', author: 'Admin', btnName: 'Read More', link: '/blog-single' },
    { image: img6, title: 'The construction business the owner site is jam-packed', date: '26 April 2022', author: 'Admin', btnName: 'Read More', link: '/blog-single' }
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
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div id="rs-blog" className="rs-blog blog-main-home blog-modify8 pb-100 md-pt-20 md-pb-70">
            <div className="container">
                <div className="sec-title text-center mb-45">
                    <span className="sub-text sub-text7">News & Blog</span>
                    <h2 className="title">Latest News Update</h2>
                </div>
                <Slider {...settings}>
                    {blogPosts.map((blog, index) => (
                        <BlogCard
                            key={index}
                            blog={blog}
                            index={index}
                            titleFirst={true}
                            blogBtn={true}
                            btnClass={'blog-btn7'}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default BlogSection;
