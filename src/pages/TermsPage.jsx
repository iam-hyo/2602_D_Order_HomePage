import React from 'react';

const TermsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 font-pretendard">
      <h1 className="text-3xl font-black mb-10">D-Order 서비스 이용약관</h1>
      <div className="space-y-8 text-gray-600 leading-relaxed text-sm md:text-base">
        <section>
          <h2 className="text-xl font-bold text-black mb-2">제1조 (목적)</h2>
          <p>본 약관은 동국대학교 대동제 기간 동안 운영되는 비영리 테이블 오더 플랫폼 'D-Order'(이하 "서비스")의 이용 조건 및 절차를 규정함을 목적으로 합니다.</p>
        </section>
        
        <section>
          <h2 className="text-xl font-bold text-black mb-2">제2조 (서비스의 성격)</h2>
          <p>본 서비스는 대학생 개발팀이 축제 편의를 위해 제공하는 <strong>비영리 프로젝트</strong>입니다. 상업적 이익을 추구하지 않으며, 결제 기능 없이 주문 중계 역할만 수행합니다.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-2">제3조 (이용자의 의무)</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>허위 주문(장난 주문)을 하여 주점 운영에 피해를 주어서는 안 됩니다.</li>
            <li>주점의 현장 상황에 따라 주문이 반려되거나 지연될 수 있음을 이해해야 합니다.</li>
            <li>서비스 이용 중 습득한 타인의 정보를 부당하게 이용하여서는 안 됩니다.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-black mb-2">제4조 (책임의 한계)</h2>
          <p>D-Order 팀은 시스템 오류, 천재지변, 또는 주점 측의 사정으로 인한 주문 누락 및 조리 지연에 대해 법적 책임을 지지 않습니다. 다만, 원활한 서비스 제공을 위해 최선을 다해 기술적 지원을 제공합니다.</p>
        </section>
      </div>
      <p className="mt-10 text-xs text-gray-400">시행일자: 2026년 5월 1일</p>
    </div>
  );
};

export default TermsPage;