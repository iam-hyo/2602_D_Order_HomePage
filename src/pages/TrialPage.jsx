import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, ChevronRight } from 'lucide-react';
import Footer from '../components/Footer';

const TrialPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 1024);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return (
    <div className='min-h-screen bg-gray-50 flex flex-col'>
    <div className="flex-1 flex justify-center items-center p-6 pt-28">
      <div className="max-w-4xl w-full text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-4">직접 경험해 보세요</h2>
        <p className="text-gray-500 mb-12">로그인 없이 실제 주점 운영 환경을 테스트할 수 있습니다.</p>

        {isMobile ? (
          /* 모바일 접속 시 경고 화면 */
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="bg-white p-10 rounded-[2rem] shadow-xl border border-gray-100 flex flex-col items-center"
          >
            <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
              <Monitor size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3">PC 환경에서 접속해 주세요</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
              디오더의 관리자 기능은 넓은 화면에 최적화되어 있습니다.<br/>
              13인치 이상의 노트북이나 태블릿에서 확인 부탁드립니다.
            </p>
          </motion.div>
        ) : (
          /* 데스크톱 접속 시 체험 버튼 */
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {/* 사장님용 */}
            <div 
              onClick={() => window.open('https://admin-dummy.com', '_blank')}
              className="group flex-1 bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl border border-gray-100 cursor-pointer transition-all relative overflow-hidden text-left"
            >
              <span className="text-orange-500 font-bold text-xs uppercase tracking-wide">Manager Side</span>
              <h3 className="text-2xl font-bold mt-2 mb-20 group-hover:text-orange-600 transition-colors">사장님용<br/>체험하기</h3>
              <div className="absolute bottom-8 right-8 bg-gray-100 p-3 rounded-full group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <ChevronRight />
              </div>
            </div>
            
            {/* 손님용 */}
            <div 
              onClick={() => window.open('https://customer-dummy.com', '_blank')}
              className="group flex-1 bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl border border-gray-100 cursor-pointer transition-all relative overflow-hidden text-left"
            >
              <span className="text-blue-500 font-bold text-xs uppercase tracking-wide">Customer Side</span>
              <h3 className="text-2xl font-bold mt-2 mb-20 group-hover:text-blue-600 transition-colors">손님용<br/>체험하기</h3>
              <div className="absolute bottom-8 right-8 bg-gray-100 p-3 rounded-full group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <ChevronRight />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default TrialPage;