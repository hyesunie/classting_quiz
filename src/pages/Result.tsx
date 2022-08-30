import React, { ReactElement, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Chart from '../components/Chart';
import { changeTimeFormat } from '../components/Timer';
import { QuizInfo } from './Home';
import './Result.css';

export interface ResultCount {
  trueCnt: number;
  falseCnt: number;
}

const Result: React.FC = (): ReactElement => {
  const { state } = useLocation();
  const [time, setTime] = useState<number>(0);
  const [resultObj, setResultObj] = useState<ResultCount>({
    trueCnt: 0,
    falseCnt: 0,
  });
  const quizList = state as QuizInfo[];

  useEffect(() => {
    setTime(Number(localStorage.getItem('Time')));

    let tCnt = 0;
    let fCnt = 0;

    for (let i = 0; i < quizList.length; i += 1) {
      if (quizList[i].isAnswer) {
        tCnt += 1;
      } else {
        fCnt += 1;
      }
    }

    setResultObj({ trueCnt: tCnt, falseCnt: fCnt });
  }, []);

  return (
    <main className="result">
      <h1>결과 리포트</h1>
      <article className="result__summary-wrapper">
        <Chart quizCnt={quizList.length} resultBoard={resultObj} />
        <time>시간 : {changeTimeFormat(Number(time))}</time>
      </article>
      <section className="result__active-wrapper">
        <Link to="/">다시 풀기</Link>
        <Link to="/wrong-answer-note" state={quizList}>
          오답 노트
        </Link>
      </section>
    </main>
  );
};

export default Result;
