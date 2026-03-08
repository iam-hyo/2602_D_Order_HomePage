import React from 'react';
import { motion } from 'framer-motion';

/** 카드 내용 래퍼 – 스크롤 등장 애니메이션만. 그림자는 내부 요소에 drop-shadow로 */
export const Manual3SectionShell = ({ children, className = '', delay = 0 }) => (
  <motion.div
    className={`${className}`}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

/** 점선 진행바 – 재사용. drop-shadow 없음(단색 원) */
export const ProgressDots = ({ dots = 7, className = '' }) => (
  <div
    className={`flex items-center justify-center md:justify-between gap-1 md:gap-2 ${className}`}
  >
    {Array.from({ length: dots }).map((_, index) => (
      <motion.span
        key={index}
        className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-orange-200"
        animate={{ opacity: [0.25, 1, 0.25], scale: [1, 1.25, 1] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: index * 0.12,
          ease: 'easeInOut',
        }}
      />
    ))}
  </div>
);

/** 클릭 커서 – drop-shadow로 아이콘 테두리/깊이감 */
export const ClickCursor = ({ src, className = '' }) => (
  <motion.img
    src={src}
    alt="클릭 커서"
    className={`pointer-events-none select-none ${className}`}
    style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))' }}
    initial={{ scale: 1, y: 0, opacity: 0.9 }}
    animate={{
      scale: [1, 0.9, 1],
      y: [0, 3, 0],
      opacity: [0.9, 1, 0.9],
    }}
    transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
  />
);

/** 상태 배지/아이콘 박동 – boxShadow 대신 filter: drop-shadow 애니메이션 */
export const PulseImage = ({ src, alt, className = '' }) => (
  <motion.img
    src={src}
    alt={alt}
    className={className}
    initial={{ filter: 'drop-shadow(0 0 0 rgba(248,113,113,0))' }}
    animate={{
      scale: [1, 1.05, 1],
      filter: [
        'drop-shadow(0 0 0 rgba(248,113,113,0))',
        'drop-shadow(0 0 24px rgba(248,113,113,0.5))',
        'drop-shadow(0 0 0 rgba(248,113,113,0))',
      ],
    }}
    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
  />
);

/** 이미지에만 적용하는 정적 drop-shadow (카드/목업용) */
export const imgDropShadow = 'drop-shadow(0 18px 40px rgba(15,23,42,0.18))';
