'use client';

import { QRDesign, DotType, CornerSquareType, CornerDotType, QRStyleMode, TextFont, QRTextOverlay } from '@/types/qr';
import Slider from '@/components/ui/Slider';
import ColorPicker from '@/components/ui/ColorPicker';
import { 
  ChevronDown, 
  ChevronRight,
  Upload, 
  X, 
  Palette,
  Type,
  Circle,
  Square,
  Image,
  Layers,
  Grid3X3,
  ZoomIn,
  Check,
  LayoutGrid
} from 'lucide-react';
import { useState, useRef } from 'react';
import TemplatesModal from './TemplatesModal';
import { getFeaturedTemplates, applyTemplate } from '@/lib/qr-templates';

interface QRDesignOptionsProps {
  design: QRDesign;
  onChange: (design: Partial<QRDesign>) => void;
  selectedStyle: QRStyleMode;
}

const dotTypes: { value: DotType; label: string }[] = [
  { value: 'square', label: 'Square' },
  { value: 'dots', label: 'Dots' },
  { value: 'rounded', label: 'Rounded' },
  { value: 'extra-rounded', label: 'Extra Rounded' },
  { value: 'classy', label: 'Classy' },
  { value: 'classy-rounded', label: 'Classy Rounded' },
];

const cornerSquareTypes: { value: CornerSquareType; label: string }[] = [
  { value: 'square', label: 'Square' },
  { value: 'extra-rounded', label: 'Rounded' },
  { value: 'dot', label: 'Dot' },
];

const cornerDotTypes: { value: CornerDotType; label: string }[] = [
  { value: 'square', label: 'Square' },
  { value: 'dot', label: 'Dot' },
];

const fontOptions: TextFont[] = ['Arial', 'Helvetica', 'Times', 'Courier', 'Verdana', 'Georgia'];

interface CollapsibleSectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function CollapsibleSection({ title, icon, children, defaultOpen = false }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 hover:bg-surface-light/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="text-text-muted">{icon}</span>
          <span className="font-medium text-text-primary">{title}</span>
        </div>
        {isOpen ? (
          <ChevronDown className="w-5 h-5 text-text-muted" />
        ) : (
          <ChevronRight className="w-5 h-5 text-text-muted" />
        )}
      </button>
      {isOpen && (
        <div className="px-4 pb-4 animate-fade-in">
          {children}
        </div>
      )}
    </div>
  );
}

export default function QRDesignOptions({ design, onChange, selectedStyle }: QRDesignOptionsProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const bgFileInputRef = useRef<HTMLInputElement>(null);
  const [activeTab, setActiveTab] = useState<'logo' | 'text'>('logo');
  const [showTemplatesModal, setShowTemplatesModal] = useState(false);

  const featuredTemplates = getFeaturedTemplates(12);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onChange({ logo: event.target?.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBackgroundImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onChange({ backgroundImage: event.target?.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const removeLogo = () => {
    onChange({ logo: undefined });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removeBackgroundImage = () => {
    onChange({ backgroundImage: undefined });
    if (bgFileInputRef.current) {
      bgFileInputRef.current.value = '';
    }
  };

  const updateTextOverlay = (updates: Partial<QRTextOverlay>) => {
    onChange({
      textOverlay: {
        ...design.textOverlay,
        ...updates,
      },
    });
  };

  return (
    <>
      <div className="border border-border rounded-xl overflow-hidden bg-surface-light/30">
        {/* Choose a Design Template */}
        {selectedStyle === 'custom' && (
          <CollapsibleSection 
            title="Choose a Design Template" 
            icon={<Palette className="w-5 h-5" />}
            defaultOpen={true}
          >
            <div className="space-y-3">
              {/* Quick Templates Grid */}
              <div className="grid grid-cols-6 gap-2">
                {featuredTemplates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => onChange(applyTemplate(template))}
                    className="group relative aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-primary transition-all"
                    title={template.name}
                  >
                    <div 
                      className="absolute inset-0 flex items-center justify-center p-1"
                      style={{ backgroundColor: template.design.backgroundColor || '#ffffff' }}
                    >
                      <div className="grid grid-cols-3 gap-0.5 w-full h-full">
                        {[...Array(9)].map((_, i) => (
                          <div 
                            key={i}
                            className={`${template.design.dotType === 'dots' ? 'rounded-full' : 'rounded-sm'} ${[0, 2, 6].includes(i) ? 'border' : ''}`}
                            style={{ 
                              backgroundColor: [0, 2, 6].includes(i) ? 'transparent' : template.design.dotColor,
                              borderColor: template.design.cornerSquareColor || template.design.dotColor,
                              opacity: [1, 3, 5, 7].includes(i) ? 0.3 : 1,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* View All Templates Button */}
              <button
                onClick={() => setShowTemplatesModal(true)}
                className="w-full py-3 bg-surface border border-border rounded-lg text-sm font-medium text-text-primary hover:border-primary hover:bg-primary/5 transition-colors flex items-center justify-center gap-2"
              >
                <LayoutGrid className="w-4 h-4" />
                View All Templates (500+)
              </button>
            </div>
          </CollapsibleSection>
        )}

        {/* Background Section - For Image Mode */}
        {selectedStyle === 'image' && (
          <CollapsibleSection 
            title="Background" 
            icon={<Image className="w-5 h-5" />}
            defaultOpen={true}
          >
            <div className="space-y-4">
              <input
                ref={bgFileInputRef}
                type="file"
                accept="image/*"
                onChange={handleBackgroundImageUpload}
                className="hidden"
              />

              {design.backgroundImage ? (
                <>
                  <div className="flex gap-4">
                    <div className="relative shrink-0">
                      <div className="w-24 h-24 rounded-lg overflow-hidden bg-surface border-2 border-primary">
                        <img 
                          src={design.backgroundImage} 
                          alt="Background preview" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <button
                        onClick={removeBackgroundImage}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors"
                      >
                        <X className="w-4 h-4 text-white" />
                      </button>
                    </div>

                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-primary flex items-center justify-center shrink-0">
                          <div className="w-4 h-4 bg-white/80 rounded-sm" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-text-secondary">Opacity</span>
                            <span className="text-xs font-medium text-white bg-primary px-2 py-0.5 rounded">
                              {design.backgroundImageOpacity} %
                            </span>
                          </div>
                          <input
                            type="range"
                            min={10}
                            max={100}
                            value={design.backgroundImageOpacity}
                            onChange={(e) => onChange({ backgroundImageOpacity: Number(e.target.value) })}
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-primary flex items-center justify-center shrink-0">
                          <ZoomIn className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-text-secondary">Zoom</span>
                            <span className="text-xs font-medium text-white bg-primary px-2 py-0.5 rounded">
                              {design.backgroundImageZoom} %
                            </span>
                          </div>
                          <input
                            type="range"
                            min={50}
                            max={200}
                            value={design.backgroundImageZoom}
                            onChange={(e) => onChange({ backgroundImageZoom: Number(e.target.value) })}
                            className="w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="w-12 h-12 rounded border-2 border-primary overflow-hidden">
                      <img 
                        src={design.backgroundImage} 
                        alt="Thumbnail" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <button
                  onClick={() => bgFileInputRef.current?.click()}
                  className="w-full p-6 border-2 border-dashed border-border rounded-lg hover:border-primary/50 transition-colors text-center group"
                >
                  <Upload className="w-8 h-8 text-text-muted mx-auto mb-2 group-hover:text-primary transition-colors" />
                  <p className="text-sm text-text-primary font-medium">Upload background image</p>
                  <p className="text-xs text-text-muted mt-1">PNG, JPG up to 5MB</p>
                </button>
              )}
            </div>
          </CollapsibleSection>
        )}

        {/* Add Logo & Text */}
        <CollapsibleSection 
          title="Add Logo & Text" 
          icon={<Type className="w-5 h-5" />}
        >
          <div className="space-y-4">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleLogoUpload}
              className="hidden"
            />
            
            {/* Tab buttons */}
            <div className="flex">
              <button 
                onClick={() => setActiveTab('logo')}
                className={`flex-1 py-2.5 px-4 text-sm font-medium transition-colors rounded-l-lg border ${
                  activeTab === 'logo' 
                    ? 'bg-surface border-border text-text-primary' 
                    : 'bg-surface-light border-border text-text-secondary hover:text-text-primary'
                }`}
              >
                Add Logo
              </button>
              <button 
                onClick={() => setActiveTab('text')}
                className={`flex-1 py-2.5 px-4 text-sm font-medium transition-colors rounded-r-lg border-t border-r border-b ${
                  activeTab === 'text' 
                    ? 'bg-surface border-border text-text-primary' 
                    : 'bg-surface-light border-border text-text-secondary hover:text-text-primary'
                }`}
              >
                Add Text
              </button>
            </div>

            {/* Logo Tab Content */}
            {activeTab === 'logo' && (
              <div className="space-y-4 animate-fade-in">
                {design.logo ? (
                  <div className="flex items-center gap-4 p-3 bg-surface rounded-lg">
                    <div className="w-14 h-14 rounded-lg overflow-hidden bg-white border border-border">
                      <img 
                        src={design.logo} 
                        alt="Logo preview" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-text-primary font-medium">Logo uploaded</p>
                      <button
                        onClick={removeLogo}
                        className="flex items-center gap-1 text-xs text-error hover:text-error/80 transition-colors mt-1"
                      >
                        <X className="w-3 h-3" />
                        Remove
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 border-2 border-dashed border-border rounded-lg text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Layers className="w-5 h-5 text-text-muted" />
                    </div>
                    <p className="text-xs text-text-muted">
                      Drop a file or <button onClick={() => fileInputRef.current?.click()} className="text-primary hover:underline">select an image</button>
                    </p>
                  </div>
                )}

                {design.logo && (
                  <Slider
                    label="Logo Size"
                    min={10}
                    max={50}
                    value={design.logoSize * 100}
                    onChange={(e) => onChange({ logoSize: Number(e.target.value) / 100 })}
                    valueFormatter={(v) => `${v}%`}
                  />
                )}
              </div>
            )}

            {/* Text Tab Content */}
            {activeTab === 'text' && (
              <div className="space-y-4 animate-fade-in">
                {/* Text Input */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter your text..."
                    value={design.textOverlay.text}
                    onChange={(e) => updateTextOverlay({ text: e.target.value, enabled: e.target.value.length > 0 })}
                    className={`w-full px-4 py-3 rounded-lg bg-surface border-2 text-text-primary placeholder:text-text-muted focus:outline-none transition-colors ${
                      design.textOverlay.text ? 'border-green-500' : 'border-border focus:border-primary'
                    }`}
                  />
                  {design.textOverlay.text && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <Check className="w-5 h-5 text-green-500" />
                    </div>
                  )}
                </div>

                {/* Font Selection */}
                <div className="flex flex-wrap gap-2">
                  {fontOptions.map((font) => (
                    <button
                      key={font}
                      onClick={() => updateTextOverlay({ font })}
                      className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                        design.textOverlay.font === font
                          ? 'bg-primary text-white'
                          : 'bg-surface border border-border text-text-secondary hover:border-primary/50'
                      }`}
                      style={{ fontFamily: font }}
                    >
                      {font}
                    </button>
                  ))}
                </div>

                {/* Color and Size Controls */}
                <div className="flex gap-3 items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg overflow-hidden border border-border">
                      <input
                        type="color"
                        value={design.textOverlay.color}
                        onChange={(e) => updateTextOverlay({ color: e.target.value })}
                        className="w-full h-full cursor-pointer"
                      />
                    </div>
                  </div>

                  <div className="flex-1 flex items-center gap-2">
                    <div className="w-8 h-8 rounded bg-primary flex items-center justify-center shrink-0">
                      <Type className="w-4 h-4 text-white" />
                    </div>
                    <input
                      type="range"
                      min={20}
                      max={200}
                      value={design.textOverlay.fontSize}
                      onChange={(e) => updateTextOverlay({ fontSize: Number(e.target.value) })}
                      className="flex-1"
                    />
                    <span className="text-xs font-medium text-text-primary w-8 text-right">
                      {design.textOverlay.fontSize}
                    </span>
                  </div>

                  <div className="flex">
                    <button
                      onClick={() => updateTextOverlay({ fontWeight: 'normal' })}
                      className={`px-3 py-2 text-sm rounded-l-lg border transition-colors ${
                        design.textOverlay.fontWeight === 'normal'
                          ? 'bg-surface border-border text-text-primary'
                          : 'bg-surface-light border-border text-text-muted'
                      }`}
                    >
                      Normal
                    </button>
                    <button
                      onClick={() => updateTextOverlay({ fontWeight: 'bold' })}
                      className={`px-3 py-2 text-sm rounded-r-lg border-t border-r border-b transition-colors font-bold ${
                        design.textOverlay.fontWeight === 'bold'
                          ? 'bg-primary border-primary text-white'
                          : 'bg-surface-light border-border text-text-muted'
                      }`}
                    >
                      Bold
                    </button>
                  </div>
                </div>

                {/* Position Toggle */}
                <div className="flex items-center gap-3">
                  <span className="text-sm text-text-secondary">Position:</span>
                  <div className="flex">
                    <button
                      onClick={() => updateTextOverlay({ position: 'front' })}
                      className={`px-4 py-2 text-sm rounded-l-lg border transition-colors ${
                        design.textOverlay.position === 'front'
                          ? 'bg-primary border-primary text-white'
                          : 'bg-surface-light border-border text-text-muted'
                      }`}
                    >
                      Front
                    </button>
                    <button
                      onClick={() => updateTextOverlay({ position: 'back' })}
                      className={`px-4 py-2 text-sm rounded-r-lg border-t border-r border-b transition-colors ${
                        design.textOverlay.position === 'back'
                          ? 'bg-surface border-border text-text-primary'
                          : 'bg-surface-light border-border text-text-muted'
                      }`}
                    >
                      Back
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CollapsibleSection>

        {/* Body Shape */}
        <CollapsibleSection 
          title="Body Shape" 
          icon={<Circle className="w-5 h-5" />}
        >
          <div className="grid grid-cols-3 gap-2">
            {dotTypes.map((dot) => (
              <button
                key={dot.value}
                onClick={() => onChange({ dotType: dot.value })}
                className={`
                  p-3 rounded-lg border text-center transition-all text-sm
                  ${design.dotType === dot.value
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-border bg-surface hover:border-primary/50 text-text-secondary'
                  }
                `}
              >
                {dot.label}
              </button>
            ))}
          </div>
        </CollapsibleSection>

        {/* Markers Shape */}
        <CollapsibleSection 
          title="Markers Shape" 
          icon={<Square className="w-5 h-5" />}
        >
          <div className="space-y-4">
            <div>
              <label className="text-xs text-text-muted mb-2 block uppercase tracking-wider">Outer Marker</label>
              <div className="flex gap-2">
                {cornerSquareTypes.map((type) => (
                  <button
                    key={type.value}
                    onClick={() => onChange({ cornerSquareType: type.value })}
                    className={`
                      flex-1 p-3 rounded-lg border text-center transition-all text-sm
                      ${design.cornerSquareType === type.value
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border bg-surface hover:border-primary/50 text-text-secondary'
                      }
                    `}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs text-text-muted mb-2 block uppercase tracking-wider">Inner Marker</label>
              <div className="flex gap-2">
                {cornerDotTypes.map((type) => (
                  <button
                    key={type.value}
                    onClick={() => onChange({ cornerDotType: type.value })}
                    className={`
                      flex-1 p-3 rounded-lg border text-center transition-all text-sm
                      ${design.cornerDotType === type.value
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border bg-surface hover:border-primary/50 text-text-secondary'
                      }
                    `}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </CollapsibleSection>

        {/* Colors */}
        <CollapsibleSection 
          title="Colors" 
          icon={<Palette className="w-5 h-5" />}
        >
          <div className="grid grid-cols-2 gap-4">
            <ColorPicker
              label="Foreground"
              value={design.dotColor}
              onChange={(e) => onChange({ 
                dotColor: e.target.value,
                cornerSquareColor: e.target.value,
                cornerDotColor: e.target.value,
              })}
            />
            <ColorPicker
              label="Background"
              value={design.backgroundColor}
              onChange={(e) => onChange({ backgroundColor: e.target.value })}
            />
          </div>
        </CollapsibleSection>

        {/* Background Color - Only for custom mode */}
        {selectedStyle === 'custom' && (
          <CollapsibleSection 
            title="Background" 
            icon={<Layers className="w-5 h-5" />}
          >
            <div className="space-y-3">
              <div className="grid grid-cols-6 gap-2">
                {['#ffffff', '#f8fafc', '#f1f5f9', '#e2e8f0', '#0f172a', '#020617'].map((color) => (
                  <button
                    key={color}
                    onClick={() => onChange({ backgroundColor: color })}
                    className={`
                      w-full aspect-square rounded-lg border-2 transition-all
                      ${design.backgroundColor === color ? 'border-primary scale-110' : 'border-border hover:border-primary/50'}
                    `}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <ColorPicker
                label="Custom Color"
                value={design.backgroundColor}
                onChange={(e) => onChange({ backgroundColor: e.target.value })}
              />
            </div>
          </CollapsibleSection>
        )}

        {/* Spacing & Quiet Zone */}
        <CollapsibleSection 
          title="Spacing & Quiet Zone" 
          icon={<Grid3X3 className="w-5 h-5" />}
        >
          <Slider
            label="Margin"
            min={0}
            max={50}
            value={design.margin}
            onChange={(e) => onChange({ margin: Number(e.target.value) })}
            valueFormatter={(v) => `${v}px`}
          />
        </CollapsibleSection>
      </div>

      {/* Templates Modal */}
      <TemplatesModal
        isOpen={showTemplatesModal}
        onClose={() => setShowTemplatesModal(false)}
        onSelectTemplate={onChange}
        currentDesign={design}
      />
    </>
  );
}
