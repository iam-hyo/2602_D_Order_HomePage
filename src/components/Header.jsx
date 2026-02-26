import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // ✅ 아이콘 추가

const Header = () => {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 테마 결정 로직
  const isDarkTheme = pathname === '/' || pathname === '/status';

  // 스크롤 감지
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ 페이지 이동 시 모바일 메뉴 자동 닫힘
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // 동적 스타일 클래스 (메뉴가 열렸을 때는 배경을 꽉 채워 글씨 가독성을 높임)
  const headerStyle = `
    fixed top-0 w-full z-50 transition-all duration-300
    ${isScrolled || isMobileMenuOpen 
      ? (isDarkTheme ? 'bg-black/30 backdrop-blur-xl border-b border-white/10' : 'bg-white/20 backdrop-blur-md border-b border-black/5') 
      : 'bg-transparent'
    }
    ${isDarkTheme ? 'text-white' : 'text-black'}
  `;

  const logoSrc = isDarkTheme ? "/assets/logo_white.png" : "/assets/logo_black.png";

  return (
    <header className={headerStyle}>
      <div className="flex justify-between items-center px-6 md:px-10 py-4">
        {/* 로고 영역 */}
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center z-50">
            <img src={logoSrc} alt="D-Order" className="h-6 md:h-7" />
          </Link>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:flex gap-8 text-sm font-bold opacity-80">
            <Link to="/" className="hover:opacity-100 transition-opacity">서비스 소개</Link>
            <Link to="/manual" className="hover:opacity-100 transition-opacity">사용 설명서</Link>
            <Link to="/trial" className="hover:opacity-100 transition-opacity">체험하기</Link>
            <Link to="/status" className="hover:opacity-100 transition-opacity">실시간 현황</Link>
            <Link to="/makers" className="hover:opacity-100 transition-opacity">팀 소개</Link> {/* ✅ 신규 추가 */}
          </nav>
        </div>

        {/* 우측 버튼 영역 */}
        <div className="flex items-center gap-4">
          {/* 데스크톱용 문의 버튼 */}
          <button
            onClick={() => window.open('http://pf.kakao.com/_xeKARX', '_blank')}
            className={`hidden md:block px-5 py-2 rounded-full font-bold text-sm transition-transform hover:scale-105 ${
              isDarkTheme ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            이용 문의하기
          </button>

          {/* 모바일 햄버거 토글 버튼 */}
          <button 
            className="md:hidden p-2 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ✅ 모바일 드롭다운 메뉴 */}
      {isMobileMenuOpen && (
        <div className={`md:hidden absolute top-full left-0 w-full border-t ${isDarkTheme ? 'bg-black/95 border-white/10 text-white' : 'bg-white/95 border-black/5 text-black'} backdrop-blur-xl flex flex-col px-6 py-4 shadow-2xl`}>
            <Link to="/" className="py-4 font-bold text-lg border-b border-gray-500/20">서비스 소개</Link>
            <Link to="/manual" className="py-4 font-bold text-lg border-b border-gray-500/20">사용 설명서</Link>
            <Link to="/trial" className="py-4 font-bold text-lg border-b border-gray-500/20">체험하기</Link>
            <Link to="/status" className="py-4 font-bold text-lg border-b border-gray-500/20">실시간 현황</Link>
            <Link to="/makers" className="py-4 font-bold text-lg border-b border-gray-500/20">팀 소개</Link>
            
            {/* 모바일용 문의 버튼 */}
            <button
                onClick={() => window.open('http://pf.kakao.com/_xeKARX', '_blank')}
                className={`mt-8 mb-4 w-full py-4 rounded-2xl font-bold text-center text-lg shadow-sm ${
                  isDarkTheme ? "bg-white text-black" : "bg-black text-white"
                }`}
            >
                카카오톡 이용 문의하기
            </button>
        </div>
      )}
    </header>
  );
};

export default Header;