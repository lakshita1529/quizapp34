import React, { useState } from 'react';
import { QuestionView } from '../../views/QuestionView';
import { ResultView } from '../../views/ResultView';
import { QuizTimer } from '../../components/custom/QuizTimer';
import questions from '../../data/questions.json';


export const QuizContainer = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);

  const handleAnswer = (selectedOption) => {
    const correctAnswer = questions[currentQuestion].answer;
    if (selectedOption === correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizEnd(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizEnd(false);
  };

  if (quizEnd) {
    return <ResultView score={score} totalQuestions={questions.length} resetQuiz={resetQuiz} />;
  }

  return (
    <div className="container mt-4 p-4 border rounded bg-light">
      <QuizTimer initialTime={30} onTimeEnd={() => setQuizEnd(true)} />
      <QuestionView
        question={questions[currentQuestion].question}
        options={questions[currentQuestion].options}
        handleAnswer={handleAnswer}
      />
    </div>
  );
};
