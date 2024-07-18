import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import shape1 from '../../../../assets/images/shape-1.png';
import icon1 from '../../../../assets/images/contact/style1/icons/1.png';
import icon2 from '../../../../assets/images/contact/style1/icons/2.png';
import icon3 from '../../../../assets/images/contact/style1/icons/3.png';
import ContactForm from '../../../../Components/Contact/ContactForm';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        website: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('./contact.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                alert('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    website: '',
                    message: ''
                });
            } else {
                alert('Failed to send message.');
            }
        } catch (error) {
            // console.error('Error:', error);
            alert('An error occurred while sending the message.');
        }
    };

    return (
        <div className="rs-contact contact-style1 bg3">
            <div className="row">
                <div className="col-lg-4 offset-2 con-left-6">
                    <div className="contact-section">
                        <div className="contact-wrap">
                            <div className="sec-title mb-45">
                                <span className="sub-text">
                                    <img src={shape1} alt="Images" />
                                    Lets talk
                                </span>
                                <h2 className="title">
                                    Have an upcoming project?
                                </h2>
                            </div>
                            <div id="form-messages"></div>
                            <ContactForm
                                formData={formData}
                                handleChange={handleChange}
                                handleSubmit={handleSubmit}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 pr-50 md-pr-15 con-right-6 md-mt-50">
                    <div className="contact-box-item">
                        <div className="contact-box mb-20">
                            <div className="contact-icon">
                                <img src={icon1} alt="images" />
                            </div>
                            <div className="content-text">
                                <h4 className="title"><Link to="#">USA office</Link></h4>
                                <p className="services-txt">55 Gerad Lane,<br /> NY 11201, USA</p>
                            </div>
                        </div>
                        <div className="contact-box mb-20">
                            <div className="contact-icon">
                                <img src={icon2} alt="images" />
                            </div>
                            <div className="content-text">
                                <h4 className="title"><Link to="#">Email us</Link></h4>
                                <p className="services-txt">
                                    <Link to="mailto:test@gamil.com">test@gamil.com</Link><br />
                                    <Link to="mailto:test2@gamil.com">test2@gamil.com</Link>
                                </p>
                            </div>
                        </div>
                        <div className="contact-box">
                            <div className="contact-icon">
                                <img src={icon3} alt="images" />
                            </div>
                            <div className="content-text">
                                <h4 className="title"><Link to="#">Call us</Link></h4>
                                <p className="services-txt">
                                    <Link to="tel:(+088)589-8745">(+088) 589-8745</Link><br />
                                    <Link to="tel:(+088)222-9999">(+088) 222-9999</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 contact-right-img"></div>
            </div>
        </div>
    );
};

export default ContactSection;
