import React from 'react';
import { motion } from 'framer-motion';
import { SectionShell, imgDropShadow } from './shared';

/** Card3 – 좌측 텍스트, 우측 모바일 목업 */
export default function Card3() {
  return (
    <SectionShell delay={0.15}>
      <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-12 w-full max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-1 flex-col justify-between text-left tracking-tight lg:tracking-normal">
          <div>
            <h2 className="text-[36px] font-black text-black mb-4">
              주점은 바쁘니까.
              <br />
              슬라이드 한 번으로 가능하도록
            </h2>
            <p className="text-[24px] text-gray-600 leading-relaxed mb-4">
              입금내역을 확인하면, 서버는 밀어서 주문을 승인할 수 있어요.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-gray-50/50 p-4 max-w-lg">
            <p className="text-[18px] font-semibold text-gray-700 flex items-center gap-2">
              <span className="text-gray-500">ⓘ</span> 참고해주세요!
            </p>
            <div className="mt-2 h-px bg-gray-200" />
            <p className="mt-2 text-[20px] text-gray-600 leading-relaxed">
              손님이 주문하더라도, <br/>서버가 확인하지 않으면 완료되지 않아요.
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
            src="/assets/manual/manual1_01.png"
            alt="밀어서 결제 확인 모바일 목업"
            className="w-full h-auto rounded-[1.25rem]"
            style={{ filter: imgDropShadow }}
          />
        </motion.div>
      </div>
    </SectionShell>
  );
}
