import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Search, Wrench, Smile } from 'lucide-react';
import Section from './Section';

const steps = [
    { icon: Calendar, title: 'Book Online', desc: 'Schedule a repair online or visit our store.' },
    { icon: Search, title: 'Free Diagnosis', desc: 'We inspect your device and find the issue for free.' },
    { icon: Wrench, title: 'We Repair', desc: 'Our experts fix your laptop with genuine parts.' },
    { icon: Smile, title: 'Get It Back', desc: 'Receive your laptop back in perfect condition.' },
];

const HowItWorks = () => {
    return (
        <Section className="bg-dark/50">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">How It <span className="text-primary">Works</span></h2>
                <p className="text-gray-400">Simple 4-step process to get your laptop fixed.</p>
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-0 w-full h-[2px] bg-white/10 -z-10" />

                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center text-center group"
                    >
                        <div className="relative mb-6">
                            <div className="w-24 h-24 rounded-full bg-dark border-2 border-primary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(0,102,255,0.2)]">
                                <step.icon size={36} />
                            </div>
                            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white text-black font-bold flex items-center justify-center">
                                {index + 1}
                            </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-gray-400 text-sm">{step.desc}</p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default HowItWorks;
