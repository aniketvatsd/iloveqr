'use client';

import { useState, useCallback } from 'react';
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

export default function GeneratorPage() {
  // State
  const [qrType, setQrType] = useState<QRType>('url');
  const [qrData, setQrData] = useState<QRData>({ type: 'url', url: '' });
  const [qrDesign, setQrDesign] = useState<QRDesign>(defaultQRDesign);
  const [qrCodeInstance, setQrCodeInstance] = useState<unknown>(null);
  const [selectedStyle, setSelectedStyle] = useState<QRStyleMode>('custom');

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

  return (
    <div className="min-h-screen bg-background">
      {/* Ad Slot - Below Navigation */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <AdSlot position="top-leaderboard" className="mx-auto" minHeight={90} />
        </div>
      </div>

      {/* QR Type Tab Bar */}
      <QRTypeTabBar selectedType={qrType} onTypeChange={handleTypeChange} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-[1fr,420px] gap-8">
          {/* Left Column - Steps */}
          <div className="space-y-6">
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

          {/* Right Column - Preview Panel */}
          <div className="lg:sticky lg:top-24 h-fit">
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
