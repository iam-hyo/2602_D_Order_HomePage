import React, { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";

/**
 * 역할: 플립 카드 1개(DD/HH/MM/SS) 렌더링
 * 인자:
 *  - label: 표시 라벨 (days/hours/minutes/seconds)
 *  - value: 숫자 값
 * 반환: 플립 시계 스타일 카드 UI
 */
function FlipUnit({ label, value }) {
  const [prev, setPrev] = React.useState(value);
  const [flipKey, setFlipKey] = React.useState(0);
  const isFirst = React.useRef(true);

  const prevStr = String(prev).padStart(2, "0");
  const currStr = String(value).padStart(2, "0");

  React.useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      setPrev(value);
      return;
    }
    if (value === prev) return;

    setFlipKey((k) => k + 1);

    const t = setTimeout(() => setPrev(value), 280);
    return () => clearTimeout(t);
  }, [value, prev]);

  // ✅ 숫자를 "절반 잘리게" 보이도록 만드는 공통 스타일
  // 상단: 숫자를 아래로 붙이고(translateY) -> 윗 절반만 보이게
  // 하단: 숫자를 위로 붙이고(translateY) -> 아랫 절반만 보이게
  const DigitTop = ({ text }) => (
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-4xl md:text-6xl font-semibold tabular-nums translate-y-[27px] md:translate-y-[37px]">
        {text}
      </span>
    </div>
  );

  const DigitBottom = ({ text }) => (
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-4xl md:text-6xl font-semibold tabular-nums -translate-y-[27px] md:-translate-y-[37px]">
        {text}
      </span>
    </div>
  );

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[88px] md:w-[124px] h-[108px] md:h-[148px] [perspective:1000px]">
        {/* 카드 베이스 */}
        <div className="absolute inset-0 rounded-2xl bg-white/[0.06] border border-white/10 backdrop-blur-md" />

        {/* 힌지 */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[4px] bg-black z-20" />

        {/* ✅ 평소: curr를 상/하로 "절반 잘리게" 보여주기 */}
        <div className="absolute top-0 left-0 right-0 h-1/2 overflow-hidden rounded-t-2xl">
          <DigitTop text={currStr} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden rounded-b-2xl">
          <DigitBottom text={currStr} />
        </div>

        {/* ✅ 값 변경 순간 오버레이 (플립 애니메이션) */}
        <div key={flipKey}>
          {/* 상단 고정: prev(절반) */}
          <div className="absolute top-0 left-0 right-0 h-1/2 overflow-hidden rounded-t-2xl pointer-events-none">
            <DigitTop text={prevStr} />
          </div>

          {/* 하단 고정: curr(절반) */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden rounded-b-2xl pointer-events-none">
            <DigitBottom text={currStr} />
          </div>

          {/* 윗판: prev 상단 절반이 접혀 떨어짐 */}
          <div className="absolute top-0 left-0 right-0 h-1/2 overflow-hidden rounded-t-2xl pointer-events-none flip-top bg-white/[0.06] border border-white/10">
            <DigitTop text={prevStr} />
          </div>

          {/* 아랫판: curr 하단 절반이 펼쳐져 붙음 */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden rounded-b-2xl pointer-events-none flip-bottom bg-white/[0.06] border border-white/10 border-t-0">
            <DigitBottom text={currStr} />
          </div>
        </div>
      </div>

      <span className="mt-3 text-[11px] md:text-xs text-white/50 tracking-widest uppercase">
        {label}
      </span>
    </div>
  );
}

/**
 * 역할: 목표 날짜까지 카운트다운 + 미니멀 플립 시계 UI 페이지
 */
const StatusPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // ✅ 목표 날짜(미래)로 설정해야 카운트다운이 동작함
    // 예시: 2026-05-15 00:00:00 KST
    const targetDate = new Date("2026-05-15T00:00:00+09:00").getTime();

    const tick = () => {
      const now = Date.now();
      const distance = targetDate - now;

      if (distance <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
        {/* 배경 */}
        <div className="absolute inset-0 bg-[url('/assets/hero_bg_1.jpg')] bg-cover opacity-20 blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black" />

        <div className="relative z-10">
          <span className="text-white/60 font-medium tracking-[0.32em] text-xs md:text-sm uppercase mb-6 block">
            Coming Soon
          </span>

          <h1 className="text-4xl md:text-7xl font-semibold mb-10 leading-tight">
            2025 봄 대동제
            <br />
            실시간 현황판
          </h1>

          <div className="flex gap-4 md:gap-8 justify-center">
            <FlipUnit label="days" value={timeLeft.days} />
            <FlipUnit label="hours" value={timeLeft.hours} />
            <FlipUnit label="minutes" value={timeLeft.minutes} />
            <FlipUnit label="seconds" value={timeLeft.seconds} />
          </div>

          <p className="mt-12 text-white/55 max-w-md mx-auto leading-relaxed text-sm md:text-base">
            모든 주점의 주문 현황을 한눈에.
            <br />
            축제의 열기를 데이터로 확인하세요.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default StatusPage;