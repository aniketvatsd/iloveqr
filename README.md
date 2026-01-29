# iLoveQR - Free QR Code Generator

A clean, fast, and minimalist QR Code Generator web application built with Next.js 14, React, and Tailwind CSS.

![iLoveQR](https://via.placeholder.com/1200x630/0a0a0f/3b82f6?text=iLoveQR)

## Features

- **Multiple QR Types**: Generate QR codes for URLs, text, email, phone, SMS, WiFi, and PDF links
- **Custom Design**: Customize colors, dot shapes, marker styles, and add your own logo
- **Live Preview**: See your QR code update in real-time as you make changes
- **Multiple Download Formats**: Export as PNG, SVG, or JPG
- **Scannability Indicator**: Visual feedback on QR code readability
- **Design Templates**: Quick-start templates for faster creation
- **Ad-Ready**: Pre-configured ad slots for Google AdSense/AdX integration
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI**: React 18 + Tailwind CSS
- **QR Generation**: qr-code-styling
- **Icons**: Lucide React
- **State Management**: React Hooks
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/iloveqr.git
cd iloveqr
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
iloveqr/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with header/footer
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Global styles
│   │   └── generator/
│   │       └── page.tsx        # QR Generator page
│   ├── components/
│   │   ├── ads/
│   │   │   └── AdSlot.tsx      # Reusable ad placeholder
│   │   ├── home/
│   │   │   ├── Hero.tsx        # Homepage hero section
│   │   │   └── Features.tsx    # Features grid
│   │   ├── layout/
│   │   │   ├── Header.tsx      # Navigation header
│   │   │   └── Footer.tsx      # Site footer
│   │   ├── qr/
│   │   │   ├── QRTypeSelector.tsx    # QR type selection
│   │   │   ├── QRDataInput.tsx       # Dynamic data inputs
│   │   │   ├── QRDesignOptions.tsx   # Design customization
│   │   │   ├── QRPreview.tsx         # Live QR preview
│   │   │   └── QRDownload.tsx        # Download buttons
│   │   └── ui/
│   │       ├── Button.tsx      # Button component
│   │       ├── Card.tsx        # Card component
│   │       ├── Input.tsx       # Input/Textarea/Select
│   │       ├── Slider.tsx      # Range slider
│   │       └── ColorPicker.tsx # Color picker
│   ├── lib/
│   │   └── qr-utils.ts         # QR content generation utilities
│   └── types/
│       └── qr.ts               # TypeScript type definitions
├── public/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Ad Integration

The application includes pre-configured ad slots that are ready for Google AdSense/AdX integration.

### Available Ad Positions

| Position | Location | Suggested Size |
|----------|----------|----------------|
| `homepage-top` | Below hero section | Leaderboard (728x90) |
| `homepage-bottom` | Above footer | Responsive |
| `qr-page-sidebar` | Between Step 2 & 3 | Medium Rectangle (300x250) |
| `qr-page-bottom` | Below preview panel | Responsive |

### Usage

```tsx
import AdSlot from '@/components/ads/AdSlot';

// Basic usage
<AdSlot position="homepage-top" />

// With custom minimum height
<AdSlot position="qr-page-sidebar" minHeight={300} />
```

### AdSense Integration

To integrate Google AdSense, update the `AdSlot` component:

```tsx
// In src/components/ads/AdSlot.tsx

// Replace the placeholder content with:
<ins className="adsbygoogle"
  style={{ display: 'block' }}
  data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
  data-ad-slot="XXXXXXXXXX"
  data-ad-format="auto"
  data-full-width-responsive="true"
/>

// Add to useEffect:
useEffect(() => {
  if (mounted) {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }
}, [mounted]);
```

## Design System

### Colors

The application uses a dark theme with the following key colors:

- **Background**: `#0a0a0f`
- **Surface**: `#12121a`
- **Primary**: `#3b82f6` (Blue)
- **Accent**: `#8b5cf6` (Purple)
- **Text Primary**: `#ffffff`
- **Text Secondary**: `#a1a1aa`

### Components

All UI components support variants and are fully customizable:

```tsx
<Button variant="primary" size="lg">Get Started</Button>
<Card variant="bordered" padding="lg">Content</Card>
<Input label="URL" placeholder="https://..." />
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project to Vercel
3. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/iloveqr)

### Other Platforms

The application can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- Docker

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project for personal or commercial purposes.

---

Built with ❤️ by the community
