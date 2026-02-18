import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Section from './Section';
import GlassCard from './GlassCard';

const testimonials = [
    { name: 'Sarah Johnson', role: 'Graphic Designer', text: 'My MacBook was dead, and Apple said it would take a week. MACC fixed it in 24 hours! Highly recommended.', rating: 5 },
    { name: 'Michael Chen', role: 'Student', text: 'Affordable and professional. They saved my data when my hard drive crashed. Lifesavers!', rating: 5 },
    { name: 'Jessica Davis', role: 'Freelancer', text: 'The best laptop repair shop in the city. Transparency and quality work. My Dell XPS runs like new.', rating: 5 },
    { name: 'David Wilson', role: 'Business Owner', text: 'Excellent service for our company laptops. Quick turnaround and genuine parts used.', rating: 5 },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            nextTestimonial();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <Section className="relative bg-dark/50">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients <span className="text-primary">Say</span></h2>
            </div>

            <div className="max-w-4xl mx-auto relative">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                    >
                        <GlassCard className="text-center md:px-16 md:py-12 relative">
                            <Quote size={48} className="absolute top-8 left-8 text-primary/20" />
                            <div className="flex justify-center mb-6">
                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                    <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <p className="text-xl md:text-2xl italic text-gray-300 mb-8 leading-relaxed">
                                "{testimonials[currentIndex].text}"
                            </p>
                            <div>
                                <h4 className="text-lg font-bold text-white">{testimonials[currentIndex].name}</h4>
                                <span className="text-primary text-sm">{testimonials[currentIndex].role}</span>
                            </div>
                        </GlassCard>
                    </motion.div>
                </AnimatePresence>

                <button
                    onClick={prevTestimonial}
                    className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 p-3 bg-white/5 hover:bg-primary/20 rounded-full transition-all"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={nextTestimonial}
                    className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 p-3 bg-white/5 hover:bg-primary/20 rounded-full transition-all"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </Section>
    );
};

export default Testimonials;
