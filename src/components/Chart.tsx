import React, { ReactElement, useEffect } from 'react';
import { ResultCount } from '../pages/Result';
import './Chart.css';

interface ChartProps {
  quizCnt: number;
  resultBoard: ResultCount;
}

const Chart: React.FC<ChartProps> = ({
  quizCnt,
  resultBoard,
}: ChartProps): ReactElement => {
  const { trueCnt, falseCnt } = resultBoard;
  const ratio = Math.ceil((trueCnt / quizCnt) * 100);

  return (
    <section className="chart">
      <h2>
        Score : {trueCnt}/{quizCnt}
      </h2>
      <section className="chart-wrapper">
        <div className="chart__ratio">
          <h3>정답률 : {ratio}% </h3>
        </div>
        <div className="chart__viewport">
          <span className="true" style={{ width: `${ratio}%` }} />
        </div>
      </section>
    </section>
  );
};

export default Chart;
