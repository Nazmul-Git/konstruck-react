import React, { useState } from 'react';
import CountUp from 'react-countup';
import signatureImg from '../../../../assets/images/about/signeture1.png'; // Update with the correct path
import { Link } from 'react-router-dom';
import ContactForm2 from '../../../../Components/Contact/ContactForm2';

const AboutSection = () => {
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
        <div className="rs-about about-style3 pt-120 pb-120 md-pt-80 md-pb-80">
            <div className="container">
                <div className="our-carpenter-bg">
                    <div className="row y-middle">
                        <div className="col-lg-6 pr-32 md-pr-15 md-mb-50">
                            <div className="sec-title mb-46 md-mb-25">
                                <span className="sub-text sub-text6">About Our Carpenter</span>
                                <h2 className="title pb-25">
                                    Over 25 Years Experience<br />
                                    in Carpenter Industry
                                </h2>
                                <p className="desc">
                                    Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy data foster to collaborative thinking to empowerment. Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy data foster to collaborative thinking to empowerment leverage agile frameworks.
                                </p>
                            </div>
                            {/* Counter Section Start */}
                            <div id="rs-counter" className="rs-counter counter-style3 counter-modify2 pb-40">
                                <div className="row">
                                    <div className="col-lg-5 col-sm-6 xs-mb-30">
                                        <div className="rs-counter-list">
                                            <div className="counter-right-border"></div>
                                            <div className="count-text">
                                                <div className="count-number">
                                                    <CountUp className='rs-count' end={35} suffix="+" />
                                                </div>
                                                <span className="title">Happy Customers</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-7 col-sm-6">
                                        <div className="rs-counter-list widget-padding">
                                            <div className="count-text">
                                                <div className="count-number">
                                                    <CountUp className='rs-count' end={320} suffix="k" />
                                                </div>
                                                <span className="title">Completed Cases</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Counter Section End */}
                            <div className="row y-middle">
                                <div className="col-lg-6 col-sm-6 xs-mb-30">
                                    <div className="btn-part">
                                        <Link className="readon orange-btn know" to="/about">Know More</Link>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-sm-6">
                                    <img src={signatureImg} alt="About" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 pl-85 md-pl-15">
                            <div className="requset-services-wrap">
                                <div className="title-heading mb-33">
                                    <h3 className="title">Request A Service</h3>
                                </div>
                                <div className="contact-wrap">
                                    <div id="form-messages"></div>
                                    <ContactForm2
                                        formData={formData}
                                        handleChange={handleChange}
                                        handleSubmit={handleSubmit}
                                        websiteField={false}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
