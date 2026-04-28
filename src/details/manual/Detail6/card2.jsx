import React from 'react';
import { ProgressDots, PulseImage, Manual3SectionShell, imgDropShadow } from './shared';

export default function Card2() {
  return (
    <Manual3SectionShell delay={0.15}>
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full max-w-6xl mx-auto px-6 md:px-12 pt-12">
        <div className="flex-1 w-full">
          <h2 className="text-[36px] font-black text-black mb-3 text-center md:text-left">
            테이블 이용시간, 디오더가 체크할게요
          </h2>
          <p className="text-[24px] text-gray-600 leading-relaxed mb-6 text-center md:text-left">
            첫 주문을 기준으로 테이블 이용시간이 기록돼요.
            <br />
            지정한 시간이 지난 테이블을 확인해보세요
          </p>
          <PulseImage
            src="/assets/manual/manual5_0201.png"
            alt="이용시간 테이블 목업"
            className="w-full h-auto rounded-[1.25rem]"
          />
        </div>
        <div className="flex flex-col items-center gap-4">
          {/* <div className="h-40 w-px border-l-2 border-dashed border-gray-300" /> */}
          <ProgressDots dots={8} />
          <img
            src="/assets/manual/manual5_0202.png"
            alt="시간 강조 카드"
            className="w-36 h-auto rounded-[1rem]"
            style={{ filter: imgDropShadow }}
          />
        </div>
      </div>
    </Manual3SectionShell>
  );
}

