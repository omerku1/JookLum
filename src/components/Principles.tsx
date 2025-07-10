import React from 'react';
import { Principle } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface PrinciplesProps {
  principles: Principle[];
}

export const Principles: React.FC<PrinciplesProps> = ({ principles }) => {
  const [principlesRef, isVisible] = useIntersectionObserver();

  return (
    <section id="principles" ref={principlesRef} className="py-20 bg-gradient-to-b from-stone-100 to-stone-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold text-emerald-800 mb-4">עקרונות הליבה</h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
            ג'וק לאם היא יותר מסדרת תנועות; זוהי מערכת שלמה הבנויה על עקרונות פילוסופיים וטקטיים עמוקים.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((principle, index) => {
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
                  <div className="w-3 h-3 bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-full"></div>
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-emerald-600 to-emerald-800 mx-3"></div>
                  <div className="w-3 h-3 bg-gradient-to-r from-emerald-600 to-emerald-800 rounded-full"></div>
                </div>
                
                <h3 className="font-bold text-xl text-emerald-800 mb-4 text-right">
                  {principle.title}
                </h3>
                
                <p className="text-stone-700 leading-relaxed text-right">
                  {principle.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};