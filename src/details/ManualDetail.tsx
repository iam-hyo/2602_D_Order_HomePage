import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ManualDetail1 from './manual/ManualDetail1';
import ManualDetail2 from './manual/ManualDetail2';
import ManualDetail3 from './manual/ManualDetail3';
import ManualDetail6 from './manual/ManualDetail6';

const ManualDetail: React.FC = () => {
  const { cardId } = useParams();
  const navigate = useNavigate();

  if (cardId === 'manual_1') {
    return <ManualDetail1 />;
  }
  if (cardId === 'manual_2') {
    return <ManualDetail2 />;
  }
  if (cardId === 'manual_3') {
    return <ManualDetail3 />;
  }
  if (cardId === 'manual_6') {
    return <ManualDetail6 />;
  }

  // 그 외 카드들은 아직 준비 전
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <p className="text-gray-500 mb-4">준비 중인 매뉴얼입니다.</p>
        <button
          type="button"
          onClick={() => {
            window.close();
            navigate(-1);
          }}
          className="text-sm text-gray-400 underline underline-offset-4 hover:text-gray-600 transition"
        >
          뒤로가기
        </button>
      </div>
    </div>
  );
};

export default ManualDetail;

