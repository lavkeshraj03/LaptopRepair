import React from 'react';
import { Monitor, Cpu, Battery, Zap, Database, ShieldAlert, HardDrive, ShoppingBag } from 'lucide-react';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const servicesDetailed = [
    {
        icon: Monitor,
        title: 'Screen Replacement',
        desc: 'Broken, cracked, or flickering screens replaced with high-quality panels. We stock screens for all major brands including Apple, Dell, HP, and Lenovo.'
    },
    {
        icon: Cpu,
        title: 'Motherboard Repair',
        desc: 'Expert chip-level repair for dead motherboards, liquid damage, and power issues. We use advanced diagnostic tools to pinpoint the fault.'
    },
    {
        icon: Battery,
        title: 'Battery Replacement',
        desc: 'Is your laptop not holding charge? We replace old batteries with genuine or high-quality compatible ones tailored to your model.'
    },
    {
        icon: Zap,
        title: 'Charging Port Repair',
        desc: 'Fix loose, broken, or non-functional charging ports. We solder new jacks precisely to ensure long-lasting durability.'
    },
    {
        icon: Database,
        title: 'Data Recovery',
        desc: 'Professional data recovery from crashed hard drives, SSDs, and accidental deletions. High success rate for logical failures.'
    },
    {
        icon: ShieldAlert,
        title: 'Virus Removal',
        desc: 'Complete removal of malware, spyware, and viruses. System optimization and antivirus installation included.'
    },
    {
        icon: HardDrive,
        title: 'SSD & RAM Upgrade',
        desc: 'Boost your laptop\'s speed significantly by upgrading to an SSD or adding more RAM. Data migration services available.'
    },
    {
        icon: ShoppingBag,
        title: 'Refurbished Sales',
        desc: 'Quality tested refurbished laptops available for sale with warranty. Great performance at a fraction of the cost.'
    },
];

const Services = () => {
    return (
        <div className="pt-20">
            <Section className="text-center bg-dark">
                <h1 className="text-5xl font-bold mb-6">Our <span className="text-primary">Services</span></h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    Comprehensive repair solutions for every laptop issue. Fast, reliable, and guaranteed.
                </p>
            </Section>

            <Section className="bg-dark/50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {servicesDetailed.map((service, index) => (
                        <GlassCard key={index} delay={index * 0.1} className="flex flex-col md:flex-row gap-6 p-8 items-start">
                            <div className="bg-primary/20 p-4 rounded-xl text-primary shrink-0">
                                <service.icon size={40} />
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                                <p className="text-gray-300 mb-6 leading-relaxed">{service.desc}</p>



                                <Link to="/book-repair">
                                    <Button variant="outline" className="!py-2 !px-6 text-sm">Book This Service</Button>
                                </Link>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Services;
