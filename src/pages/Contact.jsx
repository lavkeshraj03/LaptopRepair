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
                                        <p className="text-gray-400">Gate No.-1, Sharma Market, F-3, 1st Floor, Near Metro Station Noida Sector 18, Atta, Sector 27, Noida, Uttar Pradesh 201301</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/20 p-3 rounded-full text-primary">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">Phone</h4>
                                        <p className="text-gray-400">+91 9717343568</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/20 p-3 rounded-full text-primary">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">Email</h4>
                                        <p className="text-gray-400">computer.macc@gmail.com</p>
                                    </div>
                                </div>

                            </div>

                            <div className="mt-8 pt-8 border-t border-white/10">
                                <a href="https://wa.me/919717343568" target="_blank" rel="noopener noreferrer" className="block">
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
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.580671926123!2d77.32187631508264!3d28.57276598244131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce44e54823871%3A0x6c245037a5051a8!2sSector%2018%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1645519154789!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '400px' }}
                            allowFullScreen=""
                            loading="lazy"
                            className="absolute inset-0 opacity-80 hover:opacity-100 transition-opacity duration-500"
                        ></iframe>
                    </GlassCard>
                </div>
            </Section>
        </div>
    );
};

export default Contact;
