'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { QRDesign, QRStyleMode } from '@/types/qr';
import { HelpCircle, Download, BarChart3, Image, FileCode, FileImage } from 'lucide-react';
import Button from '@/components/ui/Button';
import AdSlot from '@/components/ads/AdSlot';

interface QRPreviewPanelProps {
  content: string;
  design: QRDesign;
  styleMode: QRStyleMode;
  onQRReady?: (qrCode: unknown) => void;
  qrCodeInstance: unknown;
}

type DownloadFormat = 'png' | 'svg' | 'jpeg';

export default function QRPreviewPanel({
  content,
  design,
  styleMode,
  onQRReady,
  qrCodeInstance
}: QRPreviewPanelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const qrCodeRef = useRef<unknown>(null);
  const [scannability, setScannability] = useState<number>(95);
  const [downloading, setDownloading] = useState<DownloadFormat | null>(null);

  const hasBackgroundImage = styleMode === 'image' && design.backgroundImage;
  const hasTextOverlay = design.textOverlay.enabled && design.textOverlay.text;

  const calculateScannability = useCallback(() => {
    let score = 100;

    const fgHex = design.dotColor.replace('#', '');
    const bgHex = design.backgroundColor.replace('#', '');

    const fgLum = parseInt(fgHex, 16);
    const bgLum = parseInt(bgHex, 16);
    const contrast = Math.abs(fgLum - bgLum) / 16777215;

    if (contrast < 0.5) {
      score -= 20;
    } else if (contrast < 0.7) {
      score -= 10;
    }

    if (design.logo) {
      const imageSize = design.logoSize;
      if (imageSize > 0.4) {
        score -= 30;
      } else if (imageSize > 0.3) {
        score -= 15;
      } else if (imageSize > 0.2) {
        score -= 5;
      }
    }

    if (hasBackgroundImage) {
      const opacityPenalty = Math.floor((design.backgroundImageOpacity / 100) * 25);
      score -= opacityPenalty;
    }

    if (hasTextOverlay) {
      score -= 5;
    }

    if (design.margin < 5) {
      score -= 15;
    } else if (design.margin < 10) {
      score -= 5;
    }

    setScannability(Math.max(0, Math.min(100, score)));
  }, [design, hasBackgroundImage, hasTextOverlay]);

  useEffect(() => {
    calculateScannability();
  }, [calculateScannability]);

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

      qrCode.append(containerRef.current);
      qrCodeRef.current = qrCode;

      if (onQRReady) {
        onQRReady(qrCode);
      }
    };

    generateQR();
  }, [content, design, styleMode, hasBackgroundImage, onQRReady]);

  const handleDownload = async (format: DownloadFormat) => {
    if (!canvasContainerRef.current) return;

    setDownloading(format);

    try {
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

        if (hasTextOverlay && design.textOverlay.position === 'back') {
          drawTextOverlay(ctx, size);
        }

        const svgElement = containerRef.current?.querySelector('svg');
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

        if (hasTextOverlay && design.textOverlay.position === 'front') {
          drawTextOverlay(ctx, size);
        }

        const mimeType = format === 'jpeg' ? 'image/jpeg' : 'image/png';
        const dataUrl = canvas.toDataURL(mimeType, 0.95);
        const link = document.createElement('a');
        link.download = `iloveqr-${Date.now()}.${format === 'jpeg' ? 'jpg' : format}`;
        link.href = dataUrl;
        link.click();
      }
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setDownloading(null);
    }
  };

  const drawTextOverlay = (ctx: CanvasRenderingContext2D, size: number) => {
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
  };

  const getScannabilityInfo = () => {
    if (scannability >= 75) {
      return {
        level: 'high',
        label: 'High Scannability',
        color: 'text-green-400',
        bgColor: 'bg-green-500'
      };
    } else if (scannability >= 50) {
      return {
        level: 'medium',
        label: 'Medium Scannability',
        color: 'text-yellow-400',
        bgColor: 'bg-yellow-500'
      };
    } else {
      return {
        level: 'low',
        label: 'Low Scannability',
        color: 'text-red-400',
        bgColor: 'bg-red-500'
      };
    }
  };

  const scannabilityInfo = getScannabilityInfo();

  const textPreviewStyle = {
    fontFamily: `${design.textOverlay.font}, sans-serif`,
    fontSize: `${design.textOverlay.fontSize / 100 * 40}px`,
    fontWeight: design.textOverlay.fontWeight,
    color: design.textOverlay.color,
    letterSpacing: `${design.textOverlay.letterSpacing}px`,
  };

  return (
    <div className="space-y-4">
      <div className="bg-surface border border-border rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-border">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg shrink-0">
              4
            </div>
            <div>
              <h2 className="text-lg font-semibold text-text-primary">
                Preview & Download
              </h2>
              <p className="text-sm text-text-secondary">
                PNG, JPG, SVG or Apple Wallet
              </p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex justify-center mb-6">
            <div
              ref={canvasContainerRef}
              className="rounded-2xl overflow-hidden relative"
              style={{
                width: 280,
                height: 280,
                boxShadow: hasBackgroundImage ? '0 8px 32px rgba(0,0,0,0.3)' : 'none'
              }}
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

              {hasTextOverlay && design.textOverlay.position === 'back' && (
                <div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  style={textPreviewStyle}
                >
                  {design.textOverlay.text}
                </div>
              )}

              <div
                ref={containerRef}
                className="relative w-full h-full flex items-center justify-center"
                style={{
                  backgroundColor: hasBackgroundImage ? 'transparent' : design.backgroundColor,
                }}
              />

              {hasTextOverlay && design.textOverlay.position === 'front' && (
                <div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  style={textPreviewStyle}
                >
                  {design.textOverlay.text}
                </div>
              )}
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <button className="flex items-center gap-1.5 text-text-muted hover:text-text-secondary transition-colors">
                <HelpCircle className="w-4 h-4" />
              </button>
              <span className={`text-sm font-semibold ${scannabilityInfo.color}`}>
                {scannabilityInfo.label}
              </span>
            </div>

            <div className="relative h-3 rounded-full overflow-hidden bg-surface-lighter">
              <div className="absolute inset-0 flex">
                <div className="flex-1 bg-gradient-to-r from-red-500 to-red-400" />
                <div className="flex-1 bg-gradient-to-r from-red-400 to-orange-400" />
                <div className="flex-1 bg-gradient-to-r from-orange-400 to-yellow-400" />
                <div className="flex-1 bg-gradient-to-r from-yellow-400 to-lime-400" />
                <div className="flex-1 bg-gradient-to-r from-lime-400 to-green-500" />
              </div>

              <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 transition-all duration-500 ease-out"
                style={{ left: `${scannability}%` }}
              >
                <div className="w-5 h-5 rounded-full bg-white border-2 border-gray-300 shadow-lg flex items-center justify-center">
                  <div className={`w-2 h-2 rounded-full ${scannabilityInfo.bgColor}`} />
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-1.5 px-1">
              <span className="text-[10px] text-text-muted">Low</span>
              <span className="text-[10px] text-text-muted">High</span>
            </div>
          </div>

          <div className="space-y-3">
            <Button
              fullWidth
              size="lg"
              onClick={() => handleDownload('png')}
              loading={downloading === 'png'}
              className="shadow-glow"
            >
              <Download className="w-5 h-5" />
              Generate & Download QR Code
            </Button>

            <div className="grid grid-cols-3 gap-2">
              <Button
                variant="secondary"
                onClick={() => handleDownload('png')}
                loading={downloading === 'png'}
                className="text-xs"
              >
                <Image className="w-4 h-4" />
                PNG
              </Button>
              <Button
                variant="secondary"
                onClick={() => handleDownload('jpeg')}
                loading={downloading === 'jpeg'}
                className="text-xs"
              >
                <FileImage className="w-4 h-4" />
                JPG
              </Button>
              <Button
                variant="secondary"
                onClick={() => handleDownload('svg')}
                loading={downloading === 'svg'}
                className="text-xs"
                disabled={Boolean(hasBackgroundImage || hasTextOverlay)}
                title={hasBackgroundImage || hasTextOverlay ? 'SVG not available with images or text' : ''}
              >
                <FileCode className="w-4 h-4" />
                SVG
              </Button>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-border">
          <button className="w-full flex items-center justify-center gap-2 py-3 text-text-secondary hover:text-text-primary transition-colors">
            <span>Track Your QR Code</span>
            <BarChart3 className="w-5 h-5" />
          </button>
        </div>
      </div>

      <AdSlot position="preview-bottom" className="w-full" minHeight={250} />
    </div>
  );
}
