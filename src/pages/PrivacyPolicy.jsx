import React from 'react';
import Section from '../components/Section';
import GlassCard from '../components/GlassCard';

const PrivacyPolicy = () => {
    return (
        <div className="pt-20">
            <Section className="py-20">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Privacy <span className="text-primary">Policy</span></h1>

                    <GlassCard className="p-8 md:p-12 space-y-8 text-gray-300 leading-relaxed">
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                            <p>We collect information you provide directly to us, such as your name, phone number, email address, and device details when you book a repair or contact us. We may also collect technical data about your device to facilitate repairs.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                            <p>We use the information we collect to:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1">
                                <li>Process your repair requests and communicate with you about your service status.</li>
                                <li>Provide customer support and respond to your inquiries.</li>
                                <li>Send you service updates, invoices, and warranty information.</li>
                                <li>Improve our services and website experience.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
                            <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. We do not access your personal files on your device unless explicitly required for data recovery services.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">4. Sharing of Information</h2>
                            <p>We do not sell, trade, or otherwise transfer your personal information to outside parties. This does not include trusted third parties who assist us in operating our website or conducting our business, as long as those parties agree to keep this information confidential.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">5. Cookies</h2>
                            <p>Our website may use cookies to enhance your experience. You can choose to disable cookies through your browser settings, but this may limit some functionality of the site.</p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
                            <p>If you have any questions about this Privacy Policy, please contact us at computer.macc@gmail.com.</p>
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

export default PrivacyPolicy;
