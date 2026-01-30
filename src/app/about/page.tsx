'use client';

import { QrCode, Zap, Shield, Heart, Globe, Users, Target, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-16 md:py-24">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
                        <Heart className="w-4 h-4 text-primary" />
                        <span className="text-sm text-primary font-medium">About Us</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
                        Making QR Codes <span className="text-gradient">Simple & Beautiful</span>
                    </h1>
                    <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
                        iLoveQR is a free, powerful QR code generator designed to help individuals and businesses
                        create stunning QR codes in seconds.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                            Our Mission
                        </h2>
                        <p className="text-text-secondary text-lg leading-relaxed mb-6">
                            At iLoveQR, we believe that creating professional QR codes should be free, fast, and accessible
                            to everyone. Whether you&apos;re a small business owner, a marketer, or an individual looking to
                            share information quickly, we&apos;ve got you covered.
                        </p>
                        <p className="text-text-secondary text-lg leading-relaxed">
                            Our mission is to democratize QR code creation by providing a beautiful, intuitive tool that
                            doesn&apos;t require any technical expertise or expensive subscriptions.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
                        <div className="relative bg-surface border border-border rounded-3xl p-8 md:p-12">
                            <div className="flex justify-center mb-6">
                                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    <QrCode className="w-10 h-10 text-primary" />
                                </div>
                            </div>
                            <div className="text-center">
                                <div className="text-5xl font-bold text-primary mb-2">1M+</div>
                                <p className="text-text-secondary">QR Codes Generated</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-surface/50 py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                            What We Stand For
                        </h2>
                        <p className="text-text-secondary max-w-2xl mx-auto">
                            Our core values guide everything we do at iLoveQR.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ValueCard
                            icon={<Shield className="w-6 h-6 text-primary" />}
                            title="Privacy First"
                            description="Your QR code content is processed locally in your browser. We never store or access your data."
                        />
                        <ValueCard
                            icon={<Zap className="w-6 h-6 text-primary" />}
                            title="Speed & Simplicity"
                            description="Create beautiful QR codes in seconds with our intuitive, real-time interface."
                        />
                        <ValueCard
                            icon={<Heart className="w-6 h-6 text-primary" />}
                            title="Free Forever"
                            description="Our core features are completely free with no hidden fees, watermarks, or limitations."
                        />
                        <ValueCard
                            icon={<Sparkles className="w-6 h-6 text-primary" />}
                            title="Quality Design"
                            description="Export high-resolution QR codes in multiple formats for any use case."
                        />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                            What Makes Us Different
                        </h2>
                        <p className="text-text-secondary max-w-2xl mx-auto">
                            We&apos;ve built iLoveQR with features that matter most to our users.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard
                            icon={<Globe className="w-6 h-6 text-primary" />}
                            title="Multiple QR Types"
                            description="Generate QR codes for URLs, text, email, phone, SMS, WiFi networks, and more. One tool for all your needs."
                        />
                        <FeatureCard
                            icon={<Target className="w-6 h-6 text-primary" />}
                            title="Full Customization"
                            description="Customize colors, shapes, add logos, and apply templates to create QR codes that match your brand."
                        />
                        <FeatureCard
                            icon={<Users className="w-6 h-6 text-primary" />}
                            title="No Account Required"
                            description="Start creating immediately. No sign-up, no login, no personal information required."
                        />
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="bg-surface/50 py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
                        Built by Creators, for Creators
                    </h2>
                    <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                        iLoveQR was built by a passionate team of developers and designers who understand the need for
                        simple, effective tools. We use iLoveQR ourselves every day and are committed to continuously
                        improving it based on user feedback.
                    </p>
                    <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
                        Have suggestions or feedback? We&apos;d love to hear from you! Reach out to us at{' '}
                        <a href="mailto:hello@iloveqr.com" className="text-primary hover:underline">
                            hello@iloveqr.com
                        </a>
                    </p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative bg-gradient-to-br from-primary/10 via-surface to-accent/10 border border-border rounded-3xl p-8 md:p-16 text-center overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

                        <div className="relative">
                            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                                Ready to Create Your QR Code?
                            </h2>
                            <p className="text-text-secondary max-w-xl mx-auto mb-8">
                                Join millions of users who trust iLoveQR for their QR code needs.
                            </p>
                            <Link href="/">
                                <Button size="lg">
                                    <QrCode className="w-5 h-5" />
                                    Start Creating Now
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Legal Links */}
            <section className="pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-surface border border-border rounded-2xl p-6 md:p-8">
                        <h3 className="text-lg font-semibold text-text-primary mb-4 text-center">
                            Legal Information
                        </h3>
                        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                            <Link href="/privacy" className="text-text-secondary hover:text-primary transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-text-secondary hover:text-primary transition-colors">
                                Terms of Service
                            </Link>
                            <a href="mailto:legal@iloveqr.com" className="text-text-secondary hover:text-primary transition-colors">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

// Helper Components
function ValueCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <div className="bg-surface border border-border rounded-2xl p-6 text-center hover:border-primary/30 transition-colors">
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                {icon}
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
            <p className="text-text-secondary text-sm">{description}</p>
        </div>
    );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <div className="bg-surface border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors">
            <div className="w-12 h-12 mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                {icon}
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
            <p className="text-text-secondary text-sm">{description}</p>
        </div>
    );
}
