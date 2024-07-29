import React, { useState } from 'react';

// Import images
import contactImage from '../../../../assets/images/contact/contact-5.jpg';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        website: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
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
                    message: '',
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
        <div className="rs-contact contact-style3 blue-bg4 pt-120 pb-120 md-pt-75 md-pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 contact-img">
                        <img src={contactImage} alt="Contact" />
                    </div>
                    <div className="col-lg-6 pl-60 md-pl-15">
                        <div className="contact-wrap">
                            <div className="sec-title3 mb-66 md-mb-46">
                                <span className="sub-title">Contact Us</span>
                                <h2 className="title white-color pb-25">
                                    Contact Konstruk Logistics
                                </h2>
                                <div className="heading-border-line left-style"></div>
                            </div>
                            <div id="form-messages"></div>
                            <form id="contact-form" method="post" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6 mb-30">
                                        <input
                                            className="from-control"
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 mb-30">
                                        <input
                                            className="from-control"
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="E-Mail"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 mb-30">
                                        <input
                                            className="from-control"
                                            type="text"
                                            id="phone"
                                            name="phone"
                                            placeholder="Phone Number"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6 mb-30">
                                        <input
                                            className="from-control"
                                            type="text"
                                            id="website"
                                            name="website"
                                            placeholder="Your Website"
                                            value={formData.website}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-lg-12 mb-30">
                                        <textarea
                                            className="from-control"
                                            id="message"
                                            name="message"
                                            placeholder="Your Message Here"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="btn-part">
                                    <div className="form-group mb-0">
                                        <input
                                            className="readon paste-btn submit"
                                            type="submit"
                                            value="Submit Now"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
