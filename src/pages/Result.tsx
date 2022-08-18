import React, { ReactElement, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { changeTimeFormat } from '../components/Timer';
import { QuizInfo } from './Home';

interface ResultCount {
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
    <div>
      <section>
        <div>
          문제 수: {quizList.length}, 맞춘 문제: {resultObj.trueCnt}, 틀린 문제:
          {resultObj.falseCnt}, 걸린시간:{changeTimeFormat(Number(time))}
        </div>
      </section>
      <section>
        <Link to="/">다시 풀기</Link>
      </section>
    </div>
  );
};

export default Result;
