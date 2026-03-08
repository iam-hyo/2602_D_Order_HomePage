import React from 'react';
import { motion } from 'framer-motion';
import {
  Manual3SectionShell,
  ProgressDots,
  ClickCursor,
  imgDropShadow,
} from './shared';

const STEP_CONFIG = {
  id: 'step3',
  badge: 'STEP 3',
  title: '조리완료 버튼을 한 번 더 누르거나 직원 화면에서 완료 시 자동 완료 처리',
  description:
    '서빙이 끝나면 버튼을 한 번 더 눌러 ‘서빙완료’ 상태로 변경하거나, 직원용 화면에서 완료 처리하면 자동으로 반영됩니다.',
  leftMock: '/assets/manual/manual3_0401.png',
  cursor: '/assets/manual/manual_cursor.png',
  centerMock: '/assets/manual/manual3_0403.png',
};

/** 4. STEP 3 – 정렬: 좌측 정렬 */
export default function Card4() {
  const { badge, title, description, leftMock, cursor, centerMock } = STEP_CONFIG;
  return (
    <Manual3SectionShell delay={0.2}>
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
              transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <ClickCursor
              src={cursor}
              className="absolute -bottom-3 right-3 md:-bottom-4 md:right-6 w-10 md:w-12"
            />
          </div>
          <motion.img
            src={centerMock}
            alt="서빙 완료 버튼"
            className="w-36 md:w-40 lg:w-44"
            style={{ filter: imgDropShadow }}
            initial={{ scale: 0.98 }}
            animate={{ scale: [0.98, 1.02, 0.98] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <ProgressDots className="mt-8 md:mt-0 md:flex-1" />
        </div>
      </div>
    </Manual3SectionShell>
  );
}
