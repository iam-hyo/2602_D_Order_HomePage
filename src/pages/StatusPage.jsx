import React, { useState, useEffect } from 'react';

const StatusPage = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // 목표 날짜: 2025년 5월 15일 (가정)
    const targetDate = new Date('2025-05-15T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="-mt-[80px] h-screen bg-black text-white flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
      {/* 배경 효과 */}
      <div className="absolute inset-0 bg-[url('/assets/hero_bg_1.jpg')] bg-cover opacity-20 blur-sm"></div>
      
      <div className="relative z-10">
        <span className="text-orange-500 font-bold tracking-[0.3em] text-sm md:text-base uppercase mb-6 block">Coming Soon</span>
        <h1 className="text-4xl md:text-7xl font-black mb-10 leading-tight">
          2025 봄 대동제<br />
          실시간 현황판
        </h1>
        
        <div className="flex gap-4 md:gap-8 justify-center font-mono">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="flex flex-col items-center">
              <span className="text-3xl md:text-6xl font-bold bg-white/10 w-16 md:w-24 py-4 rounded-xl backdrop-blur-md border border-white/10">
                {String(value).padStart(2, '0')}
              </span>
              <span className="text-xs md:text-sm text-gray-400 mt-3 uppercase">{unit}</span>
            </div>
          ))}
        </div>
        
        <p className="mt-12 text-gray-400 max-w-md mx-auto leading-relaxed text-sm md:text-base">
          모든 주점의 주문 현황을 한눈에.<br/>
          축제의 열기를 데이터로 확인하세요.
        </p>
      </div>
    </div>
  );
};

export default StatusPage;