'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { QRDesign } from '@/types/qr';
import { HelpCircle } from 'lucide-react';

interface QRPreviewProps {
  content: string;
  design: QRDesign;
  onQRReady?: (qrCode: unknown) => void;
}

export default function QRPreview({ content, design, onQRReady }: QRPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const qrCodeRef = useRef<unknown>(null);
  const [scannability, setScannability] = useState<'high' | 'medium' | 'low'>('high');

  // Calculate scannability based on design choices
  const calculateScannability = useCallback(() => {
    let score = 100;

    // Check color contrast
    const fgColor = design.dotColor;
    const bgColor = design.backgroundColor;
    
    // Simple contrast check (lighter backgrounds with darker foregrounds are better)
    const isLightBg = bgColor.toLowerCase() === '#ffffff' || bgColor.toLowerCase() === '#fff';
    const isDarkFg = fgColor.toLowerCase() === '#000000' || fgColor.toLowerCase() === '#000';
    
    if (!isLightBg || !isDarkFg) {
      score -= 20;
    }

    // Logo size impact
    if (design.logo) {
      if (design.logoSize > 0.35) {
        score -= 30;
      } else if (design.logoSize > 0.25) {
        score -= 15;
      }
    }

    // Margin impact
    if (design.margin < 10) {
      score -= 10;
    }

    // Determine scannability level
    if (score >= 80) {
      setScannability('high');
    } else if (score >= 50) {
      setScannability('medium');
    } else {
      setScannability('low');
    }
  }, [design]);

  useEffect(() => {
    calculateScannability();
  }, [calculateScannability]);

  useEffect(() => {
    const generateQR = async () => {
      if (!containerRef.current) return;

      // Dynamically import qr-code-styling (client-side only)
      const QRCodeStyling = (await import('qr-code-styling')).default;

      // Clear previous QR
      containerRef.current.innerHTML = '';

      const qrCode = new QRCodeStyling({
        width: 280,
        height: 280,
        type: 'svg',
        data: content || 'https://example.com',
        dotsOptions: {
          color: design.dotColor,
          type: design.dotType,
        },
        backgroundOptions: {
          color: design.backgroundColor,
        },
        cornersSquareOptions: {
          color: design.cornerSquareColor,
          type: design.cornerSquareType,
        },
        cornersDotOptions: {
          color: design.cornerDotColor,
          type: design.cornerDotType,
        },
        imageOptions: {
          crossOrigin: 'anonymous',
          margin: 10,
          imageSize: design.logoSize,
        },
        image: design.logo || undefined,
        margin: design.margin,
        qrOptions: {
          errorCorrectionLevel: design.logo ? 'H' : 'M',
        },
      });

      qrCode.append(containerRef.current);
      qrCodeRef.current = qrCode;
      
      if (onQRReady) {
        onQRReady(qrCode);
      }
    };

    generateQR();
  }, [content, design, onQRReady]);

  const scannabilityColors = {
    high: 'bg-gradient-to-r from-red-500 via-yellow-500 to-green-500',
    medium: 'bg-gradient-to-r from-red-500 via-yellow-500 to-yellow-500',
    low: 'bg-gradient-to-r from-red-500 to-red-500',
  };

  const scannabilityPosition = {
    high: 'right-0',
    medium: 'right-1/3',
    low: 'right-2/3',
  };

  return (
    <div className="flex flex-col items-center">
      {/* QR Code Container */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div 
          ref={containerRef} 
          className="w-[280px] h-[280px] flex items-center justify-center"
        />
      </div>

      {/* Scannability Indicator */}
      <div className="mt-6 w-full max-w-[280px]">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1">
            <HelpCircle className="w-4 h-4 text-text-muted" />
            <span className="text-xs text-text-muted">Scannability</span>
          </div>
          <span className={`text-xs font-medium capitalize ${
            scannability === 'high' ? 'text-success' :
            scannability === 'medium' ? 'text-warning' : 'text-error'
          }`}>
            {scannability} Scannability
          </span>
        </div>
        <div className="relative h-2 rounded-full overflow-hidden bg-surface-lighter">
          <div className={`absolute inset-0 ${scannabilityColors[scannability]}`} />
          <div 
            className={`absolute top-0 bottom-0 w-1 bg-white shadow-lg transition-all duration-300 ${scannabilityPosition[scannability]}`}
          />
        </div>
      </div>
    </div>
  );
}
