import React from 'react';
import { ClickCursor, ProgressDots, PulseImage, Manual3SectionShell } from './shared';

export default function Card3() {
  return (
    <Manual3SectionShell delay={0.2}>
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full max-w-6xl mx-auto px-6 md:px-12 pt-12">
        <div className="flex-1 w-full relative">
          <h2 className="text-[36px] font-black text-black mb-3 text-center md:text-left">
            병합 기능으로 테이블을 합치세요
          </h2>
          <p className="text-[24px] text-gray-600 leading-relaxed mb-6 text-center md:text-left">
            단체 손님도 거뜬! 테이블 두 개 이상 선택 후 병합 클릭해주세요
          </p>
          <PulseImage
            src="/assets/manual/manual5_0301.png"
            alt="테이블 병합 메인 목업"
            className="w-full h-auto rounded-[1.25rem]"
          />
        </div>
        <div className="flex flex-col items-center gap-5">
          <ProgressDots dots={8} />
          <PulseImage
            src="/assets/manual/manual5_0302.png"
            alt="병합된 테이블 카드"
            className="w-44 h-auto rounded-[1rem]"
          />
        </div>
      </div>
    </Manual3SectionShell>
  );
}

