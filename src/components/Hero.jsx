import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Phone } from 'lucide-react';
import Button from './Button';
import Section from './Section';

const Hero = () => {
    return (
        <Section className="min-h-screen flex items-center justify-center pt-32 pb-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-dark z-0">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-primary mb-6">
                        #1 Laptop Repair Service in Town
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Fast & Reliable <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                            Laptop Repair Experts
                        </span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        Same Day Repairs | Genuine Parts | Certified Technicians.
                        We bring your device back to life with premium care.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12"
                >
                    <Button variant="primary" icon={ArrowRight}>Book a Repair</Button>
                    <Button variant="outline" icon={Phone}>Call Now</Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm font-medium"
                >
                    {['1000+ Repairs Completed', '5 Star Rated Service', '30 Days Warranty'].map((badge) => (
                        <div key={badge} className="flex items-center gap-2 bg-white/5 py-2 px-4 rounded-full border border-white/10">
                            <CheckCircle size={16} className="text-primary" />
                            <span>{badge}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
};

export default Hero;
