'use client';

import { useState, useCallback, useEffect } from 'react';
import { X, RefreshCw, Check } from 'lucide-react';
import { QRType, QRData, QRDesign, QRStyleMode, defaultQRDesign } from '@/types/qr';
import { generateQRContent } from '@/lib/qr-utils';
import QRTypeTabBar from '@/components/qr/QRTypeTabBar';
import QRDataInput from '@/components/qr/QRDataInput';
import QRStyleSelector from '@/components/qr/QRStyleSelector';
import QRDesignOptions from '@/components/qr/QRDesignOptions';
import QRPreviewPanel from '@/components/qr/QRPreviewPanel';
import AdSlot from '@/components/ads/AdSlot';

// Map QR type to display title
const qrTypeTitles: Record<QRType, string> = {
  url: 'Website URL',
  text: 'Plain Text',
  email: 'Email',
  phone: 'Phone Call',
  sms: 'SMS Message',
  wifi: 'WiFi Network',
  pdf: 'PDF Document',
};

interface QRGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDesign?: Partial<QRDesign>;
}

export default function QRGeneratorModal({ isOpen, onClose, initialDesign }: QRGeneratorModalProps) {
  // State
  const [qrType, setQrType] = useState<QRType>('url');
  const [qrData, setQrData] = useState<QRData>({ type: 'url', url: '' });
  const [qrDesign, setQrDesign] = useState<QRDesign>(() => ({
    ...defaultQRDesign,
    ...initialDesign,
  }));
  const [qrCodeInstance, setQrCodeInstance] = useState<unknown>(null);
  const [selectedStyle, setSelectedStyle] = useState<QRStyleMode>('custom');
  const [draftSaved, setDraftSaved] = useState(false);

  // Update design when initialDesign changes
  useEffect(() => {
    if (initialDesign && isOpen) {
      setQrDesign((prev) => ({
        ...prev,
        ...initialDesign,
      }));
    }
  }, [initialDesign, isOpen]);

  // Auto-save draft indicator
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setDraftSaved(true);
        setTimeout(() => setDraftSaved(false), 2000);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [qrData, qrDesign, selectedStyle, isOpen]);

  // Handlers
  const handleTypeChange = (type: QRType) => {
    setQrType(type);
    setQrData({ type });
  };

  const handleDataChange = (data: Partial<QRData>) => {
    setQrData((prev) => ({ ...prev, ...data }));
  };

  const handleDesignChange = (design: Partial<QRDesign>) => {
    setQrDesign((prev) => ({ ...prev, ...design }));
  };

  const handleStyleChange = (style: QRStyleMode) => {
    setSelectedStyle(style);
    // Clear background image when switching to custom mode
    if (style === 'custom') {
      setQrDesign((prev) => ({ ...prev, backgroundImage: undefined }));
    }
  };

  const handleBackgroundImageChange = (image: string | undefined) => {
    setQrDesign((prev) => ({ ...prev, backgroundImage: image }));
  };

  const handleBackgroundImageOpacityChange = (opacity: number) => {
    setQrDesign((prev) => ({ ...prev, backgroundImageOpacity: opacity }));
  };

  const handleBackgroundImageZoomChange = (zoom: number) => {
    setQrDesign((prev) => ({ ...prev, backgroundImageZoom: zoom }));
  };

  const handleQRReady = useCallback((qr: unknown) => {
    setQrCodeInstance(qr);
  }, []);

  // Generate QR content
  const qrContent = generateQRContent(qrData);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-[1600px] h-[90vh] max-h-[900px] bg-background border border-border rounded-2xl overflow-hidden flex flex-col shadow-2xl animate-fade-in">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0 bg-surface-light/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-full h-full bg-primary rounded-sm" />
                ))}
              </div>
            </div>
            <h2 className="text-lg font-semibold text-text-primary">New QR Code</h2>
          </div>

          <div className="flex items-center gap-4">
            {/* Draft Saved Indicator */}
            {draftSaved && (
              <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/20 rounded-lg animate-fade-in">
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-sm text-green-500 font-medium">Draft Saved</span>
              </div>
            )}
            
            {/* Refresh Button */}
            <button
              onClick={() => {
                setDraftSaved(true);
                setTimeout(() => setDraftSaved(false), 2000);
              }}
              className="w-9 h-9 rounded-lg bg-surface hover:bg-surface-lighter flex items-center justify-center transition-colors"
              title="Refresh"
            >
              <RefreshCw className="w-4 h-4 text-text-secondary" />
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-lg bg-surface hover:bg-surface-lighter flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-text-primary" />
            </button>
          </div>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="flex-1 overflow-hidden flex">
          {/* Left Column - Scrollable Steps */}
          <div className="flex-1 overflow-y-auto overflow-x-hidden">
            <div className="p-6 space-y-6">
              {/* QR Type Tab Bar */}
              <QRTypeTabBar selectedType={qrType} onTypeChange={handleTypeChange} />

              {/* Step 1: Make QR Code */}
              <StepCard 
                number={1} 
                title={`Make QR Code from ${qrTypeTitles[qrType]}`} 
                subtitle="Enter the data you want to encode"
              >
                <QRDataInput 
                  type={qrType} 
                  data={qrData} 
                  onChange={handleDataChange} 
                />
              </StepCard>

              {/* Step 2: Choose Style */}
              <StepCard 
                number={2} 
                title="Choose Your QR Code Style" 
                subtitle="Pick between Branded Designs or Embedded Images"
              >
                <QRStyleSelector 
                  selectedStyle={selectedStyle}
                  onStyleChange={handleStyleChange}
                  backgroundImage={qrDesign.backgroundImage}
                  backgroundImageOpacity={qrDesign.backgroundImageOpacity}
                  backgroundImageZoom={qrDesign.backgroundImageZoom}
                  onBackgroundImageChange={handleBackgroundImageChange}
                  onBackgroundImageOpacityChange={handleBackgroundImageOpacityChange}
                  onBackgroundImageZoomChange={handleBackgroundImageZoomChange}
                />
              </StepCard>

              {/* Ad Slot - Between Step 2 and 3 */}
              <AdSlot position="between-steps" className="w-full" minHeight={100} />

              {/* Step 3: Design QR Code */}
              <StepCard 
                number={3} 
                title="Design Your QR Code" 
                subtitle="Change the look of your QR Code: Colors, Shapes, Images, Logo & more."
              >
                <QRDesignOptions 
                  design={qrDesign} 
                  onChange={handleDesignChange}
                  selectedStyle={selectedStyle}
                />
              </StepCard>
            </div>
          </div>

          {/* Right Column - Fixed QR Preview */}
          <div className="w-[420px] border-l border-border bg-surface-light/30 flex flex-col shrink-0">
            <div className="flex-1 overflow-y-auto p-6">
              <div className="sticky top-6">
                <QRPreviewPanel
                  content={qrContent}
                  design={qrDesign}
                  styleMode={selectedStyle}
                  onQRReady={handleQRReady}
                  qrCodeInstance={qrCodeInstance}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Step Card Component
interface StepCardProps {
  number: number;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

function StepCard({ number, title, subtitle, children }: StepCardProps) {
  return (
    <div className="bg-surface border border-border rounded-2xl overflow-hidden">
      <div className="p-6">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg shrink-0">
            {number}
          </div>
          <div>
            <h2 className="text-lg font-semibold text-text-primary">
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm text-text-secondary mt-0.5">
                {subtitle}
              </p>
            )}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
