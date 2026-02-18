import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';

const Contact = () => {
    return (
        <div className="pt-20">
            <Section>
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold mb-6">Get in <span className="text-primary">Touch</span></h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Visit our store or contact us for any queries.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <GlassCard className="p-8">
                            <h3 className="text-2xl font-bold mb-6">Store Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/20 p-3 rounded-full text-primary">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">Address</h4>
                                        <p className="text-gray-400">123 Tech Avenue, Silicon Valley, CA 94043</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/20 p-3 rounded-full text-primary">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">Phone</h4>
                                        <p className="text-gray-400">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/20 p-3 rounded-full text-primary">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">Email</h4>
                                        <p className="text-gray-400">support@macccomputer.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/20 p-3 rounded-full text-primary">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">Business Hours</h4>
                                        <p className="text-gray-400">Mon - Fri: 9:00 AM - 7:00 PM</p>
                                        <p className="text-gray-400">Saturday: 10:00 AM - 5:00 PM</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/10">
                                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="block">
                                    <Button variant="outline" className="w-full justify-center gap-2 !border-green-500 !text-green-500 hover:!bg-green-500/10">
                                        <MessageCircle size={20} />
                                        Chat on WhatsApp
                                    </Button>
                                </a>
                            </div>
                        </GlassCard>
                    </div>

                    {/* Map */}
                    <GlassCard className="h-full min-h-[400px] p-0 overflow-hidden relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.628236526436!2d-122.08625158435773!3d37.42206557982468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367!2sGoogleplex!5e0!3m2!1sen!2sus!4v1645519154789!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '400px' }}
                            allowFullScreen=""
                            loading="lazy"
                            className="absolute inset-0 grayscale invert contrast-125 opacity-80 hover:opacity-100 transition-opacity duration-500"
                        ></iframe>
                    </GlassCard>
                </div>
            </Section>
        </div>
    );
};

export default Contact;
