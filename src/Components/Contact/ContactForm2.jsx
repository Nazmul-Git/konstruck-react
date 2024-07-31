import React from 'react';

const ContactForm2 = ({ handleChange, handleSubmit, formData, websiteField }) => {
    return (
        <form id="contact-form" method="post" onSubmit={handleSubmit}>
            <fieldset>
                <div className="row">
                    <div className="col-lg-12 mb-25">
                        <input
                            className="form-control"
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
                            className="form-control"
                            type="email"
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
                            className="form-control"
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="Phone Number"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-lg-12 mb-20">
                        <textarea
                            className="form-control"
                            id="message"
                            name="message"
                            placeholder="Your Message Here"
                            required
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-button orange-submit">
                    <p className="submit-form">
                        <input className="submit" type="submit" value="Submit Now" />
                    </p>
                </div>
            </fieldset>
        </form>
    );
};

export default ContactForm2;