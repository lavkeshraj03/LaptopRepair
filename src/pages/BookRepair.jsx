import React, { useState } from 'react';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';
import SuccessModal from '../components/SuccessModal';
import { Upload, Calendar, Send, Laptop, Smartphone, Monitor, AlertCircle, Loader2 } from 'lucide-react';

const deviceTypes = ['Laptop', 'MacBook', 'Desktop PC', 'All-in-One', 'Smartphone', 'Tablet'];

const BookRepair = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        deviceType: 'Laptop',
        brand: '',
        model: '',
        issue: '',
        date: '',
        priority: false,
        image: null
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.phone.match(/^\+?[\d\s-]{10,}$/)) newErrors.phone = 'Valid phone number is required';
        if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Valid email is required';
        if (!formData.brand.trim()) newErrors.brand = 'Brand/Model is required';
        if (!formData.issue.trim()) newErrors.issue = 'Issue description is required';
        if (!formData.date) newErrors.date = 'Preferred date is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setShowSuccess(true);

        // Reset form
        setFormData({
            name: '',
            phone: '',
            email: '',
            deviceType: 'Laptop',
            brand: '',
            model: '',
            issue: '',
            date: '',
            priority: false,
            image: null
        });
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
                            {/* Personal Info */}
                            <div className="space-y-5">
                                <h3 className="text-xl font-semibold text-white border-b border-white/10 pb-2 mb-4">Contact Details</h3>

                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full bg-white/5 border rounded-lg px-4 py-3 focus:outline-none transition-colors text-white ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-primary'}`}
                                        placeholder="John Doe"
                                    />
                                    {errors.name && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.name}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className={`w-full bg-white/5 border rounded-lg px-4 py-3 focus:outline-none transition-colors text-white ${errors.phone ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-primary'}`}
                                        placeholder="+91 98765 43210"
                                    />
                                    {errors.phone && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.phone}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full bg-white/5 border rounded-lg px-4 py-3 focus:outline-none transition-colors text-white ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-primary'}`}
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.email}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Preferred Date</label>
                                    <div className="relative">
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            className={`w-full bg-white/5 border rounded-lg px-4 py-3 focus:outline-none transition-colors text-white appearance-none ${errors.date ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-primary'}`}
                                            style={{ colorScheme: 'dark' }}
                                        />
                                        <Calendar size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                    </div>
                                    {errors.date && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.date}</p>}
                                </div>
                            </div>

                            {/* Device Info */}
                            <div className="space-y-5">
                                <h3 className="text-xl font-semibold text-white border-b border-white/10 pb-2 mb-4">Device Information</h3>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-1">Device Type</label>
                                        <select
                                            name="deviceType"
                                            value={formData.deviceType}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors text-white appearance-none"
                                        >
                                            {deviceTypes.map(type => <option key={type} value={type} className="bg-dark text-white">{type}</option>)}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-1">Brand & Model</label>
                                        <input
                                            type="text"
                                            name="brand"
                                            value={formData.brand}
                                            onChange={handleChange}
                                            className={`w-full bg-white/5 border rounded-lg px-4 py-3 focus:outline-none transition-colors text-white ${errors.brand ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-primary'}`}
                                            placeholder="e.g. Dell XPS 15"
                                        />
                                        {errors.brand && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.brand}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Issue Description</label>
                                    <textarea
                                        name="issue"
                                        rows="4"
                                        value={formData.issue}
                                        onChange={handleChange}
                                        className={`w-full bg-white/5 border rounded-lg px-4 py-3 focus:outline-none transition-colors text-white resize-none ${errors.issue ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-primary'}`}
                                        placeholder="Describe the problem (e.g. Screen broken, not charging...)"
                                    ></textarea>
                                    {errors.issue && <p className="text-red-400 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12} /> {errors.issue}</p>}
                                </div>

                                <div>
                                    <label className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10 cursor-pointer hover:border-primary/50 transition-all">
                                        <input
                                            type="checkbox"
                                            name="priority"
                                            checked={formData.priority}
                                            onChange={handleChange}
                                            className="w-5 h-5 rounded border-gray-600 text-primary focus:ring-primary bg-transparent"
                                        />
                                        <span className="text-sm text-white font-medium">Request Priority Service (Express Repair)</span>
                                    </label>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-400 mb-1">Upload Image (Optional)</label>
                                    <div className="border-2 border-dashed border-white/10 rounded-lg p-4 text-center cursor-pointer hover:border-primary/50 hover:bg-white/5 transition-all group">
                                        <Upload size={24} className="mx-auto text-gray-400 mb-2 group-hover:text-primary transition-colors" />
                                        <span className="text-sm text-gray-500 group-hover:text-gray-300">Click to upload device image</span>
                                        <input type="file" className="hidden" accept="image/*" onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.files[0] }))} />
                                    </div>
                                    {formData.image && <p className="text-xs text-primary mt-2 text-center">Selected: {formData.image.name}</p>}
                                </div>
                            </div>

                            <div className="md:col-span-2 pt-6 border-t border-white/10">
                                <Button
                                    type="submit"
                                    variant="primary"
                                    className="w-full justify-center py-4 text-lg"
                                    icon={isSubmitting ? undefined : Send}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center gap-2">
                                            <Loader2 size={20} className="animate-spin" />
                                            Processing Request...
                                        </div>
                                    ) : (
                                        'Submit Booking Request'
                                    )}
                                </Button>
                                <p className="text-center text-gray-500 text-sm mt-4">
                                    No payment required now. You pay only after the repair is complete.
                                </p>
                            </div>
                        </form>
                    </GlassCard>
                </div>
            </Section>

            <SuccessModal
                isOpen={showSuccess}
                onClose={() => setShowSuccess(false)}
                title="Booking Confirmed!"
                message="Your repair appointment has been successfully booked. Our team will contact you shortly to confirm the schedule."
            />
        </div>
    );
};

export default BookRepair;
