import React, { ReactElement, useEffect, useState } from 'react';

export const changeTimeFormat = (allSecond: number): string => {
  const min = Math.floor(allSecond / 60);
  const sec = allSecond % 60;

  return `${min === 0 ? `` : `${min}분`}${sec}초`;
};

const Timer: React.FC = (): ReactElement => {
  const [currentTime, setCurrentTime] = useState<number>(0);

  useEffect(() => {
    let time = currentTime;
    const id = setInterval(() => {
      time += 1;
      setCurrentTime(time);
    }, 1000);

    return () => {
      localStorage.setItem('Time', String(time));
      clearInterval(id);
    };
  }, []);

  return <div>{changeTimeFormat(currentTime)}</div>;
};

export default Timer;
