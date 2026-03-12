import React from 'react';
import { motion } from 'framer-motion';
import { SectionShell, imgDropShadow } from './shared';

/** Card4 – 좌측 텍스트, 우측 테블릿 목업 */
export default function Card4() {
  return (
    <SectionShell delay={0.2}>
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex-1 text-left tracking-tight lg:tracking-normal">
          <h2 className="text-[36px] font-black text-black mb-4">
            말하러 갈 필요없이,
            <br />
            서빙 관리 시스템에 즉시 반영
          </h2>
          <p className="text-[24px] text-gray-600 leading-relaxed">
            서버가 주문을 승인하면, 실시간으로 주문이 집계돼요. 주문 집계와 매출을
            한 화면에서 확인할 수 있어요.
          </p>
        </div>
        <motion.div
          className="flex-1 w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/assets/manual/manual1_04.png"
            alt="주문 집계 테블릿 목업"
            className="w-full h-auto rounded-[1.25rem]"
            style={{ filter: imgDropShadow }}
          />
        </motion.div>
      </div>
    </SectionShell>
  );
}
