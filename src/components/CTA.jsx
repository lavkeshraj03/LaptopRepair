import React from 'react';
import { ArrowRight } from 'lucide-react';
import Section from './Section';
import Button from './Button';
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <Section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/10 backdrop-blur-3xl -z-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/20 to-transparent blur-3xl -z-10" />

            <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                    Need Laptop Repair <span className="text-primary">Today?</span>
                </h2>
                <p className="text-xl text-gray-300 mb-10">
                    Don't let a broken device slow you down. Book a repair now and get it fixed by experts.
                </p>
                <Link to="/book-repair">
                    <Button variant="primary" className="!text-lg !px-10 !py-4" icon={ArrowRight}>
                        Book Now
                    </Button>
                </Link>
            </div>
        </Section>
    );
};

export default CTA;
