import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop'; // 아래 7번 항목 참고

// Pages
import ServiceIntroPage from './pages/ServiceIntroPage';
import ManualPage from './pages/ManualPage';
import TrialPage from './pages/TrialPage';
import StatusPage from './pages/StatusPage';
import ManualDetail from './details/ManualDetail';
import MakersPage from './pages/MakersPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';

const App = () => {
  return (
    <BrowserRouter>
      {/* 페이지 이동 시 스크롤 맨 위로 초기화 */}
      <ScrollToTop />
      
      {/* Header는 내부에서 URL을 감지해 테마를 스스로 결정함 */}
      <Header />
      
      <main className="min-h-screen font-pretendard">
        <Routes>
          <Route path="/" element={<ServiceIntroPage />} />
          <Route path="/manual" element={<ManualPage />} />
          <Route path="/trial" element={<TrialPage />} />
          <Route path="/status" element={<StatusPage />} />
          <Route path="/details/:cardId" element={<ManualDetail />} />
          <Route path="/makers" element={<MakersPage />} />
          <Route path="/terms" element={<TermsPage />} />   {/* ✅ 이용약관 라우트 */}
          <Route path="/privacy" element={<PrivacyPage />} /> {/* ✅ 개인정보 라우트 */}
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;