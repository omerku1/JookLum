import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { useActiveSection } from '../hooks/useActiveSection';

interface NavigationProps {
  onSectionClick: (sectionId: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onSectionClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  const menuItems = [
    { id: 'hero', label: 'ראשי' },
    { id: 'history', label: 'היסטוריה' },
    { id: 'lineage', label: 'שושלת' },
    { id: 'principles', label: 'עקרונות' },
    { id: 'curriculum', label: 'תכנית לימודים' },
    { id: 'masters', label: 'מאסטרים' }
  ];

  const handleMenuClick = (sectionId: string) => {
    onSectionClick(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-stone-100 to-stone-200 shadow-lg sticky top-0 z-50 border-b border-stone-300">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3 space-x-reverse">
            <span className="font-bold text-xl bg-gradient-to-r from-emerald-800 to-emerald-600 bg-clip-text text-transparent">
              קונג פו - גמל שלמה דרומי
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4 space-x-reverse">
              {menuItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-emerald-600 text-white shadow-lg transform -translate-y-0.5'
                      : 'text-stone-700 hover:bg-stone-300 hover:text-stone-900'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-stone-200 hover:bg-stone-300 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-stone-100 border-t border-stone-300 shadow-inner">
          <div className="px-4 py-2 space-y-1">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className={`block w-full text-right px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-emerald-600 text-white'
                    : 'text-stone-700 hover:bg-stone-200'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};