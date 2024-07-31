
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Importing images
import shapeImage from '../../../../assets/images/shape-3.png';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
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
                    topic: '',
                    phone: '',
                    message: ''
                });
            } else {
                alert('Failed to send message.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while sending the message.');
        }
    };

    return (
        <div className="rs-contact contact-style4 bg21 pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="background-bg-wrap">
                <div className="background-overlay"></div>
            </div>
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6 pr-167 md-pr-15 md-mb-50">
                        <div className="sec-title">
                            <span className="sub-text sub-text8 white-color">
                                <img src={shapeImage} alt="Images" />
                                LET'S TALK
                            </span>
                            <h2 className="title pb-20 white-color">
                                Contact Konstruk for<br />
                                renewable energy
                            </h2>
                            <p className="desc desc7 pb-40">
                                Sit amet facilisis magna etiam tempor orci eu. Nisi est sit amet facilisis magna etiam tempor orci. Sit amet aliquam id diam maecenas ultricies aliquet enim tortor.
                            </p>
                            <div className="address-wrap videos-icons-style2">
                                <div className="address-icon">
                                    <i className="ri-phone-fill"></i>
                                </div>
                                <div className="inner-txt">
                                    <span className="sub-text">Make a Call</span>
                                    <h2 className="title"><Link to="#">(00) 123 456 00</Link></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="requset-services-wrap">
                            <div className="title-heading mb-32">
                                <h3 className="title">Request A Service</h3>
                            </div>
                            <div className="contact-wrap">
                                <form id="contact-form" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-lg-12 mb-25">
                                            <input
                                                className="from-control"
                                                type="text"
                                                name="name"
                                                placeholder="Name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-lg-12 mb-25">
                                            <input
                                                className="from-control"
                                                type="email"
                                                name="email"
                                                placeholder="E-Mail"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-lg-12 mb-25">
                                            <input
                                                className="from-control"
                                                type="text"
                                                name="phone"
                                                placeholder="Phone Number"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-lg-12 mb-20">
                                            <textarea
                                                className="from-control"
                                                name="message"
                                                placeholder="Your Message Here"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="form-button paste-submit">
                                        <p className="submit-form">
                                            <input className="submit" type="submit" value="Submit Now" />
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
