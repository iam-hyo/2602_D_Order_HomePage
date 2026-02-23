import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, ChevronRight } from 'lucide-react';

const Trial = () => {
  const [isMobile, setIsMobile] = useState(false);

  // 모바일 환경 체크 로직
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px 미만일 때 모바일/태블릿 가드 활성화
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="trial" className="h-screen snap-start bg-gray-50 flex flex-col items-center justify-center p-10">
      <div className="max-w-[1000px] w-full text-center">
        <h2 className="text-4xl font-black mb-4">직접 경험해 보세요</h2>
        <p className="text-gray-400 mb-16">로그인 없이 실제 주점 운영 환경을 체험할 수 있습니다.</p>

        {isMobile ? (
          /* --- 모바일/태블릿용 가드 화면 --- */
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-12 py-20 rounded-[3rem] shadow-xl border border-gray-100 flex flex-col items-center"
          >
            <div className="w-20 h-20 bg-orange-50 rounded-3xl flex items-center justify-center mb-8">
              <Monitor size={40} className="text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4">노트북이나 테블릿에서 확인해 주세요</h3>
            <p className="text-gray-500 leading-relaxed">
              D-Order 체험하기 기능은 대화면 환경에 최적화되어 있습니다.<br />
              쾌적한 체험을 위해 PC 환경에서 접속 부탁드립니다.
            </p>
          </motion.div>
        ) : (
          /* --- 데스크톱용 실제 체험 버튼 --- */
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            {/* 사장님용 (Admin) */}
            <motion.div 
              whileHover={{ y: -10, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
              onClick={() => window.open('https://admin-dummy-url.com', '_blank')}
              className="flex-1 bg-white p-12 rounded-[3rem] shadow-sm border border-gray-100 cursor-pointer group text-left relative overflow-hidden"
            >
              <div className="relative z-10">
                <span className="text-orange-500 font-bold text-sm">Manager Side</span>
                <h3 className="text-2xl font-bold mt-2 mb-4">어드민 더미 체험</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-10">
                  주문 접수, 조리 상태 변경, 매출 통계 등<br />
                  주점 관리의 모든 것을 경험해 보세요.
                </p>
                <div className="flex items-center text-sm font-bold group-hover:gap-2 transition-all">
                  지금 바로 이동 <ChevronRight size={16} />
                </div>
              </div>
              <img src="/assets/mockup_tablet.png" className="absolute -bottom-10 -right-10 w-2/3 opacity-20 group-hover:scale-110 transition-transform duration-500" />
            </motion.div>

            {/* 손님용 (Customer) */}
            <motion.div 
              whileHover={{ y: -10, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
              onClick={() => window.open('https://customer-dummy-url.com', '_blank')}
              className="flex-1 bg-white p-12 rounded-[3rem] shadow-sm border border-gray-100 cursor-pointer group text-left relative overflow-hidden"
            >
              <div className="relative z-10">
                <span className="text-blue-500 font-bold text-sm">Customer Side</span>
                <h3 className="text-2xl font-bold mt-2 mb-4">손님용 더미 체험</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-10">
                  메뉴 탐색, 장바구니 담기, QR 주문 등<br />
                  직관적인 사용자 UI를 직접 확인해 보세요.
                </p>
                <div className="flex items-center text-sm font-bold group-hover:gap-2 transition-all">
                  지금 바로 이동 <ChevronRight size={16} />
                </div>
              </div>
              <img src="/assets/mockup_mobile.png" className="absolute -bottom-10 -right-10 w-1/2 opacity-20 group-hover:scale-110 transition-transform duration-500" />
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Trial;