import React from 'react';
import SliderSection from './SliderSection';
import AboutSection from './AboutSection';
import ServiceSection from './ServiceSection';
import CounterSection from './CounterSection';
import FaqSection from './FaqSection';
import ProjectSection from './ProjectSection';
import WhyChooseSection from './WhyChooseSection';
import TestimonialSection from './TestimonialSection';
import ContactSection from './ContactSection';
import BlogSection from './BlogSection';
import CtaSection from './CtaSection';

const Index1Main = () => {
    return (
        <>
            <SliderSection
                icon={true}
            />
            <AboutSection />
            <ServiceSection />
            <CounterSection />
            <FaqSection />
            <ProjectSection />
            <WhyChooseSection />
            <TestimonialSection />
            <ContactSection />
            <BlogSection />
            <CtaSection />
        </>
    );
};

export default Index1Main;