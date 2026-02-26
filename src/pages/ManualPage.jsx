import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const Manual = () => {
  const cards = [
    {
      id: 1,
      title: "고객 주문 기능 소개",
      sub: "사용자 관점의 쉬운 UI",
      size: "col-span-1",
      bgColor: "bg-[#F3F6FF]", // 연한 블루
      hoverBorder: "hover:border-blue-200",
      imgClass: "w-[40%] right-6 -bottom-18",
      hoverY: -10
    },
    {
      id: 2,
      title: "실시간 주문 관리",
      sub: "주방과 서빙의 완벽한 호흡",
      size: "col-span-1",
      bgColor: "bg-[#FDF4FF]", // 연한 퍼플
      hoverBorder: "hover:border-purple-200",
      imgClass: "w-[70%] right-4 -bottom-8", // 이미지가 작으면 여백을 더 줌
      hoverY: -15
    },
    {
      id: 3,
      title: "전체 테이블 Page 소개",
      sub: "회전율을 높이는 핵심 도구",
      size: "col-span-2",
      bgColor: "bg-[#F0FDF4]", // 연한 그린 (성공/안정 느낌)
      hoverBorder: "hover:border-green-200",
      imgClass: "w-[45%] right-10 -bottom-4",
      hoverY: -8
    },
    {
      id: 4,
      title: "메뉴 관리 Page",
      sub: "세트메뉴 구성부터 품절까지",
      size: "col-span-1",
      bgColor: "bg-[#FFF7ED]", // 연한 오렌지
      hoverBorder: "hover:border-orange-200",
      imgClass: "w-[70%] right-4 -bottom-8",
      hoverY: -12
    },
    {
      id: 5,
      title: "서버 전용 Page",
      sub: "입금 확인부터 서빙 콜까지",
      size: "col-span-1 row-span-2",
      bgColor: "bg-[#F8FAFC]", // 깔끔한 슬레이트/그레이
      hoverBorder: "hover:border-slate-300",
      imgClass: "w-[50%] right-7 bottom-7",
      hoverY: -5
    },
    {
      id: 6,
      title: "쿠폰/이벤트 등록",
      sub: "할인 코드 발급도 간편하게",
      size: "col-span-1",
      bgColor: "bg-[#FEF2F2]", // 연한 레드/핑크
      hoverBorder: "hover:border-red-200",
      imgClass: "w-[70%] right-12 -bottom-8",
      hoverY: -20
    },
  ];

  return (
    <div>
      <section id="manual" className="min-h-screen snap-start bg-white pb-32 pt-20 px-10 overflow-y-auto pt-[80px]">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-4xl font-black mt-6 mb-14">한 눈에 알아보는 D-Order</h2>

          <div className="grid grid-cols-2 gap-8">
            {cards.map((card) => (
              <motion.div
                key={card.id}
                onClick={() => window.open(`/details/manual_${card.id}`, '_blank')}
                className={`
      ${card.size} 
      ${card.bgColor}           /* 카드별 배경색 적용 */
      ${card.hoverBorder}       /* 카드별 호버 테두리 적용 */
      min-h-[350px] 
      rounded-[3rem] 
      p-6 
      relative 
      overflow-hidden 
      group 
      cursor-pointer 
      border border-transparent /* 기본 테두리는 투명하게 */
      hover:bg-white            /* 호버 시 흰색으로 반전되어 깨끗한 느낌 */
      hover:shadow-2xl 
      hover:shadow-gray-200/50 
      transition-all duration-300
      sm:p-12
    `}
              >
                <div className="relative z-10">
                  {/* 텍스트 가독성을 위해 어두운 그레이(slate-800) 추천 */}
                  <h3 className="text-2xl font-bold mb-2 text-slate-800">{card.title}</h3>
                  <p className="text-slate-500 font-medium">{card.sub}</p>
                </div>

                <motion.img
                  src={`/assets/manual/card_${card.id}.png`}
                  // card 객체에 정의한 imgClass를 그대로 주입
                  className={`absolute object-contain transition-transform duration-500 ease-out ${card.imgClass}`}
                  whileHover={{
                    scale: 1.05,
                    rotate: -2,
                    y: card.hoverY // 카드마다 다른 호버 높이 적용
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                  }}
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <a href="/assets/manual/25년 가을 D-order 사용설명서.pdf" download className="bg-gray-100 px-8 py-4 rounded-2xl font-bold hover:bg-gray-200 transition">
              📄 사용설명서 PDF 다운로드
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Manual;