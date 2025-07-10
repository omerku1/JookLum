import React, { useState } from 'react';
import { FormItem } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Search } from 'lucide-react';

interface CurriculumProps {
  forms: {
    foundations: FormItem[];
    shortHammers: FormItem[];
    longHammers: FormItem[];
  };
}

export const Curriculum: React.FC<CurriculumProps> = ({ forms }) => {
  const [activeTab, setActiveTab] = useState<'foundations' | 'shortHammers' | 'longHammers'>('foundations');
  const [curriculumRef, isVisible] = useIntersectionObserver();

  const tabs = [
    { id: 'foundations', label: 'תבניות יסוד', data: forms.foundations },
    { id: 'shortHammers', label: 'אגרופים קצרים', data: forms.shortHammers },
    { id: 'longHammers', label: 'אגרופים ארוכים', data: forms.longHammers }
  ];

  const currentForms = tabs.find(tab => tab.id === activeTab)?.data || [];

  return (
    <section id="curriculum" ref={curriculumRef} className="py-20 bg-gradient-to-b from-stone-50 to-stone-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold text-emerald-800 mb-4">תכנית הלימודים</h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
            תכנית הלימודים של שושלת לאם סאנג היא מסע מובנה מהיסודות ועד לטכניקות המתקדמות ביותר.
          </p>
        </div>

        {/* Tabs */}
        <div className={`mb-8 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex justify-center mb-6">
            <div className="flex space-x-2 space-x-reverse">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-emerald-600 text-white shadow-lg'
                      : 'bg-white text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Forms Table */}
        <div className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white">
                <tr>
                  {activeTab === 'foundations' && (
                    <th className="py-4 px-6 text-right font-semibold">שם עברי</th>
                  )}
                  <th className="py-4 px-6 text-right font-semibold">
                    {activeTab === 'foundations' ? 'שם אנגלי' : 'שם'}
                  </th>
                  <th className="py-4 px-6 text-right font-semibold">תרגום מילולי</th>
                  {activeTab === 'foundations' && (
                    <th className="py-4 px-6 text-right font-semibold hidden md:table-cell">תיאור</th>
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {currentForms.map((form, index) => (
                  <tr 
                    key={index} 
                    className={`hover:bg-stone-50 transition-colors duration-200 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-stone-25'
                    }`}
                  >
                    {activeTab === 'foundations' && (
                      <td className="py-4 px-6 font-semibold text-emerald-800">{form.name}</td>
                    )}
                    <td className="py-4 px-6 font-mono text-stone-700">
                      {activeTab === 'foundations' ? form.englishName : form.name}
                    </td>
                    <td className="py-4 px-6 text-stone-700">{form.translation}</td>
                    {activeTab === 'foundations' && form.description && (
                      <td className="py-4 px-6 text-stone-600 hidden md:table-cell text-sm">
                        {form.description}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};