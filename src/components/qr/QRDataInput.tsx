'use client';

import { QRType, QRData } from '@/types/qr';
import Input, { Textarea, Select } from '@/components/ui/Input';
import { Link, Eye, EyeOff, CornerDownLeft, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface QRDataInputProps {
  type: QRType;
  data: QRData;
  onChange: (data: Partial<QRData>) => void;
}

export default function QRDataInput({ type, data, onChange }: QRDataInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const renderInputs = () => {
    switch (type) {
      case 'url':
        return (
          <div className="space-y-3">
            <div className="relative">
              <Input
                placeholder="https://website.com"
                value={data.url || ''}
                onChange={(e) => onChange({ url: e.target.value })}
                rightIcon={
                  <button className="p-1.5 hover:bg-surface-lighter rounded transition-colors">
                    <CornerDownLeft className="w-4 h-4" />
                  </button>
                }
              />
            </div>
            <button className="flex items-center gap-2 px-3 py-2 bg-surface-light border border-border rounded-lg text-sm text-text-secondary hover:text-text-primary hover:border-primary/50 transition-colors">
              <Sparkles className="w-4 h-4" />
              UTM
            </button>
          </div>
        );

      case 'text':
        return (
          <Textarea
            placeholder="Enter your text here..."
            value={data.text || ''}
            onChange={(e) => onChange({ text: e.target.value })}
            rows={4}
          />
        );

      case 'email':
        return (
          <div className="space-y-4">
            <Input
              label="Email Address"
              type="email"
              placeholder="email@example.com"
              value={data.email || ''}
              onChange={(e) => onChange({ email: e.target.value })}
            />
            <Input
              label="Subject (Optional)"
              placeholder="Email subject"
              value={data.emailSubject || ''}
              onChange={(e) => onChange({ emailSubject: e.target.value })}
            />
            <Textarea
              label="Body (Optional)"
              placeholder="Email body content..."
              value={data.emailBody || ''}
              onChange={(e) => onChange({ emailBody: e.target.value })}
              rows={3}
            />
          </div>
        );

      case 'phone':
        return (
          <Input
            label="Phone Number"
            type="tel"
            placeholder="+1 234 567 8900"
            value={data.phone || ''}
            onChange={(e) => onChange({ phone: e.target.value })}
          />
        );

      case 'sms':
        return (
          <div className="space-y-4">
            <Input
              label="Phone Number"
              type="tel"
              placeholder="+1 234 567 8900"
              value={data.smsPhone || ''}
              onChange={(e) => onChange({ smsPhone: e.target.value })}
            />
            <Textarea
              label="Message (Optional)"
              placeholder="Pre-filled message..."
              value={data.smsMessage || ''}
              onChange={(e) => onChange({ smsMessage: e.target.value })}
              rows={3}
            />
          </div>
        );

      case 'wifi':
        return (
          <div className="space-y-4">
            <Input
              label="Network Name (SSID)"
              placeholder="MyWiFiNetwork"
              value={data.wifiSsid || ''}
              onChange={(e) => onChange({ wifiSsid: e.target.value })}
            />
            <div className="relative">
              <Input
                label="Password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Network password"
                value={data.wifiPassword || ''}
                onChange={(e) => onChange({ wifiPassword: e.target.value })}
                rightIcon={
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="hover:text-text-primary transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                }
              />
            </div>
            <Select
              label="Encryption"
              value={data.wifiEncryption || 'WPA'}
              onChange={(e) => onChange({ wifiEncryption: e.target.value as 'WPA' | 'WEP' | 'nopass' })}
              options={[
                { value: 'WPA', label: 'WPA/WPA2' },
                { value: 'WEP', label: 'WEP' },
                { value: 'nopass', label: 'No Password' },
              ]}
            />
            <label className="flex items-center gap-3 cursor-pointer p-3 bg-surface-light rounded-lg hover:bg-surface-lighter transition-colors">
              <input
                type="checkbox"
                checked={data.wifiHidden || false}
                onChange={(e) => onChange({ wifiHidden: e.target.checked })}
                className="w-5 h-5 rounded border-border bg-surface text-primary focus:ring-primary focus:ring-offset-0"
              />
              <span className="text-sm text-text-secondary">Hidden Network</span>
            </label>
          </div>
        );

      case 'pdf':
        return (
          <div className="space-y-4">
            <Input
              label="PDF URL"
              placeholder="https://example.com/document.pdf"
              value={data.pdfUrl || ''}
              onChange={(e) => onChange({ pdfUrl: e.target.value })}
              leftIcon={<Link className="w-4 h-4" />}
            />
            <p className="text-xs text-text-muted">
              Enter the direct URL to your PDF file hosted online
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="animate-fade-in">
      {renderInputs()}
    </div>
  );
}
