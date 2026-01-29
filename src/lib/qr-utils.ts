import { QRData, QRType } from '@/types/qr';

export function generateQRContent(data: QRData): string {
  switch (data.type) {
    case 'url':
      return data.url || 'https://example.com';
    
    case 'text':
      return data.text || 'Hello World';
    
    case 'email':
      const email = data.email || '';
      const subject = data.emailSubject ? `?subject=${encodeURIComponent(data.emailSubject)}` : '';
      const body = data.emailBody ? `${subject ? '&' : '?'}body=${encodeURIComponent(data.emailBody)}` : '';
      return `mailto:${email}${subject}${body}`;
    
    case 'phone':
      return `tel:${data.phone || ''}`;
    
    case 'sms':
      const smsBody = data.smsMessage ? `?body=${encodeURIComponent(data.smsMessage)}` : '';
      return `sms:${data.smsPhone || ''}${smsBody}`;
    
    case 'wifi':
      const encryption = data.wifiEncryption || 'WPA';
      const hidden = data.wifiHidden ? 'H:true;' : '';
      return `WIFI:T:${encryption};S:${data.wifiSsid || ''};P:${data.wifiPassword || ''};${hidden};`;
    
    case 'pdf':
      return data.pdfUrl || 'https://example.com/document.pdf';
    
    default:
      return 'https://example.com';
  }
}

export function validateQRData(type: QRType, data: QRData): { valid: boolean; message?: string } {
  switch (type) {
    case 'url':
      if (!data.url) return { valid: false, message: 'Please enter a URL' };
      try {
        new URL(data.url);
        return { valid: true };
      } catch {
        return { valid: false, message: 'Please enter a valid URL' };
      }
    
    case 'text':
      if (!data.text) return { valid: false, message: 'Please enter some text' };
      return { valid: true };
    
    case 'email':
      if (!data.email) return { valid: false, message: 'Please enter an email address' };
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        return { valid: false, message: 'Please enter a valid email address' };
      }
      return { valid: true };
    
    case 'phone':
      if (!data.phone) return { valid: false, message: 'Please enter a phone number' };
      return { valid: true };
    
    case 'sms':
      if (!data.smsPhone) return { valid: false, message: 'Please enter a phone number' };
      return { valid: true };
    
    case 'wifi':
      if (!data.wifiSsid) return { valid: false, message: 'Please enter the WiFi network name' };
      return { valid: true };
    
    case 'pdf':
      if (!data.pdfUrl) return { valid: false, message: 'Please enter a PDF URL' };
      return { valid: true };
    
    default:
      return { valid: true };
  }
}

export function getPlaceholder(type: QRType): string {
  switch (type) {
    case 'url': return 'https://example.com';
    case 'text': return 'Enter your text here...';
    case 'email': return 'email@example.com';
    case 'phone': return '+1 234 567 8900';
    case 'sms': return '+1 234 567 8900';
    case 'wifi': return 'MyWiFiNetwork';
    case 'pdf': return 'https://example.com/document.pdf';
    default: return '';
  }
}
