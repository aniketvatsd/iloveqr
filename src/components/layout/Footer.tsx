import Link from 'next/link';
import { QrCode, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-surface-light rounded-lg">
                <QrCode className="w-5 h-5 text-primary" />
              </div>
              <span className="text-lg font-bold text-text-primary">
                iLove<span className="text-primary">QR</span>
              </span>
            </Link>
            <p className="text-text-secondary text-sm">
              Create beautiful QR codes instantly. Simple, fast, and free.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/generator" className="text-text-secondary hover:text-text-primary transition-colors text-sm">
                  QR Generator
                </Link>
              </li>
              <li>
                <Link href="/generator" className="text-text-secondary hover:text-text-primary transition-colors text-sm">
                  Templates
                </Link>
              </li>
              <li>
                <Link href="/generator" className="text-text-secondary hover:text-text-primary transition-colors text-sm">
                  API Access
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-text-secondary hover:text-text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="text-text-secondary hover:text-text-primary transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/" className="text-text-secondary hover:text-text-primary transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4">Connect</h4>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="p-2 bg-surface-light hover:bg-surface-lighter rounded-lg transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-text-secondary" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-surface-light hover:bg-surface-lighter rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-text-secondary" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-surface-light hover:bg-surface-lighter rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-text-secondary" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} iLoveQR. All rights reserved.
          </p>
          <p className="text-text-muted text-sm">
            Made with ♥ for the community
          </p>
        </div>
      </div>
    </footer>
  );
}
