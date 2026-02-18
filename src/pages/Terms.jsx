import React from 'react';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';

const Terms = () => {
    return (
        <div className="pt-20">
            <Section className="py-20">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Terms & <span className="text-primary">Conditions</span></h1>

                    <GlassCard className="p-8 md:p-12 space-y-8 text-gray-300 leading-relaxed">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                            <p>By accessing and using the services provided by MACC Computer - Laptop Repair Experts ("we," "our," or "us"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">2. Service Warranty</h2>
                            <p>We provide a limited warranty on all repairs and parts replaced. This warranty covers defects in materials and workmanship for a specific period (typically 30-90 days) from the date of repair completion. This warranty does not cover accidental damage, liquid damage, or software issues.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">3. Data Privacy & Loss</h2>
                            <p>While we take every precaution to protect your data, we are not responsible for any data loss that may occur during the repair process. We strongly recommend backing up all important data before submitting your device for repair.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Payment Terms</h2>
                            <p>Payment is due upon completion of the service. We accept cash, credit/debit cards, and UPI payments. Devices will only be released after full payment has been received.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">5. Unclaimed Devices</h2>
                            <p>Any device left unclaimed for more than 60 days after notification of repair completion may be disposed of or sold to recover repair costs, in accordance with local laws.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">6. Changes to Terms</h2>
                            <p>We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to this website. Your continued use of our services constitutes acceptance of these changes.</p>
                        </div>

                        <div className="pt-8 border-t border-white/10 text-sm text-gray-500">
                            Last updated: {new Date().toLocaleDateString()}
                        </div>
                    </GlassCard>
                </div>
            </Section>
        </div>
    );
};

export default Terms;
