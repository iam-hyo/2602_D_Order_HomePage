import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


const guideDropShadow = 'drop-shadow(0 20px 40px rgba(15,23,42,0.2))';

/** 소개서 및 가이드 – 정렬: 제목 중앙 또는 좌측, 본문 좌측. 모든 Manual 하위 페이지 공통 */
export default function CardGuide() {
  const navigate = useNavigate();
  return (
    <section className="details-shell tracking-tight lg:tracking-normal">
      <h2 className="details-title mb-6 md:mb-8 text-center md:text-left">
        소개서 및 가이드
      </h2>
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center rounded-[1.75rem] md:rounded-[2.5rem] p-5 sm:p-6 md:p-12 bg-[#F8FAFC] min-h-0">
        <motion.div
          className="w-full md:max-w-sm flex-shrink-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative rounded-[2.2rem] bg-gradient-to-br from-sky-50 via-white to-indigo-50 p-3">
            <img
              src="/assets/manual/manual3_guide_mockup.png"
              alt="소개서 및 가이드 목업"
              className="w-full h-auto rounded-[1.9rem]"
              style={{ filter: guideDropShadow }}
            />
          </div>
        </motion.div>
        <div className="flex-1 text-left min-w-0">
          <p className="details-body mb-6 md:mb-8">
            D-Order를 처음 사용하는 사장님도 걱정 없이 시작할 수 있도록, 주문부터 서빙까지 한
            번에 정리한 가이드를 제공합니다.
          </p>
          <div className="space-y-3 md:space-y-4">
            <button
              type="button"
              className="w-full flex items-center justify-between gap-4 px-4 sm:px-5 md:px-6 py-3.5 md:py-4 rounded-2xl bg-white border border-gray-100 transition-colors hover:bg-gray-50"
              style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.06))' }}
              onClick={() => navigate('/trial')}
            >
              <span className="details-guide-button-text text-left">
                디오더 서비스 사용해보기
              </span>
              <span className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center text-base md:text-xl flex-shrink-0">
                →
              </span>
            </button>
            <button
              type="button"
              className="w-full flex items-center justify-between gap-4 px-4 sm:px-5 md:px-6 py-3.5 md:py-4 rounded-2xl bg-white border border-gray-100 transition-colors hover:bg-gray-50"
              style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.06))' }}
              onClick={() => window.open('https://pf.kakao.com/_xeKARX', '_blank')}
            >
              <span className="details-guide-button-text text-left">
                지금 바로 카카오톡 문의하기
              </span>
              <span className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center text-base md:text-xl flex-shrink-0">
                →
              </span>
            </button>
          </div>
          <button
            type="button"
            className="mt-6 md:mt-8 w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3.5 md:py-4 rounded-2xl text-base sm:text-lg md:text-[24px] transition-colors"
          >
            사용설명서 PDF 다운로드
          </button>
        </div>
      </div>
    </section>
  );
}
