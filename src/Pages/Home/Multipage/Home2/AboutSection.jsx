import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import aboutImg from '../../../../assets/images/about/about-2-1.jpg';
import serviceIcon1 from '../../../../assets/images/services/main-home/main-icons/service-icon1.png';
import serviceIcon2 from '../../../../assets/images/services/main-home/main-icons/service-icon2.png';
import serviceIcon3 from '../../../../assets/images/services/main-home/main-icons/service-icon3.png';
import serviceIcon4 from '../../../../assets/images/services/main-home/main-icons/service-icon4.png';
import serviceIcon5 from '../../../../assets/images/services/main-home/main-icons/service-icon5.png';
import serviceIcon6 from '../../../../assets/images/services/main-home/main-icons/service-icon6.png';
import AboutUs from '../../../../Components/AboutUs/AboutUs';
import Services from '../../../../Components/Services/Services';

const services = [
    { img: serviceIcon1, title: 'General construction', link: '/general-construction', description: 'Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally.' },
    { img: serviceIcon2, title: 'Property maintenance', link: '/property-maintenance', description: 'Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally.' },
    { img: serviceIcon3, title: 'Project managment', link: '/project-managment', description: 'Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally.' },
    { img: serviceIcon4, title: 'Virtual design & build', link: '/virtual-design-build', description: 'Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally.' },
    { img: serviceIcon5, title: 'Preconstruction', link: '/preconstruction', description: 'Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally.' },
    { img: serviceIcon6, title: 'Design build', link: '/design-build', description: 'Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally.' },
];

const AboutSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };
    return (
        <div className="rs-about about-style1 bg5 pt-120 pb-120 md-pt-80 md-pb-80">
            <AboutUs
                aboutImg={aboutImg}
            />
            <div className="rs-services services-style1 pt-120 md-pt-70">
                <div className="container">
                    <div className="sec-title text-center mb-50">
                        <span className="sub-text sub-text2">
                            Latest Services
                        </span>
                        <h2 className="title">
                            Develop comprehensive solutions<br />
                            for each project.
                        </h2>
                    </div>
                    <Slider {...settings}>
                        {services.map((service, index) => (
                            <Services
                                key={index}
                                service={service}
                                serviceTitle1={true}
                            />
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
