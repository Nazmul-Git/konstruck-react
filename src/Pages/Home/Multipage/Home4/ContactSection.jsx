import React, { useState } from 'react';

const ContactSection = () => {
    const [select, setSelect] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        address: '',
        service: ''
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
                    phoneNumber: '',
                    email: '',
                    address: '',
                    service: '',
                });
            } else {
                alert('Failed to send message.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while sending the message.');
        }
    };

    const handleClickOption = () => {
        setSelect(!select);
    }

    return (
        <div className="rs-contact contact-style2">
            <div className="container">
                <div className="requset-contact">
                    <div className="sec-title mb-40 md-mb-30">
                        <h2 className="title title2">
                            Request A Service
                        </h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-lg-4 col-sm-6 mb-30">
                                <span className="wpcf7-form-control-wrap">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </span>
                            </div>
                            <div className="col-lg-4 col-sm-6 mb-30">
                                <span className="wpcf7-form-control-wrap arrow2">
                                    <input
                                        type="tel"
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        placeholder="Phone Number"
                                        required
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                    />
                                </span>
                            </div>
                            <div className="col-lg-4 col-sm-6 mb-30">
                                <span className="wpcf7-form-control-wrap arrow3">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </span>
                            </div>
                            <div className="col-lg-4 col-sm-6 md-mb-30">
                                <span className="wpcf7-form-control-wrap arrow4">
                                    <input
                                        type="text"
                                        id="address"
                                        name="address"
                                        placeholder="Your Address"
                                        required
                                        value={formData.address}
                                        onChange={handleChange}
                                    />
                                </span>
                            </div>
                            <div className="col-lg-4 col-sm-6 sm-mb-30">
                                <span className="wpcf7-form-control-wrap arrow5 Services services_select">
                                    <div className={`select-selected ${select ? 'select-arrow-active' : ''}`} onClick={handleClickOption}>
                                        {formData.service || 'Select a Service'}
                                    </div>
                                    <div className={`select-items ${select ? '' : 'select-hide'}`}>
                                        <div onClick={() => { setFormData({ ...formData, service: 'General construction' }); setSelect(false) }}>General construction</div>
                                        <div onClick={() => { setFormData({ ...formData, service: 'Modified Roofing' }); setSelect(false) }}>Modified Roofing</div>
                                        <div onClick={() => { setFormData({ ...formData, service: 'Metal Roofing' }); setSelect(false) }}>Metal Roofing</div>
                                        <div onClick={() => { setFormData({ ...formData, service: 'Vegetative Roofing' }); setSelect(false) }}>Vegetative Roofing</div>
                                        <div onClick={() => { setFormData({ ...formData, service: 'Inspections' }); setSelect(false) }}>Inspections</div>
                                        <div onClick={() => { setFormData({ ...formData, service: 'Siding & Gutters' }); setSelect(false) }}>Siding & Gutters</div>
                                    </div>
                                </span>
                            </div>
                            <div className="col-lg-4 col-sm-6">
                                <div className="services-btn">
                                    <p className="submit-btn">
                                        <input type="submit" value="Submit Services Request" className="Submit Services Request" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
