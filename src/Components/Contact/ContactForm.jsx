import React from 'react';

const ContactForm = ({ handleChange, handleSubmit, formData }) => {
    const { name, email, phone,website, message } = formData;
    
    return (
        <form id="contact-form" onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 mb-30">
                    <input
                        className="from-control"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={name}
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
                        value={email}
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
                        value={phone}
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
                        value={website}
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
                        value={message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
            </div>
            <div className="btn-part">
                <div className="form-group mb-0">
                    <input className="readon more submit" type="submit" value="Submit Now" />
                </div>
            </div>
        </form>
    );
};

export default ContactForm;