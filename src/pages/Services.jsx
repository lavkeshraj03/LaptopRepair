import React from 'react';
import { Monitor, Cpu, Battery, Zap, Database, ShieldAlert, HardDrive, ShoppingBag, Clock, DollarSign } from 'lucide-react';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const servicesDetailed = [
    {
        icon: Monitor,
        title: 'Screen Replacement',
        desc: 'Broken, cracked, or flickering screens replaced with high-quality panels. We stock screens for all major brands including Apple, Dell, HP, and Lenovo.',
        time: '1-2 Hours',
        price: '$80 - $200'
    },
    {
        icon: Cpu,
        title: 'Motherboard Repair',
        desc: 'Expert chip-level repair for dead motherboards, liquid damage, and power issues. We use advanced diagnostic tools to pinpoint the fault.',
        time: '24-48 Hours',
        price: '$100 - $300'
    },
    {
        icon: Battery,
        title: 'Battery Replacement',
        desc: 'Is your laptop not holding charge? We replace old batteries with genuine or high-quality compatible ones tailored to your model.',
        time: '30 Minutes',
        price: '$50 - $120'
    },
    {
        icon: Zap,
        title: 'Charging Port Repair',
        desc: 'Fix loose, broken, or non-functional charging ports. We solder new jacks precisely to ensure long-lasting durability.',
        time: '1-2 Hours',
        price: '$40 - $80'
    },
    {
        icon: Database,
        title: 'Data Recovery',
        desc: 'Professional data recovery from crashed hard drives, SSDs, and accidental deletions. High success rate for logical failures.',
        time: '2-5 Days',
        price: '$100+'
    },
    {
        icon: ShieldAlert,
        title: 'Virus Removal',
        desc: 'Complete removal of malware, spyware, and viruses. System optimization and antivirus installation included.',
        time: '2-4 Hours',
        price: '$40 - $80'
    },
    {
        icon: HardDrive,
        title: 'SSD & RAM Upgrade',
        desc: 'Boost your laptop\'s speed significantly by upgrading to an SSD or adding more RAM. Data migration services available.',
        time: '1 Hour',
        price: '$60 - $200'
    },
    {
        icon: ShoppingBag,
        title: 'Refurbished Sales',
        desc: 'Quality tested refurbished laptops available for sale with warranty. Great performance at a fraction of the cost.',
        time: 'Instant',
        price: 'Varies'
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

                                <div className="flex flex-wrap gap-4 mb-6">
                                    <div className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full">
                                        <Clock size={16} className="text-primary" />
                                        <span>Time: <span className="text-white">{service.time}</span></span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full">
                                        <DollarSign size={16} className="text-primary" />
                                        <span>Price: <span className="text-white">{service.price}</span></span>
                                    </div>
                                </div>

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
