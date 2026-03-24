import React from 'react';
import { PulseImage, Manual3SectionShell, imgDropShadow } from './shared';

export default function Card3() {
  return (
    <Manual3SectionShell delay={0.15}>
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full max-w-6xl mx-auto px-6 md:px-12">
        <div className="w-fit shrink-0 text-left tracking-tight lg:tracking-normal">
          <h2 className="text-[36px] font-black text-black mb-4">
            내가 보고 싶은 테이블만 필터링
          </h2>
          <p className="text-[24px] text-gray-600 leading-relaxed">
            궁금한 메뉴와 테이블만 필터링해서 볼 수 있어요.
          </p>
        </div>
        <div className="flex justify-center relative w-full ">
          <img
            src="/assets/manual/manual2_03.png"
            alt="필터링 기본 모바일 목업"
            className="w-full h-auto rounded-[1.25rem] max-w-[420px]"
          />
          <div className="absolute -right-24 -top-10 w-44 h-44 rounded-full bg-gradient-to-br from-orange-300/60 to-transparent blur-2xl" />
        </div>
      </div>
    </Manual3SectionShell>
  );
}

