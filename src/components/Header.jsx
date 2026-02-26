import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  // ✅ 테마 결정 로직: 메인('/')과 실시간현황('/status')만 Dark 테마
  const isDarkTheme = pathname === '/' || pathname === '/status';

  // 스크롤 감지 (헤더 배경 블러 처리용)
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 동적 스타일 클래스
  const headerStyle = `
    fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-10 py-4 transition-all duration-300
    ${isScrolled 
      ? (isDarkTheme ? 'bg-black/60 backdrop-blur-md border-b border-white/10' : 'bg-white/20 backdrop-blur-md border-b border-black/5') 
      : 'bg-transparent'
    }
    ${isDarkTheme ? 'text-white' : 'text-black'}
  `;

  const logoSrc = isDarkTheme ? "/assets/logo_white.png" : "/assets/logo_black.png";

  return (
    <header className={headerStyle}>
      <div className="flex items-center gap-10">
        <Link to="/" className="flex items-center">
          <img src={logoSrc} alt="D-Order" className="h-6 md:h-7" />
        </Link>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden md:flex gap-8 text-sm font-bold opacity-80">
          <Link to="/" className="hover:opacity-100 transition-opacity">서비스 소개</Link>
          <Link to="/manual" className="hover:opacity-100 transition-opacity">사용 설명서</Link>
          <Link to="/trial" className="hover:opacity-100 transition-opacity">체험하기</Link>
          <Link to="/status" className="hover:opacity-100 transition-opacity">실시간 현황</Link>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        {/* 모바일용 햄버거 메뉴가 필요하다면 여기에 추가 */}
        <button
          onClick={() => window.open('http://pf.kakao.com/_xeKARX', '_blank')}
          className={`px-5 py-2 rounded-full font-bold text-xs md:text-sm transition-transform hover:scale-105 ${
            isDarkTheme ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          이용 문의하기
        </button>
      </div>
    </header>
  );
};

export default Header;