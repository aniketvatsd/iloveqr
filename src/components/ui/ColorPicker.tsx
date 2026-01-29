'use client';

import { forwardRef, InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';

interface ColorPickerProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  showHex?: boolean;
}

const ColorPicker = forwardRef<HTMLInputElement, ColorPickerProps>(
  ({ 
    className, 
    label,
    showHex = true,
    value = '#000000',
    ...props 
  }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-text-secondary mb-2">
            {label}
          </label>
        )}
        <div className="flex items-center gap-3">
          <div className="relative">
            <input
              ref={ref}
              type="color"
              value={value}
              className={clsx(
                'w-12 h-12 rounded-xl cursor-pointer',
                'border-2 border-border hover:border-primary',
                'transition-colors duration-200',
                className
              )}
              {...props}
            />
          </div>
          {showHex && (
            <span className="text-sm font-mono text-text-secondary uppercase">
              {value?.toString()}
            </span>
          )}
        </div>
      </div>
    );
  }
);

ColorPicker.displayName = 'ColorPicker';

export default ColorPicker;
