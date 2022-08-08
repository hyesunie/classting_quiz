import React, { ReactElement, useEffect, useState } from 'react';
import './Home.css';
import { Link, useLocation } from 'react-router-dom';

interface FetchInfo {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
export interface QuizInfo {
  question: string;
  answerIdx: number;
  answerList: string[];
  userIdx: number | null;
  isAnswer: boolean;
}

function randomIndex(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min) + min);
}

function Home(): ReactElement {
  const [quizList, setQuizList] = useState<QuizInfo[]>([]);

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10&type=multiple', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then(({ results }) => {
        console.log(results);
        const newQuizList = results.map((e: FetchInfo): QuizInfo => {
          const {
            question,
            correct_answer: correctAnswer,
            incorrect_answers: incorrectAnswers,
          } = e;

          const answerIdx = randomIndex(0, 4);
          const answerList = incorrectAnswers.slice();

          answerList.splice(answerIdx, 0, correctAnswer);

          return {
            question,
            answerIdx,
            answerList,
            userIdx: null,
            isAnswer: false,
          };
        });

        setQuizList(newQuizList);
      });
  }, []);

  return (
    <div className="home-wrapper">
      <Link to="/quiz/1" state={quizList}>
        <div className="home__start-button">퀴즈 시작하기!!</div>
      </Link>
    </div>
  );
}

export default Home;
