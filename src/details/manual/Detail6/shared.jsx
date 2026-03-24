import React from 'react';
import { motion } from 'framer-motion';

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

export const ProgressDots = ({ dots = 8, className = '' }) => (
  <div className={`flex items-center gap-1.5 ${className}`}>
    {Array.from({ length: dots }).map((_, index) => (
      <motion.span
        key={index}
        className="w-2 h-2 rounded-full bg-gray-300"
        animate={{ opacity: [0.25, 1, 0.25], scale: [1, 1.2, 1] }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          delay: index * 0.1,
          ease: 'easeInOut',
        }}
      />
    ))}
  </div>
);

export const imgDropShadow = 'drop-shadow(0 18px 40px rgba(15,23,42,0.18))';

