import React from 'react';
import { PulseImage, Manual3SectionShell } from './shared';

export default function Card4() {
  return (
    <Manual3SectionShell delay={0.2}>
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full max-w-6xl mx-auto px-6 md:px-12">
        <div className="w-fit shrink-0 text-left tracking-tight lg:tracking-normal">
          <h2 className="text-[36px] font-black text-black mb-4">
            엇, 테이블 정리만 하시는거 아니죠?
            <br />
            초기화도 같이 부탁드려요
          </h2>
          <p className="text-[24px] text-gray-600 leading-relaxed">
            테이블 번호를 입력하면 테이블초기화가 가능해요.
          </p>
        </div>
        <div className="flex justify-center relative w-full ">
        <img
          src="/assets/manual/manual2_04.png"
          alt="테이블 초기화 모바일 목업"
          className="w-full max-w-[600px] h-auto rounded-[1.25rem]"
        />
        </div>
      </div>
    </Manual3SectionShell>
  );
}

