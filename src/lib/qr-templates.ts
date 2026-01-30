import { QRDesign, DotType, CornerSquareType, CornerDotType, defaultQRDesign } from '@/types/qr';

export interface QRTemplate {
  id: string;
  name: string;
  category: 'basic' | 'colorful' | 'gradient' | 'social' | 'business' | 'creative' | 'artistic';
  design: Partial<QRDesign>;
  logo?: string; // URL to logo image for center of QR
  preview?: {
    gradient?: string;
    icon?: string;
  };
}

// Brand logo URLs using Simple Icons CDN (SVG format)
const brandLogos: Record<string, string> = {
  instagram: 'https://cdn.simpleicons.org/instagram/E4405F',
  youtube: 'https://cdn.simpleicons.org/youtube/FF0000',
  facebook: 'https://cdn.simpleicons.org/facebook/1877F2',
  whatsapp: 'https://cdn.simpleicons.org/whatsapp/25D366',
  tiktok: 'https://cdn.simpleicons.org/tiktok/000000',
  linkedin: 'https://cdn.simpleicons.org/linkedin/0A66C2',
  twitter: 'https://cdn.simpleicons.org/x/000000',
  telegram: 'https://cdn.simpleicons.org/telegram/26A5E4',
  snapchat: 'https://cdn.simpleicons.org/snapchat/FFFC00',
  pinterest: 'https://cdn.simpleicons.org/pinterest/BD081C',
  gmail: 'https://cdn.simpleicons.org/gmail/EA4335',
  google: 'https://cdn.simpleicons.org/google/4285F4',
  paypal: 'https://cdn.simpleicons.org/paypal/00457C',
  twitch: 'https://cdn.simpleicons.org/twitch/9146FF',
  vk: 'https://cdn.simpleicons.org/vk/0077FF',
  wechat: 'https://cdn.simpleicons.org/wechat/07C160',
  appstore: 'https://cdn.simpleicons.org/appstore/0D96F6',
  googleplay: 'https://cdn.simpleicons.org/googleplay/414141',
  spotify: 'https://cdn.simpleicons.org/spotify/1DB954',
  deezer: 'https://cdn.simpleicons.org/deezer/FF0092',
  soundcloud: 'https://cdn.simpleicons.org/soundcloud/FF3300',
  airbnb: 'https://cdn.simpleicons.org/airbnb/FF5A5F',
  booking: 'https://cdn.simpleicons.org/bookingdotcom/003580',
  tripadvisor: 'https://cdn.simpleicons.org/tripadvisor/34E0A1',
  microsoft: 'https://cdn.simpleicons.org/microsoft/5E5E5E',
  canva: 'https://cdn.simpleicons.org/canva/00C4CC',
  amazon: 'https://cdn.simpleicons.org/amazon/FF9900',
  clubhouse: 'https://cdn.simpleicons.org/clubhouse/F5E600',
};

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
  // Instagram variations (4 styles as shown in images)
  { id: 'social-ig-1', name: 'Instagram Classic', category: 'social', logo: brandLogos.instagram, design: { dotColor: colors.fuchsia, backgroundColor: colors.white, cornerSquareColor: colors.purple, cornerDotColor: colors.orange, dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'instagram' } },
  { id: 'social-ig-2', name: 'Instagram Gradient', category: 'social', logo: brandLogos.instagram, design: { dotColor: colors.purple, backgroundColor: '#fdf4ff', cornerSquareColor: colors.pink, cornerDotColor: colors.orange, dotType: 'rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'instagram' } },
  { id: 'social-ig-3', name: 'Instagram Purple', category: 'social', logo: brandLogos.instagram, design: { dotColor: colors.white, backgroundColor: colors.purple, cornerSquareColor: colors.white, cornerDotColor: colors.white, dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'instagram' } },
  { id: 'social-ig-4', name: 'Instagram Orange', category: 'social', logo: brandLogos.instagram, design: { dotColor: colors.orange, backgroundColor: colors.white, cornerSquareColor: colors.pink, cornerDotColor: colors.fuchsia, dotType: 'extra-rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'instagram' } },

  // YouTube variations (4 styles as shown in images)
  { id: 'social-yt-1', name: 'YouTube Classic', category: 'social', logo: brandLogos.youtube, design: { dotColor: colors.red, backgroundColor: colors.white, cornerSquareColor: colors.red, cornerDotColor: colors.red, dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'youtube' } },
  { id: 'social-yt-2', name: 'YouTube Red BG', category: 'social', logo: brandLogos.youtube, design: { dotColor: colors.white, backgroundColor: colors.red, cornerSquareColor: colors.white, cornerDotColor: colors.white, dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'youtube' } },
  { id: 'social-yt-3', name: 'YouTube Pink', category: 'social', logo: brandLogos.youtube, design: { dotColor: colors.darkRed, backgroundColor: '#fce7f3', cornerSquareColor: colors.red, cornerDotColor: colors.red, dotType: 'rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'youtube' } },
  { id: 'social-yt-4', name: 'YouTube Dark', category: 'social', logo: brandLogos.youtube, design: { dotColor: colors.white, backgroundColor: colors.darkRed, cornerSquareColor: colors.white, cornerDotColor: colors.white, dotType: 'extra-rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'youtube' } },

  // Facebook variations (4 styles as shown in images)
  { id: 'social-fb-1', name: 'Facebook Classic', category: 'social', logo: brandLogos.facebook, design: { dotColor: colors.blue, backgroundColor: colors.white, cornerSquareColor: colors.blue, cornerDotColor: colors.blue, dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'facebook' } },
  { id: 'social-fb-2', name: 'Facebook Blue BG', category: 'social', logo: brandLogos.facebook, design: { dotColor: colors.white, backgroundColor: colors.blue, cornerSquareColor: colors.white, cornerDotColor: colors.white, dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'facebook' } },
  { id: 'social-fb-3', name: 'Facebook Light', category: 'social', logo: brandLogos.facebook, design: { dotColor: colors.blue, backgroundColor: '#eff6ff', cornerSquareColor: colors.darkBlue, cornerDotColor: colors.blue, dotType: 'rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'facebook' } },
  { id: 'social-fb-4', name: 'Facebook Navy', category: 'social', logo: brandLogos.facebook, design: { dotColor: colors.white, backgroundColor: colors.darkBlue, cornerSquareColor: colors.white, cornerDotColor: colors.white, dotType: 'extra-rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'facebook' } },

  // WhatsApp variations (4 styles as shown in images)
  { id: 'social-wa-1', name: 'WhatsApp Classic', category: 'social', logo: brandLogos.whatsapp, design: { dotColor: '#25D366', backgroundColor: colors.white, cornerSquareColor: '#25D366', cornerDotColor: '#25D366', dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'whatsapp' } },
  { id: 'social-wa-2', name: 'WhatsApp Green BG', category: 'social', logo: brandLogos.whatsapp, design: { dotColor: colors.white, backgroundColor: '#25D366', cornerSquareColor: colors.white, cornerDotColor: colors.white, dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'whatsapp' } },
  { id: 'social-wa-3', name: 'WhatsApp Light', category: 'social', logo: brandLogos.whatsapp, design: { dotColor: '#128C7E', backgroundColor: '#dcfce7', cornerSquareColor: '#25D366', cornerDotColor: '#25D366', dotType: 'rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'whatsapp' } },
  { id: 'social-wa-4', name: 'WhatsApp Dark', category: 'social', logo: brandLogos.whatsapp, design: { dotColor: '#25D366', backgroundColor: '#075E54', cornerSquareColor: '#25D366', cornerDotColor: '#25D366', dotType: 'extra-rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'whatsapp' } },

  // TikTok variations (4 styles as shown in images)
  { id: 'social-tt-1', name: 'TikTok Classic', category: 'social', logo: brandLogos.tiktok, design: { dotColor: colors.black, backgroundColor: colors.white, cornerSquareColor: colors.black, cornerDotColor: '#EE1D52', dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'tiktok' } },
  { id: 'social-tt-2', name: 'TikTok White', category: 'social', logo: brandLogos.tiktok, design: { dotColor: colors.black, backgroundColor: colors.white, cornerSquareColor: colors.black, cornerDotColor: '#69C9D0', dotType: 'rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'tiktok' } },
  { id: 'social-tt-3', name: 'TikTok Pink', category: 'social', logo: brandLogos.tiktok, design: { dotColor: colors.black, backgroundColor: '#fce7f3', cornerSquareColor: '#EE1D52', cornerDotColor: '#69C9D0', dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'tiktok' } },
  { id: 'social-tt-4', name: 'TikTok Dark', category: 'social', logo: brandLogos.tiktok, design: { dotColor: colors.white, backgroundColor: colors.black, cornerSquareColor: '#EE1D52', cornerDotColor: '#69C9D0', dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'tiktok' } },

  // LinkedIn variations (4 styles as shown in images)
  { id: 'social-li-1', name: 'LinkedIn Classic', category: 'social', logo: brandLogos.linkedin, design: { dotColor: '#0A66C2', backgroundColor: colors.white, cornerSquareColor: '#0A66C2', cornerDotColor: '#0A66C2', dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'linkedin' } },
  { id: 'social-li-2', name: 'LinkedIn Blue BG', category: 'social', logo: brandLogos.linkedin, design: { dotColor: colors.white, backgroundColor: '#0A66C2', cornerSquareColor: colors.white, cornerDotColor: colors.white, dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'linkedin' } },
  { id: 'social-li-3', name: 'LinkedIn Light', category: 'social', logo: brandLogos.linkedin, design: { dotColor: '#0A66C2', backgroundColor: '#dbeafe', cornerSquareColor: '#0A66C2', cornerDotColor: '#0A66C2', dotType: 'rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'linkedin' } },
  { id: 'social-li-4', name: 'LinkedIn Dark', category: 'social', logo: brandLogos.linkedin, design: { dotColor: colors.white, backgroundColor: '#1e3a5f', cornerSquareColor: colors.white, cornerDotColor: colors.white, dotType: 'extra-rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'linkedin' } },

  // Twitter/X variations (4 styles as shown in images)
  { id: 'social-tw-1', name: 'Twitter Classic', category: 'social', design: { dotColor: colors.black, backgroundColor: colors.white, cornerSquareColor: colors.black, cornerDotColor: colors.black, dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'twitter' } },
  { id: 'social-tw-2', name: 'Twitter White', category: 'social', design: { dotColor: colors.black, backgroundColor: colors.white, cornerSquareColor: colors.black, cornerDotColor: colors.black, dotType: 'rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'twitter' } },
  { id: 'social-tw-3', name: 'Twitter Blue', category: 'social', design: { dotColor: colors.white, backgroundColor: '#1DA1F2', cornerSquareColor: colors.white, cornerDotColor: colors.white, dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'twitter' } },
  { id: 'social-tw-4', name: 'Twitter Light Blue', category: 'social', design: { dotColor: '#1DA1F2', backgroundColor: '#e0f7ff', cornerSquareColor: '#1DA1F2', cornerDotColor: '#1DA1F2', dotType: 'extra-rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'twitter' } },

  // Telegram variations (4 styles as shown in images)
  { id: 'social-tg-1', name: 'Telegram Classic', category: 'social', design: { dotColor: '#0088CC', backgroundColor: colors.white, cornerSquareColor: '#0088CC', cornerDotColor: '#0088CC', dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'telegram' } },
  { id: 'social-tg-2', name: 'Telegram Blue BG', category: 'social', design: { dotColor: colors.white, backgroundColor: '#0088CC', cornerSquareColor: colors.white, cornerDotColor: colors.white, dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'telegram' } },
  { id: 'social-tg-3', name: 'Telegram Light', category: 'social', design: { dotColor: '#0088CC', backgroundColor: '#e0f4ff', cornerSquareColor: '#0088CC', cornerDotColor: '#0088CC', dotType: 'rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'telegram' } },
  { id: 'social-tg-4', name: 'Telegram Purple', category: 'social', design: { dotColor: '#6366f1', backgroundColor: '#f5f3ff', cornerSquareColor: '#0088CC', cornerDotColor: '#0088CC', dotType: 'extra-rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'telegram' } },

  // Snapchat variations (4 styles as shown in images)
  { id: 'social-sc-1', name: 'Snapchat Classic', category: 'social', design: { dotColor: colors.black, backgroundColor: '#FFFC00', cornerSquareColor: colors.black, cornerDotColor: colors.black, dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'snapchat' } },
  { id: 'social-sc-2', name: 'Snapchat Yellow', category: 'social', design: { dotColor: colors.black, backgroundColor: '#FFFC00', cornerSquareColor: colors.black, cornerDotColor: colors.black, dotType: 'rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'snapchat' } },
  { id: 'social-sc-3', name: 'Snapchat White', category: 'social', design: { dotColor: '#FFFC00', backgroundColor: colors.white, cornerSquareColor: '#FFFC00', cornerDotColor: colors.black, dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'snapchat' } },
  { id: 'social-sc-4', name: 'Snapchat Orange', category: 'social', design: { dotColor: colors.black, backgroundColor: '#fbbf24', cornerSquareColor: colors.black, cornerDotColor: colors.black, dotType: 'extra-rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'snapchat' } },

  // Pinterest variations (4 styles as shown in images)
  { id: 'social-pi-1', name: 'Pinterest Classic', category: 'social', design: { dotColor: '#E60023', backgroundColor: colors.white, cornerSquareColor: '#E60023', cornerDotColor: '#E60023', dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'pinterest' } },
  { id: 'social-pi-2', name: 'Pinterest Red BG', category: 'social', design: { dotColor: colors.white, backgroundColor: '#E60023', cornerSquareColor: colors.white, cornerDotColor: colors.white, dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'pinterest' } },
  { id: 'social-pi-3', name: 'Pinterest Light', category: 'social', design: { dotColor: '#E60023', backgroundColor: '#fef2f2', cornerSquareColor: '#E60023', cornerDotColor: '#E60023', dotType: 'rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'pinterest' } },
  { id: 'social-pi-4', name: 'Pinterest Pink', category: 'social', design: { dotColor: '#E60023', backgroundColor: '#fce7f3', cornerSquareColor: '#E60023', cornerDotColor: '#E60023', dotType: 'extra-rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'pinterest' } },

  // Gmail variations (4 styles as shown in images)
  { id: 'social-gm-1', name: 'Gmail Classic', category: 'social', design: { dotColor: '#EA4335', backgroundColor: colors.white, cornerSquareColor: '#EA4335', cornerDotColor: '#34A853', dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'gmail' } },
  { id: 'social-gm-2', name: 'Gmail Blue', category: 'social', design: { dotColor: '#4285F4', backgroundColor: colors.white, cornerSquareColor: '#4285F4', cornerDotColor: '#EA4335', dotType: 'rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'gmail' } },
  { id: 'social-gm-3', name: 'Gmail Purple', category: 'social', design: { dotColor: colors.purple, backgroundColor: colors.white, cornerSquareColor: '#EA4335', cornerDotColor: '#FBBC05', dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'gmail' } },
  { id: 'social-gm-4', name: 'Gmail Green', category: 'social', design: { dotColor: '#34A853', backgroundColor: '#f0fdf4', cornerSquareColor: '#EA4335', cornerDotColor: '#4285F4', dotType: 'extra-rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'gmail' } },

  // Google/Maps variations (4 styles as shown in images)
  { id: 'social-go-1', name: 'Google Classic', category: 'social', design: { dotColor: '#4285F4', backgroundColor: colors.white, cornerSquareColor: '#EA4335', cornerDotColor: '#34A853', dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'google' } },
  { id: 'social-go-2', name: 'Google Maps', category: 'social', design: { dotColor: '#34A853', backgroundColor: colors.white, cornerSquareColor: '#EA4335', cornerDotColor: '#4285F4', dotType: 'rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'google' } },
  { id: 'social-go-3', name: 'Google Drive', category: 'social', design: { dotColor: '#0F9D58', backgroundColor: colors.white, cornerSquareColor: '#4285F4', cornerDotColor: '#F4B400', dotType: 'extra-rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'google' } },
  { id: 'social-go-4', name: 'Google Yellow', category: 'social', design: { dotColor: '#F4B400', backgroundColor: '#fef3c7', cornerSquareColor: '#EA4335', cornerDotColor: '#4285F4', dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'google' } },

  // PayPal variations (4 styles as shown in images)
  { id: 'social-pp-1', name: 'PayPal Classic', category: 'social', design: { dotColor: '#003087', backgroundColor: colors.white, cornerSquareColor: '#003087', cornerDotColor: '#009CDE', dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'paypal' } },
  { id: 'social-pp-2', name: 'PayPal Blue', category: 'social', design: { dotColor: '#003087', backgroundColor: '#dbeafe', cornerSquareColor: '#003087', cornerDotColor: '#003087', dotType: 'rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'paypal' } },
  { id: 'social-pp-3', name: 'PayPal Light', category: 'social', design: { dotColor: '#009CDE', backgroundColor: colors.white, cornerSquareColor: '#003087', cornerDotColor: '#003087', dotType: 'extra-rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'paypal' } },
  { id: 'social-pp-4', name: 'PayPal Gradient', category: 'social', design: { dotColor: '#003087', backgroundColor: '#f0f9ff', cornerSquareColor: '#009CDE', cornerDotColor: '#003087', dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'paypal' } },

  // Twitch variations (4 styles as shown in images)
  { id: 'social-tw-1', name: 'Twitch Classic', category: 'social', design: { dotColor: '#9146FF', backgroundColor: colors.white, cornerSquareColor: '#9146FF', cornerDotColor: '#9146FF', dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'twitch' } },
  { id: 'social-tw-2', name: 'Twitch Purple BG', category: 'social', design: { dotColor: colors.white, backgroundColor: '#9146FF', cornerSquareColor: colors.white, cornerDotColor: colors.white, dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'twitch' } },
  { id: 'social-tw-3', name: 'Twitch Light', category: 'social', design: { dotColor: '#9146FF', backgroundColor: '#f3e8ff', cornerSquareColor: '#9146FF', cornerDotColor: '#9146FF', dotType: 'rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'twitch' } },
  { id: 'social-tw-4', name: 'Twitch Dark', category: 'social', design: { dotColor: '#9146FF', backgroundColor: '#1a1a2e', cornerSquareColor: '#9146FF', cornerDotColor: '#9146FF', dotType: 'extra-rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'twitch' } },

  // VK variations (4 styles as shown in images)
  { id: 'social-vk-1', name: 'VK Classic', category: 'social', design: { dotColor: '#0077FF', backgroundColor: colors.white, cornerSquareColor: '#0077FF', cornerDotColor: '#0077FF', dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'vk' } },
  { id: 'social-vk-2', name: 'VK Blue BG', category: 'social', design: { dotColor: colors.white, backgroundColor: '#0077FF', cornerSquareColor: colors.white, cornerDotColor: colors.white, dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'vk' } },
  { id: 'social-vk-3', name: 'VK Light', category: 'social', design: { dotColor: '#0077FF', backgroundColor: '#dbeafe', cornerSquareColor: '#0077FF', cornerDotColor: '#0077FF', dotType: 'rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'vk' } },
  { id: 'social-vk-4', name: 'VK Purple', category: 'social', design: { dotColor: '#a855f7', backgroundColor: '#f5f3ff', cornerSquareColor: '#0077FF', cornerDotColor: '#0077FF', dotType: 'extra-rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'vk' } },

  // WeChat variations (4 styles as shown in images)
  { id: 'social-wc-1', name: 'WeChat Classic', category: 'social', design: { dotColor: '#07C160', backgroundColor: colors.white, cornerSquareColor: '#07C160', cornerDotColor: '#07C160', dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'wechat' } },
  { id: 'social-wc-2', name: 'WeChat Green BG', category: 'social', design: { dotColor: colors.white, backgroundColor: '#07C160', cornerSquareColor: colors.white, cornerDotColor: colors.white, dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'wechat' } },
  { id: 'social-wc-3', name: 'WeChat Light', category: 'social', design: { dotColor: '#07C160', backgroundColor: '#dcfce7', cornerSquareColor: '#07C160', cornerDotColor: '#07C160', dotType: 'rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'wechat' } },
  { id: 'social-wc-4', name: 'WeChat Fresh', category: 'social', design: { dotColor: '#07C160', backgroundColor: '#f0fdf4', cornerSquareColor: '#07C160', cornerDotColor: '#07C160', dotType: 'extra-rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'wechat' } },

  // Email/Phone/SMS/WiFi utility templates (as shown in images)
  { id: 'social-em-1', name: 'Email Purple', category: 'social', design: { dotColor: '#8b5cf6', backgroundColor: colors.white, cornerSquareColor: '#8b5cf6', cornerDotColor: '#8b5cf6', dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'email' } },
  { id: 'social-em-2', name: 'Email Blue', category: 'social', design: { dotColor: '#3b82f6', backgroundColor: '#eff6ff', cornerSquareColor: '#3b82f6', cornerDotColor: '#3b82f6', dotType: 'rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'email' } },
  { id: 'social-em-3', name: 'Email Orange', category: 'social', design: { dotColor: '#f59e0b', backgroundColor: '#fef3c7', cornerSquareColor: '#f59e0b', cornerDotColor: '#f59e0b', dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'email' } },
  { id: 'social-em-4', name: 'Email Red', category: 'social', design: { dotColor: '#ef4444', backgroundColor: '#fef2f2', cornerSquareColor: '#ef4444', cornerDotColor: '#ef4444', dotType: 'extra-rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'email' } },

  { id: 'social-ph-1', name: 'Phone Green', category: 'social', design: { dotColor: '#22c55e', backgroundColor: colors.white, cornerSquareColor: '#22c55e', cornerDotColor: '#22c55e', dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'phone' } },
  { id: 'social-ph-2', name: 'Phone Pink', category: 'social', design: { dotColor: '#ec4899', backgroundColor: '#fdf2f8', cornerSquareColor: '#ec4899', cornerDotColor: '#ec4899', dotType: 'rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'phone' } },
  { id: 'social-ph-3', name: 'Phone Purple', category: 'social', design: { dotColor: '#a855f7', backgroundColor: '#faf5ff', cornerSquareColor: '#a855f7', cornerDotColor: '#a855f7', dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'phone' } },
  { id: 'social-ph-4', name: 'Phone Blue', category: 'social', design: { dotColor: colors.blue, backgroundColor: '#dbeafe', cornerSquareColor: colors.blue, cornerDotColor: colors.blue, dotType: 'extra-rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'phone' } },

  { id: 'social-sm-1', name: 'SMS Purple', category: 'social', design: { dotColor: '#ec4899', backgroundColor: colors.white, cornerSquareColor: '#8b5cf6', cornerDotColor: '#ec4899', dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'sms' } },
  { id: 'social-sm-2', name: 'SMS Blue', category: 'social', design: { dotColor: '#0ea5e9', backgroundColor: '#e0f2fe', cornerSquareColor: '#0ea5e9', cornerDotColor: '#0ea5e9', dotType: 'rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'sms' } },
  { id: 'social-sm-3', name: 'SMS Orange', category: 'social', design: { dotColor: '#f97316', backgroundColor: '#fff7ed', cornerSquareColor: '#f97316', cornerDotColor: '#f97316', dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'sms' } },
  { id: 'social-sm-4', name: 'SMS Gradient', category: 'social', design: { dotColor: '#f43f5e', backgroundColor: colors.white, cornerSquareColor: '#8b5cf6', cornerDotColor: '#ec4899', dotType: 'extra-rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'sms' } },

  { id: 'social-wf-1', name: 'WiFi Blue', category: 'social', design: { dotColor: '#3b82f6', backgroundColor: colors.white, cornerSquareColor: '#3b82f6', cornerDotColor: '#3b82f6', dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'wifi' } },
  { id: 'social-wf-2', name: 'WiFi Yellow', category: 'social', design: { dotColor: '#f59e0b', backgroundColor: '#fef3c7', cornerSquareColor: '#f59e0b', cornerDotColor: '#f59e0b', dotType: 'rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'wifi' } },
  { id: 'social-wf-3', name: 'WiFi Green', category: 'social', design: { dotColor: '#22c55e', backgroundColor: '#dcfce7', cornerSquareColor: '#22c55e', cornerDotColor: '#22c55e', dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'wifi' } },
  { id: 'social-wf-4', name: 'WiFi Pink', category: 'social', design: { dotColor: '#ec4899', backgroundColor: '#fdf2f8', cornerSquareColor: '#ec4899', cornerDotColor: '#ec4899', dotType: 'extra-rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'wifi' } },

  // App Store templates (with logo)
  { id: 'social-as-1', name: 'App Store Classic', category: 'social', logo: brandLogos.appstore, design: { dotColor: '#0D96F6', backgroundColor: colors.white, cornerSquareColor: '#0D96F6', cornerDotColor: '#0D96F6', dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'appstore' } },
  { id: 'social-as-2', name: 'App Store Blue BG', category: 'social', logo: brandLogos.appstore, design: { dotColor: colors.white, backgroundColor: '#0D96F6', cornerSquareColor: colors.white, cornerDotColor: colors.white, dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'appstore' } },
  { id: 'social-as-3', name: 'App Store Light', category: 'social', logo: brandLogos.appstore, design: { dotColor: '#0D96F6', backgroundColor: '#e0f2fe', cornerSquareColor: '#0D96F6', cornerDotColor: '#0D96F6', dotType: 'rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'appstore' } },
  { id: 'social-as-4', name: 'App Store Dark', category: 'social', logo: brandLogos.appstore, design: { dotColor: '#0D96F6', backgroundColor: '#1e3a5f', cornerSquareColor: '#0D96F6', cornerDotColor: '#0D96F6', dotType: 'extra-rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'appstore' } },

  // Google Play Store templates (with logo)
  { id: 'social-gp-1', name: 'Play Store Classic', category: 'social', logo: brandLogos.googleplay, design: { dotColor: '#34A853', backgroundColor: colors.white, cornerSquareColor: '#4285F4', cornerDotColor: '#EA4335', dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'googleplay' } },
  { id: 'social-gp-2', name: 'Play Store Green', category: 'social', logo: brandLogos.googleplay, design: { dotColor: '#34A853', backgroundColor: '#dcfce7', cornerSquareColor: '#34A853', cornerDotColor: '#34A853', dotType: 'rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'googleplay' } },
  { id: 'social-gp-3', name: 'Play Store Blue', category: 'social', logo: brandLogos.googleplay, design: { dotColor: '#4285F4', backgroundColor: '#dbeafe', cornerSquareColor: '#4285F4', cornerDotColor: '#4285F4', dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'googleplay' } },
  { id: 'social-gp-4', name: 'Play Store Dark', category: 'social', logo: brandLogos.googleplay, design: { dotColor: colors.white, backgroundColor: '#1e3a5f', cornerSquareColor: colors.white, cornerDotColor: colors.white, dotType: 'extra-rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'googleplay' } },

  // Spotify templates (with logo)
  { id: 'social-sp-1', name: 'Spotify Classic', category: 'social', logo: brandLogos.spotify, design: { dotColor: '#1DB954', backgroundColor: colors.white, cornerSquareColor: '#1DB954', cornerDotColor: '#1DB954', dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'spotify' } },
  { id: 'social-sp-2', name: 'Spotify Green BG', category: 'social', logo: brandLogos.spotify, design: { dotColor: colors.black, backgroundColor: '#1DB954', cornerSquareColor: colors.black, cornerDotColor: colors.black, dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'spotify' } },
  { id: 'social-sp-3', name: 'Spotify Light', category: 'social', logo: brandLogos.spotify, design: { dotColor: '#1DB954', backgroundColor: '#dcfce7', cornerSquareColor: '#1DB954', cornerDotColor: '#1DB954', dotType: 'rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'spotify' } },
  { id: 'social-sp-4', name: 'Spotify Dark', category: 'social', logo: brandLogos.spotify, design: { dotColor: '#1DB954', backgroundColor: '#191414', cornerSquareColor: '#1DB954', cornerDotColor: '#1DB954', dotType: 'extra-rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'spotify' } },

  // Deezer templates (with logo)
  { id: 'social-dz-1', name: 'Deezer Classic', category: 'social', logo: brandLogos.deezer, design: { dotColor: '#FF0092', backgroundColor: colors.white, cornerSquareColor: '#FF0092', cornerDotColor: '#FF0092', dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'deezer' } },
  { id: 'social-dz-2', name: 'Deezer Pink BG', category: 'social', logo: brandLogos.deezer, design: { dotColor: colors.white, backgroundColor: '#FF0092', cornerSquareColor: colors.white, cornerDotColor: colors.white, dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'deezer' } },
  { id: 'social-dz-3', name: 'Deezer Light', category: 'social', logo: brandLogos.deezer, design: { dotColor: '#FF0092', backgroundColor: '#fdf2f8', cornerSquareColor: '#FF0092', cornerDotColor: '#FF0092', dotType: 'rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'deezer' } },
  { id: 'social-dz-4', name: 'Deezer Purple', category: 'social', logo: brandLogos.deezer, design: { dotColor: '#a855f7', backgroundColor: '#faf5ff', cornerSquareColor: '#FF0092', cornerDotColor: '#FF0092', dotType: 'extra-rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'deezer' } },

  // SoundCloud templates (with logo)
  { id: 'social-scd-1', name: 'SoundCloud Classic', category: 'social', logo: brandLogos.soundcloud, design: { dotColor: '#FF3300', backgroundColor: colors.white, cornerSquareColor: '#FF3300', cornerDotColor: '#FF3300', dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'soundcloud' } },
  { id: 'social-scd-2', name: 'SoundCloud Orange BG', category: 'social', logo: brandLogos.soundcloud, design: { dotColor: colors.white, backgroundColor: '#FF3300', cornerSquareColor: colors.white, cornerDotColor: colors.white, dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'soundcloud' } },
  { id: 'social-scd-3', name: 'SoundCloud Light', category: 'social', logo: brandLogos.soundcloud, design: { dotColor: '#FF3300', backgroundColor: '#fff7ed', cornerSquareColor: '#FF3300', cornerDotColor: '#FF3300', dotType: 'rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'soundcloud' } },
  { id: 'social-scd-4', name: 'SoundCloud Dark', category: 'social', logo: brandLogos.soundcloud, design: { dotColor: '#FF3300', backgroundColor: '#1a1a2e', cornerSquareColor: '#FF3300', cornerDotColor: '#FF3300', dotType: 'extra-rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'soundcloud' } },

  // Airbnb templates (with logo)
  { id: 'social-ab-1', name: 'Airbnb Classic', category: 'social', logo: brandLogos.airbnb, design: { dotColor: '#FF5A5F', backgroundColor: colors.white, cornerSquareColor: '#FF5A5F', cornerDotColor: '#FF5A5F', dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'airbnb' } },
  { id: 'social-ab-2', name: 'Airbnb Red BG', category: 'social', logo: brandLogos.airbnb, design: { dotColor: colors.white, backgroundColor: '#FF5A5F', cornerSquareColor: colors.white, cornerDotColor: colors.white, dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'airbnb' } },
  { id: 'social-ab-3', name: 'Airbnb Light', category: 'social', logo: brandLogos.airbnb, design: { dotColor: '#FF5A5F', backgroundColor: '#fef2f2', cornerSquareColor: '#FF5A5F', cornerDotColor: '#FF5A5F', dotType: 'rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'airbnb' } },
  { id: 'social-ab-4', name: 'Airbnb Coral', category: 'social', logo: brandLogos.airbnb, design: { dotColor: '#FF5A5F', backgroundColor: '#fce7f3', cornerSquareColor: '#FF5A5F', cornerDotColor: '#FF5A5F', dotType: 'extra-rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'airbnb' } },

  // Booking.com templates (with logo)
  { id: 'social-bk-1', name: 'Booking Classic', category: 'social', logo: brandLogos.booking, design: { dotColor: '#003580', backgroundColor: colors.white, cornerSquareColor: '#003580', cornerDotColor: '#003580', dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'booking' } },
  { id: 'social-bk-2', name: 'Booking Blue BG', category: 'social', logo: brandLogos.booking, design: { dotColor: colors.white, backgroundColor: '#003580', cornerSquareColor: colors.white, cornerDotColor: colors.white, dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'booking' } },
  { id: 'social-bk-3', name: 'Booking Light', category: 'social', logo: brandLogos.booking, design: { dotColor: '#003580', backgroundColor: '#dbeafe', cornerSquareColor: '#003580', cornerDotColor: '#003580', dotType: 'rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'booking' } },
  { id: 'social-bk-4', name: 'Booking Dark', category: 'social', logo: brandLogos.booking, design: { dotColor: colors.white, backgroundColor: '#1e3a5f', cornerSquareColor: colors.white, cornerDotColor: colors.white, dotType: 'extra-rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'booking' } },

  // TripAdvisor templates (with logo)
  { id: 'social-ta-1', name: 'TripAdvisor Classic', category: 'social', logo: brandLogos.tripadvisor, design: { dotColor: '#34E0A1', backgroundColor: colors.white, cornerSquareColor: '#34E0A1', cornerDotColor: '#34E0A1', dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'tripadvisor' } },
  { id: 'social-ta-2', name: 'TripAdvisor Green BG', category: 'social', logo: brandLogos.tripadvisor, design: { dotColor: colors.white, backgroundColor: '#34E0A1', cornerSquareColor: colors.white, cornerDotColor: colors.white, dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'tripadvisor' } },
  { id: 'social-ta-3', name: 'TripAdvisor Light', category: 'social', logo: brandLogos.tripadvisor, design: { dotColor: '#34E0A1', backgroundColor: '#dcfce7', cornerSquareColor: '#34E0A1', cornerDotColor: '#34E0A1', dotType: 'rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'tripadvisor' } },
  { id: 'social-ta-4', name: 'TripAdvisor Dark', category: 'social', logo: brandLogos.tripadvisor, design: { dotColor: '#34E0A1', backgroundColor: '#1a2e1a', cornerSquareColor: '#34E0A1', cornerDotColor: '#34E0A1', dotType: 'extra-rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'tripadvisor' } },

  // Microsoft templates (with logo)
  { id: 'social-ms-1', name: 'Microsoft Classic', category: 'social', logo: brandLogos.microsoft, design: { dotColor: '#00A4EF', backgroundColor: colors.white, cornerSquareColor: '#F25022', cornerDotColor: '#7FBA00', dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'microsoft' } },
  { id: 'social-ms-2', name: 'Microsoft Orange', category: 'social', logo: brandLogos.microsoft, design: { dotColor: '#F25022', backgroundColor: '#fff7ed', cornerSquareColor: '#F25022', cornerDotColor: '#F25022', dotType: 'rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'microsoft' } },
  { id: 'social-ms-3', name: 'Microsoft Green', category: 'social', logo: brandLogos.microsoft, design: { dotColor: '#7FBA00', backgroundColor: '#dcfce7', cornerSquareColor: '#7FBA00', cornerDotColor: '#7FBA00', dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'microsoft' } },
  { id: 'social-ms-4', name: 'Microsoft Blue', category: 'social', logo: brandLogos.microsoft, design: { dotColor: '#00A4EF', backgroundColor: '#dbeafe', cornerSquareColor: '#00A4EF', cornerDotColor: '#00A4EF', dotType: 'extra-rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'microsoft' } },

  // Canva templates (with logo)
  { id: 'social-cv-1', name: 'Canva Classic', category: 'social', logo: brandLogos.canva, design: { dotColor: '#00C4CC', backgroundColor: colors.white, cornerSquareColor: '#00C4CC', cornerDotColor: '#00C4CC', dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'canva' } },
  { id: 'social-cv-2', name: 'Canva Teal BG', category: 'social', logo: brandLogos.canva, design: { dotColor: colors.white, backgroundColor: '#00C4CC', cornerSquareColor: colors.white, cornerDotColor: colors.white, dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'canva' } },
  { id: 'social-cv-3', name: 'Canva Light', category: 'social', logo: brandLogos.canva, design: { dotColor: '#00C4CC', backgroundColor: '#f0fdfa', cornerSquareColor: '#00C4CC', cornerDotColor: '#00C4CC', dotType: 'rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'canva' } },
  { id: 'social-cv-4', name: 'Canva Purple', category: 'social', logo: brandLogos.canva, design: { dotColor: '#7B2FF7', backgroundColor: '#f5f3ff', cornerSquareColor: '#00C4CC', cornerDotColor: '#00C4CC', dotType: 'extra-rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'canva' } },

  // Amazon templates (with logo)
  { id: 'social-am-1', name: 'Amazon Classic', category: 'social', logo: brandLogos.amazon, design: { dotColor: '#FF9900', backgroundColor: colors.white, cornerSquareColor: '#FF9900', cornerDotColor: '#FF9900', dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'amazon' } },
  { id: 'social-am-2', name: 'Amazon Yellow BG', category: 'social', logo: brandLogos.amazon, design: { dotColor: colors.black, backgroundColor: '#FEBD69', cornerSquareColor: colors.black, cornerDotColor: colors.black, dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'amazon' } },
  { id: 'social-am-3', name: 'Amazon Light', category: 'social', logo: brandLogos.amazon, design: { dotColor: '#FF9900', backgroundColor: '#fef3c7', cornerSquareColor: '#FF9900', cornerDotColor: '#FF9900', dotType: 'rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'amazon' } },
  { id: 'social-am-4', name: 'Amazon Dark', category: 'social', logo: brandLogos.amazon, design: { dotColor: '#FF9900', backgroundColor: '#232F3E', cornerSquareColor: '#FF9900', cornerDotColor: '#FF9900', dotType: 'extra-rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'amazon' } },

  // Clubhouse templates (with logo)
  { id: 'social-ch-1', name: 'Clubhouse Classic', category: 'social', logo: brandLogos.clubhouse, design: { dotColor: colors.black, backgroundColor: '#F5E600', cornerSquareColor: colors.black, cornerDotColor: colors.black, dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'clubhouse' } },
  { id: 'social-ch-2', name: 'Clubhouse White', category: 'social', logo: brandLogos.clubhouse, design: { dotColor: colors.black, backgroundColor: colors.white, cornerSquareColor: colors.black, cornerDotColor: colors.black, dotType: 'rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'clubhouse' } },
  { id: 'social-ch-3', name: 'Clubhouse Light', category: 'social', logo: brandLogos.clubhouse, design: { dotColor: '#F5E600', backgroundColor: '#fef3c7', cornerSquareColor: '#F5E600', cornerDotColor: colors.black, dotType: 'dots', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'clubhouse' } },
  { id: 'social-ch-4', name: 'Clubhouse Dark', category: 'social', logo: brandLogos.clubhouse, design: { dotColor: '#F5E600', backgroundColor: colors.black, cornerSquareColor: '#F5E600', cornerDotColor: '#F5E600', dotType: 'extra-rounded', cornerSquareType: 'extra-rounded', cornerDotType: 'dot' }, preview: { icon: 'clubhouse' } },
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
  const baseDesign = {
    ...defaultQRDesign,
    ...template.design,
    cornerSquareColor: template.design.cornerSquareColor || template.design.dotColor,
    cornerDotColor: template.design.cornerDotColor || template.design.dotColor,
  };

  // Only apply logo if template has one, with a reasonable size
  if (template.logo) {
    return {
      ...baseDesign,
      logo: template.logo,
      logoSize: 0.2, // Keep logo small to maintain scanability
    };
  }

  return baseDesign;
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
