import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black/50 border-t border-white/10 pt-16 pb-8 text-gray-400">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                {/* Brand */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-4">MACC<span className="text-primary">.</span></h3>
                    <p className="mb-6 leading-relaxed">
                        Premium laptop repair services. We bring your devices back to life with genuine parts and expert care.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all"><Facebook size={20} /></a>
                        <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all"><Instagram size={20} /></a>
                        <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 hover:text-primary transition-all"><Twitter size={20} /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-semibold mb-6">Quick Links</h4>
                    <ul className="space-y-3">
                        <li><Link to="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
                        <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                        <li><Link to="/book-repair" className="hover:text-primary transition-colors">Book a Repair</Link></li>
                        <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-white font-semibold mb-6">Contact Us</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <MapPin size={20} className="text-primary shrink-0 mt-1" />
                            <span>123 Tech Avenue, Silicon Valley, CA 94043</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone size={20} className="text-primary shrink-0" />
                            <span>+1 (555) 123-4567</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={20} className="text-primary shrink-0" />
                            <span>support@macccomputer.com</span>
                        </li>
                    </ul>
                </div>

                {/* Hours */}
                <div>
                    <h4 className="text-white font-semibold mb-6">Business Hours</h4>
                    <ul className="space-y-3">
                        <li className="flex justify-between items-center">
                            <span>Mon - Fri</span>
                            <span className="text-white">9:00 AM - 7:00 PM</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span>Saturday</span>
                            <span className="text-white">10:00 AM - 5:00 PM</span>
                        </li>
                        <li className="flex justify-between items-center">
                            <span>Sunday</span>
                            <span className="text-primary">Closed</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-white/5 pt-8 text-center text-sm">
                <p>&copy; {new Date().getFullYear()} MACC Computer. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
