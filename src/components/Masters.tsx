import React from 'react';
import { Master } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { MapPin, User } from 'lucide-react';

interface MastersProps {
  masters: Master[];
}

export const Masters: React.FC<MastersProps> = ({ masters }) => {
  const [mastersRef, isVisible] = useIntersectionObserver();

  return (
    <section id="masters" ref={mastersRef} className="py-20 bg-gradient-to-b from-stone-100 to-stone-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold text-emerald-800 mb-4">מאסטרים עכשוויים</h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
            כיום, אמנות הג'וק לאם מתורגלת ברחבי העולם בזכותם של מאסטרים הממשיכים את השושלת.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {masters.map((master, index) => {
            const delay = index * 200;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-xl p-6 transform transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <User className="h-8 w-8 text-emerald-600" />
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-emerald-600 to-emerald-800 mx-3"></div>
                  <div className="w-3 h-3 bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-full"></div>
                </div>
                
                <h3 className="font-bold text-xl text-emerald-800 mb-2 text-right">
                  {master.name}
                </h3>
                
                <div className="flex items-center mb-2 text-right">
                  <MapPin className="h-4 w-4 text-stone-500 ml-1" />
                  <span className="text-sm font-semibold text-stone-600">{master.location}</span>
                </div>
                
                <p className="text-sm font-medium text-emerald-700 mb-3 text-right">
                  שושלת: {master.lineage}
                </p>
                
                <p className="text-stone-700 leading-relaxed text-right text-sm">
                  {master.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};