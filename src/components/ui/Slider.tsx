'use client';

import { forwardRef, InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';

interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  showValue?: boolean;
  valueFormatter?: (value: number) => string;
}

const Slider = forwardRef<HTMLInputElement, SliderProps>(
  ({ 
    className, 
    label,
    showValue = true,
    valueFormatter,
    value,
    min = 0,
    max = 100,
    ...props 
  }, ref) => {
    const currentValue = typeof value === 'number' ? value : Number(value) || 0;
    const displayValue = valueFormatter 
      ? valueFormatter(currentValue)
      : currentValue.toString();

    return (
      <div className="w-full">
        {(label || showValue) && (
          <div className="flex items-center justify-between mb-2">
            {label && (
              <label className="text-sm font-medium text-text-secondary">
                {label}
              </label>
            )}
            {showValue && (
              <span className="text-sm text-text-muted">
                {displayValue}
              </span>
            )}
          </div>
        )}
        <input
          ref={ref}
          type="range"
          value={value}
          min={min}
          max={max}
          className={clsx(
            'w-full h-2 rounded-full appearance-none cursor-pointer',
            'bg-surface-lighter',
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

Slider.displayName = 'Slider';

export default Slider;
