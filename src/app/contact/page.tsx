import { Mail, MessageSquare, Instagram, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'Contact Us - iLoveQR',
    description: 'Get in touch with the iLoveQR team. We would love to hear from you!',
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-text-primary mb-4">
                        Contact <span className="text-primary">Us</span>
                    </h1>
                    <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                        Have questions, feedback, or just want to say hello? We&apos;d love to hear from you!
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Email Card */}
                    <div className="bg-surface rounded-2xl p-8 border border-border hover:border-primary/30 transition-colors">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-xl">
                                <Mail className="w-6 h-6 text-primary" />
                            </div>
                            <h2 className="text-xl font-semibold text-text-primary">Email Us</h2>
                        </div>
                        <p className="text-text-secondary mb-4">
                            For general inquiries, support, or feedback, reach out to us via email.
                        </p>
                        <a
                            href="mailto:iloveqr.in@gmail.com"
                            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium transition-colors"
                        >
                            <Mail className="w-4 h-4" />
                            iloveqr.in@gmail.com
                        </a>
                    </div>

                    {/* Response Time Card */}
                    <div className="bg-surface rounded-2xl p-8 border border-border hover:border-primary/30 transition-colors">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-green-500/10 rounded-xl">
                                <MessageSquare className="w-6 h-6 text-green-500" />
                            </div>
                            <h2 className="text-xl font-semibold text-text-primary">Quick Response</h2>
                        </div>
                        <p className="text-text-secondary mb-4">
                            We typically respond within 24-48 hours. For urgent matters, please mention it in your email subject.
                        </p>
                        <span className="text-green-500 font-medium">
                            Usually responds within 24 hours
                        </span>
                    </div>
                </div>

                {/* Social Media Section */}
                <div className="bg-surface rounded-2xl p-8 border border-border mb-12">
                    <h2 className="text-2xl font-semibold text-text-primary mb-6 text-center">
                        Follow Us on Social Media
                    </h2>
                    <p className="text-text-secondary text-center mb-8">
                        Stay updated with the latest features, tips, and QR code inspiration!
                    </p>
                    <div className="flex justify-center gap-6">
                        <a
                            href="https://www.instagram.com/iloveqr.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-2 p-4 bg-surface-light hover:bg-surface-lighter rounded-xl transition-colors group"
                        >
                            <div className="p-3 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-xl">
                                <Instagram className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-text-secondary group-hover:text-text-primary transition-colors text-sm font-medium">
                                Instagram
                            </span>
                        </a>

                        <a
                            href="https://x.com/iloveqr196976"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-2 p-4 bg-surface-light hover:bg-surface-lighter rounded-xl transition-colors group"
                        >
                            <div className="p-3 bg-black rounded-xl">
                                <Twitter className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-text-secondary group-hover:text-text-primary transition-colors text-sm font-medium">
                                X (Twitter)
                            </span>
                        </a>

                        <a
                            href="http://www.linkedin.com/in/iloveqr-in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-2 p-4 bg-surface-light hover:bg-surface-lighter rounded-xl transition-colors group"
                        >
                            <div className="p-3 bg-[#0A66C2] rounded-xl">
                                <Linkedin className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-text-secondary group-hover:text-text-primary transition-colors text-sm font-medium">
                                LinkedIn
                            </span>
                        </a>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-text-primary mb-4">
                        Have Questions?
                    </h2>
                    <p className="text-text-secondary mb-6">
                        Check out our frequently asked questions or explore our QR generator to get started!
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link
                            href="/generator"
                            className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors"
                        >
                            Try QR Generator
                        </Link>
                        <Link
                            href="/about"
                            className="px-6 py-3 bg-surface-light text-text-primary rounded-xl font-medium hover:bg-surface-lighter transition-colors border border-border"
                        >
                            About Us
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
