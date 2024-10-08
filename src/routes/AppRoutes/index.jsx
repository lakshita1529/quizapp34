import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../../pages/HomePage';
import { QuizPage } from '../../pages/QuizPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quiz" element={<QuizPage />} />
    </Routes>
  );
};
