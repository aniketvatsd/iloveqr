'use client';

import { useState } from 'react';
import Link from 'next/link';
import { QrCode, Zap, Shield, Download, ArrowRight, Link as LinkIcon, Type, Mail, Phone, MessageSquare, Wifi, FileText, Palette, Eye, Layers } from 'lucide-react';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import AdSlot from '@/components/ads/AdSlot';
import QRGeneratorModal from '@/components/qr/QRGeneratorModal';
import TemplatesModal from '@/components/qr/TemplatesModal';
import { defaultQRDesign, QRDesign } from '@/types/qr';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTemplatesModalOpen, setIsTemplatesModalOpen] = useState(false);
  const [selectedTemplateDesign, setSelectedTemplateDesign] = useState<Partial<QRDesign> | undefined>(undefined);
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-8">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Free QR Code Generator</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight">
              Create QR Codes{' '}
              <span className="text-gradient">Instantly</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10">
              Simple. Fast. Free. Generate custom QR codes for websites, text, emails, 
              WiFi, and more. No sign-up required.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button 
                size="lg" 
                className="min-w-[200px]"
                onClick={() => setIsModalOpen(true)}
              >
                <QrCode className="w-5 h-5" />
                Create QR Code
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="min-w-[200px]"
                onClick={() => setIsTemplatesModalOpen(true)}
              >
                View Templates
              </Button>
            </div>

            {/* Features mini */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-text-secondary">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-success" />
                <span className="text-sm">No watermarks</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="w-5 h-5 text-success" />
                <span className="text-sm">High-resolution</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-success" />
                <span className="text-sm">Instant generation</span>
              </div>
            </div>
          </div>

          {/* QR Preview */}
          <div className="mt-16 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
              <div className="relative bg-surface border border-border rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 inline-block">
                  <QrCode className="w-32 h-32 text-gray-900" strokeWidth={1} />
                </div>
                <p className="text-center text-text-muted text-sm mt-4">
                  Your QR code preview
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Slot */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AdSlot position="homepage-top" className="mx-auto" />
      </div>

      {/* QR Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Create Any Type of QR Code
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Generate QR codes for various purposes. Choose the type that fits your needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
            {[
              { icon: LinkIcon, label: 'Website URL', desc: 'Link to any webpage' },
              { icon: Type, label: 'Plain Text', desc: 'Any text content' },
              { icon: Mail, label: 'Email', desc: 'Pre-filled email' },
              { icon: Phone, label: 'Phone', desc: 'Direct call link' },
              { icon: MessageSquare, label: 'SMS', desc: 'Text message' },
              { icon: Wifi, label: 'WiFi', desc: 'Network credentials' },
              { icon: FileText, label: 'PDF', desc: 'Document link' },
            ].map((type) => (
              <button 
                key={type.label} 
                onClick={() => setIsModalOpen(true)}
                className="w-full text-left"
              >
                <Card 
                  variant="bordered"
                  padding="md"
                  hoverable
                  className="text-center group h-full"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <type.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-medium text-text-primary text-sm mb-1">
                    {type.label}
                  </h3>
                  <p className="text-xs text-text-muted">
                    {type.desc}
                  </p>
                </Card>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Everything You Need
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Professional QR code generation with all the features you expect, completely free.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Palette, title: 'Custom Design', desc: 'Customize colors, shapes, and add your logo to create unique QR codes.' },
              { icon: Download, title: 'Multiple Formats', desc: 'Download your QR codes in PNG, SVG, or JPG format.' },
              { icon: Shield, title: 'No Watermarks', desc: 'Generate clean, professional QR codes without any branding.' },
              { icon: Zap, title: 'Instant Generation', desc: 'Create QR codes in real-time as you type.' },
              { icon: Eye, title: 'Live Preview', desc: 'See your QR code update instantly as you customize it.' },
              { icon: Layers, title: 'Design Templates', desc: 'Start with pre-made templates for faster creation.' },
            ].map((feature) => (
              <Card 
                key={feature.title}
                variant="bordered"
                padding="lg"
                className="group hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-sm">
                  {feature.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-primary/10 via-surface to-accent/10 border border-border rounded-3xl p-8 md:p-16 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Ready to Create Your QR Code?
              </h2>
              <p className="text-text-secondary max-w-xl mx-auto mb-8">
                Start generating custom QR codes in seconds. No account required.
              </p>
              <Link href="/generator">
                <Button size="lg">
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Slot */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AdSlot position="homepage-bottom" className="mx-auto" />
      </div>

      {/* QR Generator Modal */}
      <QRGeneratorModal 
        isOpen={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false);
          setSelectedTemplateDesign(undefined);
        }}
        initialDesign={selectedTemplateDesign}
      />

      {/* Templates Modal */}
      <TemplatesModal
        isOpen={isTemplatesModalOpen}
        onClose={() => setIsTemplatesModalOpen(false)}
        onSelectTemplate={(design) => {
          setSelectedTemplateDesign(design);
          setIsTemplatesModalOpen(false);
          setIsModalOpen(true);
        }}
        currentDesign={defaultQRDesign}
      />
    </>
  );
}
