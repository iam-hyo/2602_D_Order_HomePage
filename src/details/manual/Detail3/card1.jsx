import React from 'react';
import { motion } from 'framer-motion';
import { Manual3SectionShell, imgDropShadow } from './shared';

/** 1. 서빙 관리 시스템 – 가운데 정렬, flex column(텍스트 → 이미지), 이미지 그라데이션 제거 */
export default function Card1() {
  return (
    <Manual3SectionShell delay={0.05}>
      <div className="flex flex-col items-center gap-8 text-center w-full max-w-4xl mx-auto px-6 md:px-12 tracking-tight lg:tracking-normal">
        <h2 className="text-[36px] font-black text-black">
          놓치지 않는 4단계 주문관리
        </h2>
        <p className="text-[24px] text-gray-600 leading-relaxed">
          주방의 조리 현황과 홀의 서빙 요청을 한 화면에서 확인해요. <br />
          어떤 테이블을 먼저 처리해야 할지 쉽게 파악할 수 있어요.
        </p>
        <motion.div
          className="w-full max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <img
            src="/assets/manual/manual3_0101.png"
            alt="서빙 관리 시스템 목업"
            className="w-full h-auto rounded-[1.5rem]"
            style={{ filter: imgDropShadow }}
          />
        </motion.div>
      </div>
    </Manual3SectionShell>
  );
}
