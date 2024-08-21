import React, { useEffect, useState } from 'react';

export const QuizTimer = ({ initialTime, onTimeEnd }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time === 0) {
      onTimeEnd();
      return;
    }

    const timer = setInterval(() => {
      setTime(time - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time, onTimeEnd]);

  return (
    <div className="text-center mb-4">
      <h4>Time Left: {time}s</h4>
    </div>
  );
};
