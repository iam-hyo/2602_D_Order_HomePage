import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";

// Grain texture as SVG noise data URL
const GRAIN_BG = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='250'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

const pr = (seed, i) => {
  const x = Math.sin(seed * 127.1 + i * 311.7) * 43758.5453;
  return x - Math.floor(x);
};

const STARS = Array.from({ length: 85 }, (_, i) => ({
  id: i,
  left: pr(1, i) * 100,
  top: pr(2, i) * 100,
  size: pr(3, i) * 1.6 + 0.5,
  duration: pr(4, i) * 3 + 2.5,
  delay: pr(5, i) * 6,
  opacity: pr(6, i) * 0.38 + 0.1,
}));

const SPARKLE_STARS = [
  { left: 14, top: 22, size: 14, duration: 4.5, delay: 0.3 },
  { left: 68, top: 18, size: 11, duration: 3.8, delay: 1.8 },
  { left: 42, top: 65, size: 15, duration: 5.0, delay: 3.2 },
  { left: 86, top: 44, size: 10, duration: 4.2, delay: 0.9 },
  { left: 28, top: 80, size: 13, duration: 3.5, delay: 2.5 },
  { left: 75, top: 77, size: 10, duration: 4.8, delay: 1.4 },
  { left: 55, top: 11, size: 9,  duration: 3.2, delay: 2.1 },
];

// Constellation points (% coordinates), color, and travel light delay
const CONSTELLATIONS = [
  {
    id: "left",
    points: [[7, 16], [10, 21], [6, 26], [11, 30], [8, 35], [13, 33]],
    color: "rgba(195, 95, 48, 0.72)",
    travelDelay: "0s",
  },
  {
    id: "right",
    points: [[76, 60], [80, 66], [77, 72], [82, 77], [86, 73]],
    color: "rgba(195, 95, 48, 0.60)",
    travelDelay: "2.3s",
  },
  {
    id: "top-right",
    points: [[86, 8], [90, 13], [93, 10], [91, 17], [87, 20]],
    color: "rgba(195, 95, 48, 0.50)",
    travelDelay: "4.8s",
  },
];

const DAYS = [
  { date: "5.26", day: "화", total: 9 },
  { date: "5.27", day: "수", total: 8 },
  { date: "5.28", day: "목", total: 8 },
];

const LOCATION_ROWS = [
  {
    place: "만해광장",
    days: [
      ["손짓사랑회", "그리고 그림", "에너지신소재공학과", "화공생물공학과"],
      ["손짓사랑회", "동국대학교 건축공학부", "멋쟁이사자처럼", "FC 엘레펜테"],
      ["프론티어", "FC 엘레펜테"],
    ],
  },
  {
    place: "사과관 3층 앞",
    days: [["국제통상학과"], ["국제통상학과"], ["사회복지학과"]],
  },
  {
    place: "카페ING",
    days: [null, ["글로벌무역학과"], ["미래융합대학"]],
  },
  {
    place: "명진관 (법학관 방면)",
    days: [["중어중문학과", "동국대학교 영어영문학부"], ["사학과"], null],
  },
  {
    place: "원흥관 4층 입구",
    days: [["이은"], null, null],
  },
  {
    place: "원흥관 주차장",
    days: [["산업시스템공학과(동국대)"], null, null],
  },
  {
    place: "경영관 앞",
    days: [null, ["사회복지학과"], null],
  },
  {
    place: "다향관 앞",
    days: [null, null, ["바이오시스템대학"]],
  },
  {
    place: "법학관 (다향관 방면)",
    days: [null, null, ["시스템반도체학부"]],
  },
  {
    place: "법학관 (대운동장 방면)",
    days: [null, null, ["첨단융합대학"]],
  },
  {
    place: "사과대 주차장",
    days: [null, null, ["사회복지상담학과"]],
  },
];

function FlipUnit({ label, value }) {
  const [prev, setPrev] = React.useState(value);
  const [flipKey, setFlipKey] = React.useState(0);
  const isFirst = React.useRef(true);
  const prevStr = String(prev).padStart(2, "0");
  const currStr = String(value).padStart(2, "0");

  React.useEffect(() => {
    if (isFirst.current) { isFirst.current = false; setPrev(value); return; }
    if (value === prev) return;
    setFlipKey((k) => k + 1);
    const t = setTimeout(() => setPrev(value), 280);
    return () => clearTimeout(t);
  }, [value, prev]);

  const DigitTop = ({ text }) => (
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-3xl font-semibold tabular-nums translate-y-[19px]">{text}</span>
    </div>
  );
  const DigitBottom = ({ text }) => (
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-3xl font-semibold tabular-nums -translate-y-[19px]">{text}</span>
    </div>
  );

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[62px] h-[76px] [perspective:1000px]">
        <div className="absolute inset-0 rounded-xl bg-white/[0.06] border border-white/[0.08] backdrop-blur-md" />
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[3px] bg-[#0a0806] z-20" />
        <div className="absolute top-0 left-0 right-0 h-1/2 overflow-hidden rounded-t-xl">
          <DigitTop text={currStr} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden rounded-b-xl">
          <DigitBottom text={currStr} />
        </div>
        <div key={flipKey}>
          <div className="absolute top-0 left-0 right-0 h-1/2 overflow-hidden rounded-t-xl pointer-events-none">
            <DigitTop text={prevStr} />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden rounded-b-xl pointer-events-none">
            <DigitBottom text={currStr} />
          </div>
          <div className="absolute top-0 left-0 right-0 h-1/2 overflow-hidden rounded-t-xl pointer-events-none flip-top bg-white/[0.06] border border-white/[0.08]">
            <DigitTop text={prevStr} />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1/2 overflow-hidden rounded-b-xl pointer-events-none flip-bottom bg-white/[0.06] border border-white/[0.08] border-t-0">
            <DigitBottom text={currStr} />
          </div>
        </div>
      </div>
      <span className="mt-2 text-[10px] text-white/30 tracking-widest uppercase">{label}</span>
    </div>
  );
}

const StatusPage = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [activeDay, setActiveDay] = useState(0);

  useEffect(() => {
    const target = new Date("2026-05-26T00:00:00+09:00").getTime();
    const tick = () => {
      const dist = target - Date.now();
      if (dist <= 0) { setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); return; }
      setTimeLeft({
        days: Math.floor(dist / 86400000),
        hours: Math.floor((dist % 86400000) / 3600000),
        minutes: Math.floor((dist % 3600000) / 60000),
        seconds: Math.floor((dist % 60000) / 1000),
      });
    };
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-white">
      {/* ─── Fixed Star Background ─── */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>

        {/* Base: dark warm charcoal */}
        <div className="absolute inset-0 bg-[#0a0806]" />

        {/* Grain / dry-paint texture */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: GRAIN_BG,
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px",
            opacity: 0.042,
            mixBlendMode: "overlay",
          }}
        />

        {/* Fog / mist patches */}
        <div className="absolute" style={{ width: "46%", height: "28%", top: "28%", left: "4%", background: "radial-gradient(ellipse, rgba(170,140,110,0.025) 0%, transparent 70%)", filter: "blur(38px)" }} />
        <div className="absolute" style={{ width: "38%", height: "30%", top: "58%", right: "8%", background: "radial-gradient(ellipse, rgba(150,120,90,0.02) 0%, transparent 70%)", filter: "blur(48px)" }} />
        <div className="absolute" style={{ width: "30%", height: "22%", top: "15%", right: "20%", background: "radial-gradient(ellipse, rgba(160,130,100,0.018) 0%, transparent 70%)", filter: "blur(30px)" }} />

        {/* Nebula blobs — brownish rust, muted */}
        <div className="absolute" style={{ width: "62%", height: "58%", top: "6%", left: "20%", background: "radial-gradient(ellipse, rgba(72,33,14,0.52) 0%, transparent 70%)", filter: "blur(76px)", animation: "nebulaShift 11s ease-in-out infinite" }} />
        <div className="absolute" style={{ width: "48%", height: "44%", top: "50%", left: "-10%", background: "radial-gradient(ellipse, rgba(42,20,8,0.42) 0%, transparent 70%)", filter: "blur(92px)", animation: "nebulaShift 14s ease-in-out infinite reverse" }} />
        <div className="absolute" style={{ width: "36%", height: "36%", top: "62%", right: "-4%", background: "radial-gradient(ellipse, rgba(58,26,8,0.36) 0%, transparent 70%)", filter: "blur(66px)" }} />

        {/* Diagonal brush strokes */}
        <div className="absolute" style={{ width: "200%", height: "4px", top: "34%", left: "-50%", background: "linear-gradient(90deg, transparent, rgba(115,50,18,0.1), rgba(155,60,22,0.07), transparent)", transform: "rotate(-27deg)", filter: "blur(18px)" }} />
        <div className="absolute" style={{ width: "150%", height: "3px", top: "56%", left: "-20%", background: "linear-gradient(90deg, transparent, rgba(85,38,14,0.07), transparent)", transform: "rotate(-18deg)", filter: "blur(13px)" }} />

        {/* Stars */}
        {STARS.map((s) => (
          <div key={s.id} className="absolute rounded-full bg-white" style={{ left: `${s.left}%`, top: `${s.top}%`, width: `${s.size}px`, height: `${s.size}px`, opacity: s.opacity, animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite` }} />
        ))}

        {/* Sparkle stars ✦ */}
        {SPARKLE_STARS.map((s, i) => (
          <div key={i} className="absolute text-amber-400/75 leading-none select-none" style={{ left: `${s.left}%`, top: `${s.top}%`, fontSize: `${s.size}px`, marginLeft: `-${s.size / 2}px`, marginTop: `-${s.size / 2}px`, animation: `sparkleGlow ${s.duration}s ease-in-out ${s.delay}s infinite` }}>✦</div>
        ))}

        {/* Constellations + Traveling lights */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="dot-glow" x="-200%" y="-200%" width="500%" height="500%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Static constellation (with ambient pulse) */}
          <g style={{ animation: "constellationPulse 4s ease-in-out infinite" }}>
            {CONSTELLATIONS.map((c) => (
              <g key={c.id}>
                {c.points.slice(0, -1).map((_, i) => (
                  <line key={i} x1={`${c.points[i][0]}%`} y1={`${c.points[i][1]}%`} x2={`${c.points[i + 1][0]}%`} y2={`${c.points[i + 1][1]}%`} stroke={c.color} strokeWidth="0.8" strokeDasharray="3 4" />
                ))}
                {c.points.map((p, i) => (
                  <circle key={i} cx={`${p[0]}%`} cy={`${p[1]}%`} r="2.5" fill={c.color} />
                ))}
              </g>
            ))}
          </g>

          {/* Traveling lights — run along edges quickly */}
          {CONSTELLATIONS.map((c) => {
            const n = c.points.length;
            const cxVals = c.points.map((p) => `${p[0]}%`).join(";");
            const cyVals = c.points.map((p) => `${p[1]}%`).join(";");
            const kts = c.points.map((_, i) => (i / (n - 1)).toFixed(3)).join(";");
            const dur = `${(n * 0.42).toFixed(1)}s`;
            return (
              <circle key={`t-${c.id}`} r="3" fill="rgba(255, 218, 145, 1)" filter="url(#dot-glow)">
                <animate attributeName="cx" values={cxVals} keyTimes={kts} dur={dur} begin={c.travelDelay} repeatCount="indefinite" calcMode="linear" />
                <animate attributeName="cy" values={cyVals} keyTimes={kts} dur={dur} begin={c.travelDelay} repeatCount="indefinite" calcMode="linear" />
                <animate attributeName="opacity" values="0;1;1;1;0" keyTimes="0;0.07;0.25;0.88;1" dur={dur} begin={c.travelDelay} repeatCount="indefinite" />
                <animate attributeName="r" values="1.5;4;3.5;4;1.5" keyTimes="0;0.07;0.5;0.88;1" dur={dur} begin={c.travelDelay} repeatCount="indefinite" />
              </circle>
            );
          })}
        </svg>
      </div>

      {/* ─── Page Content ─── */}
      <div className="relative" style={{ zIndex: 10 }}>

        {/* Compact Countdown */}
        <div className="pt-28 pb-10 px-6 text-center">
          <span className="text-white/32 text-[11px] tracking-[0.38em] uppercase mb-4 block">
            D-ORDER × 2026 봄 대동제
          </span>
          <h1 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight">실시간 현황</h1>
          <p className="text-white/48 text-sm mb-1.5">
            총 25개 부스의 실시간 좌석 현황을 확인해보세요.
          </p>
          <p className="text-white/28 text-xs mb-8">
            축제 시작시간 05월 26일에 맞추어 공개됩니다.
          </p>
          <div className="flex gap-3 justify-center">
            <FlipUnit label="days" value={timeLeft.days} />
            <FlipUnit label="hours" value={timeLeft.hours} />
            <FlipUnit label="minutes" value={timeLeft.minutes} />
            <FlipUnit label="seconds" value={timeLeft.seconds} />
          </div>
        </div>

        {/* ─── Lineup Section ─── */}
        <section className="pb-20 md:pb-28" style={{ background: "rgba(10,8,6,0.72)", backdropFilter: "blur(0.5px)" }}>

          {/* Section header */}
          <div className="max-w-5xl mx-auto px-6 md:px-8 mb-10 md:mb-14 text-center">
            <div className="flex items-center justify-center gap-3 text-white/22 text-[11px] tracking-[0.35em] uppercase mb-5">
              <span className="flex-1 max-w-[60px] h-px bg-white/12" />
              함께하는 부스
              <span className="flex-1 max-w-[60px] h-px bg-white/12" />
            </div>
            <h2 className="text-[1.9rem] md:text-5xl font-bold tracking-tight leading-tight">
              D-Order와 함께하는
              <br />
              부스 라인업
            </h2>
            <p className="mt-4 text-white/32 text-sm">총 25개 부스가 디오더와 함께합니다</p>
          </div>

          {/* ── Desktop: Table layout ── */}
          <div className="hidden md:block max-w-5xl mx-auto px-6 md:px-8">
            <div
              className="grid border-b border-white/10 py-5 z-10 sticky top-0 backdrop-blur-md"
              style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr", background: "rgba(10,8,6,0.9)" }}
            >
              <div className="text-white/22 text-[10px] uppercase tracking-[0.25em] flex items-center">장소</div>
              {DAYS.map((d, i) => (
                <div key={i} className="text-center">
                  <div className="flex items-baseline justify-center gap-1.5">
                    <span className="text-2xl font-bold">{d.date}</span>
                    <span className="text-white/42 text-sm font-medium">{d.day}</span>
                  </div>
                  <div className="text-white/20 text-[11px] mt-0.5">총 {d.total}개</div>
                </div>
              ))}
            </div>
            {LOCATION_ROWS.map((row, ri) => (
              <div
                key={ri}
                className="grid border-b border-white/[0.05] py-5 items-start transition-colors hover:bg-white/[0.022]"
                style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr" }}
              >
                <div className="text-neutral-500 text-xs font-medium leading-relaxed pr-4">{row.place}</div>
                {row.days.map((booths, di) => (
                  <div key={di} className="text-center px-2">
                    {booths ? (
                      booths.map((b, bi) => (
                        <p key={bi} className="text-white/80 text-sm font-medium leading-relaxed">{b}</p>
                      ))
                    ) : (
                      <span className="text-white/10 text-sm">—</span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* ── Mobile: Accordion Column Layout ── */}
          <div
            className="md:hidden flex w-full border-t border-white/[0.08]"
            style={{ minHeight: "460px" }}
          >
            {DAYS.map((day, idx) => {
              const isActive = idx === activeDay;
              const dayLocations = LOCATION_ROWS.filter((r) => r.days[idx] !== null);

              return (
                <div
                  key={idx}
                  className={`overflow-hidden border-r border-white/[0.08] last:border-r-0 ${!isActive ? "cursor-pointer" : ""}`}
                  style={{
                    flexGrow: isActive ? 1 : 0,
                    flexShrink: 0,
                    flexBasis: isActive ? "0%" : "56px",
                    minWidth: isActive ? 0 : "56px",
                    maxWidth: isActive ? "1000px" : "56px",
                    transition: [
                      "flex-grow 0.45s cubic-bezier(0.4,0,0.2,1)",
                      "flex-basis 0.45s cubic-bezier(0.4,0,0.2,1)",
                      "max-width 0.45s cubic-bezier(0.4,0,0.2,1)",
                    ].join(", "),
                  }}
                  onClick={() => setActiveDay(idx)}
                >
                  {/* Active column content */}
                  {isActive ? (
                    <div className="px-5 pt-6 pb-10">
                      {/* Date header */}
                      <div className="flex items-baseline gap-2 mb-5 pb-4 border-b border-white/[0.08]">
                        <span className="text-[1.85rem] font-bold tracking-tight leading-none">{day.date}</span>
                        <span className="text-white/45 text-base font-medium">{day.day}</span>
                        <span className="ml-auto text-white/20 text-xs">총 {day.total}개</span>
                      </div>
                      {/* Locations */}
                      <div className="space-y-5 lineup-content">
                        {dayLocations.map((row) => (
                          <div key={row.place}>
                            <p className="text-neutral-500 text-[10px] tracking-[0.2em] uppercase mb-1">{row.place}</p>
                            <div className="w-10 h-px bg-white/14 mb-2" />
                            {row.days[idx].map((booth, bi) => (
                              <p key={bi} className="text-white/80 text-sm font-medium leading-relaxed">{booth}</p>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    /* Inactive column — just shows date label */
                    <div className="flex flex-col items-center pt-6 gap-1">
                      <span className="text-white/35 text-[11px] font-bold tracking-tight">{day.date}</span>
                      <span className="text-white/22 text-[10px]">{day.day}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </section>
      </div>

      <Footer />
    </div>
  );
};

export default StatusPage;
