import React from 'react';
import Hero from '../components/Hero';
import Brands from '../components/Brands';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home = () => {
    return (
        <div className="overflow-hidden">
            <Hero />
            <Brands />
            <ServicesSection />
            <WhyChooseUs />
            <HowItWorks />
            <Testimonials />
            <CTA />
        </div>
    );
};

export default Home;
