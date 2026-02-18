import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone } from 'lucide-react';
import Button from './Button';
import Section from './Section';

const Hero = () => {
    return (
        <Section className="min-h-screen flex items-center justify-center pt-32 pb-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <img
                    src="/src/assets/hero_bg.png"
                    alt="Laptop Repair Workshop"
                    className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/80 to-dark"></div>
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse mix-blend-screen" />
            </div>

            <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-primary mb-6 tracking-wide uppercase">
                        Premium Laptop Care
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
                        Restoring Excellence <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F59E0B]">
                            To Your Devices
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Experience the gold standard in laptop repair. Expert technicians, genuine parts, and same-day service for your premium devices.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col md:flex-row gap-5 justify-center items-center mb-16"
                >
                    <Link to="/book-repair">
                        <Button variant="primary" icon={ArrowRight} className="!px-8 !py-4 text-lg">Book Appointment</Button>
                    </Link>
                    <Link to="/contact">
                        <Button variant="outline" icon={Phone} className="!px-8 !py-4 text-lg">Contact Us</Button>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-wrap justify-center gap-4 md:gap-8 text-gray-400 text-sm font-medium"
                >
                    {['Certified Experts', 'Genuine Parts', 'Express Service', 'Data Security'].map((badge) => (
                        <div key={badge} className="flex items-center gap-2 bg-secondary/50 py-2 px-5 rounded-full border border-white/5 shadow-sm">
                            <CheckCircle size={16} className="text-primary" />
                            <span className="tracking-wide text-gray-300">{badge}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
};

export default Hero;
