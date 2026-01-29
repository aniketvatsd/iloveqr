import { forwardRef, HTMLAttributes } from 'react';
import { clsx } from 'clsx';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'bordered' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hoverable?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ 
    className, 
    variant = 'default', 
    padding = 'md',
    hoverable = false,
    children, 
    ...props 
  }, ref) => {
    const baseStyles = 'rounded-2xl transition-all duration-200';

    const variants = {
      default: 'bg-surface',
      bordered: 'bg-surface border border-border',
      elevated: 'bg-surface shadow-lg',
    };

    const paddings = {
      none: '',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    };

    return (
      <div
        ref={ref}
        className={clsx(
          baseStyles,
          variants[variant],
          paddings[padding],
          hoverable && 'hover:border-primary/50 hover:shadow-glow cursor-pointer',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;

// Card Header component
export function CardHeader({ 
  className, 
  children, 
  ...props 
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx('mb-4', className)} {...props}>
      {children}
    </div>
  );
}

// Card Title component
export function CardTitle({ 
  className, 
  children, 
  ...props 
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 
      className={clsx('text-lg font-semibold text-text-primary', className)} 
      {...props}
    >
      {children}
    </h3>
  );
}

// Card Description component
export function CardDescription({ 
  className, 
  children, 
  ...props 
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p 
      className={clsx('text-sm text-text-secondary mt-1', className)} 
      {...props}
    >
      {children}
    </p>
  );
}

// Card Content component
export function CardContent({ 
  className, 
  children, 
  ...props 
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx('', className)} {...props}>
      {children}
    </div>
  );
}

// Card Footer component
export function CardFooter({ 
  className, 
  children, 
  ...props 
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div 
      className={clsx('mt-4 pt-4 border-t border-border', className)} 
      {...props}
    >
      {children}
    </div>
  );
}
