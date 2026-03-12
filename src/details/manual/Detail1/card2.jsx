import React from 'react';
import { motion } from 'framer-motion';
import { SectionShell, imgDropShadow } from './shared';

/** Card2 – 좌측 텍스트, 우측 모바일 목업 */
export default function Card2() {
  return (
    <SectionShell delay={0.1}>
      <div className="flex flex-col md:flex-row items-stretch justify-between gap-8 md:gap-12 w-full max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col gap-4 justify-between">
          <div className="flex-1 text-left tracking-tight lg:tracking-normal">
            <h2 className="text-[36px] font-black text-black mb-4">
            학우들의 소중한 주문
            <br/>단 하나도 놓치지 않도록
            </h2>
            <p className="text-[24px] text-gray-600 leading-relaxed">
            서버의 화면에서 주문한 고객들의 결제 확인 요청 내역이 보여져요.
            </p>
          </div>
          <div className="w-full max-w-sm rounded-xl border border-gray-200 bg-gray-50/50 p-4 text-left">
            <p className="text-[18px] font-semibold text-gray-700 flex items-center gap-2">
              <span className="text-gray-500">ⓘ</span> 참고해주세요!
            </p>
            <div className="mt-2 h-px bg-gray-200" />
            <p className="mt-2 text-[20px] text-gray-600 leading-relaxed">
              결제확인요청: 손님의 주문에 대한 결제 확인
              <br />
              직원호출: 손님의 직원에 대한 호출
            </p>
          </div>
        </div>
        <motion.div
          className="flex-1 w-full max-w-[280px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/assets/manual/manual1_02.png"
            alt="결제 확인 모바일 목업"
            className="w-full h-auto rounded-[1.25rem]"
            style={{ filter: imgDropShadow }}
          />
        </motion.div>
      </div>
    </SectionShell>
  );
}
