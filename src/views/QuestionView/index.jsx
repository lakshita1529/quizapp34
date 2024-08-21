import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const QuestionView = ({ question, options, handleAnswer }) => {
  return (
    <div className="text-center">
      <h2>{question}</h2>
      <div className="d-grid gap-2">
        {options.map((option, index) => (
          <button
            key={index}
            className="btn btn-outline-primary btn-lg mb-2"
            onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};
