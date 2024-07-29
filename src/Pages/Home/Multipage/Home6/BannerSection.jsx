import React, { useState } from 'react';

const BannerSection = () => {
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
        <div id="rs-banner" className="rs-banner banner-style1">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-7">
                        <div className="content-wrap">
                            <span className="sub-text">Plumber Construction</span>
                            <h1 className="title">
                                Looking for trusted plumber services
                            </h1>
                            <div className="description">
                                <p>
                                    Leverage agile frameworks to provide a robust synopsis for high level over
                                    <br />
                                    views. Iterative approaches to corporate strategy.
                                </p>
                            </div>
                            <div className="banner-btn mt-40">
                                <a className="readon blue-btn" href="contact.html">Discover More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 pl-86 md-pl-15 md-pb-140 sm-pb-130 xs-pb-115">
                        <div className="get-quote-widget">
                            <div className="title-heading">
                                <h3 className="title">Get Quick Quote</h3>
                            </div>
                            <div className="contact-wrap">
                                <div id="form-messages"></div>
                                <form id="contact-form"  onSubmit={handleSubmit}>
                                    <fieldset>
                                        <div className="row">
                                            <div className="col-lg-12 mb-25">
                                                <input
                                                    className="from-control"
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    placeholder="Name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-lg-12 mb-25">
                                                <input
                                                    className="from-control"
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    placeholder="E-Mail"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-lg-12 mb-25">
                                                <input
                                                    className="from-control"
                                                    type="text"
                                                    id="phone"
                                                    name="phone"
                                                    placeholder="Phone Number"
                                                    required
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="col-lg-12">
                                                <textarea
                                                    className="from-control"
                                                    id="message"
                                                    name="message"
                                                    placeholder="Your Message Here"
                                                    required
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="form-button">
                                            <p className="submit-form">
                                                <input className="submit" type="submit" value="Submit Now" />
                                            </p>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerSection;
