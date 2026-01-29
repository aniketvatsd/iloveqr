'use client';

import { useRef, useState, useEffect } from 'react';
import { QRType } from '@/types/qr';
import { 
  Link, 
  AtSign, 
  Phone, 
  MessageSquare, 
  Type, 
  FileText, 
  Wifi,
  Instagram,
  Youtube,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface QRTypeTabBarProps {
  selectedType: QRType;
  onTypeChange: (type: QRType) => void;
}

const qrTypes: { id: QRType; label: string; icon: React.ElementType }[] = [
  { id: 'url', label: 'WEBSITE URL', icon: Link },
  { id: 'email', label: 'EMAIL', icon: AtSign },
  { id: 'phone', label: 'PHONE CALL', icon: Phone },
  { id: 'sms', label: 'MESSAGE SMS', icon: MessageSquare },
  { id: 'text', label: 'PLAIN TEXT', icon: Type },
  { id: 'pdf', label: 'PDF DOCUMENT', icon: FileText },
  { id: 'wifi', label: 'WIFI', icon: Wifi },
];

export default function QRTypeTabBar({ selectedType, onTypeChange }: QRTypeTabBarProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const updateArrows = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    updateArrows();
    window.addEventListener('resize', updateArrows);
    return () => window.removeEventListener('resize', updateArrows);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(updateArrows, 300);
    }
  };

  return (
    <div className="relative bg-surface border-b border-border">
      <div className="max-w-7xl mx-auto">
        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-surface/90 backdrop-blur-sm border border-border rounded-full flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-surface-light transition-colors shadow-lg"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {/* Tabs Container */}
        <div
          ref={scrollRef}
          onScroll={updateArrows}
          className="flex items-center gap-1 px-4 py-3 overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {qrTypes.map((type) => {
            const Icon = type.icon;
            const isSelected = selectedType === type.id;

            return (
              <button
                key={type.id}
                onClick={() => onTypeChange(type.id)}
                className={`
                  flex flex-col items-center gap-2 px-5 py-3 rounded-xl
                  transition-all duration-200 whitespace-nowrap min-w-[100px]
                  ${isSelected 
                    ? 'text-primary' 
                    : 'text-text-secondary hover:text-text-primary hover:bg-surface-light'
                  }
                `}
              >
                <Icon className={`w-5 h-5 ${isSelected ? 'text-primary' : ''}`} />
                <span className={`text-xs font-medium tracking-wide ${isSelected ? 'text-primary' : ''}`}>
                  {type.label}
                </span>
                {isSelected && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-primary rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right Arrow */}
        {showRightArrow && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-hover transition-colors shadow-lg"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
