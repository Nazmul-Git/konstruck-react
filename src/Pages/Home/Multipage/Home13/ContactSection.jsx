
import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        website: '',
        message: ''
    });
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/mailer.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setFormStatus('Your message has been sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    website: '',
                    message: ''
                });
            } else {
                setFormStatus('Failed to send your message. Please try again.');
            }
        } catch (error) {
            setFormStatus('An error occurred. Please try again.');
        }
    };

    return (
        <div className="rs-contact contact-style7 bg31 pt-120 pb-120 md-pt-75 md-pb-75">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6 pr-50 md-pr-15 mb-50">
                        <div className="sec-title">
                            <span className="sub-text sub-text10">Get In Touch</span>
                            <h2 className="title title5 pb-28 white-color">
                                Need Any Help?
                                We’re There For Support
                            </h2>
                            <p className="desc desc7">
                                Nulla facilisi nullam vehicula ipsum a arcu cursus. Morbi blandit cursus<br />
                                risus at. Aliquam etiam erat velit scelerisque.
                            </p>
                            <div className="btn-part mt-45">
                                <a className="readon contact1" href="contact.html"><i className="fa fa-phone"></i>(00) 123 456 789</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact-wrap">
                            <div id="form-messages"></div>
                            <form id="contact-form" method="post" action="mailer.php" onSubmit={handleSubmit}>
                                <fieldset>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-6 mb-30">
                                            <label className="name">First Name*</label>
                                            <input
                                                className={`from-control ${formErrors.name ? 'is-invalid' : ''}`}
                                                type="text"
                                                name="name"
                                                placeholder="Name"
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                            {formErrors.name && <div className="invalid-feedback">{formErrors.name}</div>}
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 mb-30">
                                            <label className="name">Last Name*</label>
                                            <input
                                                className={`from-control ${formErrors.email ? 'is-invalid' : ''}`}
                                                type="text"
                                                name="email"
                                                placeholder="E-Mail"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                            {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 mb-30">
                                            <label className="name">Email*</label>
                                            <input
                                                className={`from-control ${formErrors.phone ? 'is-invalid' : ''}`}
                                                type="text"
                                                name="phone"
                                                placeholder="Phone Number"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                            {formErrors.phone && <div className="invalid-feedback">{formErrors.phone}</div>}
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-6 mb-30">
                                            <label className="name">Project Scope*</label>
                                            <input
                                                className={`from-control ${formErrors.website ? 'is-invalid' : ''}`}
                                                type="text"
                                                name="website"
                                                placeholder="Your Website"
                                                value={formData.website}
                                                onChange={handleChange}
                                            />
                                            {formErrors.website && <div className="invalid-feedback">{formErrors.website}</div>}
                                        </div>
                                        <div className="col-lg-12 mb-30">
                                            <label className="name">Message*</label>
                                            <textarea
                                                className={`from-control ${formErrors.message ? 'is-invalid' : ''}`}
                                                name="message"
                                                placeholder="Your Message Here"
                                                value={formData.message}
                                                onChange={handleChange}
                                            ></textarea>
                                            {formErrors.message && <div className="invalid-feedback">{formErrors.message}</div>}
                                        </div>
                                    </div>
                                    <div className="btn-part">
                                        <div className="form-group mb-0">
                                            <input className="readon more submit submit-red1" type="submit" value="Submit Now" />
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
