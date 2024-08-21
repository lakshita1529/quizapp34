import React from 'react';
import { Link } from 'react-router-dom';
import appStyles from '../../components/shared/AppStyles';
import 'bootstrap/dist/css/bootstrap.min.css';

export const HomePage = () => {
  return (
    <div style={{ ...appStyles.container, ...appStyles.bg }}>
      <div className="text-center" style={appStyles.box}>
        <h1>Welcome to the Quiz App</h1>
        <p>Challenge yourself with a fun quiz!</p>
        <Link to="/quiz">
          <button className="btn btn-primary btn-lg">Start Quiz</button>
        </Link>
      </div>
    </div>
  );
};
