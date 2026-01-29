'use client';

import { useRef } from 'react';
import { Palette, Image, Upload, X, Check, ZoomIn } from 'lucide-react';
import Slider from '@/components/ui/Slider';

interface QRStyleSelectorProps {
  selectedStyle: 'custom' | 'image';
  onStyleChange: (style: 'custom' | 'image') => void;
  backgroundImage?: string;
  backgroundImageOpacity: number;
  backgroundImageZoom: number;
  onBackgroundImageChange: (image: string | undefined) => void;
  onBackgroundImageOpacityChange: (opacity: number) => void;
  onBackgroundImageZoomChange: (zoom: number) => void;
}

const styles = [
  {
    id: 'custom' as const,
    title: 'Custom QR Code',
    description: 'Logo, Shapes, Colors...',
    icon: Palette,
  },
  {
    id: 'image' as const,
    title: 'Image QR Code',
    description: 'Your image in the QR Code',
    icon: Image,
  },
];

export default function QRStyleSelector({ 
  selectedStyle, 
  onStyleChange,
  backgroundImage,
  backgroundImageOpacity,
  backgroundImageZoom,
  onBackgroundImageChange,
  onBackgroundImageOpacityChange,
  onBackgroundImageZoomChange,
}: QRStyleSelectorProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onBackgroundImageChange(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    onBackgroundImageChange(undefined);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-4">
      {/* Style Selection Cards */}
      <div className="grid grid-cols-2 gap-4">
        {styles.map((style) => {
          const isSelected = selectedStyle === style.id;
          
          return (
            <button
              key={style.id}
              onClick={() => onStyleChange(style.id)}
              className={`
                relative p-4 rounded-xl border-2 transition-all duration-200
                flex flex-col items-center text-center
                ${isSelected 
                  ? 'border-primary bg-primary/5' 
                  : 'border-border hover:border-primary/50 bg-surface-light'
                }
              `}
            >
              {/* Preview Area */}
              <div className="w-full aspect-square rounded-lg bg-surface-lighter mb-4 flex items-center justify-center overflow-hidden relative">
                {style.id === 'image' && backgroundImage ? (
                  <>
                    <img 
                      src={backgroundImage} 
                      alt="Background preview" 
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ 
                        opacity: backgroundImageOpacity / 100,
                        transform: `scale(${backgroundImageZoom / 100})`
                      }}
                    />
                    <div className="relative grid grid-cols-3 gap-1 p-4">
                      {[...Array(9)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-6 h-6 rounded-sm bg-white border-2 border-gray-900 ${[0, 2, 6].includes(i) ? 'rounded-lg' : ''}`}
                          style={{ opacity: [1, 4, 8].includes(i) ? 0.3 : 1 }}
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="grid grid-cols-3 gap-1 p-4">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className={`
                          w-6 h-6 rounded-sm
                          ${style.id === 'custom' 
                            ? 'bg-gradient-to-br from-orange-500 to-blue-500' 
                            : 'bg-gray-900'
                          }
                          ${[0, 2, 6].includes(i) ? 'rounded-lg' : ''}
                        `}
                        style={{ opacity: [1, 4, 8].includes(i) ? 0.3 : 1 }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Title & Description */}
              <h3 className="font-semibold text-text-primary mb-1">{style.title}</h3>
              <p className="text-xs text-text-muted">{style.description}</p>

              {/* Selected indicator */}
              {isSelected && (
                <div className="absolute top-3 right-3 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Image Upload & Controls - Only shown when "Image QR Code" is selected */}
      {selectedStyle === 'image' && (
        <div className="p-4 bg-surface-light border border-border rounded-xl animate-fade-in space-y-4">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          
          {backgroundImage ? (
            <>
              {/* Image Preview with Controls */}
              <div className="flex gap-4">
                {/* Thumbnail */}
                <div className="relative">
                  <div className="w-24 h-24 rounded-lg overflow-hidden bg-surface border-2 border-primary">
                    <img 
                      src={backgroundImage} 
                      alt="Background preview" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Remove button */}
                  <button
                    onClick={removeImage}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                </div>

                {/* Sliders */}
                <div className="flex-1 space-y-3">
                  {/* Opacity Slider */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
                        <div className="w-4 h-4 bg-white/80 rounded-sm" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-text-secondary">Opacity</span>
                          <span className="text-xs font-medium text-text-primary bg-primary px-2 py-0.5 rounded">
                            {backgroundImageOpacity} %
                          </span>
                        </div>
                        <input
                          type="range"
                          min={10}
                          max={100}
                          value={backgroundImageOpacity}
                          onChange={(e) => onBackgroundImageOpacityChange(Number(e.target.value))}
                          className="w-full h-2 rounded-full appearance-none cursor-pointer bg-primary"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Zoom Slider */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
                        <ZoomIn className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-text-secondary">Zoom</span>
                          <span className="text-xs font-medium text-text-primary bg-primary px-2 py-0.5 rounded">
                            {backgroundImageZoom} %
                          </span>
                        </div>
                        <input
                          type="range"
                          min={50}
                          max={200}
                          value={backgroundImageZoom}
                          onChange={(e) => onBackgroundImageZoomChange(Number(e.target.value))}
                          className="w-full h-2 rounded-full appearance-none cursor-pointer bg-primary"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tip */}
              <div className="text-xs text-text-muted">
                Tip: Adjust opacity for better QR code visibility
              </div>
            </>
          ) : (
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full p-6 border-2 border-dashed border-border rounded-lg hover:border-primary/50 transition-colors text-center group"
            >
              <Upload className="w-8 h-8 text-text-muted mx-auto mb-2 group-hover:text-primary transition-colors" />
              <p className="text-sm text-text-primary font-medium">Upload your image</p>
              <p className="text-xs text-text-muted mt-1">PNG, JPG, or GIF up to 5MB</p>
              <p className="text-xs text-primary mt-2">This image will cover your entire QR code</p>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
