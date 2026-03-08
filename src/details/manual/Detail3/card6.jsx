import React from 'react';
import { motion } from 'framer-motion';
import { Manual3SectionShell, imgDropShadow } from './shared';

/** 6. 실시간 주문 집계 – 정렬: 좌측 목업, 우측 텍스트(좌측 정렬) */
export default function Card6() {
  return (
    <Manual3SectionShell delay={0.3}>
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          className="flex-1 w-full max-w-lg"
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative rounded-[2rem] bg-gradient-to-br from-emerald-50 via-white to-sky-50 p-4 md:p-6">
            <img
              src="/assets/manual/manual3_0601.png"
              alt="실시간 주문 집계 화면"
              className="w-full h-auto rounded-[1.5rem]"
              style={{ filter: imgDropShadow }}
            />
          </div>
        </motion.div>
        <div className="flex-1 text-left tracking-tight lg:tracking-normal">
          <h2 className="text-[36px] font-black text-black mb-4">
            실시간 주문 집계
          </h2>
          <p className="text-[24px] text-gray-600 leading-relaxed mb-4">
            아직 손님 테이블에 올라가지 않은 음식과 음료를 한눈에 볼 수 있어, 어떤 메뉴를
            먼저 서빙할지 효율적으로 판단할 수 있어요.
          </p>
          <p className="text-[24px] text-gray-600 leading-relaxed opacity-90">
            주문 집계 화면의 숫자가 높은 메뉴부터 우선 조리하고, 서빙을 마친 메뉴는 바로
            완료 처리해 주면 주방과 홀 모두 더 여유로운 운영이 가능합니다.
          </p>
        </div>
      </div>
    </Manual3SectionShell>
  );
}
