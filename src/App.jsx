import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './routes/AppRoutes'; 
import appStyles from './components/shared/AppStyles'; 

function App() {
  return (
    <div style={appStyles.container}>
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
