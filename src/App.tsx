import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';

function App(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz/:id" element={<Quiz />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;
