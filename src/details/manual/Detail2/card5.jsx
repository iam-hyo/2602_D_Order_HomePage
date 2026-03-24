import React from 'react';
import { PulseImage, ProgressDots, Manual3SectionShell, imgDropShadow } from './shared';

export default function Card5() {
  return (
    <Manual3SectionShell delay={0.3}>
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full max-w-6xl mx-auto px-6 md:px-12">
        <div className="relative w-full max-w-[300px]">
          <img
            src="/assets/manual/manual1_01.png"
            alt="서빙 완료 모바일 목업"
            className="w-full h-auto rounded-[1.25rem]"
            style={{ filter: imgDropShadow }}
          />
        </div>

        <div className="flex-1 flex flex-col justify-between min-h-[320px] text-right tracking-tight lg:tracking-normal">
          <h2 className="text-[36px] font-black text-black mb-4">
            수락 후 서빙을 진행해요
            <br />
            완료 처리는 잊지 않기!
          </h2>
          <p className="text-[24px] text-gray-600 leading-relaxed">
            서빙을 진행 후 완료처리해야 관리자에게 전송이 돼요.
          </p>

          <div className="mt-10 flex items-center justify-end gap-3">
            <PulseImage
              src="/assets/manual/manual3_0303.png"
              alt="서빙중 버튼"
              className="w-28 h-auto"
            />
            <ProgressDots dots={8} />
            <PulseImage
              src="/assets/manual/manual3_0403.png"
              alt="서빙완료 버튼"
              className="w-32 h-auto"
            />
          </div>
        </div>
      </div>
    </Manual3SectionShell>
  );
}

