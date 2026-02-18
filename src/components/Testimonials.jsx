import React from 'react';
import { Star, Quote, User } from 'lucide-react';
import Section from './Section';

const testimonials = [
    { name: 'Shubham Pal', text: 'Excellent laptop repair service. Diagnosed quickly and repaired perfectly.', rating: 5 },
    { name: 'Amit Kumar', text: 'Professional motherboard replacement for Lenovo laptop.', rating: 5 },
    { name: 'Mohan Jha', text: 'Fast and reasonably priced Dell repair.', rating: 5 },
    { name: 'Pankaj Thakur', text: 'HP charging issue fixed quickly.', rating: 5 },
    { name: 'Shaurya', text: 'Honest pricing and professional Lenovo repair.', rating: 5 },
    { name: 'Abhijeet Kritan', text: 'Genuine parts and timely delivery.', rating: 5 },
    { name: 'Rajesh Kumar', text: 'Asus charging issue solved same day.', rating: 5 },
    { name: 'Aishwarya Ghuge', text: 'Quick issue identification and solution.', rating: 5 },
    { name: 'Deep Gujjar', text: 'Best laptop repair service in Noida.', rating: 5 },
    { name: 'Mohd Danish', text: 'Quick service and quality work.', rating: 5 },
];

const Testimonials = () => {
    return (
        <Section className="bg-dark/50 relative overflow-hidden py-24">
            <div className="text-center mb-16 relative z-10 px-6">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Customers <span className="text-primary">Say</span></h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Trusted Laptop Repair Experts in Noida – 100% Customer Satisfaction
                </p>
            </div>

            {/* Gradient Masks */}
            <div className="absolute top-0 left-0 h-full w-20 md:w-40 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 h-full w-20 md:w-40 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none"></div>

            <div className="flex overflow-hidden pause-on-hover py-8">
                <div className="flex animate-marquee gap-8 min-w-full items-stretch shrink-0 px-4">
                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                        <div
                            key={index}
                            className="w-[350px] md:w-[400px] shrink-0 bg-[#0f172a]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-8 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-300 group"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                                    <Quote size={20} className="fill-current" />
                                </div>
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                            </div>

                            <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                                "{testimonial.text}"
                            </p>

                            <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center border border-white/10">
                                    <User size={20} className="text-gray-400" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white group-hover:text-primary transition-colors">{testimonial.name}</h4>
                                    <span className="text-xs text-green-500 font-medium flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                        Verified Customer
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Testimonials;
