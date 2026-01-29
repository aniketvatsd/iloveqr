'use client';

import { QRType, qrTypeOptions } from '@/types/qr';
import { 
  Link, 
  Type, 
  Mail, 
  Phone, 
  MessageSquare, 
  Wifi,
  FileText
} from 'lucide-react';

const iconMap = {
  Link,
  Type,
  Mail,
  Phone,
  MessageSquare,
  Wifi,
  FileText,
};

interface QRTypeSelectorProps {
  selectedType: QRType;
  onTypeChange: (type: QRType) => void;
}

export default function QRTypeSelector({ selectedType, onTypeChange }: QRTypeSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {qrTypeOptions.map((option) => {
        const Icon = iconMap[option.icon as keyof typeof iconMap] || Link;
        const isSelected = selectedType === option.id;
        
        return (
          <button
            key={option.id}
            onClick={() => onTypeChange(option.id)}
            className={`
              flex flex-col items-center gap-2 p-4 rounded-xl
              border transition-all duration-200
              min-w-[100px]
              ${isSelected 
                ? 'bg-primary/10 border-primary text-primary' 
                : 'bg-surface-light border-border text-text-secondary hover:border-primary/50 hover:text-text-primary'
              }
            `}
          >
            <Icon className="w-5 h-5" />
            <span className="text-xs font-medium whitespace-nowrap">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
