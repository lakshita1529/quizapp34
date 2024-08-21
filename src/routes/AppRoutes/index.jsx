import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../../pages/homePage';
import { QuizPage } from '../../pages/quizPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quiz" element={<QuizPage />} />
    </Routes>
  );
};
