import React, { useRef, useState, useEffect } from 'react';
import Hero from '../components/Hero';
import IntroAbout from '../components/IntroAbout';
import History from '../components/History';
import HowtoStart from '../components/HowtoStart';
import Footer from '../components/Footer';

const ServiceIntroPage = () => {
    const [currentSection, setCurrentSection] = useState(0);
    const containerRef = useRef(null);

    // 스크롤 감지 로직
    const handleScroll = () => {
        if (!containerRef.current) return;
        
        const scrollPosition = containerRef.current.scrollTop;
        const windowHeight = window.innerHeight;
        
        // 현재 스크롤 위치를 기반으로 섹션 인덱스 계산
        const sectionIndex = Math.round(scrollPosition / windowHeight);
        setCurrentSection(sectionIndex);
    };

    return (
        <div className="relative h-screen overflow-hidden">
            {/* 스크롤 컨테이너 */}
            <div 
                ref={containerRef}
                onScroll={handleScroll}
                className="h-full overflow-y-auto snap-y snap-mandatory scroll-smooth no-scrollbar"
            >
                <div className="snap-start h-screen"><Hero /></div>
                <div className="snap-start min-h-screen"><IntroAbout /></div>
                <div className="snap-start min-h-screen"><History /></div>
                <div className="snap-start min-h-screen flex flex-col">
                    <div className="flex-1"><HowtoStart /></div>
                    <Footer />
                </div>
                {/* 인디케이터 (푸터는 인디케이터에서 제외하거나 포함 선택 가능, 현재는 제외) */}
            <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50 pointer-events-none">
                {[0, 1, 2, 3, 4].map((idx) => (
                    <div 
                        key={idx}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                            currentSection === idx 
                                ? 'bg-orange-500 scale-150' 
                                : 'bg-gray-300 opacity-50'
                        }`}
                    />
                ))}
            </div>
                
            </div>

            {/* 우측 인디케이터 */}
            <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50 pointer-events-none">
                {[0, 1, 2, 3, 4].map((idx) => (
                    <div 
                        key={idx}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                            currentSection === idx 
                                ? 'bg-orange-500 scale-150' 
                                : 'bg-gray-300 opacity-50'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ServiceIntroPage;
