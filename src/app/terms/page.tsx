'use client';

import { FileText, AlertTriangle, Shield, Scale, Ban, Copyright, Globe, Mail, Clock, Users, Gavel } from 'lucide-react';

export default function TermsOfServicePage() {
    const lastUpdated = 'January 31, 2026';
    const effectiveDate = 'January 31, 2026';

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-16 md:py-24">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
                        <FileText className="w-4 h-4 text-primary" />
                        <span className="text-sm text-primary font-medium">Legal Agreement</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                        Terms of Service
                    </h1>
                    <p className="text-text-secondary text-lg">
                        Last updated: {lastUpdated}
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="bg-surface border border-border rounded-2xl p-6 md:p-10 space-y-10">

                    {/* Important Notice */}
                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-5">
                        <div className="flex items-start gap-3">
                            <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5 shrink-0" />
                            <p className="text-text-secondary leading-relaxed">
                                <strong className="text-yellow-500">Please read these terms carefully.</strong> By accessing or using
                                iLoveQR, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree
                                to these terms, please do not use our service.
                            </p>
                        </div>
                    </div>

                    {/* Acceptance of Terms */}
                    <TermsSection
                        icon={<Gavel className="w-5 h-5 text-primary" />}
                        title="1. Acceptance of Terms"
                    >
                        <p className="text-text-secondary leading-relaxed mb-3">
                            These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;User,&quot; &quot;you,&quot;
                            or &quot;your&quot;) and iLoveQR (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) governing your access to and use of the iLoveQR website,
                            applications, and services (collectively, the &quot;Service&quot;).
                        </p>
                        <p className="text-text-secondary leading-relaxed">
                            By accessing or using our Service, you acknowledge that you have read, understood, and agree to be
                            bound by these Terms. If you are using the Service on behalf of an organization, you represent and
                            warrant that you have the authority to bind that organization to these Terms.
                        </p>
                    </TermsSection>

                    {/* Eligibility */}
                    <TermsSection
                        icon={<Users className="w-5 h-5 text-primary" />}
                        title="2. Eligibility"
                    >
                        <p className="text-text-secondary leading-relaxed">
                            You must be at least 16 years of age to use our Service. By using the Service, you represent and
                            warrant that you meet this requirement. If you are under 18, you should have your parent or guardian&apos;s
                            permission to use the Service.
                        </p>
                    </TermsSection>

                    {/* Description of Service */}
                    <TermsSection
                        icon={<FileText className="w-5 h-5 text-primary" />}
                        title="3. Description of Service"
                    >
                        <p className="text-text-secondary leading-relaxed mb-3">
                            iLoveQR provides a free online QR code generator that allows users to create customizable QR codes
                            for various purposes including, but not limited to:
                        </p>
                        <ul className="list-disc list-inside text-text-secondary space-y-1 ml-4 mb-3">
                            <li>Website URLs and links</li>
                            <li>Plain text content</li>
                            <li>Email addresses and pre-filled emails</li>
                            <li>Phone numbers</li>
                            <li>SMS messages</li>
                            <li>WiFi network credentials</li>
                            <li>PDF document links</li>
                        </ul>
                        <p className="text-text-secondary leading-relaxed">
                            The Service is provided &quot;as is&quot; and &quot;as available.&quot; We reserve the right to modify, suspend, or
                            discontinue any part of the Service at any time without prior notice.
                        </p>
                    </TermsSection>

                    {/* User Responsibilities */}
                    <TermsSection
                        icon={<Shield className="w-5 h-5 text-primary" />}
                        title="4. User Responsibilities"
                    >
                        <p className="text-text-secondary leading-relaxed mb-3">
                            When using our Service, you agree to:
                        </p>
                        <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4 mb-4">
                            <li>Use the Service only for lawful purposes and in accordance with these Terms</li>
                            <li>Not use the Service to create QR codes that link to or contain illegal, harmful, or malicious content</li>
                            <li>Not attempt to interfere with or disrupt the Service or its servers</li>
                            <li>Not use automated systems or software to extract data from the Service</li>
                            <li>Not reverse engineer, decompile, or disassemble any part of the Service</li>
                        </ul>
                    </TermsSection>

                    {/* Prohibited Uses */}
                    <TermsSection
                        icon={<Ban className="w-5 h-5 text-primary" />}
                        title="5. Prohibited Uses"
                    >
                        <p className="text-text-secondary leading-relaxed mb-3">
                            You expressly agree NOT to use the Service to create QR codes that:
                        </p>
                        <div className="grid gap-2">
                            <ProhibitedItem text="Link to malware, viruses, or malicious software" />
                            <ProhibitedItem text="Facilitate phishing, fraud, or identity theft" />
                            <ProhibitedItem text="Contain or link to illegal content, including child exploitation material" />
                            <ProhibitedItem text="Infringe on intellectual property rights of others" />
                            <ProhibitedItem text="Promote violence, terrorism, or hate speech" />
                            <ProhibitedItem text="Harass, threaten, or intimidate any person" />
                            <ProhibitedItem text="Violate any applicable laws or regulations" />
                            <ProhibitedItem text="Spread misinformation or false information" />
                        </div>
                        <p className="text-text-secondary leading-relaxed mt-4">
                            We reserve the right to investigate and take appropriate action against anyone who violates these
                            prohibitions, including reporting to law enforcement authorities.
                        </p>
                    </TermsSection>

                    {/* Intellectual Property */}
                    <TermsSection
                        icon={<Copyright className="w-5 h-5 text-primary" />}
                        title="6. Intellectual Property"
                    >
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-text-primary mb-2">6.1 Our Intellectual Property</h4>
                                <p className="text-text-secondary leading-relaxed">
                                    The Service, including its original content, features, functionality, design, logos, and
                                    trademarks, is owned by iLoveQR and is protected by international copyright, trademark, and
                                    other intellectual property laws.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-text-primary mb-2">6.2 Your Content</h4>
                                <p className="text-text-secondary leading-relaxed">
                                    You retain ownership of any content you input into the Service to create QR codes. By using the
                                    Service, you grant us a non-exclusive, royalty-free license to process your content solely for
                                    the purpose of providing the Service. Since QR codes are generated in your browser, your content
                                    is not stored on our servers.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-text-primary mb-2">6.3 Generated QR Codes</h4>
                                <p className="text-text-secondary leading-relaxed">
                                    QR codes generated through our Service are yours to use freely for personal or commercial
                                    purposes. However, we do not guarantee the functionality of QR codes or their compatibility
                                    with all scanning devices.
                                </p>
                            </div>
                        </div>
                    </TermsSection>

                    {/* Disclaimer */}
                    <TermsSection
                        icon={<AlertTriangle className="w-5 h-5 text-primary" />}
                        title="7. Disclaimer of Warranties"
                    >
                        <div className="bg-surface-light rounded-xl p-4 mb-4">
                            <p className="text-text-secondary leading-relaxed font-medium">
                                THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER
                                EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
                                FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                            </p>
                        </div>
                        <p className="text-text-secondary leading-relaxed">
                            We do not warrant that the Service will be uninterrupted, error-free, secure, or free from viruses
                            or other harmful components. We do not guarantee the accuracy, completeness, or reliability of any
                            QR codes generated through the Service.
                        </p>
                    </TermsSection>

                    {/* Limitation of Liability */}
                    <TermsSection
                        icon={<Scale className="w-5 h-5 text-primary" />}
                        title="8. Limitation of Liability"
                    >
                        <div className="bg-surface-light rounded-xl p-4 mb-4">
                            <p className="text-text-secondary leading-relaxed font-medium">
                                TO THE MAXIMUM EXTENT PERMITTED BY LAW, ILOVEQR SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                                SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA,
                                USE, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE.
                            </p>
                        </div>
                        <p className="text-text-secondary leading-relaxed">
                            In no event shall our total liability exceed the amount you paid to us (if any) for using the
                            Service during the twelve (12) months preceding the claim.
                        </p>
                    </TermsSection>

                    {/* Indemnification */}
                    <TermsSection
                        icon={<Shield className="w-5 h-5 text-primary" />}
                        title="9. Indemnification"
                    >
                        <p className="text-text-secondary leading-relaxed">
                            You agree to indemnify, defend, and hold harmless iLoveQR and its officers, directors, employees,
                            agents, and affiliates from and against any claims, liabilities, damages, losses, costs, or expenses
                            (including reasonable attorneys&apos; fees) arising out of or related to: (a) your use of the Service;
                            (b) your violation of these Terms; (c) your violation of any third-party rights; or (d) any content
                            you create using the Service.
                        </p>
                    </TermsSection>

                    {/* Third-Party Services */}
                    <TermsSection
                        icon={<Globe className="w-5 h-5 text-primary" />}
                        title="10. Third-Party Services and Advertising"
                    >
                        <p className="text-text-secondary leading-relaxed mb-3">
                            The Service may contain links to third-party websites or services, and may display advertisements
                            from third-party advertising partners, including Google AdSense. We are not responsible for the
                            content, privacy practices, or terms of service of any third-party sites or services.
                        </p>
                        <p className="text-text-secondary leading-relaxed">
                            Your interactions with third-party advertisers or the purchase of goods or services from advertisers
                            are solely between you and the third party. We disclaim all liability arising from such interactions.
                        </p>
                    </TermsSection>

                    {/* Termination */}
                    <TermsSection
                        icon={<Ban className="w-5 h-5 text-primary" />}
                        title="11. Termination"
                    >
                        <p className="text-text-secondary leading-relaxed mb-3">
                            We reserve the right to terminate or suspend your access to the Service immediately, without prior
                            notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.
                        </p>
                        <p className="text-text-secondary leading-relaxed">
                            Upon termination, your right to use the Service will immediately cease. All provisions of these Terms
                            which by their nature should survive termination shall survive, including ownership provisions,
                            warranty disclaimers, indemnity, and limitations of liability.
                        </p>
                    </TermsSection>

                    {/* Governing Law */}
                    <TermsSection
                        icon={<Gavel className="w-5 h-5 text-primary" />}
                        title="12. Governing Law and Dispute Resolution"
                    >
                        <p className="text-text-secondary leading-relaxed mb-3">
                            These Terms shall be governed by and construed in accordance with applicable laws, without regard
                            to conflict of law principles.
                        </p>
                        <p className="text-text-secondary leading-relaxed">
                            Any disputes arising out of or relating to these Terms or the Service shall first be attempted to
                            be resolved through good-faith negotiation. If negotiation fails, disputes shall be resolved through
                            binding arbitration or in the courts of competent jurisdiction.
                        </p>
                    </TermsSection>

                    {/* Changes to Terms */}
                    <TermsSection
                        icon={<Clock className="w-5 h-5 text-primary" />}
                        title="13. Changes to Terms"
                    >
                        <p className="text-text-secondary leading-relaxed">
                            We reserve the right to modify or replace these Terms at any time at our sole discretion. If a
                            revision is material, we will provide at least 30 days&apos; notice prior to any new terms taking effect
                            by posting a notice on our website. What constitutes a material change will be determined at our
                            sole discretion. Your continued use of the Service after any changes constitutes acceptance of the
                            new Terms.
                        </p>
                    </TermsSection>

                    {/* Severability */}
                    <TermsSection
                        icon={<FileText className="w-5 h-5 text-primary" />}
                        title="14. Severability"
                    >
                        <p className="text-text-secondary leading-relaxed">
                            If any provision of these Terms is held to be invalid, illegal, or unenforceable by a court of
                            competent jurisdiction, such provision shall be modified to the minimum extent necessary to make it
                            valid and enforceable, or if modification is not possible, shall be severed from these Terms. The
                            remaining provisions shall continue in full force and effect.
                        </p>
                    </TermsSection>

                    {/* Entire Agreement */}
                    <TermsSection
                        icon={<FileText className="w-5 h-5 text-primary" />}
                        title="15. Entire Agreement"
                    >
                        <p className="text-text-secondary leading-relaxed">
                            These Terms, together with our Privacy Policy, constitute the entire agreement between you and
                            iLoveQR regarding the Service and supersede all prior agreements, understandings, and communications,
                            whether written or oral.
                        </p>
                    </TermsSection>

                    {/* Contact */}
                    <TermsSection
                        icon={<Mail className="w-5 h-5 text-primary" />}
                        title="16. Contact Us"
                    >
                        <p className="text-text-secondary leading-relaxed mb-4">
                            If you have any questions about these Terms of Service, please contact us:
                        </p>
                        <div className="bg-surface-light rounded-xl p-4">
                            <p className="text-text-primary font-medium">iLoveQR</p>
                            <p className="text-text-secondary">Email: <a href="mailto:legal@iloveqr.com" className="text-primary hover:underline">legal@iloveqr.com</a></p>
                        </div>
                    </TermsSection>

                    {/* Effective Date */}
                    <div className="pt-6 border-t border-border">
                        <p className="text-text-muted text-sm text-center">
                            These Terms of Service are effective as of {effectiveDate}.
                        </p>
                    </div>

                </div>
            </section>
        </div>
    );
}

// Helper Components
function TermsSection({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
    return (
        <div>
            <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    {icon}
                </div>
                <h2 className="text-xl font-bold text-text-primary">{title}</h2>
            </div>
            <div className="ml-[52px]">
                {children}
            </div>
        </div>
    );
}

function ProhibitedItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
            <Ban className="w-4 h-4 text-red-400 shrink-0" />
            <p className="text-text-secondary text-sm">{text}</p>
        </div>
    );
}
