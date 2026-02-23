import React from 'react';
import { useParams } from 'react-router-dom';

const ManualDetail = () => {
  const { cardId } = useParams(); // URL에서 manual_1 등을 가져옵니다.

  // cardId에 따른 상세 데이터 (이후 파일 분리 가능)
  const detailData = {
    manual_1: { title: "고객 주문 기능", desc: "QR 입장부터 비밀번호 승인까지의 과정입니다.", img: "/assets/manual/detail_1.png" },
    // ... 나머지 데이터
  };

  const data = detailData[cardId];

  return (
    <div className="min-h-screen bg-white p-10 md:p-20 font-sans text-center">
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-4xl font-black mb-6">{data?.title}</h1>
        <p className="text-xl text-gray-500 mb-16">{data?.desc}</p>
        
        {/* 실제 기능 설명 이미지 */}
        <div className="bg-gray-50 rounded-[3rem] p-10 shadow-inner">
           <img src={data?.img} alt="Detail" className="w-full h-auto rounded-2xl" />
        </div>
        
        <button onClick={() => window.close()} className="mt-20 text-gray-400 underline">
          창 닫기
        </button>
      </div>
    </div>
  );
};

export default ManualDetail;