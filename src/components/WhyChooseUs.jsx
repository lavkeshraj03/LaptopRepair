import React from 'react';
import { Clock, CheckCircle, DollarSign, PenTool, Users } from 'lucide-react';
import Section from './Section';
import GlassCard from './GlassCard';

const features = [
    { icon: Clock, title: 'Same Day Delivery', desc: 'Most repairs are completed within 24 hours.' },
    { icon: DollarSign, title: 'Affordable Pricing', desc: 'Competitive rates with no hidden charges.' },
    { icon: PenTool, title: 'Genuine Spare Parts', desc: 'We only use original and high-quality components.' },
    { icon: Users, title: 'Expert Technicians', desc: 'Certified professionals with years of experience.' },
    { icon: CheckCircle, title: 'Free Diagnosis', desc: 'We diagnose the issue for free before any repair.' },
];

const WhyChooseUs = () => {
    return (
        <Section className="relative">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose <span className="text-primary">MACC</span>?</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    We pride ourselves on providing the best laptop repair service in the region.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <GlassCard key={index} delay={index * 0.1} className="flex flex-col items-center text-center p-8 hover:bg-white/10 transition-colors">
                        <div className="bg-primary/20 p-4 rounded-full text-primary mb-6">
                            <feature.icon size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                        <p className="text-gray-400">{feature.desc}</p>
                    </GlassCard>
                ))}
            </div>
        </Section>
    );
};

export default WhyChooseUs;
