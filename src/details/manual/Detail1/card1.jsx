import React from 'react';
import { motion } from 'framer-motion';
import { SectionShell, imgDropShadow } from './shared';

/** Card1 – 중앙 모바일 목업, flex column, 그라데이션 없음 */
export default function Card1() {
  return (
    <SectionShell delay={0.05}>
      <div className="flex flex-col items-center gap-8 text-center w-full max-w-4xl mx-auto px-6 md:px-12 tracking-tight lg:tracking-normal">
        <div>
          <h2 className="text-[36px] font-black text-black leading-tight">
          밀어서 결제 확인
          </h2>
          <p className="mt-4 text-[28px] text-gray-600 leading-relaxed">
          디오더의 안전한 결제 관리 - 서버 화면
          </p>
        </div>
        
        <motion.div
          className="w-full max-w-[280px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <img
            src="/assets/manual/manual1_01.png"
            alt="서버 화면 결제 확인 요청 목업"
            className="w-full h-auto rounded-[1.25rem]"
            style={{ filter: imgDropShadow }}
          />
        </motion.div>
      </div>
    </SectionShell>
  );
}
