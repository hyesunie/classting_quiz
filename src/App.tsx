import React, { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Quiz from './pages/Quiz';

function App(): ReactElement {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz/:id" element={<Quiz />} />
    </Routes>
  );
}

export default App;
