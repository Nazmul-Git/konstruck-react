import React from 'react';
import { Link } from 'react-router-dom';


const BlogCard = ({ blog, btnClass, btnIcon, index, blogBtn }) => {
    return (
        <div className="blog-item">
            <div className="image-wrap">
                <Link to={blog.link}>
                    <img src={blog.image} alt={`Blog ${index + 1}`} />
                </Link>
            </div>
            <div className="blog-content">
                <ul className="blog-meta">
                    <li className="date">
                        <i className="ri-calendar-line"></i>
                        {blog.date}
                    </li>
                    <li className="admin">
                        <i className="ri-user-fill"></i>
                        {blog.author}
                    </li>
                </ul>
                <h3 className="blog-title">
                    <Link to={blog.link}>{blog.title}</Link>
                </h3>
                {
                    blog.desc &&
                    <p className="desc">{blog.desc}</p>
                }
                {
                    blogBtn &&
                    <div className={`blog-button ${btnClass ? btnClass : ""}`}>
                        <Link to={blog.link}>Read More</Link>
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
