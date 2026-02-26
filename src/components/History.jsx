import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

/**
 * [Responsibility]
 * - D-Order 연혁(타임라인) 섹션
 * - Desktop: 가로 타임라인 + 카드
 * - Mobile: 세로 타임라인 + 카드
 * - Hover/Tap 시 점/텍스트/카드 강조 연동
 *
 * [Returns]
 * - JSX Element
 */
const History = () => {
  const items = useMemo(
    () => [
      {
        id: "2505",
        date: "2025.05.21",
        title: "25년 봄 대동제",
        subtitle: "7개의 부스 · 1,200명의 사용자 🏆",
        url: "https://www.instagram.com/p/DKE4Lf2TwW_/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
      {
        id: "2509",
        date: "2025.09.24",
        title: "25년 가을 대동제",
        subtitle: "8개의 부스 · 1,000명의 사용자",
        url: "https://www.instagram.com/p/DOmhTbrkgGa/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      },
      {
        id: "2605",
        date: "2026.05.XX",
        title: "26년 봄 대동제 (예정)",
        subtitle: "동국대학교 축제에서 만나요!",
        url: "https://www.instagram.com/d_order.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      },
    ],
    []
  );

  // 모바일 탭 / 데스크톱 hover 모두를 위한 active 상태
  const [activeId, setActiveId] = useState(items[1].id); // 가운데를 기본 강조(취향)

  const isActive = (id) => activeId === id;

  return (
    <section
      id="history"
      className="min-h-screen snap-start relative bg-cover bg-center flex items-center justify-center px-5 py-28 md:px-10"
      style={{ backgroundImage: "url('/assets/Festival.png')" }}
    >
      {/* dim */}
      <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl">
        <h2 className="text-white text-3xl md:text-4xl font-black mb-10 md:mb-14 text-center">
          D-Order의 기록
        </h2>

        {/* ------------------------- */}
        {/* Mobile (vertical timeline) */}
        {/* ------------------------- */}
        <div className="md:hidden">
          <div className="relative">
            {/* 세로 레일 */}
            <div className="absolute left-3 top-2 bottom-2 w-px bg-white/25" />

            <div className="space-y-6">
              {items.map((it) => (
                <motion.div
                  key={it.id}
                  className="w-full relative pl-10 pr-2"
                  whileTap={{ scale: 0.99 }}
                  onMouseEnter={() => setActiveId(it.id)}
                  onFocus={() => setActiveId(it.id)}
                  onTouchStart={() => setActiveId(it.id)}
                >
                  {/* 점 */}
                  <span
                    className={[
                      "absolute left-[7px] top-6 h-3 w-3 rounded-full transition-all",
                      isActive(it.id) ? "bg-orange-500 scale-110" : "bg-white/35",
                    ].join(" ")}
                  />
                  {/* 점 글로우 */}
                  {isActive(it.id) && (
                    <span className="absolute left-[2px] top-[18px] h-6 w-6 rounded-full bg-orange-500/25 blur-md" />
                  )}

                  {/* 카드 = 링크 */}
                  <motion.a
                    href={it.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={false}
                    animate={isActive(it.id) ? { y: -2 } : { y: 0 }}
                    transition={{ duration: 0.25 }}
                    className={[
                      "block cursor-pointer",
                      "max-w-[240px] mx-auto",
                      "bg-white/10 border border-white/20 backdrop-blur-md",
                      "rounded-3xl p-3",
                      isActive(it.id) ? "ring-1 ring-orange-400/40" : "",
                    ].join(" ")}
                    // ✅ 클릭 시 강조도 같이 하되, 링크는 기본 동작으로 두기
                    onClick={() => setActiveId(it.id)}
                  >
                    <img
                      src={`/assets/HistoryCard_${it.id}.png`}
                      alt={it.title}
                      className="w-full rounded-2xl"
                      draggable={false}
                    />

                    <div className="mt-4">
                      <p
                        className={[
                          "text-sm font-semibold transition-colors",
                          isActive(it.id) ? "text-orange-300" : "text-white/70",
                        ].join(" ")}
                      >
                        {it.date}
                      </p>
                      <p className="text-white font-black text-lg mt-1">{it.title}</p>
                      <p className="text-white/80 text-sm mt-2">{it.subtitle}</p>
                    </div>
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* -------------------------- */}
        {/* Desktop (horizontal timeline) */}
        {/* -------------------------- */}
        <div className="hidden md:block">
          {/* 타임라인 레일 */}
          <div className="relative mt-6">
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-white/25" />

            {/* 스텝(점) + 라벨 */}
            <div className="grid grid-cols-3 gap-8 items-center">
              {items.map((it) => (
                <div key={`step-${it.id}`} className="relative flex flex-col items-center">
                  <button
                    type="button"
                    onMouseEnter={() => setActiveId(it.id)}
                    onFocus={() => setActiveId(it.id)}
                    className="group relative"
                    aria-label={`${it.title} 선택`}
                  >
                    {/* 점 */}
                    <span
                      className={[
                        "block h-3 w-3 rounded-full transition-all",
                        isActive(it.id) ? "bg-orange-500 scale-110" : "bg-white/35",
                      ].join(" ")}
                    />
                    {/* 글로우 */}
                    {isActive(it.id) && (
                      <span className="absolute -inset-3 rounded-full bg-orange-500/20 blur-md" />
                    )}
                  </button>

                  {/* 라벨(hover시 강조) */}
                  <div className="mt-4 text-center">
                    <p
                      className={[
                        "text-sm font-semibold transition-colors",
                        isActive(it.id) ? "text-orange-300" : "text-white/70",
                      ].join(" ")}
                    >
                      {it.date}
                    </p>
                    <p
                      className={[
                        "mt-1 font-black transition-colors",
                        isActive(it.id) ? "text-white" : "text-white/80",
                      ].join(" ")}
                    >
                      {it.title}
                    </p>
                  </div>

                  {/* 점 → 카드 연결 가이드(옵션, active일 때만) */}
                  <div
                    className={[
                      "absolute top-[38px] w-px h-8 transition-opacity",
                      isActive(it.id) ? "bg-orange-400/40 opacity-100" : "bg-white/20 opacity-70",
                    ].join(" ")}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 카드 영역 */}
          <div className="mt-10 grid grid-cols-3 gap-8 items-stretch">
            {items.map((it) => (
              <motion.a
                href={it.url}
                target="_blank"
                rel="noopener noreferrer"
                key={it.id}
                onMouseEnter={() => setActiveId(it.id)}
                className={[
                  "bg-white/10 border border-white/20 backdrop-blur-md",
                  "rounded-[2.5rem] p-6",
                  isActive(it.id) ? "ring-1 ring-orange-400/40" : "",
                ].join(" ")}
                animate={isActive(it.id) ? { y: -10 } : { y: 0 }}
                transition={{ duration: 0.25 }}
              >
                <img
                  src={`/assets/HistoryCard_${it.id}.png`}
                  alt={it.title}
                  className="w-full rounded-2xl"
                  draggable={false}
                />

                <div className="mt-4">
                  <p
                    className={[
                      "text-sm font-semibold transition-colors",
                      isActive(it.id) ? "text-orange-300" : "text-white/70",
                    ].join(" ")}
                  >
                    {it.date}
                  </p>
                  <p className="text-white font-black text-lg mt-1">{it.title}</p>
                  <p className="text-white/80 text-sm mt-2">{it.subtitle}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* (선택) 모바일 안내 문구 */}
        <p className="mt-8 text-center text-white/60 text-xs md:hidden">
          카드를 탭하면 타임라인이 함께 강조돼요.
        </p>
      </div>
    </section>
  );
};

export default History;