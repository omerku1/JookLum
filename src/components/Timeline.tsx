import React, { useState } from 'react';
import { TimelineItem } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface TimelineProps {
  items: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);
  const [timelineRef, isVisible] = useIntersectionObserver();

  return (
    <section id="history" ref={timelineRef} className="py-20 bg-gradient-to-b from-stone-100 to-stone-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold text-emerald-800 mb-4">היסטוריה</h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
            כאן נחשף סיפורה של השיטה, החל מהמקורות האגדיים במנזר סיני, דרך התפתחותה בקרב קהילת ההאכא, ועד להפצתה בעולם על ידי מאסטרים מרכזיים.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:-ml-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-600 to-emerald-800 rounded-full"></div>
          
          {items.map((item, index) => {
            const isEven = index % 2 === 0;
            const delay = index * 200;
            
            return (
              <div
                key={index}
                className={`relative mb-12 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${isEven ? 'translate-x-10' : '-translate-x-10'}`
                }`}
                style={{ transitionDelay: `${delay}ms` }}
              >
                <div className={`md:flex items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2"></div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 md:-ml-4 top-2 z-10">
                    <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-red-800 rounded-full shadow-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                  </div>
                  
                  {/* Timeline Content */}
                  <div className="md:w-1/2">
                    <div 
                      className={`bg-white rounded-2xl shadow-xl p-6 ml-12 md:ml-0 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                        isEven ? 'md:ml-8' : 'md:mr-8'
                      }`}
                      onClick={() => setSelectedItem(item)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-xl text-emerald-800">{item.year}</h3>
                        <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                      </div>
                      <p className="text-lg font-semibold text-stone-800 leading-tight">{item.title}</p>
                      <p className="text-sm text-stone-600 mt-2">לחץ לפרטים נוספים</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Details Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-in fade-in duration-300">
              <h3 className="font-bold text-2xl text-emerald-800 mb-2">{selectedItem.title}</h3>
              <p className="text-red-700 font-semibold mb-4">{selectedItem.year}</p>
              <p className="text-stone-700 leading-relaxed text-right">{selectedItem.content}</p>
              <button
                onClick={() => setSelectedItem(null)}
                className="mt-6 px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                סגור
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};