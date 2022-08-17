import React, { ReactElement, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { changeTimeFormat } from '../components/Timer';
import { QuizInfo } from './Home';

const Result: React.FC = (): ReactElement => {
  const { state } = useLocation();
  const [time, setTime] = useState<number>(0);
  const quizList = state as QuizInfo[];

  let trueCnt = 0;
  let falseCnt = 0;

  useEffect(() => {
    setTime(Number(localStorage.getItem('Time')));
  }, []);

  for (let i = 0; i < quizList.length; i += 1) {
    if (quizList[i].isAnswer) {
      trueCnt += 1;
    } else {
      falseCnt += 1;
    }
  }

  return (
    <div>
      <section>
        <div>
          문제 수: {quizList.length}, 맞춘 문제: {trueCnt}, 틀린 문제:{falseCnt}
          , 걸린시간:{changeTimeFormat(Number(time))}
        </div>
      </section>
      <section />
    </div>
  );
};

export default Result;
