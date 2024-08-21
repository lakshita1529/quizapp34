import 'bootstrap/dist/css/bootstrap.min.css';

export const ResultView = ({ score, totalQuestions, resetQuiz }) => {
  return (
    <div className="text-center">
      <h2>Quiz Completed</h2>
      <p>Your Score: {score} / {totalQuestions}</p>
      <button className="btn btn-primary" onClick={resetQuiz}>
        Restart Quiz
      </button>
    </div>
  );
};
