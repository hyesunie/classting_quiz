import React, { ReactElement } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home(): ReactElement {
  return (
    <div className="home-wrapper">
      <Link to="/">
        <div className="home__start-button">퀴즈 시작하기!!</div>
      </Link>
    </div>
  );
}

export default Home;
