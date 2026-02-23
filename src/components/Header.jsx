import React from 'react';

const Header = ({ theme }) => {
  const isDark = theme === 'dark';
  const textColor = isDark ? 'text-white' : 'text-black';
  const logoSrc = isDark ? '/assets/logo_white.png' : '/assets/logo_black.png';

  return (
    <header className={`fixed top-0 w-full z-[100] flex justify-between items-center px-10 py-6 transition-colors duration-500 ${textColor}`}>
      <div className="flex items-center gap-10">
        <img src={logoSrc} alt="D-Order" className="h-6" />
        <nav className="hidden md:flex gap-8 text-sm font-bold opacity-80">
          <a href="#intro" className="hover:opacity-100">서비스 소개</a>
          <a href="#manual" className="hover:opacity-100">사용 설명서</a>
          <a href="#trial" className="hover:opacity-100">체험하기</a>
          <a href="#status" className="hover:opacity-100">실시간 현황</a>
        </nav>
      </div>
      <button className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}>
        이용 문의하기
      </button>
    </header>
  );
};

export default Header;