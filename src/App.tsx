import React, { ReactElement } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import WrongAnswerNote from './pages/WrongAnswerNote';

function App(): ReactElement {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz/:id" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/wrong-answer-note" element={<WrongAnswerNote />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
