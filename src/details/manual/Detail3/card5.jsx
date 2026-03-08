import React from 'react';
import { motion } from 'framer-motion';
import { Manual3SectionShell, imgDropShadow } from './shared';

/** 5. TIP – 정렬: 좌측 정렬(텍스트), 우측 목업 */
export default function Card5() {
  return (
    <Manual3SectionShell delay={0.25}>
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex-1 text-left tracking-tight lg:tracking-normal">
          <p className="text-[24px] font-semibold text-orange-400 mb-2">TIP</p>
          <h2 className="text-[36px] font-black text-black mb-4">
            잠깐! 잘못 누르셨나요?
          </h2>
          <p className="text-[24px] text-gray-600 leading-relaxed">
            조리 상태 버튼은 언제든지 다시 눌러서 자유롭게 바꿀 수 있어요. 실수로 눌러도
            걱정하지 마시고, 현재 상황에 맞게 편하게 수정하세요.
          </p>
        </div>
        <motion.div
          className="flex-1 w-full max-w-lg"
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative rounded-[2rem] bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4 md:p-6">
            <img
              src="/assets/manual/manual3_0501.png"
              alt="잘못 눌렀을 때 안내 목업"
              className="w-full h-auto rounded-[1.5rem]"
              style={{ filter: imgDropShadow }}
            />
          </div>
        </motion.div>
      </div>
    </Manual3SectionShell>
  );
}
