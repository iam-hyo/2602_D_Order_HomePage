import React from 'react';
import { motion } from 'framer-motion';

const Makers = () => {
  const teams = [
    {
      role: "기획 / 개발",
      members: ["김강민", "장선우", "손영채", "박진희", "전효준"],
      color: "text-orange-500"
    },
    {
      role: "Front-End",
      members: ["오태준", "강근우", "이동건"],
      color: "text-gray-400"
    },
    {
      role: "Back-End",
      members: ["임수빈", "박선우", "차은호", "이동건"],
      color: "text-gray-400"
    }
  ];

  return (
    <section id="makers" className="min-h-screen snap-start bg-white p-10 md:p-20 pt-32 overflow-y-auto">
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-4xl font-black mb-16">만든 사람들</h2>
        
        <div className="space-y-20">
          {teams.map((team, i) => (
            <div key={i}>
              <h3 className={`${team.color} font-black text-sm tracking-widest uppercase mb-10`}>
                {team.role}
              </h3>
              {/* 반응형 그리드: 모바일 2열, 테블릿 이상 5열 */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
                {team.members.map((name, j) => (
                  <motion.div 
                    key={j}
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center group"
                  >
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-50 rounded-full overflow-hidden mb-4 border border-gray-100 group-hover:border-orange-200 transition-colors shadow-sm">
                      <img 
                        src={`/assets/makers/미모지_${name}.png`} 
                        alt={name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => { e.target.src = "https://via.placeholder.com/150?text=Emoji"; }} // 이미지 누락 대비
                      />
                    </div>
                    <span className="font-bold text-gray-800">{name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-32 pt-10 border-t border-gray-100 text-center text-gray-300 text-sm">
          © 2026 D-Order Team. All rights reserved.
        </footer>
      </div>
    </section>
  );
};

export default Makers;