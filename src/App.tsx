import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { LineageTree } from './components/LineageTree';
import { Principles } from './components/Principles';
import { Curriculum } from './components/Curriculum';
import { Masters } from './components/Masters';
import { Footer } from './components/Footer';
import { appData } from './data/kungfu-data';

function App() {
  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800" dir="rtl">
      <Navigation onSectionClick={handleSectionClick} />
      
      <main>
        <Hero />
        <Timeline items={appData.timeline} />
        <LineageTree lineage={appData.lineage} />
        <Principles principles={appData.principles} />
        <Curriculum forms={appData.forms} />
        <Masters masters={appData.masters} />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;