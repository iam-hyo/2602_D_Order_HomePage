import React from 'react';
import { motion } from 'framer-motion';

const History = () => {
  const years = [
    { id: '2505', title: '25년 봄 대동제' },
    { id: '2510', title: '25년 가을 대동제' },
    { id: '2605', title: '26년 봄 대동제 (예정)' }
  ];

  return (
    <section className="h-screen snap-start relative bg-cover bg-center flex flex-col items-center justify-center p-10" style={{ backgroundImage: "url('/assets/Festival.png')" }}>
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
      
      <div className="relative z-10 w-full max-w-6xl">
        <h2 className="text-white text-3xl font-bold mb-16 text-center">D-Order의 기록</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          {years.map((y) => (
            <motion.div 
              key={y.id}
              whileHover={{ y: -10 }}
              className="w-full md:w-1/3 bg-white/10 p-6 rounded-[2.5rem] border border-white/20 backdrop-blur-md"
            >
              <img src={`/assets/HistoryCard${y.id}.png`} alt={y.title} className="w-full rounded-2xl mb-4" />
              <p className="text-white font-bold text-center">{y.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default History;