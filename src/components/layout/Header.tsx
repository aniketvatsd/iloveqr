'use client';

import Link from 'next/link';
import { useState } from 'react';
import { QrCode, ChevronDown, Menu, X } from 'lucide-react';
import QRGeneratorModal from '@/components/qr/QRGeneratorModal';
import TemplatesModal from '@/components/qr/TemplatesModal';
import { defaultQRDesign, QRDesign } from '@/types/qr';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTemplatesModalOpen, setIsTemplatesModalOpen] = useState(false);
  const [selectedTemplateDesign, setSelectedTemplateDesign] = useState<Partial<QRDesign> | undefined>(undefined);

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-1.5 bg-surface-light rounded-lg group-hover:bg-primary/20 transition-colors">
              <QrCode className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xl font-bold text-text-primary">
              iLove<span className="text-primary">QR</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 text-text-secondary hover:text-text-primary flex items-center gap-1.5 transition-colors"
            >
              QR Code Generator
              <ChevronDown className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setIsTemplatesModalOpen(true)}
              className="px-4 py-2 text-text-secondary hover:text-text-primary flex items-center gap-1.5 transition-colors"
            >
              QR Templates
              <ChevronDown className="w-4 h-4" />
            </button>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-2.5 bg-transparent border border-primary text-primary hover:bg-primary hover:text-white font-medium rounded-full transition-all"
            >
              Start Creating
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-text-secondary hover:text-text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-1">
              <button 
                onClick={() => {
                  setIsModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-surface-light rounded-lg transition-colors text-left"
              >
                QR Code Generator
              </button>
              <button 
                onClick={() => {
                  setIsTemplatesModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="px-4 py-3 text-text-secondary hover:text-text-primary hover:bg-surface-light rounded-lg transition-colors text-left"
              >
                QR Templates
              </button>
              <button 
                onClick={() => {
                  setIsModalOpen(true);
                  setMobileMenuOpen(false);
                }}
                className="mx-4 mt-4 py-3 bg-primary hover:bg-primary-hover text-white font-medium rounded-full text-center transition-colors"
              >
                Start Creating
              </button>
            </nav>
          </div>
        )}
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
    </header>
  );
}
