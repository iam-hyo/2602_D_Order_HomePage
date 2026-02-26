import React from 'react';

const PrivacyPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 pt-32 font-pretendard">
      <h1 className="text-3xl font-black mb-10">개인정보 처리방침 및 데이터 활용 동의</h1>
      
      <div className="space-y-8 text-gray-600 leading-relaxed text-sm md:text-base">
        <section>
          <h2 className="text-xl font-bold text-black mb-2">1. 개인정보의 수집 및 이용 목적</h2>
          <p>'D-Order'는 원활한 주문 접수, 노쇼 방지 및 주점 운영 효율화를 위해 최소한의 정보를 수집합니다. 또한, 수집된 정보는 서비스 품질 향상 및 통계 분석 목적으로 활용됩니다.</p>
        </section>
        
        <section>
          <h2 className="text-xl font-bold text-black mb-2">2. 수집하는 항목</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>주점 관리자:</strong> 학과/동아리명, 대표자 성명, 연락처, 정산용 계좌정보</li>
      
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-2">3. 데이터의 활용 및 홍보(마케팅) 목적 사용</h2>
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 mt-2">
            <ul className="list-disc pl-5 space-y-2">
              <li>각 주점의 결제 및 주문 <strong>운영 데이터는 서비스 개선, 운영 레포트 발행, 홍보 및 마케팅 목적으로만 사용</strong>됩니다.</li>
              <li>데이터는 반드시 <strong>비식별화(익명화) 및 통계화</strong>되어 전체 매장의 평균 계산 등에 사용되며, <strong>특정 매장의 영업 정보나 개인의 정보가 명시적으로 외부에 공개되거나 공유되는 일은 절대 없습니다.</strong></li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-2">4. 보유 및 이용 기간</h2>
          <p className="bg-orange-50 p-4 rounded-xl text-orange-800 font-bold border border-orange-100 mt-2">
            수집된 개인정보 및 운영 데이터는 향후 축제 서비스 고도화 및 통계 분석을 위해 원칙적으로 3년간 보관 및 활용되며, 이후 복구 불가능한 방법으로 영구 파기됩니다.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-2">5. 동의 간주 및 제3자 제공</h2>
          <p>수집된 정보는 해당 주점 관리자 및 D-Order 운영팀 외의 제3자에게 무단으로 제공되지 않습니다. <strong>본 서비스를 이용하기 위해 구글 폼 등의 가입 신청서를 제출하거나 QR 코드로 주문을 진행하는 경우, 본 개인정보 처리방침 및 데이터 활용에 동의한 것으로 간주합니다.</strong></p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-2">6. 문의처</h2>
          <p>개인정보 보호 및 데이터 관리 책임자: D-Order 팀 (hyojunj@naver.com)</p>
        </section>
      </div>
      
      <p className="mt-12 text-xs text-gray-400 border-t border-gray-100 pt-6">
        시행일자: 2026년 5월 1일
      </p>
    </div>
  );
};

export default PrivacyPage;