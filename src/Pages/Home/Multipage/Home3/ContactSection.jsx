import React, { useState } from 'react';
import cImg from '../../../../assets/images/contact/pro-con.jpg'
import ContactForm from '../../../../Components/Contact/ContactForm';

const ContactSection = () => {

    const [formMessage, setFormMessage] = useState('');
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
                setFormMessage('Message sent successfully!')
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
            setFormData('An error occurred while sending the message.');
            alert('An error occurred while sending the message.');
        }
    };

    return (
        <div className="rs-contact contact-style1 contact-modify1 pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6">
                        <div className="project-img">
                            <img src={cImg} alt="Contact" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact-section">
                            <div className="contact-wrap">
                                <div className="sec-title2 mb-55 md-mb-35">
                                    <span className="sub-title">Contact Us</span>
                                    <h2 className="title pb-25">Have an upcoming project?</h2>
                                    <div className="heading-border-line left-style"></div>
                                </div>
                                <div id="form-messages">{formMessage && <p>{formMessage}</p>}</div>
                                <ContactForm
                                    formData={formData}
                                    handleChange={handleChange}
                                    handleSubmit={handleSubmit}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
