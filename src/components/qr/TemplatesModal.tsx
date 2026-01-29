'use client';

import { useState, useMemo } from 'react';
import { X, Search } from 'lucide-react';
import { allTemplates, templateCategories, QRTemplate, applyTemplate } from '@/lib/qr-templates';
import { QRDesign } from '@/types/qr';

interface TemplatesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTemplate: (design: Partial<QRDesign>) => void;
  currentDesign: QRDesign;
}

export default function TemplatesModal({ 
  isOpen, 
  onClose, 
  onSelectTemplate,
  currentDesign 
}: TemplatesModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTemplates = useMemo(() => {
    let templates = selectedCategory === 'all' 
      ? allTemplates 
      : allTemplates.filter(t => t.category === selectedCategory);

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      templates = templates.filter(t => 
        t.name.toLowerCase().includes(query) || 
        t.category.toLowerCase().includes(query)
      );
    }

    return templates;
  }, [selectedCategory, searchQuery]);

  const handleSelectTemplate = (template: QRTemplate) => {
    onSelectTemplate(applyTemplate(template));
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-background border border-border rounded-2xl overflow-hidden flex flex-col m-4">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border shrink-0">
          <div>
            <h2 className="text-xl font-bold text-text-primary">Design Templates</h2>
            <p className="text-sm text-text-secondary mt-0.5">
              {filteredTemplates.length} templates available
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-surface-light hover:bg-surface-lighter flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-text-primary" />
          </button>
        </div>

        {/* Search and Categories */}
        <div className="p-4 border-b border-border shrink-0 space-y-3">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
            <input
              type="text"
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-surface-light border border-border rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary"
            />
          </div>

          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {templateCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-primary text-white'
                    : 'bg-surface-light text-text-secondary hover:text-text-primary hover:bg-surface-lighter'
                }`}
              >
                {cat.name}
                <span className="ml-1.5 text-xs opacity-70">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Templates Grid */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {filteredTemplates.map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                onClick={() => handleSelectTemplate(template)}
              />
            ))}
          </div>

          {filteredTemplates.length === 0 && (
            <div className="text-center py-12">
              <p className="text-text-muted">No templates found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface TemplateCardProps {
  template: QRTemplate;
  onClick: () => void;
}

function TemplateCard({ template, onClick }: TemplateCardProps) {
  const { design, preview } = template;
  
  return (
    <button
      onClick={onClick}
      className="aspect-square rounded-xl overflow-hidden border-2 border-transparent hover:border-primary transition-all hover:scale-105 relative group"
      title={template.name}
    >
      {/* QR Preview */}
      <div 
        className="w-full h-full p-2 flex items-center justify-center"
        style={{ backgroundColor: design.backgroundColor || '#ffffff' }}
      >
        {/* Mini QR representation */}
        <div className="w-full h-full grid grid-cols-5 gap-[2px] p-1">
          {/* Helper function to get corner shape class */}
          {(() => {
            const cornerSquareType = design.cornerSquareType || 'square';
            const cornerDotType = design.cornerDotType || 'square';
            const cornerSquareClass = 
              cornerSquareType === 'dot' ? 'rounded-full' :
              cornerSquareType === 'extra-rounded' ? 'rounded-md' :
              'rounded-sm';
            const cornerDotClass = 
              cornerDotType === 'dot' ? 'rounded-full' :
              'rounded-sm';
            
            return (
              <>
                {/* Top-left marker */}
                <div 
                  className={`col-span-2 row-span-2 ${cornerSquareClass} border-2 flex items-center justify-center`}
                  style={{ 
                    borderColor: design.cornerSquareColor || design.dotColor,
                    backgroundColor: design.backgroundColor || '#ffffff'
                  }}
                >
                  <div 
                    className={`w-1/2 h-1/2 ${cornerDotClass}`}
                    style={{ backgroundColor: design.cornerDotColor || design.dotColor }}
                  />
                </div>
                
                {/* Top dots */}
                {[...Array(3)].map((_, i) => (
                  <div
                    key={`top-${i}`}
                    className={`${design.dotType === 'dots' ? 'rounded-full' : design.dotType === 'extra-rounded' ? 'rounded-md' : design.dotType === 'rounded' ? 'rounded-sm' : 'rounded-sm'}`}
                    style={{ 
                      backgroundColor: design.dotColor,
                      opacity: i === 1 ? 0.3 : 1
                    }}
                  />
                ))}
                
                {/* Top-right marker */}
                <div 
                  className={`col-span-2 row-span-2 ${cornerSquareClass} border-2 flex items-center justify-center`}
                  style={{ 
                    borderColor: design.cornerSquareColor || design.dotColor,
                    backgroundColor: design.backgroundColor || '#ffffff'
                  }}
                >
                  <div 
                    className={`w-1/2 h-1/2 ${cornerDotClass}`}
                    style={{ backgroundColor: design.cornerDotColor || design.dotColor }}
                  />
                </div>
                
                {/* Middle rows */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={`mid-${i}`}
                    className={`${design.dotType === 'dots' ? 'rounded-full' : design.dotType === 'extra-rounded' ? 'rounded-md' : design.dotType === 'rounded' ? 'rounded-sm' : 'rounded-sm'}`}
                    style={{ 
                      backgroundColor: design.dotColor,
                      opacity: [1, 3, 4].includes(i) ? 0.3 : 1
                    }}
                  />
                ))}
                
                {/* Bottom-left marker */}
                <div 
                  className={`col-span-2 row-span-2 ${cornerSquareClass} border-2 flex items-center justify-center`}
                  style={{ 
                    borderColor: design.cornerSquareColor || design.dotColor,
                    backgroundColor: design.backgroundColor || '#ffffff'
                  }}
                >
                  <div 
                    className={`w-1/2 h-1/2 ${cornerDotClass}`}
                    style={{ backgroundColor: design.cornerDotColor || design.dotColor }}
                  />
                </div>
                
                {/* Bottom dots */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={`bot-${i}`}
                    className={`${design.dotType === 'dots' ? 'rounded-full' : design.dotType === 'extra-rounded' ? 'rounded-md' : design.dotType === 'rounded' ? 'rounded-sm' : 'rounded-sm'}`}
                    style={{ 
                      backgroundColor: design.dotColor,
                      opacity: [0, 2, 5].includes(i) ? 0.3 : 1
                    }}
                  />
                ))}
              </>
            );
          })()}
        </div>

        {/* Icon Overlay */}
        {preview?.icon && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div 
              className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shadow-lg"
              style={{ 
                backgroundColor: design.backgroundColor === '#ffffff' || design.backgroundColor === '#fff'
                  ? 'rgba(255,255,255,0.9)' 
                  : 'rgba(255,255,255,0.95)',
                color: design.dotColor,
                border: `2px solid ${design.dotColor}20`
              }}
            >
              {preview.icon === 'instagram' && '📷'}
              {preview.icon === 'youtube' && '▶'}
              {preview.icon === 'facebook' && 'f'}
              {preview.icon === 'globe' && '🌐'}
              {preview.icon === 'monitor' && '💻'}
            </div>
          </div>
        )}
      </div>

      {/* Hover overlay with name */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <p className="text-[10px] text-white font-medium truncate">{template.name}</p>
      </div>
    </button>
  );
}
