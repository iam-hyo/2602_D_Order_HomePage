import React from 'react';
import Makers from '../components/Makers';
import Footer from '../components/Footer';

const MakersPage = () => {
  return (
    <div className="pt-[80px] min-h-screen bg-white">
      {/* Makers 컴포넌트 내부의 snap 관련 클래스는 일반 페이지에서는 무시되거나 자연스럽게 동작합니다 */}
      <Makers />
      <Footer />
    </div>
  );
};

export default MakersPage;