import React, { useRef, useState } from 'react';
import Card0 from './Detail6/card0';
import Card1 from './Detail6/card1';
import Card2 from './Detail6/card2';
import Card3 from './Detail6/card3';
// import Card4 from './Detail6/card4';
import CardGuide from './Detail3/cardGuide';

const SECTION_IDS = ['card0', 'card1', 'card2', 'card3', 'guide'];

export default function ManualDetail6() {
  const containerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const scrollPosition = containerRef.current.scrollTop;
    const windowHeight = window.innerHeight;
    const sectionIndex = Math.round(scrollPosition / windowHeight);
    setCurrentSection(Math.min(sectionIndex, SECTION_IDS.length - 1));
  };

  const scrollToSection = (index) => {
    if (!containerRef.current) return;
    const windowHeight = window.innerHeight;
    containerRef.current.scrollTo({ top: index * windowHeight, behavior: 'smooth' });
  };

  return (
    <div className="details-manual relative h-screen w-full overflow-hidden bg-white font-pretendard">
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="h-full w-full overflow-y-auto snap-y snap-mandatory scroll-smooth"
        style={{ overscrollBehavior: 'contain' }}
      >
        <div className="snap-start h-screen flex flex-col justify-center py-8 md:py-16">
          <Card0 />
        </div>
        {[Card1, Card2, Card3].map((C, i) => (
          <div key={SECTION_IDS[i + 1]} className="snap-start min-h-screen flex flex-col justify-center py-8 md:py-16">
            <C />
          </div>
        ))}
        <div className="snap-start min-h-screen flex flex-col justify-center overflow-auto py-8 md:py-16">
          <CardGuide />
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => window.close()}
              className="details-close-button"
            >
              창 닫기
            </button>
          </div>
        </div>
      </div>

      <div
        className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 md:flex"
        aria-hidden
      >
        {SECTION_IDS.map((id, index) => (
          <button
            key={id}
            type="button"
            onClick={() => scrollToSection(index)}
            className="flex items-center gap-2"
          >
            <span
              className={`block w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                currentSection === index ? 'bg-orange-500 scale-150' : 'bg-gray-300 opacity-50'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

