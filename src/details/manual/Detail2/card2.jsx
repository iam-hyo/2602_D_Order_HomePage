import React from 'react';
import { SectionShell, imgDropShadow } from '../Detail1/shared';

/** Card2 – 요청한 2분할(좌/우) 목업 구성 */
export default function Card2() {
  return (
    <SectionShell delay={0.1}>
      <div className="w-full max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start pt-14">
          {/* 좌측 박스 */}
          <div className="flex flex-col items-center">
            <div className="text-center tracking-tight lg:tracking-normal mb-5">
              <h2 className="text-[36px] font-black text-black mb-2">서빙 요청</h2>
              <p className="text-[24px] text-gray-600">내가 서빙해야 할 음식을 수락해요</p>
            </div>

            <div className="relative w-full max-w-[320px]">
              <img
                src="/assets/manual/manual2_02_left_but.png"
                alt="서빙 요청 버튼"
                className="mx-auto w-[280px] h-auto mb-5"
                style={{ filter: 'drop-shadow(0 6px 12px rgba(15,23,42,0.12))' }}
              />
              <img
                src="/assets/manual/manual2_02_left_mock.png"
                alt="서빙 요청 모바일 목업"
                className="mx-auto w-[260px] h-auto rounded-[1.25rem]"
                style={{ filter: imgDropShadow }}
              />
            </div>
          </div>

          {/* 우측 박스 */}
          <div className="flex flex-col items-center">
            <div className="text-center tracking-tight lg:tracking-normal mb-5">
              <h2 className="text-[36px] font-black text-black mb-2">직원 호출</h2>
              <p className="text-[24px] text-gray-600">직원호출은 서버의 화면에서 확인 가능해요.</p>
            </div>

            <div className="relative w-full max-w-[320px]">
              <img
                src="/assets/manual/manual2_02_right_but.png"
                alt="직원 호출 버튼"
                className="mx-auto w-[280px] h-auto mb-5"
                style={{ filter: 'drop-shadow(0 6px 12px rgba(15,23,42,0.12))' }}
              />
              <img
                src="/assets/manual/manual1_02.png"
                alt="직원 호출 모바일 목업"
                className="mx-auto w-[260px] h-auto rounded-[1.25rem]"
                style={{ filter: imgDropShadow }}
              />
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
