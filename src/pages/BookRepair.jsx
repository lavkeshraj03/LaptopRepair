import React, { useState } from 'react';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';
import { Upload, Calendar, Send } from 'lucide-react';

const BookRepair = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        brand: '',
        issue: '',
        date: '',
        image: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Booking request received! We will contact you shortly.');
    };

    return (
        <div className="pt-20">
            <Section className="min-h-screen flex items-center justify-center">
                <div className="w-full max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Book a <span className="text-primary">Repair</span></h1>
                        <p className="text-gray-400">Fill out the form below and we'll get back to you immediately.</p>
                    </div>

                    <GlassCard className="p-8 md:p-12">
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white"
                                        placeholder="John Doe"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white"
                                        placeholder="+1 (555) 000-0000"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white"
                                        placeholder="john@example.com"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Laptop Brand & Model</label>
                                    <input
                                        type="text"
                                        name="brand"
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white"
                                        placeholder="MacBook Pro M1 2020"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Preferred Date</label>
                                    <div className="relative">
                                        <input
                                            type="date"
                                            name="date"
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white"
                                            onChange={handleChange}
                                        />
                                        <Calendar size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Issue Description</label>
                                    <textarea
                                        name="issue"
                                        required
                                        rows="4"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white resize-none"
                                        placeholder="Describe the problem..."
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Upload Image (Optional)</label>
                                    <div className="border-2 border-dashed border-white/10 rounded-lg p-4 text-center cursor-pointer hover:border-primary/50 transition-colors">
                                        <Upload size={24} className="mx-auto text-gray-400 mb-2" />
                                        <span className="text-sm text-gray-500">Click to upload image</span>
                                        <input type="file" className="hidden" onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })} />
                                    </div>
                                </div>
                            </div>

                            <div className="md:col-span-2 pt-4">
                                <Button type="submit" variant="primary" className="w-full justify-center" icon={Send}>
                                    Submit Booking Request
                                </Button>
                            </div>
                        </form>
                    </GlassCard>
                </div>
            </Section>
        </div>
    );
};

export default BookRepair;
