import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 py-16 px-6 md:px-10 font-pretendard snap-start">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
                <div>
                    <h3 className="font-black text-xl mb-4 text-orange-500">D-Order</h3>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                        대학 축제의 새로운 기준.<br/>
                        비영리 테이블 오더 플랫폼 디오더입니다.
                    </p>
                    <div className="text-xs text-gray-400 mt-6 space-y-1">
                        <p>© 2026 D-Order Team. All rights reserved.</p>
                        <p>Contact: hyojunj@naver.com</p>
                    </div>
                </div>
                
                <div className="flex flex-wrap gap-10 md:gap-20 text-sm">
                    <div className="flex flex-col gap-3">
                        <span className="font-bold text-black mb-2">Service</span>
                        <Link to="/manual" className="text-gray-500 hover:text-black transition-colors">이용 가이드</Link>
                        <Link to="/trial" className="text-gray-500 hover:text-black transition-colors">체험하기</Link>
                        <Link to="/makers" className="text-gray-500 hover:text-black transition-colors">팀 소개</Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="font-bold text-black mb-2">Legal</span>
                        <span className="text-gray-500 cursor-not-allowed" title="준비 중입니다">서비스 이용약관</span>
                        <span className="text-gray-500 cursor-not-allowed" title="준비 중입니다">개인정보 처리방침</span>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="font-bold text-black mb-2">Social</span>
                        <a href="https://www.instagram.com/d_order.official/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-600 transition-colors flex items-center gap-2">
                            Instagram
                        </a>
                        <a href="http://pf.kakao.com/_xeKARX" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-yellow-500 transition-colors">
                            KakaoTalk Channel
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
