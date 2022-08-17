import React, { ReactElement, useEffect, useState } from 'react';

export interface TimerProps {
  isStop: boolean;
}

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

  return <div>{`${Math.floor(currentTime / 60)}분 ${currentTime % 60}초`}</div>;
};

export default Timer;
