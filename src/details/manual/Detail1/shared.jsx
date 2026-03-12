import React from 'react';
import { motion } from 'framer-motion';

export const SectionShell = ({ children, className = '', delay = 0 }) => (
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

export const imgDropShadow = 'drop-shadow(0 18px 40px rgba(15,23,42,0.18))';
