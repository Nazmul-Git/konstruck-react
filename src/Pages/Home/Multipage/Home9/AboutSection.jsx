import React from 'react';
import aboutImage from '../../../../assets/images/about/style4/about.png';
import profileImage from '../../../../assets/images/about/style4/tm1.jpg';
import signImage from '../../../../assets/images/about/style4/sign.png';

const AboutSection = () => {

    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const halfHeight = card.offsetHeight / 2;
        const halfWidth = card.offsetWidth / 2;
        const rotateX = (e.nativeEvent.offsetY - halfHeight) / 10;
        const rotateY = (e.nativeEvent.offsetX - halfWidth) / 10;
        card.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    const handleMouseLeave = (e) => {
        const card = e.currentTarget;
        card.style.transform = `perspective(500px) rotateX(0deg) rotateY(0deg)`;
    };

    return (
        <div className="rs-about about-style4 pb-100 md-pb-70">
            <div className="container">
                <div className="row y-middle">
                    <div className="col-lg-6 pr-30 md-pr-15 md-mb-50">
                        <div className="sec-title mb-50">
                            <span className="sub-text sub-text7">About Archtek</span>
                            <h2 className="title pb-25">
                                Future of Life! Konstruk Interior!
                            </h2>
                            <p className="desc">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at dictum risus, non suscipit arcu. Quisque aliquam posuere tortor, sit amet convallis nunc scelerisque in. Lorem ipsum dolor sit amet consectetur adipiscing elit Future of Life! Archtek Interior
                            </p>
                        </div>
                        <div className="about-section-inner">
                            <div className="img-part">
                                <img src={profileImage} alt="About" />
                            </div>
                            <div className="about-content">
                                <div className="text-part">
                                    “Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional”
                                </div>
                                <div className="content-information">
                                    <h6 className="title-name">Eng. Luise Henrikes</h6>
                                    <span className="title">CEO & founder</span>
                                    <div className="images-part">
                                        <img src={signImage} alt="About" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 pl-50 md-pl-15">
                        <div className="images-part">
                            <div
                                className="quality-img"
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                                style={{ transition: 'transform 0.1s ease-out' }}
                            >
                                <img
                                    src={aboutImage}
                                    alt="About"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
