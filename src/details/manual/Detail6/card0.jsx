import React from 'react';
import { PulseImage, Manual3SectionShell } from './shared';

export default function Card0() {
  return (
    <Manual3SectionShell delay={0.05}>
      <div className="flex flex-col items-center gap-8 text-center w-full max-w-4xl mx-auto px-6 md:px-12 tracking-tight lg:tracking-normal pt-16">
        <div>
          <h2 className="text-[36px] font-black text-black leading-tight">테이블, 여기 다 모았다</h2>
          <p className="mt-4 text-[24px] text-gray-600 leading-relaxed">
            주문 취소부터 - 테이블 병합까지
          </p>
        </div>
        <PulseImage
          src="/assets/manual/manual5_00.png"
          alt="테이블 관리 메인 목업"
          className="w-full max-w-[520px] h-auto rounded-[1.25rem]"
        />
      </div>
    </Manual3SectionShell>
  );
}

