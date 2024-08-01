import React from 'react';
import Slider from 'react-slick';

// Import images
import blogImg1 from '../../../../assets/images/blog/style3/bl-1.jpg';
import blogImg2 from '../../../../assets/images/blog/style3/bl-2.jpg';
import blogImg3 from '../../../../assets/images/blog/style3/bl-3.jpg';
import blogImg4 from '../../../../assets/images/blog/style3/bl-4.jpg';
import blogImg5 from '../../../../assets/images/blog/style3/bl-5.jpg';
import blogImg6 from '../../../../assets/images/blog/style3/bl-6.jpg';
import BlogCard from '../../../../Components/Blog/BlogCard';

const blogPosts = [
    {
        id: 1,
        categoryTitle: 'Solar',
        image: blogImg1,
        date: '26 April 2022',
        admin: 'Admin',
        title: 'Powerwall Seamless with Integration',
        desc: 'The brand has responded by partnering with skincare experts on social and web...',
    },
    {
        id: 2,
        categoryTitle: 'Educational',
        image: blogImg2,
        date: '26 April 2022',
        admin: 'Admin',
        title: 'Power Solar with your Beautiful Home',
        desc: 'The brand has responded by partnering with skincare experts on social and web...',
    },
    {
        id: 3,
        categoryTitle: 'Solar',
        image: blogImg3,
        date: '26 April 2022',
        author: 'Admin',
        title: 'Panels with a Sleek, Low-Profile Design',
        desc: 'The brand has responded by partnering with skincare experts on social and web...',
    },
    {
        id: 4,
        categoryTitle: 'Solar',
        image: blogImg4,
        date: '26 April 2022',
        author: 'Admin',
        title: 'Seamless Integration with Powerwall',
        desc: 'The brand has responded by partnering with skincare experts on social and web...',
    },
    {
        id: 5,
        categoryTitle: 'Solar',
        image: blogImg5,
        date: '26 April 2022',
        author: 'Admin',
        title: 'This is another massive sites with a ton of information',
        desc: 'The brand has responded by partnering with skincare experts on social and web...',
    },
    {
        id: 6,
        categoryTitle: 'Solar',
        image: blogImg6,
        date: '26 April 2022',
        author: 'Admin',
        title: 'The construction business the owner site is jam-packed',
        desc: 'The brand has responded by partnering with skincare experts on social and web...',
    },
    // Add more blog posts if needed
];

const BlogSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
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

    return (
        <div id="rs-blog" className="rs-blog blog-main-home blog-modify10 pt-120 pb-115 md-pt-80 md-pb-80">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6">
                        <div className="sec-title mb-45">
                            <span className="sub-text sub-text9">News & Blog</span>
                            <h2 className="title title6">Our latest articles</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="sec-title mb-45">
                            <p className="desc desc10">
                                At tellus at urna condimentum mattis pellentesque. Egestas egestas<br />
                                fringilla phasellus faucibus. Praesent ugiat nibh pulvinar gravida.
                            </p>
                        </div>
                    </div>
                </div>
                <Slider {...settings}>
                    {blogPosts.map((blog, index) => (
                        <BlogCard
                            key={index}
                            blog={blog}
                            titleLast={true}

                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default BlogSection;
