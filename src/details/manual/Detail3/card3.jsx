import React from 'react';
import { motion } from 'framer-motion';
import {
  Manual3SectionShell,
  ProgressDots,
  ClickCursor,
  PulseImage,
  imgDropShadow,
} from './shared';

const STEP_CONFIG = {
  id: 'step2',
  badge: 'STEP 2',
  title: '직원 화면에서 서빙을 시작하면 ‘서빙중’ 상태로 자동 변경',
  description:
    '직원용 화면에서 서빙을 시작하면, 해당 주문은 자동으로 ‘서빙중’ 상태로 바뀌어 홀과 주방 모두 현재 상황을 한눈에 볼 수 있습니다.',
  leftMock: '/assets/manual/manual3_0301.png',
  cursor: '/assets/manual/manual_cursor.png',
  rightMock: '/assets/manual/manual3_0303.png',
};

/** 3. STEP 2 – 정렬: 좌측 정렬 */
export default function Card3() {
  const { badge, title, description, leftMock, cursor, rightMock } = STEP_CONFIG;
  return (
    <Manual3SectionShell delay={0.15}>
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-8 text-left tracking-tight lg:tracking-normal">
          <span className="text-[36px] font-black text-black block mb-3">
            {badge}
          </span>
          <h2 className="text-[36px] font-black text-black mb-3">{title}</h2>
          <p className="text-[24px] text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
          <div className="relative w-full md:max-w-sm">
            <motion.img
              src={leftMock}
              alt={`${badge} 화면`}
              className="w-full h-auto rounded-3xl"
              style={{ filter: imgDropShadow }}
              initial={{ y: 6 }}
              animate={{ y: [6, 0, 6] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <ClickCursor
              src={cursor}
              className="absolute -bottom-3 right-3 md:-bottom-4 md:right-6 w-10 md:w-12"
            />
          </div>
          <ProgressDots className="my-6 md:my-0 md:flex-1" />
          <PulseImage
            src={rightMock}
            alt="서빙중 상태"
            className="w-40 md:w-44 lg:w-52"
          />
        </div>
      </div>
    </Manual3SectionShell>
  );
}
