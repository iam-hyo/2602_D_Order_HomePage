import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [index, setIndex] = useState(0);
  const slides = [
    { bg: '/assets/hero_bg_1.jpg', mockups: ['tablet'] },
    { bg: '/assets/hero_bg_2.png', mockups: ['mobile'] },
    { bg: '/assets/hero_bg_3.png', mockups: ['tablet', 'mobile', 'server'] }
  ];

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % 3), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="intro" className="h-screen snap-start relative overflow-hidden bg-black flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div 
          key={index}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url(${slides[index].bg})` }}
        />
      </AnimatePresence>

      <div className="relative z-10 flex flex-col items-center">
        <div className="flex items-end justify-center gap-6 h-[400px]">
          {slides[index].mockups.includes('tablet') && (
            <motion.img layoutId="tablet" src="/assets/mockup_tablet.png" className="w-[400px] md:w-[600px] drop-shadow-2xl" />
          )}
          {slides[index].mockups.includes('mobile') && (
            <motion.img layoutId="mobile" src="/assets/mockup_mobile.png" className="w-[150px] md:w-[200px] drop-shadow-2xl" />
          )}
          {slides[index].mockups.includes('server') && (
            <motion.img layoutId="server" src="/assets/mockup_server.png" className="w-[300px] md:w-[450px] drop-shadow-2xl" />
          )}
        </div>
        <h1 className="text-white text-4xl md:text-6xl font-black mt-12 drop-shadow-lg">스마트한 부스 운영의 시작</h1>
      </div>
    </section>
  );
};

export default Hero;