import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Cpu, Battery, Zap, Database, ShieldAlert, HardDrive, ShoppingBag } from 'lucide-react';
import Section from './Section';
import GlassCard from './GlassCard';

const services = [
    { icon: Monitor, title: 'Screen Replacement', desc: 'Broken or flickering screen? We replace it with genuine displays.' },
    { icon: Cpu, title: 'Motherboard Repair', desc: 'Chip-level repair for dead or malfunctioning motherboards.' },
    { icon: Battery, title: 'Battery Replacement', desc: 'Get original battery replacements with extended warranty.' },
    { icon: Zap, title: 'Charging Port Repair', desc: 'Fix loose or non-working charging ports quickly.' },
    { icon: Database, title: 'Data Recovery', desc: 'Recover lost data from crashed hard drives and SSDs.' },
    { icon: ShieldAlert, title: 'Virus Removal', desc: 'Complete system cleanup and antivirus installation.' },
    { icon: HardDrive, title: 'SSD & RAM Upgrade', desc: 'Boost your laptop speed with high-performance upgrades.' },
    { icon: ShoppingBag, title: 'Refurbished Sales', desc: 'Buy certified refurbished laptops at affordable prices.' },
];

const ServicesSection = () => {
    return (
        <Section id="services" className="bg-dark/50">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-primary">Services</span></h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    We offer a comprehensive range of laptop repair services for all major brands.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                    <GlassCard key={index} delay={index * 0.1} hoverEffect={true} className="text-center group">
                        <div className="mb-6 inline-flex p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <service.icon size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                    </GlassCard>
                ))}
            </div>
        </Section>
    );
};

export default ServicesSection;
