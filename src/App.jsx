import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import History from './components/History';
import Manual from './components/Manual';
import Trial from './components/Trial';
import Makers from './components/Makers';

const PAGES = [
  { id: 'intro', theme: 'dark' },
  { id: 'history', theme: 'dark' },
  { id: 'manual', theme: 'light' },
  { id: 'trial', theme: 'light' },
  { id: 'makers', theme: 'light' }
];

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = (e) => {
    const pageHeight = window.innerHeight;
    const newPage = Math.round(e.target.scrollTop / pageHeight);
    if (newPage !== currentPage && newPage < PAGES.length) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="h-screen overflow-hidden bg-black font-pretendard">
      {/* 현재 페이지의 테마값을 Header에 전달 */}
      <Header theme={PAGES[currentPage]?.theme || 'light'} />
      
      <main 
        onScroll={handleScroll}
        className="h-full overflow-y-auto snap-y snap-mandatory no-scrollbar scroll-smooth"
      >
        <Hero />
        <History />
        <Manual />
        <Trial />
        <Makers />
      </main>

      {/* 우측 페이지 인디케이터 */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
        {PAGES.map((page, idx) => (
          <div 
            key={page.id}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              currentPage === idx 
                ? (PAGES[idx].theme === 'dark' ? 'bg-orange-500 scale-150' : 'bg-black scale-150') 
                : 'bg-gray-400 opacity-30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default App;