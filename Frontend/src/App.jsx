import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Landing from './Landing';
import IntroPage from './IntroPage';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/auth" element={<Signup />} />
        <Route path="/dashboard" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
