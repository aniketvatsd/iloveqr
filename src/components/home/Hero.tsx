import Link from 'next/link';
import { QrCode, Zap, Shield, Download } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      {/* Decorative grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBoLTQweiIvPjxwYXRoIGQ9Ik00MCAwdjQwaDQwdi00MHoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-40 pointer-events-none" />

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
            <Link href="/generator">
              <Button size="lg" className="min-w-[200px]">
                <QrCode className="w-5 h-5" />
                Create QR Code
              </Button>
            </Link>
            <Link href="/generator">
              <Button variant="secondary" size="lg" className="min-w-[200px]">
                View Templates
              </Button>
            </Link>
          </div>

          {/* Features mini list */}
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

        {/* QR Code Preview mockup */}
        <div className="mt-16 flex justify-center">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            
            {/* QR Preview Card */}
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
  );
}
