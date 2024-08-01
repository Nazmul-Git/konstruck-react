import React from 'react';
import { Link } from 'react-router-dom';


const BlogCard = ({ blog, btnClass, btnIcon, index, blogBtn, titleFirst, titleLast }) => {
    return (
        <div className="blog-item">
            <div className="image-wrap">
                {
                    blog.categoryTitle &&
                    <ul className="post-categories">
                        <li><Link to="/blog-single">{blog.categoryTitle}</Link></li>
                    </ul>
                }
                <Link to={blog.link}>
                    <img src={blog.image} alt={`Blog ${index + 1}`} />
                </Link>
            </div>
            <div className="blog-content">
                {
                    titleFirst &&
                    <h3 className="blog-title">
                        <Link to={blog.link}>{blog.title}</Link>
                    </h3>
                }
                <ul className="blog-meta">
                    {
                        blog.date &&
                        <li className="date">
                            <i className="ri-calendar-line"></i>
                            {blog.date}
                        </li>
                    }
                    {
                        blog.author &&
                        <li className="admin">
                            <i className="ri-user-fill"></i>
                            {blog.author}
                        </li>
                    }
                    {
                        blog.category &&
                        <li className="category">
                            <i className="ri-book-fill"></i>{blog.category}
                        </li>
                    }
                </ul>
                {
                    titleLast &&
                    <h3 className="blog-title">
                        <Link to={blog.link}>{blog.title}</Link>
                    </h3>
                }
                {
                    blog.desc &&
                    <p className="desc">{blog.desc}</p>
                }
                {
                    blogBtn &&
                    <div className={`blog-button ${btnClass ? btnClass : ""}`}>
                        <Link to={blog.link}>{blog.btnName}</Link>
                        {
                            btnIcon &&
                            <i className="ri-arrow-right-line"></i>
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default BlogCard;
