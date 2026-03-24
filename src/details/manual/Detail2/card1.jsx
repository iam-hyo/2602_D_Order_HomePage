import React from 'react';
import { PulseImage, Manual3SectionShell } from './shared';

export default function Card1() {
  return (
    <Manual3SectionShell delay={0.05}>
      <div className="flex flex-col items-center gap-8 text-center w-full max-w-4xl mx-auto px-6 md:px-12 tracking-tight lg:tracking-normal pt-14">
        <div>
          <h2 className="text-[36px] font-black text-black leading-tight">
            서빙도 프로페셔널하게
          </h2>
          <p className="mt-4 text-[24px] text-gray-600 leading-relaxed">
          주방과 손님을 잇는 주점의 중심, <br/>
          서버 기능이 새롭게 추가되었습니다.
          </p>
        </div>
        <PulseImage
          src="/assets/manual/manual2_01.png"
          alt="서빙 시작 모바일 목업"
          className="w-full max-w-[280px] h-auto rounded-[1.25rem]"
        />
      </div>
    </Manual3SectionShell>
  );
}

