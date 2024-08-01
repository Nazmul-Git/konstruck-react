import React from 'react';
import Slider from 'react-slick';

// Import images
import img1 from '../../../../assets/images/blog/style3/bl-1.jpg';
import img2 from '../../../../assets/images/blog/style3/bl-2.jpg';
import img3 from '../../../../assets/images/blog/style3/bl-3.jpg';
import img4 from '../../../../assets/images/blog/style3/bl-4.jpg';
import img5 from '../../../../assets/images/blog/style3/bl-5.jpg';
import img6 from '../../../../assets/images/blog/style3/bl-6.jpg';
import logo1 from '../../../../assets/images/partner/style1/1.png';
import logo2 from '../../../../assets/images/partner/style1/2.png';
import logo3 from '../../../../assets/images/partner/style1/3.png';
import logo4 from '../../../../assets/images/partner/style1/4.png';
import logo5 from '../../../../assets/images/partner/style1/5.png';
import logo6 from '../../../../assets/images/partner/style1/6.png';
import logo7 from '../../../../assets/images/partner/style1/7.png';
import BlogCard from '../../../../Components/Blog/BlogCard';
import Partner from '../../../../Components/Partner/Partner';

const blogPosts = [
    {
        image: img1,
        date: '26 April 2022',
        author: 'Admin',
        title: 'We really appreciate content about the construction',
        link: '/blog-single'
    },
    {
        image: img2,
        date: '26 April 2022',
        author: 'Admin',
        title: 'Best practices construction law on construction',
        link: '/blog-single'
    },
    {
        image: img3,
        date: '26 April 2022022',
        author: 'Admin',
        title: 'Although many people may overlook the need',
        link: '/blog-single'
    },
    {
        image: img4,
        date: '26 April 2022',
        author: 'Admin',
        title: 'Construction executive holds a very special place',
        link: '/blog-single'
    },
    {
        image: img5,
        date: '26 April 2022',
        author: 'Admin',
        title: 'This is another massive sites with a ton of information',
        link: '/blog-single'
    },
    {
        image: img6,
        date: '26 April 2022',
        author: 'Admin',
        title: 'The construction business the owner site is jam-packed',
        link: '/blog-single'
    }
];

const partners = [
    { src: logo1, alt: 'Logo 1' },
    { src: logo2, alt: 'Logo 2' },
    { src: logo3, alt: 'Logo 3' },
    { src: logo4, alt: 'Logo 4' },
    { src: logo5, alt: 'Logo 5' },
    { src: logo6, alt: 'Logo 6' },
    { src: logo7, alt: 'Logo 7' }
];

const BlogAndPartnerSection = () => {
    const blogSettings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        arrows: false,
        speed: 800,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    const partnerSettings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        arrows: false,
        speed: 800,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    };

    return (
        <div id="rs-blog" className="rs-blog blog-main-home blog-modify11 gray-bg10 pt-120 pb-110 md-pt-80 md-pb-70">
            <div className="container">
                <div className="sec-title mb-45 text-center">
                    <span className="sub-text sub-text10">News & Blog</span>
                    <h2 className="title title5 white-color">
                        Our Latest News Post<br />
                        And Articles
                    </h2>
                </div>
                <div className="rs-carousel">
                    <Slider {...blogSettings}>
                        {blogPosts.map((blog, index) => (
                            <BlogCard
                                index={index}
                                key={index}
                                blog={blog}
                                titleLast={true}
                            />
                        ))}
                    </Slider>
                </div>
            </div>
            <div className="rs-partner partner-main-home partner-modify11">
                <div className="container">
                    <div className="partner-content-widget">
                        <Slider {...partnerSettings}>
                            {partners.map((partner, index) => (
                                <Partner
                                    key={index}
                                    index={index}
                                    partner={partner}
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogAndPartnerSection;
