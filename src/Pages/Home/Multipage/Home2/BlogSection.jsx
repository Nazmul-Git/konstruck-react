import React from 'react';
import Slider from 'react-slick';
import blog1 from '../../../../assets/images/blog/style1/1.jpg';
import blog2 from '../../../../assets/images/blog/style1/2.jpg';
import blog3 from '../../../../assets/images/blog/style1/3.jpg';
import blog4 from '../../../../assets/images/blog/style1/4.jpg';
import blog5 from '../../../../assets/images/blog/style1/5.jpg';
import blog6 from '../../../../assets/images/blog/style1/6.jpg';
import BlogCard from '../../../../Components/Blog/BlogCard';

const BlogSection = () => {
    const blogItems = [
        {
            image: blog1,
            date: '26 April 2022',
            author: 'Admin',
            title: 'We really appreciate content about the construction',
            desc: 'The brand has responded by partnering with skincare experts on...',
            link: '/blog-single'
        },
        {
            image: blog2,
            date: '26 April 2022',
            author: 'Admin',
            title: 'Best practices construction law on construction',
            desc: 'The brand has responded by partnering with skincare experts on...',
            link: '/blog-single'
        },
        {
            image: blog3,
            date: '26 April 2022',
            author: 'Admin',
            title: 'Although many people may overlook the need',
            desc: 'The brand has responded by partnering with skincare experts on...',
            link: '/blog-single'
        },
        {
            image: blog4,
            date: '26 April 2022',
            author: 'Admin',
            title: 'Construction executive holds a very special place',
            desc: 'The brand has responded by partnering with skincare experts on...',
            link: '/blog-single'
        },
        {
            image: blog5,
            date: '26 April 2022',
            author: 'Admin',
            title: 'This is another massive sites with a ton of information',
            desc: 'The brand has responded by partnering with skincare experts on...',
            link: '/blog-single'
        },
        {
            image: blog6,
            date: '26 April 2022',
            author: 'Admin',
            title: 'The construction business the owner site is jam-packed',
            desc: 'The brand has responded by partnering with skincare experts on...',
            link: '/blog-single'
        }
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
        <div id="rs-blog" className="rs-blog blog-main-home blog-modify1 bg7 pt-120 pb-115 md-pt-80 md-pb-80">
            <div className="container">
                <div className="sec-title text-center mb-50">
                    <span className="sub-text sub-text2">News & Blog</span>
                    <h2 className="title">Our latest news post<br />and articles</h2>
                </div>
                <Slider {...settings}>
                    {blogItems.map((blog, index)=> (
                        <BlogCard
                            key={index}
                            index={index}
                            blog={blog}
                            btnClass={'blog-bnt2'}
                            btnIcon={true}
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