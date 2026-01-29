'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';
import { Download, Image, FileCode, FileImage } from 'lucide-react';

interface QRDownloadProps {
  qrCode: unknown;
  disabled?: boolean;
}

type DownloadFormat = 'png' | 'svg' | 'jpeg';

export default function QRDownload({ qrCode, disabled }: QRDownloadProps) {
  const [downloading, setDownloading] = useState<DownloadFormat | null>(null);

  const handleDownload = async (format: DownloadFormat) => {
    if (!qrCode || disabled) return;

    setDownloading(format);

    try {
      const qr = qrCode as {
        download: (options: { extension: string; name: string }) => Promise<void>;
      };

      await qr.download({
        extension: format,
        name: `iloveqr-${Date.now()}`,
      });
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setDownloading(null);
    }
  };

  const formats: { format: DownloadFormat; label: string; icon: React.ReactNode }[] = [
    { format: 'png', label: 'PNG', icon: <Image className="w-4 h-4" /> },
    { format: 'svg', label: 'SVG', icon: <FileCode className="w-4 h-4" /> },
    { format: 'jpeg', label: 'JPG', icon: <FileImage className="w-4 h-4" /> },
  ];

  return (
    <div className="space-y-3">
      {/* Main download button */}
      <Button
        fullWidth
        size="lg"
        onClick={() => handleDownload('png')}
        disabled={disabled}
        loading={downloading === 'png'}
        className="shadow-glow"
      >
        <Download className="w-5 h-5" />
        Generate & Download QR Code
      </Button>

      {/* Format options */}
      <div className="flex gap-2">
        {formats.map(({ format, label, icon }) => (
          <Button
            key={format}
            variant="secondary"
            fullWidth
            onClick={() => handleDownload(format)}
            disabled={disabled}
            loading={downloading === format}
          >
            {icon}
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
}
