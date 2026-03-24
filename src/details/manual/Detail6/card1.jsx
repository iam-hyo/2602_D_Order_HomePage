import React from 'react';
import { PulseImage, Manual3SectionShell } from './shared';

export default function Card1() {
  return (
    <Manual3SectionShell delay={0.1}>
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="flex flex-col items-center">
            <h2 className="text-[36px] font-black text-black mb-3 text-center">1) 더보기를 눌러주세요</h2>
            <PulseImage
              src="/assets/manual/manual5_01_left.png"
              alt="더보기 단계"
              className="w-full max-w-[420px] h-auto rounded-[1.25rem]"
            />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-[36px] font-black text-black mb-3 text-center">2) 개별주문을 취소할 수 있어요</h2>
            <PulseImage
              src="/assets/manual/manual5_01_right.png"
              alt="개별 주문 취소 단계"
              className="w-full max-w-[420px] h-auto rounded-[1.25rem]"
            />
          </div>
        </div>
      </div>
    </Manual3SectionShell>
  );
}

