import React, { useState } from 'react';
import contactImg from '../../../../assets/images/contact/contact-12.png';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        website: '',
        message: '',
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        // Replace this URL with your actual form handler URL
        const formUrl = 'mailer.php';

        try {
            const response = await fetch(formUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    website: '',
                    message: '',
                });
            } else {
                setStatus('Failed to send message.');
            }
        } catch (error) {
            setStatus('An error occurred.');
        }
    };

    return (
        <div className="rs-contact contact-style1 contact-modify5 bg28 pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6 md-mb-50">
                        <div className="contact-section">
                            <div className="contact-wrap">
                                <div className="sec-title mb-45">
                                    <span className="sub-text sub-text9">Get In Touch</span>
                                    <h2 className="title title6 white-color pb-23">
                                        Need any help? We’re<br />
                                        there for you
                                    </h2>
                                    <p className="desc desc7">
                                        Nulla facilisi nullam vehicula ipsum a arcu cursus. Morbi blandit cursus<br />
                                        risus at. Aliquam etiam erat velit scelerisque.
                                    </p>
                                </div>
                                <div id="form-messages">
                                    {status && <p>{status}</p>}
                                </div>
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
                                                type="tel"
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
                                                className="readon more submit submit-orange2"
                                                type="submit"
                                                value="Submit Now"
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact-img">
                            <img src={contactImg} alt="Contact" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
