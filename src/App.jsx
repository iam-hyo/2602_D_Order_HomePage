import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLanding from './MainLanding'; // 기존 App.jsx 내용을 여기로 이동
import ManualDetail from './details/ManualDetail';
import React from 'react';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLanding />} />
        {/* /details/manual_1 과 같은 경로를 처리합니다 */}
        <Route path="/details/:cardId" element={<ManualDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;