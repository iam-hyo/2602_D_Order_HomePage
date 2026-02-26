import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * [Responsibility]
 * - Hero 섹션의 슬라이드(배경/목업/문구) 자동 로테이션과 전환 애니메이션을 제공
 *
 * [Returns]
 * - JSX Element
 */
const Hero = () => {
  /**
   * [Responsibility]
   * - 현재 슬라이드 인덱스 관리(0..N-1)
   */
  const [index, setIndex] = useState(2);

  /**
   * [Responsibility]
   * - 슬라이드 데이터: 배경/목업/키워드(문구용)
   */
  const slides = useMemo(
    () => [
      { bg: "/assets/hero_bg_2.png", mockups: ["tablet"], keyword: "주문 관리", dim: 0.00 },
      { bg: "/assets/hero_bg_3.png", mockups: ["mobile"], keyword: "메뉴 주문", dim: 0.00 },
      { bg: "/assets/hero_bg_1.png", mockups: ["tablet", "mobile", "server"], keyword: "부스 운영", dim: 0.3 },
    ],
    []
  );

  /**
   * [Responsibility]
   * - 일정 시간마다 index를 증가시켜 슬라이드를 자동 로테이션
   */
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setIndex((prev) => (prev + 1) % slides.length);
  //   }, 5000);

  //   return () => clearInterval(timer);
  // }, [slides.length]);

  // 통일감 있는 전환을 위해 "전체 장면"이 공유할 duration/ease를 한 곳에서 정의
  const TRANSITION = { duration: 0.6, ease: [0.22, 1, 0.36, 1] }; // easeOut 계열

  /**
   * [Responsibility]
   * - 장면(Scene) 단위로 enter/exit를 통일: 배경/목업/텍스트가 같은 시간에 바뀌는 느낌
   */
  const sceneVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { ...TRANSITION } },
    exit: { opacity: 0, transition: { ...TRANSITION } },
  };

  /**
   * [Responsibility]
   * - 배경: 살짝 줌인/줌아웃 + 디졸브 (이미지 바뀜을 부드럽게)
   */
  const bgVariants = {
    initial: { opacity: 0, scale: 1.04 },
    animate: { opacity: 1, scale: 1.0, transition: { ...TRANSITION } },
    exit: { opacity: 0, scale: 1.02, transition: { ...TRANSITION } },
  };

  /**
   * [Responsibility]
   * - 목업 이미지: 위/아래로 살짝 움직이며 등장/퇴장 (배경과 동일 duration 공유)
   */
  // const mockupVariants = {
  //   initial: { opacity: 0, y: 18, scale: 0.985 },
  //   animate: { opacity: 1, y: 0, scale: 1, transition: { ...TRANSITION } },
  //   exit: { opacity: 0, y: -12, scale: 0.99, transition: { ...TRANSITION } },
  // };
  const mockupVariants = {
    initial: { opacity: 0, y: 18, },
    animate: { opacity: 1, y: 0, transition: { ...TRANSITION } },
    exit: { opacity: 0, y: -12, transition: { ...TRANSITION } },
  };

  /**
   * [Responsibility]
   * - 텍스트(키워드) 큐브 회전 느낌: 아래로 넘어가며 rotateX + y 이동
   * - container에 perspective를 줘야 회전감이 살아남
   */
  const keywordVariants = {
    initial: { opacity: 0, rotateX: 75, y: 18 },
    animate: { opacity: 1, rotateX: 0, y: 0, transition: { ...TRANSITION } },
    exit: { opacity: 0, rotateX: -70, y: -14, transition: { ...TRANSITION } },
  };

  const current = slides[index];

  return (
    <section
      id="intro"
      className="h-screen snap-start relative overflow-hidden bg-black flex items-center justify-center"
    >
      {/* 장면 전체를 key로 전환: 배경/목업/문구가 같은 타이밍으로 갈아끼워짐 */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          variants={sceneVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0"
        >
          {/* Background image */}
          <motion.div
            variants={bgVariants}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${current.bg})` }}
          />

          {/* Dim overlay: 밝은 배경에서도 텍스트 가시성 확보 */}
          {/* 필요하면 그라데이션/블러도 추가 가능 */}
          <div className="absolute inset-0 bg-black" style={{ opacity: current.dim }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/10" />
        </motion.div>
      </AnimatePresence>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center px-4">
        {/* Mockups: 장면 전환과 동일 duration로 페이드/무브 */}
        {/* Mockups */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`mockups-${index}`}
            variants={mockupVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="h-[460px] w-screen flex items-end justify-center"
          >
            {/* hero3(3개)일 때만 absolute로 배치 */}
            {current.mockups.length === 3 ? (
              <div className="relative h-[400px] w-full max-w-[1100px] mx-auto">
                {/* TABLET - center */}
                <img
                  src="/assets/mockup_tablet.png"
                  alt="tablet mockup"
                  draggable={false}
                  className="
                    absolute bottom-0
                    left-1/2 -translate-x-1/2 w-[420px] 
                    sm:w-[560px] md:w-[680px] lg:w-[800px]
                    
                  "
                />

                {/* MOBILE - left (겹침) */}
                <img
                  src="/assets/mockup_customer.png"
                  alt="mobile mockup"
                  draggable={false}
                  className="
            absolute bottom-0
            left-[0%] sm:left-[14%] md:left-[18%] lg:left-[0%]
            h-[220px] sm:h-[220px] md:h-[360px] lg:h-[420px]
            drop-shadow-2xl z-30
          "
                />

                {/* SERVER - right, size down (높이 약 420px 목표) */}
                {/* Tailwind는 h-[420px] 가능. 이미지 비율 유지하려면 h로 맞추고 w-auto */}
                <img
                  src="/assets/mockup_server.png"
                  alt="server mockup"
                  draggable={false}
                  className="
            absolute bottom-0
            right-[6%] sm:right-[8%] md:right-[10%] lg:right-[-0%]
            h-[220px] sm:h-[260px] md:h-[360px] lg:h-[420px]
            w-auto
            drop-shadow-2xl z-40
          "
                />
              </div>
            ) : (
              // hero1/hero2는 기존 flex 스타일 유지 (간단)
              <div className="flex items-end justify-center gap-6 h-[400px]">
                {current.mockups.includes("tablet") && (
                  <img
                    src="/assets/mockup_tablet.png"
                    alt="tablet mockup"
                    draggable={false}
                    className="w-[400px] md:w-[600px] lg:w-[800px] drop-shadow-2xl"
                  />
                )}
                {current.mockups.includes("mobile") && (
                  <img
                    src="/assets/mockup_customer.png"
                    alt="mobile mockup"
                    draggable={false}
                    className="w-[150px] md:w-[200px] lg:w-[300px] lg:translate-y-[10px] drop-shadow-2xl"
                  />
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Title line: 키워드만 슬라이드에 따라 바뀌도록 구성 */}
        <div className="mt-10 md:mt-12 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-black drop-shadow-lg leading-tight">
            스마트한{" "}
            {/* perspective로 3D 회전감 부여 */}
            <span className="[perspective:800px] inline-block">
              <AnimatePresence mode="wait">
                <motion.span
                  key={`kw-${index}`}
                  variants={keywordVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="inline-block origin-bottom"
                >
                  {/* 강조 박스(키워드) */}
                  <span className="inline-block px-4 py-2 mx-1 rounded-md bg-white/15 ring-1 ring-white/20 backdrop-blur-sm">
                    {current.keyword}
                  </span>
                </motion.span>
              </AnimatePresence>
            </span>
            의 시작
          </h1>

          {/* Brand line: D-Order도 살짝 통일감 있게 등장 */}
          <AnimatePresence mode="wait">
            <motion.h2
              className="text-orange-500 text-4xl md:text-8xl font-black mt-2 drop-shadow-lg leading-tight"
            >
              D-Order
            </motion.h2>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Hero;