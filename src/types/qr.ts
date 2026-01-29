export type QRType = 
  | 'url'
  | 'text'
  | 'email'
  | 'phone'
  | 'sms'
  | 'wifi'
  | 'pdf';

export interface QRTypeOption {
  id: QRType;
  label: string;
  icon: string;
  description: string;
}

export interface QRData {
  type: QRType;
  // URL
  url?: string;
  // Text
  text?: string;
  // Email
  email?: string;
  emailSubject?: string;
  emailBody?: string;
  // Phone
  phone?: string;
  // SMS
  smsPhone?: string;
  smsMessage?: string;
  // WiFi
  wifiSsid?: string;
  wifiPassword?: string;
  wifiEncryption?: 'WPA' | 'WEP' | 'nopass';
  wifiHidden?: boolean;
  // PDF
  pdfUrl?: string;
}

export type DotType = 'square' | 'dots' | 'rounded' | 'extra-rounded' | 'classy' | 'classy-rounded';
export type CornerSquareType = 'square' | 'extra-rounded' | 'dot';
export type CornerDotType = 'square' | 'dot';

export type QRStyleMode = 'custom' | 'image';

export type TextFont = 'Arial' | 'Helvetica' | 'Times' | 'Courier' | 'Verdana' | 'Georgia';

export interface QRTextOverlay {
  enabled: boolean;
  text: string;
  font: TextFont;
  fontSize: number;
  fontWeight: 'normal' | 'bold';
  color: string;
  letterSpacing: number;
  position: 'front' | 'back';
}

export interface QRDesign {
  // Body/Dots
  dotType: DotType;
  dotColor: string;
  // Background
  backgroundColor: string;
  // Background Image (for Image QR Code style)
  backgroundImage?: string;
  backgroundImageOpacity: number; // 0-100
  backgroundImageZoom: number; // 50-200
  // Corner squares (outer markers)
  cornerSquareType: CornerSquareType;
  cornerSquareColor: string;
  // Corner dots (inner markers)
  cornerDotType: CornerDotType;
  cornerDotColor: string;
  // Logo
  logo?: string;
  logoSize: number;
  // Text Overlay
  textOverlay: QRTextOverlay;
  // Margin
  margin: number;
}

export interface QRState {
  type: QRType;
  data: QRData;
  design: QRDesign;
  step: number;
}

export const defaultTextOverlay: QRTextOverlay = {
  enabled: false,
  text: '',
  font: 'Arial',
  fontSize: 100,
  fontWeight: 'bold',
  color: '#ffffff',
  letterSpacing: 10,
  position: 'front',
};

// Clean, subtle default design
export const defaultQRDesign: QRDesign = {
  dotType: 'dots',  // Cleaner dots style
  dotColor: '#000000',
  backgroundColor: '#ffffff',
  backgroundImageOpacity: 55,
  backgroundImageZoom: 100,
  cornerSquareType: 'extra-rounded',  // Rounded corners for modern look
  cornerSquareColor: '#000000',
  cornerDotType: 'dot',  // Round inner markers
  cornerDotColor: '#000000',
  logoSize: 0.25,  // Smaller default logo
  textOverlay: defaultTextOverlay,
  margin: 20,  // More margin for cleaner look
};

export const qrTypeOptions: QRTypeOption[] = [
  { id: 'url', label: 'Website URL', icon: 'Link', description: 'Link to any website' },
  { id: 'text', label: 'Plain Text', icon: 'Type', description: 'Any text content' },
  { id: 'email', label: 'Email', icon: 'Mail', description: 'Email address with subject' },
  { id: 'phone', label: 'Phone Call', icon: 'Phone', description: 'Phone number to call' },
  { id: 'sms', label: 'SMS Message', icon: 'MessageSquare', description: 'SMS with preset message' },
  { id: 'wifi', label: 'WiFi', icon: 'Wifi', description: 'WiFi network credentials' },
  { id: 'pdf', label: 'PDF Document', icon: 'FileText', description: 'Link to PDF file' },
];
