import React from 'react';

const PrivacyPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 font-pretendard">
      <h1 className="text-3xl font-black mb-10">개인정보 처리방침</h1>
      <div className="space-y-8 text-gray-600 leading-relaxed text-sm md:text-base">
        <section>
          <h2 className="text-xl font-bold text-black mb-2">1. 개인정보의 수집 목적</h2>
          <p>'D-Order'는 원활한 주문 접수 및 입금 확인(노쇼 방지)을 위해 최소한의 개인정보를 수집합니다.</p>
        </section>
        
        <section>
          <h2 className="text-xl font-bold text-black mb-2">2. 수집하는 항목</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>필수항목: 주문자명(입금자명), 전화번호(주문 알림용)</li>
            <li>자동수집: 접속 로그, 쿠키, 이용 기록</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-2">3. 보유 및 이용 기간 (중요)</h2>
          <p className="bg-orange-50 p-4 rounded-xl text-orange-800 font-bold border border-orange-100">
            수집된 개인정보는 2026년 봄 대동제 기간 종료 후 7일 이내에 복구 불가능한 방법으로 영구 파기됩니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-2">4. 제3자 제공</h2>
          <p>수집된 정보는 주문 처리를 위해 해당 주점(학과/동아리) 관리자에게만 제한적으로 제공되며, 그 외 외부로 유출되지 않습니다.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-2">5. 문의처</h2>
          <p>개인정보 보호 책임자: D-Order 팀 (hyojunj@naver.com)</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPage;