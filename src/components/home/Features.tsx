import { 
  Link, 
  Type, 
  Mail, 
  Phone, 
  MessageSquare, 
  Wifi,
  Palette,
  Download,
  Shield,
  Zap,
  Eye,
  Layers
} from 'lucide-react';
import Card from '@/components/ui/Card';

const qrTypes = [
  { icon: Link, label: 'Website URL', description: 'Link to any webpage' },
  { icon: Type, label: 'Plain Text', description: 'Any text content' },
  { icon: Mail, label: 'Email', description: 'Pre-filled email' },
  { icon: Phone, label: 'Phone', description: 'Direct call link' },
  { icon: MessageSquare, label: 'SMS', description: 'Text message' },
  { icon: Wifi, label: 'WiFi', description: 'Network credentials' },
];

const features = [
  {
    icon: Palette,
    title: 'Custom Design',
    description: 'Customize colors, shapes, and add your logo to create unique QR codes.',
  },
  {
    icon: Download,
    title: 'Multiple Formats',
    description: 'Download your QR codes in PNG, SVG, or JPG format.',
  },
  {
    icon: Shield,
    title: 'No Watermarks',
    description: 'Generate clean, professional QR codes without any branding.',
  },
  {
    icon: Zap,
    title: 'Instant Generation',
    description: 'Create QR codes in real-time as you type.',
  },
  {
    icon: Eye,
    title: 'Live Preview',
    description: 'See your QR code update instantly as you customize it.',
  },
  {
    icon: Layers,
    title: 'Design Templates',
    description: 'Start with pre-made templates for faster creation.',
  },
];

export default function Features() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* QR Types Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Create Any Type of QR Code
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Generate QR codes for various purposes. Choose the type that fits your needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {qrTypes.map((type) => (
            <Card 
              key={type.label}
              variant="bordered"
              padding="md"
              hoverable
              className="text-center group"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <type.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-medium text-text-primary text-sm mb-1">
                {type.label}
              </h3>
              <p className="text-xs text-text-muted">
                {type.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Features Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Everything You Need
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Professional QR code generation with all the features you expect, completely free.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card 
              key={feature.title}
              variant="bordered"
              padding="lg"
              className="group hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-text-secondary text-sm">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
