import React, { useMemo, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import IntroAbout from "./components/IntroAbout"; // ✅ 새 섹션
import History from "./components/History";
import Manual from "./components/Manual";
import Trial from "./components/Trial";
import Makers from "./components/Makers";

/**
 * [Responsibility]
 * - 전체 섹션 스냅 스크롤 레이아웃 구성
 * - 현재 섹션 인덱스를 계산해 Header 테마/우측 인디케이터에 반영
 *
 * [Returns]
 * - JSX Element
 */
const MainLanding = () => {
  /**
   * [Responsibility]
   * - 섹션 정의: 순서가 곧 snap 스크롤 순서
   * - Header theme 및 페이지 인디케이터에도 사용
   */
  const PAGES = useMemo(
    () => [
      { id: "intro", theme: "dark" },
      { id: "service", theme: "dark" }, // ✅ 서비스 소개(새 섹션)
      { id: "history", theme: "dark" },
      { id: "manual", theme: "light" },
      { id: "trial", theme: "light" },
      { id: "makers", theme: "light" },
    ],
    []
  );

  const [currentPage, setCurrentPage] = useState(0);

  /**
   * [Responsibility]
   * - main 스크롤 시 현재 화면이 어떤 섹션인지 계산
   * - snap 환경에서는 섹션 상단 위치를 기준으로 가장 가까운 섹션을 currentPage로 잡는 방식이 안정적
   *
   * [Args]
   * - e: React UIEvent (scroll)
   */
  const handleScroll = (e) => {
    const container = e.currentTarget;
    const scrollTop = container.scrollTop;

    // 섹션들의 offsetTop을 기준으로 현재 섹션 판별
    // (각 section은 h-screen이라 offset 간격이 대체로 일정하지만,
    //  앞으로 커스텀 높이가 생겨도 동작하도록 offsetTop 기반으로 둠)
    const sections = Array.from(container.querySelectorAll("section[id]"));

    if (sections.length === 0) return;

    // 현재 스크롤 위치와 가장 가까운 section을 찾는다
    let nearestIdx = 0;
    let minDist = Number.POSITIVE_INFINITY;

    sections.forEach((sec, idx) => {
      const dist = Math.abs(sec.offsetTop - scrollTop);
      if (dist < minDist) {
        minDist = dist;
        nearestIdx = idx;
      }
    });

    if (nearestIdx !== currentPage) setCurrentPage(nearestIdx);
  };

  return (
    <div className="h-screen overflow-hidden bg-black font-pretendard">
      {/* 현재 페이지의 테마값을 Header에 전달 */}
      <Header theme={PAGES[currentPage]?.theme || "light"} />

      <main
        onScroll={handleScroll}
        className="h-full overflow-y-auto snap-y snap-mandatory no-scrollbar scroll-smooth"
      >
        {/* ✅ 맨 위: Hero */}
        <Hero />

        {/* ✅ 새로 추가: 서비스 소개 섹션 */}
        <IntroAbout />

        {/* 기존 섹션 */}
        <History />
        <Manual />
        <Trial />
        <Makers />
      </main>

      {/* 우측 페이지 인디케이터 */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
        {PAGES.map((page, idx) => (
          <div
            key={page.id}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              currentPage === idx
                ? PAGES[idx].theme === "dark"
                  ? "bg-orange-500 scale-150"
                  : "bg-black scale-150"
                : "bg-gray-400 opacity-30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MainLanding; 