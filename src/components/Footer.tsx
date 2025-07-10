import React from 'react';
import { Heart, Zap } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-stone-800 to-stone-900 text-stone-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <span className="text-2xl font-bold text-white">קונג פו - גמל שלמה דרומי</span>
          </div>
          <p className="text-stone-400 mb-4">
            שומרים על מסורת יער הבמבוק
          </p>
        </div>
      </div>
    </footer>
  );
};