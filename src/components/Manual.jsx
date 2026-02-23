import React from 'react';
import { motion } from 'framer-motion';

const Manual = () => {
  const cards = [
    { id: 1, title: "고객 주문 기능 소개", sub: "사용자 관점의 쉬운 UI", size: "col-span-1" },
    { id: 2, title: "실시간 주문 관리", sub: "주방과 서빙의 완벽한 호흡", size: "col-span-1" },
    { id: 3, title: "전체 테이블 Page 소개", sub: "회전율을 높이는 핵심 도구", size: "col-span-2" }, // Wide
    { id: 4, title: "메뉴 관리 Page", sub: "세트메뉴 구성부터 품절까지", size: "col-span-1" },
    { id: 5, title: "쿠폰/이벤트 등록", sub: "할인 코드 발급도 간편하게", size: "col-span-1" },
    { id: 6, title: "서버 전용 Page", sub: "입금 확인부터 서빙 콜까지", size: "col-span-2" } // Wide
  ];

  return (
    <section id="manual" className="min-h-screen snap-start bg-white py-32 px-10 overflow-y-auto">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-4xl font-black mb-16">한 눈에 알아보는 기능</h2>
        
        <div className="grid grid-cols-2 gap-8">
          {cards.map((card) => (
            <motion.div 
              key={card.id}
              onClick={() => window.open(`/details/manual_${card.id}`, '_blank')}
              className={`${card.size} h-[350px] bg-gray-50 rounded-[3rem] p-12 relative overflow-hidden group cursor-pointer border border-gray-100`}
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                <p className="text-gray-400">{card.sub}</p>
              </div>
              
              <motion.img 
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
                src={`/assets/manual/card_${card.id}.png`} 
                className="absolute bottom-0 right-0 w-3/4 object-contain translate-y-10 group-hover:translate-y-5 transition-transform"
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a href="/assets/25년 가을 D-order 사용설명서.pdf" download className="bg-gray-100 px-8 py-4 rounded-2xl font-bold hover:bg-gray-200 transition">
            📄 사용설명서 PDF 다운로드
          </a>
        </div>
      </div>
    </section>
  );
};

export default Manual;