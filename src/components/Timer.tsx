import React, { ReactElement, useEffect, useState } from 'react';

export interface TimerProps {
  isStop: boolean;
}

export const changeTimeFormat = (allSecond: number): string => {
  return `${Math.floor(allSecond / 60)}분 ${allSecond % 60}초`;
};

const Timer: React.FC<TimerProps> = ({ isStop }: TimerProps): ReactElement => {
  const [currentTime, setCurrentTime] = useState<number>(0);

  const [id, setId] = useState(() => {
    let countTime = 0;

    return setInterval(() => {
      countTime += 1;
      setCurrentTime(countTime);
    }, 1000);
  });

  useEffect(() => {
    if (isStop) {
      clearInterval(id);
      localStorage.setItem('Time', String(currentTime));
    }
  }, [isStop, id]);

  return <div>{changeTimeFormat(currentTime)}</div>;
};

export default Timer;
