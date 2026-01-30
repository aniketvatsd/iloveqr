'use client';

import { Shield, Cookie, Eye, Database, Globe, Mail, Clock, Users, FileText } from 'lucide-react';

export default function PrivacyPolicyPage() {
    const lastUpdated = 'January 31, 2026';

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-16 md:py-24">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
                        <Shield className="w-4 h-4 text-primary" />
                        <span className="text-sm text-primary font-medium">Your Privacy Matters</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-text-secondary text-lg">
                        Last updated: {lastUpdated}
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="bg-surface border border-border rounded-2xl p-6 md:p-10 space-y-10">

                    {/* Introduction */}
                    <div>
                        <p className="text-text-secondary leading-relaxed">
                            At iLoveQR (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), we are committed to protecting your privacy and ensuring
                            transparency in how we handle your information. This Privacy Policy explains how we collect, use,
                            disclose, and safeguard your information when you use our QR code generator service at iloveqr.com
                            (the &quot;Service&quot;). Please read this policy carefully. By using our Service, you consent to the practices
                            described in this Privacy Policy.
                        </p>
                    </div>

                    {/* Data Controller */}
                    <PolicySection
                        icon={<Users className="w-5 h-5 text-primary" />}
                        title="1. Data Controller"
                    >
                        <p className="text-text-secondary leading-relaxed">
                            iLoveQR is the data controller responsible for your personal data. If you have any questions about
                            this Privacy Policy or our data practices, please contact us at <a href="mailto:privacy@iloveqr.com"
                                className="text-primary hover:underline">privacy@iloveqr.com</a>.
                        </p>
                    </PolicySection>

                    {/* Information We Collect */}
                    <PolicySection
                        icon={<Database className="w-5 h-5 text-primary" />}
                        title="2. Information We Collect"
                    >
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-text-primary mb-2">2.1 Information You Provide</h4>
                                <p className="text-text-secondary leading-relaxed">
                                    When you use our QR code generator, you may input data such as URLs, text, email addresses,
                                    phone numbers, or WiFi credentials. <strong className="text-text-primary">This data is processed
                                        entirely in your browser and is not transmitted to or stored on our servers.</strong> Your QR
                                    code content remains completely private.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-text-primary mb-2">2.2 Automatically Collected Information</h4>
                                <p className="text-text-secondary leading-relaxed mb-3">
                                    When you access our Service, we may automatically collect certain information, including:
                                </p>
                                <ul className="list-disc list-inside text-text-secondary space-y-1 ml-4">
                                    <li>IP address and approximate geographic location</li>
                                    <li>Browser type, version, and language preferences</li>
                                    <li>Device type, operating system, and screen resolution</li>
                                    <li>Pages visited, time spent on pages, and referral URLs</li>
                                    <li>Date and time of access</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-text-primary mb-2">2.3 Cookies and Tracking Technologies</h4>
                                <p className="text-text-secondary leading-relaxed">
                                    We use cookies and similar tracking technologies to enhance your experience and analyze usage
                                    patterns. See Section 6 for detailed information about our cookie practices.
                                </p>
                            </div>
                        </div>
                    </PolicySection>

                    {/* How We Use Information */}
                    <PolicySection
                        icon={<Eye className="w-5 h-5 text-primary" />}
                        title="3. How We Use Your Information"
                    >
                        <p className="text-text-secondary leading-relaxed mb-3">
                            We use the automatically collected information for the following purposes:
                        </p>
                        <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                            <li>To provide, maintain, and improve our Service</li>
                            <li>To analyze usage trends and optimize user experience</li>
                            <li>To detect and prevent technical issues and security threats</li>
                            <li>To display relevant advertisements through third-party advertising partners</li>
                            <li>To comply with legal obligations</li>
                        </ul>
                    </PolicySection>

                    {/* Advertising */}
                    <PolicySection
                        icon={<Globe className="w-5 h-5 text-primary" />}
                        title="4. Advertising and Third-Party Services"
                    >
                        <div className="space-y-4">
                            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4">
                                <p className="text-text-secondary leading-relaxed">
                                    <strong className="text-yellow-500">Important:</strong> We use third-party advertising companies,
                                    including Google AdSense, to serve ads when you visit our website. These companies may use
                                    information about your visits to this and other websites to provide relevant advertisements.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-text-primary mb-2">4.1 Google AdSense and DoubleClick</h4>
                                <p className="text-text-secondary leading-relaxed mb-3">
                                    Google, as a third-party vendor, uses cookies to serve ads on our site. Google&apos;s use of the
                                    DoubleClick cookie enables it and its partners to serve ads based on your visit to our site
                                    and/or other sites on the Internet.
                                </p>
                                <p className="text-text-secondary leading-relaxed">
                                    You may opt out of personalized advertising by visiting{' '}
                                    <a
                                        href="https://www.google.com/settings/ads"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:underline"
                                    >
                                        Google Ads Settings
                                    </a>.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-text-primary mb-2">4.2 Other Advertising Partners</h4>
                                <p className="text-text-secondary leading-relaxed mb-3">
                                    Some of our advertising partners may use cookies and web beacons on our site. These third-party
                                    ad servers or ad networks use technologies to send advertisements directly to your browser.
                                    They automatically receive your IP address when this occurs.
                                </p>
                                <p className="text-text-secondary leading-relaxed">
                                    You can opt out of interest-based advertising from participating companies through the{' '}
                                    <a
                                        href="https://optout.networkadvertising.org/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:underline"
                                    >
                                        Network Advertising Initiative opt-out page
                                    </a>{' '}
                                    or the{' '}
                                    <a
                                        href="https://optout.aboutads.info/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:underline"
                                    >
                                        Digital Advertising Alliance opt-out page
                                    </a>.
                                </p>
                            </div>
                        </div>
                    </PolicySection>

                    {/* Legal Basis (GDPR) */}
                    <PolicySection
                        icon={<FileText className="w-5 h-5 text-primary" />}
                        title="5. Legal Basis for Processing (GDPR)"
                    >
                        <p className="text-text-secondary leading-relaxed mb-3">
                            If you are located in the European Economic Area (EEA), we process your personal data based on the following legal grounds:
                        </p>
                        <ul className="list-disc list-inside text-text-secondary space-y-2 ml-4">
                            <li><strong className="text-text-primary">Consent:</strong> Where you have given clear consent for us to process your personal data for a specific purpose</li>
                            <li><strong className="text-text-primary">Legitimate Interests:</strong> To operate and improve our Service, provided our interests are not overridden by your rights</li>
                            <li><strong className="text-text-primary">Legal Obligations:</strong> To comply with applicable laws and regulations</li>
                        </ul>
                    </PolicySection>

                    {/* Cookies */}
                    <PolicySection
                        icon={<Cookie className="w-5 h-5 text-primary" />}
                        title="6. Cookie Policy"
                    >
                        <div className="space-y-4">
                            <p className="text-text-secondary leading-relaxed">
                                Cookies are small text files stored on your device that help us provide and improve our Service.
                                We use the following types of cookies:
                            </p>

                            <div className="grid gap-4">
                                <CookieType
                                    name="Essential Cookies"
                                    description="Required for the website to function properly. These cannot be disabled."
                                />
                                <CookieType
                                    name="Analytics Cookies"
                                    description="Help us understand how visitors interact with our website, allowing us to improve user experience."
                                />
                                <CookieType
                                    name="Advertising Cookies"
                                    description="Used to deliver relevant advertisements and track ad campaign performance."
                                />
                                <CookieType
                                    name="Preference Cookies"
                                    description="Remember your settings and preferences for a better experience."
                                />
                            </div>

                            <div className="bg-surface-light rounded-xl p-4">
                                <h4 className="font-semibold text-text-primary mb-2">Managing Cookies</h4>
                                <p className="text-text-secondary leading-relaxed">
                                    You can control and/or delete cookies through your browser settings. You can delete all cookies
                                    that are already on your computer and set most browsers to prevent them from being placed.
                                    However, if you do this, you may have to manually adjust some preferences every time you visit
                                    our site, and some features may not work as intended.
                                </p>
                            </div>
                        </div>
                    </PolicySection>

                    {/* Your Rights (GDPR) */}
                    <PolicySection
                        icon={<Shield className="w-5 h-5 text-primary" />}
                        title="7. Your Rights (GDPR)"
                    >
                        <p className="text-text-secondary leading-relaxed mb-4">
                            If you are located in the European Economic Area (EEA), you have certain data protection rights under
                            the General Data Protection Regulation (GDPR). These include:
                        </p>
                        <div className="grid gap-3">
                            <RightItem
                                title="Right to Access"
                                description="Request a copy of the personal data we hold about you"
                            />
                            <RightItem
                                title="Right to Rectification"
                                description="Request correction of inaccurate personal data"
                            />
                            <RightItem
                                title="Right to Erasure"
                                description="Request deletion of your personal data under certain conditions"
                            />
                            <RightItem
                                title="Right to Restriction"
                                description="Request restriction of processing of your personal data"
                            />
                            <RightItem
                                title="Right to Data Portability"
                                description="Request transfer of your data to another organization"
                            />
                            <RightItem
                                title="Right to Object"
                                description="Object to processing of your personal data for direct marketing"
                            />
                            <RightItem
                                title="Right to Withdraw Consent"
                                description="Withdraw consent at any time where processing is based on consent"
                            />
                        </div>
                        <p className="text-text-secondary leading-relaxed mt-4">
                            To exercise any of these rights, please contact us at{' '}
                            <a href="mailto:privacy@iloveqr.com" className="text-primary hover:underline">
                                privacy@iloveqr.com
                            </a>. You also have the right to lodge a complaint with a supervisory authority.
                        </p>
                    </PolicySection>

                    {/* Data Retention */}
                    <PolicySection
                        icon={<Clock className="w-5 h-5 text-primary" />}
                        title="8. Data Retention"
                    >
                        <p className="text-text-secondary leading-relaxed">
                            We retain automatically collected data (such as analytics data) for a period of up to 26 months.
                            After this period, the data is automatically deleted or anonymized. We do not retain any QR code
                            content you create, as this data is processed entirely in your browser.
                        </p>
                    </PolicySection>

                    {/* Data Security */}
                    <PolicySection
                        icon={<Shield className="w-5 h-5 text-primary" />}
                        title="9. Data Security"
                    >
                        <p className="text-text-secondary leading-relaxed">
                            We implement appropriate technical and organizational measures to protect your personal data against
                            unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over
                            the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    </PolicySection>

                    {/* International Transfers */}
                    <PolicySection
                        icon={<Globe className="w-5 h-5 text-primary" />}
                        title="10. International Data Transfers"
                    >
                        <p className="text-text-secondary leading-relaxed">
                            Your information may be transferred to and processed in countries other than your own. These countries
                            may have different data protection laws. When we transfer your data internationally, we take steps to
                            ensure that appropriate safeguards are in place to protect your personal data, including Standard
                            Contractual Clauses approved by the European Commission.
                        </p>
                    </PolicySection>

                    {/* Children's Privacy */}
                    <PolicySection
                        icon={<Users className="w-5 h-5 text-primary" />}
                        title="11. Children's Privacy"
                    >
                        <p className="text-text-secondary leading-relaxed">
                            Our Service is not directed to individuals under the age of 16. We do not knowingly collect personal
                            data from children. If you become aware that a child has provided us with personal data, please
                            contact us, and we will take steps to delete such information.
                        </p>
                    </PolicySection>

                    {/* Changes */}
                    <PolicySection
                        icon={<FileText className="w-5 h-5 text-primary" />}
                        title="12. Changes to This Privacy Policy"
                    >
                        <p className="text-text-secondary leading-relaxed">
                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                            the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review
                            this Privacy Policy periodically for any changes. Changes are effective when posted on this page.
                        </p>
                    </PolicySection>

                    {/* Contact */}
                    <PolicySection
                        icon={<Mail className="w-5 h-5 text-primary" />}
                        title="13. Contact Us"
                    >
                        <p className="text-text-secondary leading-relaxed mb-4">
                            If you have any questions about this Privacy Policy or our data practices, please contact us:
                        </p>
                        <div className="bg-surface-light rounded-xl p-4">
                            <p className="text-text-primary font-medium">iLoveQR</p>
                            <p className="text-text-secondary">Email: <a href="mailto:privacy@iloveqr.com" className="text-primary hover:underline">privacy@iloveqr.com</a></p>
                        </div>
                    </PolicySection>

                </div>
            </section>
        </div>
    );
}

// Helper Components
function PolicySection({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
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

function CookieType({ name, description }: { name: string; description: string }) {
    return (
        <div className="flex items-start gap-3 p-3 bg-surface-light rounded-lg">
            <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
            <div>
                <p className="font-medium text-text-primary">{name}</p>
                <p className="text-sm text-text-secondary">{description}</p>
            </div>
        </div>
    );
}

function RightItem({ title, description }: { title: string; description: string }) {
    return (
        <div className="flex items-start gap-3 p-3 bg-surface-light rounded-lg">
            <Shield className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <div>
                <p className="font-medium text-text-primary">{title}</p>
                <p className="text-sm text-text-secondary">{description}</p>
            </div>
        </div>
    );
}
