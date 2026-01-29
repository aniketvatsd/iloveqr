import { QRDesign, DotType, CornerSquareType, CornerDotType, defaultQRDesign } from '@/types/qr';

export interface QRTemplate {
  id: string;
  name: string;
  category: 'basic' | 'colorful' | 'gradient' | 'social' | 'business' | 'creative' | 'artistic';
  design: Partial<QRDesign>;
  preview?: {
    gradient?: string;
    icon?: string;
  };
}

// Color palettes for templates
const colors = {
  // Basics
  black: '#000000',
  white: '#ffffff',
  
  // Reds
  red: '#ef4444',
  darkRed: '#b91c1c',
  lightRed: '#fca5a5',
  rose: '#f43f5e',
  
  // Oranges
  orange: '#f97316',
  darkOrange: '#c2410c',
  amber: '#f59e0b',
  
  // Yellows
  yellow: '#eab308',
  lightYellow: '#fef08a',
  gold: '#ca8a04',
  
  // Greens
  green: '#22c55e',
  darkGreen: '#15803d',
  lime: '#84cc16',
  emerald: '#10b981',
  teal: '#14b8a6',
  
  // Blues
  blue: '#3b82f6',
  darkBlue: '#1d4ed8',
  lightBlue: '#93c5fd',
  sky: '#0ea5e9',
  cyan: '#06b6d4',
  indigo: '#6366f1',
  
  // Purples
  purple: '#a855f7',
  darkPurple: '#7c3aed',
  violet: '#8b5cf6',
  fuchsia: '#d946ef',
  
  // Pinks
  pink: '#ec4899',
  lightPink: '#f9a8d4',
  hotPink: '#db2777',
  
  // Neutrals
  gray: '#6b7280',
  darkGray: '#374151',
  slate: '#475569',
};

// Generate basic templates
const basicTemplates: QRTemplate[] = [
  { id: 'basic-1', name: 'Classic Black', category: 'basic', design: { dotColor: colors.black, backgroundColor: colors.white, dotType: 'square' } },
  { id: 'basic-2', name: 'Inverted', category: 'basic', design: { dotColor: colors.white, backgroundColor: colors.black, dotType: 'square' } },
  { id: 'basic-3', name: 'Rounded Classic', category: 'basic', design: { dotColor: colors.black, backgroundColor: colors.white, dotType: 'rounded' } },
  { id: 'basic-4', name: 'Dots Classic', category: 'basic', design: { dotColor: colors.black, backgroundColor: colors.white, dotType: 'dots' } },
  { id: 'basic-5', name: 'Extra Rounded', category: 'basic', design: { dotColor: colors.black, backgroundColor: colors.white, dotType: 'extra-rounded' } },
  { id: 'basic-6', name: 'Classy', category: 'basic', design: { dotColor: colors.black, backgroundColor: colors.white, dotType: 'classy' } },
  { id: 'basic-7', name: 'Classy Rounded', category: 'basic', design: { dotColor: colors.black, backgroundColor: colors.white, dotType: 'classy-rounded' } },
  { id: 'basic-8', name: 'Gray Classic', category: 'basic', design: { dotColor: colors.darkGray, backgroundColor: colors.white, dotType: 'square' } },
];

// Generate colorful templates with all dot types
const generateColorfulTemplates = (): QRTemplate[] => {
  const colorPairs = [
    // Reds
    { fg: colors.red, bg: colors.white, name: 'Red' },
    { fg: colors.darkRed, bg: colors.lightRed, name: 'Red Tint' },
    { fg: colors.white, bg: colors.red, name: 'Red Inverted' },
    { fg: colors.rose, bg: colors.white, name: 'Rose' },
    
    // Oranges
    { fg: colors.orange, bg: colors.white, name: 'Orange' },
    { fg: colors.orange, bg: '#fff7ed', name: 'Orange Tint' },
    { fg: colors.white, bg: colors.orange, name: 'Orange Inverted' },
    { fg: colors.amber, bg: colors.white, name: 'Amber' },
    
    // Yellows
    { fg: colors.yellow, bg: colors.white, name: 'Yellow' },
    { fg: colors.gold, bg: colors.lightYellow, name: 'Gold' },
    { fg: colors.black, bg: colors.yellow, name: 'Yellow BG' },
    
    // Greens
    { fg: colors.green, bg: colors.white, name: 'Green' },
    { fg: colors.green, bg: '#f0fdf4', name: 'Green Tint' },
    { fg: colors.white, bg: colors.green, name: 'Green Inverted' },
    { fg: colors.emerald, bg: colors.white, name: 'Emerald' },
    { fg: colors.teal, bg: colors.white, name: 'Teal' },
    { fg: colors.lime, bg: colors.white, name: 'Lime' },
    
    // Blues
    { fg: colors.blue, bg: colors.white, name: 'Blue' },
    { fg: colors.blue, bg: '#eff6ff', name: 'Blue Tint' },
    { fg: colors.white, bg: colors.blue, name: 'Blue Inverted' },
    { fg: colors.sky, bg: colors.white, name: 'Sky' },
    { fg: colors.cyan, bg: colors.white, name: 'Cyan' },
    { fg: colors.white, bg: colors.cyan, name: 'Cyan Inverted' },
    { fg: colors.darkBlue, bg: colors.lightBlue, name: 'Ocean' },
    { fg: colors.indigo, bg: colors.white, name: 'Indigo' },
    
    // Purples
    { fg: colors.purple, bg: colors.white, name: 'Purple' },
    { fg: colors.purple, bg: '#faf5ff', name: 'Purple Tint' },
    { fg: colors.white, bg: colors.purple, name: 'Purple Inverted' },
    { fg: colors.violet, bg: colors.white, name: 'Violet' },
    { fg: colors.darkPurple, bg: colors.white, name: 'Deep Purple' },
    { fg: colors.fuchsia, bg: colors.white, name: 'Fuchsia' },
    
    // Pinks
    { fg: colors.pink, bg: colors.white, name: 'Pink' },
    { fg: colors.pink, bg: '#fdf2f8', name: 'Pink Tint' },
    { fg: colors.white, bg: colors.pink, name: 'Pink Inverted' },
    { fg: colors.hotPink, bg: colors.white, name: 'Hot Pink' },
    { fg: colors.rose, bg: colors.lightPink, name: 'Rose Gold' },
  ];

  const dotTypes: DotType[] = ['square', 'dots', 'rounded', 'extra-rounded', 'classy', 'classy-rounded'];
  const templates: QRTemplate[] = [];
  let id = 1;

  colorPairs.forEach((color) => {
    dotTypes.forEach((dotType) => {
      templates.push({
        id: `colorful-${id++}`,
        name: `${color.name} ${dotType.charAt(0).toUpperCase() + dotType.slice(1).replace('-', ' ')}`,
        category: 'colorful',
        design: {
          dotColor: color.fg,
          backgroundColor: color.bg,
          cornerSquareColor: color.fg,
          cornerDotColor: color.fg,
          dotType,
          cornerSquareType: 'extra-rounded',
          cornerDotType: 'dot',
        },
      });
    });
  });

  return templates;
};

// Generate gradient-style templates (simulated with corner colors)
const gradientTemplates: QRTemplate[] = [
  // Instagram style
  { id: 'grad-1', name: 'Instagram', category: 'gradient', design: { dotColor: colors.fuchsia, backgroundColor: colors.white, cornerSquareColor: colors.orange, cornerDotColor: colors.purple, dotType: 'dots' }, preview: { icon: 'instagram' } },
  { id: 'grad-2', name: 'Instagram Alt', category: 'gradient', design: { dotColor: colors.purple, backgroundColor: '#fdf4ff', cornerSquareColor: colors.pink, cornerDotColor: colors.orange, dotType: 'rounded' }, preview: { icon: 'instagram' } },
  { id: 'grad-3', name: 'Instagram Dark', category: 'gradient', design: { dotColor: colors.white, backgroundColor: colors.purple, cornerSquareColor: colors.pink, cornerDotColor: colors.orange, dotType: 'dots' }, preview: { icon: 'instagram' } },
  
  // YouTube style
  { id: 'grad-4', name: 'YouTube', category: 'gradient', design: { dotColor: colors.red, backgroundColor: colors.white, cornerSquareColor: colors.darkRed, cornerDotColor: colors.red, dotType: 'rounded' }, preview: { icon: 'youtube' } },
  { id: 'grad-5', name: 'YouTube Dark', category: 'gradient', design: { dotColor: colors.white, backgroundColor: colors.red, cornerSquareColor: colors.white, cornerDotColor: colors.white, dotType: 'dots' }, preview: { icon: 'youtube' } },
  { id: 'grad-6', name: 'YouTube Alt', category: 'gradient', design: { dotColor: colors.red, backgroundColor: '#fef2f2', cornerSquareColor: colors.darkRed, cornerDotColor: colors.red, dotType: 'extra-rounded' }, preview: { icon: 'youtube' } },
  
  // Facebook style
  { id: 'grad-7', name: 'Facebook', category: 'gradient', design: { dotColor: colors.blue, backgroundColor: colors.white, cornerSquareColor: colors.darkBlue, cornerDotColor: colors.blue, dotType: 'rounded' }, preview: { icon: 'facebook' } },
  { id: 'grad-8', name: 'Facebook Dark', category: 'gradient', design: { dotColor: colors.white, backgroundColor: colors.blue, cornerSquareColor: colors.white, cornerDotColor: colors.white, dotType: 'dots' }, preview: { icon: 'facebook' } },
  
  // Sunset gradients
  { id: 'grad-9', name: 'Sunset', category: 'gradient', design: { dotColor: colors.orange, backgroundColor: colors.white, cornerSquareColor: colors.pink, cornerDotColor: colors.yellow, dotType: 'dots' } },
  { id: 'grad-10', name: 'Sunrise', category: 'gradient', design: { dotColor: colors.yellow, backgroundColor: '#fffbeb', cornerSquareColor: colors.orange, cornerDotColor: colors.red, dotType: 'rounded' } },
  
  // Ocean gradients
  { id: 'grad-11', name: 'Ocean Wave', category: 'gradient', design: { dotColor: colors.cyan, backgroundColor: colors.white, cornerSquareColor: colors.blue, cornerDotColor: colors.teal, dotType: 'dots' } },
  { id: 'grad-12', name: 'Deep Sea', category: 'gradient', design: { dotColor: colors.darkBlue, backgroundColor: '#f0f9ff', cornerSquareColor: colors.indigo, cornerDotColor: colors.cyan, dotType: 'rounded' } },
  
  // Forest gradients
  { id: 'grad-13', name: 'Forest', category: 'gradient', design: { dotColor: colors.green, backgroundColor: colors.white, cornerSquareColor: colors.emerald, cornerDotColor: colors.lime, dotType: 'dots' } },
  { id: 'grad-14', name: 'Mint', category: 'gradient', design: { dotColor: colors.teal, backgroundColor: '#f0fdfa', cornerSquareColor: colors.emerald, cornerDotColor: colors.cyan, dotType: 'rounded' } },
  
  // Purple gradients
  { id: 'grad-15', name: 'Galaxy', category: 'gradient', design: { dotColor: colors.purple, backgroundColor: colors.white, cornerSquareColor: colors.indigo, cornerDotColor: colors.pink, dotType: 'dots' } },
  { id: 'grad-16', name: 'Cosmic', category: 'gradient', design: { dotColor: colors.violet, backgroundColor: '#faf5ff', cornerSquareColor: colors.fuchsia, cornerDotColor: colors.indigo, dotType: 'extra-rounded' } },
];

// Social media templates
const socialTemplates: QRTemplate[] = [
  // Instagram variations
  ...Array.from({ length: 8 }, (_, i) => ({
    id: `social-ig-${i + 1}`,
    name: `Instagram Style ${i + 1}`,
    category: 'social' as const,
    design: {
      dotColor: [colors.fuchsia, colors.purple, colors.pink, colors.orange, colors.rose, colors.violet, colors.hotPink, colors.white][i],
      backgroundColor: [colors.white, '#fdf4ff', colors.white, '#fff7ed', '#fdf2f8', colors.white, colors.white, colors.purple][i],
      cornerSquareColor: [colors.purple, colors.pink, colors.fuchsia, colors.pink, colors.purple, colors.fuchsia, colors.purple, colors.pink][i],
      cornerDotColor: [colors.orange, colors.orange, colors.purple, colors.orange, colors.orange, colors.pink, colors.fuchsia, colors.orange][i],
      dotType: ['dots', 'rounded', 'dots', 'extra-rounded', 'dots', 'rounded', 'classy', 'dots'][i] as DotType,
    },
    preview: { icon: 'instagram' },
  })),
  
  // YouTube variations
  ...Array.from({ length: 8 }, (_, i) => ({
    id: `social-yt-${i + 1}`,
    name: `YouTube Style ${i + 1}`,
    category: 'social' as const,
    design: {
      dotColor: [colors.red, colors.white, colors.darkRed, colors.red, colors.white, colors.red, colors.darkRed, colors.red][i],
      backgroundColor: [colors.white, colors.red, '#fef2f2', colors.white, colors.darkRed, '#fee2e2', colors.white, colors.lightRed][i],
      cornerSquareColor: colors.darkRed,
      cornerDotColor: colors.red,
      dotType: ['rounded', 'dots', 'square', 'extra-rounded', 'rounded', 'dots', 'classy', 'rounded'][i] as DotType,
    },
    preview: { icon: 'youtube' },
  })),
  
  // Facebook variations
  ...Array.from({ length: 8 }, (_, i) => ({
    id: `social-fb-${i + 1}`,
    name: `Facebook Style ${i + 1}`,
    category: 'social' as const,
    design: {
      dotColor: [colors.blue, colors.white, colors.darkBlue, colors.blue, colors.white, colors.indigo, colors.blue, colors.darkBlue][i],
      backgroundColor: [colors.white, colors.blue, '#eff6ff', colors.lightBlue, colors.darkBlue, colors.white, '#dbeafe', colors.white][i],
      cornerSquareColor: colors.darkBlue,
      cornerDotColor: colors.blue,
      dotType: ['rounded', 'dots', 'square', 'extra-rounded', 'rounded', 'dots', 'classy', 'rounded'][i] as DotType,
    },
    preview: { icon: 'facebook' },
  })),
];

// Business templates
const businessTemplates: QRTemplate[] = [
  { id: 'biz-1', name: 'Professional Blue', category: 'business', design: { dotColor: colors.darkBlue, backgroundColor: colors.white, dotType: 'square', cornerSquareType: 'square' } },
  { id: 'biz-2', name: 'Corporate Gray', category: 'business', design: { dotColor: colors.slate, backgroundColor: colors.white, dotType: 'rounded', cornerSquareType: 'extra-rounded' } },
  { id: 'biz-3', name: 'Executive Black', category: 'business', design: { dotColor: colors.black, backgroundColor: '#f8fafc', dotType: 'classy', cornerSquareType: 'square' } },
  { id: 'biz-4', name: 'Finance Green', category: 'business', design: { dotColor: colors.darkGreen, backgroundColor: colors.white, dotType: 'square', cornerSquareType: 'square' } },
  { id: 'biz-5', name: 'Tech Blue', category: 'business', design: { dotColor: colors.sky, backgroundColor: colors.white, dotType: 'dots', cornerSquareType: 'dot' } },
  { id: 'biz-6', name: 'Startup Purple', category: 'business', design: { dotColor: colors.violet, backgroundColor: colors.white, dotType: 'rounded', cornerSquareType: 'extra-rounded' } },
  { id: 'biz-7', name: 'Medical Teal', category: 'business', design: { dotColor: colors.teal, backgroundColor: colors.white, dotType: 'extra-rounded', cornerSquareType: 'extra-rounded' } },
  { id: 'biz-8', name: 'Legal Navy', category: 'business', design: { dotColor: colors.darkBlue, backgroundColor: '#f1f5f9', dotType: 'classy-rounded', cornerSquareType: 'square' } },
];

// Creative templates with unique combinations
const creativeTemplates: QRTemplate[] = [
  // Neon styles
  { id: 'creative-1', name: 'Neon Pink', category: 'creative', design: { dotColor: colors.hotPink, backgroundColor: colors.black, dotType: 'dots', cornerSquareType: 'dot' } },
  { id: 'creative-2', name: 'Neon Green', category: 'creative', design: { dotColor: colors.lime, backgroundColor: colors.black, dotType: 'dots', cornerSquareType: 'dot' } },
  { id: 'creative-3', name: 'Neon Blue', category: 'creative', design: { dotColor: colors.cyan, backgroundColor: colors.black, dotType: 'dots', cornerSquareType: 'dot' } },
  { id: 'creative-4', name: 'Neon Purple', category: 'creative', design: { dotColor: colors.fuchsia, backgroundColor: colors.black, dotType: 'dots', cornerSquareType: 'dot' } },
  
  // Pastel styles
  { id: 'creative-5', name: 'Pastel Pink', category: 'creative', design: { dotColor: colors.pink, backgroundColor: '#fdf2f8', dotType: 'extra-rounded', cornerSquareType: 'extra-rounded' } },
  { id: 'creative-6', name: 'Pastel Blue', category: 'creative', design: { dotColor: colors.sky, backgroundColor: '#f0f9ff', dotType: 'extra-rounded', cornerSquareType: 'extra-rounded' } },
  { id: 'creative-7', name: 'Pastel Green', category: 'creative', design: { dotColor: colors.emerald, backgroundColor: '#f0fdf4', dotType: 'extra-rounded', cornerSquareType: 'extra-rounded' } },
  { id: 'creative-8', name: 'Pastel Purple', category: 'creative', design: { dotColor: colors.violet, backgroundColor: '#faf5ff', dotType: 'extra-rounded', cornerSquareType: 'extra-rounded' } },
  
  // Bold contrast
  { id: 'creative-9', name: 'Red on Yellow', category: 'creative', design: { dotColor: colors.red, backgroundColor: colors.yellow, dotType: 'square' } },
  { id: 'creative-10', name: 'Blue on Orange', category: 'creative', design: { dotColor: colors.blue, backgroundColor: colors.orange, dotType: 'rounded' } },
  { id: 'creative-11', name: 'Purple on Cyan', category: 'creative', design: { dotColor: colors.purple, backgroundColor: colors.cyan, dotType: 'dots' } },
  { id: 'creative-12', name: 'Green on Pink', category: 'creative', design: { dotColor: colors.green, backgroundColor: colors.pink, dotType: 'extra-rounded' } },
  
  // Monochrome
  { id: 'creative-13', name: 'Dark Mode', category: 'creative', design: { dotColor: '#e5e5e5', backgroundColor: '#171717', dotType: 'rounded' } },
  { id: 'creative-14', name: 'Sepia', category: 'creative', design: { dotColor: '#78350f', backgroundColor: '#fef3c7', dotType: 'classy' } },
  { id: 'creative-15', name: 'Navy Mode', category: 'creative', design: { dotColor: '#94a3b8', backgroundColor: '#0f172a', dotType: 'dots' } },
  { id: 'creative-16', name: 'Purple Mode', category: 'creative', design: { dotColor: '#c4b5fd', backgroundColor: '#1e1b4b', dotType: 'rounded' } },
];

// Artistic templates - inspired by creative QR designs with unique shapes and colors
const artisticTemplates: QRTemplate[] = [
  // Orange artistic style (inspired by octagonal corners)
  { 
    id: 'artistic-1', 
    name: 'Orange Globe', 
    category: 'artistic', 
    design: { 
      dotColor: colors.orange, 
      backgroundColor: colors.white, 
      dotType: 'extra-rounded',
      cornerSquareType: 'extra-rounded',
      cornerDotType: 'dot',
      cornerSquareColor: colors.orange,
      cornerDotColor: colors.orange,
      margin: 20
    },
    preview: { icon: 'globe' }
  },
  { 
    id: 'artistic-2', 
    name: 'Vibrant Orange', 
    category: 'artistic', 
    design: { 
      dotColor: '#ff6b35', 
      backgroundColor: '#fff7ed', 
      dotType: 'rounded',
      cornerSquareType: 'extra-rounded',
      cornerDotType: 'dot',
      margin: 18
    }
  },
  
  // Green artistic style (inspired by circular corners)
  { 
    id: 'artistic-3', 
    name: 'Green Globe', 
    category: 'artistic', 
    design: { 
      dotColor: '#22c55e', 
      backgroundColor: '#e0f2fe', 
      dotType: 'dots',
      cornerSquareType: 'dot',
      cornerDotType: 'dot',
      cornerSquareColor: '#22c55e',
      cornerDotColor: '#22c55e',
      margin: 20
    },
    preview: { icon: 'globe' }
  },
  { 
    id: 'artistic-4', 
    name: 'Emerald Circles', 
    category: 'artistic', 
    design: { 
      dotColor: colors.emerald, 
      backgroundColor: '#f0fdfa', 
      dotType: 'dots',
      cornerSquareType: 'dot',
      cornerDotType: 'dot',
      margin: 22
    }
  },
  { 
    id: 'artistic-5', 
    name: 'Lime Fresh', 
    category: 'artistic', 
    design: { 
      dotColor: colors.lime, 
      backgroundColor: '#f0fdf4', 
      dotType: 'extra-rounded',
      cornerSquareType: 'dot',
      cornerDotType: 'dot',
      margin: 20
    }
  },
  
  // Pink artistic style (inspired by heart-shaped corners)
  { 
    id: 'artistic-6', 
    name: 'Pink Retro', 
    category: 'artistic', 
    design: { 
      dotColor: colors.white, 
      backgroundColor: '#ec4899', 
      dotType: 'extra-rounded',
      cornerSquareType: 'extra-rounded',
      cornerDotType: 'dot',
      cornerSquareColor: colors.white,
      cornerDotColor: colors.white,
      margin: 20
    },
    preview: { icon: 'monitor' }
  },
  { 
    id: 'artistic-7', 
    name: 'Rose Gold', 
    category: 'artistic', 
    design: { 
      dotColor: colors.white, 
      backgroundColor: '#f43f5e', 
      dotType: 'rounded',
      cornerSquareType: 'extra-rounded',
      cornerDotType: 'dot',
      margin: 18
    }
  },
  { 
    id: 'artistic-8', 
    name: 'Hot Pink', 
    category: 'artistic', 
    design: { 
      dotColor: '#ffffff', 
      backgroundColor: '#db2777', 
      dotType: 'extra-rounded',
      cornerSquareType: 'extra-rounded',
      cornerDotColor: colors.white,
      margin: 20
    }
  },
  
  // Blue artistic styles
  { 
    id: 'artistic-9', 
    name: 'Ocean Bubbles', 
    category: 'artistic', 
    design: { 
      dotColor: colors.cyan, 
      backgroundColor: '#f0f9ff', 
      dotType: 'dots',
      cornerSquareType: 'dot',
      cornerDotType: 'dot',
      margin: 20
    }
  },
  { 
    id: 'artistic-10', 
    name: 'Sky Circles', 
    category: 'artistic', 
    design: { 
      dotColor: colors.sky, 
      backgroundColor: '#eff6ff', 
      dotType: 'dots',
      cornerSquareType: 'dot',
      cornerDotType: 'dot',
      margin: 22
    }
  },
  
  // Purple artistic styles
  { 
    id: 'artistic-11', 
    name: 'Purple Dream', 
    category: 'artistic', 
    design: { 
      dotColor: colors.purple, 
      backgroundColor: '#faf5ff', 
      dotType: 'extra-rounded',
      cornerSquareType: 'extra-rounded',
      cornerDotType: 'dot',
      margin: 20
    }
  },
  { 
    id: 'artistic-12', 
    name: 'Violet Waves', 
    category: 'artistic', 
    design: { 
      dotColor: colors.violet, 
      backgroundColor: '#f3e8ff', 
      dotType: 'rounded',
      cornerSquareType: 'extra-rounded',
      cornerDotType: 'dot',
      margin: 18
    }
  },
  
  // Yellow/Amber artistic styles
  { 
    id: 'artistic-13', 
    name: 'Sunshine', 
    category: 'artistic', 
    design: { 
      dotColor: colors.amber, 
      backgroundColor: '#fffbeb', 
      dotType: 'extra-rounded',
      cornerSquareType: 'extra-rounded',
      cornerDotType: 'dot',
      margin: 20
    }
  },
  { 
    id: 'artistic-14', 
    name: 'Golden Hour', 
    category: 'artistic', 
    design: { 
      dotColor: colors.gold, 
      backgroundColor: '#fef3c7', 
      dotType: 'rounded',
      cornerSquareType: 'extra-rounded',
      cornerDotType: 'dot',
      margin: 20
    }
  },
  
  // Teal artistic styles
  { 
    id: 'artistic-15', 
    name: 'Teal Bubbles', 
    category: 'artistic', 
    design: { 
      dotColor: colors.teal, 
      backgroundColor: '#f0fdfa', 
      dotType: 'dots',
      cornerSquareType: 'dot',
      cornerDotType: 'dot',
      margin: 22
    }
  },
  
  // Multi-color artistic
  { 
    id: 'artistic-16', 
    name: 'Rainbow Dots', 
    category: 'artistic', 
    design: { 
      dotColor: colors.purple, 
      backgroundColor: colors.white, 
      dotType: 'dots',
      cornerSquareColor: colors.pink,
      cornerDotColor: colors.orange,
      cornerSquareType: 'extra-rounded',
      cornerDotType: 'dot',
      margin: 20
    }
  },
  { 
    id: 'artistic-17', 
    name: 'Sunset Glow', 
    category: 'artistic', 
    design: { 
      dotColor: colors.orange, 
      backgroundColor: '#fff7ed', 
      dotType: 'extra-rounded',
      cornerSquareColor: colors.pink,
      cornerDotColor: colors.yellow,
      cornerSquareType: 'extra-rounded',
      cornerDotType: 'dot',
      margin: 20
    }
  },
  { 
    id: 'artistic-18', 
    name: 'Ocean Mist', 
    category: 'artistic', 
    design: { 
      dotColor: colors.teal, 
      backgroundColor: '#f0f9ff', 
      dotType: 'dots',
      cornerSquareColor: colors.cyan,
      cornerDotColor: colors.sky,
      cornerSquareType: 'dot',
      cornerDotType: 'dot',
      margin: 20
    }
  },
  
  // Dark artistic backgrounds
  { 
    id: 'artistic-19', 
    name: 'Neon Orange', 
    category: 'artistic', 
    design: { 
      dotColor: colors.orange, 
      backgroundColor: '#1c1917', 
      dotType: 'dots',
      cornerSquareType: 'dot',
      cornerDotType: 'dot',
      margin: 20
    }
  },
  { 
    id: 'artistic-20', 
    name: 'Neon Green', 
    category: 'artistic', 
    design: { 
      dotColor: colors.lime, 
      backgroundColor: '#0a0a0f', 
      dotType: 'dots',
      cornerSquareType: 'dot',
      cornerDotType: 'dot',
      margin: 20
    }
  },
  { 
    id: 'artistic-21', 
    name: 'Neon Pink', 
    category: 'artistic', 
    design: { 
      dotColor: colors.hotPink, 
      backgroundColor: '#1a1a24', 
      dotType: 'extra-rounded',
      cornerSquareType: 'extra-rounded',
      cornerDotType: 'dot',
      margin: 20
    }
  },
  
  // Soft artistic pastels
  { 
    id: 'artistic-22', 
    name: 'Soft Mint', 
    category: 'artistic', 
    design: { 
      dotColor: '#14b8a6', 
      backgroundColor: '#f0fdfa', 
      dotType: 'extra-rounded',
      cornerSquareType: 'extra-rounded',
      cornerDotType: 'dot',
      margin: 22
    }
  },
  { 
    id: 'artistic-23', 
    name: 'Lavender Dream', 
    category: 'artistic', 
    design: { 
      dotColor: '#a78bfa', 
      backgroundColor: '#faf5ff', 
      dotType: 'extra-rounded',
      cornerSquareType: 'extra-rounded',
      cornerDotType: 'dot',
      margin: 20
    }
  },
  { 
    id: 'artistic-24', 
    name: 'Peach Blush', 
    category: 'artistic', 
    design: { 
      dotColor: '#fb7185', 
      backgroundColor: '#fff1f2', 
      dotType: 'rounded',
      cornerSquareType: 'extra-rounded',
      cornerDotType: 'dot',
      margin: 20
    }
  },
];

// Combine all templates
export const allTemplates: QRTemplate[] = [
  ...basicTemplates,
  ...generateColorfulTemplates(),
  ...gradientTemplates,
  ...socialTemplates,
  ...businessTemplates,
  ...creativeTemplates,
  ...artisticTemplates,
];

// Get templates by category
export const getTemplatesByCategory = (category: QRTemplate['category']): QRTemplate[] => {
  return allTemplates.filter(t => t.category === category);
};

// Get featured templates (first few from each category)
export const getFeaturedTemplates = (count: number = 24): QRTemplate[] => {
  const categories: QRTemplate['category'][] = ['basic', 'colorful', 'gradient', 'social', 'business', 'creative', 'artistic'];
  const perCategory = Math.ceil(count / categories.length);
  
  return categories.flatMap(cat => 
    allTemplates.filter(t => t.category === cat).slice(0, perCategory)
  ).slice(0, count);
};

// Apply template to design
export const applyTemplate = (template: QRTemplate): Partial<QRDesign> => {
  return {
    ...defaultQRDesign,
    ...template.design,
    cornerSquareColor: template.design.cornerSquareColor || template.design.dotColor,
    cornerDotColor: template.design.cornerDotColor || template.design.dotColor,
  };
};

export const templateCategories = [
  { id: 'all', name: 'All Templates', count: allTemplates.length },
  { id: 'basic', name: 'Basic', count: basicTemplates.length },
  { id: 'colorful', name: 'Colorful', count: generateColorfulTemplates().length },
  { id: 'gradient', name: 'Gradient', count: gradientTemplates.length },
  { id: 'social', name: 'Social Media', count: socialTemplates.length },
  { id: 'business', name: 'Business', count: businessTemplates.length },
  { id: 'creative', name: 'Creative', count: creativeTemplates.length },
  { id: 'artistic', name: 'Artistic', count: artisticTemplates.length },
];
