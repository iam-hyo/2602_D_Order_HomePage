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
  id: 'step1',
  badge: 'STEP 1',
  title: '손님 테이블에 올라갈 준비가 된 메뉴를 ‘조리완료’ 상태로 변경',
  description:
    '주방에서 음식이 다 준비되면, 주문 리스트의 메뉴를 눌러 ‘조리완료’ 상태로 바꿔 주세요.',
  leftMock: '/assets/manual/manual3_0201.png',
  cursor: '/assets/manual/manual_cursor.png',
  rightMock: '/assets/manual/manual3_0203.png',
};

/** 2. STEP 1 – 정렬: 좌측 정렬 */
export default function Card2() {
  const { badge, title, description, leftMock, cursor, rightMock } = STEP_CONFIG;
  return (
    <Manual3SectionShell delay={0.1}>
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
              initial={{ y: 8 }}
              animate={{ y: [8, 0, 8] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <ClickCursor
              src={cursor}
              className="absolute -bottom-3 right-4 md:-bottom-4 md:right-6 w-10 md:w-12"
            />
          </div>
          <ProgressDots className="my-6 md:my-0 md:flex-1" />
          <PulseImage
            src={rightMock}
            alt="조리완료 상태"
            className="w-40 md:w-44 lg:w-52"
          />
        </div>
      </div>
    </Manual3SectionShell>
  );
}
