import React from 'react';
import { Check } from 'lucide-react';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const pricingPlans = [
    {
        name: 'Basic Tune-up',
        price: '$49',
        features: ['System Diagnostics', 'Virus Check', 'Dust Cleaning', 'Driver Updates', '30-Day Warranty'],
        popular: false,
    },
    {
        name: 'Advanced Repair',
        price: '$99',
        features: ['Hardware Repair', 'Software Troubleshooting', 'Virus Removal', 'Data Backup', '90-Day Warranty'],
        popular: true,
    },
    {
        name: 'Premium Overhaul',
        price: '$199',
        features: ['Complete Hardware Fix', 'OS Reinstallation', 'Data Recovery', 'Priority Service', '6-Month Warranty'],
        popular: false,
    },
];

const Pricing = () => {
    return (
        <div className="pt-20">
            <Section className="text-center">
                <h1 className="text-5xl font-bold mb-6">Transparent <span className="text-primary">Pricing</span></h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-16">
                    No hidden fees. Pay for what you get.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {pricingPlans.map((plan, index) => (
                        <GlassCard
                            key={index}
                            delay={index * 0.1}
                            className={`text-left relative flex flex-col ${plan.popular ? 'border-primary/50 shadow-[0_0_30px_rgba(0,102,255,0.15)] transform scale-105 z-10' : ''}`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">
                                    MOST POPULAR
                                </div>
                            )}
                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <div className="text-4xl font-bold text-primary mb-6">{plan.price}<span className="text-lg text-gray-500 font-normal">/fix</span></div>

                            <ul className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <Check size={18} className="text-green-400 shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link to="/book-repair" className="w-full">
                                <Button variant={plan.popular ? 'primary' : 'outline'} className="w-full justify-center">
                                    Choose Plan
                                </Button>
                            </Link>
                        </GlassCard>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Pricing;
