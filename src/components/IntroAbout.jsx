import React from "react";
import { motion } from "framer-motion";

/**
 * [Responsibility]
 * - Hero 아래 “서비스 소개” 섹션: 배경 + 카피(토스톤) + 강조 키워드
 *
 * [Returns]
 * - JSX Element
 */
const IntroAbout = () => {
  return (
    <section
      id="service"
      className="h-screen snap-start relative overflow-hidden bg-black flex items-center"
    >
      {/* background */}
      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(/assets/hero_bg_4.png)` }}
      />

      {/* dim (가독성) */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />

      {/* content */}
      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-4xl md:text-6xl font-black drop-shadow-lg"
        >
          디오더는..
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-white/90 text-lg md:text-2xl font-semibold leading-relaxed drop-shadow"
        >
          대학 축제 부스 운영을{" "}
          <span className="inline-block px-2 rounded-lg bg-green-500/20 ring-1 ring-green-400/30 backdrop-blur-sm">
            더 빠르고
          </span>{" "}
          <span className="inline-block px-2 rounded-lg bg-green-500/20 ring-1 ring-green-400/30 backdrop-blur-sm">
            더 정확하게
          </span>{" "}
          바꿔주는 주문·운영 도구예요.
          <br />
          주문 누락, 대기 혼선, 정산 실수를 줄이고{" "}
          <span className="inline-block px-2 rounded-lg bg-white/15 ring-1 ring-white/20 backdrop-blur-sm">
            현장은 운영에만 집중
          </span>
          할 수 있게 도와줍니다.
        </motion.p>

        {/* 옵션: 짧은 서브 카피 (토스 느낌) */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 text-white/70 text-sm md:text-base"
        >
          한 번에 보이는 주문 현황, 간편한 메뉴 관리, 빠른 응대로 회전율까지 챙겨보세요.
        </motion.p>
      </div>
    </section>
  );
};

export default IntroAbout;