import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const Hero: React.FC = () => {
  const [heroRef, isVisible] = useIntersectionObserver();

  return (
    <section 
      id="hero" 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-200 via-amber-50 to-stone-300 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        
        <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 to-emerald-600 tracking-tight mb-4 drop-shadow-lg">
          גמל שלמה דרומי
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-red-800 mb-6 drop-shadow-md">
          Jook Lum Gee Tong Long Pai
        </h2>
        <p className="text-lg md:text-xl text-stone-700 max-w-3xl mx-auto leading-relaxed font-medium">
          חקירה אינטראקטיבית של ההיסטוריה, הפילוסופיה והטכניקות של קונג פו גמל שלמה דרומי ממקדש יער הבמבוק.
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => document.getElementById('history')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            התחל את המסע
          </button>
        </div>
      </div>
    </section>
  );
};