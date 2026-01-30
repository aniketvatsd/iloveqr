'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
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
          <div className="flex-1 overflow-y-auto overflow-x-hidden pb-24 md:pb-0">
            <div className="p-4 md:p-6 space-y-4 md:space-y-6">
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

          {/* Right Column - Fixed QR Preview (Hidden on Mobile) */}
          <div className="hidden md:flex w-[420px] border-l border-border bg-surface-light/30 flex-col shrink-0">
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

        {/* Mobile Floating QR Preview */}
        <div className="md:hidden fixed bottom-20 right-4 z-50">
          <MobileQRPreview
            content={qrContent}
            design={qrDesign}
            styleMode={selectedStyle}
          />
        </div>

        {/* Mobile Bottom Action Bar */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 z-40">
          <MobileDownloadButton
            content={qrContent}
            design={qrDesign}
            styleMode={selectedStyle}
          />
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
      <div className="p-4 md:p-6">
        <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-base md:text-lg shrink-0">
            {number}
          </div>
          <div>
            <h2 className="text-base md:text-lg font-semibold text-text-primary">
              {title}
            </h2>
            {subtitle && (
              <p className="text-xs md:text-sm text-text-secondary mt-0.5">
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

// Mobile QR Preview Component - Floating mini preview
interface MobileQRPreviewProps {
  content: string;
  design: QRDesign;
  styleMode: QRStyleMode;
}

function MobileQRPreview({ content, design, styleMode }: MobileQRPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasBackgroundImage = styleMode === 'image' && design.backgroundImage;

  useEffect(() => {
    const generateQR = async () => {
      if (!containerRef.current) return;

      const QRCodeStyling = (await import('qr-code-styling')).default;

      containerRef.current.innerHTML = '';

      const bgColor = hasBackgroundImage ? 'transparent' : design.backgroundColor;
      const dotColor = hasBackgroundImage ? '#ffffff' : design.dotColor;
      const cornerColor = hasBackgroundImage ? '#ffffff' : design.cornerSquareColor;
      const cornerDotColor = hasBackgroundImage ? '#ffffff' : design.cornerDotColor;

      const qrCode = new QRCodeStyling({
        width: 100,
        height: 100,
        type: 'svg',
        data: content || 'https://example.com',
        dotsOptions: {
          color: dotColor,
          type: hasBackgroundImage ? 'dots' : design.dotType,
        },
        backgroundOptions: {
          color: bgColor,
        },
        cornersSquareOptions: {
          color: cornerColor,
          type: design.cornerSquareType,
        },
        cornersDotOptions: {
          color: cornerDotColor,
          type: design.cornerDotType,
        },
        imageOptions: {
          crossOrigin: 'anonymous',
          margin: 5,
          imageSize: design.logoSize,
          hideBackgroundDots: true,
        },
        image: design.logo || undefined,
        margin: 5,
        qrOptions: {
          errorCorrectionLevel: 'H',
        },
      });

      qrCode.append(containerRef.current);
    };

    generateQR();
  }, [content, design, styleMode, hasBackgroundImage]);

  return (
    <div className="bg-surface border border-border rounded-xl shadow-xl overflow-hidden">
      <div
        className="relative w-[100px] h-[100px]"
      >
        {hasBackgroundImage && (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${design.backgroundImage})`,
              backgroundSize: `${design.backgroundImageZoom}%`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: design.backgroundImageOpacity / 100,
            }}
          />
        )}
        <div
          ref={containerRef}
          className="relative w-full h-full flex items-center justify-center"
          style={{
            backgroundColor: hasBackgroundImage ? 'transparent' : design.backgroundColor,
          }}
        />
      </div>
      {/* Scannability indicator bar */}
      <div className="h-1.5 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500" />
    </div>
  );
}

// Mobile Download Button Component
interface MobileDownloadButtonProps {
  content: string;
  design: QRDesign;
  styleMode: QRStyleMode;
}

function MobileDownloadButton({ content, design, styleMode }: MobileDownloadButtonProps) {
  const [downloading, setDownloading] = useState(false);
  const hasBackgroundImage = styleMode === 'image' && design.backgroundImage;
  const hasTextOverlay = design.textOverlay.enabled && design.textOverlay.text;

  const handleDownload = async () => {
    setDownloading(true);

    try {
      // Create a temporary container for the QR code
      const tempContainer = document.createElement('div');
      document.body.appendChild(tempContainer);

      const QRCodeStyling = (await import('qr-code-styling')).default;

      const bgColor = hasBackgroundImage ? 'transparent' : design.backgroundColor;
      const dotColor = hasBackgroundImage ? '#ffffff' : design.dotColor;
      const cornerColor = hasBackgroundImage ? '#ffffff' : design.cornerSquareColor;
      const cornerDotColor = hasBackgroundImage ? '#ffffff' : design.cornerDotColor;

      const qrCode = new QRCodeStyling({
        width: 280,
        height: 280,
        type: 'svg',
        data: content || 'https://example.com',
        dotsOptions: {
          color: dotColor,
          type: hasBackgroundImage ? 'dots' : design.dotType,
        },
        backgroundOptions: {
          color: bgColor,
        },
        cornersSquareOptions: {
          color: cornerColor,
          type: design.cornerSquareType,
        },
        cornersDotOptions: {
          color: cornerDotColor,
          type: design.cornerDotType,
        },
        imageOptions: {
          crossOrigin: 'anonymous',
          margin: 10,
          imageSize: design.logoSize,
          hideBackgroundDots: true,
        },
        image: design.logo || undefined,
        margin: design.margin,
        qrOptions: {
          errorCorrectionLevel: 'H',
        },
      });

      qrCode.append(tempContainer);

      // Wait for QR to render
      await new Promise(resolve => setTimeout(resolve, 100));

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const size = 1000;
      canvas.width = size;
      canvas.height = size;

      if (ctx) {
        if (hasBackgroundImage && design.backgroundImage) {
          const bgImg = new window.Image();
          bgImg.crossOrigin = 'anonymous';

          await new Promise<void>((resolve, reject) => {
            bgImg.onload = () => {
              const zoom = design.backgroundImageZoom / 100;
              const imgWidth = size * zoom;
              const imgHeight = size * zoom;
              const offsetX = (size - imgWidth) / 2;
              const offsetY = (size - imgHeight) / 2;

              ctx.globalAlpha = design.backgroundImageOpacity / 100;
              ctx.drawImage(bgImg, offsetX, offsetY, imgWidth, imgHeight);
              ctx.globalAlpha = 1;
              resolve();
            };
            bgImg.onerror = reject;
            bgImg.src = design.backgroundImage!;
          });
        } else {
          ctx.fillStyle = design.backgroundColor;
          ctx.fillRect(0, 0, size, size);
        }

        // Draw text overlay if enabled (back position)
        if (hasTextOverlay && design.textOverlay.position === 'back') {
          drawTextOverlay(ctx, size, design);
        }

        const svgElement = tempContainer.querySelector('svg');
        if (svgElement) {
          const svgData = new XMLSerializer().serializeToString(svgElement);
          const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
          const svgUrl = URL.createObjectURL(svgBlob);

          const qrImg = new window.Image();
          await new Promise<void>((resolve, reject) => {
            qrImg.onload = () => {
              ctx.drawImage(qrImg, 0, 0, size, size);
              URL.revokeObjectURL(svgUrl);
              resolve();
            };
            qrImg.onerror = reject;
            qrImg.src = svgUrl;
          });
        }

        // Draw text overlay if enabled (front position)
        if (hasTextOverlay && design.textOverlay.position === 'front') {
          drawTextOverlay(ctx, size, design);
        }

        const dataUrl = canvas.toDataURL('image/png', 0.95);
        const link = document.createElement('a');
        link.download = `iloveqr-${Date.now()}.png`;
        link.href = dataUrl;
        link.click();
      }

      // Clean up
      document.body.removeChild(tempContainer);
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={downloading}
      className="w-full py-3 px-6 bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors shadow-glow"
    >
      {downloading ? (
        <>
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          Creating...
        </>
      ) : (
        <>
          Create
          <Check className="w-5 h-5" />
        </>
      )}
    </button>
  );
}

// Helper function for drawing text overlay
function drawTextOverlay(ctx: CanvasRenderingContext2D, size: number, design: QRDesign) {
  const { text, font, fontSize, fontWeight, color, letterSpacing } = design.textOverlay;

  const scaledFontSize = (fontSize / 100) * (size * 0.15);

  ctx.save();
  ctx.fillStyle = color;
  ctx.font = `${fontWeight} ${scaledFontSize}px ${font}, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  if (letterSpacing > 0) {
    const chars = text.split('');
    const totalWidth = chars.reduce((acc, char) => acc + ctx.measureText(char).width + letterSpacing * (size / 280), 0) - letterSpacing * (size / 280);
    let x = (size - totalWidth) / 2;
    const y = size / 2;

    chars.forEach((char) => {
      ctx.fillText(char, x + ctx.measureText(char).width / 2, y);
      x += ctx.measureText(char).width + letterSpacing * (size / 280);
    });
  } else {
    ctx.fillText(text, size / 2, size / 2);
  }

  ctx.restore();
}
