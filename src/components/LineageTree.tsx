import React, { useState } from 'react';
import { LineagePerson } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface LineageTreeProps {
  lineage: LineagePerson;
}

export const LineageTree: React.FC<LineageTreeProps> = ({ lineage }) => {
  const [selectedPerson, setSelectedPerson] = useState<LineagePerson | null>(null);
  const [lineageRef, isVisible] = useIntersectionObserver();

  const findPerson = (node: LineagePerson, personId: string): LineagePerson | null => {
    if (node.id === personId) return node;
    if (node.children) {
      for (const child of node.children) {
        const found = findPerson(child, personId);
        if (found) return found;
      }
    }
    return null;
  };

  const handleNodeClick = (personId: string) => {
    const person = findPerson(lineage, personId);
    setSelectedPerson(person);
  };

  return (
    <section id="lineage" ref={lineageRef} className="py-20 bg-gradient-to-b from-stone-50 to-stone-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl font-bold text-emerald-800 mb-4">שושלת</h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
            עץ השושלת מציג את העברת הידע מדור לדור. כל שם מייצג חוליה בשרשרת, מאסטר שהטביע את חותמו על האמנות.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-6">
          {/* Generation 1 */}
          <div
            className={`tree-node bg-gradient-to-r from-emerald-600 to-emerald-700 text-white border-emerald-800 transform transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            onClick={() => handleNodeClick('som-dot')}
          >
            <span className="font-bold text-center">סוֹם דַאט</span>
          </div>

          {/* Connection Line */}
          <div className={`w-0.5 h-8 bg-emerald-600 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}></div>

          {/* Generation 2 */}
          <div
            className={`tree-node bg-gradient-to-r from-emerald-600 to-emerald-700 text-white border-emerald-800 transform transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            onClick={() => handleNodeClick('lee-siem-see')}
          >
            <span className="font-bold text-center">לִי סִיֵם סִי</span>
          </div>

          {/* Connection Line */}
          <div className={`w-0.5 h-8 bg-emerald-600 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}></div>

          {/* Generation 3 */}
          <div
            className={`tree-node bg-gradient-to-r from-emerald-600 to-emerald-700 text-white border-emerald-800 transform transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            onClick={() => handleNodeClick('cheung-yiu-chung')}
          >
            <span className="font-bold text-center">צ'וּנְג יוּ צ'וּנְג</span>
          </div>

          {/* Connection Line */}
          <div className={`w-0.5 h-8 bg-emerald-600 transition-all duration-700 delay-600 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}></div>

          {/* Generation 4 - Two branches */}
          <div className="flex space-x-5 space-x-reverse">
            <div
              className={`tree-node bg-gradient-to-r from-emerald-600 to-emerald-700 text-white border-emerald-800 transform transition-all duration-700 delay-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              onClick={() => handleNodeClick('wong-yuk-kong')}
            >
              <span className="font-bold text-center">וונג יוק-קונג</span>
            </div>
            <div
              className={`tree-node bg-gradient-to-r from-emerald-600 to-emerald-700 text-white border-emerald-800 transform transition-all duration-700 delay-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              onClick={() => handleNodeClick('lam-sang')}
            >
              <span className="font-bold text-center">לאם סאנג</span>
            </div>
          </div>

          {/* Connection Line from Lam Sang only */}
          <div className="flex justify-center w-full max-w-md">
            <div className={`w-0.5 h-8 bg-emerald-600 transition-all duration-700 delay-900 -ml-40 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}></div>
          </div>

          {/* Generation 5 - Children of Lam Sang */}
          <div className="flex space-x-5 space-x-reverse -ml-40">
            <div
              className={`tree-node bg-gradient-to-r from-emerald-600 to-emerald-700 text-white border-emerald-800 transform transition-all duration-700 delay-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              onClick={() => handleNodeClick('henry-poo-yee')}
            >
              <span className="font-bold text-center">הנרי פו יי</span>
            </div>
            <div
              className={`tree-node bg-gradient-to-r from-emerald-600 to-emerald-700 text-white border-emerald-800 transform transition-all duration-700 delay-1100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              onClick={() => handleNodeClick('gin-foon-mark')}
            >
              <span className="font-bold text-center">ג'ין פון מארק</span>
            </div>
          </div>
        </div>

        {/* Details Modal */}
        {selectedPerson && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-in fade-in duration-300">
              <h4 className="font-bold text-2xl text-emerald-800 mb-4">{selectedPerson.name}</h4>
              <div 
                className="text-stone-700 leading-relaxed text-right"
                dangerouslySetInnerHTML={{ __html: selectedPerson.details }}
              />
              <button
                onClick={() => setSelectedPerson(null)}
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