'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface AdSlotProps {
  position: string;
  className?: string;
  minHeight?: number;
}

/**
 * AdSlot Component
 * 
 * A reusable, SSR-safe advertisement placeholder component.
 * Designed to be easily replaceable with Google AdSense/AdX code.
 * 
 * Positions:
 * - top-leaderboard: Below navigation (728x90)
 * - between-steps: Between Step 2 & 3 (responsive)
 * - preview-bottom: Below preview panel (300x250)
 * - homepage-top: Homepage leaderboard
 * - homepage-bottom: Homepage footer area
 * 
 * To integrate AdSense, replace placeholder with:
 * <ins className="adsbygoogle" data-ad-client="ca-pub-XXX" data-ad-slot="XXX" />
 */
export default function AdSlot({ 
  position, 
  className = '',
  minHeight = 90 
}: AdSlotProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Determine ad dimensions based on position
  const getAdConfig = () => {
    switch (position) {
      case 'top-leaderboard':
        return { 
          minHeight: 90, 
          maxWidth: '728px',
          label: 'Leaderboard Ad'
        };
      case 'between-steps':
        return { 
          minHeight: 100, 
          maxWidth: '100%',
          label: 'Horizontal Ad'
        };
      case 'preview-bottom':
        return { 
          minHeight: 250, 
          maxWidth: '300px',
          label: 'Sidebar Ad'
        };
      case 'homepage-top':
      case 'homepage-bottom':
        return { 
          minHeight: 90, 
          maxWidth: '728px',
          label: 'Banner Ad'
        };
      default:
        return { 
          minHeight, 
          maxWidth: '100%',
          label: 'Advertisement'
        };
    }
  };

  const config = getAdConfig();

  if (!mounted) {
    return (
      <div 
        className={`bg-surface-light/30 rounded-xl ${className}`}
        style={{ minHeight: config.minHeight, maxWidth: config.maxWidth }}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className={`
        relative overflow-hidden rounded-xl
        bg-gradient-to-br from-surface-light/50 to-surface/50
        border border-dashed border-border
        flex flex-col items-center justify-center
        transition-all duration-300
        ${className}
      `}
      style={{ 
        minHeight: config.minHeight,
        maxWidth: config.maxWidth,
        margin: config.maxWidth !== '100%' ? '0 auto' : undefined,
      }}
      data-ad-slot={position}
      aria-label="Advertisement"
    >
      {/* 
        ADSENSE INTEGRATION POINT
        --------------------------
        Replace this placeholder content with your AdSense code:
        
        <ins className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot="XXXXXXXXXX"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        
        Add to useEffect:
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      */}
      
      {/* Dev mode placeholder */}
      <div className="text-center p-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface-lighter/50 rounded-full mb-2">
          <span className="text-[10px] text-text-muted uppercase tracking-wider font-semibold">
            ADS
          </span>
        </div>
        <p className="text-text-muted/60 text-xs">
          Your brand deserves<br />premium exposure.
        </p>
        <p className="text-text-muted/40 text-[10px] mt-2">
          Advertise in this strategic space
        </p>
      </div>

      {/* Close button placeholder */}
      <button 
        className="absolute top-2 right-2 p-1 text-text-muted/30 hover:text-text-muted/50 transition-colors"
        aria-label="Close ad"
      >
        <X className="w-3 h-3" />
      </button>

      {/* ADD MY ADS link */}
      <div className="absolute bottom-2 right-2">
        <span className="text-[8px] text-text-muted/30 uppercase tracking-wider hover:text-text-muted/50 cursor-pointer transition-colors">
          ADD MY ADS
        </span>
      </div>
    </div>
  );
}

/**
 * Lazy-loaded version for below-the-fold ads
 */
export function AdSlotLazy(props: AdSlotProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    const element = document.querySelector(`[data-ad-lazy="${props.position}"]`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [props.position]);

  if (!isVisible) {
    return (
      <div 
        data-ad-lazy={props.position}
        className={`bg-surface-light/30 rounded-xl ${props.className}`}
        style={{ minHeight: props.minHeight || 90 }}
      />
    );
  }

  return <AdSlot {...props} />;
}
